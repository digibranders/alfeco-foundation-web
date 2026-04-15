import type { Metadata } from 'next'
import { WomenYouth } from '@/app/pages/pillars/WomenYouth'

export const metadata: Metadata = {
  title: 'Women & Youth',
  description: 'Alfeco Foundation\'s women and youth empowerment programmes — entrepreneurship, leadership development, and financial inclusion.',
}

export default function Page() { return <WomenYouth /> }
