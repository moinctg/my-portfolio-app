import { ContactContent } from "@/components/contact/ContactContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - Md. Moinuddin Kamal",
  description: "Get in touch with Md. Moinuddin Kamal for infrastructure projects, consulting, or collaboration.",
}

export default function ContactPage() {
  return <ContactContent />
}
