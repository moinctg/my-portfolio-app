"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Bot, Sparkles, ChevronDown, Globe, Link, Mail } from "lucide-react"
import { ParticleBackground } from "@/components/animations/ParticleBackground"

const typewriterWords = [
  "Senior IT Administrator",
  "Full Stack Developer",
  "Cloud & Network Architect",
  "AI/ML Engineer",
  "Cloud Architect",
  "Security Specialist",
  "AI Infrastructure Engineer",
]

const quickPrompts = [
  "What cloud platforms do you manage?",
  "Tell me about your VMware experience.",
  "What security projects have you delivered?",
]

const floatingCards = [
    { title: "300+", subtitle: "Endpoints Managed", icon: "🖥", color: "from-blue-500/20 to-cyan-500/20", x: 15, y: 20 },
    { title: "99.5%", subtitle: "System Uptime", icon: "📊", color: "from-green-500/20 to-emerald-500/20", x: 75, y: 15 },
    { title: "12+", subtitle: "Years Experience", icon: "⚡", color: "from-purple-500/20 to-pink-500/20", x: 80, y: 65 },
    { title: "2,000+", subtitle: "Tickets Resolved", icon: "🎫", color: "from-orange-500/20 to-yellow-500/20", x: 10, y: 70 },
]

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [chatInput, setChatInput] = useState("")
  const [chatResponse, setChatResponse] = useState<string | null>(null)
  const [isChatting, setIsChatting] = useState(false)

  useEffect(() => {
    const word = typewriterWords[currentWordIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && displayText === word) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length)
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? word.substring(0, displayText.length - 1)
              : word.substring(0, displayText.length + 1)
          )
        },
        isDeleting ? 50 : 100
      )
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentWordIndex])

  const handleChat = useCallback(async () => {
    if (!chatInput.trim()) return
    setIsChatting(true)
    setChatResponse(null)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: chatInput }),
      })
      const data = await res.json()
      setChatResponse(data.response)
    } catch {
      setChatResponse("I'm here to help! Feel free to ask about my experience and skills.")
    } finally {
      setIsChatting(false)
    }
  }, [chatInput])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-background pointer-events-none" />

      {/* Floating Cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={card.title}
          className="absolute hidden lg:block"
          initial={{ x: `${card.x}vw`, y: `${card.y}vh`, opacity: 0 }}
          animate={{
            x: [`${card.x}vw`, `${card.x + 2}vw`, `${card.x}vw`],
            y: [`${card.y}vh`, `${card.y - 2}vh`, `${card.y}vh`],
            opacity: 1,
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Card className={`bg-gradient-to-br ${card.color} border-blue-500/20 backdrop-blur-xl p-4 w-40`}>
            <div className="text-2xl mb-1">{card.icon}</div>
            <div className="text-lg font-bold text-foreground">{card.title}</div>
            <div className="text-xs text-muted-foreground">{card.subtitle}</div>
          </Card>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            AI-Enhanced Portfolio
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Hello, I&apos;m Md. Moinuddin Kamal
            </span>
          </h1>

          <div className="h-12 md:h-14 mb-6">
            <span className="text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-0.5 h-6 bg-primary ml-1"
              />
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Senior IT Administrator &amp;  Full Stack Developer with 12+ years of experience in network management, system administration, and web development. Bridging infrastructure excellence with full-stack development and AI-driven automation.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { icon: Globe, href: "#", label: "GitHub" },
              { icon: Link, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 border border-border transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* AI Chat Input */}
          <Card className="max-w-xl mx-auto bg-card/50 backdrop-blur-xl border-blue-500/20">
            <div className="p-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Bot className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    placeholder="Ask my AI assistant anything..."
                    className="pl-10 bg-background/50"
                    onKeyDown={(e) => e.key === "Enter" && handleChat()}
                  />
                </div>
                <Button onClick={handleChat} disabled={isChatting || !chatInput.trim()} size="lg">
                  {isChatting ? "Thinking..." : "Ask AI"}
                </Button>
              </div>

              <AnimatePresence>
                {chatResponse && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10 text-sm text-left"
                  >
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Bot className="w-4 h-4" />
                      <span className="font-medium">AI Assistant</span>
                    </div>
                    <p className="text-muted-foreground">{chatResponse}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick Prompts */}
              <div className="flex flex-wrap gap-2 mt-3 justify-center">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setChatInput(prompt)
                      setChatResponse(null)
                    }}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-primary/20 border border-border transition-colors text-muted-foreground hover:text-foreground"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  )
}
