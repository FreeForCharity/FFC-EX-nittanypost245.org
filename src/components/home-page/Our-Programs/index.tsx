import React from 'react'
import Image from 'next/image'
import OrangeFaqItem from '@/components/ui/OrangeFaqItem'

const OurPrograms = () => {
  return (
    <div id="programs" className="py-[52px]">
      <div className="w-[90%] lg:px-[20px] mx-auto">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Our Programs
        </h1>

        <div className="lg:pl-[50px]">
          <div className="mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#002D62] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/veterans-support.svg" alt="Veterans Support" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400] " id="lato-font">
              Veterans Affairs & Rehabilitation
            </h1>
          </div>
          <p className="text-[25px] font-[400] mb-[30px]" id="lato-font">
            Supporting veterans with benefits assistance, employment services, housing support, and
            rehabilitation programs. We help connect veterans with the resources they need.
          </p>
        </div>

        {/* Programs Details  */}
        <div>
          <OrangeFaqItem title="Final Honors">
            <ul className="list-disc list-inside">
              <li className="">
                Our Honor Guard provides dignified funeral services for veterans, ensuring they
                receive the respect and recognition they deserve for their service to our nation.
              </li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Veterans Benefits">
            <ul className="list-disc list-inside">
              <li className="">
                Assistance with navigating VA benefits, claims, and healthcare services
              </li>
              <li className="">Support for employment, housing, and rehabilitation services</li>
            </ul>
          </OrangeFaqItem>
          <OrangeFaqItem title="Community Support">
            <ul className="list-disc list-inside">
              <li className="">Hospital visits, blood drives, and support for homeless veterans</li>
              <li className="">
                Emergency assistance and crisis support for veterans and their families
              </li>
            </ul>
          </OrangeFaqItem>
        </div>

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#002D62] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/youth-programs.svg" alt="Youth Programs" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              Children & Youth Programs
            </h1>
          </div>
          <p className="text-[25px] font-[400] mb-[30px]" id="lato-font">
            Developing future leaders through Boys State, American Legion Baseball, Junior Shooting
            Sports, Boy Scouts, and scholarship opportunities.
          </p>
        </div>

        <div className="mt-[60px]">
          <div className="lg:pl-[50px] mb-[40px]  flex items-center gap-[20px]">
            <div className="w-[100px] flex items-center justify-center p-2 h-[100px] bg-[#002D62] rounded-full">
              <div className="relative w-[56px] h-[56px]">
                <Image src="/Svgs/sustainable-funding.svg" alt="Americanism" fill></Image>
              </div>
            </div>
            <h1 className="text-[36px] font-[400]  " id="lato-font">
              Americanism & Community Service
            </h1>
          </div>
          <p className="text-[25px] font-[400] mb-[30px]" id="lato-font">
            Promoting patriotism, citizenship, and respect for our nation through flag programs,
            ceremonies, and community events. Supporting new citizens with American flags and flag
            etiquette materials.
          </p>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#002D62]"></div>
    </div>
  )
}

export default OurPrograms
