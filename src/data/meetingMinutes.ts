export interface MeetingMinutes {
  title: string
  slug: string
  date: string
  period: string
  pdfFilename: string
  publishedDate: string
}

export const meetingMinutes: MeetingMinutes[] = [
  {
    title: 'Post Meeting Minutes – March 2026',
    slug: '2026-03',
    date: 'March 19, 2026',
    period: 'March 2026',
    pdfFilename: 'post-meeting-minutes-202603.pdf',
    publishedDate: '2026-03-19',
  },
]
