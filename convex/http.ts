import { httpRouter} from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { api } from "./_generated/api";
import { getStripe } from "@/lib/stripe";
import { stripeWebhook } from "./stripeWebhook";

const http = httpRouter();

const clerkwebhook = httpAction(async (ctx, req) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
        console.error("CLERK_WEBHOOK_SECRET not set");
        return new Response("Internal server error", { status: 500 });
    }

    const svix_id = req.headers.get("svix-id");
    const svix_timestamp = req.headers.get("svix-timestamp");
    const svix_signature = req.headers.get("svix-signature");
    if (!svix_id || !svix_timestamp || !svix_signature) {
        console.error("Missing svix headers");
        return new Response("Error occurred -- no svix headers", { status: 400 });
    }
    
    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
        evt = wh.verify(body, {
            "svix-id": svix_id,
            "svix-timestamp": svix_timestamp,
            "svix-signature": svix_signature,
        }) as WebhookEvent;
    } catch (err) {
        console.error("Webhook verification failed:", err);
        return new Response("Error occurred -- invalid svix payload", { status: 400 });
    }

    const eventType = evt.type;
    
    console.log(`Received Clerk webhook event: ${eventType}`);

    if (eventType === 'user.created' || eventType === 'user.updated') {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data;
        
        // Validate required data
        if (!id || !email_addresses || email_addresses.length === 0) {
            console.error("Missing required user data", { id, email_addresses });
            return new Response("Missing required user data", { status: 400 });
        }
        
        const email = email_addresses[0].email_address;
        const name = `${first_name || ''} ${last_name || ''}`.trim();
        
        console.log(`Processing user ${eventType}:`, { id, email, name });

        try {
            // Check if user already exists
            const existingUser = await ctx.runQuery(api.users.getUserByClerkId, { clerkId: id });
            
            if (existingUser) {
                // Update existing user
                console.log(`Updating existing user ${id}`);
                // For now, we're not updating user info, but you could add that here
            } else {
                let stripeCustomerId: string | undefined;
                
                // Only create Stripe customer in production, not locally
                if (process.env.NODE_ENV === 'production' || process.env.STRIPE_SECRET_KEY) {
                    try {
                        // Create a Stripe customer
                        const stripe = getStripe();
                        const customer = await stripe.customers.create({
                            email,
                            name,
                            metadata: { clerkId: id },
                        });
                        stripeCustomerId = customer.id;
                        console.log(`Created Stripe customer ${stripeCustomerId} for user ${id}`);
                    } catch (stripeErr) {
                        console.error('Error creating Stripe customer:', stripeErr);
                        // Continue without Stripe customer ID if creation fails
                    }
                }
                
                // Create user in Convex
                await ctx.runMutation(api.users.createUser, { 
                    clerkId: id, 
                    stripeCustomerId, 
                    email, 
                    name: name || undefined, 
                    imageUrl: image_url || undefined
                });
                
                console.log(`Created new user ${id}` + (stripeCustomerId ? ` with Stripe customer ${stripeCustomerId}` : ' without Stripe customer'));
            }
        } catch (err) {
            console.error('Error processing user:', err);
            return new Response("Error processing user", { status: 500 });
        }

        return new Response("User processed successfully", { status: 200 });
    } else {
        console.log(`Unhandled event type: ${eventType}`);
        return new Response(`Unhandled event type: ${eventType}`, { status: 200 });
    }
});

http.route({
    path: "/clerk-users",
    method: "POST",
    handler : clerkwebhook
})

http.route({
    path: "/stripe/webhook",
    method: "POST",
    handler: stripeWebhook
})

export default http;