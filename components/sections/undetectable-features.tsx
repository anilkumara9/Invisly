'use client';

import React, { useState } from "react";
import Image from 'next/image';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { Compare } from "@/components/ui/compare";

// Using a separate component for the stateful part to keep logic contained.

const CompareDemo = () => {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[400px] px-0 md:px-0 flex items-center justify-center">
      <div className="w-full h-full">
        <Compare
          firstImage="/images/screen.png"
          secondImage="/images/mouse.png"
          firstImageClassName="object-cover object-left-top w-full h-full"
          secondImageClassname="object-cover object-left-top w-full h-full"
          className="w-full h-full rounded-[22px] md:rounded-lg"
          slideMode="hover"
          autoplay={true}
        />
      </div>
    </div>
  );
};

const ScreenShareCard = () => {
  const [activeView, setActiveView] = useState('user');

  return (
    <a href="#" className="group relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-2xl glass-card p-6 text-left">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
          <CompareDemo />
        </div>
        <p className="mt-4 text-sm font-bold text-white/60 text-center">
          <span className="text-yellow-500">Invisly is completely undetectable to screen sharing platforms and never steals focus .</span> You can enable or disable click-through mode by adding your API key. When you are in full screen while taking an exam, please enable click-through mode to avoid tab switching.
        </p>
      </div>
    </a>
  );
};

export default function UndetectableFeatures() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      {/* Changed section to have yellow background */}
      <section id="features" className="mx-auto mb-8 max-w-7xl px-4 sm:px-6 lg:mb-12 lg:px-8 bg-yellow-500/10 rounded-2xl p-8">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
            See how we guarantee <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">undetectable</span>
          </h2>
          <div className="text-white/90">
            <p className="mt-4 text-sm font-bold text-white/90">
              Invisly is designed for <span className="text-yellow-500">complete stealth</span>. You can't even click on Invisly in an 
               <span className="text-yellow-500">Full screen mode</span>, you can use <span className="text-yellow-500">ctr+M</span> for click through mode and <span className="text-yellow-500">ctr+N</span> for disabling it, it will never steal focus, and it's completely invisible to screenshare. Invisly
              is completely undetectable to the <span className="text-yellow-500">taskmanager</span> and <span className="text-yellow-500">taskbar</span>. Go through the video to see how Invisly works.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ScreenShareCard />

          <a href="#" className="group relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-2xl glass-card p-6 text-left">
            <div className="relative w-full overflow-hidden rounded-lg flex-grow flex items-center justify-center" style={{ minHeight: '350px' }}>
              <Image
                src="/images/taskbar.png"
                alt="Diagram showing that the active tab focus is not stolen"
                width={568}
                height={355}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-bold text-white/60 text-center">
              <span className="text-yellow-500">Invisly stays completely invisible to the taskbar.</span> The app remains active but never shows an icon, ensuring no one can tell it's running.
            </p>
          </a>

          <a href="#" className="group relative z-10 flex h-full flex-col justify-between overflow-hidden rounded-2xl glass-card p-6 text-left">
            <div className="relative w-full overflow-hidden rounded-lg flex-grow flex items-center justify-center" style={{ minHeight: '350px' }}>
              <Image
                src="/images/taskmanager1.png"
                alt="Invisly Keyboard Shortcuts"
                width={568}
                height={355}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-sm font-bold text-white/60 text-center">
              <span className="text-yellow-500">Invisible in TaskManager</span> Runs silently in the background without leaving any trace in your Windows Task Manager.
            </p>
          </a>

          <div 
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl glass-card p-8 text-left cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#2a2a2a]/0 via-[#1a1a1a]/50 to-[#1a1a1a]" />
            <div className="absolute right-0 top-0 z-0 h-2/3 w-2/3 bg-[radial-gradient(circle_at_100%_0%,rgba(239,204,58,0.15),transparent_40%)]" />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex-grow flex items-center justify-center relative">
                <Image
                  src="/invisily1.png"
                  alt="Golden Wing Logo Thumbnail"
                  width={568}
                  height={355}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg">
                  <div className="bg-yellow-500/90 rounded-full p-4 hover:bg-yellow-500 transition-colors">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="mt-2 text-sm font-bold text-white/60 text-center">
                  See how you're going to use Invisly  to <span className="text-yellow-500">crack the coding round even in full screen mode</span>. Invisly is designed for complete stealth - you can't even click on it during an interview, it will never steal focus, and it's completely invisible to screenshare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-6xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 text-white hover:text-yellow-500 transition-colors"
              onClick={() => setIsVideoModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video 
              src="/anil09.mp4" 
              controls 
              autoPlay
              preload="metadata"
              className="w-full h-auto max-h-[85vh] rounded-xl shadow-2xl"
              onError={(e) => console.error('Video failed to load:', e)}
            >
              <source src="/anil09.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
      {/* <Marquee /> */}
    </>
  );
}