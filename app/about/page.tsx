import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import BoardCard from '@/components/BoardCard';
import CrisisResources from '@/components/CrisisResources';
import DonateButton from '@/components/DonateButton';

export const metadata = {
  title: 'About',
  description:
    'Desert Rose Gives was founded in Southern Nevada to confront a stark reality and to build ultra-culturally responsive prevention, research, and community leadership with the neighbors closest to the need.',
  alternates: { canonical: '/about' },
};

const VALUES = [
  {
    title: 'Community-Centered Strategy',
    body: 'The unique experiences of our region are at the center of every project, ensuring those most impacted are the primary architects of the solutions we build.',
  },
  {
    title: 'Expertise in Lived Experience',
    body: 'We treat lived experience as a vital dataset, centering and compensating the voices of those who have navigated these systems to inform our clinical and advisory work.',
  },
  {
    title: 'Ultra-Culturally Responsive Frameworks',
    body: 'Our programs are designed within the specific histories and cultural realities of the communities we serve, rather than being translated down from a generic template.',
  },
  {
    title: 'Proactive Connection',
    body: 'We target the Existential Isolation that fuels behavioral risk, providing the innovation and support needed to solve loneliness before it escalates into high-acuity crisis.',
  },
  {
    title: 'Regional Accountability',
    body: 'We prioritize named, transparent partnerships and local governance to ensure our work remains directly accountable to the people of Nevada.',
  },
];

const BOARD = [
  {
    name: 'Bianca D. McCall, LMFT',
    role: 'Founder and President',
    image: '/images/board_01_bianca.jpg',
    alt: 'Portrait of Bianca D. McCall, LMFT, Founder and President of Desert Rose Gives. Black and white editorial photograph.',
    bio: 'Bianca D. McCall is a professional women\u2019s basketball player in retirement, licensed clinical therapist, and renowned TED speaker having presented at over 50 conferences since 2023. Bianca has more than 25 years of expertise in behavioral sciences, with a thriving mental wellness and performance consulting practice for public departments, private workforces, education and sports ecosystems in 13 U.S. states and three countries. She is a trusted voice at the intersections of existential concerns, mental health, and AI technology in underserved and under-resourced groups, including the professional development of special populations and performance-based workforces. Bianca is an advisor for the U.S. Department of Health and Human Services and a contributor to National Best Practices for prevention programming. She has delivered keynotes, training, education, and consulting that resonate across global wellness, media, sports, and entertainment industries.',
  },
  {
    name: 'Rachel Kaplan',
    role: 'Vice President',
    image: '/images/board_02_rachel.jpg',
    alt: 'Portrait of Rachel Kaplan, Vice President of the Desert Rose Gives Board of Directors.',
    bio: 'Rachel Kaplan, M.Ed., B.S., is Vice President of the Desert Rose Gives Board of Directors. Rachel is a seasoned educator and administrator with over 20 years of experience. Raised in the Midwest, she earned her B.A. in Elementary Education with minors in Math and English, and her M.S. in Leadership and Curriculum Instruction from Oakland University in Rochester, Michigan. Throughout her career, Rachel has served in various teaching, administrative, and supervisory roles across public and charter schools nationwide. She moved to Las Vegas 25 years ago and spent nearly two decades teaching in the Clark County School District.',
  },
  {
    name: 'Heather L. Parisi',
    role: 'Secretary',
    image: '/images/board_03_heather.jpg',
    alt: 'Portrait of Heather L. Parisi, Secretary of the Desert Rose Gives Board of Directors.',
    bio: 'Heather L. Parisi is a Senior Project Manager with 25 years of experience in product development, manufacturing, supply chain, and quality assurance. Inspired by her athleticism and her own healthy lifestyle, Heather introduced Flip2BFit, a board game blending strategy, exercise, and evidence-based experience to create a new PE offering accredited within PE curricula across the United States. Heather\u2019s philanthropic spirit found the culmination of her dream in Uganda, where she established a small nursery and primary school with a mission to bring a healthier lifestyle to world communities.',
  },
  {
    name: 'Steven Ness',
    role: 'Board Member',
    image: '/images/board_04_steven.jpg',
    alt: 'Portrait of Steven Ness, Board Member of Desert Rose Gives.',
    bio: 'Steven Ness brings over 20 years of sophisticated banking and finance experience to the Desert Rose Gives board, specializing in the financial health and strategic growth of business owners and affluent individuals. Within our mission to address regional disparities, Steven provides the concrete financial framework and strategic guidance necessary to empower our community leaders and ensure their initiatives are built on a sustainable foundation.',
  },
  {
    name: 'Morris Jackson II',
    role: 'Board Member',
    image: '/images/board_05_morris.jpg',
    alt: 'Portrait of Morris Jackson II, Board Member of Desert Rose Gives.',
    bio: 'A 24-year veteran of the financial services and banking industry, Morris Jackson II leads the Las Vegas market for U.S. Bank\u2019s Consumer and Business Banking division. He oversees a team of more than 500 retail and business bankers across 64 retail branches, focused on deepening relationships with existing customers and acquiring new ones. Known for his servant leadership and entrepreneurial mindset, he consistently delivers data-driven strategies that enhance customer experiences, increase market share, and fuel sustained growth. Morris is also a successful franchise owner and operator of three Valhallan Esports Training locations in Las Vegas, Nevada; Folsom, California; and Cornelius, North Carolina.',
  },
];

const PARTNERS = [
  {
    name: 'University of Nevada, Reno (CASAT and NRAP)',
    body: 'Collaborative efforts focused on behavioral health workforce development and the Nevada Recovery and Prevention (NRAP) program.',
  },
  {
    name: 'Intermountain Health, Community Initiatives',
    body: 'Collaborating on the development and deployment of evidence-based programming for at-risk youth and under-resourced communities.',
  },
  {
    name: 'WestCare Nevada Inc.',
    body: 'Partnership on community-based prevention and pilot delivery across Southern Nevada.',
  },
  {
    name: 'ECQO Holdings',
    body: 'Desert Rose Gives is the named independent research partner on the ECQO-Care Pilot framework, contributing research design, cultural-responsiveness review, and community pilot oversight. Desert Rose Gives does not operate or build the ECQO Holdings platform.',
  },
  {
    name: 'Village Schools Organizations',
    body: 'Partnering on youth-serving prevention education in school-based community settings.',
  },
  {
    name: 'Vegas Golden Knights Foundation',
    body: 'Supporting our wellness and performance education work across athletic and community settings.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
              About Desert Rose Gives
            </p>
            <h1>Our founding story.</h1>
          </div>
          <ImageSlot
            src="/images/about-desert-rose.jpg"
            alt="A desert rose in bloom against dry soil, symbolic of the Desert Rose Gives name."
            aspect="4/3"
            priority
          />
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <div className="prose text-dr-ink">
            <p>
              Desert Rose Gives was founded in Southern Nevada to confront a
              stark reality: our state consistently ranks last in the nation
              for behavioral health access. While our headquarters is in Las
              Vegas, our work reaches across the region to serve those
              navigating Existential Isolation (EI), the profound loneliness
              and separation that fuel behavioral addictions, overdose, and
              suicide. We believe that true prevention must be culturally
              responsive, moving beyond clinical grant language to address the
              real-world disparities our communities face.
            </p>
            <p>
              The &ldquo;Rose&rdquo; in our name represents the resilience of
              people who thrive in even the harshest environments. Bianca D.
              McCall, LMFT, built this organization on a foundation of clinical
              expertise and federal advisory experience, but the heart of the
              work belongs to the people. We are a 501(c)(3) dedicated to
              ensuring that through development, research, and data
              storytelling, every experience is Seen, Heard, and Understood.
              We don&rsquo;t just identify problems; we equip the systems,
              workforces, and policies required to solve them.
            </p>
          </div>
          <CrisisResources />
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 grid gap-10 md:grid-cols-2">
          <div>
            <h2>Mission</h2>
            <p className="text-dr-ink">
              To bridge behavioral health disparities through ultra-culturally
              responsive training and data storytelling that empowers
              communities and strengthens regional systems of care.
            </p>
          </div>
          <div>
            <h2>Vision</h2>
            <p className="text-dr-ink">
              A regional landscape where clinical innovation and connection
              eliminate Existential Isolation, ensuring every individual is
              authentically Seen, Heard, and Understood.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <h2 className="mb-10 text-center">Our values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <article key={v.title} className="card-surface">
                <h3>{v.title}</h3>
                <p className="text-dr-ink">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <h2 className="text-center mb-3">Who holds the work</h2>
          <p className="text-center text-dr-ink max-w-3xl mx-auto mb-10">
            Desert Rose Gives is governed by a five-member board of Southern
            Nevada leaders whose professional range and community ties keep
            the work honest and local.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BOARD.map((b) => (
              <BoardCard key={b.name} {...b} />
            ))}
          </div>
        </div>
      </section>

      <section id="partnerships" className="bg-dr-white scroll-mt-24">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <h2>Strategic alliances and regional partnerships</h2>
          <p className="text-dr-ink max-w-3xl mt-4">
            Systemic change requires coordinated effort. Desert Rose Gives
            works alongside academic, clinical, and community institutions to
            bridge gaps in the regional continuum of care. The following
            partners have given written permission to be named on this page.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PARTNERS.map((p) => (
              <article key={p.name} className="card-cream">
                <h3 className="text-dr-royal text-lg">{p.name}</h3>
                <p className="text-dr-ink text-sm mt-2">{p.body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-sm text-dr-slate max-w-3xl">
            Desert Rose Gives also works with additional regional partners in
            behavioral health workforce development, athletic foundations,
            financial-literacy institutes, public health foundations, and
            Native youth-serving organizations. Those partners are listed
            publicly only after written permission is on file.
          </p>
          <div className="mt-8">
            <ImageSlot
              src="/images/about-partners.jpg"
              alt="Community partners meeting together around a shared workspace in Southern Nevada."
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16">
          <h2 className="mb-5">Who we serve</h2>
          <div className="prose text-dr-ink">
            <p>
              Desert Rose Gives serves at-risk and historically marginalized
              youth, ages 13 to 26, throughout Southern Nevada&rsquo;s
              under-resourced zip codes. We serve minor participants (13 to
              17) with written consent from a parent or guardian, and adult
              participants (18 to 26) who consent for themselves. Programming
              is age-appropriate and structured to respect the developmental
              and legal context of each age band. Our work deliberately
              prioritizes communities disproportionately impacted by behavioral
              health disparities, including BIPOC, LGBTQ+, and neurodiverse
              populations. The majority of our participants identify as BIPOC,
              reflecting our deep commitment to addressing the specific and
              unique needs of Black, Hispanic, Asian, Asian Pacific Islander,
              and the region&rsquo;s Tribal Nations (Urban and living on
              reservations).
            </p>
            <p>
              We support those navigating Existential Isolation, a distressing
              sense of separation that drives high-acuity challenges such as
              gambling harm, overdose, and suicide. Our outreach extends to
              the surrounding ecosystems, including parents, caregivers, and
              educators, ensuring a comprehensive approach to mental
              resiliency. We place a strategic emphasis on the 16 to 26
              demographic, a group uniquely vulnerable to the intersection of
              online gaming and social isolation. By integrating clinical
              innovation with community-driven development, we empower these
              ecosystems and the professional workforce to ensure every
              individual is Seen, Heard, and Understood. This approach
              transforms the regional landscape of care throughout the entire
              state of Nevada forever.
            </p>
          </div>
          <div className="mt-6">
            <ImageSlot
              src="/images/about-family.jpg"
              alt="Multiple generations of a family spending time together in a Southern Nevada home."
              aspect="4/3"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">Keep going with us.</h2>
          <p className="text-dr-ink mb-6">
            If any of this sounds like your people, your work, or the
            community you want to build with, we would like to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/get-involved" className="btn-secondary">
              Volunteer
            </Link>
            <Link href="/contact?intent=partner" className="btn-secondary">
              Partner
            </Link>
            <DonateButton />
          </div>
        </div>
      </section>
    </>
  );
}
