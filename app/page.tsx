import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { ImpactTimeline } from "@/components/home/ImpactTimeline";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CtaSection } from "@/components/home/CtaSection";

export const revalidate = 60; // Revalidate cache every 60 seconds

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactTimeline />
      <ProjectsSection />
      <PartnersSection />
      <BlogPreview />
      <CtaSection />
    </>
  );
}
