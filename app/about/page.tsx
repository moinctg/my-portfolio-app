import { AboutContent } from "@/components/about/AboutContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - Md. Moinuddin Kamal",
  description:
    "Learn more about Md. Moinuddin Kamal, Senior IT Administrator and Full Stack Developer with 12+ years of experience.",
}

export default function AboutPage() {
  return <AboutContent />
}
