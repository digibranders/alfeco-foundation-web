import type { Metadata } from 'next'
import { Conservation } from '@/app/pages/pillars/Conservation'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Conservation & Environment'
const DESCRIPTION =
  "Alfeco Foundation's conservation initiatives — protecting biodiversity, supporting wildlife sanctuaries, and promoting environmental sustainability."
const PATH = '/pillars/conservation'

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
            serviceType: 'Conservation & Environment Programme',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <Conservation />
    </>
  )
}
