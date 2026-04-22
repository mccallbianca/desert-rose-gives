import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import CrisisResources from '@/components/CrisisResources';
import DonateButton from '@/components/DonateButton';

export const metadata = {
  title: 'WellXcel',
  description:
    'WellXcel is a best-practice wellness and performance education model, developed by a licensed clinician, that addresses the social determinants of health across high-pressure ecosystems through culturally responsive training, consultation, and community support.',
  alternates: { canonical: '/programs/wellxcel' },
};

export default function WellXcelPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
              Programs / WellXcel
            </p>
            <h1 className="mb-5">WellXcel.</h1>
            <p className="text-lg text-dr-ink">
              WellXcel is a best-practice wellness and performance education
              model, developed by a licensed clinician, that addresses the
              social determinants of health across high-pressure ecosystems
              through culturally responsive training, consultation, and
              community support.
            </p>
            <p className="text-sm text-dr-slate mt-4">
              WellXcel is a prevention, education, training, and consultation
              program. It is not a clinical service.
            </p>
          </div>
          <ImageSlot
            alt="Young people seated in a community session during a WellXcel program in Nevada."
            source="Original strongly preferred, Nappy.co alternative"
            aspect="4/3"
          />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2>From peak performance to holistic healing</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              The WellXcel story mirrors the architectural shift seen in the
              International Olympic Committee (IOC) Mental Health Toolkit. For
              decades, elite performance, whether on the court, in the
              classroom, or in the boardroom, was viewed through a lens of
              &ldquo;mental toughness,&rdquo; often at the expense of the
              human behind the stats. The IOC Toolkit was a watershed moment,
              acknowledging that physical peak does not grant immunity to
              psychological vulnerability. WellXcel was born from a similar,
              urgent realization: performance-driven cultures were suffering
              from a &ldquo;wellness disparity&rdquo; that prioritized
              outcomes over the very people producing them.
            </p>
            <p>
              This mission is deeply personal. It is built on a foundation of
              professional basketball, 25 years of behavioral health
              leadership, and experience as a healthcare CEO. Having stood in
              the spotlight as a pro athlete and a TED speaker, the need for a
              framework that moves beyond &ldquo;surviving&rdquo; to
              &ldquo;welling better&rdquo; was clear. Like the IOC&rsquo;s
              structured approach to safeguarding athletes, WellXcel was
              designed to bridge the gap between high-stress environments and
              the support systems required to navigate them. Since 2022, the
              program has reached over 10,000 participants across the U.S. and
              France, proving that wellness exists on a dynamic continuum
              rather than as a fixed state. It moves the conversation from
              &ldquo;what happened to you&rdquo; to &ldquo;how do we heal
              together,&rdquo; focusing on the Existential Isolation that
              often haunts those in high-stakes roles. By transforming how
              performers in sports and industry perceive their own health,
              WellXcel ensures that resilience is not just a buzzword, but a
              sustainable practice.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2>Approach and methodology</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              WellXcel utilizes a healing-centered approach that views
              wellness as a continuum rather than a fixed state. The
              methodology is grounded in a culturally responsive framework
              that addresses the social determinants of behavioral health
              through five core values: Inclusivity, Relevance, Empowerment,
              Accessibility, and Adaptability. The curriculum is structured
              across four rigorous domains (Cognitive, Knowledge, Reason, and
              Integrity) that facilitate stages of learning from initial
              acquisition to meaningful contribution. By stimulating
              intellectual curiosity and practicing mindfulness, the program
              empowers individuals to interpret their unique experiences
              constructively, fostering psychological safety even amid
              high-stress performance cycles.
            </p>
            <p>
              This data-driven model integrates community needs assessments,
              custom trainings, policy crosswalks, speaker activations, and
              community support, along with warm handoffs to licensed clinical
              providers and established crisis-line partners when participants
              need direct clinical care. WellXcel itself is a prevention,
              education, training, and consultation program; it is not a
              clinical service provider.
            </p>
          </div>
          <div className="mt-8">
            <ImageSlot
              alt="A peer facilitator speaking with community members during a WellXcel session."
              source="Nappy.co or AllGo, original preferred"
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2>Who we serve</h2>
          <p className="text-dr-ink mt-4">
            WellXcel is designed for every stakeholder within a performance
            environment, recognizing that wellness is a collective
            responsibility.
          </p>
          <ul className="mt-6 space-y-3 text-dr-ink list-disc pl-6">
            <li>
              <strong>Primary Performers:</strong> Students and Athletes.
            </li>
            <li>
              <strong>Support and Leadership:</strong> Educators, Coaches,
              Administrators, and Leadership.
            </li>
            <li>
              <strong>Operational Staff:</strong> Employees, Clinical Staff,
              Referees, and Media.
            </li>
            <li>
              <strong>The Foundation:</strong> Families, Entourage, and the
              broader Community.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2>Partners and collaborators</h2>
          <p className="text-dr-ink mt-2">Named with written permission:</p>
          <ul className="mt-4 space-y-2 text-dr-ink list-disc pl-6">
            <li>Intermountain Health, Community Initiatives</li>
            <li>Vegas Golden Knights Foundation</li>
            <li>Village Schools Organizations</li>
          </ul>
          <p className="mt-4 text-sm text-dr-slate">
            Additional regional partners in public health, athletic
            foundations, and youth-serving organizations support WellXcel and
            are listed publicly only after written permission is on file.
          </p>
          <div className="mt-8">
            <ImageSlot
              alt="A young person and an older adult looking at a phone screen together in conversation."
              source="Nappy.co or Unsplash"
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2>How we hold participants safely.</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              WellXcel serves participants across the age span. Minor
              participants (under 18) take part in WellXcel only with written
              consent from a parent or guardian. Adult participants consent
              for themselves. All programming is age-appropriate and
              structured to respect the developmental and legal context of
              each age band.
            </p>
            <p>
              Some Desert Rose Gives team members and volunteers are licensed
              clinical professionals who are mandatory reporters under Nevada
              law (NRS 432B). Participation in WellXcel is not a substitute
              for clinical care. In cases of suspected child abuse, elder
              abuse, or imminent harm, Desert Rose Gives follows Nevada
              reporting requirements.
            </p>
            <p>
              Volunteers who work directly with youth complete background
              screening and mandatory reporter training before participating
              in programs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2>Participate, refer, or support.</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              <strong>Participate or refer.</strong> If you or someone in your
              life could use what WellXcel offers, reach us through the{' '}
              <Link href="/contact?intent=refer">Contact page</Link>.
              Referrals from partners and community members are welcome and
              confidential within the limits of clinical and mandated
              reporting standards.
            </p>
            <p>
              <strong>Support.</strong> WellXcel is community funded and
              partnership funded. You can support the program by donating,
              volunteering, or starting a partnership conversation.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact?intent=refer" className="btn-secondary">
              Refer someone
            </Link>
            <Link href="/get-involved" className="btn-secondary">
              Volunteer
            </Link>
            <DonateButton />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
          <CrisisResources />
        </div>
      </section>
    </>
  );
}
