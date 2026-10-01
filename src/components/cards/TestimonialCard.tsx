import Image from "next/image";
import type { Testimonial } from "@/types";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <figure className="rounded-[32px] bg-white p-6">
      <Image
        src={t.avatar}
        alt={t.name}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />
      <figcaption className="mt-[26px]">
        <p className="font-heading text-heading-xs font-semibold text-black">{t.name}</p>
        <p className="mt-1 font-body text-body-m text-primary-800">{t.role}</p>
      </figcaption>
      <blockquote className="mt-[26px] font-body text-body-l text-neutral-600">
        {t.quote}
      </blockquote>
    </figure>
  );
}