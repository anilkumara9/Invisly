"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useScrollPersistence } from "@/hooks/use-scroll-persistence";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const pathname = usePathname();
  const lenisRef = useRef<any>(null);
  const { saveScrollPosition } = useScrollPersistence();

  useEffect(() => {
    // Save current scroll position before route change
    saveScrollPosition();

    // Reset scroll on route change
    if (lenisRef.current?.lenis) {
      lenisRef.current.lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, saveScrollPosition]);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      autoRaf={true}
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        syncTouch: true,
        syncTouchLerp: 0.1,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;