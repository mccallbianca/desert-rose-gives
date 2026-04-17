import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import FAQ from '@/components/FAQ';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
  title: 'Programs — WellXcel & ECQO-Care',
  description:
    'Desert Rose Gives delivers two featured programs: WellXcel — free trauma-informed therapy and counseling serving 448+ youth and adults in Clark County, Nevada; and ECQO-Care — the community pilot engine for the verified clinical AI companion platform, including ECQO-PG (problem gambling prevention for youth 13–26) and ECQO-Care Responsible Gaming (adults 18–35). Funded by Intermountain Health, Vegas Golden Knights Foundation, Clark County Department of Child and Family Services, Cox Communications Technology Grant, NCPG Agility, MGM, and others.',
  alternates: { canonical: '/programs' },
};

/* -------- AEO: Program-level Q&A grant reviewers actually ask -------- */
const FAQS = [
  {
    question: 'What is WellXcel?',
    answer:
      'WellXcel is Desert Rose Gives\' flagship direct-service program delivering free, trauma-informed therapy, counseling, case management, and trauma-sensitive clinical workshops to youth (ages 13–24) and adults (25–86) in Clark County, Nevada — with intentional priority on BIPOC, LGBTQIA+, Native American, and historically under-resourced populations. WellXcel has been supported by Intermountain Health and the Vegas Golden Knights Foundation.',
  },
  {
    question: 'What is ECQO-Care?',
    answer:
      'ECQO-Care is Desert Rose Gives\' community pilot engine for the ECQO (Existential Concerns Questionnaire at Onset) clinical AI companion platform, developed in partnership with ECQO Holdings. ECQO-Care currently includes two active pilots: ECQO-PG, a problem-gambling prevention pilot for youth ages 13–26 submitted under the NCPG Agility Grant; and ECQO-Care Responsible Gaming, a safer-gaming and early-intervention pilot for adults ages 18–35 submitted under the 2026 MGM Responsible Gaming Pilot.',
  },
  {
    question: 'How is ECQO different from generic AI chatbots?',
    answer:
      'ECQO is a clinically governed AI companion, not a generic chatbot. It uses proprietary safety guardrails, an Existential Screener Trigger Matrix, tiered risk escalation, and a warm-handoff workflow that routes elevated-risk users to trained peer navigators and licensed clinical partners. Every deployment undergoes clinical safety audits by third-party evaluators, is co-designed with lived-experience youth and young adults, and is anchored in SAMHSA-aligned trauma-informed practice.',
  },
  {
    question: 'What outcomes has WellXcel achieved?',
    answer:
      'Across two reporting cycles (April 2024 through June 2025), WellXcel served 448 unduplicated participants, provided 100 free therapy sessions and 50 hours of counseling support in the first cycle alone, and recorded 70% of participants reporting a reduction in stress symptoms. In the 2025 continuation cycle, 113 of 150 reported no or only mild depressive symptoms following participation, 92 of 150 reported their current stress level as mild or none, and 148 of 150 expressed interest in continuing the program. Full outcomes reports are available on our Impact page.',
  },
];

export default function ProgramsPage() {
  return (
    <PageTransition>
      <FAQSchema faqs={FAQS} />

      {/* HERO */}
      <section className="bg-spotlight bg-grain">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Programs)</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[12vw] md:text-[104px] leading-[0.94] font-medium text-bone-50 max-w-6xl">
              Two featured programs.
              <br />
              <span className="display-italic text-sky-400">Twelve partners.</span>{' '}
              One system-level theory of change.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-lg md:text-xl text-bone-200 leading-relaxed">
              WellXcel delivers the direct clinical care. ECQO-Care is the research pilot engine
              that validates the verified clinical AI companion platform in the communities most at risk.
              Together they form a prevention-first, community-co-designed model for behavioral health
              at population scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WELLXCEL — FEATURE 01 */}
      <section id="wellxcel" className="border-t border-white/5 bg-ink-900/40 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                Feature 01 · Direct clinical service
              </p>
              <h2 className="display mt-6 text-6xl md:text-7xl font-medium text-bone-50 leading-[0.95]">
                WellXcel
              </h2>
              <p className="mt-8 text-bone-200 leading-relaxed">
                A prevention-first clinical service program delivering free trauma-informed therapy,
                counseling, case management, and clinical workshops to youth, young adults, caregivers,
                educators, and behavioral health professionals in Clark County, Nevada.
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-wide text-bone-200">
                  Funder · Intermountain Health
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-wide text-bone-200">
                  Funder · Vegas Golden Knights Foundation
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-wide text-bone-200">
                  2024 · 2025 · Active
                </span>
              </div>
            </Reveal>

            <div className="md:col-span-8">
              <Reveal delay={0.1}>
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-sky-400">Problem</h3>
                <p className="mt-4 text-lg text-bone-100 leading-relaxed">
                  Nevada ranks 51st in the nation for mental health access. In Clark County&rsquo;s
                  under-resourced zip codes, youth and community members face elevated stress,
                  anxiety, depression, and existential isolation — while traditional prevention and
                  treatment systems are overwhelmed, stigmatized, and culturally misaligned with the
                  communities they claim to serve.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <h3 className="mt-12 text-[11px] uppercase tracking-[0.3em] text-sky-400">Intervention</h3>
                <p className="mt-4 text-lg text-bone-100 leading-relaxed">
                  WellXcel pairs licensed clinical care with community-embedded delivery. Free
                  therapy (billed value $120/session) and counseling support ($60/hour) reach
                  participants through trusted community partners — schools, sports programs,
                  peer recovery networks, LGBTQIA+ organizations, and tribal athletic foundations.
                  A weekly peer-support Discord channel, <em>GO MNTL</em>, extends the work between visits.
                </p>
              </Reveal>

              {/* Who we serve — real demographic synthesis */}
              <Reveal delay={0.2}>
                <h3 className="mt-12 text-[11px] uppercase tracking-[0.3em] text-sky-400">
                  Who we serve
                </h3>
                <div className="mt-4 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
                    <p className="display text-4xl text-bone-50">Youth</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-sky-400">Ages 13–24</p>
                    <p className="mt-3 text-sm text-bone-200 leading-relaxed">
                      Lead demographic: boys aged 16–21. Delivered in partnership with The Village Academy,
                      Mountain Valley Prep, Bully Busters 702, and youth-serving community partners.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
                    <p className="display text-4xl text-bone-50">Adults</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-sky-400">Ages 25–86</p>
                    <p className="mt-3 text-sm text-bone-200 leading-relaxed">
                      Lead demographic: women aged 25–40. Caregivers, educators, healthcare and
                      behavioral health professionals receive parallel trauma-sensitive training.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
                    <p className="display text-4xl text-bone-50">80%</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-sky-400">BIPOC participants</p>
                    <p className="mt-3 text-sm text-bone-200 leading-relaxed">
                      Black, Hispanic/Latino, Asian/Pacific Islander, Native American, and mixed-race
                      community members — including 20 Native American participants in the 2025 cycle.
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
                    <p className="display text-4xl text-bone-50">35%</p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-sky-400">LGBTQIA+ community</p>
                    <p className="mt-3 text-sm text-bone-200 leading-relaxed">
                      Prioritized outreach through partners like the Social Influence Foundation and
                      community-based LGBTQIA+ wellness networks.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Outcomes — real numbers */}
              <Reveal delay={0.25}>
                <h3 className="mt-14 text-[11px] uppercase tracking-[0.3em] text-sky-400">
                  Outcomes · April 2024 – June 2025
                </h3>
                <div className="mt-4 grid gap-6 grid-cols-2 md:grid-cols-4">
                  {[
                    { big: '448+', label: 'Unduplicated participants served across two cycles' },
                    { big: '70%', label: 'Youth reporting a reduction in stress symptoms' },
                    { big: '113 / 150', label: 'Reported no or only mild depressive symptoms (2025)' },
                    { big: '148 / 150', label: 'Expressed intent to continue engagement (2025)' },
                  ].map((s, i) => (
                    <div key={i} className="rounded-xl border border-white/10 bg-ink-800/40 p-5">
                      <p className="display text-3xl md:text-4xl text-bone-50">{s.big}</p>
                      <p className="mt-3 text-xs text-bone-200 leading-snug">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-bone-300 italic leading-relaxed max-w-3xl">
                  Across the 2025 reporting cycle, WellXcel also contributed to the prevention of
                  potential self-harm events by activating crisis-response coordination through
                  existing systems of care. A full success story is available in our Impact section.
                </p>
              </Reveal>

              {/* Curriculum topics */}
              <Reveal delay={0.3}>
                <h3 className="mt-14 text-[11px] uppercase tracking-[0.3em] text-sky-400">
                  Curriculum
                </h3>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-bone-100">
                  {[
                    'Perfectionism',
                    'Tolerated toxic stress',
                    'Existential concerns',
                    'Effective communication',
                    'Healthy relationship building',
                    'Trauma-sensitive practice for schools & clinics',
                  ].map((topic) => (
                    <li key={topic} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sky-400" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ECQO-CARE — FEATURE 02 */}
      <section id="ecqo-care" className="border-t border-white/5 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <Reveal className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                Feature 02 · Research pilot engine
              </p>
              <h2 className="display mt-6 text-6xl md:text-7xl font-medium text-bone-50 leading-[0.95]">
                ECQO-Care
              </h2>
              <p className="mt-8 text-bone-200 leading-relaxed">
                The community pilot engine for ECQO — the clinically governed AI companion platform
                built by ECQO Holdings. DR Gives, as the 501(c)(3) research partner, designs and
                delivers the community pilots that validate ECQO in the communities most at risk,
                generating the clinical evidence and workforce pathways that inform the platform
                at population scale.
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-wide text-bone-200">
                  Platform partner · ECQO Holdings
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-wide text-bone-200">
                  Two active pilot lanes
                </span>
                <span className="inline-flex items-center rounded-full border border-white/10 px-3 py-1.5 text-[11px] tracking-wide text-bone-200">
                  24 / 7 infrastructure
                </span>
              </div>
            </Reveal>

            <div className="md:col-span-8 space-y-20">
              {/* Pilot A — ECQO-PG */}
              <Reveal>
                <div className="rounded-2xl border border-white/10 bg-ink-800/40 p-10">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                    Pilot A · Problem gambling prevention
                  </p>
                  <h3 className="display mt-3 text-4xl md:text-5xl text-bone-50">
                    ECQO-PG <span className="display-italic text-sky-400">for youth 13–26</span>
                  </h3>
                  <p className="mt-5 text-bone-100 leading-relaxed">
                    Submitted under the <strong>NCPG Agility Grant ($40,000)</strong>. A 12-month problem-gambling
                    prevention and early-warning pilot for historically marginalized youth and young
                    adults (ages 13–26) in Clark and Washoe counties, Nevada. Designed for communities
                    that have previously had no problem-gambling prevention services, or where
                    existing services are small, under-resourced, or culturally misaligned.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <Stat big="120" label="Primary cohort (co-designed youth users)" />
                    <Stat big="20" label="Stipended AI Risk Mitigators · Navigators · Moderators" />
                    <Stat big="1,500" label="Estimated ecosystem reach (indirect beneficiaries)" />
                  </div>

                  <h4 className="mt-10 text-[11px] uppercase tracking-[0.3em] text-sky-400">Logic model</h4>
                  <ol className="mt-4 space-y-4 text-bone-100 leading-relaxed">
                    <LogicStep n="01" title="Problem">
                      Legalized sports betting, fantasy sports, and unregulated online gaming
                      algorithms have created a youth public-health crisis. 67% of college students
                      engage in sports betting (NCAA). 21.5% of male student-athletes violated
                      wagering bylaws in the past year (2024 NCAA). Gay and bisexual male college
                      athletes engage in problem gambling at 3.4× the rate of straight peers (Richard
                      et al., 2019). Gender-diverse adolescents are significantly more likely to
                      gamble problematically (Rider et al., 2019). Traditional, adult-led,
                      abstinence-only prevention models systematically fail to reach these groups.
                    </LogicStep>
                    <LogicStep n="02" title="Intervention">
                      A clinically governed AI companion (ECQO) operating as 24/7 prevention
                      infrastructure. Proprietary safety guardrails and an Existential Screener
                      Trigger Matrix detect predictive behavioral markers — prolonged session
                      length, dark-flow indicators, cognitive distortions — and provide culturally
                      responsive, trauma-informed psychoeducation in real time.
                    </LogicStep>
                    <LogicStep n="03" title="Workforce & co-design">
                      UNR CASAT/NRAP and BeHERE Nevada recruit and stipend 20 marginalized youth as
                      <em> AI Risk Mitigators, Moderators, and Navigators</em> — a newly codified
                      career pathway in behavioral health. Youth co-design the AI&rsquo;s voice and risk
                      logic under clinical supervision using a Community-Based Participatory
                      Research framework.
                    </LogicStep>
                    <LogicStep n="04" title="Warm handoff & safety">
                      When acute distress is detected, ECQO automatically escalates to peer
                      navigators, lived-experience moderators, community health workers, or
                      licensed clinicians through pre-built warm-handoff protocols with WestCare
                      Foundation, Intermountain Health, and 988.
                    </LogicStep>
                    <LogicStep n="05" title="Outcomes we measure">
                      Pre/post shifts in irrational gambling beliefs · adoption of restorative
                      coping skills · reductions in existential isolation · documented warm-handoff
                      counts · staff crisis-response burden and compassion fatigue.
                    </LogicStep>
                  </ol>
                </div>
              </Reveal>

              {/* Pilot B — ECQO-Care Responsible Gaming */}
              <Reveal delay={0.05}>
                <div className="rounded-2xl border border-white/10 bg-ink-800/40 p-10">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                    Pilot B · Responsible gaming &amp; safer-decision support
                  </p>
                  <h3 className="display mt-3 text-4xl md:text-5xl text-bone-50">
                    ECQO-Care Responsible Gaming{' '}
                    <span className="display-italic text-sky-400">for adults 18–35</span>
                  </h3>
                  <p className="mt-5 text-bone-100 leading-relaxed">
                    Submitted under the <strong>2026 MGM Responsible Gaming Pilot ($100,000)</strong>.
                    A 12-month prevention and early-intervention program for digitally native adults
                    (ages 18–35) — the demographic with the highest exposure to sports betting,
                    mobile wagering, and always-on gambling content, and the most likely to avoid
                    formal help due to stigma, privacy concerns, and fear of social or financial
                    consequences.
                  </p>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <Stat big="100" label="Adult participants in 12-month pilot" />
                    <Stat big="20" label="Peer / lived-experience Navigators &amp; Moderators" />
                    <Stat big="3-tier" label="Safety-governed support architecture" />
                  </div>

                  <h4 className="mt-10 text-[11px] uppercase tracking-[0.3em] text-sky-400">
                    Three-tier support architecture
                  </h4>
                  <ol className="mt-4 space-y-4 text-bone-100 leading-relaxed">
                    <LogicStep n="T1" title="24/7 digital prevention">
                      Always-available, stigma-free decision support. Short interventions that
                      reinforce cognitive-trap recognition, limit-setting, cooling-off strategies,
                      and financial reality checks — delivered in the mobile-first format where
                      gambling actually happens.
                    </LogicStep>
                    <LogicStep n="T2" title="Guided check-ins &amp; micro-pathways">
                      Brief onboarding and baseline screener. Optional weekly check-ins and tailored
                      micro-modules on coping skills, stress triggers, financial resilience, and
                      responsible-gaming planning.
                    </LogicStep>
                    <LogicStep n="T3" title="Warm handoff to human support">
                      When elevated risk signals appear, ECQO shifts to more restrictive responses
                      and initiates a warm-handoff workflow to peer navigation and local clinical
                      or community resources — moving participants from awareness to action
                      without shame or friction.
                    </LogicStep>
                  </ol>

                  <h4 className="mt-10 text-[11px] uppercase tracking-[0.3em] text-sky-400">
                    Why this works — the Missing Majority + Virtual Human effect
                  </h4>
                  <p className="mt-4 text-bone-100 leading-relaxed max-w-3xl">
                    Most adults experiencing serious gambling-related harm never reach traditional
                    treatment because stigma, privacy concerns, and real-world consequences keep
                    them out of visible support systems. Research on the <em>Virtual Human effect</em>{' '}
                    shows that individuals are more willing to disclose shame-inducing behaviors
                    to a conversational AI than to a human clinician. ECQO leverages that
                    disclosure threshold — while tiered safety logic ensures every elevated
                    signal becomes a trained human connection.
                  </p>
                </div>
              </Reveal>

              {/* Evaluation + Partners */}
              <Reveal delay={0.1}>
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                      Evaluation
                    </h4>
                    <p className="mt-4 text-bone-100 leading-relaxed">
                      Independent third-party clinical evaluation led by Dr. Jason Engel, Chief
                      Clinical Officer of WestCare Foundation. Workforce data analysis supported by
                      BeHERE Nevada and the Nevada System of Higher Education. Every AI prompt-response
                      pair is audited against proprietary safety guardrails before and during
                      deployment.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
                      Implementation partners
                    </h4>
                    <ul className="mt-4 text-sm text-bone-100 leading-relaxed space-y-1.5">
                      <li>UNR CASAT / Nevada Recovery and Prevention (NRAP)</li>
                      <li>BeHERE Nevada</li>
                      <li>Intermountain Health Community Initiatives</li>
                      <li>WestCare Foundation (clinical oversight + evaluator)</li>
                      <li>Native American Athletic Foundation (NAAF)</li>
                      <li>Rhythms Dance Academy</li>
                      <li>UNLV Institute of Financial Literacy &amp; Wellness</li>
                      <li>Valhallan Esports Training</li>
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR CORE DISCIPLINES — strategy overlay */}
      <section className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Across every program)</p>
            <h2 className="display mt-4 text-4xl md:text-5xl font-medium max-w-4xl">
              Four disciplines.{' '}
              <span className="display-italic text-sky-400">One mission.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: '01',
                title: 'Research',
                body: 'Clinical outcomes studies, community-based participatory research, and independent third-party evaluation of every pilot.',
              },
              {
                n: '02',
                title: 'Consulting',
                body: 'Trauma-sensitive transformation for schools, healthcare systems, athletic programs, and hospitality environments.',
              },
              {
                n: '03',
                title: 'Counseling',
                body: 'Free direct clinical services delivered by licensed or supervised providers, with crisis-response coordination.',
              },
              {
                n: '04',
                title: 'Workforce development',
                body: 'AI Risk Mitigator, Navigator, and Moderator career pathways — peer-led, lived-experience-driven, stipended.',
              },
            ].map((card, i) => (
              <Reveal key={card.n} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-800/40 p-8">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-sky-400">{card.n}</p>
                  <h3 className="display mt-5 text-3xl text-bone-50">{card.title}</h3>
                  <p className="mt-4 text-sm text-bone-200 leading-relaxed">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GRANT SUMMARY TABLE — compliance-grade transparency */}
      <section className="border-t border-white/5 bg-ink-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
              (Grant index — funded, active, pending)
            </p>
            <h2 className="display mt-4 text-4xl md:text-5xl font-medium">
              The funder ledger.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-[11px] uppercase tracking-[0.2em] text-sky-400 border-b border-white/10">
                    <th className="py-4 pr-6">Funder</th>
                    <th className="py-4 pr-6">Program</th>
                    <th className="py-4 pr-6">Status</th>
                    <th className="py-4 pr-6">Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-bone-100">
                  <GrantRow funder="Intermountain Health" program="WellXcel" status="Funded — 2024 & 2025" focus="Trauma-informed mental health, Clark County" />
                  <GrantRow funder="Vegas Golden Knights Foundation" program="WellXcel" status="Funded" focus="Youth + athlete mental wellness" />
                  <GrantRow funder="Clark County DCFS — Child Death Review" program="Digital Youth Outreach" status="Funded" focus="Peer-support Discord “GO MNTL”, youth death prevention" />
                  <GrantRow funder="Cox Communications Tech Grant" program="ECQO-Care infrastructure" status="Funded" focus="Digital prevention infrastructure" />
                  <GrantRow funder="United Way" program="Community wellness operations" status="Funded" focus="General operations" />
                  <GrantRow funder="NCPG Agility Grant" program="ECQO-PG (youth problem gambling)" status="Pending — $40,000" focus="Marginalized youth 13–26" />
                  <GrantRow funder="MGM Resorts Foundation" program="ECQO-Care Responsible Gaming" status="Pending — $100,000" focus="Adults 18–35 safer gaming" />
                  <GrantRow funder="NV Energy · Care Source · FHL AHEAD" program="Scale-up funding" status="Pending / Pursuing" focus="Infrastructure & scale" />
                  <GrantRow funder="SAGE Phase 0 · SBIR/STTR pathways" program="Technology validation" status="Roadmap" focus="Non-dilutive innovation support" />
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-xs text-bone-300 italic">
              All grant decisions are verified through funder award letters and documented in our
              financial standard operating procedures. See the <Link href="/financials" className="underline text-sky-400">Financials page</Link> for full policies.
            </p>
          </Reveal>
        </div>
      </section>

      <FAQ
        faqs={FAQS}
        title="What grantmakers ask about Programs"
        eyebrow="(Program AEO)"
      />

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <h2 className="display text-4xl md:text-5xl font-medium max-w-2xl">
              Build the next pilot with us.
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact?intent=grant"
                className="rounded-full bg-royal-600 hover:bg-royal-700 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50"
              >
                Grantmaker inquiry
              </Link>
              <Link
                href="/impact"
                className="rounded-full border border-white/15 hover:border-sky-400 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50"
              >
                See outcomes
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-900/50 p-5">
      <p className="display text-3xl md:text-4xl text-bone-50">{big}</p>
      <p className="mt-2 text-xs text-bone-200 leading-snug" dangerouslySetInnerHTML={{ __html: label }} />
    </div>
  );
}

function LogicStep({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="shrink-0 text-sky-400 font-mono text-sm mt-1 tracking-widest">{n}</span>
      <div>
        <p className="uppercase tracking-[0.2em] text-[11px] text-bone-300">{title}</p>
        <p className="mt-1 text-bone-100 leading-relaxed">{children}</p>
      </div>
    </li>
  );
}

function GrantRow({ funder, program, status, focus }: { funder: string; program: string; status: string; focus: string }) {
  return (
    <tr>
      <td className="py-4 pr-6 font-medium text-bone-50">{funder}</td>
      <td className="py-4 pr-6 text-bone-100">{program}</td>
      <td className="py-4 pr-6 text-sky-400">{status}</td>
      <td className="py-4 pr-6 text-bone-200">{focus}</td>
    </tr>
  );
}
