import { ConvexError, v } from "convex/values";
import { action, mutation } from "./_generated/server"; // Import both action and mutation
import stripe from "@/lib/stripe";
import { api } from "./_generated/api";

// Mutation to update user with Stripe customer ID
// @ts-ignore
export const updateUserWithStripeId = mutation({
  args: {
    userId: v.id("users"),
    stripeCustomerId: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.userId, {
      stripeCustomerId: args.stripeCustomerId,
      updatedAt: Date.now(),
    });
    return args.stripeCustomerId;
  },
});

// @ts-ignore
export const createCheckoutSession = action({ // Changed from mutation to action
  args: {
    priceId: v.string(),
    quantity: v.optional(v.number()),
    userId: v.optional(v.string()) // Add optional userId parameter
  },
  // @ts-ignore
  handler: async (ctx, args) => {
    // Debug logging to see what's happening with authentication
    console.log("Checking user authentication...");

    let identity = await ctx.auth.getUserIdentity();
    console.log("Identity:", identity);
    console.log("Context auth:", ctx.auth);

    // Additional debugging
    if (identity) {
      console.log("Identity subject:", identity.subject);
    }

    // If we don't have identity from auth, but have userId passed explicitly, try to get user directly
    let user = null;
    if (!identity && args.userId) {
      console.log("No identity from auth, but userId provided, querying user directly");
      // @ts-ignore
      user = await ctx.runQuery(api.users.getUserByClerkId, {
        clerkId: args.userId,
      });
      console.log("User found by userId:", user);
    } else if (identity) {
      // @ts-ignore
      user = await ctx.runQuery(api.users.getUserByClerkId, {
        clerkId: identity.subject,
      });
      console.log("User found by identity:", user);
    }

    if (!user) {
      console.log("No user found, throwing authentication error");
      throw new ConvexError("User not authenticated - No identity found. Please ensure you are logged in and try again.");
    }

    // Validate price ID format
    if (!args.priceId || !args.priceId.startsWith('price_')) {
      console.error("Invalid price ID format:", args.priceId);
      throw new ConvexError("Invalid price configuration. Price ID must start with 'price_'.");
    }

    // Set default quantity to 1 if not provided
    const quantity = args.quantity || 1;

    // Create or retrieve Stripe customer
    // @ts-ignore
    let stripeCustomerId = user.stripeCustomerId;
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        name: user.name || undefined,
        metadata: {
          convexUserId: user._id,
          clerkId: user.clerkId,
        },
      });
      stripeCustomerId = customer.id;

      // Update user with Stripe customer ID using mutation
      // @ts-ignore
      await ctx.runMutation(api.stripe.updateUserWithStripeId, {
        userId: user._id,
        stripeCustomerId: customer.id,
      });
    }

    try {
      // @ts-ignore
      const session = await stripe.checkout.sessions.create({
        customer: stripeCustomerId,
        payment_method_types: ["card"],
        line_items: [
          {
            price: args.priceId,
            quantity: quantity,
          },
        ],
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
        metadata: {
          userId: user._id,
          clerkId: user.clerkId,
          priceId: args.priceId,
        },
      });

      return { url: session.url, sessionId: session.id };
    } catch (error: any) {
      console.error("Error creating checkout session:", error);
      // Provide a more user-friendly error message for common Stripe errors
      if (error.type === "StripeInvalidRequestError" && error.code === "resource_missing") {
        throw new ConvexError("Invalid price configuration. Please check that the price ID is correct and the product is active in Stripe.");
      }

      // Handle specific Stripe error types
      if (error.type === "StripeCardError") {
        throw new ConvexError(`Card error: ${error.message}`);
      }

      if (error.type === "StripeRateLimitError") {
        throw new ConvexError("Too many requests. Please wait a moment and try again.");
      }

      if (error.type === "StripeInvalidGrantError") {
        throw new ConvexError("Payment service error. Please try again later.");
      }

      if (error.type === "StripeAPIError") {
        throw new ConvexError("Payment service temporarily unavailable. Please try again later.");
      }

      if (error.type === "StripeConnectionError") {
        throw new ConvexError("Network error connecting to payment service. Please check your connection and try again.");
      }

      if (error.type === "StripeAuthenticationError") {
        throw new ConvexError("Payment service authentication error. Please contact support.");
      }

      // Handle network timeout errors
      if (error.code === 'ETIMEDOUT' || error.code === 'ENOTFOUND') {
        throw new ConvexError("Network timeout connecting to payment service. Please check your connection and try again.");
      }

      // Handle Stripe rate limit errors
      if (error.statusCode === 429) {
        throw new ConvexError("Too many requests to payment service. Please wait a moment and try again.");
      }

      // Handle general Stripe API errors
      if (error.statusCode >= 500) {
        throw new ConvexError("Payment service temporarily unavailable. Please try again later.");
      }

      throw new ConvexError("Failed to create checkout session: " + (error.message || "Unknown error occurred"));
    }
  },
});
