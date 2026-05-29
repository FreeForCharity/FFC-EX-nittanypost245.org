import type { Metadata } from 'next'
import { meetingMinutes } from '@/data/meetingMinutes'
import { assetPath } from '@/lib/assetPath'
import Link from 'next/link'

const entry = meetingMinutes.find((m) => m.slug === '2026-05')
if (!entry) {
  throw new Error('Meeting minutes entry for slug "2026-05" not found in meetingMinutes data.')
}
const pdfHref = assetPath(`/documents/${entry.pdfFilename}`)
const pdfAriaLabel = `Download ${entry.title} PDF`

export const metadata: Metadata = {
  title: 'Post Meeting Minutes – May 2026',
  description:
    'Official minutes from the Nittany American Legion Post 245 stated meeting held May 21, 2026, State College, PA.',
}

export default function MeetingMinutesMay2026Page() {
  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-[14px] text-[#666] font-[500]">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/meeting-minutes" className="hover:text-blue-600 transition-colors">
                Meeting Minutes
              </Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-[#333] font-[600]" aria-current="page">
              May 2026
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Post Meeting Minutes – May 2026
          </h1>
          <p className="text-[14px] text-[#999] font-[500]">
            Meeting held May 21, 2026 &bull; Completed by Larry Hess &bull; Approved by Commander D.
            J. Watkins
          </p>
        </div>

        {/* Download Banner */}
        <div className="mb-10 bg-blue-50 border-l-4 border-blue-600 p-5 rounded flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[15px] text-[#333] font-[500]">
            <span aria-hidden="true">📄</span> The official PDF minutes are available for download.
          </p>
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-[600] text-[14px] hover:bg-blue-700 transition-colors whitespace-nowrap"
            aria-label={pdfAriaLabel}
          >
            <span aria-hidden="true">⬇</span> Download PDF
          </a>
        </div>

        {/* Attendance Summary */}
        <section aria-labelledby="attendance-heading" className="mb-8">
          <h2
            id="attendance-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Attendance
          </h2>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Officers Present
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">4</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Members Present
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">9</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Total Attendance
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">13</dd>
            </div>
          </dl>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            <strong>Absent:</strong> Donald Sholom &bull; <strong>Excused:</strong> Phil Mowry,
            Chris Solo, Rich Jackson
          </p>
          <p className="mt-2 text-[14px] text-[#666] font-[500]">
            Meeting called to order at 7:00 PM at the Post Home, 1950 Pine Hall Rd., State College,
            PA, with Commander D. J. Watkins presiding.
          </p>
        </section>

        {/* Special Guests */}
        <section aria-labelledby="guests-heading" className="mb-8">
          <h2
            id="guests-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Special Guests
          </h2>
          <p className="text-[15px] text-[#444] leading-[26px] font-[500]">No report.</p>
        </section>

        {/* Minutes Approval */}
        <section aria-labelledby="minutes-heading" className="mb-8">
          <h2
            id="minutes-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Minutes Approval
          </h2>
          <ul className="space-y-2 text-[15px] text-[#444] leading-[26px] font-[500]">
            <li>
              April 16, 2026 Post minutes were emailed — motion to accept by Don Hartzell, seconded
              by Dennis Clark. <strong>Motion Carried.</strong>
            </li>
            <li>May 17, 2026 PEC minutes were handed out; no questions raised.</li>
          </ul>
        </section>

        {/* Finance Report */}
        <section aria-labelledby="finance-heading" className="mb-8">
          <h2
            id="finance-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Finance Report
          </h2>
          <p className="text-[14px] text-[#666] font-[500] mb-3">
            Submitted by Finance Officer Chris Solo. Motion to accept by Mitch DeLong, seconded by
            Mike Miltenberger. <strong>Motion Carried.</strong> Subject to Audit.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Opening Balance
              </dt>
              <dd className="text-[20px] text-[#333] font-[700]">$28,217.62</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Checks Written
              </dt>
              <dd className="text-[20px] text-red-600 font-[700]">−$22,523.05</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Deposits
              </dt>
              <dd className="text-[20px] text-green-600 font-[700]">+$10,068.00</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 border-blue-600 border-2">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Balance as of May 21, 2026
              </dt>
              <dd className="text-[20px] text-blue-600 font-[700]">$15,762.57</dd>
            </div>
          </dl>
          <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]">
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Post Savings Account</dt>
              <dd className="text-[#333] font-[700]">$10,112.17</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Building &amp; Grounds Account</dt>
              <dd className="text-[#333] font-[700]">$6,120.12</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Adjutant Account</dt>
              <dd className="text-[#333] font-[700]">$7,737.05</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Community Service Account</dt>
              <dd className="text-[#333] font-[700]">$5,100.00</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Special Events Account</dt>
              <dd className="text-[#333] font-[700]">$2,600.00</dd>
            </div>
          </dl>
        </section>

        {/* Membership */}
        <section aria-labelledby="membership-heading" className="mb-8">
          <h2
            id="membership-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Membership Report
          </h2>
          <p className="text-[15px] text-[#444] leading-[26px] font-[500]">
            Reported by Larry Hess. Membership stands at <strong>655</strong> as of May 21, 2026 —
            balance to reach the 100% goal is 24 members.
          </p>
          <p className="mt-2 text-[14px] text-[#666] font-[500]">Class A: 655 &bull; Social: 145</p>
        </section>

        {/* Nominations */}
        <section aria-labelledby="nominations-heading" className="mb-8">
          <h2
            id="nominations-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Nominations
          </h2>
          <p className="text-[14px] text-[#666] font-[500] mb-3">
            Reported by Rich Seifert. May nominations for 2027:
          </p>
          <ul className="space-y-2 text-[15px] text-[#444] leading-[26px] font-[500]">
            <li>
              <strong>Commander:</strong> D. J. Watkins
            </li>
            <li>
              <strong>1st Vice Commander:</strong> Dennis Clark
            </li>
            <li>
              <strong>2nd Vice Commander:</strong> Rich Jackson
            </li>
            <li>
              <strong>Adjutant:</strong> Mitch DeLong
            </li>
            <li>
              <strong>Treasurer:</strong> Chris Solo
            </li>
          </ul>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            Nominations are now closed; the election will be held at the Post June 18, 2026 meeting
            at 7:00 PM. Don Hartzell and Tom Hammond will be elected to serve as At-Large PEC
            members from 2027–2029.
          </p>
        </section>

        {/* Committee Reports */}
        <section aria-labelledby="committees-heading" className="mb-8">
          <h2
            id="committees-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Committee Reports
          </h2>
          <div className="space-y-5">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                SAL, Auxiliary, Riders &amp; BSA
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">No report.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Events Committee – Tom Palchak
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                No report from Tom Palchak. D. J. Watkins announced the annual picnic will be held
                August 8, 2026. Food will be hot dogs and burgers with sides — no cost for the food,
                with a cash bar. Watch for picnic times posted later.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Fund Raising – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The Fund-Raising Committee is identifying Veteran and Veteran-family related
                events/activities Post 245 can sponsor, creating fundraisers to support them, and
                posting a fundraising thermometer to track progress. Examples include Mother&apos;s
                Day, Father&apos;s Day, Vietnam Veteran&apos;s Day, Korean War Veteran&apos;s Day,
                Gold Star Families, Blue Star Families, and shut-ins. See the full report attached
                to the official PDF.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Community Service – D.J. Watkins
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Monthly Bingo at Hollidaysburg is canceled for now due to a lack of volunteers. The
                Mother&apos;s Day Brunch served 62. Upcoming events include Memorial Day at Shiloh
                Church and Pine Hall Cemetery, a D-Day Barbecue, possible Flag Day Ceremonies, the
                Father&apos;s Day Brunch (June 21), the Independence Day Parade, the Korean War
                Veteran&apos;s Brunch (July 26), the Gold Star Mother&apos;s Day Brunch (September
                27), Oktoberfest (October 23–24), and Veterans Day ceremonies and dinner. Larry was
                asked to order two flower baskets for Memorial Day ceremonies. See the full report
                attached to the official PDF.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">Celebrating America</h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Position vacant — no report.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Building &amp; Grounds – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                First mowing of the newly seeded bank is complete and turned out nice — thanks to
                the Spring cleaning work force. Quotes were gathered for replacement bar stools and
                table tops (low bid Webstaurant Store) and for sealing/lining the parking lot (low
                bid West End Sealing, $5,451.05). See the full report attached to the official PDF.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Honor Guard – Rich Jackson (reported by Dennis Clark)
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The Honor Guard stood one funeral last month.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Service Officer &amp; Chaplain
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                No report (Chaplain position vacant).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Home Association – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Legion in the Woods financial report for April 2026 (4/30/2026 balances): HA
                Operating – $7,258.07; SGOC – $27,353.46; PA Lottery – $85.00; Total – $34,696.53.
                SGOC 60% transfer to Public Interest (Legion) YTD is $27,072.10. Skills Games debt
                is now $50,119.13. See the full report attached to the official PDF.
              </p>
            </div>
          </div>
        </section>

        {/* New Members */}
        <section aria-labelledby="new-members-heading" className="mb-8">
          <h2
            id="new-members-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            New Members &amp; Transfers
          </h2>

          <h3 className="text-[18px] text-[#333] font-[700] mb-3">New Members</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[14px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">Name</th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Served
                  </th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Branch
                  </th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Date App.
                  </th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Sponsor
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: 'Jamie L. Eberle',
                    served: 'Global War',
                    branch: 'USAF',
                    date: '4-18',
                    sponsor: 'Richie Campbell',
                  },
                  {
                    name: 'Matthew J. Heckman',
                    served: 'Global War',
                    branch: 'USAF',
                    date: '4-24',
                    sponsor: 'Larry Hess',
                  },
                  {
                    name: 'James J. Dulis',
                    served: 'Global War',
                    branch: 'USAF',
                    date: '5-14',
                    sponsor: 'Larry Hess',
                  },
                ].map((member) => (
                  <tr key={member.name} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border border-gray-200 text-[#444]">{member.name}</td>
                    <td className="px-4 py-2 border border-gray-200 text-[#444]">
                      {member.served}
                    </td>
                    <td className="px-4 py-2 border border-gray-200 text-[#444]">
                      {member.branch}
                    </td>
                    <td className="px-4 py-2 border border-gray-200 text-[#444]">{member.date}</td>
                    <td className="px-4 py-2 border border-gray-200 text-[#444]">
                      {member.sponsor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-[#666] font-[500] mb-6">
            Motion by Larry Hess, seconded by Dennis Clark. <strong>Motion Carried 13-0.</strong>
          </p>

          <h3 className="text-[18px] text-[#333] font-[700] mb-3">Transfers</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-[14px] text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">Name</th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Served
                  </th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Branch
                  </th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Date App.
                  </th>
                  <th className="px-4 py-2 font-[700] text-[#333] border border-gray-200">
                    Sponsor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">David R. McElwee</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">Global War</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">USA</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">5-14</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">Larry Hess</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-[#666] font-[500]">
            Motion by Larry Hess, seconded by Mike Miltenberger.{' '}
            <strong>Motion Carried 13-0.</strong>
          </p>
        </section>

        {/* Old Business */}
        <section aria-labelledby="old-business-heading" className="mb-8">
          <h2
            id="old-business-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Old Business
          </h2>
          <ul className="space-y-3 text-[15px] text-[#444] leading-[26px] font-[500]">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Motion by Mitch DeLong, seconded by Don Hartzell, to buy stools for the outlying
                tables and new table tops to replace the cracked ones, not to exceed{' '}
                <strong>$4,000.00</strong> (covered by a $5,000.00 donation from Don Hartzell).
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Motion by Mitch DeLong, seconded by Don Hartzell, to resurface and line the parking
                lot at a cost of <strong>$5,451.05</strong>. <strong>Motion carried.</strong>{' '}
                Covered by a $3,000.00 donation from Chuck Brickell, $1,000.00 each from Lynn Corl
                and Lewis Watt, and the $1,000.00 left over from Don Hartzell&apos;s donation.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Motion by Mitch DeLong, seconded by Mike Miltenberger, to reimburse Rich Jackson{' '}
                <strong>$220.00</strong> for the hanging baskets at the front entrance.{' '}
                <strong>Motion carried.</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Several events are coming up — please refer to the newsletter and the signs in the
                club.
              </span>
            </li>
          </ul>
        </section>

        {/* New Business */}
        <section aria-labelledby="new-business-heading" className="mb-8">
          <h2
            id="new-business-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            New Business
          </h2>
          <ul className="space-y-3 text-[15px] text-[#444] leading-[26px] font-[500]">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Don Hartzell threw out the first pitch at the Penn State women&apos;s softball game
                — and threw a strike. Congratulations, Don!
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Larry Hess noted that Tom Palchak paid his PUFL dues in early May. Thank you, Tom.
                The Post now has <strong>94 PUFL members</strong> for 2026.
              </span>
            </li>
          </ul>
        </section>

        {/* Commander's Comments */}
        <section aria-labelledby="commanders-heading" className="mb-8">
          <h2
            id="commanders-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Commander&apos;s Comments
          </h2>
          <p className="text-[15px] text-[#444] leading-[26px] font-[500]">
            A folder for announcements and requests for donations is available in the back office —
            please feel free to read it. The Commander reminded everyone to honor our deployed,
            serving, served, missing, and those who gave their all at 1800 hrs each night with a
            moment of silence and the ringing of the Bell.
          </p>
        </section>

        {/* Post Comrade Memorials */}
        <section aria-labelledby="memorials-heading" className="mb-8">
          <h2
            id="memorials-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Post Comrade Memorials
          </h2>
          <p className="text-[15px] text-[#444] font-[500]">No report this month.</p>
        </section>

        {/* Adjournment */}
        <div className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <p className="text-[15px] text-[#444] font-[500]">
            Meeting adjourned at <strong>8:08 PM</strong>. Respectfully submitted by{' '}
            <strong>Larry Hess, Adjutant</strong>.
          </p>
        </div>

        {/* Download Footer */}
        <div className="text-center border-t-2 border-gray-200 pt-8">
          <p className="text-[15px] text-[#666] font-[500] mb-4">
            Download the official signed minutes for your records.
          </p>
          <a
            href={pdfHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-700 transition-colors"
            aria-label={pdfAriaLabel}
          >
            <span aria-hidden="true">⬇</span> Download Official PDF
          </a>
          <div className="mt-4">
            <Link
              href="/meeting-minutes"
              className="text-blue-600 hover:underline text-[14px] font-[500]"
            >
              ← Back to All Meeting Minutes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
