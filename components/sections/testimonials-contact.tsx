"use client";

import { Testimonials } from "@/components/ui/testimonials-columns-1";

export const TestimonialsContactSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-black -mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <Testimonials />
        </div>
      </div>
    </section>
  );
};