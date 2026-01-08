import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>
        <div>
          <FrequentlyAskedQuestions title="Who can join American Legion Post 245?">
            <p className="mb-[20px]">
              Membership is open to all honorably discharged veterans who served on active duty
              during wartime periods as defined by Congress. This includes veterans from all
              branches of the U.S. Armed Forces: Army, Navy, Marine Corps, Air Force, Space Force,
              Coast Guard, and Merchant Marines who served during WWII.
            </p>
            <p>
              For specific eligibility dates and requirements, please visit the{' '}
              <a
                href="https://www.legion.org/membership/eligibility"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Legion eligibility page
              </a>{' '}
              or contact our post directly at (814) 237-6880.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What is the history of Post 245?">
            <p className="mb-[20px]">
              Nittany American Legion Post 245, known as &quot;The Legion in the Woods,&quot;
              received its charter on October 19, 1919, with Theodore D. Boal as our first
              commander. We have been continuously serving veterans and the State College/Centre
              County community for over 100 years, celebrating our centennial in August 2019.
            </p>
            <p>
              Our location at 1950 Pine Hall Road is nestled in a beautiful wooded area, which
              inspired our nickname. The post operates as a community hub providing camaraderie,
              support, and great food to those who served and their families.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What is the mission of American Legion Post 245?">
            <p className="mb-[20px]">
              Our mission is rooted in the Four Pillars of the American Legion: Veterans Affairs &
              Rehabilitation, National Security, Americanism, and Children & Youth. We serve
              veterans, active military, and their families through mutual helpfulness and community
              service.
            </p>
            <p>
              Beyond our American Legion activities, we also operate a restaurant and bar that
              serves as a gathering place for members, their families, social members, and the
              public for lunch.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What programs and activities does Post 245 offer?">
            <p>We offer a wide range of programs including:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Veterans benefits assistance and advocacy</li>
              <li>Youth programs: Boys State, American Legion Baseball</li>
              <li>Scout Troop 245 sponsorship</li>
              <li>Auxiliary Unit 245 for family members</li>
              <li>S.A.L. (Sons of the American Legion) Squadron 245</li>
              <li>Legion Riders Chapter 245</li>
              <li>Community service and patriotic ceremonies</li>
              <li>Restaurant and bar with daily specials</li>
              <li>Social events: Music Bingo, Red Cross Blood Drives, and more</li>
            </ul>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="When does Post 245 meet?">
            <p>
              Post meetings are held regularly. For the current meeting schedule and upcoming
              events, please contact the post at{' '}
              <a href="tel:+18142376880" className="text-[#002D62] underline hover:text-[#BF0D3E]">
                (814) 237-6880
              </a>{' '}
              or visit our website at{' '}
              <a
                href="https://legioninthewoods.org"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
                target="_blank"
                rel="noopener noreferrer"
              >
                legioninthewoods.org
              </a>
              .
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Where is Post 245 located?">
            <p>
              American Legion Post 245 is located at:
              <br />
              <strong>1950 Pine Hall Road, State College, PA 16801</strong>
              <br />
              <br />
              Phone:{' '}
              <a href="tel:+18142376880" className="text-[#002D62] underline hover:text-[#BF0D3E]">
                (814) 237-6880
              </a>
              <br />
              Email:{' '}
              <a
                href="mailto:info@post245.com"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
              >
                info@post245.com
              </a>
              <br />
              <br />
              We&apos;re known as &quot;The Legion in the Woods&quot; due to our scenic wooded
              location in State College, Pennsylvania.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What are the restaurant hours?">
            <p className="mb-[20px]">
              The Legion in the Woods restaurant offers lunch to the public and various dining
              options for members and social members. Hours may vary, so please call ahead for
              current hours and daily specials.
            </p>
            <p>
              <strong>Sunday Hours:</strong> 1:00 PM - 10:00 PM
              <br />
              <strong>Weekday Take-Out:</strong> Available with parking lot pick-up upon request,
              11:00 AM - 8:00 PM
              <br />
              <br />
              Order by phone:{' '}
              <a href="tel:+18142376880" className="text-[#002D62] underline hover:text-[#BF0D3E]">
                (814) 237-6880
              </a>
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I support Post 245?">
            <p>There are many ways to support our post and its mission:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Become a member and actively participate in post activities</li>
              <li>Join as a social member to support the post and enjoy the facility</li>
              <li>Make a donation to support post operations and programs</li>
              <li>Sponsor youth programs or scholarships</li>
              <li>Volunteer for community service events</li>
              <li>Attend post meetings and special events</li>
              <li>Dine at our restaurant and support our operation</li>
            </ul>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Does the American Legion have a national organization?">
            <p>
              Yes, American Legion Post 245 is part of the national American Legion organization,
              which was founded in 1919 and is the nation&apos;s largest wartime veterans service
              organization. The American Legion has nearly 2 million members across more than 12,000
              posts worldwide.
              <br />
              <br />
              For more information about the national organization, visit{' '}
              <a
                href="https://www.legion.org"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.legion.org
              </a>
              .
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
