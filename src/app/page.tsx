import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { CourseExplorer } from "@/components/sections/CourseExplorer";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { GrowthSection } from "@/components/sections/GrowthSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <CourseExplorer />
      <LearningPaths />
      <GrowthSection />
    </main>
  );
}