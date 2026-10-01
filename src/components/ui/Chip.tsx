import { cn } from "@/lib/utils";

type ChipProps = { active?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Chip({ active = false, className, ...props }: ChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-3 font-body text-label-m font-medium transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-800",
        active
          ? "bg-secondary-400 text-neutral-950"
          : "bg-neutral-50 text-neutral-700 hover:bg-neutral-100",
        className
      )}
      {...props}
    />
  );
}