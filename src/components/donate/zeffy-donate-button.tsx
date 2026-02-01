'use client'

import React from 'react'

const ZEFFY_FORM_LINK =
  'https://www.zeffy.com/embed/donation-form/general-american-legion-post-245-fund?modal=true'

type ZeffyDonateButtonProps = {
  className?: string
  children?: React.ReactNode
  ariaLabel?: string
  onClick?: () => void
}

export default function ZeffyDonateButton({
  className,
  children = 'Donate',
  ariaLabel = 'Donate',
  onClick,
}: ZeffyDonateButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      {...({
        'zeffy-form-link': ZEFFY_FORM_LINK,
      } as unknown as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
