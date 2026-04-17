'use client';

import { useState } from 'react';

export default function FounderPortrait() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-royal-600 via-ink-800 to-sky-900 border border-white/10 overflow-hidden relative">
      {!errored && (
        <img
          src="/bianca.jpg"
          alt="Bianca D. McCall, LMFT — founder of Desert Rose Gives"
          className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-90' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
        />
      )}
      {(errored || !loaded) && (
        <div
          aria-hidden={!errored}
          className="absolute inset-0 flex items-end justify-start p-6"
        >
          <p className="display text-2xl text-bone-50/70">
            Bianca D. McCall, <span className="display-italic text-sky-400">LMFT</span>
          </p>
        </div>
      )}
    </div>
  );
}
