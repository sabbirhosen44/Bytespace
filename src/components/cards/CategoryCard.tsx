import Image from "next/image";
import type { LearningPath } from "@/types";

export function CategoryCard({ item }: { item: LearningPath }) {
  return (
    <li className="group flex h-[167px] flex-col items-center gap-[13px] rounded-3xl border border-neutral-200 bg-white px-2 pt-[35px] text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary-600 hover:shadow-[0_14px_34px_rgba(4,8,25,0.08)]">
      <Image
        src={item.icon}
        alt=""
        width={60}
        height={60}
        className="size-[60px] transition-transform duration-300 group-hover:scale-110"
      />
      <span className="font-body text-heading-xs text-neutral-950">{item.label}</span>
    </li>
  );
}