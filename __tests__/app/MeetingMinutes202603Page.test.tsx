import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import MeetingMinutes202603Page from '../../src/app/meeting-minutes/2026-03/page'

expect.extend(toHaveNoViolations)

describe('MeetingMinutes202603Page', () => {
  it('should render the page heading', () => {
    render(<MeetingMinutes202603Page />)
    expect(
      screen.getByRole('heading', {
        name: /Minutes of Nittany American Legion Post 245/i,
        level: 1,
      })
    ).toBeInTheDocument()
  })

  it('should display the meeting date', () => {
    render(<MeetingMinutes202603Page />)
    expect(screen.getByText('March 19, 2026')).toBeInTheDocument()
  })

  it('should display download PDF links', () => {
    render(<MeetingMinutes202603Page />)
    const downloadLinks = screen.getAllByRole('link', {
      name: /Download March 2026 Post Meeting Minutes PDF/i,
    })
    expect(downloadLinks.length).toBeGreaterThanOrEqual(1)
    downloadLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', expect.stringContaining('post-meeting-minutes-202603'))
      expect(link).toHaveAttribute('download')
    })
  })

  it('should display finance report balance', () => {
    render(<MeetingMinutes202603Page />)
    expect(screen.getByText(/32,348\.08/)).toBeInTheDocument()
  })

  it('should display membership count', () => {
    render(<MeetingMinutes202603Page />)
    expect(screen.getByText(/641 as of March 17, 2026/i)).toBeInTheDocument()
  })

  it('should display new member Olivia Thornton', () => {
    render(<MeetingMinutes202603Page />)
    expect(screen.getByText('Olivia Thornton')).toBeInTheDocument()
  })

  it('should display memorial names', () => {
    render(<MeetingMinutes202603Page />)
    expect(screen.getByText(/Bradley A\. Fisher/)).toBeInTheDocument()
    expect(screen.getByText(/John Brickell/)).toBeInTheDocument()
  })

  it('should display adjournment time', () => {
    render(<MeetingMinutes202603Page />)
    expect(screen.getByText('8:30 PM')).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MeetingMinutes202603Page />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
