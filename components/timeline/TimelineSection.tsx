"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    id: 1,
    year: "04/2019 - Present",
    role: "IT Administrator",
    company: "Pronayon/PDS, Chittagong",
    description: "Architected and maintained multi-vendor IT ecosystem. Managed network infrastructure, Windows Server, and Odoo ERP systems. Led full-stack web development projects.",
    achievements: [
      "Achieved 99.5% uptime across multi-vendor IT ecosystem",
      "Engineered MikroTik-based LAN/MAN/WAN solutions for 250+ users",
      "Deployed Cisco infrastructure reducing troubleshooting time by 40%",
      "Customized Odoo ERP modules enhancing workflow efficiency by 35%",
      "Led full lifecycle web application development using Django/React",
    ],
    side: "left" as const,
  },
  {
    id: 2,
    year: "03/2018 - 03/2019",
    role: "System Admin",
    company: "Orange Communication, Chittagong",
    description: "Managed fiber network design, MikroTik infrastructure, and enterprise IT operations.",
    achievements: [
      "Planned OLT systems achieving 40% bandwidth improvement",
      "Deployed 50+ MikroTik routers reducing downtime by 35%",
      "Managed 200+ endpoints cutting security incidents by 70%",
      "Led 5-member teams to achieve 99% SLA compliance",
    ],
    side: "right" as const,
  },
  {
    id: 3,
    year: "05/2017 - 01/2018",
    role: "IT Officer",
    company: "Mohara Asian Apparels Ltd, Chittagong",
    description: "Provided IT support and automated business processes for manufacturing operations.",
    achievements: [
      "Automated attendance tracking reducing errors by 30%",
      "Delivered IT support for 150+ users with 95% SLA resolution",
      "Deployed CCTV surveillance with remote monitoring",
    ],
    side: "left" as const,
  },
  {
    id: 4,
    year: "02/2016 - 04/2017",
    role: "IT Executive",
    company: "PAN ARAB INTERNATIONAL, Chittagong",
    description: "Managed cloud-based ERP platforms and enterprise IT infrastructure.",
    achievements: [
      "Managed cloud ERP for 100+ users ensuring 99.9% uptime",
      "Achieved 90% first-call resolution rate for IT issues",
      "Reduced ticket resolution time by 35% through automation",
      "Cut PC deployment setup time by 50% with standardized protocols",
    ],
    side: "right" as const,
  },
  {
    id: 5,
    year: "04/2014 - 11/2015",
    role: "IT (Service & Support)",
    company: "Alchemy Software, Chittagong",
    description: "Managed Oracle Database systems and provided enterprise IT support.",
    achievements: [
      "Optimized Oracle DB (8i/9i/10g) for 50+ concurrent users",
      "95% first-call resolution rate across 120+ endpoints",
      "Reduced backup times by 40% through streamlined processes",
      "Cut replacement costs by 25% with efficient hardware diagnostics",
    ],
    side: "left" as const,
  },
]

function TimelineCard({
  item,
}: {
  item: (typeof experienceData)[number]
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 0, 1, 1])
  const x = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [item.side === "left" ? -100 : 100, item.side === "left" ? -100 : 100, 0, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.8, 0.8, 1, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x, scale }}
      className={`flex items-center gap-8 mb-16 ${
        item.side === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className={`flex-1 ${item.side === "left" ? "text-right" : "text-left"}`}>
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
          <Badge variant="outline" className="mb-2">
            {item.year}
          </Badge>
          <h3 className="text-xl font-bold mb-1">{item.role}</h3>
          <p className="text-primary font-medium mb-3">{item.company}</p>
          <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
          <ul className={`space-y-1.5 ${item.side === "left" ? "text-right" : "text-left"}`}>
            {item.achievements.map((ach, i) => (
              <li key={i} className="text-xs text-muted-foreground flex items-center gap-1.5">
                {item.side === "right" && <ChevronRight className="w-3 h-3 text-primary shrink-0" />}
                {ach}
                {item.side === "left" && <ChevronRight className="w-3 h-3 text-primary shrink-0" />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </motion.div>
  )
}

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], ["0%", "0%", "100%", "100%"])

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Career <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            12+ years of progressive experience in IT infrastructure, networking, and full-stack development
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          {experienceData.map((item) => (
            <TimelineCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
