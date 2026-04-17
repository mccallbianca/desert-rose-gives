import Link from 'next/link';
import PageTransition from '@/components/PageTransition';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: 'Contact — Grantmakers, Volunteers, Partners',
  description:
    'Contact Desert Rose Gives. Grantmakers: grants@desertrosegives.org. General and volunteer: hello@desertrosegives.org. Executive: bdmccall@desertroselv.com · 702.209.0459. If you or someone you know is in crisis, call or text 988.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="bg-spotlight bg-grain">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">(Contact)</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display mt-8 text-[12vw] md:text-[104px] leading-[0.94] font-medium text-bone-50 max-w-6xl">
              Pick the door <span className="display-italic text-sky-400">that fits</span>.
              We&rsquo;ll meet you there.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.1}>
            <div className="space-y-6">
              <ContactCard
                label="Grantmakers & foundations"
                email="grants@desertrosegives.org"
                body="Logic models, outcomes reports, third-party evaluations, and financial SOPs on request."
              />
              <ContactCard
                label="Volunteers"
                email="hello@desertrosegives.org"
                body="Trauma-informed training provided. Peer-navigator career pathway for lived-experience volunteers."
              />
              <ContactCard
                label="Research & clinical partners"
                email="hello@desertrosegives.org"
                body="Co-design, IRB-ready pilots, workforce integration, published outcomes."
              />
              <ContactCard
                label="Executive"
                email="bdmccall@desertroselv.com"
                phone="+1 702 209 0459"
                body="For media, board, high-level partnership, and speaking inquiries."
              />
              <div className="rounded-xl border border-sky-400/40 bg-sky-900/10 p-6">
                <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">Crisis</p>
                <p className="mt-3 text-bone-100 leading-relaxed">
                  If you or someone you know is in crisis, please call or text{' '}
                  <a href="tel:988" className="text-sky-400 underline underline-offset-4">
                    988
                  </a>{' '}
                  — the Suicide &amp; Crisis Lifeline, 24/7, free and confidential.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-white/5">
        <Reveal>
          <p className="text-sm text-bone-300 leading-relaxed max-w-3xl">
            Desert Rose Gives respects your privacy. Submissions route only to our executive
            leadership and the named intake inbox. We do not sell, rent, or share contact
            information. Read our <Link href="/financials" className="text-sky-400 underline underline-offset-4">
              donor and data protections
            </Link>{' '}
            inside the published Financial SOPs.
          </p>
        </Reveal>
      </section>
    </PageTransition>
  );
}

function ContactCard({
  label,
  email,
  phone,
  body,
}: {
  label: string;
  email: string;
  phone?: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink-800/40 p-6">
      <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400">{label}</p>
      <p className="mt-3">
        <a href={`mailto:${email}`} className="text-bone-50 underline underline-offset-4 hover:text-sky-400">
          {email}
        </a>
      </p>
      {phone && (
        <p className="mt-1">
          <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-bone-200 hover:text-sky-400">
            {phone}
          </a>
        </p>
      )}
      <p className="mt-3 text-sm text-bone-200 leading-relaxed">{body}</p>
    </div>
  );
}
