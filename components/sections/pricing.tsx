"use client";

import Image from "next/image";
import { Check, Lock } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { PaymentWithAuthModal } from "@/components/ui/payment-with-auth-modal";
import { toast } from "sonner";
import { useState, useEffect } from "react";

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const plans = [
  {
    name: "Pro Plan",
    billing: "One-Time Payment",
    oneTimePrice: "$100",
    description: "Best value for cracking your dream company ",
    features: [
      { text: "Unlimited usage", available: true },
      { text: "Instant Solutions", available: true },
      { text: "FAANG-Level Problems", available: true },
      { text: "24/7 priority support", available: true },
      { text: "Support Advanced AI models", available: true },
      { text: "Proper solutions", available: true },
      { text: "Bring Your Own API key", available: true },
    ],
    cta: "Coming soon",
    featured: true,
    badge: "Best value for cracking your dream company",
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || "price_1SSMLuB0kfnHrNCOh4nnLwoE", // Use env var or fallback
  },
];

export const Pricing = () => {
  const { isLoaded } = useUser();

  if (!isLoaded) {
    return <div className="text-center py-10">Loading authentication...</div>;
  }

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/hand.avif')" }}></div>
      {/* Subtle gradient overlay for professional look */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20 pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">
            Pricing Plans
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-yellow-500">Pricing</span>
          </h2>
          <p className="text-2xl text-[#999]">
            Choose the plan that works best for your needs
          </p>

          {/* Note about pricing */}
          <div className="mt-8">
            <p className="text-yellow-500 text-lg font-medium">
              Pricing Coming Soon
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-[40px] p-8 transition-all duration-300 ${plan.featured
                // ? "bg-[#1a1a1a]"
                // : "bg-[#1a1a1a]"
                }`}
            >
              {/* Featured plan with the new design */}
              <div className="w-full lg:flex-1 lg:min-w-0 lg:max-w-[500px] relative flex flex-col items-start p-4 gap-4 rounded-[40px]"
                style={{ background: "linear-gradient(180deg, #f0b100 0%, rgba(240, 177, 0, 0) 100%)" }}>
                <div className="w-full flex items-center justify-between px-4 py-2">
                  <div className="font-inter font-bold text-lg text-black">{plan.badge}</div>
                </div>
                <div className="w-full flex flex-col p-12 gap-6 bg-[rgba(30,30,30,0.9)] rounded-3xl">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/invisily1.png"
                      alt="Invisly Logo"
                      width={55}
                      height={55}
                      className="rounded-lg" />
                    <span className="font-inter font-semibold text-xl text-[#f0b100]">{plan.name}</span>
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-7xl font-bold text-[#f0b100]">{plan.oneTimePrice}</span>
                      <span className="text-gray-400 text-base">{plan.billing}</span>
                    </div>
                    {/* <div className="mt-2">
                      <span className="text-gray-400 text-base">{plan.description}</span>
                    </div> */}
                  </div>
                  <button
                    onClick={() => toast.info("💎 Pricing Coming Soon! Stay tuned for updates.")}
                    className="w-full py-4 rounded-full font-semibold transition-all bg-gradient-to-b from-[#f0b100] to-[#d8a000] text-black hover:opacity-90 active:scale-[0.98] text-lg"
                  >
                    {plan.cta}
                  </button>
                  <div className="flex items-center gap-2 justify-center">
                    <Lock size={16} className="opacity-70" />
                    <span className="text-white/67 text-base">Secure checkout</span>
                  </div>
                  <div className="flex flex-col gap-4">
                    {plan.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <Check size={22} className="flex-shrink-0 mt-0.5 opacity-90 text-[#f0b100]" />
                        <span className="text-base text-white/80 leading-relaxed">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Updated note */}
      <div className="max-w-3xl mx-auto mt-20 text-center relative z-10">
        <p className="text-white text-xl font-semibold">
          💎 Pricing Coming Soon - Stay Tuned!
        </p>
      </div>
    </section>
  );
};