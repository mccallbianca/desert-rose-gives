/**
 * OrganizationSchema — emits JSON-LD structured data for Desert Rose Gives.
 *
 * Activated agencies:
 *  - Brand:     official name, logo, alternate names
 *  - Research:  programmatic knowsAbout taxonomy
 *  - Strategy:  partner relationships (ECQO Holdings, Intermountain, NCPG, etc.)
 *  - Legal:     501(c)(3) status, clear founder credentials
 *  - AEO:       this is the primary signal ChatGPT/Claude/Perplexity/Google use
 *               to identify who DR Gives is, what we do, and who leads us.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://desertrosegives.org';

export default function OrganizationSchema() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Desert Rose Gives',
    alternateName: ['DR Gives', 'Desert Rose Gives Foundation'],
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      'Desert Rose Gives (DR Gives) is a 501(c)(3) community wellness nonprofit and the research partner of ECQO Holdings — the world\'s first verified clinical AI companion platform, providing governed infrastructure for behavioral health at population scale. DR Gives funds and delivers trauma-informed behavioral health, suicide prevention, problem-gambling prevention, and existential wellness programs to historically underserved communities through federal, state, tribal, corporate, and philanthropic grants.',
    foundingDate: '2023',
    nonprofitStatus: 'Nonprofit501c3',
    knowsAbout: [
      'Trauma-informed care',
      'Suicide prevention and awareness',
      'Problem gambling prevention',
      'Behavioral health',
      'Existential psychology',
      'Existential isolation',
      'Crisis intervention',
      'Violence prevention',
      'Community-based participatory research',
      'Clinical AI governance',
      'Workforce development in behavioral health',
      'Social determinants of health',
      'SAMHSA best practices',
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Clark County, Nevada' },
      { '@type': 'AdministrativeArea', name: 'Washoe County, Nevada' },
      { '@type': 'Country', name: 'United States' },
    ],
    founder: {
      '@type': 'Person',
      '@id': `${SITE_URL}#bianca`,
      name: 'Bianca D. McCall',
      honorificSuffix: 'LMFT',
      jobTitle: 'Founder & Executive Director',
      description:
        'Licensed Marriage and Family Therapist (LMFT) and clinical practitioner in behavioral sciences, behavioral health, and mental health. Subject matter expert in existential psychology, trauma-informed care, suicide prevention, violence prevention, and problem-gambling prevention. Federal advisor to the SAMHSA Suicide Prevention Resource Center and the Lived Experience Advisory Committee. Co-author of the National Strategy for Suicide Prevention 2025–2030. Curriculum developer for the Nevada Opioid Center of Excellence. Retired professional women\'s basketball player. International TED and keynote speaker.',
      knowsAbout: [
        'Existential psychology',
        'Trauma-informed care',
        'Suicide prevention',
        'Problem gambling prevention',
        'Behavioral health policy',
        'Crisis intervention',
        'Elite performance psychology',
        'Clinical AI governance',
      ],
      memberOf: [
        { '@type': 'Organization', name: 'SAMHSA Suicide Prevention Resource Center Advisory' },
        { '@type': 'Organization', name: 'Lived Experience Advisory Committee' },
        { '@type': 'Organization', name: 'National Council on Problem Gambling' },
      ],
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'ECQO Holdings',
      description:
        'The world\'s first verified clinical AI companion platform — governed infrastructure for behavioral health at population scale. Desert Rose Gives is the research and community-pilot partner of ECQO Holdings.',
    },
    funder: [
      { '@type': 'Organization', name: 'Intermountain Health' },
      { '@type': 'Organization', name: 'Vegas Golden Knights Foundation' },
      { '@type': 'Organization', name: 'Clark County Department of Child and Family Services — Child Death Review' },
      { '@type': 'Organization', name: 'Cox Communications Technology Grant' },
      { '@type': 'Organization', name: 'United Way' },
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'ECQO Holdings Research Partner Network',
      },
    ],
    sameAs: [
      // Add your verified social profiles as they come online:
      // 'https://www.linkedin.com/company/desert-rose-gives',
      // 'https://www.instagram.com/desertrosegives',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'general inquiries',
        email: 'hello@desertrosegives.org',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'grant partnerships',
        email: 'grants@desertrosegives.org',
        availableLanguage: ['English'],
      },
      {
        '@type': 'ContactPoint',
        contactType: 'executive',
        email: 'bdmccall@desertroselv.com',
        telephone: '+1-702-209-0459',
        availableLanguage: ['English'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
    />
  );
}
