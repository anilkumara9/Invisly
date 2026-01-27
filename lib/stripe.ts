// lib/stripe.ts
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey && process.env.NODE_ENV !== 'production') {
  console.warn("STRIPE_SECRET_KEY not set - Stripe integration will not work");
}

// Only initialize Stripe if we have a valid API key
// This prevents build-time errors when env vars aren't available
let stripeInstance: Stripe | null = null;

if (stripeSecretKey) {
  stripeInstance = new Stripe(stripeSecretKey, {
    apiVersion: "2025-10-29.clover",
  });
}

// Export a getter function that throws a helpful error if Stripe isn't configured
export function getStripe(): Stripe {
  if (!stripeInstance) {
    throw new Error('Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.');
  }
  return stripeInstance;
}

// For backward compatibility, export the instance (but it might be null)
export const stripe = stripeInstance;

export default stripe;
