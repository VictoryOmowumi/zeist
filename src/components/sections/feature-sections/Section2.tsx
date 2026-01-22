"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const USE_CASES = [
  { title: "LLM Code Execution", icon: "/icons/section2/computer-terminal-01.svg" },
  { title: "Data Processing & Pipelines", icon: "/icons/section2/flow-square.svg" },
  { title: "CI/CD & Build Systems", icon: "/icons/section2/git-branch.svg" },
  { title: "Cloud IDEs & Playgrounds", icon: "/icons/section2/browser.svg" },
  { title: "Multi-Tenant Execution", icon: "/icons/section2/layers-01.svg" },
  { title: "Background Agent Tasks", icon: "/icons/section2/keyframes-multiple.svg" },
]

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

export function Section2() {
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
              <span className="text-primary">[02 </span>/03]
            </p>
            <p>•</p>
            <p>Use Cases</p>
          </div>
        </div>
      </motion.div>

      {/* section content */}
      <motion.div
        className="w-full max-w-7xl mx-auto pt-[37px] flex flex-col justify-center border-x border-white/10"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-white text-[42px] font-medium py-10 lg:py-20 text-center leading-11 max-w-[300px] mx-auto"
          variants={cardReveal}
        >
          Built for <span className="text-primary"> Agentic Workloads</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {USE_CASES.map((item) => (
            <motion.div
              key={item.title}
              className="px-8 lg:px-16 py-10 text-center border-white/10 sm:odd:border-r sm:nth-[-n+4]:border-b lg:border-b-0 lg:nth-[3n]:border-r-0"
              variants={cardReveal}
            >
              <Image src={item.icon} alt="" width={34} height={34} className="mx-auto mb-4 h-[34px] w-[34px]" />
              <p className="text-[14px] font-light text-white">{item.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}