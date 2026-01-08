import type { Metadata } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import CookieConsent from './../components/cookie-consent'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import {
  openSans,
  lato,
  raleway,
  faustina,
  cantataOne,
  faunaOne,
  montserrat,
  cinzel,
} from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://legioninthewoods.org'),
  title: {
    default: 'Nittany American Legion Post 245 | Legion in the Woods',
    template: '%s | American Legion Post 245',
  },
  description:
    'Nittany American Legion Post 245 in State College, PA - The Legion in the Woods. Serving veterans, their families, and the Centre County community since 1919.',
  keywords: [
    'American Legion',
    'veterans',
    'Post 245',
    'State College',
    'Pennsylvania',
    'Legion in the Woods',
    'Nittany',
    'Centre County',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://legioninthewoods.org/',
    siteName: 'American Legion Post 245',
    title: 'Nittany American Legion Post 245 | Legion in the Woods',
    description:
      'Serving veterans, their families, and the Centre County community since 1919. The Legion in the Woods.',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'American Legion Post 245',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ALPost245',
    title: 'Nittany American Legion Post 245 | Legion in the Woods',
    description:
      'Serving veterans, their families, and the Centre County community since 1919. The Legion in the Woods.',
    images: ['/web-app-manifest-512x512.png'],
  },
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: '32x32' },
      { url: `${basePath}/icon.png`, type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: `${basePath}/apple-icon.png`, sizes: '180x180', type: 'image/png' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical LCP image */}
        <link
          rel="preload"
          as="image"
          href={`${basePath}/Images/figma-hero-img.webp`}
          fetchPriority="high"
        />

        <GoogleTagManager />
      </head>
      <body
        className={[
          'antialiased',
          openSans.variable,
          lato.variable,
          raleway.variable,
          faustina.variable,
          cantataOne.variable,
          faunaOne.variable,
          montserrat.variable,
          cinzel.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        {/* <PopupProvider> */}
        <Header />
        {children}
        <Footer />
        <CookieConsent />
        {/* <PopupsRootClient /> */}
        {/* </PopupProvider> */}
      </body>
    </html>
  )
}
