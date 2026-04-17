export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.alfecofoundation.com'
).replace(/\/$/, '')

export const SITE_NAME = 'Alfeco Foundation'

export const SITE_DESCRIPTION =
  'Empowering Communities. Inspiring Change. Born from Purpose, Nurtured by Family, Driven by Passion.'

export const SITE_LOCALE = 'en_ZA'

export const SITE_KEYWORDS = [
  'Alfeco Foundation',
  'nonprofit South Africa',
  'NGO Sandton',
  'community development',
  'education bursary South Africa',
  'food security',
  'women empowerment',
  'youth development',
  'wildlife conservation South Africa',
  'corporate social investment',
  'CSI',
  'ESG partnerships',
  'volunteer South Africa',
  'donate South Africa',
]

export const ORG = {
  name: SITE_NAME,
  legalName: 'Alfeco Foundation',
  logo: `${SITE_URL}/assets/logo.png`,
  email: 'info@alfecofoundation.com',
  telephone: '+27-11-908-9440',
  address: {
    streetAddress: '29 Autumn Street, Edenburg',
    addressLocality: 'Sandton',
    postalCode: '2128',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  sameAs: [
    'https://www.instagram.com/thealfecofoundation',
    'https://www.linkedin.com/company/alfeco-foundation/',
  ],
} as const

export function absoluteUrl(path: string): string {
  if (!path) return SITE_URL
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
