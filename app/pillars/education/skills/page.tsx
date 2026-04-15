import type { Metadata } from 'next'
import { SkillsDevelopment } from '@/app/pages/pillars/SkillsDevelopment'

export const metadata: Metadata = {
  title: 'Skills Development Programme',
  description: 'The Alfeco Foundation Skills Development Programme — equipping individuals with practical trade skills for employment and entrepreneurship.',
}

export default function Page() { return <SkillsDevelopment /> }
