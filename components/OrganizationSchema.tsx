import { SITE } from '@/lib/site';

export default function OrganizationSchema() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: SITE.name,
    alternateName: ['DR Gives'],
    url: SITE.url,
    logo: `${SITE.url}/dr-gives-logo.png`,
    image: `${SITE.url}/og-image.jpg`,
    description: SITE.tagline,
    taxID: SITE.ein,
    nonprofitStatus: 'Nonprofit501c3',
    knowsAbout: [
      'Prevention education',
      'Data storytelling',
      'Peer workforce development',
      'Community partnerships',
      'Culturally responsive training',
      'Wellness and performance education',
      'Youth-focused digital prevention campaigns',
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Clark County, Nevada' },
      { '@type': 'State', name: 'Nevada' },
      { '@type': 'Country', name: 'United States' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Bianca D. McCall',
      honorificSuffix: 'LMFT',
      jobTitle: 'Founder and President',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'general inquiries',
        email: SITE.emails.general,
        telephone: SITE.phone,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'grant partnerships',
        email: SITE.emails.grants,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'media relations',
        email: SITE.emails.media,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'privacy',
        email: SITE.emails.privacy,
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'accessibility',
        email: SITE.emails.accessibility,
        availableLanguage: ['English'],
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
