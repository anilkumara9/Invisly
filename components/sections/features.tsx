import { cn } from "@/lib/utils";
import {
  IconEyeOff,
  IconCamera,
  IconBrain,
  IconLock,
  IconPalette,
  IconBolt,
} from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";
import { Globe } from "@/components/ui/globe";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { motion } from "framer-motion";

export function Features() {
  const features = [
    {
      title: "Stealth Mode",
      description:
        "Stealth mode overlay that can be toggled on/off with a single shortcut. Undetectable during proctored exams and interviews.",
      icon: <IconEyeOff className="h-6 w-6" />,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500",
      revealColor: "#8B5CF6",
    },
    {
      title: "Smart Screenshot Analysis",
      description:
        "Capture up to 4 screenshots with Cmd/Ctrl + H. AI analyzes your code in real-time with multi-language support.",
      icon: <IconCamera className="h-6 w-6" />,
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      revealColor: "#06B6D4",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "Advanced problem-solving approach with step-by-step breakdowns. Complexity analysis and follow-up questions.",
      icon: <IconBrain className="h-6 w-6" />,
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
      revealColor: "#F43F5E",
    },
    {
      title: "Privacy & Security",
      description:
        "All processing happens locally. API keys stored securely with no data sent to third-party servers during exams.",
      icon: <IconLock className="h-6 w-6" />,
      color: "bg-gradient-to-r from-emerald-500 to-green-500",
      revealColor: "#10B981",
    },
    {
      title: "Glassmorphism UI",
      description:
        "Modern glass-like transparent design with smooth animations. Dark theme optimized for discreet coding assistance.",
      icon: <IconPalette className="h-6 w-6" />,
      color: "bg-gradient-to-r from-amber-500 to-orange-500",
      revealColor: "#F59E0B",
    },
    {
      title: "Lightning Fast",
      description:
        "Powered by Google's Gemini API for instant analysis and solutions. Get help in seconds without disrupting your flow.",
      icon: <IconBolt className="h-6 w-6" />,
      color: "bg-gradient-to-r from-violet-500 to-fuchsia-500",
      revealColor: "#A855F7",
    },
  ];

  return (
    <section id="features" className="container mt-24 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#ffdb57]/5 rounded-full blur-3xl -z-10"></div>
      
      <motion.div
        className="text-center mb-16 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/15 to-yellow-300/15 border border-yellow-500/30 rounded-full text-sm text-yellow-300 font-medium mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <span className="shimmer-effect px-2 py-1 rounded-full">Core Features</span>
        </motion.div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
          Powerful <span className="text-yellow-500">Features</span>
        </h2>
        <p className="text-xl sm:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 font-light">
          Everything you need to ace your technical interviews
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-8 max-w-7xl mx-auto gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  color,
  revealColor
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  color: string;
  revealColor: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setHovered(false);
  };

  useEffect(() => {
    if (!divRef.current) return;

    const div = divRef.current;
    div.addEventListener("mousemove", handleMouseMove as any);
    div.addEventListener("mouseenter", handleMouseEnter);
    div.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      div.removeEventListener("mousemove", handleMouseMove as any);
      div.removeEventListener("mouseenter", handleMouseEnter);
      div.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={divRef}
      className={cn(
        "flex flex-col py-10 relative group/feature border border-border/50 transition-all duration-500 overflow-hidden rounded-3xl backdrop-blur-xl bg-background/20 glass-card",
        (index === 0 || index === 3) && "lg:border-l border-border/50",
        index < 3 && "lg:border-b border-border/50"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Enhanced Canvas reveal effect */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        <CanvasRevealEffect
          animationSpeed={2}
          containerClassName={cn("bg-transparent absolute inset-0 rounded-3xl", color)}
          colors={[
            [parseInt(revealColor.slice(1, 3), 16), parseInt(revealColor.slice(3, 5), 16), parseInt(revealColor.slice(5, 7), 16)],
          ]}
          dotSize={1.5}
        />
        {hovered && (
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-black/20 to-black/40" />
        )}
      </div>

      {/* Enhanced spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(700px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`,
        }}
      />

      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-t-2 border-r-2 border-primary/30 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full border-b-2 border-l-2 border-primary/30 opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500"></div>

      {/* Icon with enhanced animation */}
      <motion.div 
        className="mb-6 relative z-10 px-10 text-white"
        animate={hovered ? { scale: 1.15, rotate: 5 } : { scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {icon}
      </motion.div>

      {/* Title with enhanced animated bar */}
      <div className="text-xl font-bold mb-4 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-8 group-hover/feature:h-10 w-1.5 rounded-tr-full rounded-br-full bg-border/50 group-hover/feature:bg-yellow-500 transition-all duration-500 origin-center" />
        <motion.span 
          className="inline-block text-white"
          whileHover={{ x: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {title}
        </motion.span>
      </div>

      {/* Enhanced description */}
      <p className="text-base text-foreground/80 max-w-xs relative z-10 px-10 group-hover/feature:text-foreground transition-colors duration-500 leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="mt-6 px-10">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full w-full"></div>
      </div>
    </motion.div>
  );
};