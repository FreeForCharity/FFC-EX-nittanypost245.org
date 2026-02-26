import { test, expect } from '@playwright/test'

/**
 * Newsletters Page Tests
 *
 * These tests verify the newsletters page structure and content:
 * 1. Newsletters page loads and displays correctly
 * 2. Newsletter download links are present and well-formed
 * 3. Navigation to the newsletters page works from the header
 */

test.describe('Newsletters Page', () => {
  test('should display the newsletters landing page', async ({ page }) => {
    await page.goto('/newsletters')

    // Verify heading
    await expect(page.getByRole('heading', { name: 'Newsletters', level: 1 })).toBeVisible()

    // Verify intro text
    await expect(page.locator('text=Stay up to date with news')).toBeVisible()

    // Verify the Mar–June 2026 newsletter entry is present
    await expect(page.locator('text=Post 245 Newsletter')).toBeVisible()
    await expect(page.locator('text=March – June 2026')).toBeVisible()
  })

  test('should have a working download link for the Mar–June 2026 newsletter', async ({ page }) => {
    await page.goto('/newsletters')

    const downloadLink = page.getByRole('link', {
      name: /Download or view.*March to June 2026.*PDF/i,
    })
    await expect(downloadLink).toBeVisible()

    const href = await downloadLink.getAttribute('href')
    expect(href).toContain('Newsletter.Mar.to.June.2026.pdf')
    expect(await downloadLink.getAttribute('target')).toBe('_blank')
    expect(await downloadLink.getAttribute('rel')).toContain('noopener')
  })

  test('should navigate to newsletters page from header', async ({ page }) => {
    await page.goto('/')

    await page.click('header a[href="/newsletters"]')

    await expect(page).toHaveURL('/newsletters')
    await expect(page.getByRole('heading', { name: 'Newsletters', level: 1 })).toBeVisible()
  })

  test('should have a contact link on the newsletters page', async ({ page }) => {
    await page.goto('/newsletters')

    const contactLink = page.getByRole('link', { name: /Contact Us/i })
    await expect(contactLink).toBeVisible()
    await expect(contactLink).toHaveAttribute('href', '/#contact')
  })

  test('should display correct page metadata', async ({ page }) => {
    await page.goto('/newsletters')

    await expect(page).toHaveTitle(/Newsletters/i)
  })
})
