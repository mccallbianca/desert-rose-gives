'use client';

import { useState } from 'react';

export default function NewsletterForm({
  variant = 'footer',
}: {
  variant?: 'footer' | 'inline';
}) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, email }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
      setFirstName('');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  const id = variant === 'footer' ? 'nl-footer' : 'nl-inline';

  if (status === 'success') {
    return (
      <p
        role="status"
        className="text-sm text-dr-success"
        aria-live="polite"
      >
        Thank you. We will send you the next update when we have one.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
      <div>
        <label
          htmlFor={`${id}-first-name`}
          className="block text-sm font-medium text-dr-ink mb-1"
        >
          First name
        </label>
        <input
          id={`${id}-first-name`}
          type="text"
          required
          autoComplete="given-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
        />
      </div>
      <div>
        <label
          htmlFor={`${id}-email`}
          className="block text-sm font-medium text-dr-ink mb-1"
        >
          Email
        </label>
        <input
          id={`${id}-email`}
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary justify-center"
      >
        {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p role="alert" className="text-sm text-dr-error">
          Something went wrong. Please try again, or email{' '}
          <a href="mailto:hello@desertrosegives.org">hello@desertrosegives.org</a>
          .
        </p>
      )}
    </form>
  );
}
