"use client"

import { motion } from "framer-motion"
import skillsData from "@/data/skills.json"

const getTechIcon = (name: string) => {
  const firstChar = name.charAt(0).toUpperCase()
  return firstChar
}

const getTechColor = (name: string) => {
  const tech = skillsData.techStack.find(
    (t) => t.name.toLowerCase() === name.toLowerCase()
  )
  return tech?.color || "#6382FF"
}

export function TechStackCloud() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech Stack <span className="text-primary">Cloud</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {skillsData.techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.03,
              }}
              whileHover={{
                scale: 1.15,
                rotateZ: [0, -5, 5, -5, 0],
                transition: { duration: 0.3 },
              }}
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
            >
              <div
                className="w-20 h-20 rounded-xl flex flex-col items-center justify-center gap-1 cursor-grab active:cursor-grabbing transition-shadow hover:shadow-xl"
                style={{
                  backgroundColor: `${tech.color}15`,
                  borderColor: `${tech.color}30`,
                  borderWidth: 1,
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                  style={{ backgroundColor: tech.color }}
                >
                  {getTechIcon(tech.name)}
                </div>
                <span className="text-xs font-medium" style={{ color: tech.color }}>
                  {tech.name.length > 8 ? tech.name.substring(0, 7) + "..." : tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
