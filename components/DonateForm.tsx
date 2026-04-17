'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const PRESETS = [25, 50, 100, 250, 500, 1000];

export default function DonateForm() {
  const [amount, setAmount] = useState<number>(100);
  const [custom, setCustom] = useState<string>('');
  const [mode, setMode] = useState<'one_time' | 'monthly'>('one_time');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const dollars = custom ? Number(custom) : amount;
    if (!dollars || dollars < 5) {
      setError('Minimum donation is $5.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: dollars, mode, email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Unable to start checkout.');
      if (data.url) window.location.href = data.url;
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Mode toggle */}
      <div className="inline-flex rounded-full border border-white/10 p-1 bg-ink-900">
        {(['one_time', 'monthly'] as const).map((m) => (
          <button
            type="button"
            key={m}
            onClick={() => setMode(m)}
            className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-colors ${
              mode === m ? 'bg-royal-600 text-bone-50' : 'text-bone-300 hover:text-bone-50'
            }`}
          >
            {m === 'one_time' ? 'One-time' : 'Monthly'}
          </button>
        ))}
      </div>

      {/* Preset amounts */}
      <div className="grid grid-cols-3 gap-3">
        {PRESETS.map((p) => (
          <motion.button
            type="button"
            key={p}
            whileTap={{ scale: 0.96 }}
            onClick={() => {
              setAmount(p);
              setCustom('');
            }}
            className={`rounded-xl border px-5 py-5 text-center transition-colors ${
              !custom && amount === p
                ? 'border-sky-400 bg-royal-700/30 text-bone-50'
                : 'border-white/10 bg-ink-800/40 text-bone-200 hover:border-sky-400/60'
            }`}
          >
            <p className="display text-2xl">${p}</p>
          </motion.button>
        ))}
      </div>

      {/* Custom amount */}
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.2em] text-sky-400">Or enter a custom amount</span>
        <div className="mt-3 flex items-center gap-3 rounded-xl border border-white/10 bg-ink-800/40 px-5 py-4 focus-within:border-sky-400">
          <span className="text-bone-300 display text-xl">$</span>
          <input
            type="number"
            min={5}
            step={1}
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Any amount, $5+"
            className="flex-1 bg-transparent border-0 outline-none display text-xl text-bone-50 placeholder:text-bone-300"
          />
          <span className="text-xs text-bone-300">USD</span>
        </div>
      </label>

      {/* Email (optional) */}
      <label className="block">
        <span className="text-[11px] uppercase tracking-[0.2em] text-sky-400">Email for tax receipt (optional)</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-3 w-full rounded-xl border border-white/10 bg-ink-800/40 px-5 py-4 text-bone-50 placeholder:text-bone-300 focus:border-sky-400 outline-none"
        />
      </label>

      {error && (
        <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-royal-600 hover:bg-royal-700 disabled:opacity-60 disabled:cursor-not-allowed px-8 py-5 text-sm font-semibold uppercase tracking-wide text-bone-50 transition-colors"
      >
        {loading
          ? 'Starting secure checkout…'
          : mode === 'monthly'
          ? `Give $${custom || amount} monthly`
          : `Donate $${custom || amount}`}
      </button>

      <p className="text-xs text-bone-300 leading-relaxed">
        Secure checkout powered by Stripe. Desert Rose Gives is a 501(c)(3) nonprofit
        organization. Your contribution is tax-deductible to the fullest extent permitted
        by law. Tax receipt emailed within 48 hours.
      </p>
    </form>
  );
}
