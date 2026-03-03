import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Menu | Club Information',
  description: 'Download our full restaurant and bar menu.',
}

export default function MenuPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
          Restaurant & Bar Menu
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px] mb-8">
          Download our full restaurant and bar menu to see all of our delicious offerings at The
          Legion in the Woods.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
            <strong>Note:</strong> This page is under construction. The downloadable menu PDF will
            be added (commit d04da9bc). The menu will be hosted in the public/ directory with a
            stable link.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-[20px] text-[#333] font-[700] mb-4">Hours of Operation</h3>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Restaurant & Bar:</strong>
            </p>
            <ul className="text-[14px] text-[#666] leading-[24px] font-[500] space-y-1 ml-4">
              <li>Monday - Saturday: 11:00 AM - 10:00 PM</li>
              <li>Sunday: 12:00 PM - 8:00 PM</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-[20px] text-[#333] font-[700] mb-4">Contact Us</h3>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Phone:</strong>
              <br />
              <a href="tel:+18142376880" className="text-blue-600 hover:underline">
                (814) 237-6880
              </a>
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Call for current specials and daily offerings.
            </p>
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
