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
    await page.goto('/newsletters', { waitUntil: 'domcontentloaded' })

    // Verify heading
    await expect(page.getByRole('heading', { name: 'Newsletters', level: 1 })).toBeVisible()

    // Verify intro text
    await expect(page.locator('text=Stay up to date with news')).toBeVisible()

    // Verify newsletter entries are present (newest first)
    await expect(
      page.getByRole('heading', { name: 'Post 245 Newsletter – July to October 2026' })
    ).toBeVisible()
    await expect(page.locator('text=July – October 2026')).toBeVisible()
    await expect(
      page.getByRole('heading', { name: 'Post 245 Newsletter – March to June 2026' })
    ).toBeVisible()
    await expect(page.locator('text=March – June 2026')).toBeVisible()

    // Verify ordering: newest newsletter is listed first
    const titles = page.getByRole('heading', { level: 2 })
    await expect(titles.first()).toHaveText('Post 245 Newsletter – July to October 2026')
    await expect(titles.nth(1)).toHaveText('Post 245 Newsletter – March to June 2026')
  })

  test('should have a working download link for the July–Oct 2026 newsletter', async ({ page }) => {
    await page.goto('/newsletters', { waitUntil: 'domcontentloaded' })

    const downloadLink = page.getByRole('link', {
      name: /Download or view.*July to October 2026.*PDF/i,
    })
    await expect(downloadLink).toBeVisible()

    const href = await downloadLink.getAttribute('href')
    expect(href).toContain('Newsletter.July.to.Oct.2026.pdf')
    expect(await downloadLink.getAttribute('target')).toBe('_blank')
    expect(await downloadLink.getAttribute('rel')).toContain('noopener')
  })

  test('should have a working download link for the Mar–June 2026 newsletter', async ({ page }) => {
    await page.goto('/newsletters', { waitUntil: 'domcontentloaded' })

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
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    await page.click('header a[href="/newsletters"]')

    await expect(page).toHaveURL('/newsletters')
    await expect(page.getByRole('heading', { name: 'Newsletters', level: 1 })).toBeVisible()
  })

  test('should have a contact link on the newsletters page', async ({ page }) => {
    await page.goto('/newsletters', { waitUntil: 'domcontentloaded' })

    const contactLink = page.getByRole('link', { name: /Contact Us/i })
    await expect(contactLink).toBeVisible()
    await expect(contactLink).toHaveAttribute('href', '/#contact')
  })

  test('should display correct page metadata', async ({ page }) => {
    await page.goto('/newsletters', { waitUntil: 'domcontentloaded' })

    await expect(page).toHaveTitle(/Newsletters/i)
  })
})
