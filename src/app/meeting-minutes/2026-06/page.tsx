import type { Metadata } from 'next'
import { meetingMinutes } from '@/data/meetingMinutes'
import { assetPath } from '@/lib/assetPath'
import Link from 'next/link'

const entry = meetingMinutes.find((m) => m.slug === '2026-06')
if (!entry) {
  throw new Error('Meeting minutes entry for slug "2026-06" not found in meetingMinutes data.')
}
const pdfHref = assetPath(`/documents/${entry.pdfFilename}`)
const pdfAriaLabel = `Download ${entry.title} PDF`

export const metadata: Metadata = {
  title: 'Post Meeting Minutes – June 2026',
  description:
    'Official minutes from the Nittany American Legion Post 245 stated meeting held June 18, 2026, State College, PA.',
}

export default function MeetingMinutesJune2026Page() {
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
              June 2026
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Post Meeting Minutes – June 2026
          </h1>
          <p className="text-[14px] text-[#999] font-[500]">
            Meeting held June 18, 2026 &bull; Completed by Larry Hess &bull; Approved by Commander
            D. J. Watkins
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
              <dd className="text-[28px] text-blue-600 font-[700]">7</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Members Present
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">7</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Total Attendance
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">14</dd>
            </div>
          </dl>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            <strong>Absent:</strong> Donald Shalum &bull; <strong>Excused:</strong> Phil Mowry
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
            Special Guests &amp; Prospective Members
          </h2>
          <p className="text-[15px] text-[#444] leading-[26px] font-[500]">
            No special guests reported. Two prospective new members attended the meeting:{' '}
            <strong>Brad McCurdy</strong> and <strong>James J. Dulis</strong>.
          </p>
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
              May 21, 2026 Post minutes were emailed — motion to accept by Mike Miltenberger,
              seconded by Arther Reede. <strong>Motion Carried.</strong>
            </li>
            <li>
              There was no PEC meeting this month due to scheduling conflicts with the Army
              Birthday, a fundraising event, and the Pocono 500.
            </li>
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
            Submitted by Finance Officer Chris Solo. Motion to accept by Chris Solo, seconded by
            Rich Seifert. <strong>Motion Carried.</strong> Subject to Audit.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Opening Balance
              </dt>
              <dd className="text-[20px] text-[#333] font-[700]">$15,762.57</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Checks Written
              </dt>
              <dd className="text-[20px] text-red-600 font-[700]">−$9,692.23</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Deposits
              </dt>
              <dd className="text-[20px] text-green-600 font-[700]">+$16,258.84</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 border-blue-600 border-2">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Balance as of June 18, 2026
              </dt>
              <dd className="text-[20px] text-blue-600 font-[700]">$22,324.18</dd>
            </div>
          </dl>
          <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-[14px]">
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Post Savings Account</dt>
              <dd className="text-[#333] font-[700]">$10,112.17</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Adjutant Account</dt>
              <dd className="text-[#333] font-[700]">$6,850.47</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Building &amp; Grounds Account</dt>
              <dd className="text-[#333] font-[700]">No Report</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Community Service Account</dt>
              <dd className="text-[#333] font-[700]">$4,485.69</dd>
            </div>
            <div className="flex justify-between border-b border-gray-100 py-1">
              <dt className="text-[#666] font-[500]">Special Events Account</dt>
              <dd className="text-[#333] font-[700]">No Report</dd>
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
            Reported by Larry Hess. The 2026 final membership count is <strong>659</strong> — 20
            members short of the 100% goal.
          </p>
          <p className="mt-2 text-[14px] text-[#666] font-[500]">Class A: 659 &bull; Social: 147</p>
        </section>

        {/* Nominations & Elections */}
        <section aria-labelledby="nominations-heading" className="mb-8">
          <h2
            id="nominations-heading"
            className="text-[24px] text-[#333] font-[700] mb-4 pb-2 border-b-2 border-gray-200"
          >
            Nominations &amp; Elections
          </h2>
          <p className="text-[14px] text-[#666] font-[500] mb-3">
            Reported by Rich Seifert. Final 2027 nominations:
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
              <strong>Treasurer:</strong> Chris Solo
            </li>
            <li>
              <strong>Adjutant:</strong> Mitch DeLong
            </li>
          </ul>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            The election of D. J. Watkins, Dennis Clark, Rich Jackson, Chris Solo, and Mitch DeLong
            was held. With only one nominee per office, the Adjutant was directed to cast one vote —
            motion by Rich Seifert, seconded by Dennis Clark. <strong>Motion Carried.</strong>
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
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">SAL – Randy Weaver</h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The SAL is still doing the monthly gun raffle. The SAL and the Auxiliary will
                prepare the food for Healing Waters on July 11, 2026.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Auxiliary, Riders &amp; BSA
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">No report.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Events Committee – Tom Palchak
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">No report.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Fund Raising – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The BBQ was successful and raised <strong>$2,123.56</strong>. The rifle raffle
                (Silver Eagle) raised $1,160.00, and private donations were $3,000.00. A continuous
                raffle will be set next to the PA Lottery machine to help fund Veteran-related
                projects. Freedom Rising USA is donating funds and will pay for future free brunches
                to designated recipients.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Community Service – D.J. Watkins
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The July 4th parade is set with about 35 entries. Flags and giveaway items for the
                Scouts have been ordered. Volunteers are needed, including a truck (with driver) for
                the Honor Guard and parade marshals. The Oktoberfest meeting is Monday, June 22 at
                1800 hours.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Building &amp; Grounds – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Grass mowing and landscaping are going well; volunteers are needed for major
                landscaping projects. Repairs to the bar-area HVAC torn belt were completed, and 3
                urinals were repaired. Game room repairs and paint are on hold. The parking lot will
                be sealcoated July 12–13, 2026, and the club will be closed both days. Mitch is
                preparing a list of tasks/projects to complete during the sealcoating.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Honor Guard – Rich Jackson
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The Honor Guard performed 4 services for Memorial Day weekend and stood for one
                funeral last month.
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
                Legion in the Woods account balances: HA Operating – $10,587.31; SGOC – $25,362.92;
                PA Lottery – $685.00; Total – $36,600.23. The SGOC 60% transfer to Public Interest
                (Legion) for May was $9,189.30 (YTD $36,261.40). A PA Lottery machine was installed,
                and the Post received $2,000.00 from PA Lottery for monitor installation. The LITW
                By-Laws process was completed June 11, 2026; a special meeting was held but, with
                only 5 members in attendance, the board was unable to vote due to lack of a quorum.
                The club will be closed July 12–13 to seal the parking lot.
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
            New Members
          </h2>

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
                    name: 'Brandon J. Sosa',
                    served: 'Gulf War',
                    branch: 'USA',
                    date: '6-8',
                    sponsor: 'Jordon Myers',
                  },
                  {
                    name: 'Theresa L. Maher',
                    served: 'Gulf War',
                    branch: 'USA',
                    date: '6-11',
                    sponsor: 'DJ Watkins',
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
          <p className="text-[14px] text-[#666] font-[500]">
            Motion by Larry Hess, seconded by Mike Miltenberger.{' '}
            <strong>Motion Carried 14-0.</strong>
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
              <span>DJ will add new emails as they are received.</span>
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
                The election of D. J. Watkins, Dennis Clark, Rich Jackson, Chris Solo, and Mitch
                DeLong was held (one nominee per office; Adjutant cast one vote).{' '}
                <strong>Motion carried.</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                The Supreme Court ruled that Skill Machines are illegal, with a 120-day stay before
                any law-enforcement action. There is confusion around the decision; the Post is
                waiting for the dust to settle to determine a way forward.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                The By-County meeting was held June 17; the same members were reelected to serve for
                2026–2027.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                John Hosfeld and Rubert Turlip are running for State office. DJ Watkins will send
                out email and bios and ask members how he should vote at the State Convention — Post
                245 has 6 delegates to vote.
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
            DJ Watkins is putting together a list of charities to vote on for next year so the Post
            can coordinate giving with other Legion organizations for maximum impact in worthy
            causes that support the Legion&apos;s pillars. If you are in the Post home, please stand
            for the ringing of the Bell honoring those deployed on Friday nights and the playing of
            the national anthem at noon daily — and encourage others to do the same. Volunteers are
            needed for all Legion activities. An Oktoberfest meeting will be held Monday; volunteer
            availability will determine the size of Oktoberfest.
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
          <p className="text-[15px] text-[#444] font-[500]">
            John Coughlin, Don Bachman, Richard P. Wolf, and Daniel H. Holter.
          </p>
        </section>

        {/* Adjournment */}
        <div className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <p className="text-[15px] text-[#444] font-[500]">
            Meeting adjourned at <strong>7:54 PM</strong>. Respectfully submitted by{' '}
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
