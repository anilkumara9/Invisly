import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createPayment = mutation({
  args: {
    userId: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.string(),
    stripePaymentIntentId: v.string(),
    stripeCustomerId: v.string(),
    stripeSessionId: v.optional(v.string()),
    stripeChargeId: v.optional(v.string()),
    paymentMethodType: v.optional(v.string()),
    paymentMethodDetails: v.optional(v.any()),
    billingDetails: v.optional(v.any()),
    customerEmail: v.optional(v.string()),
    customerName: v.optional(v.string()),
    description: v.optional(v.string()),
    receiptUrl: v.optional(v.string()),
    metadata: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    // Validate required fields
    if (args.amount <= 0) {
      throw new ConvexError("Payment amount must be greater than zero");
    }

    if (!args.currency) {
      throw new ConvexError("Currency is required");
    }

    if (!args.stripePaymentIntentId) {
      throw new ConvexError("Stripe Payment Intent ID is required");
    }

    if (!args.stripeCustomerId) {
      throw new ConvexError("Stripe Customer ID is required");
    }

    try {
      const paymentId = await ctx.db.insert("payments", {
        userId: args.userId,
        amount: args.amount,
        currency: args.currency.toLowerCase(), // Normalize currency to lowercase
        status: args.status.toLowerCase(), // Normalize status to lowercase
        stripePaymentIntentId: args.stripePaymentIntentId,
        stripeCustomerId: args.stripeCustomerId,
        stripeSessionId: args.stripeSessionId,
        stripeChargeId: args.stripeChargeId,
        paymentMethodType: args.paymentMethodType,
        paymentMethodDetails: args.paymentMethodDetails,
        billingDetails: args.billingDetails,
        customerEmail: args.customerEmail ? args.customerEmail.toLowerCase() : undefined, // Normalize email to lowercase
        customerName: args.customerName,
        description: args.description,
        receiptUrl: args.receiptUrl,
        metadata: args.metadata,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      console.log(`Created payment record with ID: ${paymentId}`);
      return paymentId;
    } catch (error: unknown) {
      console.error("Error creating payment record:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new ConvexError("Failed to create payment record: " + errorMessage);
    }
  },
});

export const getPaymentsByUserId = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_user", q => q.eq("userId", args.userId))
      .collect();
  },
});

export const getPaymentByStripeId = query({
  args: {
    stripePaymentIntentId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_stripe_payment_intent", q => q.eq("stripePaymentIntentId", args.stripePaymentIntentId))
      .unique();
  },
});

export const getPaymentBySessionId = query({
  args: {
    stripeSessionId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_stripe_session", q => q.eq("stripeSessionId", args.stripeSessionId))
      .unique();
  },
});

export const getPaymentByChargeId = query({
  args: {
    stripeChargeId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("payments")
      .withIndex("by_stripe_charge", q => q.eq("stripeChargeId", args.stripeChargeId))
      .unique();
  },
});

export const updatePaymentStatus = mutation({
  args: {
    stripePaymentIntentId: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    // Validate inputs
    if (!args.stripePaymentIntentId) {
      throw new ConvexError("Stripe Payment Intent ID is required");
    }

    if (!args.status) {
      throw new ConvexError("Status is required");
    }

    try {
      // Find the payment by stripePaymentIntentId
      const payment = await ctx.db
        .query("payments")
        .withIndex("by_stripe_payment_intent", q => q.eq("stripePaymentIntentId", args.stripePaymentIntentId))
        .unique();

      if (!payment) {
        console.warn(`Payment not found for PaymentIntent ID: ${args.stripePaymentIntentId}`);
        return null; // Return null instead of throwing error to prevent webhook retries
      }

      // Update the payment status
      await ctx.db.patch(payment._id, {
        status: args.status.toLowerCase(), // Normalize status to lowercase
        updatedAt: Date.now(),
      });

      console.log(`Updated payment ${payment._id} status to ${args.status}`);
      return payment._id;
    } catch (error: unknown) {
      console.error("Error updating payment status:", error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new ConvexError("Failed to update payment status: " + errorMessage);
    }
  },
});