"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ICONS = {
  lock: "/icons/section1/square-lock-password.svg",
  speed: "/icons/section1/dashboard-speed-02.svg",
  layers: "/icons/section1/layers-02.svg",
  code: "/icons/section1/code-02.svg",
  logos: "/icons/section1/logos.svg",
}

const FEATURES = [
  {
    title: "Secure Execution",
    description: "Isolated environments for untrusted agent-generated code.",
    icon: ICONS.lock,
  },
  {
    title: "Sub-200ms Startup",
    description: "Low latency agents require fast provisioned runtimes.",
    icon: ICONS.speed,
  },
  {
    title: "Persistent Sandboxes",
    description: "Sessions last as long as your workflows.",
    icon: ICONS.layers,
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
}

export function Section1() {
  return (
    <div className="w-full">
      {/* section label */}
      <motion.div
        className="border-y border-white/10 font-neue-montreal"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="w-full max-w-7xl mx-auto py-[37px] flex justify-center bg-[#0E0E0F] border-x border-white/10">
          <div className="flex gap-2 items-center font-normal text-[#78757CB2] text-center text-[15px]">
            <p>Section</p>
            <p>
              <span className="text-primary">[01 </span>/03]
            </p>
            <p>•</p>
            <p>Quick Explainer</p>
            <p>+</p>
            <p>Key Value Props</p>
          </div>
        </div>
      </motion.div>

      {/* section content */}
      <motion.div
        className="w-full max-w-7xl mx-auto lg:py-[37px] flex flex-col justify-center border-x border-white/10"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-white text-[42px] font-medium py-10 lg:py-20 text-center leading-11"
          variants={cardReveal}
        >
          Runtime <span className="text-primary"> Features</span> <br /> that matter
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 border-t border-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className=" px-4 lg:px-16 py-10 nth-[2]:border-x border-white/10"
              variants={cardReveal}
            >
              <Image src={feature.icon} alt="" width={34} height={34} className="mb-4 h-auto w-auto" />
              <h3 className="text-white text-[17px] font-medium">{feature.title}</h3>
              <p className="mt-2 text-[15px] text-[#8B8890] max-w-[250px]">{feature.description}</p>
            </motion.div>
          ))}

          <motion.div
            className=" px-4 lg:px-16 py-10 lg:col-span-3 md:border-l border-t border-white/10 flex flex-col lg:flex-row items-center gap-24"
            variants={cardReveal}
          >
            <div className="flex flex-col">
              <Image src={ICONS.code} alt="" width={34} height={34} className="mb-4 h-[34px] w-[34px]" />
              <h3 className="text-white text-[17px] font-medium">Multi-Language Support</h3>
              <p className="mt-2 text-[15px] text-[#8B8890] max-w-[250px]">Python, Node, Go, Bash (expandable)</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src={ICONS.logos}
                alt="Language logos"
                width={420}
                height={96}
                className="h-auto w-full max-w-[420px]"
              />
            </div>
          </motion.div>
          <div className="block lg:hidden col-span-2">
            <Image src={ICONS.logos} alt="Language logos" width={500} height={100} className="h-auto w-full " />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}