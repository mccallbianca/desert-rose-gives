'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import DonateButton from './DonateButton';
import { NAV } from '@/lib/site';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-dr-white/95 backdrop-blur-md border-b border-dr-mist'
          : 'bg-dr-white border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-8xl items-center justify-between px-4 md:px-6 py-4"
      >
        <Logo width={180} priority />

        <div className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dr-ink hover:text-dr-royal transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <DonateButton />
        </div>

        <button
          className="lg:hidden text-dr-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-dr-mist bg-dr-white"
        >
          <div className="px-4 md:px-6 py-5 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-dr-ink hover:text-dr-royal"
              >
                {item.label}
              </Link>
            ))}
            <DonateButton className="justify-center" />
          </div>
        </div>
      )}
    </header>
  );
}
