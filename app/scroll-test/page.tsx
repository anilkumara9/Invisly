"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollTestPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Scroll Persistence Test</h1>
        <p className="mb-4">Current scroll position: {scrollPosition}px</p>
        
        <div className="mb-8">
          <Link 
            href="https://google.com" 
            target="_blank"
            className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Visit External Site (Google)
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Click this link to go to an external site. When you use the back button to return, 
            the scroll position should be preserved.
          </p>
        </div>

        <div className="space-y-8">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="p-6 bg-secondary rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Section {i + 1}</h2>
              <p className="text-muted-foreground">
                This is test content to make the page scrollable. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}