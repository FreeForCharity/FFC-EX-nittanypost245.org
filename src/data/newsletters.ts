export interface Newsletter {
  title: string
  filename: string
  period: string
  publishedDate: string
}

export const newsletters: Newsletter[] = [
  {
    title: 'Post 245 Newsletter – July to October 2026',
    filename: 'Newsletter.July.to.Oct.2026.pdf',
    period: 'July – October 2026',
    publishedDate: '2026-07-08',
  },
  {
    title: 'Post 245 Newsletter – March to June 2026',
    filename: 'Newsletter.Mar.to.June.2026.pdf',
    period: 'March – June 2026',
    publishedDate: '2026-03-01',
  },
]
