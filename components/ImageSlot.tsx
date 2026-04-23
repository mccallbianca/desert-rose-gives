import Image from 'next/image';

type Aspect = '16/9' | '4/3' | '1/1' | '3/4';

export default function ImageSlot({
  src,
  alt,
  source,
  aspect = '16/9',
  className = '',
  priority = false,
}: {
  src?: string;
  alt: string;
  source?: string;
  aspect?: Aspect;
  className?: string;
  priority?: boolean;
}) {
  const aspectClass =
    aspect === '16/9'
      ? 'aspect-[16/9]'
      : aspect === '4/3'
        ? 'aspect-[4/3]'
        : aspect === '3/4'
          ? 'aspect-[3/4]'
          : 'aspect-square';

  if (src) {
    return (
      <figure className={`${className} w-full`}>
        <div
          className={`relative ${aspectClass} overflow-hidden rounded-lg bg-dr-mist`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 1280px) 1200px, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </figure>
    );
  }

  return (
    <figure className={`${className} w-full`}>
      <div
        role="img"
        aria-label={alt}
        className={`${aspectClass} relative overflow-hidden rounded-lg flex items-center justify-center text-center p-6`}
        style={{
          background:
            'linear-gradient(135deg, #2D3192 0%, #1B357A 55%, #2D3192 100%)',
        }}
      >
        <div className="max-w-md text-dr-white">
          <div className="text-xs uppercase tracking-wider mb-2 text-dr-sky font-semibold">
            Desert Rose Gives
          </div>
          <div className="text-sm leading-snug opacity-90">{alt}</div>
          {source && (
            <div className="text-xs mt-2 opacity-70 italic">
              Image placeholder
            </div>
          )}
        </div>
      </div>
    </figure>
  );
}
