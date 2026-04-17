import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import DonateForm from '@/components/DonateForm';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'Donate — Fund trauma-informed community wellness',
  description:
    'Your tax-deductible gift to Desert Rose Gives funds free therapy, counseling, suicide prevention, problem-gambling prevention, and community wellness programs for youth and adults in historically underserved Nevada communities. 501(c)(3) · Stripe secure checkout · Financial SOPs published.',
  alternates: { canonical: '/donate' },
};

const FAQS = [
  {
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes. Desert Rose Gives is a registered 501(c)(3) tax-exempt public charity. Your gift is tax-deductible to the fullest extent permitted by law. You will receive an electronic tax receipt via email within 48 hours.',
  },
  {
    question: 'What will my gift actually fund?',
    answer:
      'Unrestricted gifts flow directly into three places: (1) free therapy and counseling sessions for WellXcel participants — billed at $120/session and $60/hour; (2) stipends for peer navigators, moderators, and youth co-designers; (3) clinical workshops and trauma-sensitive training for partner schools and healthcare systems. Every dollar is tracked through our published Financial SOPs. Restricted gifts are possible — contact grants@desertrosegives.org to designate.',
  },
  {
    question: 'Can I give monthly?',
    answer:
      'Yes. Monthly giving is the single most useful thing a donor can do — it lets us staff consistently, commit to participants across multiple sessions, and apply for matching grants. Toggle to "Monthly" above, pick any amount $5 or higher, and checkout is subscription-based through Stripe. You can pause or cancel anytime via the email receipt.',
  },
  {
    question: 'How do I give in a way that is not a credit card?',
    answer:
      'For checks, wire transfers, donor-advised fund grants, stock gifts, or in-kind donations, please email hello@desertrosegives.org. For larger corporate or foundation partnerships, email grants@desertrosegives.org.',
  },
];

export default function DonatePage() {
  return (
    <PageTransition>
      <section className="bg-spotlight bg-grain">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Donate)</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[12vw] md:text-[100px] leading-[0.95] font-medium text-bone-50 max-w-5xl">
              Every dollar becomes a <span className="display-italic text-sky-400">session</span>,
              a <span className="display-italic text-sky-400">stipend</span>,
              or a <span className="display-italic text-sky-400">safe handoff</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-16 md:grid-cols-12">
          {/* Form */}
          <Reveal className="md:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-ink-900/50 p-8 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">Secure checkout · Stripe</p>
              <h2 className="display mt-3 text-3xl md:text-4xl font-medium">
                Give today.
              </h2>
              <div className="mt-8">
                <DonateForm />
              </div>
            </div>
          </Reveal>

          {/* Impact conversions */}
          <Reveal className="md:col-span-5" delay={0.1}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">
              (What your gift converts to)
            </p>
            <h2 className="display mt-4 text-4xl font-medium">
              The math behind the mission.
            </h2>

            <ul className="mt-10 space-y-6">
              <ImpactLine
                amount="$60"
                title="One hour of counseling support"
                body="A full hour of trauma-informed counseling, consultation, or community workshop time for a partner organization."
              />
              <ImpactLine
                amount="$120"
                title="One free therapy session"
                body="One free licensed therapy session for a WellXcel participant — fully subsidized, with no financial barrier to the family."
              />
              <ImpactLine
                amount="$500"
                title="A month of peer-navigator stipend"
                body="One month of stipend for a youth AI Risk Mitigator or peer Navigator — a workforce pathway into behavioral health."
              />
              <ImpactLine
                amount="$3,000"
                title="Full clinical workshop series"
                body="A complete trauma-sensitive clinical workshop for a partner school or healthcare team — the same format delivered to 38 professionals in our 2025 cycle."
              />
            </ul>

            <div className="mt-10 rounded-xl border border-white/10 bg-ink-800/40 p-6 text-sm text-bone-200 leading-relaxed">
              <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">Non-card giving</p>
              <p className="mt-3">
                For check, wire, DAF, stock, or in-kind gifts:{' '}
                <a className="text-sky-400 underline underline-offset-4" href="mailto:hello@desertrosegives.org">
                  hello@desertrosegives.org
                </a>
              </p>
              <p className="mt-2">
                Corporate or foundation partnerships:{' '}
                <a className="text-sky-400 underline underline-offset-4" href="mailto:grants@desertrosegives.org">
                  grants@desertrosegives.org
                </a>
              </p>
            </div>

            <p className="mt-6 text-xs text-bone-300">
              Desert Rose Gives is a 501(c)(3) public charity. EIN available on request.{' '}
              <Link href="/financials" className="text-sky-400 underline underline-offset-4">
                See our financial policies.
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <FAQ faqs={FAQS} title="Donor questions, answered" eyebrow="(Donor AEO)" />
    </PageTransition>
  );
}

function ImpactLine({ amount, title, body }: { amount: string; title: string; body: string }) {
  return (
    <li className="flex gap-6 items-start">
      <span className="shrink-0 display text-3xl text-sky-400 tabular-nums w-20">{amount}</span>
      <div>
        <p className="text-base font-medium text-bone-50">{title}</p>
        <p className="mt-1.5 text-sm text-bone-200 leading-relaxed">{body}</p>
      </div>
    </li>
  );
}
