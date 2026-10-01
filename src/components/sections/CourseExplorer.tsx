"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { DesignStage } from "@/components/ui/DesignStage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Chip } from "@/components/ui/Chip";
import { CourseCard } from "@/components/cards/CourseCard";
import { categoryRows, DEFAULT_CATEGORY } from "@/data/categories";
import { courses } from "@/data/courses";

export function CourseExplorer() {
  const [active, setActive] = useState(DEFAULT_CATEGORY);

  const visible = useMemo(
    () =>
      active === DEFAULT_CATEGORY
        ? courses
        : courses.filter((course) => course.categories.includes(active)),
    [active]
  );

  return (
    <DesignStage id="courses" className="scroll-mt-20 bg-white">
      <Container className="pt-14 lg:px-[120px] lg:pt-[69px]">
        <SectionHeading
          size="m"
          title={
            <>
              Discover Your Passion,
              <br className="hidden md:block" /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Category chips */}
        <div
          role="group"
          aria-label="Course categories"
          className="mt-8 flex flex-col gap-y-[21px] lg:mt-[42px]"
        >
          {categoryRows.map((row, index) => (
            <div key={index} className="flex flex-wrap justify-center gap-4">
              {row.map((name) => (
                <Chip
                  key={name}
                  active={active === name}
                  onClick={() => setActive(name)}
                >
                  {name}
                </Chip>
              ))}
              {index === categoryRows.length - 1 && (
                <button
                  type="button"
                  className="py-3 font-body text-label-m font-medium text-primary-800 transition-opacity hover:opacity-70"
                >
                  + More
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-10 lg:mt-[76px]">
          {visible.length > 0 ? (
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {visible.map((course) => (
                <li key={`${active}-${course.id}`} className="animate-fade-up">
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="py-16 text-center font-body text-body-m text-neutral-400">
              No courses in &ldquo;{active}&rdquo; yet. Try another category.
            </p>
          )}
        </div>
      </Container>
    </DesignStage>
  );
}