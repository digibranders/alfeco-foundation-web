import type { Metadata } from 'next'
import { BursaryProgramme } from '@/app/pages/pillars/BursaryProgramme'

export const metadata: Metadata = {
  title: 'Bursary Programme',
  description: 'The Alfeco Foundation Bursary Programme — providing financial support to students across various fields of study.',
}

export default function Page() { return <BursaryProgramme /> }
