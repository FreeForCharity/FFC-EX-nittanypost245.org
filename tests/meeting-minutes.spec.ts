import { test, expect } from '@playwright/test'

/**
 * Meeting Minutes Page Tests
 *
 * These tests verify the meeting minutes page structure and content:
 * 1. Meeting minutes page loads and displays correctly
 * 2. Meeting minutes download links are present and well-formed
 * 3. Navigation to the meeting minutes page works from the header
 */

test.describe('Meeting Minutes Page', () => {
  test('should display the meeting minutes landing page', async ({ page }) => {
    await page.goto('/meeting-minutes')

    // Verify heading
    await expect(page.getByRole('heading', { name: 'Meeting Minutes', level: 1 })).toBeVisible()

    // Verify intro text
    await expect(page.locator('text=Official minutes from American Legion Post 245')).toBeVisible()

    // Verify the March 2026 entry is present
    await expect(page.locator('text=Post Meeting Minutes')).toBeVisible()
    await expect(page.getByText('March 2026', { exact: true })).toBeVisible()
  })

  test('should have a working download link for the March 2026 meeting minutes', async ({
    page,
  }) => {
    await page.goto('/meeting-minutes')

    const downloadLink = page.getByRole('link', {
      name: /Download or view.*March 2026.*PDF/i,
    })
    await expect(downloadLink).toBeVisible()

    const href = await downloadLink.getAttribute('href')
    expect(href).toContain('post-meeting-minutes-202603.pdf')
    expect(await downloadLink.getAttribute('target')).toBe('_blank')
    expect(await downloadLink.getAttribute('rel')).toContain('noopener')
  })

  test('should navigate to meeting minutes page from header', async ({ page }) => {
    await page.goto('/')

    await page.click('header a[href="/meeting-minutes"]')

    await expect(page).toHaveURL('/meeting-minutes')
    await expect(page.getByRole('heading', { name: 'Meeting Minutes', level: 1 })).toBeVisible()
  })

  test('should have a contact link on the meeting minutes page', async ({ page }) => {
    await page.goto('/meeting-minutes')

    const contactLink = page.getByRole('link', { name: /Contact Us/i })
    await expect(contactLink).toBeVisible()
    await expect(contactLink).toHaveAttribute('href', '/#contact')
  })

  test('should display correct page metadata', async ({ page }) => {
    await page.goto('/meeting-minutes')

    await expect(page).toHaveTitle(/Meeting Minutes/i)
  })
})
