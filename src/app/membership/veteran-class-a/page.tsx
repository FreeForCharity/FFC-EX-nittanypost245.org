import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Veteran Class A Membership',
  description:
    'Join American Legion Post 245 as a Veteran Class A member. Eligibility requirements and membership benefits for wartime veterans.',
}

export default function VeteranClassAPage() {
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
          <div className="text-4xl mb-4">🎖️</div>
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Veteran Class A Membership
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500]">
            For veterans who served in the armed forces during wartime and meet American Legion
            eligibility requirements.
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Eligibility Requirements</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              To be eligible for Veteran Class A membership, you must:
            </p>
            <ul className="space-y-3 text-[14px] text-[#666] leading-[24px] font-[500]">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Have served on active duty in the U.S. Armed Forces (Army, Navy, Marine Corps, Air
                  Force, or Coast Guard)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Have served during one of the American Legion&apos;s recognized war periods
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Be honorably discharged or currently serving honorably</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Membership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Community & Support</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Connect with fellow veterans, attend events, and be part of a supportive community.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Advocacy</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Support veterans&apos; rights and benefits through our legislative advocacy efforts.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Programs</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Participate in youth programs, community service, and patriotic activities.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Member Benefits</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Access to member discounts, programs, and resources at local and national levels.
              </p>
            </div>
          </div>
        </div>

        {/* Dues Information */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Membership Dues</h2>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Annual membership dues support Post 245&apos;s programs and operations. Contact us for
              current dues amounts and payment options.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] italic">
              Note: Dues amounts will be confirmed and payment forms will be available soon.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-[28px] font-[700] mb-4">Ready to Join?</h2>
          <p className="text-[16px] leading-[24px] mb-6 max-w-[600px] mx-auto">
            Contact Post 245 to begin your membership application. We&apos;ll guide you through the
            process and answer any questions.
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
