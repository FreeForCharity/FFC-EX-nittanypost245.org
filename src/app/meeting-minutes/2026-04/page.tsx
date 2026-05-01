import type { Metadata } from 'next'
import { meetingMinutes } from '@/data/meetingMinutes'
import { assetPath } from '@/lib/assetPath'
import Link from 'next/link'

const entry = meetingMinutes.find((m) => m.slug === '2026-04')
if (!entry) {
  throw new Error('Meeting minutes entry for slug "2026-04" not found in meetingMinutes data.')
}
const pdfHref = assetPath(`/documents/${entry.pdfFilename}`)
const pdfAriaLabel = `Download ${entry.title} PDF`

export const metadata: Metadata = {
  title: 'Post Meeting Minutes – April 2026',
  description:
    'Official minutes from the Nittany American Legion Post 245 stated meeting held April 16, 2026, State College, PA.',
}

export default function MeetingMinutesApril2026Page() {
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
              April 2026
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Post Meeting Minutes – April 2026
          </h1>
          <p className="text-[14px] text-[#999] font-[500]">
            Meeting held April 16, 2026 &bull; Completed by Larry Hess &bull; Approved by Commander
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
              <dd className="text-[28px] text-blue-600 font-[700]">5</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Members Present
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">4</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Total Attendance
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">9</dd>
            </div>
          </dl>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            <strong>Absent:</strong> Donald Scalum &bull; <strong>Excused:</strong> Phil Mowry, Rich
            Jackson
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
              March 19, 2026 Post minutes were emailed — motion to accept by Dennis Clark, seconded
              by Arthur Reede. <strong>Motion Carried.</strong>
            </li>
            <li>April 12, 2026 PEC minutes were handed out; no questions raised.</li>
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
            Submitted by Finance Officer Chris Solo. <strong>Motion Carried.</strong> Subject to
            Audit.
          </p>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Opening Balance
              </dt>
              <dd className="text-[20px] text-[#333] font-[700]">$32,348.08</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Checks Written
              </dt>
              <dd className="text-[20px] text-red-600 font-[700]">−$17,951.66</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Deposits
              </dt>
              <dd className="text-[20px] text-green-600 font-[700]">+$13,821.20</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 border-blue-600 border-2">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Balance as of April 16, 2026
              </dt>
              <dd className="text-[20px] text-blue-600 font-[700]">$28,217.62</dd>
            </div>
          </dl>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            Post Savings Account Balance: <strong>$10,112.17</strong>
          </p>
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
            Reported by Larry Hess. Membership stands at <strong>643</strong> as of April 16, 2026 —
            balance to goal: 36 members. 100% renewal goal is 679. Larry also reviewed the over-80,
            Military, and Hardship list; revised count is now <strong>98 members</strong> (down from
            117 after removing 19 no longer on active duty). Total dues now $3,332.00; operating
            fund covers $2,690.00 leaving $642.00 needed.
          </p>
          <p className="mt-2 text-[14px] text-[#666] font-[500]">Class A: 643 &bull; Social: 142</p>
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
                The SAL will donate funds for the Vietnam and Korean dinners. They are also selling
                raffle tickets for the two Henrys hanging above the bar at $10.00 each. See signs at
                the Legion entrance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">Auxiliary – Rhonda Spear</h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Saturday, April 18th the Auxiliary will host a Sip &amp; Gab from 5 PM to 8 PM. The
                Tri-County meeting hosted by the Auxiliary went very well. Auxiliary bingo coming up
                soon.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">Riders – Scott Spear</h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The Riders are planning a ride; details not finalized. Region 4 Acting Director
                attended the April meeting. There is a 250th Anniversary ride starting in Pittsburgh
                for PA Riders. See Scott for details.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Nominations – Rich Seifert
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Nomination list has not changed. Rich will provide the list at the May meeting.
                Nominations will be closed at the May 21st meeting.
              </p>
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
                See the Fund-Raising Committee minutes attached to the official PDF.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Community Service – D.J. Watkins
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The Vietnam Veterans Brunch went very well. D.J. attended the ROTC awards on
                Tuesday, April 17th. Discussion about having Boy Scouts help with flags at Memorial
                Park.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Building &amp; Grounds – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                See the Building &amp; Grounds Committee minutes attached to the official PDF.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Honor Guard – Dennis Clark (reporting for Rich Jackson)
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Honor Guard stood three funerals last month.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Home Association – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                LITW financial report as of March 31, 2026: HA Operating – $20,312.05; SGOC –
                $28,157.52; Total – $48,469.57. SGOC YTD transfer (60% to Post): $20,794.60. On
                April 11th, LITW approved new draft by-laws for posting to membership pending review
                of the required audit process.
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
                    name: 'William L. Tyson',
                    served: 'Global War',
                    branch: 'USA',
                    date: '3-23-26',
                    sponsor: 'Larry Hess',
                  },
                  {
                    name: 'Jordan W. Myers',
                    served: 'Global War',
                    branch: 'USA',
                    date: '4-8-26',
                    sponsor: 'Larry Hess',
                  },
                  {
                    name: 'Jonathon M. Berry',
                    served: 'Global War',
                    branch: 'USA',
                    date: '4-5-26',
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
            Motion by Larry Hess, seconded by D.J. Watkins. <strong>Motion Carried 9-0.</strong>
          </p>

          <h3 className="text-[18px] text-[#333] font-[700] mb-3">Transfers</h3>
          <p className="text-[14px] text-[#666] font-[500]">No transfers.</p>
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
                Motion by Mitch DeLong, seconded by Dennis Clark to donate <strong>$200.00</strong>{' '}
                to support Ryan Larkin in the Memorial Adventure Race.{' '}
                <strong>Motion carried.</strong>
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
          <p className="text-[14px] text-[#666] font-[500] mb-3">
            Chris Solo presented new budget accounts for 2026. The following budgets were approved:
          </p>
          <ul className="space-y-3 text-[15px] text-[#444] leading-[26px] font-[500]">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Commander&apos;s budget: <strong>$8,057.60</strong> — motion by D.J. Watkins,
                seconded by Mitch DeLong. <strong>Motion carried.</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Community Service budget: <strong>$13,622.17</strong> — motion by Mitch DeLong,
                seconded by Chris Solo. <strong>Motion carried.</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Building &amp; Grounds budget: <strong>$5,625.00</strong> — motion by Larry Hess,
                seconded by Dennis Clark. <strong>Motion carried.</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Special Events budget: <strong>$2,500.00</strong> — motion by Tom Palchak, seconded
                by Larry Hess. <strong>Motion carried.</strong>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Adjutant&apos;s budget: <strong>$7,405.50</strong> — motion by Larry Hess, seconded
                by Tom Palchak. <strong>Motion carried.</strong>
              </span>
            </li>
          </ul>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            These budgets are for calendar year 2026. In November 2026, each budget will be reviewed
            and submitted to the PEC for approval. Final approval by the membership will be at the
            December 17, 2026 Post meeting for calendar year 2027.
          </p>
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
            D.J. Watkins announced that a folder of all correspondence will be in the office for
            review.
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
            We remember and honor our fallen comrades:
          </p>
          <ul className="mt-2 space-y-1 text-[15px] text-[#444] font-[600]">
            <li>Robert C. Kelly</li>
            <li>Edward R. Tressler</li>
          </ul>
        </section>

        {/* Adjournment */}
        <div className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <p className="text-[15px] text-[#444] font-[500]">
            Meeting adjourned at <strong>8:45 PM</strong>. Respectfully submitted by{' '}
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
