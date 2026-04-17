'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const line = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function Hero() {
  return (
    <section className="relative bg-spotlight bg-grain overflow-hidden">
      {/* Side label — Baseborn-style vertical tag */}
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-6 text-[11px] uppercase tracking-[0.3em] text-bone-300 vertical-text">
        (01) Community wellness · 501(c)(3)
      </div>
      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-6 text-[11px] uppercase tracking-[0.3em] text-bone-300 vertical-text">
        Est. 2023 · Nevada / USA
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-36 pb-40 md:pt-44 md:pb-52">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p
            variants={line}
            className="text-[11px] uppercase tracking-[0.3em] text-sky-400"
          >
            Trauma-informed · Clinically led · Federally aligned
          </motion.p>

          <motion.h1
            variants={line}
            className="display mt-8 text-[13vw] md:text-[112px] leading-[0.92] font-medium text-bone-50 max-w-6xl"
          >
            We fund the <span className="display-italic text-sky-400">healing</span>
            <br />
            the system forgets.
          </motion.h1>

          <motion.p
            variants={line}
            className="mt-10 max-w-2xl text-lg md:text-xl text-bone-200 leading-relaxed"
          >
            A 501(c)(3) community wellness nonprofit — and the research partner of{' '}
            <span className="text-bone-50 font-medium">ECQO Holdings</span>, the world&rsquo;s first verified clinical AI companion platform. We fund, pilot, and deliver trauma-informed behavioral health, problem-gambling prevention, and existential wellness programs through federal, state, tribal, and philanthropic grants.
          </motion.p>

          <motion.div variants={line} className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="group inline-flex items-center gap-3 rounded-full bg-royal-600 hover:bg-royal-700 px-7 py-4 text-sm font-semibold tracking-wide uppercase text-bone-50 transition-colors"
            >
              Donate
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/programs"
              className="group inline-flex items-center gap-3 rounded-full border border-white/15 hover:border-sky-400 px-7 py-4 text-sm font-semibold tracking-wide uppercase text-bone-50 transition-colors"
            >
              Our programs
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom meta row */}
      <div className="relative z-10 border-t border-white/5 bg-ink-950/60 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-10 text-[11px] uppercase tracking-[0.2em] text-bone-300">
          <div><span className="text-sky-400">01 /</span> Research</div>
          <div><span className="text-sky-400">02 /</span> Consulting</div>
          <div><span className="text-sky-400">03 /</span> Counseling</div>
          <div><span className="text-sky-400">04 /</span> Workforce development</div>
        </div>
      </div>
    </section>
  );
}
