"use client";

import { Search } from "lucide-react";
import { Button } from "./Button";

export function SearchBar() {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto flex w-full max-w-[580px] items-start gap-3 sm:gap-4"
    >
      <label className="flex h-[46px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white px-4 transition-shadow duration-300 focus-within:ring-4 focus-within:ring-secondary-500/60 sm:h-[52px] sm:px-5">
        <Search className="size-5 shrink-0 text-neutral-400" aria-hidden />
        <input
          type="search"
          placeholder="Course, topic, creator"
          aria-label="Search courses"
          className="min-w-0 flex-1 bg-transparent font-body text-body-m text-neutral-950 placeholder:text-neutral-400 focus:outline-none"
        />
      </label>
      <Button type="submit" className="h-[46px] shrink-0 px-7 text-label-m">
        Search
      </Button>
    </form>
  );
}