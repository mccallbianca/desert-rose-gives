import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OrganizationSchema from '@/components/OrganizationSchema';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://desertrosegives.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Desert Rose Gives | Trauma-Informed Community Wellness & Grant-Funded Programs',
    template: '%s | Desert Rose Gives',
  },
  description:
    'Desert Rose Gives is a 501(c)(3) community wellness nonprofit led by licensed clinician and SAMHSA advisor Bianca D. McCall, LMFT. We deliver trauma-informed behavioral health, suicide prevention, and existential wellness programs to underserved communities through federal grants, volunteer operations, and evidence-based care.',
  keywords: [
    'nonprofit behavioral health',
    'trauma-informed community programs',
    'suicide prevention nonprofit',
    'SAMHSA-aligned wellness',
    'existential wellness',
    '501c3 mental health',
    'community wellness grants',
    'Bianca D. McCall, LMFT nonprofit',
    'Desert Rose Gives',
  ],
  authors: [{ name: 'Bianca D. McCall, LMFT' }],
  creator: 'Desert Rose Gives',
  publisher: 'Desert Rose Gives',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Desert Rose Gives',
    title: 'Desert Rose Gives | Trauma-Informed Community Wellness',
    description:
      '501(c)(3) community wellness nonprofit delivering trauma-informed behavioral health, suicide prevention, and existential wellness programs through federal grants and volunteer operations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Desert Rose Gives — Community Wellness Nonprofit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Desert Rose Gives',
    description:
      'Trauma-informed community wellness. Federal grants. Evidence-based behavioral health.',
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
  category: 'Nonprofit · Behavioral Health · Community Wellness',
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta name="theme-color" content="#050509" />
      </head>
      <body className="bg-ink-950 text-bone-50 font-sans antialiased">
        <OrganizationSchema />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-sky-400 focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded"
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
