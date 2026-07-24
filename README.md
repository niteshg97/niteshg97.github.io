# Nitesh Kumar — Portfolio

![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)

A modern, production quality portfolio showcasing my work in Artificial Intelligence, Machine Learning, FPGA acceleration, open-source development, and software engineering.

The portfolio is designed for AI/ML engineering roles, machine learning infrastructure teams, embedded AI, and high-performance computing opportunities while also documenting research and technical projects.

**Live site:** [niteshg97.vercel.app](https://niteshg97.vercel.app/)

---

## Overview

This portfolio is built from scratch as a production-quality React application rather than a template. The design system is instrument-inspired — a deep control-room dark background with a dual signal-blue / trace-amber accent palette — Every section is data driven. Projects, skills, achievements, research, contact information, and navigation all live inside dedicated data files, making future updates simple without modifying UI components.
## Features

- **Hero** — orchestrated entrance sequence with a self-drawing signal-trace animation, resume and contact CTAs
- **About** — summary, stat cards, and an education/experience timeline
- **Projects** — data-driven project cards with a featured layout for flagship work
- **Research & Open Source** — an academic-CV-style section covering publications, technical projects, and open-source contributions with publication status badges.
- **Skills** — categorized (Languages, ML & FPGA, Embedded &  Tools) with animated proficiency bars
- **Achievements & Leadership** — awards, competitions, and recognition, separate from Projects/Research
- **Contact** — info cards plus a mailto-based contact form
- **Navigation** — scroll spy active section highlighting, accessible mobile menu, smooth-scroll anchor links (no router — this is intentionally a single page)
- **Accessibility** — full keyboard navigation, visible focus states, semantic HTML, WCAG AA-compliant contrast, `prefers-reduced-motion` respected globally
- **SEO** — Open Graph and Twitter card metadata, canonical URL, `sitemap.xml`, `robots.txt`

## Tech Stack

| Layer       | Choice                          |
|-------------|----------------------------------|
| Framework   | React 19 + TypeScript            |
| Build tool  | Vite 8                           |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation   | Framer Motion 12                 |
| Icons       | react-icons                      |
| Hosting     | Vercel                           |

No router is used — this is a single-page site navigated entirely by anchor links.

## Design System

| Token          | Value      | Role                          |
|----------------|------------|--------------------------------|
| `bg`           | `#0A0E14`  | Base background                |
| `bg-elevated`  | `#121822`  | Cards, elevated surfaces       |
| `border`       | `#1E2733`  | Hairline borders                |
| `signal`       | `#5B9FE3`  | Primary accent (links, focus, primary CTA) |
| `trace`        | `#FF9F5B`  | Secondary accent (eyebrows, highlights) |
| `text-primary` | `#E8EDF2`  | Body/heading text              |
| `text-muted`   | `#8B96A5`  | Secondary text                 |

Typography: **Space Grotesk** (display), **Inter** (body), **JetBrains Mono** (labels, data, badges).

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/niteshg97/niteshg97.github.io.git
cd niteshg97.github.io
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev        # Start the development server
npm run build       # Type-check and produce a production build in dist/
npm run preview     # Serve the production build locally
npx tsc --noEmit    # Type-check only, no build output
```

## Project Structure

```text
src/
├── assets/                  # Static assets
├── components/
│   ├── layout/               # Navbar, Footer, Layout wrapper
│   ├── sections/              # One component per page section
│   └── ui/                    # Reusable primitives (cards, buttons, badges)
├── data/                     # All site content — the single source of truth
├── hooks/                    # Shared Framer Motion / interaction hooks
├── styles/                   # Global Tailwind entry point
├── types/                    # Shared TypeScript interfaces
├── utils/                    # Shared class-name and formatting helpers
├── App.tsx
└── main.tsx
```

## Customization

All visible content is edited in `src/data/`, without touching any component:

| File                | Controls                                    |
|---------------------|----------------------------------------------|
| `about.ts`          | Summary, stat cards, timeline                |
| `projects.ts`        | Project cards                                |
| `publications.ts`    | Research papers, talks, open-source entries  |
| `skills.ts`          | Skill categories and proficiency levels      |
| `achievements.ts`    | Awards, competitions, recognition            |
| `contact.ts`         | Email, location, availability, intro copy    |
| `socials.ts`         | Social/profile links                          |
| `navigation.ts`      | Nav bar and footer links                      |

## Deployment

The project is configured for **Vercel**:

1. Every push to the main branch automatically triggers a production deployment through Vercel's Git integration.This enables continuous deployment with zero manual steps after development.
2. Vercel auto-detects the Vite preset (`npm run build`, output directory `dist`).
3. Every push to `main` triggers a new deployment automatically.

Configuration lives in `vercel.json` (build settings, security headers, asset caching). To use a custom domain, add it under **Project Settings → Domains** in the Vercel dashboard.

## Accessibility & Performance

- Text and accent colors verified against WCAG AA contrast minimums on both background tokens
- All interactive elements have visible focus rings and are reachable by keyboard alone
- Animations are subtle, purposeful, and fully disabled under `prefers-reduced-motion`
- Fonts load via `preconnect` + `font-display: swap` to avoid render-blocking



## License

The source code in this repository is shared for reference and reuse. Site content (research descriptions, achievements, personal information) remains © Nitesh Kumar.

## Contact

- **Email:** niteshk.ug23.ee@nitp.ac.in
- **GitHub:** [github.com/niteshg97](https://github.com/niteshg97)
- **LinkedIn:**https://www.linkedin.com/in/nitesh-kumar-68a698275
---

Built with React, TypeScript, Tailwind CSS, and Framer Motion following a scalable, data-driven architecture focused on maintainability, accessibility, and performance.
