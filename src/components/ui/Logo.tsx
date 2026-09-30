import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn(
        "inline-block transition-transform duration-300 hover:scale-105",
        className
      )}
    >
      <Image
        src="/images/logo/logo.png"
        alt="ByteSpace"
        width={140}
        height={40}
        priority
        className="h-8 w-auto lg:h-[34px]"
      />
    </Link>
  );
}