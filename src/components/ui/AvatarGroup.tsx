import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarGroupProps = {
  avatars: string[];
  label?: string;
  className?: string;
};

export function AvatarGroup({ avatars, label, className }: AvatarGroupProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="flex -space-x-1">
        {avatars.map((src) => (
          <Image
            key={src}
            src={src}
            alt=""
            width={32}
            height={32}
            className="size-7 rounded-full object-cover ring-1 ring-white sm:size-8"
          />
        ))}
      </div>
      {label && (
        <span className="-ml-2 grid size-9 place-items-center rounded-full bg-secondary-500 font-body text-label-xs font-medium text-neutral-950 sm:size-10">
          {label}
        </span>
      )}
    </div>
  );
}