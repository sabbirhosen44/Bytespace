import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const providers = [
  { name: "Facebook", icon: "/images/icons/facebook.svg" },
  { name: "Google", icon: "/images/icons/google.svg" },
];

export function SocialAuth() {
  return (
    <Reveal delay={700} className="mt-14 lg:mt-20">
      <div className="flex items-center gap-3 lg:pr-3.5">
        <span className="h-px flex-1 bg-neutral-200" />
        <span className="text-body-m text-neutral-400">or</span>
        <span className="h-px flex-1 bg-neutral-200" />
      </div>

      <div className="mt-8 flex justify-center gap-4 lg:mt-11">
        {providers.map(({ name, icon }) => (
          <button
            key={name}
            type="button"
            aria-label={`Continue with ${name}`}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-neutral-200 transition duration-200 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-md active:translate-y-0 active:scale-95"
          >
            <Image src={icon} alt="" width={32} height={32} />
          </button>
        ))}
      </div>
    </Reveal>
  );
}