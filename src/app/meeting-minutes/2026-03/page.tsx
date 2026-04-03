import type { Metadata } from 'next'
import { meetingMinutes202603 } from '@/data/meeting-minutes-202603'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'March 2026 Post Meeting Minutes',
  description:
    'Official meeting minutes of Nittany American Legion Post 245, Inc. for March 19, 2026. Department of Pennsylvania.',
}

export default function MeetingMinutes202603Page() {
  const minutes = meetingMinutes202603
  const pdfUrl = assetPath(`/documents/${minutes.pdfFilename}`)

  return (
    <div className="pt-[140px] pb-[54px]">
      <div className="py-[27px] w-[90%] md:w-[80%] max-w-[1080px] mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <p className="text-[13px] text-[#999] uppercase tracking-widest font-[600] mb-2">
            Meeting Minutes
          </p>
          <h1 className="text-[36px] md:text-[42px] text-[#333] pb-[10px] leading-[1.2em] font-[700]">
            {minutes.title}
          </h1>
          <p className="text-[16px] text-[#666] font-[500]">Department of Pennsylvania</p>
        </div>

        {/* Download Banner */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-[15px] text-[#333] font-[600]">
              📄 Download the official PDF copy of these minutes
            </p>
            <p className="text-[13px] text-[#666] mt-1">
              A signed, printable version is available for your records.
            </p>
          </div>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-[600] text-[14px] hover:bg-blue-700 transition-colors whitespace-nowrap"
            aria-label="Download March 2026 Post Meeting Minutes PDF"
          >
            <span aria-hidden="true">⬇</span> Download PDF
          </a>
        </div>

        {/* Meeting Info Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div>
            <p className="text-[11px] text-[#999] uppercase tracking-wider font-[600] mb-1">Date</p>
            <p className="text-[15px] text-[#333] font-[600]">{minutes.date}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#999] uppercase tracking-wider font-[600] mb-1">
              Completed By
            </p>
            <p className="text-[15px] text-[#333] font-[600]">{minutes.completedBy}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#999] uppercase tracking-wider font-[600] mb-1">
              Approved By
            </p>
            <p className="text-[15px] text-[#333] font-[600]">{minutes.approvedBy}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#999] uppercase tracking-wider font-[600] mb-1">
              Officers Present
            </p>
            <p className="text-[15px] text-[#333] font-[600]">{minutes.attendance.officers}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#999] uppercase tracking-wider font-[600] mb-1">
              Members Present
            </p>
            <p className="text-[15px] text-[#333] font-[600]">{minutes.attendance.members}</p>
          </div>
          <div>
            <p className="text-[11px] text-[#999] uppercase tracking-wider font-[600] mb-1">
              Total Attendance
            </p>
            <p className="text-[15px] text-[#333] font-[600]">{minutes.attendance.total}</p>
          </div>
        </div>

        {/* Meeting Sections */}
        <div className="space-y-8">
          {minutes.sections.map((section) => (
            <div key={section.heading} className="border-b border-gray-100 pb-6 last:border-b-0">
              <h2 className="text-[20px] text-[#333] font-[700] mb-3 uppercase tracking-wide">
                {section.heading}
              </h2>
              {section.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-[15px] text-[#555] leading-[26px] font-[400] mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* New Members & Transfers */}
        <div className="mt-10 border-b border-gray-100 pb-6">
          <h2 className="text-[20px] text-[#333] font-[700] mb-4 uppercase tracking-wide">
            New Members
          </h2>
          {/* New members (non-transfers) */}
          {minutes.newMembers.filter((m) => m.type === 'new').length > 0 && (
            <div className="mb-6">
              <h3 className="text-[15px] text-[#666] font-[600] mb-3 uppercase tracking-wider">
                New Members Accepted
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px] border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-[600] text-[#333]">Name</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Served</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Branch</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Date Applied</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Sponsor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {minutes.newMembers
                      .filter((m) => m.type === 'new')
                      .map((m) => (
                        <tr key={m.name} className="border-t border-gray-100">
                          <td className="p-3 text-[#555]">{m.name}</td>
                          <td className="p-3 text-[#555]">{m.served}</td>
                          <td className="p-3 text-[#555]">{m.branch}</td>
                          <td className="p-3 text-[#555]">{m.dateApplied}</td>
                          <td className="p-3 text-[#555]">{m.sponsor}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-[#666] mt-2 italic">
                Motion by Larry Hess to accept, seconded by Don Hartzell. Motion carried 17–0.
              </p>
            </div>
          )}

          {/* Transfers */}
          {minutes.newMembers.filter((m) => m.type === 'transfer').length > 0 && (
            <div>
              <h3 className="text-[15px] text-[#666] font-[600] mb-3 uppercase tracking-wider">
                Transfers Accepted
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[14px] border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left p-3 font-[600] text-[#333]">Name</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Served</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Branch</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Date Applied</th>
                      <th className="text-left p-3 font-[600] text-[#333]">Sponsor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {minutes.newMembers
                      .filter((m) => m.type === 'transfer')
                      .map((m) => (
                        <tr key={m.name} className="border-t border-gray-100">
                          <td className="p-3 text-[#555]">{m.name}</td>
                          <td className="p-3 text-[#555]">{m.served}</td>
                          <td className="p-3 text-[#555]">{m.branch}</td>
                          <td className="p-3 text-[#555]">{m.dateApplied}</td>
                          <td className="p-3 text-[#555]">{m.sponsor}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[13px] text-[#666] mt-2 italic">
                Motion by Larry Hess to accept, seconded by Don Hartzell. Motion carried 17–0.
              </p>
            </div>
          )}
        </div>

        {/* Memorials */}
        <div className="mt-8 border-b border-gray-100 pb-6">
          <h2 className="text-[20px] text-[#333] font-[700] mb-3 uppercase tracking-wide">
            Post Comrade Memorials
          </h2>
          <ul className="list-none space-y-1">
            {minutes.memorials.map((name) => (
              <li key={name} className="text-[15px] text-[#555] font-[400]">
                🕊 {name}
              </li>
            ))}
          </ul>
        </div>

        {/* Adjournment & Membership */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-[13px] text-[#999] uppercase tracking-wider font-[600] mb-1">
              Meeting Adjourned
            </p>
            <p className="text-[18px] text-[#333] font-[700]">{minutes.adjournedAt}</p>
            <p className="text-[13px] text-[#666] mt-2">
              Respectfully submitted by: {minutes.completedBy}, Adjutant
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
            <p className="text-[13px] text-[#999] uppercase tracking-wider font-[600] mb-2">
              Membership Totals
            </p>
            <p className="text-[15px] text-[#333] font-[500]">
              Class A: <span className="font-[700] text-blue-700">{minutes.membership.classA}</span>
            </p>
            <p className="text-[15px] text-[#333] font-[500] mt-1">
              Social: <span className="font-[700] text-blue-700">{minutes.membership.social}</span>
            </p>
          </div>
        </div>

        {/* Bottom download CTA */}
        <div className="mt-12 text-center border-t border-gray-100 pt-10">
          <p className="text-[16px] text-[#666] font-[500] mb-4">
            Want a copy of the official signed minutes?
          </p>
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-[600] hover:bg-blue-700 transition-colors"
            aria-label="Download March 2026 Post Meeting Minutes PDF"
          >
            <span aria-hidden="true">⬇</span> Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}
