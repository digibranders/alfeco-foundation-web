import type { Metadata } from 'next'
import { News } from '@/app/pages/News'
import { NEWS_ITEMS } from '@/app/data/news'
import { JsonLd } from '@/app/components/JsonLd'
import {
  breadcrumbSchema,
  itemListSchema,
  webPageSchema,
} from '@/app/lib/schema'

const TITLE = 'News & Events'
const DESCRIPTION =
  'Stay updated with the latest news, events, and impact stories from the Alfeco Foundation.'
const PATH = '/news'

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
            type: 'CollectionPage',
            name: TITLE,
            description: DESCRIPTION,
            path: PATH,
          }),
          itemListSchema({
            name: TITLE,
            path: PATH,
            items: NEWS_ITEMS.map((item) => ({
              name: item.title,
              path: `/news/${item.id}`,
            })),
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'News & Events', path: PATH },
          ]),
        ]}
      />
      <News />
    </>
  )
}
