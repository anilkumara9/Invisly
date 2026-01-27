"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const IntegrationsSection = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const tools = [
    { name: "Gemini", icon: "/placeholder.svg?height=40&width=40" },
    { name: "Replit", icon: "/placeholder.svg?height=40&width=40" },
    { name: "MagicUI", icon: "/placeholder.svg?height=40&width=40" },
    { name: "VSCodium", icon: "/placeholder.svg?height=40&width=40" },
    { name: "MediaWiki", icon: "/placeholder.svg?height=40&width=40" },
    { name: "GooglePaLM", icon: "/placeholder.svg?height=40&width=40" },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black text-center">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4 sm:mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-300">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
          Seamless Integration
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight">
          Works With Your Favorite Tools
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 sm:mb-16">
          Invisly integrates effortlessly with popular development platforms and tools, enhancing your workflow without disruption.
        </p>
        
        <div className="relative flex items-center justify-center my-16">
          <div 
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.1s linear'
            }}
          >
            {tools.map((tool, index) => {
              const angle = (index * 360) / tools.length;
              const radius = 120;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);
              
              return (
                <div
                  key={tool.name}
                  className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-xl border border-gray-800 flex items-center justify-center shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <Image 
                    src={tool.icon} 
                    alt={tool.name} 
                    width={40} 
                    height={40} 
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
          
          <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-yellow-400">
                <path d="M12 2v20"></path>
                <path d="m4 12 8-8 8 8"></path>
                <path d="m4 18 8-8 8 8"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-16 sm:mt-24">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300">
            View All Integrations
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;