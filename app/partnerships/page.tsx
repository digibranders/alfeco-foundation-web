import type { Metadata } from 'next'
import { Partnerships } from '@/app/pages/Partnerships'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  serviceSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Corporate Partnerships'
const DESCRIPTION =
  'Partner with the Alfeco Foundation to create measurable social impact while aligning with your ESG and CSI objectives.'
const PATH = '/partnerships'

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
            name: 'Corporate Social Investment Partnerships',
            description: DESCRIPTION,
            path: PATH,
            serviceType: 'CSI & ESG Partnerships',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Corporate Partnerships', path: PATH },
          ]),
        ]}
      />
      <Partnerships />
    </>
  )
}
