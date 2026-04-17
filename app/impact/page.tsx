import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Impact — Outcomes, Partners, Success Stories',
  description:
    'Across two reporting cycles (April 2024 through June 2025), DR Gives WellXcel programming served 448 unduplicated youth and adults in Clark County, Nevada — with documented reductions in stress and depressive symptoms, 100% response rate on mental health assessments, 148 of 150 participants expressing intent to continue, and prevention of potential self-harm events through crisis-response coordination.',
  alternates: { canonical: '/impact' },
};

const FAQS = [
  {
    question: 'What outcomes did WellXcel achieve in 2024?',
    answer:
      'From April 1, 2024 through September 30, 2024, the WellXcel Program supported by a $15,000 Intermountain Health donation served 298 participants through 100 free therapy sessions (billed value $120/session) and 50 hours of counseling support (billed value $60/hour). 100% of participants reported feeling stressed in the prior 30 days at intake; 70% reported a reduction in stress symptoms by program conclusion. 30% reported depressive symptoms at intake; 40% of those reported symptom reduction. 100% of participants reported learning something new about themselves during the program. Demographics: 80% BIPOC, 35% LGBTQIA+, 40% youth (13–24), 60% adults (25–86).',
  },
  {
    question: 'What outcomes did WellXcel achieve in 2025?',
    answer:
      'From January through June 2025, the continuation cycle supported by a $10,000 Intermountain Health award reached 150 unduplicated participants (100% survey response rate). 112 received individual services — therapy, counseling, consulting, case management. 38 participated in the clinical workshop "Recognizing and Responding to Student Anxiety: Trauma-Sensitive Schools" on June 17, 2025. 97 identified as BIPOC (including 20 Native American participants); 11 identified as LGBTQIA+. Outcomes: 113 reported no or only mild depressive symptoms following participation. 92 reported mild or no current stress. 126 reported learning something new about themselves. 148 of 150 expressed interest in continuing the program.',
  },
  {
    question: 'Did WellXcel prevent any crisis events?',
    answer:
      'Yes. During the 2025 cycle, screening during service delivery identified several participants experiencing acute distress and emerging self-harm risk. DR Gives activated local crisis response pathways, coordinated with caregivers and referring partners, and ensured participants were safely connected to appropriate crisis supports. Following stabilization, those participants continued to engage in services with improved emotional awareness and help-seeking behaviors. This coordination contributed to the prevention of potential self-harm events — the core outcome WellXcel exists to produce.',
  },
  {
    question: 'How does DR Gives measure and report outcomes?',
    answer:
      'All DR Gives programs use validated mental health instruments (PHQ-2, PHQ-9, ASQ) and program-specific pre/post surveys. Data is reported using the RE-AIM framework — Reach, Effectiveness, Adoption, Implementation, Maintenance — consistent with Intermountain Health and federal evaluation standards. Outcomes reports are delivered to every funder and made available upon request to peer nonprofits, researchers, and press.',
  },
];

export default function ImpactPage() {
  return (
    <PageTransition>
      {/* HERO */}
      <section className="bg-spotlight bg-grain">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Impact)</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[12vw] md:text-[104px] leading-[0.94] font-medium text-bone-50 max-w-6xl">
              Real outcomes. <span className="display-italic text-sky-400">Real people.</span>{' '}
              Real prevention.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-lg md:text-xl text-bone-200 leading-relaxed">
              Every number on this page is sourced directly from funder-reviewed outcomes
              reports. No projections. No aspirations. Actual participants, actual assessments,
              actual changes — measured and verified.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TOP-LINE OUTCOMES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
            (Top-line · April 2024 – June 2025)
          </p>
          <h2 className="display mt-4 text-4xl md:text-5xl font-medium max-w-4xl">
            Eighteen months. Two funded cycles.{' '}
            <span className="display-italic text-sky-400">One shared standard:</span>{' '}
            measured impact before expanded reach.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          <BigStat big="448+" label="Unduplicated participants served" />
          <BigStat big="100" label="Free therapy sessions (cycle 1)" />
          <BigStat big="150" label="Reached in cycle 2 (Jan–Jun 2025)" />
          <BigStat big="148/150" label="Intent to continue (cycle 2)" />
          <BigStat big="100%" label="Survey response rate (cycle 2)" />
          <BigStat big="70%" label="Reduction in stress symptoms" />
        </div>
      </section>

      {/* WHO WE REACHED — demographics synthesis */}
      <section className="border-y border-white/5 bg-ink-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Who we reached)</p>
            <h2 className="display mt-4 text-4xl md:text-5xl font-medium max-w-4xl">
              The communities the system keeps leaving behind.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <ul className="space-y-6 text-bone-100">
                <Metric
                  big="80%"
                  label="BIPOC participants"
                  detail="Black, Hispanic/Latino, Asian/Pacific Islander, Native American, and mixed-race community members. In the 2025 cycle, 20 Native American participants were served in partnership with the Native American Athletic Foundation."
                />
                <Metric
                  big="35%"
                  label="LGBTQIA+ participants"
                  detail="Prioritized outreach through partners including the Social Influence Foundation and community-based LGBTQIA+ wellness networks."
                />
                <Metric
                  big="13 – 86"
                  label="Age range"
                  detail="Youth (13–24) represent 40% of participants; adults (25–86) represent 60%. Lead youth demographic: boys 16–21. Lead adult demographic: women 25–40."
                />
                <Metric
                  big="Clark County"
                  label="Primary service area"
                  detail="Intentionally concentrated in under-resourced zip codes of Southern Nevada — the geography most affected by Nevada&rsquo;s national-worst ranking in mental health access."
                />
              </ul>
            </Reveal>

            <Reveal className="md:col-span-5" delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-ink-800/40 p-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                  Partner network
                </p>
                <ul className="mt-5 space-y-2 text-sm text-bone-100 leading-relaxed">
                  <li>The Village Academy (TVA)</li>
                  <li>Mountain Valley Prep</li>
                  <li>Bully Busters 702</li>
                  <li>Social Influence Foundation</li>
                  <li>The LIMA Program</li>
                  <li>CAARD — Center for African American Recovery Development</li>
                  <li>NAACP Health &amp; Wellness Committee</li>
                  <li>Comagine Health</li>
                  <li>Native American Athletic Foundation</li>
                  <li>WestCare Foundation</li>
                  <li>UNR CASAT / NRAP</li>
                  <li>BeHERE Nevada</li>
                  <li>Intermountain Health Community Initiatives</li>
                  <li>Rhythms Dance Academy</li>
                  <li>UNLV Institute of Financial Literacy &amp; Wellness</li>
                  <li>Valhallan Esports Training</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SUCCESS STORY — from the 2025 outcomes report, de-identified */}
      <section className="mx-auto max-w-5xl px-6 py-28">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
            (Success story · Intermountain Health 2025 cycle)
          </p>
          <h2 className="display mt-4 text-4xl md:text-5xl font-medium">
            One participant. One coordinated response.
            <br />
            <span className="display-italic text-sky-400">One life safely stabilized.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 rounded-2xl border border-white/10 bg-ink-900/40 p-8 md:p-12">
            <p className="text-bone-100 leading-relaxed text-lg">
              A secondary school–aged participant was referred to WellXcel by a community
              behavioral health partner due to persistent anxiety, disengagement from school,
              and a history of poor response to prior services. They initially presented with
              elevated stress, difficulty verbalizing emotions, and reluctance to engage in
              traditional counseling.
            </p>
            <p className="mt-6 text-bone-100 leading-relaxed text-lg">
              Through sponsored therapy and case management sessions made possible by the
              Intermountain Health grant, the participant gradually developed the ability to
              identify stress triggers, articulate internal experiences, and practice
              regulation strategies. During the course of service delivery, screening indicated
              acute distress and emerging self-harm risk.
            </p>
            <p className="mt-6 text-bone-100 leading-relaxed text-lg">
              DR Gives promptly engaged the local crisis response system, coordinated with
              caregivers and providers, and ensured the participant was safely connected to
              appropriate crisis supports. Following stabilization, the participant continued
              to engage in services and demonstrated improved emotional awareness, reduced
              distress, and increased willingness to seek help when overwhelmed.
            </p>
            <p className="mt-6 text-bone-100 leading-relaxed text-lg">
              Caregivers and referring partners reported improved communication, school
              engagement, and a clearer pathway for ongoing support.
            </p>
            <p className="mt-8 display-italic text-2xl text-sky-400">
              &ldquo;This case illustrates how Intermountain Health&rsquo;s investment enabled timely
              intervention, strengthened coordination across systems of care, and contributed
              to the prevention of a potential self-harm event. It reflects the core intent
              of the WellXcel Program: identify risk early, respond effectively, and support
              youth and families before challenges escalate into crisis.&rdquo;
            </p>
            <p className="mt-6 text-sm text-bone-300">
              — Bianca D. McCall, LMFT · Executive Director · Desert Rose Gives
            </p>
          </div>
        </Reveal>
      </section>

      {/* ADOPTION — the 12-month scale story */}
      <section className="border-t border-white/5 bg-ink-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Adoption)</p>
            <h2 className="display mt-4 text-4xl md:text-5xl font-medium max-w-4xl">
              How WellXcel became{' '}
              <span className="display-italic text-sky-400">a systems-level intervention</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <AdoptionCard
                n="01"
                title="Education adopts"
                body="Youth-serving organizations and schools requested trauma-sensitive training and consultation for staff working with students in stress, anxiety, and behavioral health challenges."
              />
              <AdoptionCard
                n="02"
                title="Healthcare adopts"
                body="Healthcare and behavioral health partners engaged DR Gives to deliver workshops, facilitated learning sessions, and consultative support aligned with workforce wellness and prevention strategies."
              />
              <AdoptionCard
                n="03"
                title="Community adopts"
                body="Organizations serving BIPOC and Native youth incorporated WellXcel concepts into peer support, prevention programming, and group-based education — extending the model beyond DR Gives&rsquo; direct service."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ faqs={FAQS} title="What funders and press have asked" eyebrow="(Impact AEO)" />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <h2 className="display text-4xl md:text-5xl font-medium max-w-2xl">
              See exactly how dollars convert to outcomes.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link href="/financials" className="rounded-full bg-royal-600 hover:bg-royal-700 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50">
                Financial transparency
              </Link>
              <Link href="/donate" className="rounded-full border border-white/15 hover:border-sky-400 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50">
                Fund the next cycle
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function BigStat({ big, label }: { big: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/40 p-5">
      <p className="display text-3xl md:text-4xl text-bone-50">{big}</p>
      <p className="mt-3 text-xs text-bone-200 leading-snug">{label}</p>
    </div>
  );
}

function Metric({ big, label, detail }: { big: string; label: string; detail: string }) {
  return (
    <li className="flex gap-6">
      <div className="shrink-0 w-24">
        <p className="display text-4xl text-sky-400">{big}</p>
      </div>
      <div>
        <p className="text-base font-medium text-bone-50">{label}</p>
        <p
          className="mt-2 text-sm text-bone-200 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: detail }}
        />
      </div>
    </li>
  );
}

function AdoptionCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
      <p className="text-[11px] tracking-[0.2em] uppercase text-sky-400">{n}</p>
      <h3 className="display mt-4 text-2xl text-bone-50">{title}</h3>
      <p
        className="mt-3 text-sm text-bone-200 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
}
