"use client";

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { LegalDialog } from './legal-dialogs';
import { PrivacyContent } from './privacy-content';
import { TermsContent } from './terms-content';
import { UserButton, useUser } from '@clerk/nextjs';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Add scroll direction detection
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide header when scrolling down and past 100px
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setScrollDirection('down');
      }
      // Show header when scrolling up or at the top of the page
      else if (currentScrollY < lastScrollY.current || currentScrollY <= 100) {
        setScrollDirection('up');
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "transition-all duration-500 ease-out max-w-7xl mx-auto mt-4",
            scrolled &&
            "rounded-2xl border border-white/5 bg-black/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] py-2",
            scrollDirection === 'down' && "transform transition-transform duration-300 -translate-y-full opacity-0",
            scrollDirection === 'up' && "transform transition-transform duration-300 translate-y-0 opacity-100"
          )}
        >
          <header className="relative flex items-center justify-between px-2 md:px-4">
            <div className="flex justify-start w-1/12 items-center">
              <Link href="/" className="flex items-center gap-2">
                <img
                  src="/invisily1.png"
                  alt="Invisily"
                  className="h-8 md:h-10 object-contain scale-100 md:scale-105 rounded-lg"
                />
                <span className="text-white font-bold text-xl">Invisly</span>
              </Link>
            </div>
            <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-10">
              {[
                { label: "Documentation", href: "/documentation" },
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
              ].map((item) => (
                <Link
                  className={cn(
                    "uppercase inline-block font-mono text-sm tracking-wider duration-300 transition-all ease-out hover:-translate-y-0.5 relative group px-1 py-2",
                    scrolled
                      ? "text-white/80 hover:text-primary"
                      : "text-white/70 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  )}
                  href={item.href}
                  key={item.label}
                >
                  <span className="relative">
                    {item.label}
                    <span className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full rounded-full",
                      scrolled ? "bg-primary" : "bg-white"
                    )} />
                  </span>
                </Link>
              ))}
            </nav>
            <div className="flex justify-end items-center gap-x-3">
              {/* Login button - only show when not signed in */}
              {!isSignedIn && (
                <Link href="/sign-in">
                  <button className={cn(
                    "uppercase inline-block font-mono duration-300 transition-all ease-out px-4 py-2 text-sm tracking-wide hover:scale-105 active:scale-95",
                    scrolled
                      ? "text-white hover:text-primary"
                      : "text-white/80 hover:text-white"
                  )}>
                    Login
                  </button>
                </Link>
              )}

              {/* Download Dropdown - Always visible */}
              <div ref={dropdownRef} className="relative">
                <button
                  className={cn(
                    "uppercase inline-flex items-center font-mono duration-300 transition-all ease-out px-4 py-2 rounded-xl text-sm tracking-wide bg-yellow-500 text-black font-bold",
                    scrolled
                      ? "hover:bg-yellow-400"
                      : "hover:bg-yellow-400"
                  )}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Download for Free
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-xl border border-white/10 bg-neutral-800/90 backdrop-blur-xl shadow-lg transition-all duration-300 z-50 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <Link href="#" className="flex items-center px-5 py-3 text-sm text-white/90 hover:text-black hover:bg-yellow-500 transition-colors rounded-t-xl">
                    <img src="/icons/image1.png" alt="macOS" className="w-5 h-5 mr-2 filter grayscale" />
                    Get for Mac (Silicon)
                  </Link>
                  <Link href="#" className="flex items-center px-5 py-3 text-sm text-white/90 hover:text-black hover:bg-yellow-500 transition-colors">
                    <img src="/icons/image1.png" alt="macOS" className="w-5 h-5 mr-2 filter grayscale" />
                    Get for Mac (Intel)
                  </Link>
                  <Link href="#" className="flex items-center px-5 py-3 text-sm text-white/90 hover:text-black hover:bg-yellow-500 transition-colors rounded-b-xl">
                    <img src="/icons/windows.png" alt="Windows" className="w-5 h-5 mr-2 filter grayscale" />
                    Get for Windows
                  </Link>
                </div>
              </div>

              {/* User Button - show at the end when signed in */}
              {isSignedIn && (
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: 'h-10 w-10',
                      userButtonPopoverCard: 'backdrop-blur-none bg-background/90 border border-border/50 shadow-lg',
                      userButtonPopoverActionButton: 'text-foreground',
                      userButtonPopoverActionButtonText: 'text-foreground',
                      userButtonPopoverFooter: 'bg-background/80',
                      userPreview: 'text-foreground',
                      userButtonOuterIdentifier: 'text-foreground',
                    }
                  }}
                />
              )}

              {/* Mobile Menu Trigger */}
              <div className="lg:hidden ml-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="p-2 text-white hover:text-primary transition-colors">
                      <Menu className="w-6 h-6" />
                    </button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] bg-black/95 backdrop-blur-xl border-white/10 p-6">
                    <div className="flex flex-col gap-8 mt-10">
                      <div className="flex flex-col gap-6">
                        {[
                          { label: "Documentation", href: "/documentation" },
                          { label: "Features", href: "#features" },
                          { label: "Pricing", href: "#pricing" },
                        ].map((item) => (
                          <SheetClose asChild key={item.label}>
                            <Link
                              href={item.href}
                              className="text-xl font-mono text-white/80 hover:text-primary transition-colors uppercase tracking-wider"
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        ))}
                        <SheetClose asChild>
                          <Link
                            href="/sign-in"
                            className="text-xl font-mono text-white/80 hover:text-primary transition-colors uppercase tracking-wider"
                          >
                            Login
                          </Link>
                        </SheetClose>
                        {/* Mobile Download Options */}
                        <div className="flex flex-col gap-4 pt-6 pb-2">
                          <h3 className="text-lg font-mono text-yellow-500 uppercase tracking-wider font-bold">Download Options</h3>
                          <SheetClose asChild>
                            <Link
                              href="#"
                              className="flex items-center text-base font-mono text-white/90 hover:text-yellow-500 transition-colors py-3 border-b border-white/10"
                            >
                              <img src="/icons/image1.png" alt="macOS" className="w-4 h-4 mr-2 filter grayscale" />
                              Get for Mac (Silicon)
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="#"
                              className="flex items-center text-base font-mono text-white/90 hover:text-yellow-500 transition-colors py-3 border-b border-white/10"
                            >
                              <img src="/icons/image1.png" alt="macOS" className="w-4 h-4 mr-2 filter grayscale" />
                              Get for Mac (Intel)
                            </Link>
                          </SheetClose>
                          <SheetClose asChild>
                            <Link
                              href="#"
                              className="flex items-center text-base font-mono text-white/90 hover:text-yellow-500 transition-colors py-3"
                            >
                              <img src="/icons/windows.png" alt="Windows" className="w-4 h-4 mr-2 filter grayscale" />
                              Get for Windows
                            </Link>
                          </SheetClose>
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>
        </div>
      </div >
    </div >
  )
}