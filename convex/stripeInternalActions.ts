"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import type Stripe from "stripe";
import { getStripe } from "./lib/stripe";
import { api } from "./_generated/api";

export const processStripeWebhook = internalAction({
    args: {
        signature: v.string(),
        body: v.string(),
    },
    handler: async (ctx, args) => {
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        if (!webhookSecret) {
            throw new Error("STRIPE_WEBHOOK_SECRET is not set");
        }

        const stripe = getStripe();

        let event;
        try {
            event = stripe.webhooks.constructEvent(
                args.body,
                args.signature,
                webhookSecret
            );
        } catch (err: any) {
            console.error(`Webhook signature verification failed: ${err.message}`);
            throw new Error("Invalid signature");
        }

        switch (event.type) {
            case "checkout.session.completed": {
                const session = event.data.object as Stripe.Checkout.Session;
                const clerkUserId = session.metadata?.clerkId;

                if (!clerkUserId) {
                    console.warn("No user ID in metadata");
                    return;
                }

                const user = await ctx.runQuery(api.users.getUserByClerkId, {
                    clerkId: clerkUserId,
                });

                if (!user) {
                    console.warn("User not found");
                    return;
                }

                await ctx.runMutation(api.payments.createPayment, {
                    userId: clerkUserId,
                    amount: session.amount_total || 0,
                    currency: session.currency || 'usd',
                    status: session.payment_status || 'pending',
                    stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : session.payment_intent?.id || '',
                    stripeCustomerId: typeof session.customer === 'string' ? session.customer : session.customer?.id || '',
                    stripeSessionId: session.id,
                    stripeChargeId: undefined,
                    paymentMethodType: session.payment_method_types?.[0],
                    paymentMethodDetails: session.payment_method_options,
                    customerEmail: session.customer_details?.email || undefined,
                    customerName: session.customer_details?.name || undefined,
                    description: '',
                    billingDetails: session.customer_details,
                    metadata: session.metadata,
                });
                break;
            }

            case "payment_intent.succeeded": {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                await ctx.runMutation(api.payments.updatePaymentStatus, {
                    stripePaymentIntentId: paymentIntent.id,
                    status: 'succeeded'
                });
                break;
            }

            case "payment_intent.payment_failed": {
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                await ctx.runMutation(api.payments.updatePaymentStatus, {
                    stripePaymentIntentId: paymentIntent.id,
                    status: 'failed'
                });
                break;
            }
        }
    },
});
