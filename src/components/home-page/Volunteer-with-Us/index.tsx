import React from 'react'
import Image from 'next/image'

const index = () => {
  return (
    <div id="membership" className="bg-[#002D62] py-[40px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="mt-[2px] mb-[42px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px] text-center text-white"
          id="faustina-font"
        >
          Join American Legion Post 245
        </h1>
        <p
          className="mb-[13px] w-[85%] mx-auto font-[500] text-[20px] leading-[30px] text-center text-white"
          id="lato-font"
        >
          Membership is open to all honorably discharged veterans of the U.S. Armed Forces who
          served on active duty during wartime periods. Join us at The Legion in the Woods and
          continue your service to fellow veterans and our community in Centre County.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-[30px]">
          <a
            href="mailto:info@post245.com"
            className="w-[216px] h-[62px] rounded-[27px] 
             flex items-center justify-center px-[32px] py-[18px] gap-[10px] 
             text-[#002D62] bg-white text-[20px] font-[400] font-sans text-center hover:bg-[#002D62] hover:text-white transition-colors"
            id="lato-font"
          >
            Join Today
          </a>
          <a
            href="https://www.legion.org/membership/eligibility"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[216px] h-[62px] rounded-[27px] 
             flex items-center justify-center px-[32px] py-[18px] gap-[10px] 
             text-white border-2 border-white text-[20px] font-[400] font-sans text-center hover:bg-white hover:text-[#002D62] transition-colors"
            id="lato-font"
          >
            Eligibility
          </a>
        </div>

        <div className="mt-[40px] text-white text-center">
          <p className="text-[18px] font-[500] mb-[20px]" id="lato-font">
            Contact us for current membership dues and information
          </p>
          <p className="text-[16px] font-[400]" id="lato-font">
            All military branches welcome: Army, Navy, Marine Corps, Air Force, Space Force, Coast
            Guard, and WWII Merchant Marines
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
