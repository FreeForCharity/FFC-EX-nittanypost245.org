'use client'

import React from 'react'

const ZEFFY_BBQ_LINK = 'https://www.zeffy.com/en-US/ticketing/reeeal-good-bbq'

type ZeffyBbqButtonProps = {
  href?: string
  className?: string
  children?: React.ReactNode
  ariaLabel?: string
  onClick?: () => void
}

export default function ZeffyBbqButton({
  href,
  className,
  children = 'BBQ Ticket Sales',
  ariaLabel,
  onClick,
}: ZeffyBbqButtonProps) {
  return (
    <a
      href={href ?? ZEFFY_BBQ_LINK}
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
