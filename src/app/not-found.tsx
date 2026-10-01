import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { DesignStage } from "@/components/ui/DesignStage";
import { GridBackground } from "@/components/ui/GridBackground";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Page Not Found | ByteSpace",
};

export default function NotFound() {
  return (
    <>

      <Navbar />
      <main className="overflow-hidden bg-primary-800">
        <DesignStage
          className="relative"
          innerClassName="relative flex flex-col items-center px-5 pb-24 pt-36 text-center text-white sm:px-8 lg:block lg:h-[958px] lg:p-0"
        >
          <GridBackground animated />
          <p
            aria-hidden
            className="pointer-events-none animate-rise select-none bg-linear-to-b from-secondary-400 from-20% to-transparent to-85% bg-clip-text font-heading text-[length:32vw] font-semibold leading-none text-transparent lg:absolute lg:inset-x-0 lg:top-[150px] lg:text-[length:480px]"
          >
            404
          </p>

          <Reveal
            as="h1"
            delay={450}
            className="relative -mt-[7vw] font-heading text-heading-s font-semibold sm:text-heading-m lg:absolute lg:inset-x-0 lg:top-[522px] lg:mt-0 lg:text-heading-l"
          >
            <span className="sr-only">404: </span>
            The page you are looking
            <br className="hidden lg:block" /> for doesn&rsquo;t exist
          </Reveal>

          <Reveal
            as="p"
            delay={600}
            className="mt-6 max-w-[480px] text-body-m text-white/90 lg:absolute lg:inset-x-0 lg:top-[726px] lg:mx-auto lg:mt-0 lg:max-w-none lg:text-body-l"
          >
            Try to use a correct url or go back to homepage to start again
          </Reveal>

          <Reveal
            animation="pop"
            delay={750}
            className="mt-8 lg:absolute lg:inset-x-0 lg:top-[786px] lg:mt-0 lg:flex lg:justify-center"
          >
            <Button href="/">Back to Home</Button>
          </Reveal>
        </DesignStage>
      </main>

      <Footer />
    </>
  );
}