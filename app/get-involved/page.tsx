import type { Metadata } from 'next'
import { GetInvolved } from '@/app/pages/GetInvolved'

export const metadata: Metadata = {
  title: 'Get Involved',
  description: 'Discover ways to support the Alfeco Foundation — volunteer, donate, or partner with us to make a difference.',
}

export default function Page() { return <GetInvolved /> }
