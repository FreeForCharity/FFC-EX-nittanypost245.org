import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import MeetingMinutesJune2026Page from '../../src/app/meeting-minutes/2026-06/page'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('MeetingMinutesJune2026Page', () => {
  it('should render the page heading', () => {
    render(<MeetingMinutesJune2026Page />)
    expect(
      screen.getByRole('heading', { name: /Post Meeting Minutes.*June 2026/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('should display the meeting date and metadata', () => {
    render(<MeetingMinutesJune2026Page />)
    expect(screen.getAllByText(/June 18, 2026/i).length).toBeGreaterThan(0)
  })

  it('should show the finance report section', () => {
    render(<MeetingMinutesJune2026Page />)
    expect(screen.getByRole('heading', { name: /Finance Report/i })).toBeInTheDocument()
    expect(screen.getByText(/\$22,324\.18/)).toBeInTheDocument()
  })

  it('should show the membership report section', () => {
    render(<MeetingMinutesJune2026Page />)
    expect(screen.getByRole('heading', { name: /Membership Report/i })).toBeInTheDocument()
    expect(screen.getAllByText(/659/).length).toBeGreaterThan(0)
  })

  it('should show the nominations and elections section', () => {
    render(<MeetingMinutesJune2026Page />)
    expect(screen.getByRole('heading', { name: /Nominations.*Elections/i })).toBeInTheDocument()
  })

  it('should show the new members section', () => {
    render(<MeetingMinutesJune2026Page />)
    expect(screen.getByRole('heading', { name: /New Members/i })).toBeInTheDocument()
    expect(screen.getByText('Brandon J. Sosa')).toBeInTheDocument()
    expect(screen.getByText('Theresa L. Maher')).toBeInTheDocument()
  })

  it('should have a PDF download link', () => {
    render(<MeetingMinutesJune2026Page />)
    const downloadLinks = screen.getAllByRole('link', {
      name: /Download Post Meeting Minutes.*June 2026.*PDF/i,
    })
    expect(downloadLinks.length).toBeGreaterThan(0)
    expect(downloadLinks[0]).toHaveAttribute(
      'href',
      expect.stringContaining('post-meeting-minutes-202606.pdf')
    )
    expect(downloadLinks[0]).toHaveAttribute('target', '_blank')
    expect(downloadLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a link back to all meeting minutes', () => {
    render(<MeetingMinutesJune2026Page />)
    const backLink = screen.getByRole('link', { name: /Back to All Meeting Minutes/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/meeting-minutes')
  })

  it('should have breadcrumb navigation', () => {
    render(<MeetingMinutesJune2026Page />)
    const breadcrumb = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumb).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MeetingMinutesJune2026Page />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
