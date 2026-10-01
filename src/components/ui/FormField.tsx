import { useId } from "react";
import { cn } from "@/lib/utils";

type FormFieldProps = React.ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export function FormField({ label, id, className, ...props }: FormFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={inputId} className="text-label-s font-medium text-neutral-950">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "h-[52px] w-full rounded-[14px] border border-neutral-100 bg-white px-6 font-body text-body-l text-neutral-950 outline-none transition-colors",
          "placeholder:text-neutral-400 focus-visible:border-primary-700 focus-visible:ring-2 focus-visible:ring-primary-700/20",
          className
        )}
        {...props}
      />
    </div>
  );
}