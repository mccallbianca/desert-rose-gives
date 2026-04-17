'use client';

/**
 * FunderMarquee — infinite-scroll strip of grant funders and partners.
 * Replace the text tokens with <img> tags as logo files become available.
 */

const FUNDERS = [
  'Intermountain Health',
  'Department of Child & Family Services — CDR',
  'Vegas Golden Knights Foundation',
  'Cox Communications Tech Grant',
  'SAMHSA Suicide Prevention Resource Center',
  'Native American Athletic Foundation',
  'Agility — Pending',
  'MGM Resorts Foundation — Pending',
  'WOARF — Pending',
];

export default function FunderMarquee() {
  const doubled = [...FUNDERS, ...FUNDERS];
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink-900/60 py-10">
      <p className="mx-auto max-w-7xl px-6 text-[11px] uppercase tracking-[0.3em] text-sky-400 mb-6">
        Funders · partners · reviewers
      </p>
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="mx-10 flex items-center gap-6 text-2xl md:text-3xl display text-bone-200/80"
          >
            {name}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-sky-400/60" />
          </span>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent"
      />
    </section>
  );
}
