import OpenAI from "openai"

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function getChatCompletion(messages: { role: "user" | "assistant" | "system"; content: string }[]) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are Ahmed's AI portfolio assistant. Answer questions about Ahmed's professional experience, skills, certifications, and projects based on the context provided. Be concise and professional.",
      },
      ...messages,
    ],
    temperature: 0.7,
    max_tokens: 500,
  })

  return response.choices[0]?.message?.content || "I'm sorry, I couldn't process that request."
}
