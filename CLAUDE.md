# Alfeco Foundation Web — Project Intelligence

## Stack
- **Framework**: Next.js 16 (App Router) with Turbopack
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` — CSS-first, no `tailwind.config.ts`
- **UI Components**: shadcn/ui (52 components in `src/app/components/ui/`)
- **Animations**: `motion/react` (Framer Motion) — all animated components need `'use client'`
- **Fonts**: `next/font/google` — Fraunces (serif/headings) + Nunito (sans/body)
- **Icons**: `lucide-react` + `@mui/icons-material`
- **Forms**: `react-hook-form` + fetch to `/api/*` route handlers
- **Email**: Brevo API (key in `.env.local` as `BREVO_API_KEY`)
- **Package manager**: pnpm (always use pnpm, never npm or yarn)

## Architecture
- `app/` — Next.js routing layer only (thin `page.tsx` wrappers)
- `src/app/pages/` — All page component logic lives here
- `src/app/components/` — Shared components (Layout, FadeIn, FlipNumber, ui/*)
- `src/app/data/` — Static data (news.ts)
- `src/styles/` — Global styles (index.css → tailwind.css + theme.css)
- `app/api/` — Next.js route handlers (contact, volunteer, partnerships)
- `public/assets/` — Static images (logo, hero images, skills hero)
- `public/` — Root public files (bursary.png, IMG_3891.jpg, IMG_3902.jpg)
- `api/email-templates/` — Brevo HTML email templates (source of truth, not served)

## Key Conventions
- Every component using hooks, browser APIs, motion, or event handlers needs `'use client'` at the top
- Page components in `src/app/pages/` are all Client Components — this is intentional (animation-heavy site)
- Navigation: `import Link from 'next/link'` with `href=` prop (never `to=`)
- Routing hooks: `usePathname()` and `useSearchParams()` from `next/navigation`
- Asset paths: images in `public/assets/` referenced as `/assets/filename.png` strings (not ES module imports)
- The `@` alias maps to `./src` — e.g. `@/app/components/Layout`
- CSS custom properties in `src/styles/theme.css` use `@theme inline` — no tailwind.config needed
- Font CSS vars: `--font-fraunces` (serif) and `--font-nunito` (sans) injected by next/font in `app/layout.tsx`

## Brand Colors
- Red: `#C1272D` (`--brand-red`)
- Teal: `#48B2A9` (`--brand-teal`)
- Gold: `#E8AB36` (`--brand-gold`)
- Dark: `#1A1A1A` (`--brand-dark`)
- Light BG: `#EBF3F5` (`--brand-light`)

## Common Pitfalls
- Do NOT use `react-router` or `react-router-dom` — project uses Next.js routing
- Do NOT import assets via ES module — use string paths from `public/`
- Do NOT add `tailwind.config.ts` — Tailwind v4 is configured entirely in CSS
- Do NOT remove `'use client'` from page components — they all use browser APIs/motion
- `slick-carousel` CSS is imported globally in `app/layout.tsx`, not in `News.tsx`
- Do NOT use `useRouter().push()` for simple links — use `<Link href="">` instead

## Running the Project
```bash
pnpm dev      # Start dev server on localhost:3000 (Turbopack)
pnpm build    # Production build
pnpm start    # Serve production build
pnpm lint     # Next.js ESLint
```

## Environment Variables
- `BREVO_API_KEY` — required for contact/volunteer/partnerships form submission
- Add to `.env.local` (never commit to git — the old `.env` file has been removed)
