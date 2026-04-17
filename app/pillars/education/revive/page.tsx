import type { Metadata } from 'next'
import { ReviveThrive } from '@/app/pages/pillars/ReviveThrive'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Revive & Thrive Programme'
const DESCRIPTION =
  'The Alfeco Foundation Revive & Thrive Programme — restoring and upgrading school infrastructure for better learning environments.'
const PATH = '/pillars/education/revive'

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
            serviceType: 'School Infrastructure Programme',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: 'Education & Development', path: '/pillars/education' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <ReviveThrive />
    </>
  )
}
