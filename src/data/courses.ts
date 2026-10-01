import type { Course } from "@/types";

const base = {
  creator: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  students: "26+",
  price: 25,
  priceNote: "/lifetime",
};

export const courses: Course[] = [
  { ...base, id: "figma-basic", title: "Learn Figma from Basic", thumbnail: "/images/courses/course1.png", categories: ["UI/UX Design", "Graphic Design", "Web Development"] },
  { ...base, id: "digital-asset", title: "Build Digital Asset", thumbnail: "/images/courses/course2.png", categories: ["Digital Illustration", "Graphic Design", "Drawing & Painting"] },
  { ...base, id: "big-data", title: "the Power of Big Data", thumbnail: "/images/courses/course3.png", categories: ["Data Science"] },
  { ...base, id: "productivity", title: "Balancing Productivity and Wellbeing", thumbnail: "/images/courses/course4.png", categories: ["Productivity"] },
  { ...base, id: "money-management", title: "Mastering Money Management", thumbnail: "/images/courses/course5.png", categories: ["Freelance & Entrepreneurship", "Marketing"] },
  { ...base, id: "startup-success", title: "From Idea to Startup Success", thumbnail: "/images/courses/course6.png", categories: ["Freelance & Entrepreneurship", "Marketing", "Creative Marketing"] },
];