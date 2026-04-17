import type { Metadata } from 'next'
import { Home } from '@/app/pages/Home'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  itemListSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Alfeco Foundation — Empowering Communities, Inspiring Change'
const DESCRIPTION =
  'Born from Purpose, Nurtured by Family, Driven by Passion. Alfeco Foundation empowers communities through education, food security, women & youth development, and conservation.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: '/',
    type: 'website',
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: '/',
          }),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
          itemListSchema({
            name: 'Our Pillars',
            path: '/pillars',
            items: [
              { name: 'Education & Development', path: '/pillars/education' },
              { name: 'Food Security', path: '/pillars/food-security' },
              { name: 'Women & Youth', path: '/pillars/women-youth' },
              { name: 'Conservation & Environment', path: '/pillars/conservation' },
            ],
          }),
        ]}
      />
      <Home />
    </>
  )
}
