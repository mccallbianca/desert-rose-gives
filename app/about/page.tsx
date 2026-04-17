import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PageTransition from '@/components/PageTransition';
import FAQ from '@/components/FAQ';
import FounderPortrait from '@/components/FounderPortrait';

export const metadata = {
  title: 'About — The clinician, the mission, the method',
  description:
    'Desert Rose Gives was founded by Bianca D. McCall, LMFT — a Licensed Marriage and Family Therapist, existential psychology subject matter expert, and federal SAMHSA advisor. Learn how clinical authority, lived experience, and federal policy converge in our work.',
  alternates: { canonical: '/about' },
};

const FAQS = [
  {
    question: 'Why was Desert Rose Gives founded?',
    answer:
      'Desert Rose Gives was founded to close the gap between clinical evidence and community access. Our founder saw a federal behavioral health system that knew what worked but could not reach the people most at risk — athletes, youth in child welfare, tribal communities, and veterans. DR Gives was built to fund, pilot, and scale the programs that close that gap.',
  },
  {
    question: 'Who is Bianca D. McCall, LMFT?',
    answer:
      'Bianca D. McCall, LMFT is a Licensed Marriage and Family Therapist and clinical practitioner in behavioral sciences, behavioral health, and mental health. She is a subject matter expert in existential psychology, trauma-informed care, suicide prevention, violence prevention, and behavioral change. She serves as a federal advisor to the SAMHSA Suicide Prevention Resource Center and the Lived Experience Advisory Committee, co-authored the National Strategy for Suicide Prevention 2025–2030, developed curriculum for the Nevada Opioid Center of Excellence, is a retired professional women\'s basketball player, and an international TED and keynote speaker.',
  },
  {
    question: 'What does trauma-informed actually mean in your work?',
    answer:
      'Trauma-informed means we design every program, every intake, every training, and every volunteer interaction with an understanding of how trauma shapes the nervous system, identity, and help-seeking behavior. We apply SAMHSA\'s six principles — safety, trustworthiness, peer support, collaboration, empowerment, and cultural responsiveness — to every decision we make.',
  },
  {
    question: 'Is your work evidence-based?',
    answer:
      'Yes. Every Desert Rose Gives program is grounded in published clinical evidence, SAMHSA best practices, and the lived experience of the populations we serve. Our research arm publishes outcomes, our consulting arm uses validated implementation frameworks, and our counseling services are delivered only by licensed or supervised providers.',
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="bg-spotlight bg-grain">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(About)</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[12vw] md:text-[104px] leading-[0.94] font-medium text-bone-50 max-w-6xl">
              A clinician, a federal advisor,
              <br />
              <span className="display-italic text-sky-400">and the communities</span>{' '}
              who taught her what works.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Founder block */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <FounderPortrait />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-sky-400">
                Bianca D. McCall, LMFT
              </p>
              <p className="mt-2 text-sm text-bone-200">
                Founder &amp; Executive Director
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <h2 className="display text-4xl md:text-5xl font-medium text-bone-50 leading-tight">
                The inner voice is the conductor of every performance.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 space-y-6 text-lg text-bone-200 leading-relaxed max-w-3xl">
                <p>
                  Bianca D. McCall, LMFT is a Licensed Marriage and Family Therapist
                  and clinical practitioner in behavioral sciences, behavioral health,
                  and mental health — and the founder of Desert Rose Gives. Her
                  clinical and policy work spans existential psychology, trauma-informed
                  care, crisis intervention, suicide prevention, violence prevention,
                  and problem gambling prevention.
                </p>
                <p>
                  She serves as a federal advisor to the SAMHSA Suicide Prevention
                  Resource Center and the Lived Experience Advisory Committee, and
                  as a national committee subject matter expert for federal and
                  local government. She is renowned nationally in health and human
                  services.
                </p>
                <p>
                  A retired professional women&rsquo;s basketball player and
                  international TED and keynote speaker, Bianca speaks the language
                  of performance to elite performers in every system — athletes,
                  artists, academics, executives, healthcare workers, parents, and
                  community leaders. Desert Rose Gives is the nonprofit vehicle
                  through which that expertise is translated into community impact.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'Licensed clinician',
                  'SAMHSA SPRC advisor',
                  'Lived Experience Advisory',
                  'Federal SME',
                  'TED + keynote speaker',
                  'Retired pro athlete',
                ].map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs tracking-wide text-bone-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission / method */}
      <section className="bg-ink-900/40 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28 grid gap-16 md:grid-cols-2">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Mission)</p>
            <h2 className="display mt-6 text-4xl md:text-5xl font-medium">
              Fund the programs <span className="display-italic text-sky-400">the system forgets</span>.
            </h2>
            <p className="mt-8 text-lg text-bone-200 leading-relaxed">
              We exist to close the distance between federal evidence, clinical
              practice, and the communities most at risk. Our 501(c)(3) status is
              not a label — it is a delivery system for trauma-informed care,
              research, and workforce training at scale.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Method)</p>
            <h2 className="display mt-6 text-4xl md:text-5xl font-medium">
              Clinical, federal, <span className="display-italic text-sky-400">and human</span>.
            </h2>
            <ol className="mt-8 space-y-5 text-bone-200">
              <li className="flex gap-4">
                <span className="text-sky-400 font-mono text-sm mt-1">01</span>
                <span>Ground every program in trauma-informed, SAMHSA-aligned best practice.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-mono text-sm mt-1">02</span>
                <span>Pilot with community partners and measure outcomes clinically.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-mono text-sm mt-1">03</span>
                <span>Scale through federal, state, tribal, and corporate grant partnerships.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-sky-400 font-mono text-sm mt-1">04</span>
                <span>Train the workforce that will sustain the change.</span>
              </li>
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <Reveal>
          <h2 className="display text-5xl md:text-7xl font-medium max-w-5xl">
            Ready to <span className="display-italic text-sky-400">partner</span>?
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/programs"
              className="rounded-full bg-royal-600 hover:bg-royal-700 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50 transition-colors"
            >
              See the programs
            </Link>
            <Link
              href="/contact?intent=grant"
              className="rounded-full border border-white/15 hover:border-sky-400 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50 transition-colors"
            >
              Grantmaker inquiry
            </Link>
          </div>
        </Reveal>
      </section>

      <FAQ faqs={FAQS} title="What funders and reviewers want to know" />
    </PageTransition>
  );
}
