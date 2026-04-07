import type { Metadata } from 'next'
import Link from 'next/link'
import ZeffyBbqButton from '@/components/donate/zeffy-bbq-button'

export const metadata: Metadata = {
  title: 'Fundraisers',
  description:
    'Fundraisers hosted by American Legion Post 245, including Real Good BBQ and our seasonal Lent Friday Fish Fry (when scheduled).',
  alternates: {
    canonical: '/fundraisers',
  },
  openGraph: {
    title: 'Fundraisers',
    description:
      'Fundraisers hosted by American Legion Post 245, including Real Good BBQ and our seasonal Lent Friday Fish Fry (when scheduled).',
    url: '/fundraisers',
  },
  twitter: {
    title: 'Fundraisers',
    description:
      'Fundraisers hosted by American Legion Post 245, including Real Good BBQ and our seasonal Lent Friday Fish Fry (when scheduled).',
  },
}

export default function FundraisersPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        <div className="mb-10">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Fundraisers
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[900px]">
            Our fundraisers help support Post 245 programs and community efforts. This page keeps
            current ticket sales front-and-center while preserving historical details for seasonal
            fundraisers like our Fish Fry.
          </p>

          <p className="text-[14px] md:text-[16px] text-[#666] leading-[26px] font-[500] max-w-[900px] mt-3">
            Looking for something specific? Jump to{' '}
            <Link href="#real-good-bbq" className="text-blue-600 font-[700] hover:underline">
              Real Good BBQ
            </Link>{' '}
            or{' '}
            <Link href="#fish-fry" className="text-blue-600 font-[700] hover:underline">
              Fish Fry history
            </Link>
            .
          </p>
        </div>

        <div className="space-y-8">
          {/* Real Good BBQ */}
          <section
            id="real-good-bbq"
            className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 scroll-mt-[120px]"
          >
            <h2 className="text-[26px] md:text-[30px] text-[#333] font-[700] mb-2">
              <span aria-hidden="true">🍖</span> Real Good BBQ
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#666] leading-[26px] font-[500] mb-5 max-w-[900px]">
              Get tickets for our Real Good BBQ fundraiser. Thanks for supporting Post 245.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <ZeffyBbqButton
                className="inline-flex items-center justify-center bg-[#BF0D3E] text-white px-6 py-3 rounded-lg font-[700] hover:bg-[#FFD700] hover:text-[#002D62] transition-colors"
                ariaLabel="BBQ Ticket Sales"
              >
                BBQ Ticket Sales
              </ZeffyBbqButton>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center border-2 border-gray-200 px-6 py-3 rounded-lg font-[700] text-[#333] hover:border-blue-600 hover:text-blue-600 transition-colors"
              >
                Questions? Contact us
              </Link>
            </div>
          </section>

          {/* Lent Friday Fish Fry (Seasonal / Historical) */}
          <section
            id="fish-fry"
            className="bg-white border-2 border-gray-200 rounded-lg p-6 md:p-8 scroll-mt-[120px]"
          >
            <h2 className="text-[26px] md:text-[30px] text-[#333] font-[700] mb-2">
              <span aria-hidden="true">🐟</span> Lent Friday Fish Fry
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#666] leading-[26px] font-[500] mb-4 max-w-[900px]">
              Our Fish Fry is a seasonal fundraiser that may run during Lent. When it is scheduled,
              this page is the home for the latest ordering details and dates. It may not be offered
              every season.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded mb-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Out of season?</h3>
              <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
                Fish Fry ordering is not always available year-round. When it is scheduled, we post
                the Friday dates and ordering details here and on Facebook.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-5 rounded mb-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">
                Fish Fry history (typical details)
              </h3>
              <ul className="space-y-2 text-[14px] text-[#666] leading-[24px] font-[500]">
                <li>Drive-through pickup at 1950 Pine Hall Road, State College, PA 16801</li>
                <li>Typical pickup window: 4:30 PM – 5:30 PM</li>
                <li>Menu commonly includes fish, fries, coleslaw, and sauces</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-[18px] text-[#333] font-[700]">Seasonal dates</h3>
              <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
                Dates vary year-to-year. When scheduled, we post the Friday schedule — check our
                Facebook page for the latest announcements.
              </p>

              <a
                href="https://www.facebook.com/people/American-Legion-Post-245/100064092967036/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-blue-600 font-[700] text-[14px] hover:underline"
              >
                View updates on Facebook →
              </a>

              <div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center border-2 border-gray-200 px-6 py-3 rounded-lg font-[700] text-[#333] hover:border-blue-600 hover:text-blue-600 transition-colors"
                >
                  Questions? Contact us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
