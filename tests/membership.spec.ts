import { test, expect } from '@playwright/test'

/**
 * Membership Pages Tests
 *
 * These tests verify the membership page structure and navigation:
 * 1. Membership landing page loads and displays correctly
 * 2. All membership type subpages are accessible
 * 3. Navigation between membership pages works
 * 4. Links to membership pages work from header navigation
 */

test.describe('Membership Pages', () => {
  test('should display membership landing page', async ({ page }) => {
    // Navigate to membership page
    await page.goto('/membership')

    // Verify intro text (unique to membership landing page)
    await expect(page.locator('text=American Legion Post 245 welcomes')).toBeVisible()
    await expect(page.locator('text=Why Join Post 245?')).toBeVisible()

    // Verify all 5 membership type cards are present
    await expect(page.locator('text=Veteran Class A Membership')).toBeVisible()
    await expect(page.locator('text=Auxiliary Membership')).toBeVisible()
    await expect(page.locator('text=S.A.L. (Squadron 245) Membership')).toBeVisible()
    await expect(page.locator('text=Social Membership (Post 245 Inc.)')).toBeVisible()
    await expect(page.locator('text=American Legion Riders (Chapter 245)')).toBeVisible()
  })

  test('should navigate to membership page from header', async ({ page }) => {
    // Start at homepage
    await page.goto('/')

    // Click the Membership link in the header
    await page.click('header a[href="/membership"]')

    // Verify we're on the membership page by checking for unique content
    await expect(page).toHaveURL('/membership')
    await expect(page.locator('text=Why Join Post 245?')).toBeVisible()
  })

  test('should load Veteran Class A membership page', async ({ page }) => {
    await page.goto('/membership/veteran-class-a')

    // Verify unique page content
    await expect(page.locator('text=Eligibility Requirements')).toBeVisible()
    await expect(page.locator('text=Membership Benefits')).toBeVisible()
    await expect(page.locator('text=Ready to Join?')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', '/membership')
  })

  test('should load Auxiliary membership page', async ({ page }) => {
    await page.goto('/membership/auxiliary')

    // Verify unique page content
    await expect(page.locator('text=Eligibility Requirements')).toBeVisible()
    await expect(page.locator('text=Mission & Activities')).toBeVisible()
    await expect(page.locator('text=Join the Auxiliary')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should load S.A.L. Squadron 245 membership page', async ({ page }) => {
    await page.goto('/membership/squadron-245')

    // Verify unique page content
    await expect(page.locator('text=Sons of The American Legion')).toBeVisible()
    await expect(page.locator('text=Activities & Programs')).toBeVisible()
    await expect(page.locator('text=Join Squadron 245')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should load Social membership page', async ({ page }) => {
    await page.goto('/membership/post-245-inc')

    // Verify unique page content
    await expect(page.locator('text=About Social Membership')).toBeVisible()
    await expect(page.locator('text=Who Can Join')).toBeVisible()
    await expect(page.locator('text=Become a Social Member')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should load American Legion Riders page', async ({ page }) => {
    await page.goto('/membership/riders-chapter-245')

    // Verify unique page content
    await expect(page.locator('text=About American Legion Riders')).toBeVisible()
    await expect(page.locator('text=Activities & Events')).toBeVisible()
    await expect(page.locator('text=Ride with Chapter 245')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should navigate from landing page to subpages', async ({ page }) => {
    // Start at membership landing page
    await page.goto('/membership')

    // Wait for page to load
    await expect(page.locator('text=Why Join Post 245?')).toBeVisible()

    // Click on Veteran Class A card by finding the link
    await page.click('a[href="/membership/veteran-class-a"]')

    // Verify we're on the right page by checking for unique content
    await expect(page).toHaveURL('/membership/veteran-class-a')
    await expect(page.locator('text=Ready to Join?')).toBeVisible()

    // Go back to landing page
    await page.click('a:has-text("Back to Membership")')
    await expect(page).toHaveURL('/membership')
    await expect(page.locator('text=Why Join Post 245?')).toBeVisible()
  })

  test('should have contact links on all membership pages', async ({ page }) => {
    const pages = [
      '/membership',
      '/membership/veteran-class-a',
      '/membership/auxiliary',
      '/membership/squadron-245',
      '/membership/post-245-inc',
      '/membership/riders-chapter-245',
    ]

    for (const pagePath of pages) {
      await page.goto(pagePath)

      // Verify contact link is present
      const contactLink = page.locator('a[href*="contact"]')
      await expect(contactLink.first()).toBeVisible()
    }
  })

  test('should display metadata correctly', async ({ page }) => {
    await page.goto('/membership')

    // Verify page title includes membership
    await expect(page).toHaveTitle(/Membership/i)
  })
})
