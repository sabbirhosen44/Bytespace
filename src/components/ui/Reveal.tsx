import { cn } from "@/lib/utils";

const animations = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
  "slide-in-left": "animate-slide-in-left",
  pop: "animate-pop",
} as const;

type RevealProps = {
  as?: "div" | "p" | "h1" | "span" | "section";
  animation?: keyof typeof animations;
  /** milliseconds */
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export function Reveal({
  as: Tag = "div",
  animation = "fade-up",
  delay = 0,
  className,
  children,
}: RevealProps) {
  return (
    <Tag
      className={cn(animations[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}