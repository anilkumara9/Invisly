"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Logo } from '@/components/logo';

// Content component - contains just the content without dialog wrapper
export function TermsContent() {
  return (
    <div className="py-4">
      <div className="mb-6">
        <p className="text-muted-foreground">
          LAST UPDATED: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold mb-3">1. ACCEPTANCE OF TERMS</h3>
          <p className="text-muted-foreground">
            BY ACCESSING OR USING Invisly ("THE SERVICE"), YOU AGREE TO BE BOUND BY THESE TERMS OF SERVICE ("TERMS"). 
            IF YOU DISAGREE WITH ANY PART OF THE TERMS, YOU MAY NOT ACCESS THE SERVICE. THIS PLATFORM IS PROVIDED 
            FOR EDUCATIONAL PURPOSES ONLY.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">2. DESCRIPTION OF SERVICE</h3>
          <p className="text-muted-foreground">
            Invisly IS A STEALTH CODING ASSISTANT APPLICATION DESIGNED TO HELP STUDENTS PREPARE FOR TECHNICAL INTERVIEWS. 
            THE SERVICE PROVIDES REAL-TIME AI CODING ASSISTANCE, SMART SCREENSHOT ANALYSIS, AND COMPREHENSIVE COMPLEXITY BREAKDOWNS.
            THIS PLATFORM IS INTENDED SOLELY FOR EDUCATIONAL AND LEARNING PURPOSES.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">3. EDUCATIONAL USE ONLY</h3>
          <p className="text-muted-foreground">
            THIS PLATFORM IS DESIGNED EXCLUSIVELY FOR EDUCATIONAL PURPOSES TO HELP STUDENTS LEARN AND PRACTICE CODING SKILLS. 
            USERS ARE RESPONSIBLE FOR ENSURING THEIR USE OF THE PLATFORM COMPLIES WITH THEIR INSTITUTION'S ACADEMIC INTEGRITY POLICIES.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">4. USER ACCOUNTS</h3>
          <p className="text-muted-foreground">
            WHEN YOU CREATE AN ACCOUNT WITH US, YOU MUST PROVIDE ACCURATE AND COMPLETE INFORMATION. 
            YOU ARE RESPONSIBLE FOR MAINTAINING THE CONFIDENTIALITY OF YOUR ACCOUNT AND PASSWORD.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">5. PROHIBITED ACTIVITIES</h3>
          <p className="text-muted-foreground mb-3">
            YOU AGREE NOT TO USE THE SERVICE FOR ANY OF THE FOLLOWING ACTIVITIES:
          </p>
          <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
            <li>CHEATING ON EXAMS, TESTS, OR ASSIGNMENTS</li>
            <li>VIOLATING ACADEMIC INTEGRITY POLICIES OF YOUR INSTITUTION</li>
            <li>USING THE SERVICE DURING PROCTORED EXAMINATIONS UNLESS EXPLICITLY PERMITTED</li>
            <li>ANY ACTIVITY THAT VIOLATES APPLICABLE LAWS OR REGULATIONS</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">6. INTELLECTUAL PROPERTY</h3>
          <p className="text-muted-foreground">
            THE SERVICE AND ITS ORIGINAL CONTENT, FEATURES, AND FUNCTIONALITY ARE AND WILL REMAIN THE EXCLUSIVE PROPERTY OF Invisly AND ITS LICENSORS.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">7. DISCLAIMER OF LIABILITY</h3>
          <p className="text-muted-foreground">
            THIS PLATFORM IS PROVIDED FOR EDUCATIONAL PURPOSES ONLY. THE CREATOR OF THIS PLATFORM AND ALL ASSOCIATED OFFICIALS 
            EXPRESSLY DISCLAIM ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, 
            BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">8. LIMITATION OF LIABILITY</h3>
          <p className="text-muted-foreground">
            IN NO EVENT SHALL THE CREATOR OF THIS PLATFORM, NOR ITS OFFICIALS, DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
            OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT 
            LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2 mt-2">
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE</li>
            <li>ANY CONTENT OBTAINED FROM THE SERVICE</li>
            <li>UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
          </ul>
          <p className="text-muted-foreground mt-3">
            <span className="text-red-500 font-bold">THE CREATOR AND ALL OFFICIALS ARE NOT RESPONSIBLE FOR ANYTHING THAT HAPPENS AS A RESULT OF USING THIS PLATFORM.</span>
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">9. NO RESPONSIBILITY CLAUSE</h3>
          <p className="text-muted-foreground">
            <span className="text-red-500 font-bold">STRICTLY UNDERSTOOD AND AGREED:</span> THE CREATOR OF THIS PLATFORM AND ALL ASSOCIATED OFFICIALS 
            ARE NOT RESPONSIBLE FOR ANYTHING THAT HAPPENS AS A RESULT OF USING THIS PLATFORM. USERS ASSUME ALL RISKS 
            ASSOCIATED WITH THEIR USE OF THE PLATFORM. THIS INCLUDES, BUT IS NOT LIMITED TO, ANY ACADEMIC, LEGAL, OR 
            PERSONAL CONSEQUENCES THAT MAY ARISE FROM THE USE OF THIS PLATFORM.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">10. ABSOLUTE DISCLAIMER OF RESPONSIBILITY</h3>
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
          <h3 className="text-xl font-semibold mb-3">11. NO WARRANTY</h3>
          <p className="text-muted-foreground">
            THIS PLATFORM IS PROVIDED <span className="text-red-500 font-bold">"AS IS"</span> AND <span className="text-red-500 font-bold">"AS AVAILABLE"</span> WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS, IMPLIED, OR STATUTORY.
            THE CREATOR DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, 
            FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. THE ENTIRE RISK ARISING OUT OF THE USE OR PERFORMANCE 
            OF THE PLATFORM REMAINS WITH YOU.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">12. TERMINATION</h3>
          <p className="text-muted-foreground">
            WE MAY TERMINATE OR SUSPEND ACCESS TO OUR SERVICE IMMEDIATELY, WITHOUT PRIOR NOTICE OR LIABILITY, 
            FOR ANY REASON WHATSOEVER, INCLUDING WITHOUT LIMITATION IF YOU BREACH THE TERMS.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">13. CHANGES TO TERMS</h3>
          <p className="text-muted-foreground">
            WE RESERVE THE RIGHT, AT OUR SOLE DISCRETION, TO MODIFY OR REPLACE THESE TERMS AT ANY TIME. 
            BY CONTINUING TO ACCESS OR USE OUR SERVICE AFTER THOSE REVISIONS BECOME EFFECTIVE, YOU AGREE TO BE BOUND BY THE REVISED TERMS.
          </p>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold mb-3">14. CONTACT US</h3>
          <p className="text-muted-foreground">
            IF YOU HAVE ANY QUESTIONS ABOUT THESE TERMS, PLEASE CONTACT US AT EDUCATIONALPRO6@GMAIL.COM.
          </p>
        </section>
      </div>
    </div>
  );
}

// Dialog component - wraps the content in a dialog
export function TermsDialog({ children }: { children: React.ReactNode }) {
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
          <DialogTitle className="text-2xl font-bold">TERMS OF SERVICE</DialogTitle>
        </DialogHeader>
        
        {/* Using the content component here */}
        <div className="pr-2">
          <TermsContent />
        </div>
        
        <div className="flex justify-end mt-4">
          <Button onClick={() => setOpen(false)}>CLOSE</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}