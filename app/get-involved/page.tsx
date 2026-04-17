import type { Metadata } from 'next'
import { GetInvolved } from '@/app/pages/GetInvolved'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/app/lib/schema'

const TITLE = 'Get Involved'
const DESCRIPTION =
  'Discover ways to support the Alfeco Foundation — volunteer, donate, or partner with us to make a difference.'
const PATH = '/get-involved'

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
            { name: 'Get Involved', path: PATH },
          ]),
        ]}
      />
      <GetInvolved />
    </>
  )
}
