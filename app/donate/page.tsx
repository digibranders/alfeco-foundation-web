import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Donate } from '@/app/pages/Donate'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  donateActionSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'Donate'
const DESCRIPTION =
  'Make a donation to the Alfeco Foundation. Your contribution helps deliver impactful programmes and build a better future for communities across South Africa.'
const PATH = '/donate'

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

function DonateLoading() {
  return (
    <div className="min-h-screen bg-[#EBF3F5] pt-12 pb-24 flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading...</div>
    </div>
  )
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
          donateActionSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Donate', path: PATH },
          ]),
        ]}
      />
      <Suspense fallback={<DonateLoading />}>
        <Donate />
      </Suspense>
    </>
  )
}
