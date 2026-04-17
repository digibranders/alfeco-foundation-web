import type { Metadata } from 'next'
import { Volunteer } from '@/app/pages/Volunteer'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/app/lib/schema'

const TITLE = 'Volunteer'
const DESCRIPTION =
  'Volunteer with the Alfeco Foundation. Lend your time, skills, and passion to community programmes across South Africa.'
const PATH = '/volunteer'

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
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Volunteer', path: PATH },
          ]),
        ]}
      />
      <Volunteer />
    </>
  )
}
