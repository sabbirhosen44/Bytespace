import { ProgressCard } from "@/components/ui/ProgressCard";
import { SearchBar } from "@/components/ui/SearchBar";
import { StudentsCard } from "@/components/ui/StudentsCard";
import { TopicCard } from "@/components/ui/TopicCard";
import Image from "next/image";
import { GridBackground } from "../ui/GridBackground";

const IMG = "/images/hero";


type LimeShape = {
  src: string;
  className: string;
  delay: string;
  duration: string;
};

// Lime shapes: touch the screen edge on every breakpoint
const limeShapes: LimeShape[] = [
  {
    src: "frame2.png",
    className:
      "left-0 bottom-[30%] w-[80px] lg:bottom-auto lg:top-[221px] lg:w-[267px]",
    delay: "0s",
    duration: "7s",
  },
  {
    src: "cone2.png",
    className:
      "right-0 bottom-[24%] w-[70px] lg:bottom-auto lg:top-[220px] lg:w-[213px]",
    delay: "-2s",
    duration: "6.5s",
  },
];

type WhiteShape = {
  src: string;
  cx: number;
  cy: number;
  w: number;
  delay: string;
  duration: string;
};

// White shapes: desktop only, drawn in front of the big lime ring
const whiteShapes: WhiteShape[] = [
  { src: "cone1.png", cx: 1199, cy: 558, w: 192, delay: "-1s", duration: "6s" },
  { src: "frame1.png", cx: 271, cy: 565, w: 178, delay: "-3s", duration: "7s" },
  { src: "frame3.png", cx: 1282, cy: 838, w: 317, delay: "-2s", duration: "8s" },
  { src: "cone3.png", cx: 187, cy: 852, w: 348, delay: "-4s", duration: "7.5s" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-800 text-white [container-type:inline-size]">

      <div className="lg:relative lg:h-[71.1111cqw]">

        <div className="lg:absolute lg:left-0 lg:top-0 lg:h-[1024px] lg:w-[1440px] lg:origin-top-left lg:[scale:tan(atan2(100cqw,1440px))]">
          {/* Grid pattern */}
          <GridBackground animated />

          {/* Lime shapes */}
          {limeShapes.map((s) => (
            <div
              key={s.src}
              aria-hidden
              className={`pointer-events-none absolute z-10 ${s.className}`}
            >
              <Image
                src={`${IMG}/${s.src}`}
                alt=""
                width={400}
                height={400}
                style={{ animationDelay: s.delay, animationDuration: s.duration }}
                className="h-auto w-full animate-float select-none"
              />
            </div>
          ))}

          {/* Text block */}
          <div className="relative z-20 px-5 pt-28 text-center sm:px-10 sm:pt-32 lg:absolute lg:inset-x-0 lg:top-[168px] lg:px-0 lg:pt-0">
            <h1 className="mx-auto max-w-[900px] animate-fade-up font-heading text-heading-s font-semibold md:text-heading-m lg:text-heading-l">
              Get Access to Hundreds Courses Available
            </h1>
            <p
              style={{ animationDelay: "150ms" }}
              className="mx-auto mt-5 max-w-[860px] animate-fade-up text-body-s text-white/90 sm:text-body-m lg:mt-[34px] lg:text-body-l"
            >
              Unlock your creativity, gain valuable knowledge, and grow your
              business with our wide range of courses.
            </p>
            <div
              style={{ animationDelay: "300ms" }}
              className="mt-8 animate-fade-up sm:mt-10 lg:mt-[58px]"
            >
              <SearchBar />
            </div>
          </div>

          {/* Mobile / tablet visual */}
          <div className="relative mx-auto mt-10 h-[360px] w-full max-w-[640px] sm:h-[440px] lg:hidden">
            <div
              aria-hidden
              className="absolute left-1/2 top-[85px] z-0 size-[620px] -translate-x-1/2 rounded-full border-[172px] border-secondary-500 sm:size-[820px] sm:border-[228px]"
            />
            <div className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2">
              <Image
                src={`${IMG}/student.png`}
                alt="Smiling student with a laptop and headphones"
                width={578}
                height={541}
                className="h-[330px] w-auto max-w-none sm:h-[420px]"
              />
            </div>

            <TopicCard className="absolute left-2 top-[60px] z-20 hidden animate-float sm:left-10 sm:top-[80px] sm:block" />
            <ProgressCard
              style={{ animationDelay: "-3s" }}
              className="absolute right-0 top-[24px] z-20 w-[150px] animate-float sm:right-4 sm:top-[50px] sm:w-[210px]"
            />
            <StudentsCard
              style={{ animationDelay: "-2s" }}
              className="absolute bottom-2 left-0 z-20 animate-float sm:left-6"
            />
          </div>

          {/* Desktop visual (artboard coordinates) */}
          <div className="absolute inset-0 hidden lg:block">
            {/* Big lime ring */}
            <div
              aria-hidden
              className="absolute left-[145px] top-[582px] z-0 size-[1149px] rounded-full border-[320px] border-secondary-500"
            />

            {/* White shapes */}
            {whiteShapes.map((s) => (
              <div
                key={s.src}
                aria-hidden
                style={{ left: s.cx, top: s.cy, width: s.w }}
                className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2"
              >
                <Image
                  src={`${IMG}/${s.src}`}
                  alt=""
                  width={400}
                  height={400}
                  style={{ animationDelay: s.delay, animationDuration: s.duration }}
                  className="h-auto w-full animate-float select-none"
                />
              </div>
            ))}

            {/* Student */}
            <Image
              src={`${IMG}/student.png`}
              alt="Smiling student with a laptop and headphones"
              width={578}
              height={541}
              priority
              className="absolute left-[410px] top-[428px] z-10 h-[676px] w-[722px] max-w-none animate-fade-up object-contain"
            />

            {/* Floating cards */}
            <TopicCard
              style={{ animationDelay: "-1s" }}
              className="absolute left-[404px] top-[639px] z-20 animate-float"
            />
            <ProgressCard
              style={{ animationDelay: "-3s", animationDuration: "7s" }}
              className="absolute left-[842px] top-[651px] z-20 w-[232px] animate-float"
            />
            <StudentsCard
              style={{ animationDelay: "-2s", animationDuration: "8s" }}
              className="absolute left-[329px] top-[837px] z-20 w-[257px] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}