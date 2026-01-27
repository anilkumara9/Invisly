// lib/stripe.ts
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  console.warn("STRIPE_SECRET_KEY not set - Stripe integration will not work");
}

export const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: "2025-09-30.clover",
});

export default stripe;
