/**
 * FAQSchema — reusable FAQPage JSON-LD generator.
 * This is the #1 lever for appearing in AI answers and Google rich results.
 * Drop this component into any page with a list of Q&A pairs.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export default function FAQSchema({ faqs }: { faqs: FAQ[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
