import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingCard } from "./FloatingCard";
import { AvatarGroup } from "./AvatarGroup";

const avatars = Array.from(
  { length: 7 },
  (_, i) => `/images/hero/ellipse${i + 1}.png`
);

export function StudentsCard({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <FloatingCard className={cn("p-3 text-left sm:p-4", className)} {...props}>
      <p className="font-body text-label-m font-medium">Happy Students</p>
      <p className="mb-2.5 mt-0.5 flex items-center gap-1 font-body text-body-xs text-neutral-500">
        <span className="text-neutral-700">4.5</span> (240)
        <Star className="size-3.5 fill-secondary-400 text-secondary-400" />
      </p>
      <AvatarGroup avatars={avatars} label="2K+" />
    </FloatingCard>
  );
}