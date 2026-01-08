import React from 'react'

const Events = () => {
  return (
    <div id="events" className="py-[52px]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Post Events & Activities
        </h1>

        <div className="text-center mb-8">
          <p className="text-[20px] lg:text-[25px] font-[500]" id="lato-font">
            Join us for post meetings, ceremonies, community service events, and veteran support
            activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#002D62]">
            <h3 className="text-[24px] font-[600] mb-3 text-[#002D62]" id="lato-font">
              Post Meetings
            </h3>
            <p className="text-[18px] font-[400] mb-2" id="lato-font">
              Regular monthly meetings for members
            </p>
            <p className="text-[16px] text-gray-600" id="lato-font">
              Contact the post for current meeting schedule
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#BF0D3E]">
            <h3 className="text-[24px] font-[600] mb-3 text-[#BF0D3E]" id="lato-font">
              Honor Guard Services
            </h3>
            <p className="text-[18px] font-[400] mb-2" id="lato-font">
              Final honors for veterans and ceremony support
            </p>
            <p className="text-[16px] text-gray-600" id="lato-font">
              Available year-round for veteran funerals and memorial services
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#002D62]">
            <h3 className="text-[24px] font-[600] mb-3 text-[#002D62]" id="lato-font">
              Community Service
            </h3>
            <p className="text-[18px] font-[400] mb-2" id="lato-font">
              Parades, ceremonies, and community outreach
            </p>
            <p className="text-[16px] text-gray-600" id="lato-font">
              Including Memorial Day, Veterans Day, and 9/11 commemoration events
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#BF0D3E]">
            <h3 className="text-[24px] font-[600] mb-3 text-[#BF0D3E]" id="lato-font">
              Youth Programs
            </h3>
            <p className="text-[18px] font-[400] mb-2" id="lato-font">
              Boys State, Legion Baseball, and scholarships
            </p>
            <p className="text-[16px] text-gray-600" id="lato-font">
              Supporting the next generation of leaders
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-[18px] font-[400] text-gray-600" id="lato-font">
            <a
              href="https://www.facebook.com/people/American-Legion-Post-245/100064092967036/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#002D62] hover:underline font-[600]"
            >
              Follow us on Facebook for the latest updates
            </a>
          </p>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#002D62]"></div>
    </div>
  )
}

export default Events
