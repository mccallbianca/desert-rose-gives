import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';

export const metadata = {
  title: 'Programs',
  description:
    'Desert Rose Gives programs are designed with the neighbors we serve, not for them. Each program centers prevention, cultural honesty, and peer leadership over crisis response or one-way delivery.',
  alternates: { canonical: '/programs' },
};

export default function ProgramsIndexPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20">
          <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-3">
            Programs
          </p>
          <h1 className="mb-5">Designed with the people we serve.</h1>
          <p className="text-lg text-dr-ink max-w-3xl">
            Desert Rose Gives programs are designed with the neighbors we
            serve, not for them. Each program centers prevention, cultural
            honesty, and peer leadership over crisis response or one-way
            delivery.
          </p>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <ImageSlot
            alt="A small group of community members gathered in a circle during a Desert Rose Gives program session."
            source="Nappy.co, original preferred"
            aspect="16/9"
            className="mb-10"
          />
          <div className="grid gap-8 md:grid-cols-2">
            <article className="card-surface flex flex-col">
              <ImageSlot
                alt="Young people in conversation in a community space, one holding a phone."
                source="Nappy.co"
                aspect="16/9"
                className="mb-4"
              />
              <h2 className="text-2xl">WellXcel</h2>
              <p className="text-dr-ink mb-5 flex-grow">
                WellXcel is a best-practice wellness and performance education
                model, developed by a licensed clinician, that addresses the
                social determinants of health across high-pressure ecosystems
                through culturally responsive training, consultation, and
                community support. WellXcel is a prevention, education,
                training, and consultation program, not a clinical service.
              </p>
              <Link href="/programs/wellxcel" className="btn-secondary">
                Learn about WellXcel
              </Link>
            </article>
            <article className="card-surface flex flex-col">
              <ImageSlot
                alt="A small group watching and discussing media together in a community setting."
                source="Unsplash or AllGo"
                aspect="16/9"
                className="mb-4"
              />
              <h2 className="text-2xl">Mind Over Media</h2>
              <p className="text-dr-ink mb-5 flex-grow">
                Mind Over Media is a weekly community program that breaks down
                the mental health messaging in media, targeting young people
                in its first iteration, and teaching them how to decode and
                contextualize what they consume. Sessions are small,
                discussion-based, and digitally-hosted. Participants leave with
                shared language, encouraged curiosity, and a stronger read on
                who is trying to sell them what. Funded by the Department of
                Child and Family Services, Child Death Review, for suicide
                prevention, since 2025.
              </p>
              <Link
                href="/programs/mind-over-media"
                className="btn-secondary"
              >
                Learn about Mind Over Media
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2>A note on participation.</h2>
          <p className="text-dr-ink mt-4">
            Desert Rose Gives is the named independent research partner of
            ECQO Holdings on the ECQO-Care Pilot, contributing research
            design, cultural-responsiveness review, and community pilot
            oversight. Desert Rose Gives also conducts independent community
            programs and research that are distinct from the ECQO Holdings
            platform. This work is supported by a combination of community
            gifts, grants, and partner contributions. Funders and partners are
            acknowledged publicly on this site only after written permission is
            on file; other applications are in progress or in development.
          </p>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">Ways to connect</h2>
          <p className="text-dr-ink mb-6">
            Whether you are a neighbor, a parent, a peer, or a partner
            organization, there is a way into this work that fits you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/get-involved" className="btn-secondary">
              Volunteer
            </Link>
            <Link href="/contact?intent=refer" className="btn-secondary">
              Refer someone
            </Link>
            <Link href="/contact?intent=partner" className="btn-primary">
              Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
