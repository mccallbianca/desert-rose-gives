import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-white/5 bg-ink-900">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
            <span className="display text-2xl font-semibold tracking-displayish">
              Desert Rose <span className="display-italic text-sky-400">gives</span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm text-bone-200 leading-relaxed">
            A 501(c)(3) community wellness nonprofit delivering trauma-informed
            behavioral health, suicide prevention, and existential wellness
            programs to underserved communities.
          </p>
          <p className="mt-4 text-xs text-bone-300">
            Federal grants · Volunteer operations · SAMHSA-aligned best practices
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-sky-400">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-bone-200">
            <li><Link href="/about" className="hover:text-sky-400">About</Link></li>
            <li><Link href="/programs" className="hover:text-sky-400">Programs</Link></li>
            <li><Link href="/impact" className="hover:text-sky-400">Impact</Link></li>
            <li><Link href="/financials" className="hover:text-sky-400">Financials</Link></li>
            <li><Link href="/contact" className="hover:text-sky-400">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-sky-400">Support</h3>
          <ul className="mt-4 space-y-2 text-sm text-bone-200">
            <li><Link href="/donate" className="hover:text-sky-400">Donate</Link></li>
            <li><Link href="/contact?intent=volunteer" className="hover:text-sky-400">Volunteer</Link></li>
            <li><Link href="/contact?intent=partner" className="hover:text-sky-400">Partner</Link></li>
            <li><Link href="/contact?intent=grant" className="hover:text-sky-400">Grant inquiries</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-[11px] uppercase tracking-[0.2em] text-sky-400">Crisis</h3>
          <p className="mt-4 text-sm text-bone-200 leading-relaxed">
            If you or someone you know is in crisis, call or text{' '}
            <a href="tel:988" className="text-sky-400 underline underline-offset-4">988</a>{' '}
            for the Suicide &amp; Crisis Lifeline — available 24/7, free and confidential.
          </p>
        </div>
      </div>

      <div className="hairline">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-bone-300">
          <p>© {year} Desert Rose Gives · 501(c)(3) · EIN on request</p>
          <p className="italic">Built for humans, engines, and answer machines.</p>
        </div>
      </div>
    </footer>
  );
}
