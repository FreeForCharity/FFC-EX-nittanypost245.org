'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import { assetPath } from '@/lib/assetPath'
import ZeffyDonateButton from '@/components/donate/zeffy-donate-button'

interface SubMenuItem {
  label: string
  path: string
}

interface MenuItem {
  label: string
  path: string
  submenu?: SubMenuItem[]
}

const SCROLL_OFFSET = 100

const Header: React.FC = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const menuItems: MenuItem[] = useMemo(
    () => [
      { label: 'Home', path: '/#hero' },
      { label: 'About', path: '/#mission' },
      { label: 'Programs', path: '/#programs' },
      { label: 'Events', path: '/#events' },
      {
        label: 'Club Information',
        path: '/club-information',
        submenu: [
          { label: 'Club Overview', path: '/club-information' },
          { label: 'Officers', path: '/club-information/officers' },
          { label: 'Social Membership', path: '/club-information/social-membership' },
          { label: 'Lunch Specials', path: '/club-information/specials' },
          { label: 'Evening Specials', path: '/club-information/evening-specials' },
          { label: 'Events Calendar', path: '/club-information/events' },
          { label: 'Newsletters', path: '/club-information/newsletters' },
          { label: 'Menu', path: '/club-information/menu' },
          { label: 'Catering', path: '/club-information/catering' },
        ],
      },
      { label: 'Membership', path: '/membership' },
      { label: 'Contact', path: '/#contact' },
    ],
    []
  )

  const sections = useMemo(() => {
    const allPaths: string[] = []
    menuItems.forEach((item) => {
      const section = item.path.replace('/#', '')
      if (section !== 'hero') {
        allPaths.push(section)
      }
    })
    return allPaths
  }, [menuItems])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId)
            return
          }
        }
      }
      // If at the top, set home as active
      if (window.scrollY < SCROLL_OFFSET) {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScrollSpy)
    handleScrollSpy()

    return () => window.removeEventListener('scroll', handleScrollSpy)
  }, [sections])

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path: string) => {
    // Handle full page paths (like /membership or /club-information)
    if (!path.startsWith('/#')) {
      return pathname.startsWith(path)
    }
    // Handle hash links (sections on homepage)
    const sectionId = path.replace('/#', '')
    if (sectionId === 'hero') return activeSection === ''
    return activeSection === sectionId
  }

  const isDropdownActive = (item: MenuItem) => {
    if (item.submenu) {
      return item.submenu.some((subItem) => pathname.startsWith(subItem.path))
    }
    return false
  }

  return (
    <header
      id="header"
      className={`w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'h-[55px]' : 'h-[80px]'
      }`}
    >
      <div className="w-full">
        <div className="mx-auto max-w-[1080px]">
          <div className="flex items-center px-2 transition-all duration-300">
            {/* Logo */}
            <div
              className={`transition-all duration-300 ${isScrolled ? 'w-[160px]' : 'w-[220px]'}`}
            >
              <Link href="/" onClick={handleLinkClick} className="block">
                <img
                  src={assetPath('/american-legion-emblem.png')}
                  alt="American Legion Post 245"
                  className={`w-auto object-contain transition-all duration-300 ${
                    isScrolled ? 'h-10' : 'h-14'
                  }`}
                />
              </Link>
            </div>

            {/* Menu */}
            <div className="flex items-center justify-end sm:pl-[50px] md:pl-[70px] w-full">
              {/* Desktop Menu */}
              <nav className="hidden lg:block transition-all duration-300">
                <ul className="flex items-center space-x-[1px] font-navbar font-[600]">
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="relative py-6"
                      onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                      onMouseLeave={() => item.submenu && setOpenDropdown(null)}
                    >
                      {item.submenu ? (
                        <>
                          <button
                            className={`flex items-center px-3 py-2 text-[14px] transition-colors duration-200 ${
                              isDropdownActive(item)
                                ? 'text-blue-600'
                                : 'text-gray-600 hover:text-gray-500'
                            }`}
                          >
                            {item.label}
                            <svg
                              className="w-4 h-4 ml-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {openDropdown === item.label && (
                            <div className="absolute left-0 top-full mt-0 bg-white shadow-lg rounded-md py-2 min-w-[220px] z-50">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.path}
                                  onClick={handleLinkClick}
                                  className={`block px-4 py-2 text-[14px] transition-colors duration-200 ${
                                    pathname === subItem.path
                                      ? 'bg-blue-50 text-blue-600'
                                      : 'text-gray-600 hover:bg-gray-100'
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          href={item.path}
                          onClick={handleLinkClick}
                          className={`flex items-center px-3 py-2 text-[14px] transition-colors duration-200 ${
                            isActive(item.path)
                              ? 'text-blue-600'
                              : 'text-gray-600 hover:text-gray-500'
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Donate Button (replaces search icon) */}
              <div className="hidden lg:flex items-center">
                <ZeffyDonateButton className="px-3 py-2 text-[14px] font-navbar font-[600] text-gray-600 hover:text-blue-600 transition-colors" />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMobileMenuOpen ? (
                  <RxCross2 className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`lg:hidden absolute left-0 w-full overflow-hidden z-40 ${
              isScrolled ? 'top-[53px]' : 'top-[77px]'
            }`}
          >
            <div
              className={`max-w-[700px] mx-auto px-6 py-4 bg-white border-t-[3px] border-[#2EA3F2] shadow-[0_2px_5px_rgba(0,0,0,0.1)] max-h-[80vh] overflow-auto`}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === item.label ? null : item.label)
                          }
                          className={`w-full flex items-center justify-between px-4 py-2 rounded-lg text-sm font-[600] ${
                            isDropdownActive(item)
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openDropdown === item.label && (
                          <ul className="mt-2 ml-4 space-y-1">
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.path}
                                  onClick={handleLinkClick}
                                  className={`block px-4 py-2 rounded-lg text-sm ${
                                    pathname === subItem.path
                                      ? 'bg-blue-50 text-blue-600 font-[600]'
                                      : 'text-gray-600 hover:bg-gray-100 font-[500]'
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        onClick={handleLinkClick}
                        className={`block px-4 py-2 rounded-lg text-sm font-[600] ${
                          isActive(item.path)
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
