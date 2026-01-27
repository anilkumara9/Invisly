import { useEffect, useState } from 'react';

/**
 * Hook to detect if the user is on a desktop device
 * Returns true for desktop devices, false for mobile/tablet
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // Define our desktop detection logic
      const checkIsDesktop = () => {
        // Simple approach: if screen width is greater than 1024, consider it desktop
        // This can be enhanced based on more sophisticated device detection
        return window.innerWidth >= 1024;
      };

      // Set initial value
      setIsDesktop(checkIsDesktop());

      // Add resize listener to update on window resize
      const handleResize = () => {
        setIsDesktop(checkIsDesktop());
      };

      window.addEventListener('resize', handleResize);

      // Cleanup listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return isDesktop;
}