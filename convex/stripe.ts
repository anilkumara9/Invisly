import { v } from "convex/values";
import { mutation } from "./_generated/server";

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
