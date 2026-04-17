import type { Metadata } from 'next'
import { Contact } from '@/app/pages/Contact'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema, webPageSchema } from '@/app/lib/schema'
import { organizationSchema } from '@/app/lib/schema'

const TITLE = 'Contact Us'
const DESCRIPTION =
  "Get in touch with the Alfeco Foundation. Visit us in Sandton, call, or send a message. We'd love to hear from you."
const PATH = '/contact'

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
            type: 'ContactPage',
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact Us', path: PATH },
          ]),
        ]}
      />
      <Contact />
    </>
  )
}
