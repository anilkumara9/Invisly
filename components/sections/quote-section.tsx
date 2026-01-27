'use client';

import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <motion.section 
      className="py-8 bg-black overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.95 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <blockquote className="text-4xl md:text-6xl font-bold text-center text-yellow-500 italic">
          &ldquo;The world is changing, and technology is evolving rapidly. Don&rsquo;t get stuck in traditional education systems. Embrace platform like Invisily and don&rsquo;t feel shy to use Invisly, Interviewcoder, and other platforms. Be creative, innovative, and fearless in adopting new solutions.&rdquo;
        </blockquote>
      </div>
    </motion.section>
  );
}