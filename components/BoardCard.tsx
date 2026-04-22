import Image from 'next/image';

export default function BoardCard({
  name,
  role,
  image,
  alt,
  bio,
  draft = false,
}: {
  name: string;
  role: string;
  image: string;
  alt: string;
  bio: string;
  draft?: boolean;
}) {
  return (
    <article className="card-surface flex flex-col">
      <div className="relative aspect-square overflow-hidden rounded mb-4 bg-dr-mist">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 40vw, 80vw"
          className="object-cover"
        />
      </div>
      <h3 className="text-dr-royal text-xl">{name}</h3>
      <p className="text-dr-slate text-base mb-3">{role}</p>
      {draft && (
        <p className="text-xs uppercase tracking-wider text-dr-warning mb-2">
          Draft, pending finalization
        </p>
      )}
      <p className="text-sm leading-relaxed text-dr-ink">{bio}</p>
    </article>
  );
}
