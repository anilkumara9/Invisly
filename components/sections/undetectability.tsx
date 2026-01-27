"use client";

import { Shield, Eye, Zap, Lock } from 'lucide-react';

const Undetectability = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Encryption",
      description: "All data is encrypted with AES-256 encryption, the same standard used by the US government for classified information."
    },
    {
      icon: Eye,
      title: "Zero Detection Risk",
      description: "Our proprietary cloaking technology ensures zero footprint, making detection virtually impossible by any monitoring system."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed without compromising security, delivering seamless performance even under heavy load."
    },
    {
      icon: Lock,
      title: "Secure By Design",
      description: "Built with security-first principles, implementing multiple layers of protection against all known attack vectors."
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4">
            <Shield className="w-4 h-4" />
            Unbreakable Security
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Undetectable. Untraceable. Unhackable.
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Invisly employs cutting-edge stealth technology that keeps you completely hidden from prying eyes while maintaining peak performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-yellow-500/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-gradient-to-br from-yellow-500 to-yellow-300 rounded-lg">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300">
            Learn About Our Security
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Undetectability;