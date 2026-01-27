"use client";

import { useUser } from "@clerk/nextjs";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

interface PaymentButtonProps {
  priceId: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onPaymentStart?: () => void;
  onPaymentSuccess?: () => void;
  onPaymentError?: (error: string) => void;
}

export function PaymentButton({ 
  priceId, 
  children, 
  className, 
  disabled,
  onPaymentStart,
  onPaymentError,
  onPaymentSuccess
}: PaymentButtonProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  // @ts-ignore - temporary fix for type issues
  const createCheckoutSession = useAction(api.stripe.createCheckoutSession);

  // Show loading state while authentication is loading
  useEffect(() => {
    if (!isLoaded) {
      toast.info("Loading authentication...");
    }
  }, [isLoaded]);

  const handlePayment = async () => {
    // If user is not authenticated, show error since this button should only be clickable when signed in
    if (!isLoaded) {
      toast.error("Authentication is still loading. Please try again.");
      return;
    }

    if (!isSignedIn) {
      toast.error("You must be signed in to make a payment");
      return;
    }

    try {
      setIsLoading(true);
      onPaymentStart?.();

      const result = await createCheckoutSession({ priceId, quantity: 1, userId: user?.id });
      
      if (result?.url) {
        // Redirect to Stripe Checkout
        window.location.href = result.url;
      } else {
        throw new Error("Failed to create checkout session");
      }
    } catch (error) {
      console.error("Payment error:", error);
      const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
      toast.error(errorMessage);
      onPaymentError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      className={className}
      disabled={disabled || isLoading || !isLoaded}
    >
      {isLoading ? "Processing..." : children}
    </Button>
  );
}
