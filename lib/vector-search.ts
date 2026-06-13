type Document = {
  id: string
  content: string
  metadata: Record<string, string>
  embedding?: number[]
}

const documents: Document[] = []

export function addDocument(content: string, metadata: Record<string, string> = {}) {
  const id = `doc-${documents.length + 1}`
  documents.push({ id, content, metadata })
  return id
}

export function loadResumeData() {
  const { resume } = require("@/data/resume.json")

  addDocument(resume.bio, { type: "bio" })

  for (const exp of resume.experience) {
    addDocument(`${exp.role} at ${exp.company} (${exp.period}): ${exp.description}`, {
      type: "experience",
      role: exp.role,
      company: exp.company,
    })
    for (const achievement of exp.achievements) {
      addDocument(achievement, { type: "achievement", role: exp.role })
    }
  }

  for (const cert of resume.certifications) {
    addDocument(`${cert.name} by ${cert.issuer} (${cert.year})`, {
      type: "certification",
      issuer: cert.issuer,
    })
  }
}

export function searchDocuments(query: string): Document[] {
  const q = query.toLowerCase()
  return documents.filter(
    (doc) =>
      doc.content.toLowerCase().includes(q) ||
      Object.values(doc.metadata).some((v) => v.toLowerCase().includes(q))
  )
}

export function getContextForQuery(query: string): string {
  const results = searchDocuments(query).slice(0, 5)
  if (results.length === 0) return ""
  return results.map((r) => r.content).join("\n\n")
}
