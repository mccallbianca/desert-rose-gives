import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Financial Transparency — Policies, SOPs, Grant Index',
  description:
    'Desert Rose Gives publishes its Financial Standard Operating Procedures in full. Our financial policies, grant reporting practices, donor protections, and accountability framework are open to grantmakers, donors, and peer nonprofits. See the live DR Gives Financial SOPs and our grant ledger on this page.',
  alternates: { canonical: '/financials' },
};

const SOPS_URL = 'https://mccallbianca.github.io/DR-Gives-Financial-SOPs-/';

const FAQS = [
  {
    question: 'Where can I read the Desert Rose Gives Financial SOPs?',
    answer:
      'Our full Financial Standard Operating Procedures are published openly at mccallbianca.github.io/DR-Gives-Financial-SOPs-. The document covers grant acceptance and acknowledgment, restricted vs. unrestricted fund handling, donor privacy, conflict-of-interest procedures, signing authority, procurement, reimbursement, reporting cadence, audit readiness, and crisis-event financial protocols. Grantmakers conducting due diligence are welcome to request additional documentation at grants@desertrosegives.org.',
  },
  {
    question: 'Is Desert Rose Gives a registered 501(c)(3) nonprofit?',
    answer:
      'Yes. Desert Rose Gives is a registered 501(c)(3) tax-exempt public charity. Donations are tax-deductible to the fullest extent permitted by law. EIN, determination letter, state charitable registration, and most recent Form 990 (when filed) are available on request for grant reviewers and donor advisors.',
  },
  {
    question: 'How do you handle restricted grant funds?',
    answer:
      'Restricted grant funds are tracked in dedicated class accounts within our accounting system (QuickBooks) with a one-to-one mapping to the funder\'s award letter, scope of work, and reporting requirements. No restricted funds are commingled with general operating accounts. Every drawdown requires dual-review signoff and is reconciled monthly. Outcomes reports are delivered according to the funder\'s specified cadence (typically quarterly or biannual) and always use the measurement framework the funder required at intake.',
  },
  {
    question: 'How do donors know their money reaches the mission?',
    answer:
      'Our operating model keeps overhead lean by design. Executive leadership is founder-funded through the startup phase; the majority of unrestricted donations flow directly into clinical services (therapy sessions, case management), workforce stipends (peer navigators, youth co-designers), and prevention programming. Donors receive a tax receipt within 48 hours and are offered optional quarterly impact emails. We do not sell, rent, or share donor contact information — see our donor privacy standards in the published SOPs.',
  },
  {
    question: 'What happens if a grant is unused or a program is discontinued?',
    answer:
      'Per our SOPs, unused restricted funds are returned to the funder according to the funder\'s award-letter provisions, unless a written modification is approved. Discontinued programs trigger a close-out report, final financial reconciliation, and documented handoff of ongoing participants to appropriate partner services — participant safety is prioritized above administrative convenience.',
  },
];

export default function FinancialsPage() {
  return (
    <PageTransition>
      <section className="bg-spotlight bg-grain">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
              (Financial transparency)
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[12vw] md:text-[104px] leading-[0.94] font-medium text-bone-50 max-w-6xl">
              Our books are open.
              <br />
              <span className="display-italic text-sky-400">On purpose.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-3xl text-lg md:text-xl text-bone-200 leading-relaxed">
              Trust is earned through paperwork, not promises. Desert Rose Gives publishes
              its Financial Standard Operating Procedures in full so grantmakers, donors,
              and peer nonprofits can see exactly how dollars are accepted, tracked,
              restricted, reported, and ultimately converted into direct clinical service.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={SOPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-royal-600 hover:bg-royal-700 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50 transition-colors"
              >
                Read the Financial SOPs
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
              <Link
                href="/contact?intent=grant"
                className="inline-flex items-center gap-3 rounded-full border border-white/15 hover:border-sky-400 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50 transition-colors"
              >
                Request audit package
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Pillars)</p>
          <h2 className="display mt-4 text-4xl md:text-5xl font-medium max-w-4xl">
            Five commitments that govern every dollar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <Pillar n="01" title="Dual-review signoff" body="Every expenditure above threshold requires a second authorized signer. No sole-signer transactions. Ever." />
          <Pillar n="02" title="Restricted fund segregation" body="Grant funds live in dedicated class accounts mapped one-to-one to the funder&rsquo;s award letter and scope." />
          <Pillar n="03" title="Quarterly reporting" body="Funders receive outcomes reports on the cadence they specified at intake — using the framework they required." />
          <Pillar n="04" title="Donor privacy" body="We never sell, rent, or share donor contact information. Opt-in communication only." />
          <Pillar n="05" title="Participant safety first" body="Financial reconciliation always follows participant safety. Crisis response is never delayed for paperwork." />
        </div>
      </section>

      {/* WHAT THE SOPS COVER */}
      <section className="border-y border-white/5 bg-ink-900/40">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
              (What&rsquo;s in the SOPs)
            </p>
            <h2 className="display mt-4 text-4xl md:text-5xl font-medium">
              Every policy, published.
            </h2>
            <p className="mt-8 text-bone-200 leading-relaxed max-w-md">
              Our published SOPs document is the single source of truth for how DR Gives handles
              money. It is updated with every material change, version-controlled, and open to
              the public. Funders conducting due diligence can proceed straight from the document
              — no NDA required for our standard policies.
            </p>
            <a
              href={SOPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-wide text-sky-400 hover:text-bone-50"
            >
              Open the live SOPs
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </Reveal>

          <Reveal className="md:col-span-7" delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-2 text-sm text-bone-100">
              {[
                'Grant acceptance and acknowledgment',
                'Restricted vs. unrestricted fund handling',
                'Signing authority and dual-review thresholds',
                'Procurement and vendor selection',
                'Reimbursement and receipt standards',
                'Reporting cadence by funder type',
                'Audit readiness and retention schedule',
                'Donor privacy and communications',
                'Conflict of interest procedures',
                'Crisis-event financial protocols',
                'Participant payment and stipend handling',
                'Close-out procedures for completed programs',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-ink-800/40 p-4">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* LEGAL & COMPLIANCE */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Legal &amp; compliance)</p>
          <h2 className="display mt-4 text-4xl md:text-5xl font-medium max-w-4xl">
            Registered. Reviewed. On the record.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <ComplianceCard label="Federal status" body="501(c)(3) tax-exempt public charity" />
            <ComplianceCard label="EIN" body="On request · included in all grant submissions" />
            <ComplianceCard label="State registration" body="Nevada charitable registration current" />
            <ComplianceCard label="IRS Form 990" body="Filed annually · public after filing" />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-sm text-bone-300 leading-relaxed max-w-3xl">
            Desert Rose Gives is not a legal or financial advisor. Donors and grantmakers should
            consult their own counsel on the tax, legal, and financial implications of specific
            contributions. Our team is happy to coordinate with your advisors directly.
          </p>
        </Reveal>
      </section>

      <FAQ faqs={FAQS} title="Financial accountability — the questions" eyebrow="(Financial AEO)" />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <h2 className="display text-3xl md:text-5xl font-medium max-w-2xl">
              Questions our SOPs don&rsquo;t answer? Ask.
            </h2>
            <Link href="/contact" className="rounded-full bg-royal-600 hover:bg-royal-700 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50">
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function Pillar({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
      <p className="text-[11px] tracking-[0.2em] uppercase text-sky-400">{n}</p>
      <h3 className="display mt-5 text-xl text-bone-50">{title}</h3>
      <p className="mt-3 text-sm text-bone-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
}

function ComplianceCard({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
      <p className="text-[11px] tracking-[0.2em] uppercase text-sky-400">{label}</p>
      <p className="mt-4 text-base text-bone-50 leading-snug">{body}</p>
    </div>
  );
}
