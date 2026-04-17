import type { Metadata } from 'next'
import { Terms } from '@/app/pages/Terms'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/app/lib/schema'

const TITLE = 'Terms of Use'
const DESCRIPTION =
  'The Terms of Use governing your use of the Alfeco Foundation website and our digital services.'
const PATH = '/terms'

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
            { name: 'Terms of Use', path: PATH },
          ]),
        ]}
      />
      <Terms />
    </>
  )
}
