import { cn } from "@/lib/utils";

type DesignStageProps = React.ComponentPropsWithoutRef<"section"> & {
  innerClassName?: string;
};

/**
 * Below lg: normal responsive layout.
 * lg to 1440px: the 1440px Figma layout, scaled down to fit the width.
 * Above 1440px: the 1440px layout, centred.
 */
export function DesignStage({
  className,
  innerClassName,
  children,
  ...props
}: DesignStageProps) {
  return (
    <section
      className={cn("overflow-x-clip [container-type:inline-size]", className)}
      {...props}
    >
      <div
        className={cn(
          "lg:mx-auto lg:w-[1440px] lg:[zoom:tan(atan2(min(100cqw,1440px),1440px))]",
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}