import React from 'react'
import Hero from '@/components/home-page/Hero'
import Mission from '@/components/home-page/Mission'
import SupportPost from '@/components/home-page/SupportFreeForCharity'
import PostFeatures from '@/components/home-page/Endowment-Features'
import OurPrograms from '@/components/home-page/Our-Programs'
import VolunteerwithUs from '@/components/home-page/Volunteer-with-Us'
import PostImpact from '@/components/home-page/Results-2023'
import PostLeadership from '@/components/home-page/TheFreeForCharityTeam'
import FrequentlyAskedQuestions from '@/components/home-page/FrequentlyAskedQuestions'
import Events from '@/components/home-page/Events'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <OurPrograms />
      <Events />
      <VolunteerwithUs />
      <SupportPost />
      <PostImpact />
      <PostFeatures />
      <PostLeadership />
      <FrequentlyAskedQuestions />
    </div>
  )
}

export default HomePage
