import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Membership (Post 245 Inc.)',
  description:
    'Join Post 245 Inc. as a social member. Support veterans and community through social membership.',
}

export default function Post245IncPage() {
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
          <div className="text-4xl mb-4">🤝</div>
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Social Membership (Post 245 Inc.)
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500]">
            Community members who want to support Post 245 through social membership and
            participation.
          </p>
        </div>

        {/* About Social Membership */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">About Social Membership</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Social membership at Post 245 Inc. is designed for community members who want to
              support our mission and participate in Post activities, even if they don&apos;t meet
              the eligibility requirements for other membership types.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
              As a social member, you become part of our community, help support veterans and their
              families, and can enjoy Post facilities and events.
            </p>
          </div>
        </div>

        {/* Eligibility Section */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Who Can Join</h2>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <ul className="space-y-3 text-[14px] text-[#666] leading-[24px] font-[500]">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Community members who support our mission</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Individuals who want to participate in Post events and activities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>
                  Those who wish to support veterans without being eligible for other membership
                  types
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits & Activities */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Benefits & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Social Events</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Participate in Post social events, gatherings, and community activities.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Community Support</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Help support veterans and their families through Post programs and initiatives.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Post Facilities</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Access to Post facilities and amenities (subject to Post guidelines).
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-5">
              <h3 className="text-[18px] text-[#333] font-[700] mb-2">Making a Difference</h3>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500]">
                Contribute to the mission of supporting veterans and strengthening our community.
              </p>
            </div>
          </div>
        </div>

        {/* Dues Information */}
        <div className="mb-8">
          <h2 className="text-[26px] text-[#333] font-[700] mb-4">Membership Dues</h2>
          <div className="bg-white border-2 border-blue-600 rounded-lg p-6">
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-4">
              Annual membership dues support Post 245 Inc.&apos;s facilities and community programs.
              Contact us for current dues amounts and payment options.
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] italic">
              Note: Dues amounts will be confirmed and payment forms will be available soon.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-8 text-center">
          <h2 className="text-[28px] font-[700] mb-4">Become a Social Member</h2>
          <p className="text-[16px] leading-[24px] mb-6 max-w-[600px] mx-auto">
            Join our community and support Post 245&apos;s mission. Contact us to learn more about
            social membership.
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
