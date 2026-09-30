import { cn } from "@/lib/utils";
import { FloatingCard } from "./FloatingCard";

export function TopicCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <FloatingCard className={cn("px-4 py-3 text-left sm:w-[207px]", className)} {...props}>
      <p className="font-body text-label-m font-medium">UI/UX Design</p>
      <p className="mt-1 font-body text-body-xs text-neutral-500">
        200 Courses <span aria-hidden>•</span> 1000+ Students
      </p>
    </FloatingCard>
  );
}