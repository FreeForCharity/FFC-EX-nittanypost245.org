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

    // Verify the page title
    await expect(page.locator('h1')).toContainText('Membership')

    // Verify intro text
    await expect(page.locator('text=American Legion Post 245 welcomes')).toBeVisible()

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
    await page.click('header a:has-text("Membership")')

    // Verify we're on the membership page
    await expect(page).toHaveURL('/membership')
    await expect(page.locator('h1')).toContainText('Membership')
  })

  test('should load Veteran Class A membership page', async ({ page }) => {
    await page.goto('/membership/veteran-class-a')

    // Verify page content
    await expect(page.locator('h1')).toContainText('Veteran Class A Membership')
    await expect(page.locator('text=Eligibility Requirements')).toBeVisible()
    await expect(page.locator('text=Membership Benefits')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
    await expect(backLink).toHaveAttribute('href', '/membership')
  })

  test('should load Auxiliary membership page', async ({ page }) => {
    await page.goto('/membership/auxiliary')

    // Verify page content
    await expect(page.locator('h1')).toContainText('Auxiliary Membership')
    await expect(page.locator('text=Eligibility Requirements')).toBeVisible()
    await expect(page.locator('text=Mission & Activities')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should load S.A.L. Squadron 245 membership page', async ({ page }) => {
    await page.goto('/membership/squadron-245')

    // Verify page content
    await expect(page.locator('h1')).toContainText('S.A.L. Squadron 245 Membership')
    await expect(page.locator('text=Sons of The American Legion')).toBeVisible()
    await expect(page.locator('text=Activities & Programs')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should load Social membership page', async ({ page }) => {
    await page.goto('/membership/post-245-inc')

    // Verify page content
    await expect(page.locator('h1')).toContainText('Social Membership (Post 245 Inc.)')
    await expect(page.locator('text=About Social Membership')).toBeVisible()
    await expect(page.locator('text=Who Can Join')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should load American Legion Riders page', async ({ page }) => {
    await page.goto('/membership/riders-chapter-245')

    // Verify page content
    await expect(page.locator('h1')).toContainText('American Legion Riders (Chapter 245)')
    await expect(page.locator('text=About American Legion Riders')).toBeVisible()
    await expect(page.locator('text=Activities & Events')).toBeVisible()

    // Verify back link
    const backLink = page.locator('a:has-text("Back to Membership")')
    await expect(backLink).toBeVisible()
  })

  test('should navigate from landing page to subpages', async ({ page }) => {
    // Start at membership landing page
    await page.goto('/membership')

    // Click on Veteran Class A card
    await page.click('a:has-text("Veteran Class A Membership")')

    // Verify we're on the right page
    await expect(page).toHaveURL('/membership/veteran-class-a')
    await expect(page.locator('h1')).toContainText('Veteran Class A Membership')

    // Go back to landing page
    await page.click('a:has-text("Back to Membership")')
    await expect(page).toHaveURL('/membership')
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
      const contactLink = page.locator('a:has-text("Contact Us")')
      await expect(contactLink.first()).toBeVisible()
    }
  })

  test('should display metadata correctly', async ({ page }) => {
    await page.goto('/membership')

    // Verify page title includes membership
    await expect(page).toHaveTitle(/Membership.*American Legion Post 245/i)
  })
})
