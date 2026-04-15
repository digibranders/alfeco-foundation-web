import type { Metadata } from 'next'
import { About } from '@/app/pages/About'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the Alfeco Foundation — our mission, values, and commitment to empowering communities across South Africa.',
}

export default function Page() { return <About /> }
