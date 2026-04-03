import type { Metadata } from 'next'
import { meetingMinutes } from '@/data/meetingMinutes'
import { assetPath } from '@/lib/assetPath'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Meeting Minutes',
  description:
    'Official meeting minutes from American Legion Post 245 – Legion in the Woods, State College, PA.',
}

export default function MeetingMinutesPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Meeting Minutes
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px]">
            Official minutes from American Legion Post 245 stated meetings. Read meeting summaries
            online or download the official PDF for your records.
          </p>
        </div>

        {/* Meeting Minutes List */}
        <div className="space-y-6">
          {meetingMinutes.map((minutes) => (
            <div
              key={minutes.slug}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="text-3xl mb-2" aria-hidden="true">
                  📋
                </div>
                <h2 className="text-[20px] text-[#333] font-[700] mb-1">{minutes.title}</h2>
                <p className="text-[14px] text-[#666] font-[500]">{minutes.period}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/meeting-minutes/${minutes.slug}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-[600] text-[14px] hover:bg-blue-700 transition-colors whitespace-nowrap"
                  aria-label={`Read ${minutes.title} online`}
                >
                  <span aria-hidden="true">📖</span> Read Online
                </Link>
                <a
                  href={assetPath(`/documents/${minutes.pdfFilename}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-[600] text-[14px] hover:bg-gray-200 transition-colors whitespace-nowrap"
                  aria-label={`Download ${minutes.title} (PDF)`}
                >
                  <span aria-hidden="true">⬇</span> Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-[16px] text-[#666] leading-[24px] font-[500] mb-4">
            Have questions about our meetings or minutes?
          </p>
          <a
            href={assetPath('/#contact')}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
