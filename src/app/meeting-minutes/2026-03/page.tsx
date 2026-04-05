import type { Metadata } from 'next'
import { meetingMinutes } from '@/data/meetingMinutes'
import { assetPath } from '@/lib/assetPath'
import Link from 'next/link'

const entry = meetingMinutes.find((m) => m.slug === '2026-03')!
const pdfHref = assetPath(`/documents/${entry.pdfFilename}`)
const pdfAriaLabel = `Download ${entry.title} PDF`

export const metadata: Metadata = {
  title: 'Post Meeting Minutes – March 2026',
  description:
    'Official minutes from the Nittany American Legion Post 245 stated meeting held March 19, 2026, State College, PA.',
}

export default function MeetingMinutesMarch2026Page() {
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
              March 2026
            </li>
          </ol>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            Post Meeting Minutes – March 2026
          </h1>
          <p className="text-[14px] text-[#999] font-[500]">
            Meeting held March 19, 2026 &bull; Completed by Larry Hess &bull; Approved by Commander
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
              <dd className="text-[28px] text-blue-600 font-[700]">6</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Members Present
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">11</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Total Attendance
              </dt>
              <dd className="text-[28px] text-blue-600 font-[700]">17</dd>
            </div>
          </dl>
          <p className="mt-3 text-[14px] text-[#666] font-[500]">
            <strong>Absent:</strong> Donald Shalum &bull; <strong>Excused:</strong> Phil Mowry
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
          <p className="text-[15px] text-[#444] leading-[26px] font-[500]">
            Micheal Keller, nominee for the Elmer Haffer Camp, requested $250.00 to attend. Motion
            to support Micheal with $250.00 made by Don Hartzell, seconded by Rich Seifert.{' '}
            <strong>Motion carried.</strong>
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
              February 15, 2026 Post minutes were emailed and accepted — motion by Don Hartzell,
              seconded by Tom Palchak. <strong>Motion Carried.</strong>
            </li>
            <li>March 15, 2026 PEC minutes were distributed; no questions raised.</li>
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
              <dd className="text-[20px] text-[#333] font-[700]">$26,253.09</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Checks Written
              </dt>
              <dd className="text-[20px] text-red-600 font-[700]">−$6,581.81</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Deposits
              </dt>
              <dd className="text-[20px] text-green-600 font-[700]">+$12,676.80</dd>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 border-blue-600 border-2">
              <dt className="text-[13px] text-[#666] font-[500] uppercase tracking-wide mb-1">
                Balance as of March 19, 2026
              </dt>
              <dd className="text-[20px] text-blue-600 font-[700]">$32,348.08</dd>
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
            Reported by Larry Hess. Membership stands at <strong>641</strong> as of March 17, 2026 —{' '}
            <strong>94.4%</strong> of our goal of 679. Balance to goal: 38 members.
          </p>
          <p className="mt-2 text-[14px] text-[#666] font-[500]">Class A: 641 &bull; Social: 141</p>
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
                Nominations – Rich Seifert
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                No change in nominations to report.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Events Committee – Tom Palchak
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The Special Events Committee is working with the LITW on upcoming calendar events:
                trivia, mixed darts, Easter egg hunt, and Saint Pat&apos;s Day dance. Tom moved to
                dissolve the Special Events Committee as they are no longer planning events; no
                action taken at this time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Fund Raising – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The PA Lottery presented to the LITW on 3-11-26 regarding adding Keno, Horse Racing,
                and Lottery ticket machines. The Lottery would provide monitors and install internet
                at no cost; the LITW would receive 5% of sales. This would be a six-month trial. The
                HA board has already approved. Motion by Mitch DeLong to approve, seconded by Tom
                Palchak. <strong>Motion carried.</strong>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Community Service – D.J. Watkins
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                The essay contest awards and dinner went well. Post 245 will host a{' '}
                <strong>free brunch for Vietnam Veterans</strong> on <strong>March 29, 2026</strong>
                , 11:00 AM – 1:00 PM in honor of Vietnam Recognition Day.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Building &amp; Grounds – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Spring cleanup day is scheduled for <strong>April 18, 2026</strong>, 8:00 AM – 4:00
                PM. Budget of $3,742 approved for Spring cleanup — motion by Mitch DeLong, seconded
                by Don Hartzell. <strong>Motion carried.</strong>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Honor Guard – Rich Jackson
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                Honor Guard performed one funeral last month. The Honor Guard will stand for the
                Vietnam Veterans Brunch program. Rich is establishing a tax-free account with Flag
                and Emblem. Rich also reported that Post 245 is the only Legion that hosted the
                Essay Awards and banquet.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h3 className="text-[17px] text-[#333] font-[700] mb-2">
                Home Association – Mitch DeLong
              </h3>
              <p className="text-[14px] text-[#555] leading-[24px] font-[500]">
                See separate Building &amp; Grounds attachment for full notes.
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
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">Olivia Thornton</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">Global War</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">USA</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">2-17</td>
                  <td className="px-4 py-2 border border-gray-200 text-[#444]">Larry Hess</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[14px] text-[#666] font-[500] mb-6">
            Motion by Larry Hess, seconded by Don Hartzell. <strong>Motion Carried 17-0.</strong>
          </p>

          <h3 className="text-[18px] text-[#333] font-[700] mb-3">Transfers</h3>
          <div className="overflow-x-auto mb-3">
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
                    name: 'Robert J. Levitt',
                    served: 'Vietnam',
                    branch: 'USAF',
                    date: '2-23',
                    sponsor: 'Larry Hess',
                  },
                  {
                    name: 'Jacob D. Reddington',
                    served: 'Global War',
                    branch: 'USA',
                    date: '2-23',
                    sponsor: 'Larry Hess',
                  },
                  {
                    name: 'Dennis E. Johnsonbaugh',
                    served: 'Vietnam',
                    branch: 'USA',
                    date: '2-23',
                    sponsor: 'Larry Hess',
                  },
                  {
                    name: 'Louis A. Berrena',
                    served: 'Vietnam',
                    branch: 'USA',
                    date: '3-2',
                    sponsor: 'DJ Watkins',
                  },
                  {
                    name: 'Brian L. Doyon',
                    served: 'Lebanon/Granada',
                    branch: 'USN',
                    date: '3-3',
                    sponsor: 'Mitch DeLong',
                  },
                  {
                    name: 'James M. Stuhltrager',
                    served: 'Gulf War',
                    branch: 'USN',
                    date: '3-13',
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
          <p className="text-[14px] text-[#666] font-[500]">
            Motion by Larry Hess, seconded by Don Hartzell. <strong>Motion Carried 17-0.</strong>
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
                Chris Solo reported that new bank accounts have been set up for the Adjutant,
                Special Events, Building &amp; Grounds, and CSC. Debit cards were issued to all but
                CSC; $100 deposited in each account to start. Each committee will report monthly at
                the Post meeting.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Chuck Brickell asked about the mandated audit. Larry Hess reported that a forensic
                audit is too expensive and the State has not enforced it. The PEC will address the
                issue and set up yearly audits for the four groups within the Post.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                DJ Watkins reported that the Post website is set up along with the new email
                address: <strong>info@nittanypost245.org</strong>. The old email will have an
                automatic reply directing people to the new address starting in June.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Rich Jackson reported on the Bi-County meeting and noted that Post 245 is the only
                Legion that hosted the Essay Awards and banquet.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Shed extension: ~$12,000 in the Boy Scouts fund. The High School class will draw up
                a new plan dividing use between the Post and Boy Scouts; they will assemble it
                on-site after tearing down the old structure.
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
                Tom Palchak will host a booth at the Boy Scouts camporee and will distribute
                materials from local politicians.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Chuck Brickell is donating $2,000 toward the Over 80, Military, and Hardship member
                dues for 2027. There are currently 117 members at $34 each ($3,978 total). With the
                donation, the remaining balance is $1,978. Larry Hess moved that the Post fund the
                $1,288 shortfall (after applying $690 from Post funds); seconded by Don Hartzell.{' '}
                <strong>Motion carried.</strong> Larry will review the Military list to verify
                active-duty status.
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
          <ul className="space-y-2 text-[15px] text-[#444] leading-[26px] font-[500]">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>All members are asked to keep the Post and Club clean.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Every Friday night at 1800 hours, there will be a moment of silence for serving
                veterans and those who gave all, followed by ringing the bell of freedom.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
              <span>
                Communication matters. Please address questions directly to DJ rather than spreading
                rumors.
              </span>
            </li>
          </ul>
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
            <li>Bradley A. Fisher</li>
            <li>John Brickell</li>
          </ul>
        </section>

        {/* Adjournment */}
        <div className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-5">
          <p className="text-[15px] text-[#444] font-[500]">
            Meeting adjourned at <strong>8:30 PM</strong>. Respectfully submitted by{' '}
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
