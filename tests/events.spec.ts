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
    await page.goto('/', { waitUntil: 'domcontentloaded' })

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
    await page.goto('/', { waitUntil: 'domcontentloaded' })

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
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    // Scroll to Events section
    await page.locator('#events').scrollIntoViewIfNeeded()

    // Verify Events section is visible on mobile
    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()
  })

  test('should have a primary fundraiser CTA with the correct link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    const bbqCtaLink = eventsSection.getByRole('link', { name: /BBQ Ticket Sales/i })
    const fishFryCtaLink = eventsSection.getByRole('link', { name: /Fish Fry details/i })

    await expect
      .poll(async () => (await bbqCtaLink.count()) + (await fishFryCtaLink.count()))
      .toBeGreaterThan(0)

    const bbqCount = await bbqCtaLink.count()
    const fishCount = await fishFryCtaLink.count()
    expect(bbqCount + fishCount).toBe(1)

    if (bbqCount === 1) {
      await expect(bbqCtaLink).toBeVisible()
      await expect(bbqCtaLink).toHaveAttribute(
        'href',
        'https://www.zeffy.com/en-US/ticketing/reeeal-good-bbq'
      )
      await expect(bbqCtaLink).toHaveAttribute('target', '_blank')
    } else {
      await expect(fishFryCtaLink).toBeVisible()
      await expect(fishFryCtaLink).toHaveAttribute('href', '/fundraisers#fish-fry')
    }
  })

  test('should link to the Fundraisers page for seasonal history', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const eventsSection = page.locator('#events')
    await expect(eventsSection).toBeVisible()

    const fundraisersLink = eventsSection.getByRole('link', {
      name: /See all fundraisers/i,
    })
    await expect(fundraisersLink).toBeVisible()
    await expect(fundraisersLink).toHaveAttribute('href', '/fundraisers')
  })
})
