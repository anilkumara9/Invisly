"use client";

import { usePathname } from 'next/navigation';
import { useEffect, ReactNode } from 'react';

interface AuthLayoutWrapperProps {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}

export function AuthLayoutWrapper({ children, header, footer }: AuthLayoutWrapperProps) {
  const pathname = usePathname();

  // Check if we're on an authentication page
  const isAuthPage = pathname ? (pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up')) : false;

  useEffect(() => {
    // Add/remove a class to the body when on auth pages
    if (isAuthPage) {
      document.body.classList.add('auth-page');
      // Ensure body can scroll on auth pages
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    } else {
      document.body.classList.remove('auth-page');
      // Ensure body can scroll on landing page
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
      // Force scroll to top when returning to landing page
      window.scrollTo(0, 0);
    }

    // Cleanup function
    return () => {
      document.body.classList.remove('auth-page');
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    };
  }, [isAuthPage]);

  return (
    <>
      {!isAuthPage && header}
      {children}
      {!isAuthPage && footer}
    </>
  );
}