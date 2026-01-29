import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Minus, Plus } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function FAQ() {
  return (
    <section id="faq" className="mb-16 lg:mb-24 relative">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="w-full flex justify-center mb-8">
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/compare.png"
              alt="Compare features"
              className="w-full max-w-3xl object-cover rounded-xl"
            />
          </motion.div>
        </div>

        <motion.div
          className="mt-8 px-4 relative z-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col items-center justify-between gap-5 rounded-xl border border-white/10 bg-[#1C1C1C]/80 backdrop-blur-xl p-6 text-center md:flex-row md:text-left hover:border-yellow-500/30 transition-colors duration-300 hover:scale-[1.02] transition-transform">
            <div>
              <h3 className="text-lg font-semibold text-white">If anyone get placed by using our platform?</h3>
              <p className="mt-1 text-white/70 text-sm">
                Send your offer letters to{' '}
                <a href="mailto:educationalpro6@gmail.com" className="font-medium text-yellow-500 hover:underline">
                  educationalpro6@gmail.com
                </a>
              </p>
            </div>
            {/* <Button
              variant="secondary"
              size="sm"
              onClick={() => window.location.href = '/help'}
            >
              Visit help center
            </Button> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}