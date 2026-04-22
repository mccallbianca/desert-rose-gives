import Link from 'next/link';
import ImageSlot from '@/components/ImageSlot';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'News',
  description:
    'Community updates, program news, partner announcements, and occasional reflections from the founder and the board of Desert Rose Gives.',
  alternates: { canonical: '/news' },
};

const PLACEHOLDERS = [1, 2, 3, 4, 5];

export default function NewsPage() {
  return (
    <>
      <section className="bg-dr-cream">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16 md:py-20">
          <p className="text-dr-royal text-sm uppercase tracking-wider font-semibold mb-4">
            News and stories
          </p>
          <h1 className="mb-5">Updates from the work.</h1>
          <p className="text-lg text-dr-ink max-w-3xl">
            This is where Desert Rose Gives shares community updates, program
            news, partner announcements, and occasional reflections from the
            founder and the board. Posts go up when we have something real to
            say, not on a schedule for its own sake.
          </p>
          <div className="mt-10">
            <ImageSlot
              alt="A candid moment from a recent Desert Rose Gives community event."
              source="Original preferred, Nappy.co or AllGo"
              aspect="16/9"
            />
          </div>
        </div>
      </section>

      <section className="bg-dr-white">
        <div className="mx-auto max-w-8xl px-4 md:px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PLACEHOLDERS.map((n) => (
              <article key={n} className="card-surface">
                <div className="photo-slot aspect-[16/9] mb-4 rounded">
                  <span className="text-sm">
                    Desert Rose Gives placeholder graphic
                  </span>
                </div>
                <h3 className="text-dr-royal">Post title pending</h3>
                <p className="text-dr-slate text-sm mt-1">
                  Date pending
                </p>
                <p className="text-dr-ink text-sm mt-3">
                  Excerpt pending. Desert Rose Gives will publish real
                  community news here as it is ready, seeded by the founder
                  and the board.
                </p>
                <p className="mt-4 text-sm text-dr-slate italic">
                  Placeholder post
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dr-cream">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 text-center">
          <h2 className="mb-3">Get the next one in your inbox.</h2>
          <p className="text-dr-ink mb-6">
            Subscribe to the Desert Rose Gives newsletter and we will send
            community updates, program news, and invitations when there is
            something real to share.
          </p>
          <div className="max-w-md mx-auto text-left">
            <NewsletterForm variant="inline" />
          </div>
          <div className="mt-10">
            <ImageSlot
              alt="A community member reading an email newsletter on a device in a warm indoor setting."
              source="AllGo or Nappy.co"
              aspect="16/9"
            />
          </div>
        </div>
      </section>
    </>
  );
}
