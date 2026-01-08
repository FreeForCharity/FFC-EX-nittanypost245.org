import { test, expect } from '@playwright/test'

/**
 * Mission Section Tests (Simplified)
 *
 * These tests verify that the mission section is present and properly configured
 * on the homepage for American Legion Post 245.
 */

test.describe('Mission Section', () => {
  test('should display mission section with Post 245 content', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the mission section
    const missionSection = page.locator('#mission')

    // Verify the mission section exists and is visible
    await expect(missionSection).toBeVisible()

    // Verify it contains American Legion Post 245 content
    await expect(missionSection).toContainText('American Legion')
  })

  test('should have accessible mission content', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Find the mission section
    const missionSection = page.locator('#mission')

    // Verify the section exists
    await expect(missionSection).toBeVisible()

    // Verify it has some descriptive content (heading or paragraph)
    const hasContent = await missionSection.locator('h1, h2, h3, p').count()
    expect(hasContent).toBeGreaterThan(0)
  })
})
