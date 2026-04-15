import type { Metadata } from 'next'
import { Volunteer } from '@/app/pages/Volunteer'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer with the Alfeco Foundation. Lend your time, skills, and passion to community programmes across South Africa.',
}

export default function Page() { return <Volunteer /> }
