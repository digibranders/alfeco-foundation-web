import type { Metadata } from 'next'
import { SkillsDevelopment } from '@/app/pages/pillars/SkillsDevelopment'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Skills Development Programme'
const DESCRIPTION =
  'The Alfeco Foundation Skills Development Programme — equipping individuals with practical trade skills for employment and entrepreneurship.'
const PATH = '/pillars/education/skills'

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
            serviceType: 'Skills & Vocational Training',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Our Pillars', path: '/pillars' },
            { name: 'Education & Development', path: '/pillars/education' },
            { name: TITLE, path: PATH },
          ]),
        ]}
      />
      <SkillsDevelopment />
    </>
  )
}
