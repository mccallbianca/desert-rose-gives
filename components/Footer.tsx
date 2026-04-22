import Link from 'next/link';
import Logo from './Logo';
import NewsletterForm from './NewsletterForm';
import { NAV, SITE } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 bg-dr-cream">
      <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo width={200} />
          <p className="mt-5 text-sm text-dr-ink leading-relaxed">
            {SITE.tagline}
          </p>
          <p className="mt-4 text-xs text-dr-slate">
            {SITE.legalName}. EIN: {SITE.ein}.
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs uppercase tracking-wider text-dr-royal font-semibold">
            Quick links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-dr-ink">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-dr-royal">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/accessibility" className="hover:text-dr-royal">
                Accessibility statement
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-dr-royal">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5">
          <h3 className="text-xs uppercase tracking-wider text-dr-royal font-semibold">
            Stay close to the work
          </h3>
          <p className="mt-3 text-sm text-dr-ink">
            Community updates, program news, and invitations, sent only when we
            have something real to share.
          </p>
          <div className="mt-4 max-w-md">
            <NewsletterForm variant="footer" />
          </div>
          <div className="mt-6 flex gap-4 text-xs text-dr-slate">
            <span>Instagram</span>
            <span>LinkedIn</span>
            <span>Facebook</span>
            <span>YouTube</span>
          </div>
          <p className="mt-1 text-xs text-dr-slate italic">
            Social channels launch with program news.
          </p>
        </div>
      </div>

      <div className="hairline">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-6 grid gap-3 text-xs text-dr-slate md:grid-cols-2">
          <div>
            <p>
              Desert Rose Gives is a Nevada 501(c)(3) nonprofit corporation.
              EIN: {SITE.ein}.
            </p>
            <p className="mt-1">
              Copyright © {year} Desert Rose Gives. All rights reserved.
            </p>
          </div>
          <div className="md:text-right">
            <p>
              Site accessibility questions:{' '}
              <a
                href={`mailto:${SITE.emails.accessibility}`}
                className="underline"
              >
                {SITE.emails.accessibility}
              </a>
            </p>
            <p className="mt-1 italic">
              Product and service names mentioned on this site are trademarks
              of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
