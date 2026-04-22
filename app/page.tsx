import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import DonateButton from '@/components/DonateButton';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Home',
  description:
    'Desert Rose Gives is a Nevada 501(c)(3) nonprofit building prevention, healing, and leadership alongside Southern Nevada communities.',
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-20 md:py-28 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
              Desert Rose Gives
            </p>
            <h1 className="mb-5">Prevention, Healing, and Leadership.</h1>
            <p className="text-lg text-dr-ink max-w-xl">
              Desert Rose Gives transforms through development and data
              storytelling, ensuring diverse experiences are Seen, Heard, and
              Understood to drive systemic change.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <DonateButton />
              <Link href="/get-involved" className="btn-secondary">
                Volunteer with us
              </Link>
            </div>
          </div>
          <ImageSlot
            alt="Community members of different ages gathered together outdoors in Southern Nevada during a Desert Rose Gives event."
            source="Original preferred, Nappy.co stock alternative"
            aspect="4/3"
          />
        </div>
      </section>

      {/* ABOUT SYNTHESIS */}
      <section className="bg-dr-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-20 text-center">
          <p className="text-lg md:text-xl leading-relaxed text-dr-ink">
            Desert Rose Gives is a Nevada nonprofit founded by Bianca D.
            McCall, LMFT, and a board of community leaders who are passionate
            about public health, community service, and mobilized leadership.
            We focus on upstream prevention, and we build our programs around
            the people most often left out of the planning.
          </p>
          <div className="mt-6">
            <Link href="/about" className="text-dr-royal underline">
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20">
          <h2 className="text-center mb-10">Our work</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <article className="card-surface">
              <ImageSlot
                alt="Young people in conversation at a community center in Southern Nevada."
                source="Nappy.co"
                aspect="16/9"
                className="mb-4"
              />
              <h3>WellXcel</h3>
              <p className="text-dr-ink mb-4">
                WellXcel is a best-practice wellness and performance education
                model, developed by a licensed clinician, that addresses the
                social determinants of health across high-pressure ecosystems
                through culturally responsive training, consultation, and
                community support.
              </p>
              <Link
                href="/programs/wellxcel"
                className="text-dr-royal underline"
              >
                Learn about WellXcel
              </Link>
            </article>
            <article className="card-surface">
              <ImageSlot
                alt="Community partners and organizers meeting around a table in a shared workspace."
                source="Stock from AllGo or Unsplash"
                aspect="16/9"
                className="mb-4"
              />
              <h3>Community Partnerships</h3>
              <p className="text-dr-ink mb-4">
                Desert Rose Gives is the named independent research partner of
                ECQO Holdings in the ECQO-Care Pilot, working alongside
                Intermountain Health, the University of Nevada, Reno (CASAT and
                NRAP), and WestCare Nevada Inc. Additional regional behavioral
                health workforce partners extend the reach of this work and are
                acknowledged publicly only after written permission is on file.
                Partnership is how we honor the balance between community and
                individual cultures, and how we hold ourselves accountable to
                the field.
              </p>
              <Link href="/about#partnerships" className="text-dr-royal underline">
                See our partners
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* IMPACT SNAPSHOT */}
      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20">
          <h2 className="text-center mb-3">By the numbers</h2>
          <p className="text-center text-dr-slate max-w-3xl mx-auto mb-10">
            The landscape numbers show where Southern Nevada needs more of us.
            The program numbers show where Desert Rose Gives is already showing
            up.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="stat-tile-landscape">
              <div className="stat-category-label text-dr-sky mb-3">
                Community context
              </div>
              <div className="text-3xl font-semibold mb-2">2.3M</div>
              <p className="text-sm">
                Clark County residents. Source: US Census Bureau QuickFacts.
              </p>
            </div>
            <div className="stat-tile-landscape">
              <div className="stat-category-label text-dr-sky mb-3">
                Community context
              </div>
              <div className="text-3xl font-semibold mb-2">
                Among the lowest
              </div>
              <p className="text-sm">
                Nevada's ranking for adult access to mental health care.
                Source: Mental Health America, State of Mental Health in
                America.
              </p>
            </div>
            <div className="stat-tile-landscape">
              <div className="stat-category-label text-dr-sky mb-3">
                Community context
              </div>
              <div className="text-3xl font-semibold mb-2">Majority</div>
              <p className="text-sm">
                Share of Nevada counties designated Mental Health Professional
                Shortage Areas. Source: HRSA Bureau of Health Workforce.
              </p>
            </div>
            <div className="stat-tile-outcome">
              <div className="stat-category-label text-dr-royal mb-3">
                DR Gives outcome
              </div>
              <div className="text-3xl font-semibold text-dr-royal mb-2">
                11,598
              </div>
              <p className="text-sm">
                WellXcel participants reached in the United States and France
                since 2022. Source: WellXcel Impact and Outcomes summary,
                Desert Rose Gives.
              </p>
            </div>
            <div className="stat-tile-outcome">
              <div className="stat-category-label text-dr-royal mb-3">
                DR Gives outcome
              </div>
              <div className="text-3xl font-semibold text-dr-royal mb-2">
                70
              </div>
              <p className="text-sm">
                Mind Over Media direct youth participants in Nevada since 2025,
                with digital outreach across up to 10 platforms reaching
                thousands more. Source: Desert Rose Gives Child Death Review
                Grant Application, 2025.
              </p>
            </div>
            <div className="stat-tile-outcome">
              <div className="stat-category-label text-dr-royal mb-3">
                DR Gives outcome
              </div>
              <div className="text-3xl font-semibold text-dr-royal mb-2">
                July 2026
              </div>
              <p className="text-sm">
                ECQO-Care Pilot research partnership milestone. Desert Rose
                Gives contributes research design and community pilot oversight
                as an independent research partner.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link href="/impact" className="text-dr-royal underline">
              See the full Impact page
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS LOCALLY */}
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-20">
          <h2 className="mb-6">Why this matters locally</h2>
          <div className="prose text-dr-ink">
            <p>
              Southern Nevada is not a footnote to the national conversation
              about behavioral health. It is the valley where the casino
              economy, the 24-hour service shift, and the steady arrival of new
              neighbors all land on the same nervous system. For Black families
              in North Las Vegas, for Urban Native households scattered across
              the valley, for the young people who move between schools and
              jobs and screens all day, prevention has to be built here, in
              their languages and in their rhythms, or it does not hold.
            </p>
            <p>
              Desert Rose Gives starts with the neighbors closest to the harm
              and the furthest from most statewide resources. We do not ask our
              communities to translate themselves into a policy document. We
              translate the work to meet them.
            </p>
          </div>
        </div>
      </section>

      {/* HOW YOU CAN HELP */}
      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20">
          <h2 className="text-center mb-10">How you can help</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="card-surface flex flex-col">
              <h3>Give</h3>
              <p className="text-dr-ink mb-4 flex-grow">
                Every contribution to Desert Rose Gives is to benefit youth,
                families, special workforces, and communities in Nevada.
                Donations fund workforce development, poverty prevention,
                community programming, and the small steady costs of showing up
                consistently. Your gift is tax deductible to the extent allowed
                by law.
              </p>
              <DonateButton />
            </article>
            <article className="card-surface flex flex-col">
              <h3>Volunteer</h3>
              <p className="text-dr-ink mb-4 flex-grow">
                Volunteers are how Desert Rose Gives shows up on more nights of
                the week. Tell us what you have in time, skill, or community
                ties, and we will match it to real program needs across the
                state.
              </p>
              <Link href="/get-involved" className="btn-secondary">
                Volunteer with us
              </Link>
            </article>
            <article className="card-surface flex flex-col">
              <h3>Partner</h3>
              <p className="text-dr-ink mb-4 flex-grow">
                Community organizations, local businesses, foundations, and
                Native relatives are invited to build with us. Partnership at
                Desert Rose Gives is reciprocal, never one-way or symbolic.
              </p>
              <Link
                href="/contact?intent=partner"
                className="btn-secondary"
              >
                Start a conversation
              </Link>
            </article>
          </div>
          <div className="mt-10">
            <ImageSlot
              alt="Volunteers setting up for a Desert Rose Gives community event in Southern Nevada."
              source="Original preferred, Nappy.co alternative"
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">Stay close to the work.</h2>
          <p className="text-dr-ink mb-6">
            Community updates, program news, and invitations, sent only when we
            have something real to share.
          </p>
          <div className="max-w-md mx-auto text-left">
            <NewsletterForm variant="inline" />
          </div>
        </div>
      </section>
    </>
  );
}
