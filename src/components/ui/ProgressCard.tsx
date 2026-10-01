import { cn } from "@/lib/utils";
import { FloatingCard } from "./FloatingCard";

export function ProgressCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <FloatingCard className={cn("p-3 text-left sm:px-4 sm:py-3.5", className)} {...props}>
      <p className="font-body text-body-s text-neutral-700">Learning Progress</p>
      <p className="mt-1 font-heading text-[32px] font-semibold leading-tight sm:text-[48px]">
        55%
      </p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-50">
        <div className="h-full w-[55%] origin-left animate-progress rounded-full bg-secondary-400" />
      </div>
    </FloatingCard>
  );
}