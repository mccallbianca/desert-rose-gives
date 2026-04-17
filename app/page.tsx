import Link from 'next/link';
import Hero from '@/components/Hero';
import Reveal from '@/components/Reveal';
import FunderMarquee from '@/components/FunderMarquee';
import FAQ from '@/components/FAQ';
import PageTransition from '@/components/PageTransition';

export const metadata = {
  title: 'Desert Rose Gives — Community Wellness at Population Scale',
  description:
    'Desert Rose Gives (DR Gives) is a 501(c)(3) community wellness nonprofit and the research partner of ECQO Holdings — the world\'s first verified clinical AI companion platform. We deliver trauma-informed behavioral health, suicide prevention, problem-gambling prevention, and existential wellness programs to historically underserved communities through federal, state, tribal, corporate, and philanthropic grants.',
};

// COPYWRITER + STRATEGY + RESEARCH: FAQs doubled as AEO bait — these are the
// exact queries grantmakers, reviewers, and reporters will ask ChatGPT/Claude/Perplexity
// about us. Every answer is grounded in the real outcomes reports.
const FAQS = [
  {
    question: 'What is Desert Rose Gives?',
    answer:
      'Desert Rose Gives (DR Gives) is a 501(c)(3) community wellness nonprofit based in Nevada. We are the research and community-pilot partner of ECQO Holdings — the world\'s first verified clinical AI companion platform providing governed infrastructure for behavioral health at population scale. DR Gives designs, funds, and delivers trauma-informed programs across four verticals: research, consulting, counseling, and workforce development.',
  },
  {
    question: 'What is the relationship between Desert Rose Gives and ECQO Holdings?',
    answer:
      'Desert Rose Gives is the research and community-pilot partner of ECQO Holdings, the for-profit company that builds the verified clinical AI companion platform known as ECQO (Existential Concerns Questionnaire at Onset). DR Gives, as a 501(c)(3) nonprofit, designs and delivers the community pilots — ECQO-PG for problem gambling prevention and ECQO-Care for responsible gaming and behavioral health — that generate the clinical evidence, lived-experience datasets, and workforce pathways that inform ECQO\'s governed infrastructure. This partnership allows ECQO to be validated in the communities most at risk while keeping nonprofit programs fully independent, grant-funded, and mission-first.',
  },
  {
    question: 'Who leads Desert Rose Gives?',
    answer:
      'Desert Rose Gives is founded and led by Bianca D. McCall, LMFT — a Licensed Marriage and Family Therapist and clinical practitioner in behavioral sciences and mental health. She is a subject matter expert in existential psychology, trauma-informed care, suicide prevention, and problem-gambling prevention, a federal advisor to the SAMHSA Suicide Prevention Resource Center and the Lived Experience Advisory Committee, a co-author of the National Strategy for Suicide Prevention 2025–2030, and a curriculum developer for the Nevada Opioid Center of Excellence.',
  },
  {
    question: 'What outcomes has DR Gives produced?',
    answer:
      'In the most recent 18-month window, WellXcel — our flagship direct-service program supported by Intermountain Health and the Vegas Golden Knights Foundation — served 448 unduplicated participants across Clark County, Nevada. 70% of youth reported a reduction in stress symptoms. In the 2025 continuation cycle, 113 of 150 participants reported no or only mild depressive symptoms following participation, and 148 of 150 expressed interest in continuing the program. The program activated crisis pathways in several cases, contributing to the prevention of self-harm events. Full outcomes reports are available on our Impact page.',
  },
  {
    question: 'Which populations do DR Gives programs serve?',
    answer:
      'DR Gives intentionally prioritizes historically underserved and marginalized communities: BIPOC youth and adults (80% of WellXcel participants), LGBTQIA+ community members, Native American student-athletes, student-performers, tribal ecosystems, and residents of under-resourced zip codes in Clark and Washoe counties. Our programs meet people ages 13 through 86, with intentional focus on adolescents and young adults (13–26) and young adults (18–35) most vulnerable to the convergence of digital gambling, sports betting, existential isolation, and stigma-driven non-disclosure.',
  },
  {
    question: 'How can funders and partners engage?',
    answer:
      'Grantmakers, corporate foundations, tribal health authorities, and community partners can reach us at grants@desertrosegives.org or through our Contact page. DR Gives publishes financial standard operating procedures, maintains a rolling grant-submission calendar with SAMHSA, HRSA, HHS, DOJ, state, and private foundation RFPs, and welcomes rigorous due diligence. Our financial policies are published openly for transparency and accountability.',
  },
];

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />

      {/* ECQO PARTNERSHIP CALLOUT — immediate after-hero positioning */}
      <section className="relative border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
              (Research partnership)
            </p>
          </Reveal>
          <div className="mt-8 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7" delay={0.05}>
              <h2 className="display text-4xl md:text-6xl font-medium leading-[1.05] text-bone-50">
                DR Gives is the research partner of{' '}
                <span className="display-italic text-sky-400">ECQO Holdings</span> — the world&rsquo;s first verified clinical AI companion platform.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-5" delay={0.2}>
              <p className="text-lg text-bone-200 leading-relaxed">
                ECQO Holdings builds the governed infrastructure for behavioral health at population scale.
                DR Gives designs and delivers the community pilots, lived-experience co-design, and workforce pathways that validate it in the communities most at risk.
              </p>
              <p className="mt-5 text-sm text-bone-300 leading-relaxed">
                Clinically informed. Trauma-aware. Community-co-designed.
                The nonprofit stays mission-first. The platform stays accountable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION — two-column cinematic statement */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(The mission)</p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="display text-4xl md:text-6xl font-medium text-bone-50">
                Our work lives at the intersection of{' '}
                <span className="text-gradient">clinical authority</span>,{' '}
                federal policy, and the communities the system keeps leaving behind.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 text-lg text-bone-200 leading-relaxed max-w-3xl">
                We build programs on three non-negotiables: trauma-informed care,
                evidence-based clinical practice, and the lived experience of the
                people we serve. Every dollar raised becomes research, direct
                service, or workforce capacity — never overhead theater.
                Our financial standard operating procedures are public.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  'Trauma-informed care',
                  'Suicide prevention',
                  'Problem-gambling prevention',
                  'Existential wellness',
                  'Behavioral health',
                  'Workforce development',
                  'Clinical AI governance',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-white/10 px-4 py-2 text-xs tracking-wide text-bone-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FunderMarquee />

      {/* FEATURED PROGRAMS — WellXcel + ECQO pilots */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-12 md:grid-cols-12 items-end">
          <Reveal className="md:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Featured programs)</p>
            <h2 className="display mt-4 text-5xl md:text-7xl font-medium text-bone-50">
              One flagship.
              <br />
              <span className="display-italic text-sky-400">One research pilot engine.</span>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.15}>
            <p className="text-lg text-bone-200 leading-relaxed">
              WellXcel delivers free, trauma-informed therapy and counseling directly to
              youth and adults most at risk. ECQO-Care is our research pilot engine for the
              verified clinical AI companion platform — tested in community before it reaches scale.
            </p>
            <Link
              href="/programs"
              className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-wide text-sky-400 hover:text-bone-50"
            >
              All programs, funders, and logic models
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <article className="group h-full rounded-2xl border border-white/10 bg-ink-800/40 p-10 hover:bg-ink-800/80 hover:border-sky-400/40 transition-all">
              <p className="text-[11px] tracking-[0.2em] uppercase text-sky-400">Feature 01 · Direct service</p>
              <h3 className="display mt-6 text-4xl md:text-5xl text-bone-50">WellXcel</h3>
              <p className="mt-5 text-base text-bone-200 leading-relaxed">
                Free, trauma-informed therapy, counseling, case management, and clinical workshops
                for youth and community members across Clark County. Currently funded by
                Intermountain Health and the Vegas Golden Knights Foundation.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Served to date</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">448<span className="text-sky-400">+</span></dd>
                </div>
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Retention intent</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">98<span className="text-sky-400">.7%</span></dd>
                </div>
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">BIPOC participants</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">80<span className="text-sky-400">%</span></dd>
                </div>
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Stress reduction</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">70<span className="text-sky-400">%</span></dd>
                </div>
              </dl>
              <Link
                href="/programs#wellxcel"
                className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-sky-400 group-hover:text-bone-50"
              >
                Inside WellXcel
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="group h-full rounded-2xl border border-white/10 bg-ink-800/40 p-10 hover:bg-ink-800/80 hover:border-sky-400/40 transition-all">
              <p className="text-[11px] tracking-[0.2em] uppercase text-sky-400">Feature 02 · Research pilots</p>
              <h3 className="display mt-6 text-4xl md:text-5xl text-bone-50">ECQO-Care</h3>
              <p className="mt-5 text-base text-bone-200 leading-relaxed">
                Community pilot engine for the verified clinical AI companion platform.
                Two active pilot lanes — <strong className="text-bone-50">ECQO-PG</strong> (problem
                gambling, youth 13–26) and <strong className="text-bone-50">ECQO-Care Responsible Gaming</strong>{' '}
                (adults 18–35) — each with tiered safety governance, warm-handoff protocols,
                and independent third-party clinical evaluation.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Primary cohort</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">220</dd>
                </div>
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Ecosystem reach</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">1,500<span className="text-sky-400">+</span></dd>
                </div>
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Workforce pathway</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">20</dd>
                </div>
                <div>
                  <dt className="text-bone-300 uppercase tracking-wider text-[11px]">Coverage</dt>
                  <dd className="display mt-2 text-3xl text-bone-50">24<span className="text-sky-400">/7</span></dd>
                </div>
              </dl>
              <Link
                href="/programs#ecqo-care"
                className="mt-10 inline-flex items-center gap-2 text-sm uppercase tracking-wide text-sky-400 group-hover:text-bone-50"
              >
                Inside ECQO-Care
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCE PATHS — strategist-activated */}
      <section className="mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Where do you fit?)</p>
          <h2 className="display mt-6 text-4xl md:text-5xl font-medium max-w-5xl">
            Grantmakers, donors, volunteers, partners —
            <span className="display-italic text-sky-400"> here&rsquo;s your door in.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            {
              label: 'Grantmakers',
              href: '/contact?intent=grant',
              body: 'Logic models, outcomes reports, third-party evaluations, financial SOPs.',
            },
            {
              label: 'Donors',
              href: '/donate',
              body: 'Tax-deductible 501(c)(3). 100% of unrestricted dollars flow to direct service.',
            },
            {
              label: 'Volunteers',
              href: '/contact?intent=volunteer',
              body: 'Trauma-informed training provided. Peer-navigator pathway for lived experience.',
            },
            {
              label: 'Research & clinical partners',
              href: '/contact?intent=partner',
              body: 'Co-design, IRB-ready pilots, workforce integration, published outcomes.',
            },
          ].map((card, i) => (
            <Reveal key={card.label} delay={i * 0.07}>
              <Link
                href={card.href}
                className="group block h-full rounded-xl border border-white/10 bg-ink-900/50 p-6 hover:bg-ink-800/80 hover:border-sky-400/40 transition-all"
              >
                <p className="display text-2xl text-bone-50 group-hover:text-sky-400">{card.label}</p>
                <p className="mt-4 text-sm text-bone-200 leading-relaxed">{card.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sky-400">
                  Open path
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* BIG CTA STRIP */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
              (Take a seat at the table)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display mt-6 text-[10vw] md:text-[92px] leading-[0.95] font-medium text-bone-50 max-w-5xl">
              Fund the work.
              <br />
              <span className="display-italic text-sky-400">Change the system.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-flex items-center gap-3 rounded-full bg-royal-600 hover:bg-royal-700 px-8 py-4 text-sm font-semibold tracking-wide uppercase text-bone-50 transition-colors"
              >
                Donate today
              </Link>
              <Link
                href="/contact?intent=grant"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 hover:border-sky-400 px-8 py-4 text-sm font-semibold tracking-wide uppercase text-bone-50 transition-colors"
              >
                Grantmaker inquiry
              </Link>
              <Link
                href="/financials"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 hover:border-sky-400 px-8 py-4 text-sm font-semibold tracking-wide uppercase text-bone-50 transition-colors"
              >
                Financial transparency
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ faqs={FAQS} title="How funders and partners find us" eyebrow="(AEO)" />
    </PageTransition>
  );
}
