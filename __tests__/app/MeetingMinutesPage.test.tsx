import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import MeetingMinutesPage from '../../src/app/meeting-minutes/page'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('MeetingMinutesPage', () => {
  it('should render the page heading', () => {
    render(<MeetingMinutesPage />)
    expect(screen.getByRole('heading', { name: 'Meeting Minutes', level: 1 })).toBeInTheDocument()
  })

  it('should display the introductory description', () => {
    render(<MeetingMinutesPage />)
    expect(screen.getByText(/Official minutes from American Legion Post 245/i)).toBeInTheDocument()
  })

  it('should display the March 2026 meeting minutes entry', () => {
    render(<MeetingMinutesPage />)
    expect(
      screen.getByRole('heading', { name: /Post Meeting Minutes.*March 2026/i })
    ).toBeInTheDocument()
  })

  it('should have a view minutes link for the March 2026 meeting minutes', () => {
    render(<MeetingMinutesPage />)
    const link = screen.getByRole('link', {
      name: /View.*March 2026.*online/i,
    })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', expect.stringContaining('/meeting-minutes/2026-03'))
  })

  it('should have a download link for the March 2026 meeting minutes', () => {
    render(<MeetingMinutesPage />)
    const link = screen.getByRole('link', {
      name: /Download.*March 2026.*PDF/i,
    })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', expect.stringContaining('post-meeting-minutes-202603.pdf'))
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a contact link', () => {
    render(<MeetingMinutesPage />)
    const contactLink = screen.getByRole('link', { name: /Contact Us/i })
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', expect.stringMatching(/#contact$/))
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<MeetingMinutesPage />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
