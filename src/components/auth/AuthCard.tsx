import Link from "next/link";
import { cn } from "@/lib/utils";

type AuthCardProps = {
  eyebrow: string;
  heading: string;
  footer: { text: string; linkLabel: string; href: string };
  className?: string;
  children: React.ReactNode;
};

export function AuthCard({ eyebrow, heading, footer, className, children }: AuthCardProps) {
  return (
    <section
      className={cn(
        "flex h-full flex-col rounded-[32px] bg-white px-6 pb-10 pt-8 sm:px-10 sm:pt-12 lg:px-[63px] lg:pt-16",
        className
      )}
    >
      <p className="text-body-l text-primary-700">{eyebrow}</p>
      <h1 className="mt-1 font-heading text-heading-s font-semibold text-neutral-950 lg:text-heading-m">
        {heading}
      </h1>

      {children}

      <p className="mt-auto pt-10 text-center text-body-m text-neutral-500">
        {footer.text}{" "}
        <Link href={footer.href} className="text-primary-700 hover:underline">
          {footer.linkLabel}
        </Link>
      </p>
    </section>
  );
}