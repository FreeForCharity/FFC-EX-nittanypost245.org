export type PrimaryFundraiserKey = 'bbq' | 'fish-fry'

type FundraiserCta = {
  key: PrimaryFundraiserKey
  emoji: string
  heading: string
  description: string
  ctaLabel: string
  ctaAriaLabel: string
  href: string
  external: boolean
}

const FUNDRAISER_CTA: Record<PrimaryFundraiserKey, FundraiserCta> = {
  bbq: {
    key: 'bbq',
    emoji: '🍖',
    heading: 'Real Good BBQ',
    description: 'Get your tickets for our Real Good BBQ fundraiser!',
    ctaLabel: 'BBQ Ticket Sales',
    ctaAriaLabel: 'BBQ Ticket Sales (opens in a new tab)',
    href: 'https://www.zeffy.com/en-US/ticketing/reeeal-good-bbq',
    external: true,
  },
  'fish-fry': {
    key: 'fish-fry',
    emoji: '🐟',
    heading: 'Lent Friday Fish Fry',
    description: 'See seasonal dates and details for our Fish Fry (when scheduled).',
    ctaLabel: 'Fish Fry details',
    ctaAriaLabel: 'Fish Fry details (jump to the Lent Friday Fish Fry section)',
    href: '/fundraisers#fish-fry',
    external: false,
  },
}

export function getPrimaryFundraiserCta(): FundraiserCta {
  const envKey = process.env.NEXT_PUBLIC_PRIMARY_FUNDRAISER_CTA

  const key: PrimaryFundraiserKey = envKey === 'fish-fry' ? 'fish-fry' : 'bbq'

  return FUNDRAISER_CTA[key]
}
