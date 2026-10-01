import { cn } from "@/lib/utils";

type GridBackgroundProps = { className?: string; animated?: boolean };

export function GridBackground({ className, animated = false }: GridBackgroundProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "absolute inset-0 [--grid:60px] [--gy:58px] lg:[--grid:120px] lg:[--gy:118px]",
        animated && "animate-grid-drift",
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