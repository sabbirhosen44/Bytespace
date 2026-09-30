import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { SearchBar } from "@/components/ui/SearchBar";
import { TopicCard } from "@/components/ui/TopicCard";
import { ProgressCard } from "@/components/ui/ProgressCard";
import { StudentsCard } from "@/components/ui/StudentsCard";
import { cn } from "@/lib/utils";

const IMG = "/images/hero";

type EdgeShape = {
  src: string;
  className: string;
  delay: string;
  duration: string;
};

// Lime shapes are cropped by the section edge (as in Figma)
const edgeShapes: EdgeShape[] = [
  {
    src: "frame2.png", // lime squiggle
    className:
      "left-0 bottom-[30%] w-[80px] lg:bottom-auto lg:top-[223px] lg:w-[265px]",
    delay: "0s",
    duration: "7s",
  },
  {
    src: "cone2.png", // lime cylinder
    className:
      "right-0 bottom-[24%] w-[70px] lg:bottom-auto lg:top-[220px] lg:w-[212px]",
    delay: "-2s",
    duration: "6.5s",
  },
];

type StageShape = {
  src: string;
  x: number; // centre offset from the page centre (px). negative = left, positive = right
  top: number; // centre distance from the top (px)
  w: number; // width (px)
  delay: string;
  duration: string;
};

// Positioned from the page centre, same as the big lime ring,
// so they keep the same relation to it at every width.
const stageShapes: StageShape[] = [
  { src: "cone1.png", x: 479, top: 555, w: 191, delay: "-1s", duration: "6s" }, // white triangle
  { src: "frame1.png", x: -447, top: 569, w: 173, delay: "-3s", duration: "7s" }, // small white squiggle
  { src: "frame3.png", x: 552, top: 835, w: 317, delay: "-2s", duration: "8s" }, // big white squiggle (touches ring border)
  { src: "cone3.png", x: -508, top: 851, w: 343, delay: "-4s", duration: "7.5s" }, // white donut (slightly over the ring)
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-600 text-white lg:h-[1024px]">
      {/* Grid pattern (120px cells on desktop) */}
      <div
        aria-hidden
        className="absolute inset-0 [--grid:60px] lg:[--grid:120px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "var(--grid) var(--grid)",
          backgroundPosition: "-1px -1px",
        }}
      />

      {/* Edge shapes (all screens) */}
      {edgeShapes.map((s) => (
        <div
          key={s.src}
          aria-hidden
          className={cn("pointer-events-none absolute", s.className)}
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

      {/* Desktop stage (max 1440px, centered) */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="relative mx-auto h-full w-full max-w-[1440px]">
          {/* Big lime ring: bottom layer */}
          <Image
            src={`${IMG}/ellipse-big.png`}
            alt=""
            aria-hidden
            width={1120}
            height={440}
            className="absolute bottom-0 left-1/2 z-0 h-auto w-[1120px] max-w-none -translate-x-1/2"
          />

          {/* White shapes: in front of the ring (xl and up) */}
          {stageShapes.map((s) => (
            <div
              key={s.src}
              aria-hidden
              style={{ left: `calc(50% + ${s.x}px)`, top: s.top, width: s.w }}
              className="pointer-events-none absolute z-10 hidden -translate-x-1/2 -translate-y-1/2 xl:block"
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

          {/* Student: hair pokes out above the ring */}
          <div className="absolute left-[calc(50%+50px)] top-[507px] z-10 -translate-x-1/2">
            <Image
              src={`${IMG}/student.png`}
              alt="Smiling student with a laptop and headphones"
              width={560}
              height={700}
              priority
              className="h-[520px] w-auto max-w-none animate-fade-up"
            />
          </div>

          {/* Floating cards */}
          <TopicCard
            style={{ animationDelay: "-1s" }}
            className="absolute left-[calc(50%-315px)] top-[640px] z-20 animate-float"
          />
          <ProgressCard
            style={{ animationDelay: "-3s", animationDuration: "7s" }}
            className="absolute left-[calc(50%+123px)] top-[652px] z-20 w-[231px] animate-float"
          />
          <StudentsCard
            style={{ animationDelay: "-2s", animationDuration: "8s" }}
            className="absolute left-[calc(50%-391px)] top-[838px] z-20 w-[257px] animate-float"
          />
        </div>
      </div>

      <Navbar />

      <Container className="relative z-10 pt-28 text-center sm:pt-32 lg:pt-[167px]">
        <h1 className="mx-auto max-w-[900px] animate-fade-up font-heading text-heading-s font-semibold md:text-heading-m lg:text-heading-l">
          Get Access to Hundreds Courses Available
        </h1>
        <p
          style={{ animationDelay: "150ms" }}
          className="mx-auto mt-5 max-w-[860px] animate-fade-up text-body-s text-white/90 sm:text-body-m lg:mt-[34px] lg:text-body-l"
        >
          Unlock your creativity, gain valuable knowledge, and grow your business
          with our wide range of courses.
        </p>
        <div
          style={{ animationDelay: "300ms" }}
          className="mt-8 animate-fade-up sm:mt-10 lg:mt-[60px]"
        >
          <SearchBar />
        </div>

        {/* Mobile / tablet visual */}
        <div className="relative mx-auto mt-10 h-[360px] w-full max-w-[640px] sm:h-[440px] lg:hidden">
          <Image
            src={`${IMG}/ellipse-big.png`}
            alt=""
            aria-hidden
            width={1120}
            height={440}
            className="absolute bottom-0 left-1/2 z-0 h-auto w-[700px] max-w-none -translate-x-1/2 sm:w-[880px]"
          />
          <div className="absolute -bottom-3 left-1/2 z-10 ml-6 -translate-x-1/2">
            <Image
              src={`${IMG}/student.png`}
              alt="Smiling student with a laptop and headphones"
              width={560}
              height={700}
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
      </Container>
    </section>
  );
}