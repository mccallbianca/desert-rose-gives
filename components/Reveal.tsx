'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useEffect, useState, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  className?: string;
}

/**
 * Reveal — scroll-triggered fade+slide for off-viewport content.
 *
 * SSR and first paint stay fully visible so content is usable without JS and
 * full-page screenshotters capture real pixels. On mount we check whether the
 * element is already in view: if so, no animation; if not, we hide it and
 * animate it in when it scrolls into view.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  className = '',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<'static' | 'hidden' | 'visible'>('static');
  const inView = useInView(ref, { once, margin: '-80px 0px' });

  useEffect(() => {
    if (reduce) {
      setMode('static');
      return;
    }
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const aboveFold = rect.top < window.innerHeight - 80;
    setMode(aboveFold ? 'static' : 'hidden');
  }, [reduce]);

  useEffect(() => {
    if (mode === 'hidden' && inView) setMode('visible');
  }, [mode, inView]);

  const target =
    mode === 'hidden' ? { opacity: 0, y } : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={target}
      transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
