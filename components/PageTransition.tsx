'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * PageTransition — wraps every page in a cinematic fade+rise.
 * Gives the Baseborn-style sense of "arriving" on each route.
 */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
