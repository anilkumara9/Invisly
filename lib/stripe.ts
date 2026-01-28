// lib/stripe.ts
import Stripe from 'stripe';

// Use lazy initialization to avoid build-time errors
let stripeInstance: Stripe | null = null;

// Lazy initialization function
function initializeStripe(): Stripe | null {
  if (stripeInstance) {
    return stripeInstance;
  }

  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeSecretKey) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn("STRIPE_SECRET_KEY not set - Stripe integration will not work");
    }
    return null;
  }

  stripeInstance = new Stripe(stripeSecretKey, {
    apiVersion: "2025-10-29.clover",
  });

  return stripeInstance;
}

// Export a getter function that initializes Stripe on first use
export function getStripe(): Stripe {
  const stripe = initializeStripe();
  if (!stripe) {
    throw new Error('Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.');
  }
  return stripe;
}

// For backward compatibility, export a getter that returns null if not configured
export const getStripeOrNull = (): Stripe | null => {
  return initializeStripe();
};

export default getStripeOrNull;
