import type { Metadata } from 'next'
import { newsletters } from '@/data/newsletters'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Newsletters',
  description:
    'Read the latest newsletters from American Legion Post 245 – Legion in the Woods, State College, PA.',
}

export default function NewslettersPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Newsletters
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px]">
            Stay up to date with news, events, and stories from American Legion Post 245. Download
            or read our newsletters below.
          </p>
        </div>

        {/* Newsletter List */}
        <div className="space-y-6">
          {newsletters.map((newsletter) => (
            <div
              key={newsletter.filename}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="text-3xl mb-2">📰</div>
                <h2 className="text-[20px] text-[#333] font-[700] mb-1">{newsletter.title}</h2>
                <p className="text-[14px] text-[#666] font-[500]">{newsletter.period}</p>
              </div>
              <a
                href={assetPath(`/Newsletters/${newsletter.filename}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-[600] text-[14px] hover:bg-blue-700 transition-colors whitespace-nowrap"
                aria-label={`Download or view ${newsletter.title} (PDF)`}
              >
                <span aria-hidden="true">⬇</span> View / Download
              </a>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-[16px] text-[#666] leading-[24px] font-[500] mb-4">
            Want to receive our newsletter or have questions?
          </p>
          <a
            href="/#contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
