import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Club Information',
  description:
    'American Legion Post 245 - The Legion in the Woods. Learn about our social club, restaurant, bar, membership, events, and community activities in State College, PA.',
}

export default function ClubInformationPage() {
  const sections = [
    {
      title: 'Officers',
      description: 'Meet the leadership team of American Legion Post 245.',
      path: '/club-information/officers',
      icon: '👔',
    },
    {
      title: 'Social Membership',
      description:
        'Join our social club and enjoy member benefits, events, and community activities.',
      path: '/club-information/social-membership',
      icon: '🤝',
    },
    {
      title: 'Lunch Specials',
      description: 'Daily lunch specials at our restaurant. Great food at great prices!',
      path: '/club-information/specials',
      icon: '🍽️',
    },
    {
      title: 'Evening Specials',
      description: 'Evening specials and dining options at Post 245.',
      path: '/club-information/evening-specials',
      icon: '🌙',
    },
    {
      title: 'Events Calendar',
      description: 'View our monthly events calendar and upcoming activities.',
      path: '/club-information/events',
      icon: '📅',
    },
    {
      title: 'Newsletters',
      description: 'Read our quarterly newsletters to stay informed about Post 245 news.',
      path: '/club-information/newsletters',
      icon: '📰',
    },
    {
      title: 'Menu',
      description: 'Download our full restaurant and bar menu.',
      path: '/club-information/menu',
      icon: '📋',
    },
    {
      title: 'Catering',
      description: 'Learn about our catering services for your special events.',
      path: '/club-information/catering',
      icon: '🍴',
    },
  ]

  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Club Information
          </h1>
          <p className="text-[16px] md:text-[18px] text-[#666] leading-[28px] font-[500] max-w-[800px]">
            Welcome to American Legion Post 245, &quot;The Legion in the Woods.&quot; Located at
            1950 Pine Hall Road in State College, PA, our post features a welcoming social club,
            restaurant, and bar serving veterans, members, and the community since 1919.
          </p>
        </div>

        {/* About Section */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-12">
          <h2 className="text-[24px] text-[#333] font-[700] mb-3">About Our Club</h2>
          <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-3">
            Our social club and restaurant provide a comfortable gathering place for veterans, their
            families, and community members. Whether you&apos;re looking for a great meal, friendly
            conversation, or a place to celebrate special occasions, Post 245 welcomes you.
          </p>
          <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
            We offer daily lunch and evening specials, host community events, and provide catering
            services for private functions. Membership is open to eligible veterans and community
            members through our social membership program.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <Link
              key={index}
              href={section.path}
              className="group bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{section.icon}</div>
              <h2 className="text-[20px] text-[#333] font-[700] mb-3 group-hover:text-blue-600 transition-colors">
                {section.title}
              </h2>
              <p className="text-[14px] text-[#666] leading-[22px] font-[500] mb-4">
                {section.description}
              </p>
              <span className="text-blue-600 font-[600] text-[14px] group-hover:underline">
                Learn More →
              </span>
            </Link>
          ))}
        </div>

        {/* Hours & Contact Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-[20px] text-[#333] font-[700] mb-4">Hours of Operation</h3>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Restaurant & Bar:</strong>
            </p>
            <ul className="text-[14px] text-[#666] leading-[24px] font-[500] space-y-1 ml-4">
              <li>Monday - Saturday: 11:00 AM - 10:00 PM</li>
              <li>Sunday: 12:00 PM - 8:00 PM</li>
            </ul>
            <p className="text-[12px] text-[#999] mt-3 italic">
              Hours may vary for special events and holidays
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-[20px] text-[#333] font-[700] mb-4">Visit Us</h3>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Location:</strong>
              <br />
              1950 Pine Hall Road
              <br />
              State College, PA 16801
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500] mb-2">
              <strong>Phone:</strong>
              <br />
              <a href="tel:+18142376880" className="text-blue-600 hover:underline">
                (814) 237-6880
              </a>
            </p>
            <p className="text-[14px] text-[#666] leading-[24px] font-[500]">
              <strong>Email:</strong>
              <br />
              <a href="mailto:info@nittanypost245.org" className="text-blue-600 hover:underline">
                info@nittanypost245.org
              </a>
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-[16px] text-[#666] leading-[24px] font-[500] mb-4">
            Ready to visit or learn more about membership?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/club-information/social-membership"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-700 transition-colors"
            >
              Social Membership
            </Link>
            <a
              href="/#contact"
              className="inline-block bg-gray-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-gray-700 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
