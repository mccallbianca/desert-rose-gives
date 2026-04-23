import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import CrisisResources from '@/components/CrisisResources';
import DonateButton from '@/components/DonateButton';

export const metadata = {
  title: 'Impact',
  description:
    'Impact at Desert Rose Gives is measured by the systemic shift in how our community is Seen, Heard, and Understood. See the landscape we are working inside, program outcomes, and voices from the work.',
  alternates: { canonical: '/impact' },
};

const VIGNETTES = [
  {
    title: 'Breaking the Pattern (Marcus, 19)',
    body: 'Marcus, a former high school athlete in Las Vegas, participated in a WellXcel session focused on the intersection of sports culture and behavioral risks. After analyzing the data on how sports betting specifically targets marginalized zip codes, Marcus began noticing these predatory patterns within his own friend group\u2019s Discord server. He didn\u2019t just step back; he started leading the conversation, using the term Existential Isolation to explain why his peers were chasing a big win to fill a void of connection.',
    quote:
      'I thought it was just a game we were playing to stay connected, but I realized the game was designed to keep us lonely. WellXcel gave me the vocabulary to call it what it was: a pipeline. Now, when I see a friend chasing a loss, I don\u2019t just ignore it. I name the pattern out loud.',
  },
  {
    title: 'The Architecture of the Feed (Elena, Parent)',
    body: 'Elena attended a Mind Over Media workshop after noticing her 14-year-old daughter\u2019s sudden shift in mood following several hours on social media. Through the program\u2019s focus on AI-driven content and digital safety, Elena learned how algorithms can manipulate a young person\u2019s existential anxiety. The family conversations shifted from get off your phone to what is your phone trying to make you feel?',
    quote:
      'Before Desert Rose Gives, I was fighting the technology. Now, I understand the architecture of it. We don\u2019t just talk about screen time anymore; we talk about how the feed is built to exploit her loneliness. It changed our entire home dynamic from one of policing to one of protection.',
  },
  {
    title: 'From Lived Experience to Leadership (Jordan, 24)',
    body: 'Jordan entered the Desert Rose Gives ecosystem as a participant with lived experience in the gambling recovery pipeline. Through the Desert Rose Gives community workforce development track, Jordan moved from navigating his own recovery to becoming a paid facilitator for others. As a lived-experience research contributor to the ECQO-Care Pilot, Jordan helped inform the cultural-responsiveness review that Desert Rose Gives delivers to ECQO Holdings as the pilot\u2019s independent research partner.',
    quote:
      'For a long time, I felt like my past was just a series of failures in a grant report. Desert Rose Gives showed me that my experience is actually a vital dataset. I went from being a case number to being a research partner. I\u2019m not just healing; I\u2019m helping shape the research that will support the next person.',
  },
  {
    title: 'The Systemic Shift (Strategic Partner)',
    body: 'A representative from a regional health organization noted that their collaboration with Desert Rose Gives fundamentally changed how they approach youth outreach. By adopting our Seen, Heard, and Understood framework and utilizing our data storytelling, they were able to secure a major grant that had previously been out of reach due to outdated messaging.',
    quote:
      'Working with Bianca and her team forced us to look at our programming through a culturally responsive lens we didn\u2019t realize we were missing. We weren\u2019t just checking a box; we were rebuilding our entire outreach strategy. Desert Rose Gives provided the clinical frame that allowed us to finally speak the language of the community we serve.',
  },
  {
    title: 'Seeing Through the Screen (Maya, 17)',
    body: 'Maya, a participant in the Mind Over Media livestream workshops, described a specific moment while scrolling her feed late at night. She recognized a set of existential triggers that the program had highlighted just days before. Instead of falling into a cycle of comparison and isolation, she recognized the data storytelling being used against her and chose to engage with the GO MNTL peer-support channel instead.',
    quote:
      'It was like the curtain was pulled back. I saw a post that usually would have made me feel like I wasn\u2019t enough, but I remembered the workshop. I realized the algorithm was looking for my loneliness. In that moment, I didn\u2019t feel invisible anymore because I knew how to see what was happening to me. I chose to log off and reach out to my peers.',
  },
];

export default function ImpactPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
              Impact
            </p>
            <h1 className="mb-5">How we measure what matters.</h1>
            <p className="text-lg text-dr-ink">
              Impact at Desert Rose Gives is not measured solely by the volume
              of services provided, but by the systemic shift in how our
              community is Seen, Heard, and Understood.
            </p>
          </div>
          <ImageSlot
            src="/images/impact-opening.jpg"
            alt="Southern Nevada community members gathered together in a candid, hopeful moment."
            aspect="4/3"
            priority
          />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <div className="prose text-dr-ink">
            <p>
              In a region where behavioral health access has historically
              ranked last in the nation, we move beyond the clinical
              &ldquo;grant report&rdquo; to build an architecture of
              resilience. Our work transforms lived experiences into rigorous
              data storytelling, bridging the gap between marginalized youth
              and the policy strategies required to protect them. Whether
              through our best-practice wellness models or our clinically
              informed AI companions, every outcome we track represents a dot
              connected between isolation and connection. We are not just
              documenting a crisis; we are engineering its end by equipping
              workforces and empowering the entire ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <h2>The landscape we are working inside</h2>
          <p className="text-dr-ink mt-3 max-w-3xl">
            Southern Nevada remains the epicenter of a critical health
            disparity that requires immediate, data-driven intervention.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="stat-tile-landscape">
              <div className="stat-category-label text-dr-sky mb-3">
                Community context
              </div>
              <h3 className="text-dr-white text-lg mb-2">Access to Care</h3>
              <p className="text-sm">
                Nevada consistently ranks 51st in the nation for access to
                behavioral health services, leaving thousands of youth without
                a clear pathway to support.
              </p>
              <p className="mt-3 text-xs text-dr-sky">
                Source: Nevada Division of Public and Behavioral Health (DPBH).
              </p>
            </div>
            <div className="stat-tile-landscape">
              <div className="stat-category-label text-dr-sky mb-3">
                Community context
              </div>
              <h3 className="text-dr-white text-lg mb-2">Youth Mortality</h3>
              <p className="text-sm">
                Suicide remains one of the leading causes of death for Nevada
                youth, with specific disparities impacting BIPOC and LGBTQ+
                populations.
              </p>
              <p className="mt-3 text-xs text-dr-sky">
                Source: Centers for Disease Control and Prevention (CDC),
                WONDER database.
              </p>
            </div>
            <div className="stat-tile-landscape">
              <div className="stat-category-label text-dr-sky mb-3">
                Community context
              </div>
              <h3 className="text-dr-white text-lg mb-2">
                Existential Isolation
              </h3>
              <p className="text-sm">
                High-risk zip codes in Clark County show a direct correlation
                between extreme loneliness and the rising pipeline of problem
                gambling and substance misuse.
              </p>
              <p className="mt-3 text-xs text-dr-sky">
                Source: Nevada Division of Public and Behavioral Health (DPBH).
              </p>
            </div>
          </div>
          <p className="mt-8 text-dr-ink max-w-3xl italic">
            The Reality: When systems are written in a language that neighbors
            don&rsquo;t speak, the most vulnerable among us remain invisible
            to the resources designed to save them.
          </p>
          <CrisisResources />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <h2>What our programs are doing inside that landscape</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="stat-tile-outcome">
              <div className="stat-category-label text-dr-royal mb-3">
                DR Gives outcome
              </div>
              <h3 className="text-xl text-dr-royal mb-2">
                WellXcel: Performance and Wellness Education
              </h3>
              <p className="text-dr-ink text-sm">
                Since 2022, WellXcel has reached{' '}
                <strong>11,598 participants</strong> across the United States
                and France through education, consultation, custom trainings,
                and community support.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-dr-ink list-disc pl-5">
                <li>
                  <strong>70%</strong> reported reduced stress
                </li>
                <li>
                  <strong>40%</strong> reported decreased depressive symptoms
                </li>
                <li>
                  <strong>100%</strong> reported new insights
                </li>
              </ul>
              <p className="mt-3 text-xs text-dr-slate">
                Source: WellXcel Impact and Outcomes summary, Desert Rose
                Gives.
              </p>
            </article>

            <article className="stat-tile-outcome">
              <div className="stat-category-label text-dr-royal mb-3">
                DR Gives outcome
              </div>
              <h3 className="text-xl text-dr-royal mb-2">
                Mind Over Media: Culturally Responsive Prevention
              </h3>
              <p className="text-dr-ink text-sm">
                Launched in 2025 under the Nevada Child Death Review framework
                (NRS 432B.403 to 432B.4095), Mind Over Media engages{' '}
                <strong>70 direct youth participants</strong> (ages 13 to 26)
                through focus groups and livestream workshops, with digital
                outreach across up to 10 social media platforms to reach
                thousands more. Deliverables include AI-supported digital
                toolkits, video shorts, and a Notion participant portal for
                qualitative data collection.
              </p>
              <p className="mt-3 text-xs text-dr-slate">
                Source: Desert Rose Gives Child Death Review Grant
                Application, 2025.
              </p>
            </article>

            <article className="stat-tile-outcome">
              <div className="stat-category-label text-dr-royal mb-3">
                DR Gives outcome
              </div>
              <h3 className="text-xl text-dr-royal mb-2">
                ECQO-Care Pilot Research Partnership
              </h3>
              <p className="text-dr-ink text-sm">
                Desert Rose Gives serves as the named independent research
                partner for the ECQO-Care Pilot, contributing research design,
                cultural-responsiveness review, and community pilot oversight.
                Desert Rose Gives does not develop, operate, or own the ECQO
                Holdings platform. Desert Rose Gives donor funds support
                Desert Rose Gives research and community programs only.
              </p>
            </article>
          </div>
          <div className="mt-10">
            <ImageSlot
              src="/images/impact-neighborhood.jpg"
              alt="A residential street in Southern Nevada at human scale."
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <h2>Voices from the work</h2>
          <p className="text-dr-ink mt-4 max-w-3xl">
            These stories are how we keep the numbers honest. The vignettes
            below are <strong>illustrative composites based on common
            participant experiences</strong> in Desert Rose Gives programs.
            Names and specific details have been generalized to protect
            privacy. The experiences, themes, and quotes reflect the
            consistent feedback we receive from real participants, organized
            into representative narratives. Desert Rose Gives will publish
            named testimonials with documented participant consent as they
            are sourced.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {VIGNETTES.map((v) => (
              <article key={v.title} className="card-surface">
                <h3 className="text-dr-royal">{v.title}</h3>
                <p className="text-dr-ink mt-3">{v.body}</p>
                <blockquote className="mt-4 border-l-4 border-dr-sky pl-4 text-dr-ink italic">
                  {v.quote}
                </blockquote>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <ImageSlot
              src="/images/impact-conversation.jpg"
              alt="Two community members in conversation during a Desert Rose Gives gathering."
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2>Sources and methodology</h2>
          <div className="prose text-dr-ink mt-4">
            <p>
              Landscape statistics on this page are drawn from public federal
              and Nevada state sources: the US Census Bureau (Clark County
              population), Mental Health America (State of Mental Health in
              America annual report), the HRSA Bureau of Health Workforce
              (Mental Health Professional Shortage Area designations), the
              Centers for Disease Control and Prevention WONDER database
              (youth mortality), and the Nevada Division of Public and
              Behavioral Health (access to care and Existential Isolation
              correlations).
            </p>
            <p>
              Desert Rose Gives outcome figures are drawn from internal
              program evaluation, specifically the WellXcel Impact and
              Outcomes summary and the Desert Rose Gives Child Death Review
              Grant Application. Source files are available on request through
              the <Link href="/contact">Contact page</Link>. Figures are
              updated as new program periods close.
            </p>
            <p>
              The Desert Rose Gives 501(c)(3) Determination Letter is
              available on request at{' '}
              <a href="mailto:grants@desertrosegives.org">
                grants@desertrosegives.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">Help us keep these numbers honest.</h2>
          <p className="text-dr-ink mb-6">
            The landscape does not change unless communities, funders, and
            partners decide to change it together.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <DonateButton />
            <Link href="/get-involved" className="btn-secondary">
              Volunteer
            </Link>
            <Link href="/contact?intent=partner" className="btn-secondary">
              Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
