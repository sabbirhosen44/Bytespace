import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "light";

type ButtonProps = {
  variant?: Variant;
  href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<Variant, string> = {
  primary: "bg-secondary-500 hover:bg-secondary-400",
  light: "bg-white hover:bg-neutral-100",
};

export function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-body text-label-m font-medium text-neutral-950 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}