"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Custom hook to persist scroll position across navigations
 * Particularly useful when users navigate to external sites and return
 */
export function useScrollPersistence() {
  const pathname = usePathname();
  const scrollPositions = useRef<Record<string, number>>({});

  useEffect(() => {
    // Load scroll positions from sessionStorage on mount
    const savedPositions = sessionStorage.getItem('scrollPositions');
    if (savedPositions) {
      try {
        scrollPositions.current = JSON.parse(savedPositions);
      } catch (e) {
        console.warn('Failed to parse scroll positions from sessionStorage', e);
        scrollPositions.current = {};
      }
    }

    // Restore scroll position for current path if available
    if (pathname && scrollPositions.current[pathname]) {
      // Small delay to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositions.current[pathname]);
      });
    }

    // Save scroll position before unloading the page
    const saveScrollPosition = () => {
      if (pathname) {
        scrollPositions.current[pathname] = window.scrollY;
        try {
          sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositions.current));
        } catch (e) {
          console.warn('Failed to save scroll positions to sessionStorage', e);
        }
      }
    };

    // Handle page visibility changes (tab switching)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        saveScrollPosition();
      }
    };

    // Handle beforeunload event
    window.addEventListener('beforeunload', saveScrollPosition);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle focus events which might indicate user returning to the page
    const handleFocus = () => {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        if (pathname && scrollPositions.current[pathname]) {
          window.scrollTo(0, scrollPositions.current[pathname]);
        }
      }, 50);
    };

    window.addEventListener('focus', handleFocus);

    // Cleanup
    return () => {
      // Save current scroll position on unmount
      saveScrollPosition();
      window.removeEventListener('beforeunload', saveScrollPosition);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [pathname]);

  // Function to manually save scroll position
  const saveScrollPosition = () => {
    if (pathname) {
      scrollPositions.current[pathname] = window.scrollY;
      try {
        sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositions.current));
      } catch (e) {
        console.warn('Failed to save scroll positions to sessionStorage', e);
      }
    }
  };

  return { saveScrollPosition };
}