import { Container } from "@/components/ui/Container";
import { DesignStage } from "@/components/ui/DesignStage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { learningPaths } from "@/data/learning-paths";

export function LearningPaths() {
  return (
    <DesignStage className="bg-white">
      <Container className="pb-20 pt-14 lg:px-[120px] lg:pb-[120px] lg:pt-[69px]">
        <SectionHeading
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-[68px] lg:grid-cols-[repeat(6,167px)] lg:justify-center lg:gap-10">
          {learningPaths.map((item) => (
            <CategoryCard key={item.label} item={item} />
          ))}
        </ul>
      </Container>
    </DesignStage>
  );
}