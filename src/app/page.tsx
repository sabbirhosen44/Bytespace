import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { CreatorCTA } from "@/components/sections/CreatorCTA";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <CourseExplorer />
      <LearningPaths />
      <GrowthSection />
      <CreatorCTA />
      <Testimonials />
    </main>
  );
}