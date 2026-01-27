"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ReactNode, useEffect } from 'react';

interface LegalDialogProps {
  title: string;
  triggerText: string;
  children: ReactNode;
  className?: string;
}

export function LegalDialog({ title, triggerText, children, className }: LegalDialogProps) {
  // Prevent background scrolling when dialog is open
  const handleOpenChange = (open: boolean) => {
    if (typeof window === 'undefined') return;

    if (open) {
      // Check if we've already applied scroll locking to avoid duplicate adjustments
      if (document.body.hasAttribute('data-scroll-lock')) return;

      // Set attribute to track scroll lock state
      document.body.setAttribute('data-scroll-lock', 'true');

      // Get original styles to restore later
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;

      // Store original styles in data attributes
      document.body.setAttribute('data-original-overflow', originalOverflow || '');
      document.body.setAttribute('data-original-padding-right', originalPaddingRight || '');

      // Prevent background scrolling
      document.body.style.overflow = 'hidden';

      // Add padding to compensate for scrollbar removal
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        const originalPadding = parseInt(originalPaddingRight || '0', 10) || 0;
        document.body.style.paddingRight = `${originalPadding + scrollbarWidth}px`;
      }
    } else {
      // Only restore if we're the ones who locked scrolling
      if (!document.body.hasAttribute('data-scroll-lock')) return;

      // Remove scroll lock attribute
      document.body.removeAttribute('data-scroll-lock');

      // Restore original styles
      document.body.style.overflow = document.body.getAttribute('data-original-overflow') || '';
      document.body.style.paddingRight = document.body.getAttribute('data-original-padding-right') || '';

      // Clean up data attributes
      document.body.removeAttribute('data-original-overflow');
      document.body.removeAttribute('data-original-padding-right');
    }
  };

  // Cleanup function to ensure we don't leave styles applied
  useEffect(() => {
    return () => {
      // Cleanup on unmount - only if we applied the lock
      if (document.body.hasAttribute('data-scroll-lock')) {
        document.body.style.overflow = document.body.getAttribute('data-original-overflow') || '';
        document.body.style.paddingRight = document.body.getAttribute('data-original-padding-right') || '';
        document.body.removeAttribute('data-scroll-lock');
        document.body.removeAttribute('data-original-overflow');
        document.body.removeAttribute('data-original-padding-right');
      }
    };
  }, []);

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="link" className={`p-0 h-auto font-normal uppercase font-mono text-foreground/60 hover:text-foreground/100 duration-150 transition-colors ease-out tracking-wider ${className || ''}`}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-6" data-lenis-prevent>
        <DialogHeader className="flex flex-col items-center gap-4">
          <img
            src="/invisily1.png"
            alt="Invisly"
            className="h-12 w-auto object-contain"
          />
          <DialogTitle className="text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="prose prose-invert max-w-none mt-4 pr-2">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}