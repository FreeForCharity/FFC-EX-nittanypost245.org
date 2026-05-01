import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import MeetingMinutesApril2026Page from '../../src/app/meeting-minutes/2026-04/page'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('MeetingMinutesApril2026Page', () => {
  it('should render the page heading', () => {
    render(<MeetingMinutesApril2026Page />)
    expect(
      screen.getByRole('heading', { name: /Post Meeting Minutes.*April 2026/i, level: 1 })
    ).toBeInTheDocument()
  })

  it('should display the meeting date and metadata', () => {
    render(<MeetingMinutesApril2026Page />)
    expect(screen.getAllByText(/April 16, 2026/i).length).toBeGreaterThan(0)
  })

  it('should show the finance report section', () => {
    render(<MeetingMinutesApril2026Page />)
    expect(screen.getByRole('heading', { name: /Finance Report/i })).toBeInTheDocument()
    expect(screen.getByText(/\$28,217\.62/)).toBeInTheDocument()
  })

  it('should show the membership report section', () => {
    render(<MeetingMinutesApril2026Page />)
    expect(screen.getByRole('heading', { name: /Membership Report/i })).toBeInTheDocument()
    expect(screen.getAllByText(/643/).length).toBeGreaterThan(0)
  })

  it('should show the new members section', () => {
    render(<MeetingMinutesApril2026Page />)
    expect(screen.getByRole('heading', { name: /New Members.*Transfers/i })).toBeInTheDocument()
    expect(screen.getByText('William L. Tyson')).toBeInTheDocument()
    expect(screen.getByText('Jordan W. Myers')).toBeInTheDocument()
    expect(screen.getByText('Jonathon M. Berry')).toBeInTheDocument()
  })

  it('should have a PDF download link', () => {
    render(<MeetingMinutesApril2026Page />)
    const downloadLinks = screen.getAllByRole('link', {
      name: /Download Post Meeting Minutes.*April 2026.*PDF/i,
    })
    expect(downloadLinks.length).toBeGreaterThan(0)
    expect(downloadLinks[0]).toHaveAttribute(
      'href',
      expect.stringContaining('post-meeting-minutes-202604.pdf')
    )
    expect(downloadLinks[0]).toHaveAttribute('target', '_blank')
    expect(downloadLinks[0]).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a link back to all meeting minutes', () => {
    render(<MeetingMinutesApril2026Page />)
    const backLink = screen.getByRole('link', { name: /Back to All Meeting Minutes/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/meeting-minutes')
  })

  it('should have breadcrumb navigation', () => {
    render(<MeetingMinutesApril2026Page />)
    const breadcrumb = screen.getByRole('navigation', { name: /Breadcrumb/i })
    expect(breadcrumb).toBeInTheDocument()
  })

  it('should show post comrade memorials', () => {
    render(<MeetingMinutesApril2026Page />)
    expect(screen.getByText('Robert C. Kelly')).toBeInTheDocument()
    expect(screen.getByText('Edward R. Tressler')).toBeInTheDocument()
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MeetingMinutesApril2026Page />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
