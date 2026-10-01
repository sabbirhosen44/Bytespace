import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DesignStage } from "@/components/ui/DesignStage";
import { GridBackground } from "@/components/ui/GridBackground";

const IMG = "/images/cta";

type Shape = {
  src: string;
  x: number;
  y: number;
  w: number;
};

const shapes: Shape[] = [
  { src: "squiggle-lime-tl.png", x: -30, y: -1, w: 215 },
  { src: "squiggle-white.png", x: 210, y: 33, w: 116 },
  { src: "triangle-lime.png", x: 1105, y: 22, w: 125 },
  { src: "cylinder-white.png", x: 1270, y: 40, w: 190 },
  { src: "cone-white.png", x: 0, y: 242, w: 115 },
  { src: "donut-lime.png", x: 70, y: 358, w: 237 },
  { src: "squiggle-lime-br.png", x: 1180, y: 347, w: 237 },
];

export function CreatorCTA() {
  return (
    <DesignStage
      className="bg-primary-800 text-white"
      innerClassName="relative min-h-[488px]"
    >
      <GridBackground />

      {/* Shapes (desktop) */}
      {shapes.map((s) => (
        <div
          key={s.src}
          aria-hidden
          style={{
            left: s.x,
            top: s.y,
            width: s.w,
          }}
          className="pointer-events-none absolute z-10 hidden lg:block"
        >
          <Image
            src={`${IMG}/${s.src}`}
            alt=""
            width={400}
            height={400}
            className="h-auto w-full select-none"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 px-5 py-16 text-center md:px-10 lg:absolute lg:inset-x-0 lg:top-[86px] lg:p-0">
        <h2 className="font-heading text-heading-s font-semibold md:text-heading-m">
          Unlock Your Potential as a
          <br className="hidden lg:block" /> Creator with ByteSpace
        </h2>

        <p className="mx-auto mt-5 max-w-[640px] font-body text-body-m text-white/90 lg:mt-[38px] lg:max-w-none lg:text-body-l">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a
          <br className="hidden lg:block" /> part of a community comprising
          over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your
          <br className="hidden lg:block" /> expertise by publishing your
          finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-8 lg:mt-10">
          <Button href="/register" className="h-[46px] w-[172px] px-0">
            Join as Creator
          </Button>
        </div>
      </div>
    </DesignStage>
  );
}