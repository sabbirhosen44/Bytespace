import Image from "next/image";
import { CourseCard } from "@/components/cards/CourseCard";
import { StudentsCard } from "@/components/ui/StudentsCard";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

const backCourse = courses[1];
const frontCourse = courses[2];

type DecorProps = {
  src: string;
  width: number;
  height: number;
  className: string;
  delay: number;
  floatDelay?: number;
  slow?: boolean;
};

function Decor({ src, width, height, className, delay, floatDelay = 0, slow }: DecorProps) {
  return (
    <div className={cn("absolute animate-pop", className)} style={{ animationDelay: `${delay}ms` }}>
      <div
        className={slow ? "animate-float-slow" : "animate-float"}
        style={{ animationDelay: `${floatDelay}ms` }}
      >
        <Image src={src} alt="" width={width} height={height} />
      </div>
    </div>
  );
}

export function AuthIllustration() {
  return (
    <div
      aria-hidden
      inert
      className="pointer-events-none absolute left-[122px] top-[305px] hidden h-[558px] w-[484px] lg:block"
    >
      <div className="absolute left-0 top-[90px] w-[373px] animate-slide-in-left [animation-delay:250ms]">
        <CourseCard course={backCourse} />
      </div>
      <div className="absolute left-[111px] top-0 w-[373px] animate-scale-in [animation-delay:400ms]">
        <CourseCard course={frontCourse} />
      </div>

      <div className="absolute left-[226px] top-[435px] animate-scale-in [animation-delay:650ms]">
        <StudentsCard variant="lime" />
      </div>

      <Decor src="/images/icons/cone-lime.svg" width={102} height={96}
        className="left-[50px] top-[40px]" delay={800} floatDelay={0} />
      <Decor src="/images/cta/triangle-lime.png" width={125} height={139}
        className="left-0 top-[419px]" delay={900} floatDelay={-2000} slow />
      <Decor src="/images/cta/squiggle-white.png" width={116} height={124}
        className="left-[381px] top-[350px]" delay={1000} floatDelay={-4000} />
    </div>
  );
}