'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/people/American-Legion-Post-245/100064092967036/',
      label: 'Facebook',
      active: true,
    },
    { icon: FaXTwitter, href: 'https://x.com/ALPost245', label: 'X (Twitter)', active: true },
    {
      icon: FaInstagram,
      href: '#',
      label: 'Instagram (Add URL)',
      active: false,
      note: 'Add Instagram profile URL',
    },
    {
      icon: FaYoutube,
      href: '#',
      label: 'YouTube (Add URL)',
      active: false,
      note: 'Add YouTube channel URL',
    },
  ]
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 px-4 md:px-6 lg:px-8">
        {/* Column 1: About Post */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">About Post 245</h3>

          <div className="space-y-4">
            <p className="text-[16px] font-[400]" id="lato-font">
              Nittany American Legion Post 245, known as &quot;The Legion in the Woods,&quot; serves
              veterans, active military, and their families in State College and Centre County,
              Pennsylvania.
            </p>

            <p className="text-[16px] font-[400]" id="lato-font">
              Chartered on October 19, 1919, with Theodore D. Boal as our first commander, we
              celebrated our 100th anniversary in 2019. Our post at 1950 Pine Hall Road is a
              historic gathering place providing camaraderie, support, and community service.
            </p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Quick Links</h3>

          <ul className="space-y-2 text-sm" id="lato-font">
            {[
              { name: 'Home', href: '/#hero' },
              { name: 'About', href: '/#mission' },
              { name: 'Programs', href: '/#programs' },
              { name: 'Events', href: '/#events' },
              { name: 'Membership', href: '/#membership' },
              { name: 'Contact', href: '/#contact' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  className="hover:text-[#F58C23] hover:tracking-widest transition-all text-[16px] font-[500]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="space-y-3">
            <h4 className="text-[28px] text-white">Post Resources</h4>
            <ul className="space-y-1 text-sm" id="lato-font">
              {[
                {
                  name: 'Privacy Policy',
                  href: '/privacy-policy',
                },
                {
                  name: 'Terms of Service',
                  href: '/terms-of-service',
                },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#BF0D3E] hover:tracking-widest transition-all text-[16px] font-[500]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 3: Contact Us */}
        <div className="space-y-6 px-4 sm:px-0">
          <h3 className="text-[28px] text-white">Contact Us</h3>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <Mail className="w-10 h-10 text-[#BF0D3E] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">E-mail</p>
                <a
                  href="mailto:info@post245.com"
                  className="font-[500] text-[15px] hover:text-[#FFD700] transition-colors break-all"
                  id="aria-font"
                >
                  info@post245.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-10 h-10 text-[#BF0D3E] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Call Us</p>
                <a
                  href="tel:+18142376880"
                  className="font-[500] text-[16px] hover:text-[#FFD700] transition-colors"
                  id="aria-font"
                >
                  (814) 237-6880
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=1950+Pine+Hall+Road+State+College+PA+16801"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open address in Google Maps"
              className="flex items-start gap-3 hover:opacity-80 transition-opacity"
            >
              <MapPin className="w-10 h-10 text-[#BF0D3E] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-[500] text-[22px]">Address</p>
                <p className="font-[500] text-[16px]" id="aria-font">
                  1950 Pine Hall Road
                  <br />
                  State College, PA 16801
                </p>
              </div>
            </a>

            <div className="space-y-2">
              <div className="flex gap-3 pt-4">
                {socialLinks.map(({ icon: Icon, href, label, active }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2 rounded-full transition-colors ${
                      active
                        ? 'bg-[#BF0D3E] hover:bg-[#FFD700] hover:text-[#002D62]'
                        : 'bg-gray-600 opacity-50 cursor-not-allowed'
                    }`}
                    onClick={!active ? (e) => e.preventDefault() : undefined}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
              <p className="text-[12px] text-gray-400 italic" id="lato-font">
                Note: Grayed icons are placeholders. Add Instagram/YouTube URLs to activate.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="mt-12 py-6 px-4 border-t border-gray-800 text-center text-[18px] font-[500] w-full"
        id="aria-font"
      >
        <p>© {currentYear} Nittany American Legion Post 245 | For God and Country</p>
      </div>
    </footer>
  )
}

export default Footer
