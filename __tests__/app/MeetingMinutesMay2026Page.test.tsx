import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import MeetingMinutesMay2026Page from '../../src/app/meeting-minutes/2026-05/page'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('MeetingMinutesMay2026Page', () => {
  it('should render the page heading', () => {
    render(<MeetingMinutesMay2026Page />)
    expect(
      screen.getByRole('heading', { name: /Post Meeting Minutes.*May 2026/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('should display the meeting date and metadata', () => {
    render(<MeetingMinutesMay2026Page />)
    expect(screen.getAllByText(/May 21, 2026/i).length).toBeGreaterThan(0)
  })

  it('should show the finance report section', () => {
    render(<MeetingMinutesMay2026Page />)
    expect(screen.getByRole('heading', { name: /Finance Report/i })).toBeInTheDocument()
    expect(screen.getByText(/\$15,762\.57/)).toBeInTheDocument()
  })

  it('should show the membership report section', () => {
    render(<MeetingMinutesMay2026Page />)
    expect(screen.getByRole('heading', { name: /Membership Report/i })).toBeInTheDocument()
    expect(screen.getAllByText(/655/).length).toBeGreaterThan(0)
  })

  it('should show the nominations section', () => {
    render(<MeetingMinutesMay2026Page />)
    expect(screen.getByRole('heading', { name: /Nominations/i })).toBeInTheDocument()
  })

  it('should show the new members and transfers section', () => {
    render(<MeetingMinutesMay2026Page />)
    expect(screen.getByRole('heading', { name: /New Members.*Transfers/i })).toBeInTheDocument()
    expect(screen.getByText('Jamie L. Eberle')).toBeInTheDocument()
    expect(screen.getByText('Matthew J. Heckman')).toBeInTheDocument()
    expect(screen.getByText('James J. Dulis')).toBeInTheDocument()
    expect(screen.getByText('David R. McElwee')).toBeInTheDocument()
  })

  it('should have a PDF download link', () => {
    render(<MeetingMinutesMay2026Page />)
    const downloadLinks = screen.getAllByRole('link', {
      name: /Download Post Meeting Minutes.*May 2026.*PDF/i,
    })
    expect(downloadLinks.length).toBeGreaterThan(0)
    expect(downloadLinks[0]).toHaveAttribute(
      'href',
      expect.stringContaining('post-meeting-minutes-202605.pdf')
    )
    expect(downloadLinks[0]).toHaveAttribute('target', '_blank')
    expect(downloadLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a link back to all meeting minutes', () => {
    render(<MeetingMinutesMay2026Page />)
    const backLink = screen.getByRole('link', { name: /Back to All Meeting Minutes/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/meeting-minutes')
  })

  it('should have breadcrumb navigation', () => {
    render(<MeetingMinutesMay2026Page />)
    const breadcrumb = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumb).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MeetingMinutesMay2026Page />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
