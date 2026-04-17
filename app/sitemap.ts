import type { MetadataRoute } from 'next'
import { NEWS_ITEMS } from '@/app/data/news'
import { SITE_URL } from '@/app/lib/site'

type StaticRoute = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pillars', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/pillars/education', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pillars/education/bursary', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pillars/education/revive', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pillars/education/skills', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/pillars/food-security', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pillars/women-youth', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pillars/conservation', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/news', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.6 },
  { path: '/donate', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/get-involved', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/volunteer', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/partnerships', changeFrequency: 'monthly', priority: 0.7 },
]

function parseDate(value: string): Date {
  const d = new Date(value)
  return isNaN(d.getTime()) ? new Date() : d
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  const newsEntries: MetadataRoute.Sitemap = NEWS_ITEMS.map((item) => ({
    url: `${SITE_URL}/news/${item.id}`,
    lastModified: parseDate(item.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...newsEntries]
}
