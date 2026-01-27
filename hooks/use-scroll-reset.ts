import { useEffect } from 'react';

/**
 * Custom hook to reset scroll and modal states
 * Should be used in pages that might be accessed after modal interactions
 */
export function useScrollReset() {
  useEffect(() => {
    // Clean up function to reset scroll and modal states
    const resetScrollAndModalStates = () => {
      // Reset body styles that might block scrolling
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.body.style.pointerEvents = '';
      document.body.style.scrollSnapType = 'none';
      document.body.style.transform = '';
      document.body.style.willChange = '';
      
      // Reset html element styles
      document.documentElement.style.overflow = '';
      document.documentElement.style.pointerEvents = '';
      document.documentElement.style.position = '';
      document.documentElement.style.scrollSnapType = 'none';
      document.documentElement.style.transform = '';
      document.documentElement.style.willChange = '';
      
      // Remove common modal-related classes
      const modalClasses = ['modal-open', 'cl-modal-open'];
      modalClasses.forEach(className => {
        if (document.body.classList.contains(className)) {
          document.body.classList.remove(className);
        }
      });
      
      // More targeted approach to remove modal blocking elements
      // Instead of querying all elements, only target known modal elements
      const modalElements = document.querySelectorAll('[data-clerk-modal], .cl-modal, .cl-modalWrapper, [role="dialog"]');
      modalElements.forEach(el => {
        const element = el as HTMLElement;
        if (element.style) {
          // Remove fixed positioning that blocks scrolling
          if (element.style.position === 'fixed') {
            element.style.position = '';
          }
          // Remove overflow hidden
          if (element.style.overflow === 'hidden') {
            element.style.overflow = '';
          }
          // Remove pointer events that block interaction
          if (element.style.pointerEvents === 'none') {
            element.style.pointerEvents = '';
          }
          // Remove scroll snap alignment
          if (element.style.scrollSnapAlign) {
            element.style.scrollSnapAlign = '';
          }
          // Remove transform properties that might affect layout
          if (element.style.transform) {
            element.style.transform = '';
          }
          // Remove will-change properties that might affect performance
          if (element.style.willChange) {
            element.style.willChange = '';
          }
        }
      });
      
      // Stripe-specific cleanup - remove any overlays or iframes that might block scrolling
      const stripeElements = document.querySelectorAll('.StripeElement, iframe[src*="stripe"], .stripe_checkout_overlay');
      stripeElements.forEach(el => {
        const element = el as HTMLElement;
        element.remove();
      });
      
      // Ensure the body is scrollable
      document.body.style.overflow = 'auto';
      
      // Force scroll reset
      window.scrollTo(0, 0);
    };
    
    // Run the reset immediately
    resetScrollAndModalStates();
    
    // Run again after a short delay to catch any delayed modal elements
    const timeoutId = setTimeout(resetScrollAndModalStates, 100);
    
    // Additional delayed reset for Stripe checkout scenarios
    const stripeTimeoutId = setTimeout(resetScrollAndModalStates, 500);
    
    // Special handling for returning from payment pages
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        // Page was restored from cache, ensure scroll is reset
        setTimeout(resetScrollAndModalStates, 50);
        setTimeout(resetScrollAndModalStates, 200);
        // Final cleanup to ensure we're not stuck
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
          window.scrollTo(0, 0);
        }, 300);
      }
    };
    
    // Handle focus events which might indicate user returning to the page
    const handleFocus = () => {
      // Small delay to ensure DOM is ready
      setTimeout(resetScrollAndModalStates, 100);
    };
    
    // Handle visibility change (tab switching)
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        // When returning to the tab, ensure scroll is properly restored
        setTimeout(resetScrollAndModalStates, 50);
        setTimeout(() => {
          document.body.style.overflow = 'auto';
          document.documentElement.style.overflow = 'auto';
        }, 100);
      }
    };
    
    // Aggressive reset to ensure we're not stuck
    const aggressiveReset = () => {
      // Reset all overflow properties
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        if (element.style) {
          // Remove any fixed positioning that might be blocking scroll
          if (element.style.position === 'fixed' && 
              element.style.top === '0px' && 
              element.style.left === '0px' && 
              element.style.width === '100%' && 
              element.style.height === '100%') {
            element.style.position = 'relative';
          }
          // Reset overflow properties
          element.style.overflow = '';
          // Reset transform properties
          element.style.transform = '';
        }
      });
      
      // Ensure document and body are scrollable
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.position = 'relative';
      
      // Force scroll to top
      window.scrollTo(0, 0);
    };
    
    // Run aggressive reset after a delay
    const aggressiveResetId = setTimeout(aggressiveReset, 1000);
    
    window.addEventListener('pageshow', handlePageShow);
    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      clearTimeout(stripeTimeoutId);
      clearTimeout(aggressiveResetId);
      window.removeEventListener('pageshow', handlePageShow);
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      resetScrollAndModalStates();
    };
  }, []);
}