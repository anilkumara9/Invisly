import { httpAction } from "./_generated/server";
import Stripe from "stripe";
import { api } from "./_generated/api";

export const stripeWebhook = httpAction(async (ctx, request) => {
  const sig = request.headers.get("stripe-signature");
  const body = await request.text();

  // Validate required headers and body
  if (!sig) {
    console.error("Missing stripe-signature header");
    return new Response("Missing stripe-signature header", { status: 400 });
  }

  if (!body) {
    console.error("Empty webhook body");
    return new Response("Empty webhook body", { status: 400 });
  }

  // Validate required environment variables
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET not set");
    return new Response("Internal server error", { status: 500 });
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    console.warn("STRIPE_SECRET_KEY not set - Stripe integration will not work");
    return new Response("Internal server error: Stripe configuration missing", { status: 500 });
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: "2025-10-29.clover",
  });

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig,
      webhookSecret
    );

    // 🧾 Handle different event types
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // Get user IDs from metadata
        const clerkUserId = session.metadata?.clerkId;

        // Log the incoming session for debugging
        console.log('Processing checkout.session.completed webhook', {
          sessionId: session.id,
          clerkUserId,
          customer: session.customer,
          amount: session.amount_total,
          currency: session.currency,
          status: session.payment_status,
          mode: session.mode
        });

        if (!clerkUserId) {
          console.error('No user ID found in session metadata', {
            sessionId: session.id,
            metadata: session.metadata
          });
          // Don't fail the webhook for missing metadata - just log and continue
          // This prevents issues with manual Stripe testing
          return new Response('Webhook received but no user ID in metadata', { status: 200 });
        }

        // Get the user from Convex
        const user = await ctx.runQuery(api.users.getUserByClerkId, {
          clerkId: clerkUserId,
        });

        if (!user) {
          console.warn('User not found in Convex for payment session', { clerkUserId, sessionId: session.id });
          // Don't fail the webhook if user not found - payment was still processed by Stripe
          return new Response('Webhook received but user not found', { status: 200 });
        }

        try {
          // ✅ Store payment info in Convex DB using a mutation
          // Use clerkUserId as the userId to maintain consistency with Clerk authentication
          const paymentRecord = await ctx.runMutation(api.payments.createPayment, {
            userId: clerkUserId, // Clerk user ID for consistency with authentication system
            amount: session.amount_total || 0,
            currency: session.currency || 'usd',
            status: session.payment_status || 'pending',
            stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id || '',
            stripeCustomerId: typeof session.customer === 'string' ? session.customer : session.customer?.id || '',
            stripeSessionId: session.id,
            stripeChargeId: undefined, // Will be updated when payment_intent.succeeded event is received
            paymentMethodType: session.payment_method_types?.[0],
            paymentMethodDetails: session.payment_method_options,
            customerEmail: session.customer_details?.email ? session.customer_details.email : undefined,
            customerName: session.customer_details?.name ? session.customer_details.name : undefined,
            description: session.payment_intent && typeof session.payment_intent !== 'string' ?
              session.payment_intent.description || '' : '',
            receiptUrl: undefined, // Will be updated when payment_intent.succeeded event is received
            billingDetails: session.customer_details,
            metadata: {
              sessionId: session.id,
              priceId: session.metadata?.priceId,
              customerEmail: session.customer_details?.email,
              paymentMethodTypes: session.payment_method_types,
              mode: session.mode,
              paymentStatus: session.payment_status,
            },
          });

          console.log('Payment record created successfully', {
            paymentId: paymentRecord,
            sessionId: session.id,
            userId: clerkUserId,
            amount: session.amount_total,
            status: session.payment_status
          });
        } catch (error) {
          console.error('Error creating payment record:', error);
          // Don't return an error response here as the payment was already processed successfully by Stripe
          // Just log the error and continue to avoid webhook retry attempts
        }

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update payment status if it exists
        console.log(`PaymentIntent ${paymentIntent.id} succeeded`);

        // Try to update the payment record in our database
        try {
          // Update the status and additional details in one mutation
          await ctx.runMutation(api.payments.updatePaymentStatus, {
            stripePaymentIntentId: paymentIntent.id,
            status: 'succeeded'
          });

          console.log(`Payment record updated for PaymentIntent ${paymentIntent.id}`);
        } catch (error) {
          console.error(`Error updating payment record for PaymentIntent ${paymentIntent.id}:`, error);
        }

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;

        // Update payment status if it exists
        console.log(`PaymentIntent ${paymentIntent.id} failed`);

        // Try to update the payment record in our database
        try {
          await ctx.runMutation(api.payments.updatePaymentStatus, {
            stripePaymentIntentId: paymentIntent.id,
            status: 'failed'
          });
          console.log(`Payment record updated for PaymentIntent ${paymentIntent.id}`);
        } catch (error) {
          console.error(`Error updating payment record for PaymentIntent ${paymentIntent.id}:`, error);
        }

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err: unknown) {
    const error = err as Error;
    console.error("❌ Webhook error:", error);

    // Log more detailed error information
    if (err instanceof Error) {
      console.error("Error details:", {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
    }

    // Return appropriate error response based on error type
    if (err instanceof SyntaxError) {
      return new Response("Invalid JSON in webhook payload", { status: 400 });
    }

    if (err instanceof Stripe.errors.StripeSignatureVerificationError) {
      return new Response("Invalid webhook signature", { status: 401 });
    }

    if (err instanceof Stripe.errors.StripeConnectionError) {
      console.error("Stripe connection error - may need to retry");
      return new Response("Temporary connection error", { status: 503 });
    }

    // Handle Stripe rate limiting
    if (err instanceof Stripe.errors.StripeRateLimitError) {
      console.error("Stripe rate limit exceeded");
      return new Response("Rate limit exceeded", { status: 429 });
    }

    // Handle general Stripe errors
    if (err instanceof Stripe.errors.StripeError) {
      console.error("Stripe error:", err.type, err.message);
      return new Response(`Stripe error: ${err.message}`, { status: 400 });
    }

    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return new Response(`Webhook processing failed: ${errorMessage}`, { status: 500 });
  }
});