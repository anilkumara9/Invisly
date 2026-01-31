import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

export const stripeWebhook = httpAction(async (ctx, request) => {
  const sig = request.headers.get("stripe-signature");
  const body = await request.text();

  if (!sig || !body) {
    return new Response("Missing signature or body", { status: 400 });
  }

  try {
    await ctx.runAction(internal.stripeInternalActions.processStripeWebhook, {
      signature: sig,
      body: body,
    });
    return new Response("Webhook received", { status: 200 });
  } catch (err: any) {
    console.error("Stripe webhook failed:", err);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }
});