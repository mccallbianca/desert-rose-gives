export default function CrisisResources({
  variant = 'standard',
  id,
}: {
  variant?: 'standard' | 'contact';
  id?: string;
}) {
  if (variant === 'contact') {
    return (
      <aside
        id={id}
        aria-labelledby="crisis-contact-heading"
        className="card-cream my-8 border-l-4 border-dr-royal"
      >
        <h2
          id="crisis-contact-heading"
          className="text-xl font-semibold mb-3 text-dr-ink"
        >
          If you need help right now, please do not wait for us.
        </h2>
        <p className="text-dr-ink mb-3">
          Desert Rose Gives is not a crisis service and does not provide
          emergency clinical response. If you or someone you love is in crisis:
        </p>
        <ul className="space-y-2 text-dr-ink">
          <li>
            Call or text{' '}
            <a href="tel:988" className="font-semibold">
              988
            </a>{' '}
            for the Suicide and Crisis Lifeline, 24 hours a day, 7 days a week.
          </li>
          <li>
            Text <strong>HOME</strong> to{' '}
            <a href="sms:741741" className="font-semibold">
              741741
            </a>{' '}
            for the Crisis Text Line.
          </li>
          <li>
            Veterans: call{' '}
            <a href="tel:988" className="font-semibold">
              988
            </a>{' '}
            and press 1, or text{' '}
            <a href="sms:838255" className="font-semibold">
              838255
            </a>
            .
          </li>
          <li>
            Dial{' '}
            <a href="tel:211" className="font-semibold">
              211
            </a>{' '}
            for Nevada 211 to reach local resources, including housing, food,
            and non-crisis behavioral health referrals.
          </li>
          <li>
            If the situation is life-threatening, call{' '}
            <a href="tel:911" className="font-semibold">
              911
            </a>{' '}
            or go to the nearest emergency room.
          </li>
        </ul>
      </aside>
    );
  }

  return (
    <aside
      id={id}
      aria-labelledby="crisis-heading"
      className="card-cream my-8 border-l-4 border-dr-royal"
    >
      <h2
        id="crisis-heading"
        className="text-xl font-semibold mb-3 text-dr-ink"
      >
        If you or someone you know needs help right now.
      </h2>
      <p className="text-dr-ink mb-3">
        If you are in crisis, help is available 24 hours a day, 7 days a week.
      </p>
      <ul className="space-y-2 text-dr-ink">
        <li>
          <strong>988 Suicide and Crisis Lifeline:</strong> call or text{' '}
          <a href="tel:988" className="font-semibold">
            988
          </a>
        </li>
        <li>
          <strong>Crisis Text Line:</strong> text HOME to{' '}
          <a href="sms:741741" className="font-semibold">
            741741
          </a>
        </li>
        <li>
          <strong>Veterans Crisis Line:</strong> call{' '}
          <a href="tel:988" className="font-semibold">
            988
          </a>{' '}
          and press 1, or text{' '}
          <a href="sms:838255" className="font-semibold">
            838255
          </a>
        </li>
        <li>
          <strong>Nevada 211:</strong> dial{' '}
          <a href="tel:211" className="font-semibold">
            211
          </a>{' '}
          for local resources, including housing, food, and non-crisis
          behavioral health referrals.
        </li>
        <li>
          <strong>
            If the situation is life-threatening, call{' '}
            <a href="tel:911" className="font-semibold">
              911
            </a>{' '}
            or go to the nearest emergency room.
          </strong>
        </li>
      </ul>
      <p className="mt-3 text-sm text-dr-slate">
        Desert Rose Gives follows SAMHSA safe messaging guidelines. We do not
        publish detailed descriptions of suicide methods or means, and we
        center stories of help-seeking, recovery, and community support.
        Program participation is not a substitute for clinical care.
      </p>
    </aside>
  );
}
