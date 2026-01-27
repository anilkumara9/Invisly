"use client";

import { PaymentButton } from "@/components/ui/payment-button";

export default function TestPaymentPage() {
  // Use the environment variable for consistency
  const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || "price_1SSMLuB0kfnHrNCOh4nnLwoE";
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8 bg-gray-900 rounded-lg">
        <h1 className="text-3xl font-bold text-white mb-6">Test Payment</h1>
        <p className="text-gray-300 mb-6">
          Click the button below to test the Stripe payment integration.
        </p>
        <PaymentButton 
          priceId={priceId}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded"
        >
          Test Payment ($100)
        </PaymentButton>
        <p className="text-gray-400 text-sm mt-4">
          Current price ID: {priceId}
        </p>
      </div>
    </div>
  );
}