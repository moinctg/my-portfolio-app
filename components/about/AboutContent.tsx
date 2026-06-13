"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Download, Mail, MapPin, Phone, Calendar, Award, Code2, Server, Shield, Network } from "lucide-react"
import resume from "@/data/resume.json"

const highlights = [
  { icon: Server, label: "12+ Years", sub: "IT Infrastructure" },
  { icon: Network, label: "50+ Networks", sub: "MikroTik & Cisco" },
  { icon: Code2, label: "6+ Apps", sub: "Full-Stack Projects" },
  { icon: Shield, label: "98% Security", sub: "Incident Resolution" },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <motion.div
          className="flex flex-col md:flex-row items-start gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="shrink-0">
            <Avatar className="w-32 h-32 border-2 border-primary/30">
              <AvatarFallback className="text-3xl bg-gradient-to-br from-primary to-purple-600 text-white">
                MK
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{resume.name}</h1>
            <p className="text-lg text-primary font-medium mb-4">{resume.title}</p>
            <p className="text-muted-foreground leading-relaxed mb-6">{resume.bio}</p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href={`mailto:${resume.contact.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Card className="p-4 bg-card/50 backdrop-blur-sm border-border text-center hover:border-primary/50 transition-colors">
                  <Icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-lg font-bold">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.sub}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border h-full">
              <h2 className="text-xl font-bold mb-6">Personal Information</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: resume.contact.email },
                  { icon: Phone, label: "Phone", value: resume.contact.phone },
                  { icon: MapPin, label: "Location", value: resume.contact.location },
                  { icon: Calendar, label: "Experience", value: "12+ Years" },
                  { icon: Award, label: "Certifications", value: "3+ Professional" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{label}</p>
                      <p className="text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border h-full">
              <h2 className="text-xl font-bold mb-6">Core Expertise</h2>
              <div className="space-y-4">
                {[
                  { area: "Network Infrastructure", level: 95 },
                  { area: "System Administration", level: 90 },
                  { area: "Full-Stack Development", level: 85 },
                  { area: "AI & Machine Learning", level: 75 },
                  { area: "ERP & Business Systems", level: 85 },
                  { area: "Security Solutions", level: 88 },
                ].map((skill) => (
                  <div key={skill.area}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.area}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <h2 className="text-xl font-bold mb-6">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resume.education.map((edu) => (
                <div key={edu.degree} className="flex gap-4 p-4 rounded-lg bg-secondary/50">
                  <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{edu.degree}</p>
                    <p className="text-xs text-primary">{edu.institution}</p>
                    <div className="flex gap-3 mt-1 text-xs text-muted-foreground">
                      <span>{edu.year}</span>
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
