import { SITE } from '@/lib/site';

export default function DonateButton({
  variant = 'primary',
  label = 'Donate',
  className = '',
}: {
  variant?: 'primary' | 'secondary';
  label?: string;
  className?: string;
}) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return (
    <a
      href={SITE.paypalDonateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} ${className}`.trim()}
      aria-label={`${label}, opens Desert Rose Gives PayPal donation page in a new tab`}
    >
      <span>{label}</span>
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </a>
  );
}
