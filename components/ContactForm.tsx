'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

const INTENTS = [
  { value: 'general', label: 'General inquiry' },
  { value: 'grant', label: 'Grantmaker / foundation' },
  { value: 'volunteer', label: 'Volunteer / navigator' },
  { value: 'partner', label: 'Clinical / research partner' },
  { value: 'speaking', label: 'Media / speaking request' },
];

function ContactFormInner() {
  const params = useSearchParams();
  const defaultIntent = params.get('intent') || 'general';

  const [intent, setIntent] = useState(defaultIntent);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  /**
   * For MVP we use a mailto: open so no backend email wiring is required.
   * Swap to a POST handler (e.g. Resend, Formspree, or /api/contact) when ready.
   */
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const routeTo =
      intent === 'grant' ? 'grants@desertrosegives.org' : 'hello@desertrosegives.org';
    const subject = encodeURIComponent(
      `[DR Gives · ${INTENTS.find((i) => i.value === intent)?.label}] — ${name || 'New inquiry'}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganization: ${org}\nIntent: ${intent}\n\n${message}`
    );
    window.location.href = `mailto:${routeTo}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-white/10 bg-ink-900/50 p-8 md:p-10">
      <div>
        <label className="text-[11px] uppercase tracking-[0.2em] text-sky-400">I am reaching out as…</label>
        <div className="mt-3 flex flex-wrap gap-2">
          {INTENTS.map((i) => (
            <button
              type="button"
              key={i.value}
              onClick={() => setIntent(i.value)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-wide transition-colors ${
                intent === i.value
                  ? 'bg-royal-600 text-bone-50 border border-sky-400'
                  : 'border border-white/10 text-bone-200 hover:border-sky-400/60'
              }`}
            >
              {i.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" value={name} onChange={setName} required />
        <Field label="Email" value={email} onChange={setEmail} type="email" required />
      </div>
      <Field label="Organization (optional)" value={org} onChange={setOrg} />

      <div>
        <label className="text-[11px] uppercase tracking-[0.2em] text-sky-400">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          className="mt-3 w-full rounded-xl border border-white/10 bg-ink-800/40 px-5 py-4 text-bone-50 placeholder:text-bone-300 focus:border-sky-400 outline-none resize-y"
          placeholder="Tell us what you need — grant scope, partnership interest, volunteer availability, etc."
        />
      </div>

      <button
        type="submit"
        className="rounded-full bg-royal-600 hover:bg-royal-700 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-bone-50 transition-colors"
      >
        Open message
      </button>
      {sent && (
        <p className="text-sm text-sky-400">
          Your email client should be opening. If it did not, email us directly at{' '}
          {intent === 'grant' ? 'grants@desertrosegives.org' : 'hello@desertrosegives.org'}.
        </p>
      )}
      <p className="text-xs text-bone-300 leading-relaxed">
        We reply within two business days for grant inquiries and within five business days for
        general inquiries. For urgent crisis needs, please call or text 988 directly.
      </p>
    </form>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div className="text-bone-300">Loading form…</div>}>
      <ContactFormInner />
    </Suspense>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-sky-400">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full rounded-xl border border-white/10 bg-ink-800/40 px-5 py-4 text-bone-50 placeholder:text-bone-300 focus:border-sky-400 outline-none"
      />
    </label>
  );
}
