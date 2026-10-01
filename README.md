# ByteSpace — Online Learning Platform

> A pixel-perfect, fully responsive online learning platform built as a front-end assessment project.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-bytespace--ten--mu.vercel.app-4D9CFF?style=flat-square&logo=vercel)](https://bytespace-ten-mu.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## Overview

ByteSpace is a front-end implementation of an online course marketplace. The project focuses on a faithful Figma-to-code conversion using a custom viewport-scaling layout system, animated UI components, and a clean component architecture.

**Live URL:** https://bytespace-ten-mu.vercel.app

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |
| Fonts | Satoshi (custom), Poppins (Google Fonts) |
| Deployment | Vercel |

---

## Features

- **Landing Page** — Hero, Logo Strip, Course Explorer, Learning Paths, Growth, Creator CTA, and Testimonials sections
- **Course Explorer** — Client-side category filtering with animated card transitions
- **Auth Pages** — Login and Register pages with animated form fields and social sign-in UI
- **Custom 404 Page** — Animated 404 page matching the design system
- **Responsive Design** — Mobile-first, fully responsive across all breakpoints
- **DesignStage Layout System** — Custom scaling utility that faithfully renders 1440px Figma artboards at any viewport width using CSS `zoom` and container queries
- **Micro-animations** — Float, fade-up, scale-in, grid-drift, and more via custom Tailwind keyframes
- **Reusable Component Library** — Cards, chips, form fields, section headings, reveal wrappers, and more

---

## Project Structure

```
bytespace/
├── public/
│   └── images/
│       ├── avatars/
│       ├── courses/
│       ├── cta/
│       ├── growth/
│       ├── hero/
│       ├── icons/
│       └── logo/
└── src/
    ├── app/
    │   ├── (auth)/
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   └── register/
    │   │       └── page.tsx
    │   ├── (site)/
    │   │   └── layout.tsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── not-found.tsx
    │   └── page.tsx
    ├── components/
    │   ├── auth/
    │   │   ├── AuthCard.tsx
    │   │   ├── AuthForm.tsx
    │   │   ├── AuthIllustration.tsx
    │   │   ├── AuthPage.tsx
    │   │   ├── AuthShell.tsx
    │   │   └── SocialAuth.tsx
    │   ├── cards/
    │   │   ├── CategoryCard.tsx
    │   │   ├── CourseCard.tsx
    │   │   └── TestimonialCard.tsx
    │   ├── layout/
    │   │   ├── Footer.tsx
    │   │   └── Navbar.tsx
    │   ├── sections/
    │   │   ├── CourseExplorer.tsx
    │   │   ├── CreatorCTA.tsx
    │   │   ├── GrowthSection.tsx
    │   │   ├── Hero.tsx
    │   │   ├── LearningPaths.tsx
    │   │   ├── LogoStrip.tsx
    │   │   └── Testimonials.tsx
    │   └── ui/
    │       ├── AvatarGroup.tsx
    │       ├── AvatarStack.tsx
    │       ├── Button.tsx
    │       ├── Chip.tsx
    │       ├── Container.tsx
    │       ├── DesignStage.tsx
    │       ├── FloatingCard.tsx
    │       ├── FormField.tsx
    │       ├── GridBackground.tsx
    │       ├── Logo.tsx
    │       ├── ProgressCard.tsx
    │       ├── Reveal.tsx
    │       ├── SearchBar.tsx
    │       ├── SectionHeading.tsx
    │       ├── StatCard.tsx
    │       ├── StudentsCard.tsx
    │       └── TopicCard.tsx
    ├── data/
    │   ├── auth.ts
    │   ├── categories.ts
    │   ├── courses.ts
    │   ├── footer-links.ts
    │   ├── growth.ts
    │   ├── learning-paths.ts
    │   ├── navigation.ts
    │   └── testimonials.ts
    ├── fonts/
    │   ├── Satoshi-Medium.woff2
    │   └── Satoshi-Regular.woff2
    ├── lib/
    │   ├── fonts.ts
    │   └── utils.ts
    └── types/
        └── index.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/sabbirhosen44/Bytespace.git
cd Bytespace

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Key Design Decisions

### `DesignStage` — Figma Artboard Scaling
A custom layout wrapper that scales a fixed 1440px Figma artboard to fit any viewport width using CSS `zoom` and container query units — ensuring pixel-perfect fidelity without media query overrides.

### Route Groups
- `(site)/` — wraps marketing pages with `Navbar` + `Footer`
- `(auth)/` — provides a standalone full-screen auth shell for `/login` and `/register`

### `Reveal` Component
A lightweight animation wrapper that applies CSS keyframe animations (fade-up, scale-in, slide-in, pop) with configurable delay, keeping section components clean.

---

## Deployment

Deployed on **Vercel** via automatic Git integration.

**Production URL:** https://bytespace-ten-mu.vercel.app

---

## Author

**Sabbir Hosen**
GitHub: [@sabbirhosen44](https://github.com/sabbirhosen44)
