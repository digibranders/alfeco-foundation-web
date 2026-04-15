import type { Metadata } from 'next'
import { Home } from '@/app/pages/Home'

export const metadata: Metadata = {
  title: 'Alfeco Foundation — Empowering Communities, Inspiring Change',
  description: 'Born from Purpose, Nurtured by Family, Driven by Passion. Alfeco Foundation empowers communities through education, food security, women & youth development, and conservation.',
}

export default function Page() { return <Home /> }
