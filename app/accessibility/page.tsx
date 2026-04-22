import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Accessibility Statement',
  description:
    'Desert Rose Gives builds to WCAG 2.1 Level AA and welcomes specific feedback from users who depend on assistive technologies or accommodations.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <article className="bg-dr-white">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
        <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
          Legal
        </p>
        <h1 className="mb-5">Accessibility Statement</h1>
        <div className="prose text-dr-ink space-y-5">
          <h2>Our commitment</h2>
          <p>
            Desert Rose Gives is committed to making our website usable for
            the broadest possible audience, including people who use assistive
            technologies, people with visual or auditory differences, people
            with cognitive differences, and people using older or
            lower-bandwidth devices. Accessibility is not an afterthought for
            us; it is how we honor the Seen, Heard, and Understood framework
            across every surface we publish.
          </p>

          <h2>Standards we target</h2>
          <p>
            We build {SITE.url} to meet the Web Content Accessibility
            Guidelines (WCAG) 2.1 Level AA as our target standard. We design
            with the understanding that WCAG AA is a floor and not a ceiling,
            and we adopt higher standards where practical.
          </p>
          <p>Specifically, we aim to provide:</p>
          <ul>
            <li>
              Semantic HTML with accurate heading hierarchy and landmarks for
              screen readers
            </li>
            <li>Meaningful alt text on every photographic image</li>
            <li>Keyboard navigation across all interactive elements</li>
            <li>
              Visible focus indicators on buttons, links, and form fields
            </li>
            <li>
              Form labels that are always visible and associated with their
              inputs
            </li>
            <li>
              Error messages that describe what went wrong and how to fix it
            </li>
            <li>
              Color contrast at or above WCAG AA ratios for text and
              interactive elements
            </li>
            <li>
              Motion-reducing alternatives for any animations or
              scroll-triggered effects
            </li>
            <li>
              Captions or transcripts for video and audio content when
              published
            </li>
          </ul>

          <h2>Known limitations</h2>
          <p>
            We publish known limitations honestly rather than pretend they do
            not exist.
          </p>
          <ul>
            <li>
              Some photographic images are currently represented by labeled
              image slots during our staged rollout; each slot carries an alt
              text description of the scene. Actual stock or original
              photography replaces these slots as sources are approved.
            </li>
            <li>
              Some animated or scroll-triggered effects from our design system
              are disabled automatically when a visitor has &ldquo;prefers
              reduced motion&rdquo; enabled in their operating system. If you
              encounter a specific effect that does not respect this
              preference, please report it.
            </li>
            <li>
              We are building toward full captioning on all video content;
              older archived videos may lack captions while we catch up.
            </li>
          </ul>

          <h2>How to get help or request an accommodation</h2>
          <p>
            If any part of {SITE.url} is not accessible to you, or if you
            need our content in a different format, please contact us and we
            will respond promptly. We treat accessibility requests as a
            priority, not an edge case.
          </p>
          <ul>
            <li>
              Email:{' '}
              <a href={`mailto:${SITE.emails.accessibility}`}>
                {SITE.emails.accessibility}
              </a>
            </li>
            <li>
              Phone:{' '}
              <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}>
                {SITE.phone}
              </a>
            </li>
            <li>Mail: {SITE.address.formatted}</li>
          </ul>
          <p>
            Tell us what you were trying to do, what part of the site gave
            you trouble, and how you would like us to follow up. We will
            respond within five business days.
          </p>

          <h2>Continuous improvement</h2>
          <p>
            We conduct accessibility reviews before every major release and
            address issues as they are reported. We welcome specific feedback
            from users who depend on assistive technologies or
            accommodations. Your lived expertise is the most reliable audit we
            have.
          </p>
          <p className="italic text-sm text-dr-slate">
            This Accessibility Statement is published at launch and will be
            updated as the site evolves.
          </p>
        </div>
      </div>
    </article>
  );
}
