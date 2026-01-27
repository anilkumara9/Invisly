import React from 'react';

interface ProgressiveBlurProps {
  className?: string;
  direction?: 'left' | 'right';
  blurIntensity?: number;
}

export const ProgressiveBlur: React.FC<ProgressiveBlurProps> = ({
  className = '',
  direction = 'left',
  blurIntensity = 1,
}) => {
  const blurAmount = blurIntensity * 10; // Adjust blur intensity
  
  const maskStyle = direction === 'left' 
    ? {
        maskImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${blurAmount}%)`,
        WebkitMaskImage: `linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${blurAmount}%)`,
      }
    : {
        maskImage: `linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${blurAmount}%)`,
        WebkitMaskImage: `linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,1) ${blurAmount}%)`,
      };
  
  return (
    <div 
      className={`absolute top-0 h-full w-20 pointer-events-none ${className}`}
      style={{
        ...maskStyle,
        backdropFilter: `blur(${blurAmount}px)`,
        WebkitBackdropFilter: `blur(${blurAmount}px)`,
      }}
    />
  );
};