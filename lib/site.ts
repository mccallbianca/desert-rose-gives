export const SITE = {
  name: 'Desert Rose Gives',
  legalName: 'Desert Rose Gives, a Nevada nonprofit corporation',
  ein: '85-2257152',
  entityStatus: '501(c)(3) nonprofit corporation',
  tagline:
    'Desert Rose Gives is a Nevada nonprofit leading in research-based prevention, data storytelling, cultural responsiveness, and leadership in partnership with lived experience.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.desertrosegives.org',
  address: {
    street: '5725 S Valley View Blvd Ste 5 PMB 338981',
    city: 'Las Vegas',
    state: 'Nevada',
    zip: '89118-3122',
    country: 'United States',
    formatted:
      '5725 S Valley View Blvd Ste 5 PMB 338981, Las Vegas, Nevada 89118-3122, United States',
  },
  phone: '1-888-982-9423',
  emails: {
    general: 'hello@desertrosegives.org',
    info: 'info@desertrosegives.org',
    privacy: 'privacy@desertrosegives.org',
    media: 'media@desertrosegives.org',
    volunteer: 'volunteer@desertrosegives.org',
    grants: 'grants@desertrosegives.org',
    accessibility: 'accessibility@desertrosegives.org',
  },
  paypalDonateUrl:
    process.env.NEXT_PUBLIC_PAYPAL_DONATE_URL ||
    'https://www.paypal.com/ncp/payment/W2UCZXC2XA3NC',
  social: {
    instagram: '',
    linkedin: '',
    facebook: '',
    youtube: '',
  },
} as const;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/news', label: 'News' },
  { href: '/contact', label: 'Contact' },
] as const;
