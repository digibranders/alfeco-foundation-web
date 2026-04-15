import type { Metadata } from 'next'
import { Conservation } from '@/app/pages/pillars/Conservation'

export const metadata: Metadata = {
  title: 'Conservation & Environment',
  description: 'Alfeco Foundation\'s conservation initiatives — protecting biodiversity, supporting wildlife sanctuaries, and promoting environmental sustainability.',
}

export default function Page() { return <Conservation /> }
