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

export type AuthField = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
  minLength?: number;
};

export type AuthPageContent = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  submitLabel: string;
  fields: AuthField[];
  showSocial: boolean;
  footer: { text: string; linkLabel: string; href: string };
  cardClassName: string;
};