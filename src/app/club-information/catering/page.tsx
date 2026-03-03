import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Catering | Club Information',
  description: 'Learn about our catering services for your special events.',
}

export default function CateringPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
          Catering Services
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px] mb-8">
          Let American Legion Post 245 cater your special event. We provide quality food and service
          for gatherings of all sizes.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
            <strong>Note:</strong> This page is under construction. Catering information will be
            added from the legacy club-information/catering-contact.html page. Catering menu PDF and
            contact details will be included.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-[20px] text-[#333] font-[700] mb-4">Contact for Catering</h3>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Phone:</strong>
              <br />
              <a href="tel:+18142376880" className="text-blue-600 hover:underline">
                (814) 237-6880
              </a>
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@nittanypost245.org" className="text-blue-600 hover:underline">
                info@nittanypost245.org
              </a>
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-[20px] text-[#333] font-[700] mb-4">Event Types We Serve</h3>
            <ul className="text-[14px] text-[#666] leading-[24px] font-[500] space-y-1">
              <li>• Weddings & Receptions</li>
              <li>• Corporate Events</li>
              <li>• Family Gatherings</li>
              <li>• Memorial Services</li>
              <li>• Community Events</li>
            </ul>
          </div>
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
