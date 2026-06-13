import { HeroSection } from "@/components/hero/HeroSection"
import { TimelineSection } from "@/components/timeline/TimelineSection"
import { NocDashboard } from "@/components/dashboard/NocDashboard"
import { SkillsExplorer } from "@/components/skills/SkillsExplorer"
import { DataCenterSection } from "@/components/datacenter/DataCenterSection"
import { ProjectShowcase } from "@/components/projects/ProjectShowcase"
import { InterviewMode } from "@/components/interview/InterviewMode"
import { CertificationsGalaxy } from "@/components/certifications/CertificationsGalaxy"
import { TechStackCloud } from "@/components/techstack/TechStackCloud"
import { AiResumeChat } from "@/components/chat/AiResumeChat"

export default function Home() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <NocDashboard />
      <SkillsExplorer />
      <DataCenterSection />
      <ProjectShowcase />
      <InterviewMode />
      <CertificationsGalaxy />
      <TechStackCloud />
      <AiResumeChat />
    </>
  )
}
