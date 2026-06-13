"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useMousePosition } from "@/hooks/useMousePosition"
import resume from "@/data/resume.json"

const certColors: Record<string, string> = {
  Microsoft: "from-blue-500 to-blue-600",
  Amazon: "from-orange-500 to-amber-600",
  VMware: "from-cyan-500 to-teal-600",
  Cisco: "from-blue-400 to-indigo-600",
  AXELOS: "from-green-500 to-emerald-600",
  Fortinet: "from-red-500 to-rose-600",
}

export function CertificationsGalaxy() {
  const mouse = useMousePosition()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotateY = useTransform(scrollYProgress, [0, 1], [15, -15])
  const rotateX = useTransform(scrollYProgress, [0, 1], [-10, 10])

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications <span className="text-primary">Galaxy</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional certifications spanning cloud, virtualization, networking, and security
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          style={{ rotateY, rotateX, perspective: 1000 }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resume.certifications.map((cert, index) => {
              const colors = certColors[cert.issuer] || "from-primary to-primary/60"
              const isHovered =
                Math.abs(mouse.x - (index * 200 + 200)) < 100 &&
                Math.abs(mouse.y - (index * 150 + 300)) < 100

              return (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, rotateY: 180 }}
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: -5,
                    z: 20,
                  }}
                >
                  <Card
                    className={`relative bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all p-6 overflow-hidden ${
                      isHovered ? "shadow-xl shadow-primary/10" : ""
                    }`}
                  >
                    {/* Gradient Bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${colors}`}
                    />

                    <div className="relative z-10">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${colors} mb-4`}>
                        <span className="text-white font-bold text-sm">
                          {cert.issuer.substring(0, 2).toUpperCase()}
                        </span>
                      </div>

                      <h3 className="font-semibold text-sm mb-2">{cert.name}</h3>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {cert.issuer}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{cert.year}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
