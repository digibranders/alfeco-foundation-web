import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Donate } from '@/app/pages/Donate'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Make a donation to the Alfeco Foundation. Your contribution helps deliver impactful programmes and build a better future for communities across South Africa.',
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
    <Suspense fallback={<DonateLoading />}>
      <Donate />
    </Suspense>
  )
}
