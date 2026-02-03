"use client";

import { useState, useRef, useEffect, MouseEvent, TouchEvent, useCallback } from "react";
import { Star } from "lucide-react";
import { PerspectiveGrid } from "@/components/ui/perspective-grid";
import Image from "next/image";

export function VideoDemo() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        let percentage = (x / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));
        setSliderPosition(percentage);
    }, []);

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault();
        isDragging.current = true;
    };

    const handleTouchStart = (e: TouchEvent) => {
        isDragging.current = true;
    };

    useEffect(() => {
        const handleUp = () => {
            isDragging.current = false;
        };

        const handleMoveGlobal = (e: globalThis.MouseEvent) => {
            if (isDragging.current) {
                handleMove(e.clientX);
            }
        };

        const handleTouchMoveGlobal = (e: globalThis.TouchEvent) => {
            if (isDragging.current) {
                handleMove(e.touches[0].clientX);
            }
        };

        window.addEventListener('mousemove', handleMoveGlobal);
        window.addEventListener('touchmove', handleTouchMoveGlobal);
        window.addEventListener('mouseup', handleUp);
        window.addEventListener('touchend', handleUp);

        return () => {
            window.removeEventListener('mousemove', handleMoveGlobal);
            window.removeEventListener('touchmove', handleTouchMoveGlobal);
            window.removeEventListener('mouseup', handleUp);
            window.removeEventListener('touchend', handleUp);
        };
    }, [handleMove]);

    return (
        <section className="relative py-8 overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background with night.png image */}
            <div className="absolute inset-0 -z-10">
                {/* Night background image */}
                <Image
                    src="/night.png"
                    alt="Night background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Gradient overlay with top shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-yellow-300/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 font-medium mb-4">
                        <Star className="text-yellow-300" size={14} />
                        Featured Demo
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                        See It In{' '}
                        <span className="bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                            Action
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-[#B4B4B4] max-w-3xl mx-auto leading-relaxed mb-6">
                        See how Invisly helps developers stay productive while keeping their workflow hidden during online assessments.
                    </p>
                </div>

                <div className="relative group mb-6 animate-fade-in">
                    {/* Removed the old circular background elements */}

                    {/* Updated container with larger dimensions for border beam */}
                    <div ref={containerRef} className="relative h-full w-full rounded-2xl overflow-hidden select-none aspect-video shadow-2xl max-w-5xl mx-auto">
                        {/* Black shadow around border */}
                        <div className="absolute -inset-4 bg-black/60 blur-2xl rounded-3xl"></div>
                        {/* Enhanced glow effect */}
                        <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(255,193,7,0.3)]"></div>

                        <video
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            src="/interview-screenity.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            Your browser does not support the video tag.
                        </video>

                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                            <video
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                src="/anilkumar.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div
                            className="absolute top-0 bottom-0 w-1 bg-yellow-500/80 cursor-ew-resize shadow-[0_0_10px_rgba(255,199,0,0.5)]"
                            style={{ left: `calc(${sliderPosition}%)` }}
                            onMouseDown={handleMouseDown}
                            onTouchStart={handleTouchStart}
                        >
                            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-lg bg-black/90 backdrop-blur-md border border-yellow-500/50 flex items-center justify-center text-white text-base font-medium select-none shadow-[0_0_15px_rgba(255,199,0,0.3)] hover:bg-black hover:border-yellow-500 transition-all duration-300">
                                <div className="flex items-center justify-center w-6 h-6">
                                    <div className="absolute w-3 h-0.5 bg-yellow-500 rounded-full transform -rotate-45"></div>
                                    <div className="absolute w-3 h-0.5 bg-yellow-500 rounded-full transform rotate-45"></div>
                                </div>
                            </div>
                        </div>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sliderPosition}
                            onChange={(e) => setSliderPosition(Number(e.target.value))}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                            aria-label="Comparison slider"
                        />

                        <div className="absolute inset-0 pointer-events-none z-20">
                            <div className="absolute left-4 top-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                                Your Screen
                            </div>
                            <div className="absolute right-4 top-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm border border-white/20">
                                Interviewer Screen
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-4 text-sm text-[#B4B4B4]/70 hidden sm:block">
                        ← Drag to compare →
                    </p>
                </div>
            </div>
        </section>
    );
}