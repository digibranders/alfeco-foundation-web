import type { Metadata } from 'next'
import { Education } from '@/app/pages/pillars/Education'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  itemListSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Education & Development'
const DESCRIPTION =
  "Alfeco Foundation's education programmes — bursaries, skills development, and the Revive & Thrive school programme."
const PATH = '/pillars/education'

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
            serviceType: 'Education Programme',
          }),
          itemListSchema({
            name: 'Education Programmes',
            path: PATH,
            items: [
              { name: 'Bursary Programme', path: '/pillars/education/bursary' },
              { name: 'Revive & Thrive Programme', path: '/pillars/education/revive' },
              { name: 'Skills Development Programme', path: '/pillars/education/skills' },
            ],
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <Education />
    </>
  )
}
