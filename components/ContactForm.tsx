'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const INTERESTS = [
  { value: 'volunteer', label: 'Volunteer' },
  { value: 'partner', label: 'Partner' },
  { value: 'donate', label: 'Donate' },
  { value: 'media', label: 'Media' },
  { value: 'refer', label: 'Refer someone' },
  { value: 'other', label: 'Other' },
];

function ContactFormInner() {
  const params = useSearchParams();
  const preset = params.get('intent') || '';
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(
    INTERESTS.find((i) => i.value === preset)?.value || '',
  );
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!firstName.trim()) e.firstName = 'Please enter your first name.';
    if (!lastName.trim()) e.lastName = 'Please enter your last name.';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = 'Please enter a valid email address.';
    if (!interest) e.interest = 'Please choose an interest area.';
    if (!message.trim() || message.trim().length < 20)
      e.message = 'Please tell us a little more, at least 20 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          interest,
          organization,
          message,
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div
        role="status"
        aria-live="polite"
        className="card-cream border-l-4 border-dr-success"
      >
        <h3 className="text-dr-ink mb-2">Thank you.</h3>
        <p className="text-dr-ink">
          We received your message and a real human on our team will read every
          word. We aim to reply within three to five business days.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="card-surface space-y-5"
      aria-describedby="contact-form-privacy"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-dr-ink mb-1"
          >
            First name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-invalid={!!errors.firstName}
            aria-describedby={
              errors.firstName ? 'first-name-error' : undefined
            }
            className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
          />
          {errors.firstName && (
            <p id="first-name-error" className="mt-1 text-sm text-dr-error">
              {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-dr-ink mb-1"
          >
            Last name <span aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label>
          <input
            id="last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'last-name-error' : undefined}
            className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
          />
          {errors.lastName && (
            <p id="last-name-error" className="mt-1 text-sm text-dr-error">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-dr-ink mb-1"
        >
          Email address <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-dr-error">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-dr-ink mb-1"
        >
          Interest area <span aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <select
          id="interest"
          name="interest"
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          aria-invalid={!!errors.interest}
          aria-describedby={errors.interest ? 'interest-error' : undefined}
          className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
        >
          <option value="">Choose an interest area</option>
          {INTERESTS.map((i) => (
            <option key={i.value} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p id="interest-error" className="mt-1 text-sm text-dr-error">
            {errors.interest}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-dr-ink mb-1"
        >
          Organization or community affiliation{' '}
          <span className="text-dr-slate text-xs">(optional)</span>
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-dr-ink mb-1"
        >
          Message <span aria-hidden="true">*</span>
          <span className="sr-only">(required, minimum 20 characters)</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className="w-full rounded border border-dr-mist bg-dr-white px-3 py-2 text-dr-ink focus:border-dr-royal"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-dr-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary"
      >
        {status === 'submitting' ? 'Sending...' : 'Send message'}
      </button>

      {status === 'error' && (
        <p role="alert" className="text-sm text-dr-error">
          Something went wrong sending your message. Please try again, or email
          us directly at{' '}
          <a href="mailto:hello@desertrosegives.org">
            hello@desertrosegives.org
          </a>
          .
        </p>
      )}

      <p id="contact-form-privacy" className="text-xs text-dr-slate">
        Your information is only used to respond to your message and will not
        be sold or shared. See the{' '}
        <a href="/privacy" className="underline">
          privacy policy
        </a>{' '}
        for details.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-dr-slate">Loading form...</div>}>
      <ContactFormInner />
    </Suspense>
  );
}
