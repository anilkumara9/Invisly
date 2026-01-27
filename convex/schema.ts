import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(),
    stripeCustomerId: v.optional(v.string()),
    email: v.string(),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_clerk_id", ["clerkId"])
    .index("by_email", ["email"]),

  payments: defineTable({
    userId: v.string(),
    amount: v.number(), // in cents
    currency: v.string(),
    status: v.string(), // succeeded, failed, pending
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
    createdAt: v.number(),
    updatedAt: v.number(),
    metadata: v.optional(v.any()),
  })
    .index("by_user", ["userId"])
    .index("by_stripe_payment_intent", ["stripePaymentIntentId"])
    .index("by_stripe_session", ["stripeSessionId"])
    .index("by_stripe_charge", ["stripeChargeId"]),
});