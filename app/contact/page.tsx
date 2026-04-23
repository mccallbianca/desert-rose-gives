import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import CrisisResources from '@/components/CrisisResources';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description:
    'Reach Desert Rose Gives. A real human on our team reads every message. Includes branded email addresses, mailing address, phone, and a prominent crisis resources block.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
              Contact
            </p>
            <h1 className="mb-5">We are glad you are here.</h1>
            <p className="text-lg text-dr-ink">
              This is the right place to reach Desert Rose Gives. A real human
              on our team reads every message.
            </p>
          </div>
          <ImageSlot
            src="/images/programs-header.jpg"
            alt="A Desert Rose Gives team member responding to community messages from a warm workspace."
            aspect="4/3"
            priority
          />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-12">
          <CrisisResources variant="contact" />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-8 grid gap-10 md:grid-cols-2">
          <div>
            <h2>Reach us directly</h2>
            <p className="text-dr-slate text-sm mt-2">
              All branded email addresses forward to Bianca D. McCall, Founder
              and President.
            </p>
            <dl className="mt-6 space-y-3 text-dr-ink text-sm">
              <div>
                <dt className="font-semibold">General inquiries</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.general}`}>
                    {SITE.emails.general}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Information requests</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.info}`}>
                    {SITE.emails.info}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Privacy and data requests</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.privacy}`}>
                    {SITE.emails.privacy}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Media and press inquiries</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.media}`}>
                    {SITE.emails.media}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Volunteer inquiries</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.volunteer}`}>
                    {SITE.emails.volunteer}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Grants and funder inquiries</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.grants}`}>
                    {SITE.emails.grants}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Accessibility questions</dt>
                <dd>
                  <a href={`mailto:${SITE.emails.accessibility}`}>
                    {SITE.emails.accessibility}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-8 text-dr-ink text-sm space-y-2">
              <p>
                <strong>Mailing address:</strong> {SITE.address.formatted}
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${SITE.phone.replace(/[^0-9+]/g, '')}`}>
                  {SITE.phone}
                </a>
              </p>
              <p>
                <strong>EIN:</strong> {SITE.ein} (Nevada 501(c)(3) nonprofit
                corporation)
              </p>
              <p>
                <strong>501(c)(3) Determination Letter:</strong> Available on
                request through{' '}
                <a href={`mailto:${SITE.emails.grants}`}>
                  {SITE.emails.grants}
                </a>{' '}
                or via the <Link href="/impact">Impact page</Link>.
              </p>
            </div>

            <ImageSlot
              src="/images/about-desert-rose.jpg"
              alt="A notepad, pen, and coffee cup on a table, a calm human-scale composition."
              aspect="16/9"
              className="mt-10"
            />
          </div>

          <div>
            <h2>Send a message</h2>
            <p className="text-dr-slate text-sm mt-2">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2>Reaching the board</h2>
            <p className="text-dr-ink mt-4">
              For matters requiring board or founder attention directly, use
              the contact form and select the appropriate interest area.
              Board correspondence is routed through the founder&rsquo;s
              office. For media inquiries, select Media in the dropdown and a
              team member will respond within three to five business days.
            </p>
          </div>
          <div>
            <h2>When we are reachable</h2>
            <p className="text-dr-ink mt-4">
              Desert Rose Gives operates on community hours, which vary by
              program and season. Email is the most reliable channel. If your
              question is time-sensitive, note that in your message and we
              will prioritize it.
            </p>
            <ImageSlot
              src="/images/impact-neighborhood.jpg"
              alt="A Southern Nevada landscape at warm morning or evening light."
              aspect="16/9"
              className="mt-6"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">We are glad you are here.</h2>
          <p className="text-dr-ink mb-6">
            Whether you are a neighbor, a peer, a partner, or a funder,
            Desert Rose Gives reads every message and responds to every one
            that invites a response.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="#top" className="btn-secondary">
              Send a message
            </Link>
            <Link href="/news" className="btn-secondary">
              Subscribe to the newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
