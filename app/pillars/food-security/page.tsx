import type { Metadata } from 'next'
import { FoodSecurity } from '@/app/pages/pillars/FoodSecurity'

export const metadata: Metadata = {
  title: 'Food Security',
  description: 'Alfeco Foundation\'s food security initiatives — sustainable agriculture, nutrition programmes, and school feeding schemes.',
}

export default function Page() { return <FoodSecurity /> }
