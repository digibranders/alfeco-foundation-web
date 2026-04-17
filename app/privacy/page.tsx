import type { Metadata } from 'next'
import { Privacy } from '@/app/pages/Privacy'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/app/lib/schema'

const TITLE = 'Privacy Policy'
const DESCRIPTION =
  'How the Alfeco Foundation collects, uses, and protects your personal information in accordance with POPIA.'
const PATH = '/privacy'

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
            { name: 'Privacy Policy', path: PATH },
          ]),
        ]}
      />
      <Privacy />
    </>
  )
}
