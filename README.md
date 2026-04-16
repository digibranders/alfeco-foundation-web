# Alfeco Foundation Web

The official website for the **Alfeco Foundation**, a South African non-profit organisation dedicated to community empowerment through education, conservation, food security, skills development, and women & youth upliftment.

Built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| UI Components | shadcn/ui + Radix UI primitives |
| Animations | motion/react (Framer Motion) |
| Forms | react-hook-form + Zod validation |
| Icons | lucide-react |
| Email | Brevo API |
| Fonts | Fraunces (serif) + Nunito (sans) via next/font |
| Package Manager | pnpm |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
pnpm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
BREVO_API_KEY=your_brevo_api_key
```

The Brevo API key is required for contact, volunteer, and partnership form submissions.

### Development

```bash
pnpm dev        # Start dev server on localhost:3000 (Turbopack)
```

### Production

```bash
pnpm build      # Build for production
pnpm start      # Serve production build
```

### Linting

```bash
pnpm lint       # Run Next.js ESLint
```

## Project Structure

```
alfeco-foundation-web/
├── app/                          # Next.js App Router (routing layer)
│   ├── api/                      # API route handlers (contact, volunteer, partnerships)
│   ├── pillars/                  # Pillar page routes
│   ├── layout.tsx                # Root layout (fonts, global CSS)
│   └── page.tsx                  # Home page route
├── src/
│   ├── app/
│   │   ├── components/           # Shared components
│   │   │   ├── ui/               # shadcn/ui components
│   │   │   ├── Layout.tsx        # Site layout (header, footer, nav)
│   │   │   ├── FadeIn.tsx        # Scroll-triggered animations
│   │   │   └── FlipNumber.tsx    # Animated counter
│   │   ├── pages/                # Page component logic
│   │   │   └── pillars/          # Pillar page components
│   │   └── data/                 # Static data (news articles)
│   └── styles/                   # Global CSS (Tailwind + theme tokens)
├── api/
│   └── email-templates/          # Brevo HTML email templates
├── public/
│   └── assets/                   # Static images
└── guidelines/                   # Design guidelines
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About the Foundation |
| `/pillars` | Overview of all pillars |
| `/pillars/conservation` | Conservation pillar |
| `/pillars/food-security` | Food Security pillar |
| `/pillars/women-youth` | Women & Youth Empowerment pillar |
| `/pillars/education` | Education pillar overview |
| `/pillars/education/bursary` | Bursary Programme |
| `/pillars/education/revive` | Revive & Thrive Programme |
| `/pillars/education/skills` | Skills Development |
| `/news` | News & updates |
| `/contact` | Contact form |
| `/volunteer` | Volunteer sign-up |
| `/partnerships` | Partnership enquiries |
| `/donate` | Donation information |
| `/get-involved` | Get involved overview |

## Brand

| Colour | Hex | Usage |
|--------|-----|-------|
| Red | `#C1272D` | Primary accent, CTAs |
| Teal | `#48B2A9` | Secondary accent, highlights |
| Gold | `#E8AB36` | Tertiary accent |
| Dark | `#1A1A1A` | Text, dark backgrounds |
| Light | `#EBF3F5` | Page backgrounds, cards |

## Deployment

The site is deployed on **Vercel** with automatic deployments on push to `main`.

## License

Private project. All rights reserved.
