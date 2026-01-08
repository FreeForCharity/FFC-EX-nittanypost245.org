import { test, expect } from '@playwright/test'

/**
 * Copyright Notice Tests
 *
 * These tests verify that the copyright notice in the footer:
 * 1. Contains the copyright symbol (©)
 * 2. Displays the current year
 * 3. Renders the complete copyright text for American Legion Post 245
 */

test.describe('Footer Copyright Notice', () => {
  test('should display copyright notice with current year', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Get the current year
    const currentYear = new Date().getFullYear()

    // Find the footer paragraph containing the copyright text
    const footerText = page.locator('footer p:has-text("For God and Country")')

    // Verify the copyright notice is visible
    await expect(footerText).toBeVisible()

    // Verify it contains the copyright symbol and current year
    await expect(footerText).toContainText(`© ${currentYear}`)

    // Verify the complete copyright text mentions American Legion Post 245
    await expect(footerText).toContainText('American Legion Post 245')
    await expect(footerText).toContainText('For God and Country')
  })

  test('should display Nittany American Legion Post 245 branding', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Get the current year
    const currentYear = new Date().getFullYear()

    // Find the specific copyright paragraph at the bottom with copyright symbol
    const copyrightText = page.locator(`footer p:has-text("© ${currentYear}")`)

    // Verify the copyright text is visible
    await expect(copyrightText).toBeVisible()

    // Verify it contains the full organization name and motto
    await expect(copyrightText).toContainText('Nittany American Legion Post 245')
    await expect(copyrightText).toContainText('For God and Country')
  })
})
