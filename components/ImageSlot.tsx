export default function ImageSlot({
  alt,
  source,
  aspect = '16/9',
  className = '',
  children,
}: {
  alt: string;
  source: string;
  aspect?: '16/9' | '4/3' | '1/1' | '3/4';
  className?: string;
  children?: React.ReactNode;
}) {
  const aspectClass =
    aspect === '16/9'
      ? 'aspect-[16/9]'
      : aspect === '4/3'
        ? 'aspect-[4/3]'
        : aspect === '3/4'
          ? 'aspect-[3/4]'
          : 'aspect-square';

  return (
    <figure className={`${className} w-full`}>
      <div
        role="img"
        aria-label={alt}
        className={`photo-slot ${aspectClass} relative`}
      >
        <div className="max-w-md text-center">
          {children ?? (
            <>
              <div className="text-xs uppercase tracking-wider mb-2 text-dr-royal font-semibold">
                Photograph
              </div>
              <div className="text-sm leading-snug">{alt}</div>
              <div className="text-xs mt-2 text-dr-slate italic">
                Source: {source}
              </div>
            </>
          )}
        </div>
      </div>
    </figure>
  );
}
