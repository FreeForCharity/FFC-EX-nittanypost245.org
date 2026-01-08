import React from 'react'
import ResultCard from '@/components/ui/ResultCard'

const PostImpact = () => {
  return (
    <div id="results">
      <div className="w-[90%] mx-auto py-[52px] lg:px-[20px]">
        <h1
          className="mt-[2px] pb-[10px] text-[30px] md:text-[48px] font-[400] leading-[46px]  text-center mb-[40px]"
          id="faustina-font"
        >
          Our Impact - 2024
        </h1>
        <div className="pt-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px]">
          <ResultCard title="100+" description="Active members serving our community" />
          <ResultCard title="1919" description="Year chartered - over 105 years of service" />
          <ResultCard title="50+" description="Community events and ceremonies annually" />
          <ResultCard
            title="1000+"
            description="Hours of volunteer service to veterans and families"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-[18px] text-gray-600" id="lato-font">
            <strong>Note to Post Leadership:</strong> Please update these statistics with actual
            Post 245 impact data, including membership numbers, events hosted, honor guard services,
            youth program participants, and community service hours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostImpact
