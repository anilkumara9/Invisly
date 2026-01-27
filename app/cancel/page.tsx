"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useScrollPersistence } from "@/hooks/use-scroll-persistence";

export default function CancelPage() {
  const router = useRouter();
  const { saveScrollPosition } = useScrollPersistence();

  useEffect(() => {
    // Perform aggressive cleanup before redirecting
    const cleanupBeforeRedirect = () => {
      // Save current scroll position before redirecting
      saveScrollPosition();
      
      // Reset all body styles
      document.body.style.overflow = 'auto';
      document.body.style.position = 'relative';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.pointerEvents = '';
      
      // Reset html element styles
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.pointerEvents = '';
      document.documentElement.style.position = '';
      
      // Remove modal classes
      const modalClasses = ['modal-open', 'cl-modal-open'];
      modalClasses.forEach(className => {
        if (document.body.classList.contains(className)) {
          document.body.classList.remove(className);
        }
      });
      
      // Remove Stripe elements
      const stripeElements = document.querySelectorAll('.StripeElement, iframe[src*="stripe"], .stripe_checkout_overlay');
      stripeElements.forEach(el => {
        const element = el as HTMLElement;
        element.remove();
      });
      
      // Remove modal elements styles
      const modalElements = document.querySelectorAll('[data-clerk-modal], .cl-modal, .cl-modalWrapper, [role="dialog"]');
      modalElements.forEach(el => {
        const element = el as HTMLElement;
        if (element.style) {
          element.style.position = '';
          element.style.overflow = '';
          element.style.pointerEvents = '';
        }
      });
    };

    // Redirect to the main landing page after 3 seconds
    const timer = setTimeout(() => {
      cleanupBeforeRedirect();
      router.push("/");
    }, 3000);

    // Clean up timer on unmount
    return () => {
      clearTimeout(timer);
    };
  }, [router, saveScrollPosition]);

  const handleRedirectNow = () => {
    // Save current scroll position before redirecting
    saveScrollPosition();
    
    // Perform cleanup before immediate redirect
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
    // Remove modal classes
    if (document.body.classList.contains('modal-open')) {
      document.body.classList.remove('modal-open');
    }
    // Remove Stripe elements
    const stripeElements = document.querySelectorAll('.StripeElement, iframe[src*="stripe"], .stripe_checkout_overlay');
    stripeElements.forEach(el => {
      const element = el as HTMLElement;
      element.remove();
    });
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center p-8 bg-gray-900 rounded-lg">
        <h1 className="text-3xl font-bold text-white mb-4">Payment Cancelled</h1>
        <p className="text-gray-300 mb-6">
          Your payment was cancelled. You will be redirected to the main page in 3 seconds.
        </p>
        <button
          onClick={handleRedirectNow}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
        >
          Go to Main Page Now
        </button>
      </div>
    </div>
  );
}