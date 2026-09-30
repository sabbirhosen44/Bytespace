import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-[120px]",
        className
      )}
      {...props}
    />
  );
}