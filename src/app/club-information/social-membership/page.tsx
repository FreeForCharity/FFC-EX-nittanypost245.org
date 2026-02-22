import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Social Membership | Club Information',
  description: 'Join our social club and enjoy member benefits, events, and community activities.',
}

export default function SocialMembershipPage() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
          Social Membership
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px] mb-8">
          Join our social club and enjoy member benefits, events, and community activities at
          American Legion Post 245.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
            <strong>Note:</strong> This page is under construction. Social membership details will
            be added from the legacy club-information/membership.html page. Membership benefits,
            application process, and dues information will be included.
          </p>
          <p className="text-[14px] text-[#666] leading-[24px] font-[500] mt-3">
            <strong>Related:</strong> This page connects to issue #21 (Zeffy form) and issue #25
            (Membership page + membership-type subpages).
          </p>
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
