import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'American Legion Riders Chapter 245 | American Legion Post 245',
  description:
    'Join American Legion Riders Chapter 245. Motorcycle enthusiasts supporting veterans and community through riding and service.',
}

export default function RidersChapter245Page() {
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
          <div className="text-4xl mb-4">🏍️</div>
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            American Legion Riders (Chapter 245)
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500]">
            Motorcycle enthusiasts who are American Legion members, riding for veterans and our
            community.
          </p>
        </div>

        {/* About ALR */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">About American Legion Riders</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              The American Legion Riders (ALR) is a program sponsored by The American Legion. The
              ALR was founded in 1993 and has grown to more than 130,000 members in all 50 states.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
              Chapter 245 combines a love of motorcycles with a dedication to serving veterans,
              their families, and our community through organized rides, fundraisers, and volunteer
              activities.
            </p>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Eligibility Requirements</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              To join American Legion Riders Chapter 245, you must:
            </p>
            <ul className="space-y-3 text-[14px] text-[#666] leading-[24px] font-[500]">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Be a member in good standing of The American Legion, American Legion Auxiliary, or
                  Sons of The American Legion
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Own and operate a motorcycle (displacement requirements may apply)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Have a valid motorcycle operator&apos;s license</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Carry proper motorcycle insurance as required by state law</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Activities & Events */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Activities & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Group Rides</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Organized motorcycle rides to rallies, events, and memorial services.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Fundraising</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Poker runs, charity rides, and events to raise funds for veteran programs.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Veteran Support</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Escort services for veteran funerals and support for injured veterans.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Community Service</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Participate in community events and American Legion activities.
              </p>
            </div>
          </div>
        </div>

        {/* Dues Information */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Membership Dues</h2>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Annual Chapter dues are in addition to your American Legion, Auxiliary, or S.A.L.
              membership. Contact us for current dues amounts and payment options.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] italic">
              Note: Dues amounts will be confirmed and payment forms will be available soon.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-[28px] font-[700] mb-4">Ride with Chapter 245</h2>
          <p className="text-[16px] leading-[24px] mb-6 max-w-[600px] mx-auto">
            Join fellow riders in supporting veterans and our community. Contact us to learn more
            about Chapter 245.
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
