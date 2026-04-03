import { test, expect } from '@playwright/test'

/**
 * Meeting Minutes Page Tests
 *
 * These tests verify the meeting minutes pages structure and content:
 * 1. Meeting minutes index page loads and displays correctly
 * 2. March 2026 meeting minutes page loads with correct content
 * 3. PDF download links are present and well-formed
 * 4. Navigation between pages works correctly
 */

test.describe('Meeting Minutes Pages', () => {
  test('should display the meeting minutes landing page', async ({ page }) => {
    await page.goto('/meeting-minutes')

    // Verify heading
    await expect(page.getByRole('heading', { name: 'Meeting Minutes', level: 1 })).toBeVisible()

    // Verify intro text
    await expect(page.locator('text=Official minutes from American Legion Post 245')).toBeVisible()

    // Verify the March 2026 entry is present
    await expect(page.locator('text=Post Meeting Minutes – March 2026')).toBeVisible()
    await expect(page.locator('text=March 2026')).toBeVisible()
  })

  test('should have a "Read Online" link for March 2026 minutes', async ({ page }) => {
    await page.goto('/meeting-minutes')

    const readLink = page.getByRole('link', { name: /Read.*March 2026.*online/i })
    await expect(readLink).toBeVisible()
    await expect(readLink).toHaveAttribute('href', '/meeting-minutes/2026-03')
  })

  test('should have a PDF download link on the index page', async ({ page }) => {
    await page.goto('/meeting-minutes')

    const downloadLink = page.getByRole('link', { name: /Download.*March 2026.*PDF/i })
    await expect(downloadLink).toBeVisible()

    const href = await downloadLink.getAttribute('href')
    expect(href).toContain('post-meeting-minutes-202603.pdf')
    expect(await downloadLink.getAttribute('target')).toBe('_blank')
    expect(await downloadLink.getAttribute('rel')).toContain('noopener')
  })

  test('should display the March 2026 meeting minutes detail page', async ({ page }) => {
    await page.goto('/meeting-minutes/2026-03')

    // Verify heading
    await expect(
      page.getByRole('heading', { name: /Post Meeting Minutes.*March 2026/i, level: 1 })
    ).toBeVisible()

    // Verify key sections
    await expect(page.getByRole('heading', { name: 'Finance Report' })).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Membership Report' })).toBeVisible()
    await expect(page.getByRole('heading', { name: /New Members.*Transfers/i })).toBeVisible()
  })

  test('should have a PDF download link on the March 2026 detail page', async ({ page }) => {
    await page.goto('/meeting-minutes/2026-03')

    const downloadLinks = page.getByRole('link', {
      name: /Download.*March 2026.*Post Meeting Minutes.*PDF/i,
    })
    await expect(downloadLinks.first()).toBeVisible()

    const href = await downloadLinks.first().getAttribute('href')
    expect(href).toContain('post-meeting-minutes-202603.pdf')
    expect(await downloadLinks.first().getAttribute('target')).toBe('_blank')
    expect(await downloadLinks.first().getAttribute('rel')).toContain('noopener')
  })

  test('should navigate to meeting minutes page from header', async ({ page }) => {
    await page.goto('/')

    await page.click('header a[href="/meeting-minutes"]')

    await expect(page).toHaveURL('/meeting-minutes')
    await expect(page.getByRole('heading', { name: 'Meeting Minutes', level: 1 })).toBeVisible()
  })

  test('should navigate from index to detail page via Read Online link', async ({ page }) => {
    await page.goto('/meeting-minutes')

    await page.click('a[href="/meeting-minutes/2026-03"]')

    await expect(page).toHaveURL('/meeting-minutes/2026-03')
    await expect(
      page.getByRole('heading', { name: /Post Meeting Minutes.*March 2026/i, level: 1 })
    ).toBeVisible()
  })

  test('should have breadcrumb navigation on the detail page', async ({ page }) => {
    await page.goto('/meeting-minutes/2026-03')

    const breadcrumb = page.getByRole('navigation', { name: 'Breadcrumb' })
    await expect(breadcrumb).toBeVisible()

    await expect(breadcrumb.getByRole('link', { name: 'Home' })).toBeVisible()
    await expect(breadcrumb.getByRole('link', { name: 'Meeting Minutes' })).toBeVisible()
  })

  test('should have back link to all meeting minutes', async ({ page }) => {
    await page.goto('/meeting-minutes/2026-03')

    const backLink = page.getByRole('link', { name: /Back to All Meeting Minutes/i })
    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', '/meeting-minutes')
  })

  test('should display correct page title for the index page', async ({ page }) => {
    await page.goto('/meeting-minutes')
    await expect(page).toHaveTitle(/Meeting Minutes/i)
  })

  test('should display correct page title for the March 2026 detail page', async ({ page }) => {
    await page.goto('/meeting-minutes/2026-03')
    await expect(page).toHaveTitle(/March 2026/i)
  })
})
