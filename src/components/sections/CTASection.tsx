"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background"
import { motion } from "framer-motion"

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const itemReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}
export function CTASection() {
  return (
    <section className="">
      <motion.div
        className="relative border-x border-white/10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 py-20 text-center md:py-35"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <DottedGlowBackground
          className="pointer-events-none z-[-1] mask-radial-to-90% mask-radial-at-center"
          opacity={0.5}
          gap={12}
          radius={1.4}
          colorLightVar="--color-neutral-500"
          glowColorLightVar="--color-neutral-600"
          colorDarkVar="--color-neutral-500"
          glowColorDarkVar="--color-sky-800"
          backgroundOpacity={0}
          speedMin={0.3}
          speedMax={1.2}
          speedScale={1}
        />
        <motion.h2 className="text-balance text-4xl font-medium text-white md:text-[42px]" variants={itemReveal}>
          Start Building <span className="text-primary">Agents</span>
          <br />
          With Real Runtime
          <br />
          Environments
        </motion.h2>
        <motion.p className="mt-4  text-[15px] text-[#8B8890]" variants={itemReveal}>
          Be first to run agent workloads in secure <br /> sandboxes and shape the platform roadmap.
        </motion.p>
        <motion.div variants={itemReveal}>
          <Button
            className="z-50 mt-8 h-10 font-light text-[13.5px] rounded-[8px] px-4 hover:shadow-[0_0_40px_-5px_var(--primary)] transition-shadow duration-300"
          >
            <Link href="#waitlist">Join the Waitlist</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
