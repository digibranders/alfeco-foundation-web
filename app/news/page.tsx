import type { Metadata } from 'next'
import { News } from '@/app/pages/News'

export const metadata: Metadata = {
  title: 'News & Events',
  description: 'Stay updated with the latest news, events, and impact stories from the Alfeco Foundation.',
}

export default function Page() { return <News /> }
