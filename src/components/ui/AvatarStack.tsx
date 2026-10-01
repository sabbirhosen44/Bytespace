import Image from "next/image";
import { cn } from "@/lib/utils";

type AvatarStackProps = {
  avatars: string[];
  label?: string;
  className?: string;
};

export function AvatarStack({ avatars, label, className }: AvatarStackProps) {
  return (
    <div className={cn("flex -space-x-2", className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={32}
          height={32}
          className="size-8 rounded-full object-cover ring-2 ring-white"
        />
      ))}
      {label && (
        <span className="relative grid size-8 place-items-center rounded-full bg-secondary-400 font-body text-label-xs font-medium text-neutral-950 ring-2 ring-white">
          {label}
        </span>
      )}
    </div>
  );
}