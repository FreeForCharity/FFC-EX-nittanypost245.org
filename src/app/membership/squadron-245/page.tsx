import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'S.A.L. Squadron 245 Membership',
  description:
    'Join Sons of The American Legion Squadron 245. Supporting the mission of Post 245 through service and dedication.',
}

export default function Squadron245Page() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/membership" className="text-blue-600 hover:underline text-[14px]">
            ← Back to Membership
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="text-4xl mb-4">⭐</div>
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            S.A.L. Squadron 245 Membership
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500]">
            Sons of The American Legion - carrying forward the legacy of service and dedication to
            veterans and community.
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Eligibility Requirements</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              S.A.L. membership is open to:
            </p>
            <ul className="space-y-3 text-[14px] text-[#666] leading-[24px] font-[500]">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  All male descendants, adopted sons, and stepsons of American Legion members
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Male descendants of veterans who died in service or were honorably discharged
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Members of all ages, from young men to adults</span>
              </li>
            </ul>
          </div>
        </div>

        {/* About S.A.L. */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">
            About Sons of The American Legion
          </h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              The Sons of The American Legion was created in 1932 as an organization within The
              American Legion. S.A.L. members include males of all ages whose parents or
              grandparents served in the U.S. military and were eligible for American Legion
              membership.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Although S.A.L. members cannot hold office in the American Legion or vote in Legion
              elections, they can participate in most other American Legion programs and activities.
            </p>
          </div>
        </div>

        {/* Activities & Programs */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Activities & Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Veterans Support</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Assist veterans and their families through volunteer service and fundraising.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Community Events</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Participate in and organize community events and patriotic observances.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Youth Programs</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Support American Legion youth programs and mentor younger members.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Fundraising</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Organize fundraisers to support Post activities and veteran services.
              </p>
            </div>
          </div>
        </div>

        {/* Dues Information */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Membership Dues</h2>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Annual membership dues support Squadron 245&apos;s programs and activities. Contact us
              for current dues amounts and payment options.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] italic">
              Note: Dues amounts will be confirmed and payment forms will be available soon.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-[28px] font-[700] mb-4">Join Squadron 245</h2>
          <p className="text-[16px] leading-[24px] mb-6 max-w-[600px] mx-auto">
            Honor your family&apos;s legacy of service. Contact us to begin your S.A.L. membership
            application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-[600] hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <Link
              href="/membership"
              className="inline-block bg-blue-800 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-900 transition-colors"
            >
              View All Memberships
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
