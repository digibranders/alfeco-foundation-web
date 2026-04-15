import type { Metadata } from 'next'
import { Pillars } from '@/app/pages/Pillars'

export const metadata: Metadata = {
  title: 'Our Pillars',
  description: 'Explore the four pillars of the Alfeco Foundation: Education & Development, Food Security, Women & Youth, and Conservation & Environment.',
}

export default function Page() { return <Pillars /> }
