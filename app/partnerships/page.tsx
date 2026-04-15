import type { Metadata } from 'next'
import { Partnerships } from '@/app/pages/Partnerships'

export const metadata: Metadata = {
  title: 'Corporate Partnerships',
  description: 'Partner with the Alfeco Foundation to create measurable social impact while aligning with your ESG and CSI objectives.',
}

export default function Page() { return <Partnerships /> }
