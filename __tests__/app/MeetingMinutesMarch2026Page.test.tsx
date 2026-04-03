import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import MeetingMinutesMarch2026Page from '../../src/app/meeting-minutes/2026-03/page'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('MeetingMinutesMarch2026Page', () => {
  it('should render the page heading', () => {
    render(<MeetingMinutesMarch2026Page />)
    expect(
      screen.getByRole('heading', { name: /Post Meeting Minutes.*March 2026/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('should display the meeting date and metadata', () => {
    render(<MeetingMinutesMarch2026Page />)
    expect(screen.getAllByText(/March 19, 2026/i).length).toBeGreaterThan(0)
  })

  it('should show the finance report section', () => {
    render(<MeetingMinutesMarch2026Page />)
    expect(screen.getByRole('heading', { name: /Finance Report/i })).toBeInTheDocument()
    expect(screen.getByText(/\$32,348\.08/)).toBeInTheDocument()
  })

  it('should show the membership report section', () => {
    render(<MeetingMinutesMarch2026Page />)
    expect(screen.getByRole('heading', { name: /Membership Report/i })).toBeInTheDocument()
    expect(screen.getAllByText(/641/).length).toBeGreaterThan(0)
  })

  it('should show the new members and transfers section', () => {
    render(<MeetingMinutesMarch2026Page />)
    expect(screen.getByRole('heading', { name: /New Members.*Transfers/i })).toBeInTheDocument()
    expect(screen.getByText('Olivia Thornton')).toBeInTheDocument()
  })

  it('should have a PDF download link', () => {
    render(<MeetingMinutesMarch2026Page />)
    const downloadLinks = screen.getAllByRole('link', {
      name: /Download.*March 2026.*Post Meeting Minutes.*PDF/i,
    })
    expect(downloadLinks.length).toBeGreaterThan(0)
    expect(downloadLinks[0]).toHaveAttribute(
      'href',
      expect.stringContaining('post-meeting-minutes-202603.pdf')
    )
    expect(downloadLinks[0]).toHaveAttribute('target', '_blank')
    expect(downloadLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a link back to all meeting minutes', () => {
    render(<MeetingMinutesMarch2026Page />)
    const backLink = screen.getByRole('link', { name: /Back to All Meeting Minutes/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/meeting-minutes')
  })

  it('should have breadcrumb navigation', () => {
    render(<MeetingMinutesMarch2026Page />)
    const breadcrumb = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumb).toBeInTheDocument()
  })

  it('should show post comrade memorials', () => {
    render(<MeetingMinutesMarch2026Page />)
    expect(screen.getByText('Bradley A. Fisher')).toBeInTheDocument()
    expect(screen.getByText('John Brickell')).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MeetingMinutesMarch2026Page />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
