import { test, expect } from '@playwright/test'

/**
 * Events Section Tests (Simplified)
 *
 * These tests verify that:
 * 1. The Events section renders correctly on the homepage
 * 2. The section is accessible via the #events anchor
 * 3. The section has proper structure
 */

test.describe('Events Section', () => {
  test('should render the Events section on homepage', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Events section exists with correct ID
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Verify section heading is present
    const heading = eventsSection.locator('h1, h2').first()
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Events')
  })

  test('should be accessible via #events anchor link', async ({ page }) => {
    // Navigate directly to the events section via anchor
    await page.goto('/#events')

    // Wait for page to load
    await page.waitForLoadState('domcontentloaded')

    // Verify Events section is visible
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    // Section should be at least partially visible
    const boundingBox = await eventsSection.boundingBox()
    expect(boundingBox).toBeTruthy()
  })

  test('should have proper section structure', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    const eventsSection = page.locator('#events')

    // Verify section exists
    await expect(eventsSection).toBeVisible()

    // Verify section has content (heading or text)
    const hasContent = await eventsSection.locator('h1, h2, p').count()
    expect(hasContent).toBeGreaterThan(0)
  })

  test('should load on mobile viewport', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })

    // Navigate to the homepage
    await page.goto('/')

    // Scroll to Events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify Events section is visible on mobile
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()
  })
})
