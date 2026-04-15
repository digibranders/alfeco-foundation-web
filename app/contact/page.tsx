import type { Metadata } from 'next'
import { Contact } from '@/app/pages/Contact'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Alfeco Foundation. Visit us in Sandton, call, or send a message. We\'d love to hear from you.',
}

export default function Page() { return <Contact /> }
