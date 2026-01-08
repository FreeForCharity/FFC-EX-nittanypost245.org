import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Auxiliary Membership | American Legion Post 245',
  description:
    'Join the American Legion Auxiliary at Post 245. Supporting veterans, their families, and our community through service.',
}

export default function AuxiliaryPage() {
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
          <div className="text-4xl mb-4">👥</div>
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Auxiliary Membership
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500]">
            The American Legion Auxiliary supports veterans, their families, and our community
            through service and advocacy.
          </p>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Eligibility Requirements</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Auxiliary membership is open to:
            </p>
            <ul className="space-y-3 text-[14px] text-[#666] leading-[24px] font-[500]">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Spouses, mothers, daughters, sisters, and grandmothers of American Legion members
                  or veterans who died in service or were honorably discharged
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Female veterans who served during American Legion eligibility dates and were
                  honorably discharged
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission & Activities */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Our Mission & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Veterans Support</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Provide assistance and support to veterans and their families in our community.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Community Service</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Organize and participate in community events and service projects.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Youth Programs</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Support youth programs like Girls State and junior activities.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Patriotic Activities</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Promote patriotism through education, ceremonies, and community outreach.
              </p>
            </div>
          </div>
        </div>

        {/* Dues Information */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Membership Dues</h2>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Annual membership dues support our programs and community service activities. Contact
              us for current dues amounts and payment options.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] italic">
              Note: Dues amounts will be confirmed and payment forms will be available soon.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-[28px] font-[700] mb-4">Join the Auxiliary</h2>
          <p className="text-[16px] leading-[24px] mb-6 max-w-[600px] mx-auto">
            Be part of a dedicated group supporting veterans and our community. Contact us to start
            your membership application.
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
