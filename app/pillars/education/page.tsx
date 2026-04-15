import type { Metadata } from 'next'
import { Education } from '@/app/pages/pillars/Education'

export const metadata: Metadata = {
  title: 'Education & Development',
  description: 'Alfeco Foundation\'s education programmes — bursaries, skills development, and the Revive & Thrive school programme.',
}

export default function Page() { return <Education /> }
