"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Server, Cloud, Shield, Users, Network, Activity, Monitor, HardDrive, Ticket, Code } from "lucide-react"

const widgets = [
  {
    label: "Endpoints Managed",
    value: "300+",
    icon: Server,
    color: "from-blue-500 to-blue-600",
    detail: "Windows & Linux",
  },
  {
    label: "Users Supported",
    value: "1,500+",
    icon: Users,
    color: "from-green-500 to-emerald-600",
    detail: "Enterprise Scale",
  },
  {
    label: "Cloud Workloads",
    value: "100+",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
    detail: "Cloud ERP & Web Apps",
  },
  {
    label: "Tickets Resolved",
    value: "2,000+",
    icon: Ticket,
    color: "from-purple-500 to-violet-600",
    detail: "95% Satisfaction",
  },
  {
    label: "Security Incidents",
    value: "98%",
    icon: Shield,
    color: "from-red-500 to-rose-600",
    detail: "Resolved Rate",
  },
  {
    label: "Uptime",
    value: "99.5%",
    icon: Activity,
    color: "from-emerald-500 to-teal-600",
    detail: "Infrastructure",
  },
  {
    label: "Networks",
    value: "50+",
    icon: Network,
    color: "from-orange-500 to-amber-600",
    detail: "Routers Deployed",
  },
  {
    label: "Web Apps Built",
    value: "6+",
    icon: Code,
    color: "from-indigo-500 to-purple-600",
    detail: "Full-Stack Projects",
  },
]

function AnimatedCounter({ value }: { value: string }) {
  return (
    <motion.span
      className="text-3xl md:text-4xl font-bold"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {value}
    </motion.span>
  )
}

export function NocDashboard() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section id="dashboard" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 mb-4">
            <Activity className="w-3.5 h-3.5" />
            Infrastructure Command Center - Live Status
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Infrastructure <span className="text-primary">Command Center</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Operational metrics from across the enterprise infrastructure and development landscape
          </p>
        </motion.div>

        <motion.div ref={ref} style={{ y }} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {widgets.map((widget, index) => (
            <motion.div
              key={widget.label}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${widget.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-2.5 rounded-lg bg-gradient-to-br ${widget.color} mb-4`}>
                    <widget.icon className="w-5 h-5 text-white" />
                  </div>

                  <AnimatedCounter value={widget.value} />

                  <p className="text-sm text-muted-foreground mt-1">{widget.label}</p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">{widget.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
