"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import sparkles from "../../../public/icons/sparkles.svg"
import layers from "../../../public/icons/layer.svg"
import terminal from "../../../public/icons/terminal.svg"
import databaseIcon from "../../../public/icons/database.svg"
import codeIcon from "../../../public/icons/code.svg"

const TEAMS = [
  { name: "AI Startups", icon: sparkles },
  { name: "Enterprise", icon: layers },
  { name: "Open-source teams", icon: terminal },
  { name: "Data Engineering Teams", icon: databaseIcon },
  { name: "Developer Tools Companies", icon: codeIcon },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const sectionReveal = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

export function TrustedBy() {
  return (
    <section className="border-t border-white/10 bg-background text-[#8B8890]">
      <motion.div
        className="flex flex-col md:flex-row mx-auto w-full max-w-7xl"
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        
        {/* Left Label - Fixed Width */}
        <div
          className="relative flex w-full min-w-[240px] items-center justify-start px-6 py-4 md:w-64 bg-[#0e0e0f98]"
          style={{ borderStyle: "solid", borderColor: "#272728", borderWidth: "0 0.6px 0 0.6px" }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 h-[4px] w-[4px]"
            style={{ borderStyle: "solid", borderColor: "#57565B", borderWidth: "0.8px 0px 0px 0.8px" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 h-[4px] w-[4px]"
            style={{ borderStyle: "solid", borderColor: "#57565B", borderWidth: "0.8px 0.8px 0px 0px" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 h-[4px] w-[4px]"
            style={{ borderStyle: "solid", borderColor: "#57565B", borderWidth: "0px 0.8px 0.8px 0px" }}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 bottom-0 h-[4px] w-[4px]"
            style={{ borderStyle: "solid", borderColor: "#57565B", borderWidth: "0px 0px 0.8px 0.8px" }}
          />
          <span className="text-sm font-normal text-[#8B8890]">
            Built for teams <br /> building agentic systems
          </span>
        </div>

        {/* Right Scrolling Ticker */}
        <div className="flex flex-1 items-center overflow-hidden py-4 md:py-0 border-r border-white/10">
          <div className="relative flex w-full overflow-hidden">
            {/* Duplicate the list to create an infinite seamless loop */}
            <div className="animate-marquee flex whitespace-nowrap">
              {[...TEAMS, ...TEAMS].map((team, i) => (
                <div key={`dup-${i}`} className="mx-8 flex items-center gap-2 text-sm font-normal">
                  <Image src={team.icon} alt={team.name} width={16} height={16} />
                  <span>{team.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}