import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Officers | Club Information',
  description: 'Meet the leadership team of American Legion Post 245.',
}

export default function OfficersPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
          Post 245 Officers
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px] mb-8">
          Meet the dedicated leadership team of American Legion Post 245.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
            <strong>Note:</strong> This page is under construction. Officer information will be
            added from the legacy club-information/officers.html page. Contact information and
            photos will be included in the next update.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/club-information"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-700 transition-colors"
          >
            ← Back to Club Information
          </Link>
        </div>
      </div>
    </div>
  )
}
