"use client";

import { PrivacyContent } from "@/components/privacy-content";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
          </div>
          <PrivacyContent />
        </div>
      </div>
    </div>
  );
}