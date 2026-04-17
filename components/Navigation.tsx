'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/impact', label: 'Impact' },
  { href: '/financials', label: 'Financials' },
  { href: '/contact', label: 'Contact' },
];

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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'bg-ink-950/85 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
      >
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Desert Rose Gives — home"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400 transition-transform group-hover:scale-125" />
          <span className="display text-[17px] font-semibold tracking-displayish text-bone-50">
            Desert Rose <span className="display-italic text-sky-400">gives</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] tracking-wide uppercase text-bone-200 hover:text-sky-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="group relative inline-flex items-center gap-2 rounded-full border border-sky-400/60 bg-royal-600 hover:bg-royal-700 px-5 py-2 text-[13px] font-semibold tracking-wide uppercase text-bone-50 transition-colors"
          >
            Donate
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <button
          className="md:hidden text-bone-50"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-white/5 bg-ink-900 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-bone-100 hover:text-sky-400"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full bg-royal-600 px-5 py-3 text-sm font-semibold text-bone-50"
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
