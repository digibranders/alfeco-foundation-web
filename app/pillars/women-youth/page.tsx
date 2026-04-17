import type { Metadata } from 'next'
import { WomenYouth } from '@/app/pages/pillars/WomenYouth'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Women & Youth'
const DESCRIPTION =
  "Alfeco Foundation's women and youth empowerment programmes — entrepreneurship, leadership development, and financial inclusion."
const PATH = '/pillars/women-youth'

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
            serviceType: 'Women & Youth Empowerment Programme',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <WomenYouth />
    </>
  )
}
