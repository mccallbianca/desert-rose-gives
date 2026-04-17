import FAQSchema, { FAQ as FAQItem } from './FAQSchema';
import Reveal from './Reveal';

export default function FAQ({
  faqs,
  title = 'Questions people ask us',
  eyebrow = 'FAQ',
}: {
  faqs: FAQItem[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <FAQSchema faqs={faqs} />
      <Reveal>
        <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">{eyebrow}</p>
        <h2 className="display mt-4 text-5xl md:text-6xl font-semibold text-bone-50">
          {title}
        </h2>
      </Reveal>
      <div className="mt-12 divide-y divide-white/5 border-y border-white/5">
        {faqs.map((f, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <details className="group py-7">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
                <h3 className="text-lg md:text-xl font-medium text-bone-50 group-open:text-sky-400 transition-colors">
                  {f.question}
                </h3>
                <span className="text-sky-400 text-2xl leading-none transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-bone-200 leading-relaxed max-w-3xl">{f.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
