import type { Metadata } from 'next'
import { News } from '@/app/pages/News'
import { NEWS_ITEMS } from '@/app/data/news'
import { JsonLd } from '@/app/components/JsonLd'
import { breadcrumbSchema } from '@/app/lib/schema'

type Params = Promise<{ id: string }>

function findNewsItem(id: string) {
  const numeric = Number(id)
  if (!Number.isFinite(numeric)) return undefined
  return NEWS_ITEMS.find((item) => item.id === numeric)
}

function clampDescription(text: string, max = 200): string {
  const clean = text.trim()
  return clean.length > max ? `${clean.slice(0, max - 1).trimEnd()}…` : clean
}

export async function generateStaticParams() {
  return NEWS_ITEMS.map((item) => ({ id: String(item.id) }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { id } = await params
  const item = findNewsItem(id)

  if (!item) {
    return {
      title: 'Story not found',
      description: 'The news story you are looking for could not be found.',
      alternates: { canonical: `/news/${id}` },
      robots: { index: false, follow: true },
    }
  }

  const title = item.title.length > 70 ? `${item.title.slice(0, 67)}...` : item.title
  const description = clampDescription(item.excerpt)
  const path = `/news/${item.id}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: 'article',
      images: [{ url: item.img, alt: item.title }],
      publishedTime: new Date(item.date).toISOString(),
      section: item.category,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [item.img],
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { id } = await params
  const item = findNewsItem(id)

  return (
    <>
      {item ? (
        <JsonLd
          data={[
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'News & Events', path: '/news' },
              { name: item.category, path: '/news' },
            ]),
          ]}
        />
      ) : null}
      <News />
    </>
  )
}
