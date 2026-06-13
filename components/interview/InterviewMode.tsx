"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Bot, Loader2, CheckCircle, XCircle, ArrowRight } from "lucide-react"

const interviewQuestions = [
  "Tell me about your disaster recovery strategy.",
  "How do you secure Active Directory?",
  "How would you handle a ransomware incident?",
  "Explain your approach to cloud migration.",
  "How do you manage network segmentation?",
  "What's your experience with zero-trust architecture?",
]

const sampleAnswers: Record<string, string> = {
  "Tell me about your disaster recovery strategy.": "Excellent! A strong DR strategy includes: 1) Regular backups with 3-2-1 rule, 2) Documented RTO/RPO for each system, 3) Multi-site VMware SRM for automated failover, 4) Quarterly DR drills, 5) Veeam for backup orchestration.",
  "How do you secure Active Directory?": "Great approach! Key measures: 1) Tiered administration model, 2) LAPS for local admin passwords, 3) Privileged Identity Management (PIM), 4) Regular security audits, 5) MFA for all admin accounts, 6) Monitor with Microsoft Defender for Identity.",
  "How would you handle a ransomware incident?": "Solid response! The correct IR流程: 1) Isolate affected systems immediately, 2) Activate incident response team, 3) Preserve forensic evidence, 4) Identify patient zero, 5) Restore from clean backups, 6) Implement containment measures, 7) Post-incident review and improve controls.",
}

export function InterviewMode() {
  const [isActive, setIsActive] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [userAnswer, setUserAnswer] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const startInterview = () => {
    setIsActive(true)
    setCurrentQuestion(0)
    setFeedback(null)
    setUserAnswer("")
    setShowAnswer(false)
  }

  const evaluateAnswer = async () => {
    if (!userAnswer.trim()) return
    setIsEvaluating(true)

    try {
      const res = await fetch("/api/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: interviewQuestions[currentQuestion],
          answer: userAnswer,
        }),
      })
      const data = await res.json()
      setFeedback(data.feedback || "Good answer! Consider adding more specific metrics and examples.")
    } catch {
      setFeedback("Good answer! Consider adding more specific metrics and examples.")
    } finally {
      setIsEvaluating(false)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < interviewQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setUserAnswer("")
      setFeedback(null)
      setShowAnswer(false)
    } else {
      setIsActive(false)
    }
  }

  return (
    <section id="interview" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI <span className="text-primary">Interview Simulator</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Practice technical interviews with AI-powered feedback and evaluation
          </p>
        </motion.div>

        {!isActive ? (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Card className="max-w-md mx-auto p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="text-6xl mb-6">🎤</div>
              <h3 className="text-2xl font-bold mb-3">Ready for an Interview?</h3>
              <p className="text-muted-foreground mb-6 text-sm">
                I'll act as a technical recruiter and ask you infrastructure & security questions.
                Your answers will be evaluated with AI-powered feedback.
              </p>
              <Button size="xl" onClick={startInterview}>
                Start Interview
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {/* Progress */}
            <div className="flex justify-center gap-2">
              {interviewQuestions.slice(0, 6).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentQuestion
                      ? "bg-primary"
                      : i < currentQuestion
                        ? "bg-success"
                        : "bg-secondary"
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-primary">AI Recruiter</p>
                    <p className="text-xs text-muted-foreground">
                      Question {currentQuestion + 1} of {interviewQuestions.length}
                    </p>
                  </div>
                </div>
                <p className="text-lg font-medium">{interviewQuestions[currentQuestion]}</p>
              </Card>
            </motion.div>

            {/* Answer Input */}
            <Card className="p-4 bg-card/50 backdrop-blur-sm">
              <div className="flex gap-2 mb-3">
                <Button
                  variant={isRecording ? "destructive" : "secondary"}
                  size="sm"
                  onClick={() => setIsRecording(!isRecording)}
                >
                  {isRecording ? (
                    <MicOff className="w-4 h-4 mr-2" />
                  ) : (
                    <Mic className="w-4 h-4 mr-2" />
                  )}
                  {isRecording ? "Stop" : "Record"}
                </Button>
                <span className="text-xs text-muted-foreground self-center">
                  Or type your answer below
                </span>
              </div>
              <textarea
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full min-h-[120px] p-3 rounded-lg bg-background border border-input text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="flex gap-2 mt-3">
                <Button onClick={evaluateAnswer} disabled={!userAnswer.trim() || isEvaluating} size="lg">
                  {isEvaluating ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <CheckCircle className="w-4 h-4 mr-2" />
                  )}
                  {isEvaluating ? "Evaluating..." : "Submit Answer"}
                </Button>
                <Button variant="outline" onClick={() => setShowAnswer(!showAnswer)}>
                  {showAnswer ? "Hide" : "Show"} Sample Answer
                </Button>
              </div>
            </Card>

            {/* Sample Answer */}
            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Card className="p-4 bg-green-500/5 border-green-500/20">
                    <p className="text-sm font-medium text-green-400 mb-2">Sample Answer:</p>
                    <p className="text-sm text-muted-foreground">
                      {sampleAnswers[interviewQuestions[currentQuestion]] ||
                        "Focus on specific examples, mention metrics (RTO/RPO), and explain your decision-making process."}
                    </p>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Feedback */}
            <AnimatePresence>
              {feedback && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">AI Evaluation</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{feedback}</p>
                    <div className="flex justify-end mt-3">
                      <Button onClick={nextQuestion} size="sm">
                        {currentQuestion < interviewQuestions.length - 1 ? "Next Question" : "Finish Interview"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  )
}
