'use client';

import { Info } from 'lucide-react';

const companyLogos = [
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Airbnb.svg', alt: 'Airbnb' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Intuit.svg', alt: 'Intuit' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Nike.svg', alt: 'Nike' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Uber.svg', alt: 'Uber' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Amazon.svg', alt: 'Amazon' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/DoorDash.svg', alt: 'DoorDash' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Google.svg', alt: 'Google' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Meta.svg', alt: 'Meta' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Paypal.svg', alt: 'Paypal' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Walmart.svg', alt: 'Walmart' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Apple.svg', alt: 'Apple' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Ebay.svg', alt: 'Ebay' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Hubspot.svg', alt: 'Hubspot' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Microsoft.svg', alt: 'Microsoft' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Wix.svg', alt: 'Wix' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Databricks.svg', alt: 'Databricks' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Figma.svg', alt: 'Figma' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Intel.svg', alt: 'Intel' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Netflix.svg', alt: 'Netflix' },
  { src: 'https://static-web.maxai.photos/images/landing/trusted-by/company/Zoom.svg', alt: 'Zoom' },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Invisily help you to crack your <span className="text-yellow-500">Dream Company</span>
        </h2>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: running;
        }
      `}</style>

      <div className="relative w-full">
        {/* Left shadow */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none opacity-90"></div>
        
        {/* Right shadow */}
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none opacity-90"></div>
        
        <div className="animate-marquee">
          <div className="flex shrink-0 items-center gap-16 px-8">
            {companyLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center h-16 w-40 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain opacity-50 brightness-0 invert hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-16 px-8">
            {companyLogos.map((logo, index) => (
              <div key={`dup-${index}`} className="flex items-center justify-center h-16 w-40 shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-full object-contain opacity-50 brightness-0 invert hover:opacity-80 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;