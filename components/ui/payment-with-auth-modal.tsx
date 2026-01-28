"use client";

import { useUser } from "@clerk/nextjs";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

interface PaymentWithAuthModalProps {
  priceId: string;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onPaymentStart?: () => void;
  onPaymentSuccess?: () => void;
  onPaymentError?: (error: string) => void;
}

export function PaymentWithAuthModal({
  priceId,
  children,
  className,
  disabled,
  onPaymentStart,
  onPaymentError,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onPaymentSuccess
}: PaymentWithAuthModalProps) {
  const { isLoaded, isSignedIn, user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const createCheckoutSession = useAction(api.stripe.createCheckoutSession);

  // Show loading state while authentication is loading
  useEffect(() => {
    if (!isLoaded) {
      toast.info("Loading authentication...");
    }
  }, [isLoaded]);

  const handlePayment = async () => {
    // If user is not authenticated, show error
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

  if (!isLoaded) {
    return (
      <Button
        className={className}
        disabled={true}
      >
        Loading...
      </Button>
    );
  }

  if (!isSignedIn) {
    // If user is not signed in, clicking the button will trigger the sign in modal
    // We'll use the same button styling but it will be wrapped with Clerk's SignInButton
    return (
      <SignInButton mode="modal">
        <Button
          className={className}
          disabled={disabled}
        >
          {children}
        </Button>
      </SignInButton>
    );
  }

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