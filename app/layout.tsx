import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrganizationSchema from '@/components/OrganizationSchema';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.desertrosegives.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Desert Rose Gives | Prevention, Healing, and Leadership in Southern Nevada',
    template: '%s | Desert Rose Gives',
  },
  description:
    'Desert Rose Gives is a Nevada 501(c)(3) nonprofit leading research-based prevention, data storytelling, cultural responsiveness, and community leadership in Southern Nevada.',
  keywords: [
    'Desert Rose Gives',
    'Nevada nonprofit',
    'Southern Nevada community',
    'prevention education',
    'community leadership',
    'peer workforce development',
    'data storytelling',
    'WellXcel',
    'Mind Over Media',
  ],
  authors: [{ name: 'Desert Rose Gives' }],
  creator: 'Desert Rose Gives',
  publisher: 'Desert Rose Gives',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Desert Rose Gives',
    title: 'Desert Rose Gives | Prevention, Healing, and Leadership',
    description:
      'A Nevada 501(c)(3) nonprofit building prevention, healing, and community leadership alongside Southern Nevada neighbors.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desert Rose Gives, a Nevada nonprofit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desert Rose Gives',
    description:
      'Prevention, healing, and community leadership, built with Southern Nevada.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: SITE_URL },
  category: 'Nonprofit',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#2D3192" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=Caveat&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dr-white text-dr-ink antialiased">
        <OrganizationSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-dr-royal focus:text-dr-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
