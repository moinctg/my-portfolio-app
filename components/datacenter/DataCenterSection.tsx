"use client"

import { motion } from "framer-motion"
import { Users, Shield, Server, HardDrive, Archive, ArrowDown, Network } from "lucide-react"

const nodes = [
  { icon: Users, label: "Users", sub: "5,000+ Enterprise Users", color: "from-blue-500 to-blue-600", y: 0 },
  { icon: Shield, label: "Firewall", sub: "Fortigate 600E HA Cluster", color: "from-red-500 to-rose-600", y: 1 },
  { icon: Network, label: "Core Switch", sub: "Cisco Nexus 9000 Series", color: "from-cyan-500 to-blue-600", y: 2 },
  { icon: Server, label: "VMware Cluster", sub: "vSphere 8 - 120 VMs", color: "from-purple-500 to-violet-600", y: 3 },
  { icon: HardDrive, label: "Storage", sub: "vSAN & NetApp 1.2PB", color: "from-orange-500 to-amber-600", y: 4 },
  { icon: Archive, label: "Backup", sub: "Veeam - Daily Backups", color: "from-emerald-500 to-teal-600", y: 5 },
]

const lineTransition = {
  duration: 3,
  repeat: Infinity,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
}

export function DataCenterSection() {
  return (
    <section id="datacenter" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/3 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Data Center <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end infrastructure topology with live traffic flow visualization
          </p>
        </motion.div>

        <div className="relative">
          {/* SVG Flow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ minHeight: 600 }}>
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(59,130,246)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(59,130,246)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {nodes.slice(0, -1).map((_, i) => (
              <motion.line
                key={i}
                x1="50%"
                y1={`${(i + 1) * 14 + 8}%`}
                x2="50%"
                y2={`${(i + 2) * 14 + 2}%`}
                stroke="url(#flowGrad)"
                strokeWidth="2"
                strokeDasharray="8 8"
                animate={{ strokeDashoffset: [1000, 0] }}
                transition={lineTransition}
              />
            ))}
          </svg>

          {/* Nodes */}
          <div className="relative space-y-6 py-8">
            {nodes.map((node, index) => {
              const Icon = node.icon
              return (
                <motion.div
                  key={node.label}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 w-full max-w-md hover:border-primary/50 transition-all group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${node.color} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{node.label}</h3>
                        <p className="text-sm text-muted-foreground">{node.sub}</p>
                      </div>
                      {index < nodes.length - 1 && (
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                        >
                          <ArrowDown className="w-5 h-5 text-primary/60" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
