"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Terminal, ArrowRightIcon } from "lucide-react"
import Image from "next/image"
import zeistSandbox from "../../../public/images/zeist-sandbox.svg"
// The terms from your "vanishing component" image
const ROTATING_TEXTS = [
  "AI Agents",
  "Developer Tools",
  "Autonomous Systems",
  "Data Workloads",
  "CI/CD Pipelines",
]

export function Hero() {
  const [index, setIndex] = useState(0)

  // Rotate text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_TEXTS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="border-x mx-auto w-full max-w-7xl relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">

      <div className="z-10 flex w-full max-w-4xl flex-col items-center px-4 text-center">
        
        <h1 className="mb-6 text-4xl font-medium tracking-tight text-white md:text-[54px] lg:text-[54px]">
          Cloud Sandboxes for <br className="hidden md:block" />
          <span className="relative inline-flex w-full justify-center md:w-auto md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute -top-8 md:top-0 lg:top-0 left-0 right-0 md:relative"
              >
                {ROTATING_TEXTS[index]}
              </motion.span>
            
            </AnimatePresence>
          </span>
          <span className="text-muted-foreground"> - </span>
          <span className="bg-linear-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
             Early Access
          </span>
        </h1>

        {/* Subheader */}
        <p className="mb-8 max-w-2xl text-lg text-[#8B8890] md:text-[18px]">
          Isolated cloud sandboxes for agent code, data pipelines, and workloads — fast, secure, and built for real agent systems.
        </p>

        {/* CTA Button */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <Button className="h-10 font-light text-[13.5px] rounded-[8px] px-4 hover:shadow-[0_0_40px_-5px_var(--primary)] transition-shadow duration-300">
                <Link href="#waitlist">Join the Waitlist</Link>
            </Button>
        </motion.div>

        {/* Terminal Window Animation */}
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 w-full max-w-2xl"
        >
         <Image src={zeistSandbox} alt="Terminal" width={1000} height={1000} />
        </motion.div>
      </div>
    </section>
  )
}

