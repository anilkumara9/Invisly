"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Logo } from '@/components/logo';

// Content component - contains just the content without dialog wrapper
export function PrivacyContent() {
  return (
    <div className="py-4">
      <div className="mb-6">
        <p className="text-muted-foreground">
          LAST UPDATED: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">1. INFORMATION WE COLLECT</h3>
          <p className="text-muted-foreground mb-3">
            WE COLLECT INFORMATION YOU PROVIDE DIRECTLY TO US, SUCH AS WHEN YOU CREATE AN ACCOUNT, 
            SUBSCRIBE TO OUR NEWSLETTER, OR COMMUNICATE WITH US. THIS PLATFORM IS FOR EDUCATIONAL PURPOSES ONLY.
          </p>
          <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
            <li>ACCOUNT INFORMATION (NAME, EMAIL ADDRESS)</li>
            <li>USAGE DATA (HOW YOU INTERACT WITH OUR SERVICE)</li>
            <li>DEVICE INFORMATION (IP ADDRESS, BROWSER TYPE, OPERATING SYSTEM)</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">2. HOW WE USE YOUR INFORMATION</h3>
          <p className="text-muted-foreground mb-3">
            WE USE THE INFORMATION WE COLLECT TO:
          </p>
          <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
            <li>PROVIDE, MAINTAIN, AND IMPROVE OUR SERVICE FOR EDUCATIONAL PURPOSES</li>
            <li>SEND YOU TECHNICAL NOTICES AND SUPPORT MESSAGES</li>
            <li>RESPOND TO YOUR COMMENTS AND QUESTIONS</li>
            <li>MONITOR AND ANALYZE TRENDS AND USAGE</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">3. INFORMATION SHARING</h3>
          <p className="text-muted-foreground">
            WE DO NOT SELL, TRADE, OR OTHERWISE TRANSFER YOUR PERSONALLY IDENTIFIABLE INFORMATION 
            TO OUTSIDE PARTIES. THIS DOES NOT INCLUDE TRUSTED THIRD PARTIES WHO ASSIST US IN 
            OPERATING OUR WEBSITE, CONDUCTING OUR BUSINESS, OR SERVICING YOU, SO LONG AS THOSE 
            PARTIES AGREE TO KEEP THIS INFORMATION CONFIDENTIAL. THIS PLATFORM IS PROVIDED FOR 
            EDUCATIONAL PURPOSES ONLY.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">4. DATA SECURITY</h3>
          <p className="text-muted-foreground">
            WE IMPLEMENT A VARIETY OF SECURITY MEASURES TO MAINTAIN THE SAFETY OF YOUR PERSONAL 
            INFORMATION. YOUR PERSONAL INFORMATION IS CONTAINED BEHIND SECURED NETWORKS AND IS 
            ONLY ACCESSIBLE BY A LIMITED NUMBER OF PERSONS WHO HAVE SPECIAL ACCESS RIGHTS TO 
            SUCH SYSTEMS.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">5. COOKIES</h3>
          <p className="text-muted-foreground">
            WE USE COOKIES AND SIMILAR TRACKING TECHNOLOGIES TO TRACK THE ACTIVITY ON OUR SERVICE 
            AND HOLD CERTAIN INFORMATION. YOU CAN INSTRUCT YOUR BROWSER TO REFUSE ALL COOKIES OR 
            TO INDICATE WHEN A COOKIE IS BEING SENT.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">6. THIRD-PARTY SERVICES</h3>
          <p className="text-muted-foreground">
            WE MAY EMPLOY THIRD-PARTY COMPANIES AND INDIVIDUALS TO FACILITATE OUR SERVICE, 
            TO PROVIDE THE SERVICE ON OUR BEHALF, TO PERFORM SERVICE-RELATED SERVICES, OR 
            TO ASSIST US IN ANALYZING HOW OUR SERVICE IS USED. THIS PLATFORM IS FOR EDUCATIONAL 
            PURPOSES ONLY.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">7. CHILDREN'S PRIVACY</h3>
          <p className="text-muted-foreground">
            OUR SERVICE DOES NOT ADDRESS ANYONE UNDER THE AGE OF 13. WE DO NOT KNOWINGLY COLLECT 
            PERSONALLY IDENTIFIABLE INFORMATION FROM CHILDREN UNDER 13. IF YOU ARE A PARENT OR 
            GUARDIAN AND YOU ARE AWARE THAT YOUR CHILD HAS PROVIDED US WITH PERSONAL INFORMATION, 
            PLEASE CONTACT US.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">8. DISCLAIMER OF RESPONSIBILITY</h3>
          <p className="text-muted-foreground">
            <span className="text-red-500 font-bold">STRICTLY UNDERSTOOD AND AGREED:</span> THE CREATOR OF THIS PLATFORM AND ALL ASSOCIATED OFFICIALS 
            ARE NOT RESPONSIBLE FOR ANYTHING THAT HAPPENS AS A RESULT OF USING THIS PLATFORM. USERS ASSUME ALL RISKS 
            ASSOCIATED WITH THEIR USE OF THE PLATFORM. THIS INCLUDES, BUT IS NOT LIMITED TO, ANY ACADEMIC, LEGAL, OR 
            PERSONAL CONSEQUENCES THAT MAY ARISE FROM THE USE OF THIS PLATFORM.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">9. ABSOLUTE DISCLAIMER OF RESPONSIBILITY</h3>
          <p className="text-muted-foreground">
            <span className="text-red-500 font-bold">ABSOLUTE AND UNCONDITIONAL DISCLAIMER:</span> AS AN OPEN-SOURCE PROJECT, THE CREATOR OF THIS PLATFORM 
            AND ALL ASSOCIATED OFFICIALS EXPRESSLY DISCLAIM ALL RESPONSIBILITY FOR ANYTHING THAT HAPPENS AS A RESULT OF 
            USING THIS PLATFORM. THIS DISCLAIMER APPLIES TO ALL POSSIBLE SCENARIOS, INCLUDING BUT NOT LIMITED TO:
          </p>
          <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2 mt-2">
            <li>ANY ACADEMIC CONSEQUENCES (INCLUDING BUT NOT LIMITED TO EXPULSION, GRADE REDUCTION, OR DISCIPLINARY ACTION)</li>
            <li>ANY LEGAL CONSEQUENCES (INCLUDING BUT NOT LIMITED TO LAWSUITS, FINES, OR CRIMINAL CHARGES)</li>
            <li>ANY PERSONAL CONSEQUENCES (INCLUDING BUT NOT LIMITED TO RELATIONSHIP ISSUES, EMPLOYMENT TERMINATION, OR PERSONAL LOSS)</li>
            <li>ANY TECHNICAL ISSUES (INCLUDING BUT NOT LIMITED TO DATA LOSS, SYSTEM CRASHES, OR SECURITY BREACHES)</li>
            <li>ANY OTHER CONSEQUENCES WHATSOEVER, NO MATTER HOW MINOR OR MAJOR</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            <span className="text-red-500 font-bold">THE CREATOR CANNOT AND WILL NOT TERMINATE USERS, AS THIS IS AN OPEN-SOURCE PROJECT. USERS ARE SOLELY 
            RESPONSIBLE FOR THEIR ACTIONS AND THE CONSEQUENCES THEREOF.</span>
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">10. NO WARRANTY</h3>
          <p className="text-muted-foreground">
            THIS PLATFORM IS PROVIDED <span className="text-red-500 font-bold">"AS IS"</span> AND <span className="text-red-500 font-bold">"AS AVAILABLE"</span> WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, OR STATUTORY.
            THE CREATOR DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. THE ENTIRE RISK ARISING OUT OF THE USE OR PERFORMANCE 
            OF THE PLATFORM REMAINS WITH YOU.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">11. LIMITATION OF LIABILITY</h3>
          <p className="text-muted-foreground">
            THE CREATOR OF THIS PLATFORM AND ALL ASSOCIATED OFFICIALS EXPRESSLY DISCLAIM ALL WARRANTIES AND 
            CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, 
            THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
          <p className="text-muted-foreground mt-2">
            <span className="text-red-500 font-bold">THE CREATOR AND ALL OFFICIALS ARE NOT RESPONSIBLE FOR ANYTHING THAT HAPPENS AS A RESULT OF USING THIS PLATFORM.</span>
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">12. CHANGES TO PRIVACY POLICY</h3>
          <p className="text-muted-foreground">
            WE MAY UPDATE OUR PRIVACY POLICY FROM TIME TO TIME. WE WILL NOTIFY YOU OF ANY CHANGES 
            BY POSTING THE NEW PRIVACY POLICY ON THIS PAGE AND UPDATING THE "LAST UPDATED" DATE.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">13. CONTACT US</h3>
          <p className="text-muted-foreground">
            IF YOU HAVE ANY QUESTIONS ABOUT THIS PRIVACY POLICY, PLEASE CONTACT US AT EDUCATIONALPRO6@GMAIL.COM.
          </p>
        </section>
      </div>
    </div>
  );
}

// Dialog component - wraps the content in a dialog
export function PrivacyDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  // Prevent background scrolling when dialog is open
  const handleOpenChange = (open: boolean) => {
    if (typeof window === 'undefined') return;
    
    setOpen(open);
    
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
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/90 backdrop-blur-xl border-border/10 p-6">
        <DialogHeader className="flex flex-col items-center gap-4">
          <img 
            src="/invisily1.png" 
            alt="Invisly" 
            className="h-12 w-auto object-contain"
          />
          <DialogTitle className="text-2xl font-bold">PRIVACY POLICY</DialogTitle>
        </DialogHeader>
        
        {/* Using the content component here */}
        <div className="pr-2">
          <PrivacyContent />
        </div>
        
        <div className="flex justify-end mt-4">
          <Button onClick={() => setOpen(false)}>CLOSE</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
