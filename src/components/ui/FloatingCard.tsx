import { cn } from "@/lib/utils";

export function FloatingCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "rounded-xl bg-white text-neutral-950 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    />
  );
}