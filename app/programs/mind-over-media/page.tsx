import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import CrisisResources from '@/components/CrisisResources';
import DonateButton from '@/components/DonateButton';

export const metadata = {
  title: 'Mind Over Media',
  description:
    'Mind Over Media is a tech-enabled public awareness and education campaign designed to reduce preventable child deaths by providing marginalized youth in Nevada with culturally responsive resources regarding mental health, suicide awareness, and injury prevention.',
  alternates: { canonical: '/programs/mind-over-media' },
};

export default function MindOverMediaPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
              Programs / Mind Over Media
            </p>
            <h1 className="mb-5">Mind Over Media.</h1>
            <p className="text-lg text-dr-ink">
              Mind Over Media is a tech-enabled public awareness and education
              campaign designed to reduce preventable child deaths by
              providing marginalized youth in Nevada with culturally responsive
              resources regarding mental health, suicide awareness, and injury
              prevention.
            </p>
          </div>
          <ImageSlot
            src="/images/card-wellxcel.jpg"
            alt="A small group of young people watching and discussing media together in a community setting."
            aspect="4/3"
            priority
          />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-12">
          <CrisisResources />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 pb-16">
          <h2>The story of the program</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              The inception of Mind Over Media follows the prevention framework
              of our partners at the Nevada Department of Public and
              Behavioral Health, Offices for Suicide Prevention. While suicide
              remains a leading cause of death in our state, traditional
              awareness campaigns frequently fail to resonate with youth from
              BIPOC, LGBTQ+, and low-income backgrounds. These initiatives
              often rely on outdated messaging and lack the representation
              necessary to build trust. Mind Over Media was founded to change
              the order of that conversation by moving prevention into the
              digital spaces where youth actually live and lead.
            </p>
            <p>
              Mind Over Media addresses the stigma and systemic neglect that
              place Nevada&rsquo;s underserved youth at a disproportionate
              risk for adverse childhood experiences. The campaign moves to
              create a youth-centered architecture of safety. By leveraging
              innovative technology, from AI-driven content to interactive
              live streaming, we provide the &ldquo;mirrors&rdquo; these young
              people need to see themselves inside the work. Our expertise in
              digital strategy ensures that life-saving education is not just
              accessible, but actionable. We are filling a critical gap in the
              regional prevention infrastructure, replacing
              &ldquo;one-size-fits-all&rdquo; templates with an
              ultra-culturally responsive framework that speaks the language of
              the community.
            </p>
            <p>
              This project is a direct response to a public health crisis that
              consistently leaves our most vulnerable populations behind. Like
              the shift in global athletics toward holistic wellbeing, Mind
              Over Media is setting a new standard for public awareness. We
              turn lived experience into data-driven storytelling, ensuring
              that the unique voices of our youth are not just counted, but
              are the primary architects of the systemic change we drive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2>Approach and methodology</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              Mind Over Media utilizes a tech-driven, community-informed
              implementation strategy to maximize accessibility and
              engagement. Our methodology is built on a multi-platform digital
              outreach model that integrates real-time feedback with scalable
              content production. We use professional livestream broadcasting
              tools to deliver interactive educational workshops
              simultaneously across up to ten social media platforms,
              allowing for live engagement and Q&amp;A with expert panelists.
              To maintain a consistent and relatable voice, we use AI-assisted
              digital content production to generate video shorts, GIFs, and
              digital toolkits that simplify complex behavioral health topics
              for both youth and caregivers.
            </p>
            <p>
              This high-tech approach is grounded by high-touch community
              engagement. We facilitate focus groups to ensure all campaign
              materials are culturally relevant and authentically reflect
              youth experiences. Central to our methodology is a custom
              participant portal that serves as a hub for qualitative data
              collection and resource sharing. By tracking engagement metrics
              and changes in attitudes in real time, we can adapt our
              programming to meet emerging community needs, ensuring that our
              prevention efforts drive measurable, systemic improvements in
              child safety.
            </p>
          </div>
          <div className="mt-8">
            <ImageSlot
              src="/images/mom-phone-closeup.jpg"
              alt="Close-up of hands holding a phone while a second person gestures toward the screen in conversation."
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16">
          <h2>Who it is for</h2>
          <ul className="mt-6 space-y-3 text-dr-ink list-disc pl-6">
            <li>
              <strong>Marginalized Youth:</strong> Specifically individuals
              ages 13 to 26 in Nevada who face higher risks of suicide and
              preventable injuries.
            </li>
            <li>
              <strong>High-Risk Demographics:</strong> Youth from BIPOC,
              LGBTQ+, and low-income backgrounds who experience barriers to
              traditional mental health care.
            </li>
            <li>
              <strong>Southern Nevada Communities:</strong> Focused on
              underserved zip codes in Clark County where systemic neglect and
              mortality rates are highest.
            </li>
            <li>
              <strong>Caregiver Ecosystems:</strong> Parents, educators, and
              guardians who receive digital toolkits and resources to support
              youth safety.
            </li>
            <li>
              <strong>Health Systems:</strong> Regional prevention
              infrastructure that benefits from our real-time data and
              culturally responsive messaging.
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
          </ul>
          <p className="mt-6 text-dr-ink">Government funder:</p>
          <ul className="mt-2 space-y-2 text-dr-ink list-disc pl-6">
            <li>
              Nevada Department of Child and Family Services, Child Death
              Review (grant funder, 2025)
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2>How we hold participants safely.</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              Mind Over Media serves youth ages 13 to 26. Minor participants
              (under 18) take part only with written consent from a parent or
              guardian. Adult participants (18 to 26) consent for themselves.
              Programming, content, and focus group protocols are
              age-appropriate and structured to respect the developmental and
              legal context of each age band.
            </p>
            <p>
              Some Desert Rose Gives team members and volunteers are licensed
              clinical professionals who are mandatory reporters under Nevada
              law (NRS 432B). Mind Over Media is a public awareness and
              prevention campaign; it is not a clinical service and is not a
              substitute for clinical care. In cases of suspected child
              abuse, elder abuse, or imminent harm, Desert Rose Gives follows
              Nevada reporting requirements.
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
              <strong>Participate.</strong> Weekly session information is
              posted ahead of time on the{' '}
              <Link href="/news">News page</Link> and shared through community
              and partner channels. To join or host a session, reach us
              through the Contact page.
            </p>
            <p>
              <strong>Refer.</strong> If you know a young person, family, or
              peer who could use what Mind Over Media offers, send them our
              way. Referrals are welcome from partners, schools, and community
              members.
            </p>
            <p>
              <strong>Support.</strong> Mind Over Media is community funded.
              You can support the program by donating, volunteering as a
              co-facilitator or host, or offering an in-kind resource such as
              meeting space, food, or materials.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact?intent=refer" className="btn-secondary">
              Join or host a session
            </Link>
            <Link href="/get-involved" className="btn-secondary">
              Volunteer
            </Link>
            <DonateButton />
          </div>
          <div className="mt-8">
            <ImageSlot
              src="/images/mom-notebook.jpg"
              alt="A participant writing in a notebook during a Mind Over Media community session."
              aspect="16/9"
            />
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
