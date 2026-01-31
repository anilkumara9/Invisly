"use node";

import { ConvexError, v } from "convex/values";
import { action } from "./_generated/server";
import { getStripe } from "./lib/stripe";
import { api } from "./_generated/api";

export const createCheckoutSession = action({
    args: {
        priceId: v.string(),
        quantity: v.optional(v.number()),
        userId: v.optional(v.string())
    },
    handler: async (ctx, args) => {
        const stripe = getStripe();
        console.log("Checking user authentication...");

        let identity = await ctx.auth.getUserIdentity();
        let user: any = null;

        if (!identity && args.userId) {
            user = await ctx.runQuery(api.users.getUserByClerkId, {
                clerkId: args.userId,
            });
        } else if (identity) {
            user = await ctx.runQuery(api.users.getUserByClerkId, {
                clerkId: identity.subject,
            });
        }

        if (!user) {
            throw new ConvexError("User not authenticated. Please log in.");
        }

        if (!args.priceId || !args.priceId.startsWith('price_')) {
            throw new ConvexError("Invalid price configuration. Price ID must start with 'price_'.");
        }

        const quantity = args.quantity || 1;
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

            await ctx.runMutation(api.stripe.updateUserWithStripeId, {
                userId: user._id,
                stripeCustomerId: customer.id,
            });
        }

        try {
            const session = await stripe.checkout.sessions.create({
                customer: stripeCustomerId,
                payment_method_types: ["card"],
                line_items: [{ price: args.priceId, quantity }],
                mode: "payment",
                success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://invisly.in'}/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'https://invisly.in'}/cancel`,
                metadata: {
                    userId: user._id,
                    clerkId: user.clerkId,
                    priceId: args.priceId,
                },
            });

            return { url: session.url, sessionId: session.id };
        } catch (error: any) {
            console.error("Error creating checkout session:", error);
            throw new ConvexError(error.message || "Failed to create checkout session");
        }
    },
});
