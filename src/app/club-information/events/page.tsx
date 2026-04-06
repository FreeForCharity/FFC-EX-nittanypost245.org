import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Events Calendar | Club Information',
  description: 'View our monthly events calendar and upcoming activities.',
}

export default function EventsPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
          Events Calendar
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px] mb-8">
          View our monthly events calendar and upcoming activities at American Legion Post 245.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <h2 className="text-[20px] text-[#333] font-[700] mb-3">Monthly Event PDFs</h2>
          <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-3">
            <strong>Note:</strong> This page is under construction. Event PDFs will be added for:
          </p>
          <ul className="text-[14px] text-[#666] leading-[24px] font-[500] space-y-1 ml-6 list-disc">
            <li>October Events 2024 (PDF) - commit a2d9a8b2</li>
            <li>November Events 2024 (PDF) - commit 6fedce31</li>
            <li>December Events 2024 (PDF) - commit 4d3c84ac</li>
            <li>January Events 2025 (PDF) - commit fc46789b</li>
            <li>February Events 2025 (PDF) - commit 8f727512</li>
          </ul>
          <p className="text-[14px] text-[#666] leading-[24px] font-[500] mt-3">
            PDFs will be hosted in the public/ directory with stable links.
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
