import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 [--grid:60px] [--gy:58px] lg:[--grid:120px] lg:[--gy:118px]",
        className
      )}
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.12) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.12) 2px, transparent 2px)",
        backgroundSize: "var(--grid) var(--grid)",
        backgroundPosition: "0 var(--gy), 0 0",
      }}
    />
  );
}