import Image from "next/image";
import { Star } from "lucide-react";
import type { Course } from "@/types";
import { AvatarStack } from "@/components/ui/AvatarStack";

const avatars = [1, 2, 3, 4].map((i) => `/images/avatars/avatar${i}.png`);

function LevelIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <rect x="0" y="6" width="2.5" height="6" rx="1" />
      <rect x="4.75" y="3" width="2.5" height="9" rx="1" />
      <rect x="9.5" y="0" width="2.5" height="12" rx="1" />
    </svg>
  );
}

export function CourseCard({ course }: { course: Course }) {
  const badges = [
    `${course.lessons} Lessons`,
    course.duration,
    `${course.comments} Comments`,
  ];

  return (
    <article className="group min-h-[384px] rounded-3xl border border-neutral-200 bg-white p-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(4,8,25,0.08)]">
      {/* Thumbnail */}
      <div className="relative h-[196px] overflow-hidden rounded-xl">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <ul className="absolute inset-x-3.5 bottom-5 flex flex-wrap justify-between gap-x-2 gap-y-1.5">
          {badges.map((text) => (
            <li
              key={text}
              className="whitespace-nowrap rounded-full bg-white/60 px-3 py-1 font-body text-body-xs text-neutral-600 backdrop-blur-md"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Title + rating */}
      <div className="mt-5 flex items-center justify-between gap-4">
        <h3 className="min-w-0 truncate font-heading text-heading-xs font-semibold text-black">
          {course.title}
        </h3>
        <p className="flex shrink-0 items-center gap-1 font-body text-body-l leading-6 text-[#4f4f4f]">
          {course.rating}
          <Star className="size-[18px] fill-neutral-200 text-neutral-200" aria-hidden />
        </p>
      </div>
      <p className="font-body text-body-xs text-[#4f4f4f]">
        by <span className="text-primary-800">{course.creator}</span>
      </p>

      {/* Level + students */}
      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8 items-center gap-2 rounded-full bg-neutral-50 pl-4 pr-3 font-body text-body-xs text-neutral-700">
          <LevelIcon />
          {course.level}
        </span>
        <AvatarStack avatars={avatars} label={course.students} />
      </div>

      {/* Price */}
      <p className="mt-4 flex items-baseline gap-0.5">
        <span className="font-heading text-heading-xs font-semibold text-primary-800">
          ${course.price}
        </span>
        <span className="font-body text-body-xs text-[#4f4f4f]">{course.priceNote}</span>
      </p>
    </article>
  );
}