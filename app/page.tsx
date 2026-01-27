"use client"

import { useEffect } from "react"
import dynamic from "next/dynamic"
import { Leva } from "leva"
import { Hero } from "@/components/hero"
import { BrandLogosSlider } from "@/components/sections/brand-logos-slider"
import { BentoGridSection } from "@/components/sections/bento-grid"
import PlatformCompatibility from "@/components/sections/platform-compatibility"
import Shortcuts from "@/components/sections/shortcuts"
import { Pricing } from "@/components/sections/pricing"
import { FAQ } from "@/components/sections/faq"
import { motion } from "framer-motion";

// Dynamically import heavy components for better performance
const VideoDemo = dynamic(() => import("@/components/sections/video-demo").then(mod => ({ default: mod.VideoDemo })), {
    loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading...</div>,
    ssr: true,
})

const TrustedBy = dynamic(() => import("@/components/sections/trusted-by"), {
    loading: () => <div className="min-h-[200px]"></div>,
    ssr: true,
})

const InsightsBanner = dynamic(() => import("@/components/sections/insights-banner").then(mod => ({ default: mod.InsightsBanner })), {
    loading: () => <div className="min-h-[300px]"></div>,
    ssr: true,
})

// Disable SSR for 3D components to reduce server load
// const BhadraTigerReserveSection = dynamic(() => import("@/components/sections/bhadra-tiger-reserve").then(mod => ({ default: mod.BhadraTigerReserveSection })), {
//     loading: () => <div className="min-h-[500px] flex items-center justify-center">Loading 3D Scene...</div>,
//     ssr: false,
// })

export default function Home() {
    // Manual scroll restoration logic removed to prevent conflicts with Lenis
    // and browser native behavior.
    useEffect(() => {
        // Simple cleanup to ensure body is scrollable
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
    }, []);

    return (
        <>
            <Hero />
            <main className="pt-16 pb-16">
                <div className="flex flex-col gap-16 md:gap-24">
                    <motion.section
                        id="brands"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <BrandLogosSlider />
                    </motion.section>

                    <motion.section
                        id="video"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <VideoDemo />
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        <TrustedBy />
                    </motion.section>

                    {/* <motion.section 
                        id="glass-demo" 
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <GlassEffectDemo />
                    </motion.section> */}

                    <motion.section
                        id="bento-grid"
                        className="scroll-mt-28 -mt-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <BentoGridSection />
                    </motion.section>

                    {/* <motion.section 
                        id="features" 
                        className="scroll-mt-28 -mt-46"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Features />
                    </motion.section> */}

                    <motion.section
                        id="compatibility"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <PlatformCompatibility />
                    </motion.section>

                    <motion.section
                        id="shortcuts"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Shortcuts />
                    </motion.section>

                    <motion.section
                        id="pricing"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <Pricing />
                    </motion.section>

                    {<motion.section
                        id="insights"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <InsightsBanner />
                    </motion.section>}

                    <motion.section
                        id="faq"
                        className="scroll-mt-28"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        <FAQ />
                    </motion.section>
                </div>
            </main>
            <Leva hidden />
        </>
    )
}