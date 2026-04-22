import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Desert Rose Gives Privacy Policy. What we collect, how we use it, who we share it with, how long we keep it, your rights, and how to contact us.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <article className="bg-dr-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
          Legal
        </p>
        <h1 className="mb-5">Privacy Policy</h1>
        <p className="text-sm text-dr-slate mb-8">
          Effective date: at launch. This policy has been drafted for Nevada
          attorney review. It is not legal advice.
        </p>
        <div className="prose text-dr-ink space-y-5">
          <p>
            Desert Rose Gives is a Nevada 501(c)(3) nonprofit corporation (EIN{' '}
            {SITE.ein}). This Privacy Policy explains what information we
            collect when you visit {SITE.url}, subscribe to our newsletter,
            submit our contact form, donate, or otherwise interact with us
            online. This policy applies to our website and online services
            only. Offline program participation is governed by program-specific
            consent forms.
          </p>
          <p>
            We do not sell personal information. We do not share personal
            information with advertisers. We use a minimum of third-party
            services to operate the site, and we are transparent about what
            those services are below.
          </p>

          <h2>What information we collect</h2>
          <p>
            When you submit the contact form, we collect: your first name,
            last name, email address, your interest area, your message, and
            (optionally) your organization or community affiliation.
          </p>
          <p>
            When you subscribe to the newsletter, we collect your first name
            and email address.
          </p>
          <p>
            When you make a donation, our payment processor (PayPal) collects
            your name, email, billing address, and payment details. We receive
            your name, email, gift amount, and gift date from PayPal. We do
            not receive or store your full payment card number. Desert Rose
            Gives uses PayPal and Intuit QuickBooks for nonprofit donation
            processing and accounting.
          </p>
          <p>
            When you visit the website, our hosting and analytics tools log
            your IP address (truncated or anonymized), your browser type, the
            pages you visit, and how you found us. We use privacy-respecting
            analytics that do not track you across other sites.
          </p>

          <h2>How we use information</h2>
          <p>
            We use the information you provide to respond to your message,
            send you newsletter content you asked for, process and acknowledge
            your donation (as required by IRS rules for 501(c)(3)
            organizations), and understand how people use our site so we can
            improve it.
          </p>
          <p>
            We do not use your information for advertising. We do not profile
            you. We do not sell your information to anyone.
          </p>

          <h2>Who we share information with</h2>
          <p>
            We share information only with service providers who help us
            operate the site, and only as needed for them to provide their
            service.
          </p>
          <ul>
            <li>
              <strong>PayPal</strong> (payment processing): handles donation
              transactions; governed by PayPal&rsquo;s Privacy Policy.
            </li>
            <li>
              <strong>Intuit QuickBooks</strong> (nonprofit accounting):
              receives donation records for bookkeeping; governed by
              Intuit&rsquo;s Privacy Policy.
            </li>
            <li>
              <strong>Email service provider</strong> (newsletter): delivers
              newsletter content and manages unsubscribes. Vendor selection
              pending finalization.
            </li>
            <li>
              <strong>Analytics provider</strong> (website analytics): provides
              aggregate, privacy-respecting visitor metrics. Vendor selection
              pending finalization.
            </li>
            <li>
              <strong>Vercel</strong> (website hosting): hosts the site and
              logs basic technical data.
            </li>
            <li>
              <strong>Cloudflare</strong> (email forwarding): routes inbound
              email from our branded addresses.
            </li>
          </ul>
          <p>
            We may also share information if required by law, to protect the
            safety of a person, or in the course of a mandatory report under
            Nevada law (see Children and minors).
          </p>

          <h2>How long we keep information</h2>
          <p>
            We keep contact form submissions for as long as needed to respond
            and for up to two years for reference. We keep newsletter
            subscribers&rsquo; information until they unsubscribe. We keep
            donation records for at least seven years, consistent with IRS
            and Nevada charitable solicitation recordkeeping requirements.
          </p>

          <h2>Children and minors</h2>
          <p>
            Some Desert Rose Gives programs serve youth ages 13 to 26. Minors
            (participants under 18) participate in programs only with written
            consent from a parent or guardian. The website itself is not
            directed at children under 13 and we do not knowingly collect
            personal information from children under 13 online.
          </p>
          <p>
            Some members of our team and some of our volunteers are mandatory
            reporters under Nevada law (NRS 432B). If information submitted
            through the website or provided in programs indicates suspected
            child abuse, elder abuse, or imminent harm, Desert Rose Gives will
            follow Nevada reporting requirements.
          </p>

          <h2>Your rights and choices</h2>
          <p>
            You may request a copy of the information we have about you, ask
            us to correct it, or ask us to delete it. Contact us using the
            information in the How to contact us section below. We will
            respond within 30 days.
          </p>
          <p>
            You may unsubscribe from the newsletter at any time using the link
            in any newsletter email.
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            We use a minimum of cookies needed to operate the site. Donations
            processed through PayPal rely on session cookies set by PayPal to
            complete the transaction. Analytics cookies are set only by our
            privacy-respecting analytics provider. We do not use advertising
            cookies or cross-site tracking cookies.
          </p>
          <p>
            You can control cookies in your browser settings. Blocking all
            cookies may prevent donations from completing.
          </p>

          <h2>Security</h2>
          <p>
            We use industry-standard security practices, including encrypted
            connections (HTTPS) across the site, encryption of data in transit
            with our service providers, and access controls on our records.
            No online system is perfectly secure; if you become aware of a
            security issue, please let us know at the contact information
            below.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy as our practices evolve or as the law
            changes. When we update it, we will revise the effective date at
            the top of this page. Material changes will be announced via the
            newsletter and on the homepage.
          </p>

          <h2>How to contact us</h2>
          <p>
            For privacy questions, requests about your information, or to
            report a security issue, contact us at{' '}
            <a href={`mailto:${SITE.emails.privacy}`}>{SITE.emails.privacy}</a>{' '}
            or by mail at {SITE.address.formatted}.
          </p>
          <p className="italic text-sm text-dr-slate">
            This Privacy Policy has been drafted for Nevada attorney review
            before the site goes live. It is not legal advice.
          </p>
        </div>
      </div>
    </article>
  );
}
