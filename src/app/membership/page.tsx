import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Membership | American Legion Post 245',
  description:
    'Join American Legion Post 245. Learn about Veteran Class A, Auxiliary, S.A.L. Squadron 245, Social, and Riders Chapter 245 memberships.',
}

export default function MembershipPage() {
  const membershipTypes = [
    {
      title: 'Veteran Class A Membership',
      description:
        'For veterans who served in the armed forces during wartime and meet eligibility requirements.',
      path: '/membership/veteran-class-a',
      icon: '🎖️',
    },
    {
      title: 'Auxiliary Membership',
      description:
        'For family members of veterans, supporting our mission through service and community involvement.',
      path: '/membership/auxiliary',
      icon: '👥',
    },
    {
      title: 'S.A.L. (Squadron 245) Membership',
      description:
        'Sons of The American Legion - for male descendants of veterans who support our mission.',
      path: '/membership/squadron-245',
      icon: '⭐',
    },
    {
      title: 'Social Membership (Post 245 Inc.)',
      description:
        'Community members who want to support Post 245 through social membership.',
      path: '/membership/post-245-inc',
      icon: '🤝',
    },
    {
      title: 'American Legion Riders (Chapter 245)',
      description:
        'Motorcycle enthusiasts who are American Legion members, riding for veterans and community.',
      path: '/membership/riders-chapter-245',
      icon: '🏍️',
    },
  ]

  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Membership
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px]">
            American Legion Post 245 welcomes veterans, their families, and community supporters.
            Choose the membership type that best fits your connection to our mission of serving
            veterans, their families, and our community.
          </p>
        </div>

        {/* Membership Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {membershipTypes.map((type, index) => (
            <Link
              key={index}
              href={type.path}
              className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{type.icon}</div>
              <h2 className="text-[20px] text-[#333] font-[700] mb-3 group-hover:text-blue-600 transition-colors">
                {type.title}
              </h2>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500] mb-4">
                {type.description}
              </p>
              <span className="text-blue-600 font-[600] text-[14px] group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-[20px] text-[#333] font-[700] mb-3">Why Join Post 245?</h3>
          <ul className="space-y-2 text-[14px] text-[#666] leading-[24px] font-[500]">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Support veterans and their families in our community</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Participate in community service and patriotic events</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Connect with fellow veterans and supporters</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Access member benefits and programs</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">✓</span>
              <span>Make a difference in the lives of those who served</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-[16px] text-[#666] leading-[24px] font-[500] mb-4">
            Have questions about membership?
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
