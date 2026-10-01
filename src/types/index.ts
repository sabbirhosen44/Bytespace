export type NavLink = {
  label: string;
  href: string;
};

export type Course = {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  students: string;
  price: number;
  priceNote: string;
  categories: string[];
};

export type LearningPath = {
  label: string;
  icon: string;
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};