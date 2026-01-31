import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import { stripeWebhook } from "./stripeWebhook";

const http = httpRouter();

http.route({
    path: "/clerk-users",
    method: "POST",
    handler: httpAction(async (ctx, req) => {
        const body = await req.text();
        const headers = {
            "svix-id": req.headers.get("svix-id"),
            "svix-timestamp": req.headers.get("svix-timestamp"),
            "svix-signature": req.headers.get("svix-signature"),
        };

        try {
            await ctx.runAction(internal.clerkWebhook.verifyAndProcessClerkWebhook, {
                body,
                headers,
            });
            return new Response(null, { status: 200 });
        } catch (err) {
            console.error("Clerk webhook failed:", err);
            return new Response("Webhook processing failed", { status: 400 });
        }
    }),
})

http.route({
    path: "/stripe/webhook",
    method: "POST",
    handler: stripeWebhook
})

export default http;