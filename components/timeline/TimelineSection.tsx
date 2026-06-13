"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Briefcase, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    id: 1,
    year: "2021 - Present",
    role: "Senior IT Administrator",
    company: "Enterprise Corp",
    description: "Leading infrastructure operations, cloud strategy, and security operations across the enterprise.",
    achievements: [
      "Reduced infrastructure costs by 30% through cloud optimization",
      "Led M365 migration for 5,000+ users",
      "Achieved 99.98% uptime across all systems",
    ],
    side: "left" as const,
  },
  {
    id: 2,
    year: "2018 - 2021",
    role: "Infrastructure Engineer",
    company: "TechGlobal Inc",
    description: "Designed and managed VMware clusters, storage systems, and network infrastructure.",
    achievements: [
      "Architected multi-site VMware cluster with 120+ VMs",
      "Implemented automated backup and DR solutions",
      "Led network upgrade to SD-WAN architecture",
    ],
    side: "right" as const,
  },
  {
    id: 3,
    year: "2015 - 2018",
    role: "Network Administrator",
    company: "NetSolutions Ltd",
    description: "Managed enterprise networks, firewalls, and security infrastructure.",
    achievements: [
      "Deployed Fortigate firewall clusters with IPS/SSL inspection",
      "Implemented BGP/OSPF routing for multi-site connectivity",
      "Reduced security incidents by 60%",
    ],
    side: "left" as const,
  },
  {
    id: 4,
    year: "2012 - 2015",
    role: "System Administrator",
    company: "DataCenter Pro",
    description: "Managed Windows Server, Linux, and virtualization platforms.",
    achievements: [
      "Managed 250+ Windows and Linux servers",
      "Deployed VMware vSphere clusters",
      "Implemented centralized patch management",
    ],
    side: "right" as const,
  },
  {
    id: 5,
    year: "2010 - 2012",
    role: "Help Desk Engineer",
    company: "IT Solutions",
    description: "Provided technical support and troubleshooting for enterprise clients.",
    achievements: [
      "Resolved 2,000+ tickets with 98% satisfaction rate",
      "Created knowledge base reducing repeat tickets by 40%",
    ],
    side: "left" as const,
  },
]

function TimelineCard({
  item,
  index,
}: {
  item: (typeof experienceData)[number]
  index: number
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
      {/* Card */}
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

      {/* Center Icon */}
      <div className="relative shrink-0">
        <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-primary" />
        </div>
      </div>

      {/* Spacer */}
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
            13+ years of progressive experience in IT infrastructure, cloud, and security
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-primary to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          {experienceData.map((item, index) => (
            <TimelineCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
