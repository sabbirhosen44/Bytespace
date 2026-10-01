import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: React.ReactNode;
  description: string;
  size?: "m" | "s";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  size = "m",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto text-center", className)}>
      <h2
        className={cn(
          "font-heading font-semibold leading-[1.2] text-[#040819]",
          size === "m"
            ? "text-[30px] md:text-heading-m"
            : "text-[26px] md:text-heading-s"
        )}
      >
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-[940px] font-body text-body-s text-neutral-400 md:text-body-l">
        {description}
      </p>
    </div>
  );
}