import { Suspense } from 'react'
import { Donate } from '@/app/pages/Donate'

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
