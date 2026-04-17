import type { Metadata } from 'next'
import { Pillars } from '@/app/pages/Pillars'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  itemListSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Our Pillars'
const DESCRIPTION =
  'Explore the four pillars of the Alfeco Foundation: Education & Development, Food Security, Women & Youth, and Conservation & Environment.'
const PATH = '/pillars'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: 'website',
  },
  twitter: { title: TITLE, description: DESCRIPTION },
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            type: 'CollectionPage',
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          itemListSchema({
            name: TITLE,
            path: PATH,
            items: [
              { name: 'Education & Development', path: '/pillars/education' },
              { name: 'Food Security', path: '/pillars/food-security' },
              { name: 'Women & Youth', path: '/pillars/women-youth' },
              { name: 'Conservation & Environment', path: '/pillars/conservation' },
            ],
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: PATH },
          ]),
        ]}
      />
      <Pillars />
    </>
  )
}
