import type { Metadata } from 'next'
import { ReviveThrive } from '@/app/pages/pillars/ReviveThrive'

export const metadata: Metadata = {
  title: 'Revive & Thrive Programme',
  description: 'The Alfeco Foundation Revive & Thrive Programme — restoring and upgrading school infrastructure for better learning environments.',
}

export default function Page() { return <ReviveThrive /> }
