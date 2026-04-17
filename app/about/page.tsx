import type { Metadata } from 'next'
import { About } from '@/app/pages/About'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/app/lib/schema'

const TITLE = 'About Us'
const DESCRIPTION =
  'Learn about the Alfeco Foundation — our mission, values, and commitment to empowering communities across South Africa.'
const PATH = '/about'

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
            type: 'AboutPage',
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: PATH },
          ]),
        ]}
      />
      <About />
    </>
  )
}
