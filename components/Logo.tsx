import Image from 'next/image';
import Link from 'next/link';

export default function Logo({
  width = 200,
  priority = false,
  href = '/',
}: {
  width?: number;
  priority?: boolean;
  href?: string | null;
}) {
  const img = (
    <Image
      src="/dr-gives-logo.png"
      alt="Desert Rose Gives logo"
      width={width}
      height={Math.round(width * 0.42)}
      priority={priority}
      className="h-auto w-auto"
      style={{ maxWidth: `${width}px` }}
    />
  );
  if (!href) return img;
  return (
    <Link href={href} aria-label="Desert Rose Gives, home" className="inline-block">
      {img}
    </Link>
  );
}
