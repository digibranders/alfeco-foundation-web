import type { Metadata } from 'next'
import { Fraunces, Nunito } from 'next/font/google'
import { SiteLayout } from '@/app/components/Layout'
import '@/styles/index.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: {
    default: 'Alfeco Foundation',
    template: '%s | Alfeco Foundation',
  },
  description: 'Empowering Communities. Inspiring Change. Born from Purpose, Nurtured by Family, Driven by Passion.',
  metadataBase: new URL('https://alfecofoundation.vercel.app'),
  openGraph: {
    title: 'Alfeco Foundation',
    description: 'Empowering Communities. Inspiring Change. Born from Purpose, Nurtured by Family, Driven by Passion.',
    url: 'https://alfecofoundation.vercel.app',
    siteName: 'Alfeco Foundation',
    type: 'website',
    locale: 'en_ZA',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${nunito.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
