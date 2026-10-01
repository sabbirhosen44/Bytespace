import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = { className?: string; variant?: "light" | "dark" };

export function Logo({ className, variant = "light" }: LogoProps) {
  const dark = variant === "dark";

  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn(
        "inline-block transition-transform duration-300 hover:scale-105",
        !dark && "lg:-translate-y-[7px] lg:translate-x-[2px]",
        className
      )}
    >
      <Image
        src={dark ? "/images/logo/logo-dark.png" : "/images/logo/logo.png"}
        alt="ByteSpace"
        width={171}
        height={37}
        priority={!dark}
        className={cn("h-8 w-auto", !dark && "lg:h-[37px]")}
      />
    </Link>
  );
}