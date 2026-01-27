import React, { useState, useEffect, useRef } from 'react';

interface InfiniteSliderProps {
  children: React.ReactNode;
  speed?: number;
  speedOnHover?: number;
  gap?: number;
  direction?: 'left' | 'right';
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  speed = 30,
  speedOnHover = 10,
  gap = 64,
  direction = 'left',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef<number>(0);
  
  const currentSpeed = speed;
  
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;
    
    // Optimize for performance with Lenis
    container.style.contain = 'layout style';
    content.style.contain = 'layout style';
    
    const animate = (time: number) => {
      if (!container || !content) return;
      
      const contentWidth = content.scrollWidth;
      const halfWidth = contentWidth / 2; // because we duplicate items
      
      // Time-based animation for consistent motion
      const last = lastTimeRef.current ?? time;
      const dt = Math.min(64, time - last); // clamp to avoid large jumps
      lastTimeRef.current = time;
      const delta = (currentSpeed * dt) / 1000; // px per second
      
      if (direction === 'left') {
        offsetRef.current += delta;
        if (offsetRef.current >= halfWidth) {
          offsetRef.current -= halfWidth;
        }
      } else {
        offsetRef.current -= delta;
        if (offsetRef.current < 0) {
          offsetRef.current += halfWidth;
        }
      }
      
      content.style.transform = `translateX(${-offsetRef.current}px)`;
      content.style.willChange = 'transform';
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      // Clean up styles
      if (container) {
        container.style.contain = '';
      }
      if (content) {
        content.style.contain = '';
        content.style.willChange = '';
      }
    };
  }, [currentSpeed, direction]);
  
  return (
    <div 
      ref={containerRef}
      className="overflow-hidden smooth-scroll-optimized"
      style={{ 
        willChange: 'transform',
        contain: 'layout style'
      }}
    >
      <div 
        ref={contentRef}
        className="flex w-max"
        style={{ 
          gap: `${gap}px`, 
          willChange: 'transform',
          contain: 'layout style'
        }}
      >
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
};