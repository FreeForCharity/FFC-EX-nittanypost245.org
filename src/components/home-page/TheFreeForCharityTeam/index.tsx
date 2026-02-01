import React from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'
import { assetPath } from '@/lib/assetPath'

const PostLeadership = () => {
  const PLACEHOLDER_IMAGE = assetPath('/american-legion-emblem.png')

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
            imageUrl={assetPath('/Images/dj-watkins.webp')}
            name="D.J. Watkins"
            title="Post Commander"
            linkedinUrl="https://www.linkedin.com/in/dj-watkins/"
          />
          <TeamMemberCard
            imageUrl={PLACEHOLDER_IMAGE}
            name="Tom Palchak"
            title="First Vice Commander"
            linkedinUrl="https://www.linkedin.com/in/thomas-palchak-21b100a3/"
          />
          <TeamMemberCard
            imageUrl={assetPath('/Images/rich-jackson.webp')}
            name="Rich Jackson"
            title="Second Vice Commander"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl={assetPath('/Images/larry-hess.webp')}
            name="Larry Hess"
            title="Adjutant"
          />
          <TeamMemberCard
            imageUrl={assetPath('/Images/chris-solo.webp')}
            name="Chris Solo"
            title="Finance Officer"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto" id="lato-font">
            <strong>Note to Post Leadership:</strong> The Post 245 leadership information has been
            updated with current officers. To update photos or LinkedIn profiles, please contact the
            web team. Consider adding additional positions such as Service Officer, Chaplain,
            Sergeant-at-Arms, and other key positions as needed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostLeadership
