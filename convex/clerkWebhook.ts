"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { api, internal } from "./_generated/api";
import { getStripe } from "./lib/stripe";

export const verifyAndProcessClerkWebhook = internalAction({
    args: {
        body: v.string(),
        headers: v.any(),
    },
    handler: async (ctx, args) => {
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if (!webhookSecret) {
            console.error("CLERK_WEBHOOK_SECRET not set");
            throw new Error("Internal server error");
        }

        const svix_id = args.headers["svix-id"];
        const svix_timestamp = args.headers["svix-timestamp"];
        const svix_signature = args.headers["svix-signature"];

        if (!svix_id || !svix_timestamp || !svix_signature) {
            console.error("Missing svix headers");
            throw new Error("Missing svix headers");
        }

        const wh = new Webhook(webhookSecret);
        let evt: WebhookEvent;

        try {
            evt = wh.verify(args.body, {
                "svix-id": svix_id,
                "svix-timestamp": svix_timestamp,
                "svix-signature": svix_signature,
            }) as WebhookEvent;
        } catch (err) {
            console.error("Webhook verification failed:", err);
            throw new Error("Invalid svix payload");
        }

        const eventType = evt.type;
        console.log(`Received Clerk webhook event: ${eventType}`);

        if (eventType === 'user.created' || eventType === 'user.updated') {
            const { id, email_addresses, first_name, last_name, image_url } = evt.data;

            if (!id || !email_addresses || email_addresses.length === 0) {
                console.error("Missing required user data", { id, email_addresses });
                throw new Error("Missing required user data");
            }

            const email = email_addresses[0].email_address;
            const name = `${first_name || ''} ${last_name || ''}`.trim();

            try {
                const existingUser = await ctx.runQuery(api.users.getUserByClerkId, { clerkId: id });

                if (!existingUser) {
                    let stripeCustomerId: string | undefined;

                    if (process.env.NODE_ENV === 'production' || process.env.STRIPE_SECRET_KEY) {
                        try {
                            const stripe = getStripe();
                            const customer = await stripe.customers.create({
                                email,
                                name,
                                metadata: { clerkId: id },
                            });
                            stripeCustomerId = customer.id;
                        } catch (stripeErr) {
                            console.error('Error creating Stripe customer:', stripeErr);
                        }
                    }

                    await ctx.runMutation(api.users.createUser, {
                        clerkId: id,
                        stripeCustomerId,
                        email,
                        name: name || undefined,
                        imageUrl: image_url || undefined
                    });

                    if (eventType === 'user.created') {
                        await ctx.runAction(internal.emails.sendWelcomeEmail, {
                            email,
                            name: name || "User",
                        });
                    }
                }
            } catch (err) {
                console.error('Error processing user:', err);
                throw new Error("Error processing user");
            }
        }

        return { success: true };
    },
});
