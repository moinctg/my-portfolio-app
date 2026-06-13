import { NextResponse } from "next/server"

const evaluationCriteria = [
  "Uses specific metrics and numbers (RTO, RPO, uptime percentages)",
  "Demonstrates hands-on experience with relevant tools",
  "Shows understanding of best practices and industry standards",
  "Provides structured, logical answer flow",
  "Mentions security considerations where relevant",
]

export async function POST(req: Request) {
  try {
    const { question, answer } = await req.json()

    if (!question || !answer) {
      return NextResponse.json({ feedback: "Please provide both question and answer." }, { status: 400 })
    }

    const answerLower = answer.toLowerCase()
    let score = 0
    const strengths: string[] = []
    const improvements: string[] = []

    if (/\d+%/.test(answer) || /\d+-year/.test(answer) || /\d+ (hours|minutes|days)/.test(answer)) {
      score += 25
      strengths.push("Good use of specific metrics")
    } else {
      improvements.push("Include specific metrics (percentages, timeframes, or quantities)")
    }

    if (/implement|deploy|configure|manage|migrate|architect/i.test(answer)) {
      score += 25
      strengths.push("Shows hands-on implementation experience")
    } else {
      improvements.push("Describe specific implementations you've led")
    }

    if (/best practice|framework|standard|methodology|industry/i.test(answer)) {
      score += 20
      strengths.push("References industry best practices")
    } else {
      improvements.push("Reference relevant frameworks or standards")
    }

    if (/first|then|next|finally|step|phase/i.test(answer)) {
      score += 15
      strengths.push("Well-structured logical flow")
    } else {
      improvements.push("Structure your answer with clear steps or phases")
    }

    if (/security|risk|compliance|audit|protect/i.test(answer)) {
      score += 15
      strengths.push("Incorporates security considerations")
    }

    let feedback = ""
    if (score >= 80) {
      feedback = "Strong answer! "
    } else if (score >= 50) {
      feedback = "Good answer with room for improvement. "
    } else {
      feedback = "Consider restructuring your answer for more impact. "
    }

    if (strengths.length > 0) {
      feedback += `Strengths: ${strengths.join(", ")}. `
    }

    if (improvements.length > 0) {
      feedback += `To improve: ${improvements.join(", ")}. `
    }

    feedback += `Overall Score: ${score}/100.`

    return NextResponse.json({ feedback, score, strengths, improvements })
  } catch {
    return NextResponse.json({
      feedback: "Good answer! Focus on including specific metrics, implementation details, and a structured approach for maximum impact. Score: 60/100.",
      score: 60,
    })
  }
}
