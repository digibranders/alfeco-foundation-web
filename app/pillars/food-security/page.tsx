import type { Metadata } from 'next'
import { FoodSecurity } from '@/app/pages/pillars/FoodSecurity'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Food Security'
const DESCRIPTION =
  "Alfeco Foundation's food security initiatives — sustainable agriculture, nutrition programmes, and school feeding schemes."
const PATH = '/pillars/food-security'

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
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          serviceSchema({
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
            serviceType: 'Food Security Programme',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <FoodSecurity />
    </>
  )
}
