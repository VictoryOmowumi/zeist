"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const PLATFORM_FEATURES = [
  { title: "Persistent Sessions (24h+)", icon: "/icons/section3/clock-04.svg" },
  { title: "Streaming STDOUT / STDERR", icon: "/icons/section3/computer-terminal-02.svg" },
  { title: "File System Isolation", icon: "/icons/section3/folder-security.svg" },
  { title: "Ephemeral or Persistent Storage", icon: "/icons/section3/database-01.svg" },
  { title: "Networking Controls", icon: "/icons/section3/grid.svg" },
  { title: "Preview URLs", icon: "/icons/section3/browser.svg" },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE_OUT } },
}

export function Section3() {
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
              <span className="text-primary">[03 </span>/03]
            </p>
            <p>•</p>
            <p>Platform Features</p>
          </div>
        </div>
      </motion.div>

      {/* section content */}
      <motion.div
        className="w-full max-w-7xl mx-auto flex flex-col justify-center border-x border-white/10"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="grid grid-cols-2 border-white/10 lg:grid-cols-3 lg:divide-x lg:divide-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PLATFORM_FEATURES.map((item) => (
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