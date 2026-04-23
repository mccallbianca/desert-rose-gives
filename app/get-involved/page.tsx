import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import DonateButton from '@/components/DonateButton';
import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Get Involved',
  description:
    'Systemic change in Nevada requires a coordinated effort from every corner of our community. Volunteer, donate, partner, or offer in-kind support.',
  alternates: { canonical: '/get-involved' },
};

export default function GetInvolvedPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20">
          <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
            Get Involved
          </p>
          <h1 className="mb-5">Take an important first step with us.</h1>
          <p className="text-lg text-dr-ink max-w-3xl">
            Systemic change in Nevada&rsquo;s behavioral health landscape
            requires a coordinated effort from every corner of our community.
            We invite you to contribute your time, resources, and expertise to
            help us achieve our mission.
          </p>
        </div>
      </section>

      {/* Volunteer */}
      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2>Volunteer</h2>
            <p className="text-dr-ink mt-4">
              Desert Rose Gives offers diverse opportunities for those looking
              to impact the mental resiliency of Nevada&rsquo;s marginalized
              youth. We are looking for individuals willing to support our
              digital outreach initiatives, such as engaging with our
              peer-support channels or assisting with youth focus groups.
              Volunteers with backgrounds in behavioral health, digital media
              strategy, or nonprofit management can provide vital technical
              assistance to help us scale our culturally responsive resources
              and education initiatives.
            </p>
            <p className="text-dr-ink mt-4">
              If you are a student, athlete, or a professional in a
              high-stress, performance-driven workforce, your unique
              perspective can help us refine our wellness and performance
              programming. By volunteering, you become an active part of our
              healing-centered approach, assisting in the development of
              toolkits and content that make complex mental health topics
              digestible for youth and caregivers.
            </p>
            <p className="text-dr-ink mt-4">
              Whether you are supporting our outreach in under-resourced zip
              codes or assisting with our regional event coordination, your
              contribution ensures our frameworks remain grounded in the
              authentic histories and rhythms of the communities we serve.
            </p>
            <div className="mt-6">
              <Link href="/contact?intent=volunteer" className="btn-primary">
                Volunteer with us
              </Link>
            </div>
          </div>
          <ImageSlot
            alt="Volunteers at work during a Desert Rose Gives community event in Southern Nevada."
            aspect="4/3"
          />
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="bg-dr-cream scroll-mt-24">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
          <ImageSlot
            src="/images/impact-opening.jpg"
            alt="Community members gathered together in a Desert Rose Gives program space."
            aspect="4/3"
          />
          <div>
            <h2>Donate</h2>
            <p className="text-dr-ink mt-4">
              Your financial contributions directly fund prevention,
              education, training, consultation, and research programs that
              help bridge Nevada&rsquo;s severe gaps in behavioral health
              access. Donations support WellXcel, which delivers
              trauma-informed prevention education, consultation, custom
              trainings, and community support, along with warm handoffs to
              licensed providers and established crisis-line partners when
              participants need direct clinical care. Donations also support
              Mind Over Media, a youth-led digital prevention campaign aligned
              with the Nevada Child Death Review framework, and the
              independent community research behind the ECQO-Care Pilot.
            </p>
            <p className="text-dr-ink mt-4 font-semibold">
              Desert Rose Gives donor funds are used solely for Desert Rose
              Gives programs, research, and community workforce development;
              they are not used to fund the ECQO Holdings platform or any
              other for-profit product.
            </p>
            <p className="text-dr-ink mt-4">
              Every dollar invested helps us turn community data into the
              dignity and systemic change our region deserves.
            </p>

            <div className="mt-6 card-surface">
              <h3 className="text-base">
                Tax-deductibility and donor acknowledgment.
              </h3>
              <p className="text-sm text-dr-ink mt-2">
                Desert Rose Gives is a Nevada 501(c)(3) nonprofit corporation,
                EIN {SITE.ein}. Your contribution is tax-deductible to the
                extent allowed by law. No goods or services were provided in
                exchange for this contribution. Donors receive an email
                acknowledgment from Desert Rose Gives following any gift, and
                donors of $250 or more receive an additional itemized
                acknowledgment letter consistent with IRS requirements. Please
                retain the acknowledgment for your tax records.
              </p>
              <h3 className="text-base mt-5">Donation processing.</h3>
              <p className="text-sm text-dr-ink mt-2">
                Donations are processed securely through PayPal. Desert Rose
                Gives uses PayPal for nonprofit donation processing and Intuit
                QuickBooks for accounting. You do not need a PayPal account to
                donate; PayPal accepts major credit and debit cards. Our
                501(c)(3) Determination Letter is available upon request at{' '}
                <a
                  href={`mailto:${SITE.emails.grants}`}
                  className="underline"
                >
                  {SITE.emails.grants}
                </a>
                .
              </p>
            </div>

            <div className="mt-6">
              <DonateButton label="Donate via PayPal" />
            </div>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="bg-dr-white scroll-mt-24">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2>Partner</h2>
            <p className="text-dr-ink mt-4">
              Strategic alignment is the foundation of our systemic impact in
              Nevada. Desert Rose Gives partners with academic, clinical, and
              community institutions, including the University of Nevada,
              Reno and Intermountain Health, to address the rising tide of
              Existential Isolation and behavioral health disparities in Clark
              County. We seek partnerships with organizations that share our
              commitment to ultra-culturally responsive frameworks, data-driven
              best practices, and workforce development.
            </p>
            <p className="text-dr-ink mt-4">
              Collaborating as a partner means more than a generic
              endorsement; it involves active participation in developing and
              deploying programming for sports clubs, academia, and
              performance-driven workforces. Whether your organization focuses
              on financial literacy, athletic mentorship, or opioid abatement,
              we work to align our research and data storytelling with your
              unique mission to drive measurable outcomes. By partnering with
              us, you help create a resilient regional landscape where
              systemic equity is a reality and every individual is
              authentically Seen, Heard, and Understood.
            </p>
            <div className="mt-6">
              <Link href="/contact?intent=partner" className="btn-primary">
                Start a partnership conversation
              </Link>
            </div>
          </div>
          <ImageSlot
            alt="Partner organization representatives working together around a shared table."
            aspect="4/3"
          />
        </div>
      </section>

      {/* In-kind */}
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
          <ImageSlot
            src="/images/getinvolved-inkind.jpg"
            alt="A community space being set up for a Desert Rose Gives session, with chairs, materials, and refreshments."
            aspect="4/3"
          />
          <div>
            <h2>In-kind giving</h2>
            <p className="text-dr-ink mt-4">
              Beyond monetary donations, Desert Rose Gives welcomes in-kind
              support that enhances our operational capacity and community
              outreach. We are currently seeking technical equipment to
              support our educational livestream workshops, as well as digital
              assets or software subscriptions that can aid in our AI-driven
              content production and data collection efforts. Professional
              services, including legal assistance, marketing, and strategic
              planning, provide the necessary framework to maintain our
              501(c)(3) governance and regional accountability.
            </p>
            <p className="text-dr-ink mt-4">
              We also accept gift card stipends that are distributed directly
              to our 70 youth participants to incentivize engagement in focus
              groups and campaign activities, ensuring equitable participation
              for those in low-income areas. Providing space for in-person
              community support or donating media time for our public
              awareness campaigns helps us ensure our message reaches those in
              under-resourced zip codes. Your in-kind contributions are vital
              to building a hyper-local wellness network that remains
              accessible and adaptable to all.
            </p>
            <div className="mt-6">
              <Link href="/contact?intent=other" className="btn-primary">
                Offer in-kind support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">Take an important first step with us today.</h2>
          <p className="text-dr-ink mb-6">
            The work of healing a region starts with a single step. Choose
            your path today and help us drive the systemic change Nevada
            needs.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact?intent=volunteer" className="btn-secondary">
              Volunteer
            </Link>
            <DonateButton />
            <Link href="/contact?intent=partner" className="btn-secondary">
              Partner
            </Link>
            <Link href="/contact?intent=other" className="btn-secondary">
              Offer in-kind
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
