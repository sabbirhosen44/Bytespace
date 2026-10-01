import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { FloatingCard } from "./FloatingCard";
import { AvatarGroup } from "./AvatarGroup";

const avatars = Array.from(
  { length: 7 },
  (_, i) => `/images/hero/ellipse${i + 1}.png`
);

type StudentsCardProps = React.ComponentPropsWithoutRef<"div"> & {
  variant?: "white" | "lime";
};

export function StudentsCard({
  variant = "white",
  className,
  ...props
}: StudentsCardProps) {
  const isLime = variant === "lime";

  return (
    <FloatingCard
      className={cn(
        "p-3 text-left sm:p-4",
        isLime && "bg-secondary-400",
        className
      )}
      {...props}
    >
      <p className="font-body text-label-m font-medium">Happy Students</p>
      <p className="mb-2.5 mt-0.5 flex items-center gap-1 font-body text-body-xs text-neutral-500">
        <span className="text-neutral-700">4.5</span> (240)
        <Star
          className={cn(
            "size-3.5",
            isLime
              ? "fill-primary-700 text-primary-700"
              : "fill-secondary-400 text-secondary-400"
          )}
        />
      </p>
      <AvatarGroup avatars={avatars} label="2K+" />
    </FloatingCard>
  );
}