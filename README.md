# Ahsaan Ullah — Portfolio

A premium, dark-mode-first portfolio for a software engineer, built to attract recruiters, clients, and founders. Aurora/Spotlight aesthetic with tasteful motion, full SEO, accessibility, and performance baked in.

**Live stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

---

## ✏️ Editing your content (one file)

Almost everything lives in **[`src/data/profile.ts`](src/data/profile.ts)** — edit it and every section updates. It contains:

| Section | Export |
| --- | --- |
| Name, headline, email, phone, resume | `profile` |
| GitHub / LinkedIn / Fiverr / LeetCode links | `social` |
| Hero stat counters | `stats` |
| About narrative + highlights | `about` |
| Experience timeline (Sledge, Code Linx, Infini Studio) | `experience` |
| Skills by category | `skillGroups` |
| Featured projects | `projects` |
| LeetCode numbers + coding journey | `coding` |
| Testimonials | `testimonials` |
| Certifications & achievements | `achievements` |
| Education | `education` |
| Nav links | `navLinks` |

### Things to personalize (marked `// TODO:` in the data file)
- **Profile photo** — drop an image in `/public` (e.g. `avatar.jpg`) and set `profile.avatar = '/avatar.jpg'`. Until then a designed monogram is shown.
- **LeetCode** — update the `coding.leetcode` numbers (or your username in `social.leetcode`).
- **Testimonials** — replace the sample quotes with real, verified reviews.
- **Code Linx dates** — adjust `experience[1].start/end` if needed.

---

## ✉️ Contact form

The form posts to [`/api/contact`](src/app/api/contact/route.ts).

- **Without setup:** it opens the visitor's email client with a prefilled message (mailto fallback) — works immediately.
- **With email delivery:** add a [Resend](https://resend.com) key to send mail straight to your inbox:

```bash
# .env.local
RESEND_API_KEY=re_xxxxx
CONTACT_TO=ahsaanu70@gmail.com          # optional, defaults to profile.email
CONTACT_FROM="Portfolio <you@yourdomain.com>"  # optional
```

---

## Features

- 🎨 Aurora/Spotlight design system, dark + light themes (`next-themes`)
- ✨ Framer Motion reveals, magnetic buttons, cursor-follow spotlight cards, count-up stats
- 📱 Fully responsive (mobile / tablet / desktop) with a glass floating navbar + mobile menu
- ⚡ Optimized: `next/font`, lean inline-SVG icons (no icon library), ~149 kB First Load JS
- 🔍 SEO: metadata, OpenGraph + dynamic OG image, Twitter cards, JSON-LD Person, sitemap, robots, manifest
- ♿ Accessibility: semantic landmarks, skip link, focus-visible rings, `prefers-reduced-motion`, ARIA labels
- 📊 Live GitHub stats + contribution graph, LeetCode card

---

## Project structure

```
src/
├── app/                 # routes, layout, SEO (sitemap/robots/manifest/OG), api
├── components/
│   ├── ui/              # reusable primitives (Button, SpotlightCard, Section, …)
│   ├── effects/         # Aurora, Grain, ScrollProgress
│   ├── layout/          # Navbar, Footer, ThemeToggle
│   └── sections/        # the 9 page sections
├── data/profile.ts      # ← single source of truth for all content
├── lib/                 # cn() + shared motion variants
└── providers/           # ThemeProvider
```

---

## Deploy

Works on **Vercel** (recommended) or **Netlify** out of the box. Push to GitHub and import the repo — no extra config needed. Add the `RESEND_*` env vars if you want email delivery.
