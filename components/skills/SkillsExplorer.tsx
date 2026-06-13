"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, Sparkles, Cloud, Server, Network, Shield, Monitor, Cpu, Database, Activity } from "lucide-react"
import skillsData from "@/data/skills.json"

const iconMap: Record<string, typeof Cloud> = {
  Cloud, Server, Network, Shield, Monitor, Cpu, Database, Activity,
}

export function SkillsExplorer() {
  const [aiQuery, setAiQuery] = useState("")
  const [aiResponse, setAiResponse] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAiQuery = async () => {
    if (!aiQuery.trim()) return
    setIsLoading(true)
    setAiResponse(null)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: aiQuery,
          context: JSON.stringify(skillsData),
        }),
      })
      const data = await res.json()
      setAiResponse(data.response)
    } catch {
      const query = aiQuery.toLowerCase()
      for (const cat of skillsData.categories) {
        if (query.includes(cat.name.toLowerCase())) {
          setAiResponse(`Here are my ${cat.name} skills:\n${cat.skills.map((s) => `• ${s}`).join("\n")}`)
          return
        }
      }
      setAiResponse("I have skills across Cloud, Virtualization, Networking, Security, and more. Try asking about a specific category!")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI <span className="text-primary">Skills Explorer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ask me about any skill category, or browse through my expertise areas below
          </p>
        </motion.div>

        {/* AI Query */}
        <Card className="max-w-2xl mx-auto mb-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="p-6">
            <div className="flex gap-2">
              <Input
                value={aiQuery}
                onChange={(e) => setAiQuery(e.target.value)}
                placeholder='e.g., "Show networking skills" or "What cloud platforms?"'
                className="bg-background/50"
                onKeyDown={(e) => e.key === "Enter" && handleAiQuery()}
              />
              <Button onClick={handleAiQuery} disabled={isLoading}>
                <Bot className="w-4 h-4 mr-2" />
                {isLoading ? "Searching..." : "Ask AI"}
              </Button>
            </div>

            <AnimatePresence>
              {aiResponse && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">AI Response</span>
                  </div>
                  <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">{aiResponse}</pre>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>

        {/* Skills Browser */}
        <Tabs defaultValue={skillsData.categories[0].name} className="max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap h-auto gap-1 mb-8">
            {skillsData.categories.map((cat) => {
              const Icon = iconMap[cat.icon] || Cloud
              return (
                <TabsTrigger key={cat.name} value={cat.name} className="gap-2">
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </TabsTrigger>
              )
            })}
          </TabsList>

          {skillsData.categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Cloud
            return (
              <TabsContent key={cat.name} value={cat.name}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
                >
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Card className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-default group">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            )
          })}
        </Tabs>

        {/* Quick Stats */}
        <div className="flex justify-center gap-4 mt-12 flex-wrap">
          {skillsData.categories.map((cat) => (
            <Badge key={cat.name} variant="secondary" className="text-xs">
              {cat.name} ({cat.skills.length})
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
