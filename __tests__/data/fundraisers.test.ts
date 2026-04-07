import { getPrimaryFundraiserCta } from '@/data/fundraisers'

describe('getPrimaryFundraiserCta', () => {
  const originalEnvValue = process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA

  afterEach(() => {
    if (originalEnvValue === undefined) {
      delete process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA
    } else {
      process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA = originalEnvValue
    }
  })

  test('defaults to BBQ when env var is unset', () => {
    delete process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA
    expect(getPrimaryFundraiserCta().key).toBe('bbq')
  })

  test('returns Fish Fry when env var is fish-fry', () => {
    process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA = 'fish-fry'
    expect(getPrimaryFundraiserCta().key).toBe('fish-fry')
  })

  test('falls back to BBQ for unknown env var values', () => {
    process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA = 'something-else'
    expect(getPrimaryFundraiserCta().key).toBe('bbq')
  })
})
