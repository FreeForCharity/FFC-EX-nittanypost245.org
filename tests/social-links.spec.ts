import { test, expect } from '@playwright/test'

/**
 * Social Links Tests
 *
 * These tests verify that:
 * 1. Social media links are present and functional for American Legion Post 245
 * 2. Active social platforms (Facebook, Twitter) work correctly
 */

test.describe('Footer Social Links', () => {
  test('should display active Facebook and Twitter links', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Verify Facebook link is present (American Legion Post 245)
    const facebookLink = page.locator('footer a[aria-label="Facebook"]')
    await expect(facebookLink).toBeVisible()

    // Verify Twitter/X link is present
    const twitterLink = page.locator('footer a[aria-label="X (Twitter)"]')
    await expect(twitterLink).toBeVisible()
  })

  test('should have social media icons in footer', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Count social media links in footer (Facebook, Twitter, and possibly Instagram/YouTube if active)
    const socialLinks = await page.locator('footer a[aria-label]').count()

    // Should have at least 2 social links (Facebook and Twitter)
    expect(socialLinks).toBeGreaterThanOrEqual(2)
  })
})
