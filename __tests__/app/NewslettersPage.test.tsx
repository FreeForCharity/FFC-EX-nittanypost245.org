import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import NewslettersPage from '../../src/app/newsletters/page'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('NewslettersPage', () => {
  it('should render the page heading', () => {
    render(<NewslettersPage />)
    expect(screen.getByRole('heading', { name: 'Newsletters', level: 1 })).toBeInTheDocument()
  })

  it('should display the introductory description', () => {
    render(<NewslettersPage />)
    expect(screen.getByText(/Stay up to date with news/i)).toBeInTheDocument()
  })

  it('should display the Mar–June 2026 newsletter entry', () => {
    render(<NewslettersPage />)
    expect(
      screen.getByRole('heading', { name: /Post 245 Newsletter.*March to June 2026/i })
    ).toBeInTheDocument()
  })

  it('should have a download link for the Mar–June 2026 newsletter', () => {
    render(<NewslettersPage />)
    const link = screen.getByRole('link', {
      name: /Download or view.*March to June 2026.*PDF/i,
    })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', expect.stringContaining('Newsletter.Mar.to.June.2026.pdf'))
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a contact link', () => {
    render(<NewslettersPage />)
    const contactLink = screen.getByRole('link', { name: /Contact Us/i })
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', '/#contact')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<NewslettersPage />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
