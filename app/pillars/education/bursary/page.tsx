import type { Metadata } from 'next'
import { BursaryProgramme } from '@/app/pages/pillars/BursaryProgramme'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Bursary Programme'
const DESCRIPTION =
  'The Alfeco Foundation Bursary Programme — providing financial support to students across various fields of study.'
const PATH = '/pillars/education/bursary'

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
            serviceType: 'Education Bursary',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: 'Education & Development', path: '/pillars/education' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <BursaryProgramme />
    </>
  )
}
