import React from 'react'
import { SustainableFundingCard } from '@/components/ui/SustainableFundingCard'

const PostFeatures: React.FC = () => {
  return (
    <div className="pb-[30px]">
      <div className="w-[90%] mx-auto lg:px-[20px] max-w-[1280px]">
        <div>
          <h1
            className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[30px]"
            id="faustina-font"
          >
            What We Offer
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
            <SustainableFundingCard
              imageUrl="/Svgs/sustainable-funding.svg"
              title="Restaurant & Bar"
              text="Legion in the Woods offers food and beverages in a welcoming atmosphere. Open to members and guests. Contact us for current hours and menu information."
            />
            <SustainableFundingCard
              imageUrl="/Svgs/Long-Term-Impact.svg"
              title="Meeting Space"
              text="Our post provides meeting facilities for veteran groups, community organizations, and special events. Contact us to learn about availability and reservations."
            />
            <SustainableFundingCard
              imageUrl="/Svgs/Goal-of-$1,000,000.svg"
              title="Veterans Support"
              text="We provide resources, advocacy, and support for veterans navigating benefits, healthcare, and community services. Contact our service officers for assistance."
            />
            <SustainableFundingCard
              imageUrl="/Svgs/Be-a-Champion.svg"
              title="Community Programs"
              text="From youth scholarships to community service projects, our post actively serves State College and Centre County. Join us to make a difference."
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-[18px] text-gray-600 max-w-3xl mx-auto" id="lato-font">
              <strong>Note to Post Leadership:</strong> Please update these feature cards with Post
              245-specific offerings, facilities, programs, and services. Consider including rental
              information, hall capacity, catering details, and any unique post amenities.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#002D62]"></div>
    </div>
  )
}

export default PostFeatures
