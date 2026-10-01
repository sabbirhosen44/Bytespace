import Link from "next/link";
import { DesignStage } from "@/components/ui/DesignStage";
import { GridBackground } from "@/components/ui/GridBackground";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { AuthIllustration } from "./AuthIllustration";

type AuthShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function AuthShell({ title, description, children }: AuthShellProps) {
  return (
    <main className="relative flex-1 overflow-hidden bg-primary-800">
      <GridBackground animated />

      <DesignStage
        className="relative"
        innerClassName="flex flex-col gap-10 px-5 py-8 sm:px-8 lg:relative lg:block lg:h-[1024px] lg:p-0"
      >
        <Reveal animation="fade-in" className="w-fit lg:absolute lg:left-[122px] lg:top-[34px]">
          <Link href="/" aria-label="ByteSpace home">
            <Logo />
          </Link>
        </Reveal>

        <div className="max-w-[480px] text-white lg:absolute lg:left-[122px] lg:top-[120px]">
          <Reveal as="p" delay={100} className="font-heading text-heading-xs font-semibold">
            {title}
          </Reveal>
          <Reveal as="p" delay={200} className="mt-4 text-body-l">
            {description}
          </Reveal>
        </div>

        <AuthIllustration />

        <Reveal
          animation="scale-in"
          delay={150}
          className="lg:absolute lg:left-[741px] lg:top-[120px] lg:h-[784px] lg:w-[579px]"
        >
          {children}
        </Reveal>
      </DesignStage>
    </main>
  );
}