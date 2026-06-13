import { NextResponse } from "next/server"
import resume from "@/data/resume.json"
import projects from "@/data/projects.json"

let uploadedDocs: { content: string; filename: string }[] = []

function searchContent(query: string): string {
  const q = query.toLowerCase()
  const results: string[] = []

  const bioMatch = resume.bio.toLowerCase().includes(q)
  if (bioMatch) results.push(`Bio: ${resume.bio}`)

  for (const exp of resume.experience) {
    if (
      exp.role.toLowerCase().includes(q) ||
      exp.company.toLowerCase().includes(q) ||
      exp.description.toLowerCase().includes(q) ||
      exp.achievements.some((a) => a.toLowerCase().includes(q))
    ) {
      results.push(`${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`)
      results.push(...exp.achievements.filter((a) => a.toLowerCase().includes(q)))
    }
  }

  for (const cert of resume.certifications) {
    if (
      cert.name.toLowerCase().includes(q) ||
      cert.issuer.toLowerCase().includes(q)
    ) {
      results.push(`Certification: ${cert.name} - ${cert.issuer}`)
    }
  }

  for (const project of projects) {
    if (
      project.title.toLowerCase().includes(q) ||
      project.problem.toLowerCase().includes(q) ||
      project.solution.toLowerCase().includes(q) ||
      project.technologies.some((t) => t.toLowerCase().includes(q))
    ) {
      results.push(`Project: ${project.title}`)
      results.push(`Problem: ${project.problem}`)
      results.push(`Solution: ${project.solution}`)
      results.push(`Impact: ${project.impact}`)
    }
  }

  for (const doc of uploadedDocs) {
    if (doc.content.toLowerCase().includes(q)) {
      const snippet = doc.content.substring(
        Math.max(0, doc.content.toLowerCase().indexOf(q) - 100),
        Math.min(doc.content.length, doc.content.toLowerCase().indexOf(q) + 200)
      )
      results.push(`From ${doc.filename}: ...${snippet}...`)
    }
  }

  return results.length > 0 ? results.join("\n\n") : ""
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    if (body.upload) {
      uploadedDocs.push({ content: body.content, filename: body.filename || "document.txt" })
      return NextResponse.json({ success: true })
    }

    const { query } = body
    if (!query) {
      return NextResponse.json({ response: "Please ask a question!" }, { status: 400 })
    }

    const context = searchContent(query)

    if (!context) {
      return NextResponse.json({
        response:
          "I couldn't find specific information matching your query. Try asking about his experience, certifications, projects, or specific technologies like MikroTik, Cisco, Django, or machine learning.",
      })
    }

    return NextResponse.json({
      response: `Based on the portfolio data:\n\n${context}\n\nIs there anything specific you'd like to know more about?`,
    })
  } catch {
    return NextResponse.json({
      response: "I can help you explore Md. Moinuddin's professional background. What would you like to know?",
    })
  }
}
