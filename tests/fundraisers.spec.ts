import { test, expect } from '@playwright/test'

test.describe('Fundraisers Page', () => {
  test('should load and show both fundraiser sections', async ({ page }) => {
    await page.goto('/fundraisers', { waitUntil: 'domcontentloaded' })

    await expect(page.getByRole('heading', { name: 'Fundraisers' })).toBeVisible()

    await expect(page.getByRole('heading', { name: /Real Good BBQ/i })).toBeVisible()
    await expect(page.getByRole('heading', { name: /Lent Friday Fish Fry/i })).toBeVisible()
  })

  test('should include jump links to BBQ and Fish Fry sections', async ({ page }) => {
    await page.goto('/fundraisers', { waitUntil: 'domcontentloaded' })

    const bbqJumpLink = page.getByRole('link', { name: /Real Good BBQ/i })
    await expect(bbqJumpLink).toBeVisible()
    await expect(bbqJumpLink).toHaveAttribute('href', '#real-good-bbq')

    const fishFryJumpLink = page.getByRole('link', { name: /Fish Fry history/i })
    await expect(fishFryJumpLink).toBeVisible()
    await expect(fishFryJumpLink).toHaveAttribute('href', '#fish-fry')
  })

  test('should include BBQ Ticket Sales link to Zeffy', async ({ page }) => {
    await page.goto('/fundraisers', { waitUntil: 'domcontentloaded' })

    const bbqSection = page.locator('#real-good-bbq')
    await expect(bbqSection).toBeVisible()

    const bbqLink = bbqSection.getByRole('link', { name: /BBQ Ticket Sales/i })
    await expect(bbqLink).toBeVisible()
    await expect(bbqLink).toHaveAttribute(
      'href',
      'https://www.zeffy.com/en-US/ticketing/reeeal-good-bbq'
    )
    await expect(bbqLink).toHaveAttribute('target', '_blank')
  })
})
