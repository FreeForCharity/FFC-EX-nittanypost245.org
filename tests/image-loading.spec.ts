import { test, expect } from '@playwright/test'

/**
 * Image Loading Tests
 *
 * These tests verify that images load correctly when the site is built.
 * Simplified tests to be more reliable in CI environments.
 */

test.describe('Image Loading', () => {
  test('header logo should load and be visible', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the logo in header
    const headerLogo = page.locator('header a[href="/"] img').first()

    // Verify logo is visible (meaning it loaded successfully)
    await expect(headerLogo).toBeVisible()

    // Verify the header logo has a src attribute
    const headerSrc = await headerLogo.getAttribute('src')
    expect(headerSrc).toBeTruthy()
  })

  test('page should load without critical errors', async ({ page }) => {
    const errors: string[] = []

    // Listen for console errors
    page.on('pageerror', (error) => {
      errors.push(error.message)
    })

    // Navigate to the homepage
    await page.goto('/')

    // Wait for the page to be in a ready state
    await page.waitForLoadState('domcontentloaded')

    // Verify no critical errors occurred
    // Note: We allow warnings but not errors
    const criticalErrors = errors.filter(
      (err) => !err.includes('Warning') && !err.includes('ResizeObserver')
    )
    expect(criticalErrors).toHaveLength(0)
  })
})
