import React from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

const PostLeadership = () => {
  return (
    <div id="team" className="py-[50px]">
      <h1
        className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
        id="faustina-font"
      >
        Post 245 Leadership
      </h1>

      <div className="w-[90%] mx-auto py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center mb-[50px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member1.webp"
            name="Post Commander"
            title="Placeholder - Add Commander Name & Photo"
            linkedinUrl="#"
          />
          <TeamMemberCard
            imageUrl="/Images/member2.webp"
            name="First Vice Commander"
            title="Placeholder - Add 1st Vice Commander Name & Photo"
            linkedinUrl="#"
          />
          <TeamMemberCard
            imageUrl="/Images/member3.webp"
            name="Second Vice Commander"
            title="Placeholder - Add 2nd Vice Commander Name & Photo"
            linkedinUrl="#"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member4.webp"
            name="Adjutant"
            title="Placeholder - Add Adjutant Name & Photo"
            linkedinUrl="#"
          />
          <TeamMemberCard
            imageUrl="/Images/member5.webp"
            name="Finance Officer"
            title="Placeholder - Add Finance Officer Name & Photo"
            linkedinUrl="#"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto" id="lato-font">
            <strong>Note to Post Leadership:</strong> Please replace placeholder images and names
            with actual Post 245 officer information. Include photos, names, titles, and optional
            LinkedIn profiles or email contacts. Consider adding Service Officer, Chaplain,
            Sergeant-at-Arms, and other key positions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostLeadership
