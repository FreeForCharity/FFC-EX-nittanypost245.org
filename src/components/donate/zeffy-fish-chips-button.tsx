'use client'

import React from 'react'

const ZEFFY_FISH_CHIPS_LINK = 'https://www.zeffy.com/en-US/ticketing/lent-friday-fish-fry'

type ZeffyFishChipsButtonProps = {
  className?: string
  children?: React.ReactNode
  ariaLabel?: string
  onClick?: () => void
}

export default function ZeffyFishChipsButton({
  className,
  children = 'Order Fish & Chips',
  ariaLabel,
  onClick,
}: ZeffyFishChipsButtonProps) {
  return (
    <a
      href={ZEFFY_FISH_CHIPS_LINK}
      target="_blank"
      rel="noopener noreferrer"
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
