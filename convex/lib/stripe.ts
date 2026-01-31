import Stripe from "stripe";

export const getStripe = () => {
    const apiKey = process.env.STRIPE_SECRET_KEY;
    if (!apiKey) {
        throw new Error("STRIPE_SECRET_KEY is not set");
    }
    return new Stripe(apiKey, {
        apiVersion: "2025-10-29.clover" as any,
    });
};
