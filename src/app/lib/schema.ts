import { NEWS_ITEMS } from '@/app/data/news'
import { ORG, SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from './site'

type JsonLd = Record<string, unknown>

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': ['NGO', 'Organization'],
    '@id': `${SITE_URL}/#organization`,
    name: ORG.name,
    legalName: ORG.legalName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: ORG.logo,
      width: 512,
      height: 512,
    },
    image: ORG.logo,
    description: SITE_DESCRIPTION,
    email: ORG.email,
    telephone: ORG.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.address.streetAddress,
      addressLocality: ORG.address.addressLocality,
      postalCode: ORG.address.postalCode,
      addressRegion: ORG.address.addressRegion,
      addressCountry: ORG.address.addressCountry,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: ORG.telephone,
        email: ORG.email,
        areaServed: 'ZA',
        availableLanguage: ['English'],
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    knowsAbout: [
      'Education & Development',
      'Food Security',
      'Women & Youth Empowerment',
      'Conservation & Environment',
    ],
    sameAs: [...ORG.sameAs],
  }
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-ZA',
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

type PageKind =
  | 'WebPage'
  | 'AboutPage'
  | 'ContactPage'
  | 'CollectionPage'
  | 'ItemPage'

export function webPageSchema(params: {
  type?: PageKind
  name: string
  description: string
  path: string
  image?: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': params.type ?? 'WebPage',
    '@id': `${absoluteUrl(params.path)}#webpage`,
    url: absoluteUrl(params.path),
    name: params.name,
    description: params.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-ZA',
    ...(params.image ? { primaryImageOfPage: absoluteUrl(params.image) } : {}),
  }
}

export function serviceSchema(params: {
  name: string
  description: string
  path: string
  serviceType: string
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    serviceType: params.serviceType,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: { '@type': 'Country', name: 'South Africa' },
  }
}

export function donateActionSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'DonateAction',
    name: 'Donate to Alfeco Foundation',
    description:
      'Support education, food security, women & youth, and conservation programmes across South Africa.',
    recipient: { '@id': `${SITE_URL}/#organization` },
    target: absoluteUrl('/donate'),
  }
}

export function faqSchema(
  qas: { question: string; answer: string }[],
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qas.map((qa) => ({
      '@type': 'Question',
      name: qa.question,
      acceptedAnswer: { '@type': 'Answer', text: qa.answer },
    })),
  }
}

export type NewsItem = (typeof NEWS_ITEMS)[number]

function isoFromNewsDate(date: string): string {
  const parsed = new Date(date)
  return isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString()
}

export function articleSchema(item: NewsItem): JsonLd {
  const url = absoluteUrl(`/news/${item.id}`)
  const published = isoFromNewsDate(item.date)
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    headline: item.title.length > 110 ? item.title.slice(0, 107) + '...' : item.title,
    description: item.excerpt,
    url,
    image: [item.img],
    datePublished: published,
    dateModified: published,
    articleSection: item.category,
    inLanguage: 'en-ZA',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  }
}

export function itemListSchema(params: {
  name: string
  path: string
  items: { name: string; path: string }[]
}): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: params.name,
    url: absoluteUrl(params.path),
    itemListElement: params.items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  }
}
