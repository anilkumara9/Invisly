"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState, useEffect } from "react"
import { ConfettiButton } from "@/components/ui/confetti"
import { LineShadowText } from "@/components/ui/line-shadow-text"
import { motion } from "framer-motion"
import LightRays from "./LightRays"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  // Listen for scroll events to optimize WebGL performance
  useEffect(() => {
    const handleScroll = () => {
      // Check if body has the scrolling class
      setIsScrolling(document.body.classList.contains('lenis-scrolling'))
    }

    // Listen for custom lenis scroll events
    window.addEventListener('lenis-scroll', handleScroll)

    // Also check on resize
    window.addEventListener('resize', handleScroll)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener('lenis-scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    // Removed pt-16 since header is now part of the curved container
    <div className="relative flex flex-col h-svh justify-center items-center">
      
      {/* Top shadow gradient for better header contrast - reduced intensity */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none"></div>

      {/* Reduced overlay for better text readability - even more subtle */}
      <div className="absolute inset-0 bg-black/10 z-5"></div>
      
      {/* GL component - positioned above background but below content */}
      <GL hovering={hovering && !isScrolling} />

      {/* Background image - moved here to ensure it's on top of GL if necessary, but behind content */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/invi2.png?v=1711463118" 
          alt="Invisly" 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content - positioned at the top z-index */}
      <motion.div
        className="relative z-20 text-center flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Pill className="mb-8">#1 STEALTH CODING ASSISTANT</Pill>
        </motion.div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl abril-fatface-regular text-balance tracking-tight">
          <motion.div
            className="font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ace Every
          </motion.div>
          <motion.div
            className="mt-2 font-bold text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Technical <span className="font-cursive text-yellow-500 relative"><LineShadowText shadowColor="#FFFFFF">Interview</LineShadowText></span>
          </motion.div>
        </h1>

        <motion.p
          className="font-mono text-base sm:text-lg text-white/70 text-balance mt-10 max-w-[720px] leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Your stealth AI assistant that provides real-time coding help without being detected during exams or
          interviews.
        </motion.p>
      </motion.div>
      
      {/* Black shadow at the bottom to cover border - further reduced height */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
    </div>
  )
}