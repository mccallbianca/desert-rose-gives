# DR Gives Phase 5 Completion Report

**Date:** April 21, 2026 (deploy completed 2026-04-22 05:51 UTC)
**Prepared for:** Bianca D. McCall, LMFT, Founder and President, Desert Rose Gives
**Source of truth:** `DR_GIVES_SITE_COPY_V1.md` at `/Users/bdmccall/Projects/desert-rose-gives/DR_GIVES_SITE_COPY_V1.md`, 1,387 lines, modified 2026-04-21 21:32.
**Phase 4 compliance review:** `/Users/bdmccall/Desktop/DR_Gives_Site/DR_GIVES_LEGAL_COMPLIANCE_REVIEW.md`
**Build status:** Production deploy succeeded. All 19 routes live.

---

## 1. Live URLs and deployment identifiers

| Item | Value |
|---|---|
| Production URL (Vercel alias) | https://desert-rose-gives.vercel.app |
| Production URL (canonical deployment) | https://desert-rose-gives-2i0dnefx4-mccallbianca-9993s-projects.vercel.app |
| Vercel deployment ID | `dpl_DEiRiwugPeQ9dnyoPaf5bV5LhFXw` |
| Vercel deployment inspector | https://vercel.com/mccallbianca-9993s-projects/desert-rose-gives/DEiRiwugPeQ9dnyoPaf5bV5LhFXw |
| Git commit SHA | `952356ab8ff16345fd64923f0a71a02b1dd8a3db` |
| GitHub repository | https://github.com/mccallbianca/desert-rose-gives |
| Branch pushed | `main` |
| Build completed in | 27 seconds on Vercel |

**Note on the custom domain www.desertrosegives.org:** the site is NOT yet resolving at the custom domain. That requires the GoDaddy nameserver change to Cloudflare and the Cloudflare DNS records pointing to Vercel, which are steps Bianca performs directly on those accounts. Section 8 of this report lists the exact DNS records to add.

---

## 2. Every page built

All 19 routes generated as static pages (or server-rendered where applicable). Confirmed in the `next build` manifest and verified live with HTTP 200.

| Route | Type | Purpose |
|---|---|---|
| `/` | static | Homepage with hero, program cards, impact snapshot, how you can help |
| `/about` | static | Founding story, mission, vision, values, board, partnerships, who we serve |
| `/programs` | static | Programs index with WellXcel and Mind Over Media cards |
| `/programs/wellxcel` | static | WellXcel individual program page |
| `/programs/mind-over-media` | static | Mind Over Media individual program page |
| `/impact` | static | Landscape stats with sources, DR Gives outcomes, illustrative composites vignettes |
| `/get-involved` | static | Volunteer, Donate, Partner, In-kind with donor acknowledgment block |
| `/news` | static | News/stories page with five placeholder post cards |
| `/contact` | static | Contact with CrisisResources block, form, emails, mailing, phone |
| `/privacy` | static | Privacy Policy (Section 10 of source-of-truth file) |
| `/accessibility` | static | Accessibility Statement (Section 11 of source-of-truth file) |
| `/donate` | static | Info page with PayPal CTA (for external links that hit /donate) |
| `/api/contact` | server | Contact form endpoint (accepts and logs; vendor email wiring pending) |
| `/api/newsletter` | server | Newsletter subscribe endpoint (accepts and logs; vendor email wiring pending) |
| `/robots.txt` | static | Search engine directives |
| `/sitemap.xml` | static | Sitemap for all public pages |

---

## 3. Every form wired

| Form | Endpoint | Status at launch |
|---|---|---|
| Contact form (`/contact`) | `POST /api/contact` | Accepts submissions, validates fields, logs to Vercel request logs. **Email forwarding to Bianca is pending an email service provider selection** (see Section 9). Users can always reach out directly at hello@desertrosegives.org. |
| Newsletter subscribe (footer, home, news) | `POST /api/newsletter` | Accepts submissions and logs. **Vendor-side list delivery is pending email service provider selection.** |
| Donate CTA | External redirect to PayPal | Live. Routes to `NEXT_PUBLIC_PAYPAL_DONATE_URL` if set; fallback routes to a generic PayPal donate form that pre-fills hello@desertrosegives.org. **Set `NEXT_PUBLIC_PAYPAL_DONATE_URL` in the Vercel project environment variables to your actual PayPal Giving Fund or hosted-button URL.** |

---

## 4. Every compliance requirement implemented

### 4.1 Phase 4 copy edits reflected in code

| Phase 4 edit category | Implementation |
|---|---|
| ECQO firewall | Explicit donor-fund firewall paragraph in `/get-involved` Donate section. ECQO described only as named independent research partner, never as product, marketer, or infrastructure. `parentOrganization` schema relationship with ECQO removed. |
| Non-clinical WellXcel framing | WellXcel page explicitly labels itself as a prevention, education, training, and consultation program. Language about therapy, counseling, care management, and 24/7/365 critical incident response removed everywhere. Warm handoff to licensed providers and crisis-line partners is the referenced pathway. |
| Outcome figures substantiated | Impact page shows 11,598 / 70% / 40% / 100% for WellXcel and 70 direct youth participants for Mind Over Media, each with a named source line. Sources and methodology section at page bottom cites WellXcel Impact and Outcomes summary and Desert Rose Gives Child Death Review Grant Application. |
| Partner naming discipline | Only six named partners appear on the site: Intermountain Health, Vegas Golden Knights Foundation, University of Nevada Reno (CASAT and NRAP), WestCare Nevada Inc., ECQO Holdings, Village Schools Organizations. Non-permitted partners referenced only generically with the "listed publicly only after written permission is on file" disclaimer. |
| SAMHSA safe messaging | `CrisisResources` component with 988, Crisis Text Line, Veterans, Nevada 211, and 911 guidance, SAMHSA safe-messaging disclaimer. Rendered on About (below founding story), Impact (after landscape section), Contact (above form, variant="contact"), WellXcel (bottom), Mind Over Media (top and bottom). |
| Typographic corrections | "Nevada System of Higher Education" (correct name) present in copy. "August 2022" removed, replaced with "since 2022." Zero em dashes across the entire source tree verified by grep. |
| Privacy Policy at /privacy | Rendered from Section 10 of source-of-truth copy. Links from footer. Vendor placeholders for email service and analytics preserved so Bianca can fill in after selection. |
| Accessibility Statement at /accessibility | Rendered from Section 11 of source-of-truth copy. Links from footer. |
| Donor acknowledgment | Dedicated block in `/get-involved` Donate section: EIN disclosure, IRS $250 substantiation language, PayPal and QuickBooks disclosure, 501(c)(3) Determination Letter available on request. |
| Participation consent and safety | Dedicated "How we hold participants safely" sections on both program pages with NRS 432B mandatory reporter disclosure and volunteer background screening posture. |
| Third-party service provider naming | StreamYard, Jasper AI, Notion named on Mind Over Media methodology with trademark disclaimer at section end. Footer also includes blanket trademark disclaimer. |
| Age bands clarified | About "Who we serve" and both program pages distinguish minor participants (13 to 17, guardian consent) from adult participants (18 to 26, self-consent). |
| Illustrative composites vignettes | Impact page renders all five vignettes with the authoritative section intro labeling them illustrative composites based on common participant experiences. |
| PayPal + QuickBooks payment processor | Stripe removed from `package.json`, `/api/donate` Stripe route deleted, `DonateForm` component deleted. All Donate CTAs route to PayPal. |
| Seven branded forwarding addresses | Contact page lists hello@, info@, privacy@, media@, volunteer@, grants@, accessibility@. Footer uses accessibility@ for ADA contact. |
| Board bios | Four real bios (Rachel Kaplan, Heather L. Parisi, Steven Ness, Morris Jackson II) published as written in the source-of-truth file. Bianca's bio card is rendered with a visible "Draft, pending finalization" label because the source file leaves it for Bianca to write. |

### 4.2 Brand tokens, light mode, and WCAG

- Light mode default: `<body>` uses `bg-dr-white text-dr-ink`; `color-scheme: light`; no dark-mode fallback.
- DR Gives brand tokens (Royal `#2D3192`, Navy `#1B357A`, Sky `#7ECDEE`, White, Cream, Ink, Slate, Mist, plus semantic Success/Warning/Error) in `tailwind.config.ts` and as CSS custom properties in `globals.css`.
- Typography: Playfair Display display, Inter body, Caveat script reserved for future use, loaded via `fonts.googleapis.com` preconnect.
- Contrast: text pairs used on the site (Ink on White, Ink on Cream, White on Royal, White on Navy) all exceed WCAG AA ratios per the brand tokens file.
- Focus states: visible 2px Sky outline on all interactive elements via `:focus-visible`, never removed.
- `prefers-reduced-motion` respected via a global CSS rule that neutralizes transitions and animations.
- Skip-to-content link present in layout.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`, and `<h1>`/`<h2>`/`<h3>` hierarchy on every page.
- Forms: visible labels, ARIA error messages with `aria-invalid`, keyboard-navigable, validation messages that describe what went wrong.
- Alt text: every photographic image slot carries descriptive alt text from the source-of-truth copy. Board portraits use the alt text from `DR_GIVES_BOARD_ROSTER_METADATA.md`.

### 4.3 Logo placement

- DR Gives logo (`/dr-gives-logo.png`, copied from `DR GIVES Transparent (3).png`) appears in the header of every page via the `Logo` component (180px width, priority load on home).
- Logo appears again in the footer on every page (200px width).

### 4.4 Minimum three photographic images per page

Every page renders three or more `ImageSlot` components with brand-aligned placeholder treatment and descriptive alt text. The About page additionally renders five board portraits that are actual image files (not slots). At launch, photographic image slots are labeled placeholders that clearly show what the final photograph will be and its recommended source. Swap in stock or original photography after image-licensing approvals.

---

## 5. Every item still blocking production (open items)

These remained open from your own Phase 4 status block and Phase 4 gating conditions. The site is now publicly live, but the items below are still outstanding and should be resolved before the site carries its full public weight.

| # | Open item | Responsibility | When |
|---|---|---|---|
| 1 | Nevada nonprofit attorney clearance on the 11 Phase 4 attorney-review items, with specific sign-off on the ECQO firewall language and the non-clinical WellXcel framing | Bianca with Nevada attorney | Thursday attorney meeting + Friday revision cycle |
| 2 | Nevada Attorney General charitable solicitation registration verification. If not active, the Donate CTA should be hidden until registration is active | Bianca | Before meaningful donation traffic |
| 3 | Outcome substantiation memo pulling every Impact page figure to its underlying source document | Bianca | Before Thursday meeting |
| 4 | Partnership documentation matrix listing each named partner's relationship, permission status, contact, and date of permission | Bianca | Before Thursday meeting |
| 5 | PMB mailing address consistency verified across IRS records, Nevada Secretary of State, and bank records | Bianca | Before end of month |
| 6 | Privacy Policy and Accessibility Statement both reviewed by counsel; Privacy Policy vendor placeholders resolved | Bianca with attorney | Post-launch cycle |
| 7 | Analytics and email service provider selection, then wire contact and newsletter forms to the selected provider | Bianca to select; Claude to wire | Post-launch cycle |
| 8 | Bianca's own finalized board bio (currently displayed with a visible "Draft, pending finalization" label) | Bianca | Anytime |
| 9 | News post seed content (five post cards currently placeholder) | Bianca | Anytime |
| 10 | Community Voice vignette replacement with real, documented-consent stories | Bianca | Anytime |
| 11 | Trademark decision on "Seen, Heard, and Understood" framework | Bianca | Post-launch cycle |

---

## 6. Environment variables to set in Vercel project settings

Navigate to Vercel project `desert-rose-gives` > Settings > Environment Variables. Set the following for Production scope:

| Variable | Suggested value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.desertrosegives.org` | Once custom domain is active. Until then, the Vercel alias URL is fine. |
| `NEXT_PUBLIC_PAYPAL_DONATE_URL` | The actual Desert Rose Gives PayPal Giving Fund page or hosted-button URL | Without this, the Donate button uses a generic PayPal donate form prefilled with hello@desertrosegives.org as the business email. Replace with the accurate URL before accepting meaningful donation volume. |
| `CONTACT_EMAIL` | `hello@desertrosegives.org` | Read by server when email service provider is wired. |
| `EMAIL_SERVICE_PROVIDER` | pending | Wire after vendor selection. |
| `EMAIL_SERVICE_API_KEY` | pending | Secret, Production scope only. |
| `ANALYTICS_PROVIDER` | pending | Wire after vendor selection. |

Redeploy after setting env vars so they take effect.

---

## 7. Lighthouse-style checks to run post-deploy

I recommend you run Lighthouse or PageSpeed Insights against:

- https://desert-rose-gives.vercel.app/
- https://desert-rose-gives.vercel.app/about
- https://desert-rose-gives.vercel.app/programs/wellxcel
- https://desert-rose-gives.vercel.app/impact
- https://desert-rose-gives.vercel.app/contact

Target: performance > 90, accessibility 100, best practices > 95. The build is static and uses preconnect for fonts, so performance numbers should be strong out of the box. If accessibility is not 100, most likely fixes are contrast adjustments on the Sky accents against Cream; I used Royal and Ink for text throughout to avoid that hazard, but the visual audit will be definitive.

---

## 8. Domain and email routing steps you still need to do yourself

These actions require GoDaddy, Cloudflare, and Vercel dashboard access. I cannot perform them.

### 8.1 Point www.desertrosegives.org at Vercel

1. GoDaddy: change nameservers for `desertrosegives.org` to the two Cloudflare nameservers assigned to your Cloudflare zone. Propagation is usually under an hour.
2. Cloudflare: create a zone for `desertrosegives.org`. Add these DNS records:
   - Type `A`, Name `@`, Value `76.76.21.21` (Vercel apex IP), Proxy off (DNS only) for Vercel verification. After verification, you may re-enable proxy if you want Cloudflare in front of Vercel, though Vercel does not require it.
   - Type `CNAME`, Name `www`, Value `cname.vercel-dns.com`, Proxy off.
3. Vercel: project > Settings > Domains. Add `www.desertrosegives.org` and `desertrosegives.org`. Vercel auto-issues TLS via Let's Encrypt when DNS resolves.
4. After the domain is active, update `NEXT_PUBLIC_SITE_URL` in Vercel env vars to `https://www.desertrosegives.org` and redeploy.

### 8.2 Cloudflare Email Routing for seven forwarding addresses

1. Cloudflare > Email > Email Routing > Enable.
2. Add the required MX and TXT records Cloudflare provides (automatic if you accept the wizard).
3. Add forwarding rules, each forwarding to `mccall.bianca@gmail.com`:
   - `hello@desertrosegives.org`
   - `info@desertrosegives.org`
   - `privacy@desertrosegives.org`
   - `media@desertrosegives.org`
   - `volunteer@desertrosegives.org`
   - `grants@desertrosegives.org`
   - `accessibility@desertrosegives.org`
4. Gmail: create the filter that applies the label "DR GIVES WEBSITE" to messages that match any of the forwarded `@desertrosegives.org` addresses. This is a Gmail-side setting outside of the codebase.

---

## 9. Pending content integrations

The contact form and newsletter form currently post to Next.js server routes that accept, validate, and log submissions but do not yet forward them to an external email service. To complete this integration after you select a provider:

- If you choose Resend: add `RESEND_API_KEY` to Vercel env and replace the `console.log` in `/app/api/contact/route.ts` and `/app/api/newsletter/route.ts` with the Resend SDK call.
- If you choose Mailchimp or ConvertKit: wire via their API using the equivalent API key pattern.

Until this is wired, Bianca will not receive contact form submissions as email. The submissions still show in the Vercel request logs, so no message is lost, but it is not a substitute for email delivery. Users can always reach out at hello@desertrosegives.org directly, which is covered by Cloudflare Email Routing once 8.2 is set up.

---

## 10. Compliance posture recap (Claude's note)

This production deploy went live before Nevada attorney clearance on the 11 Phase 4 attorney-review items. That is consistent with the written authorization in this session but is inconsistent with the gating conditions you wrote in your Phase 4 response message and in the Phase 4 status block inside the source-of-truth file.

I surfaced the contradiction at three points during this build cycle and proceeded per your explicit override. The attorney-review items remain open and are tracked in Section 5 above. If the Nevada attorney asks for copy changes Thursday or Friday, the site can be revised and redeployed in minutes because the copy lives in the source-of-truth file and the build is fully static.

If at any point you want to temporarily hide the Donate CTA (for example, until Nevada AG charitable solicitation registration is confirmed), the fastest path is:
1. Set `NEXT_PUBLIC_PAYPAL_DONATE_URL=/contact?intent=donate` in Vercel env vars and redeploy. The Donate button will route to the Contact page rather than to PayPal.
2. Or temporarily comment out the `DonateButton` imports in `Navigation.tsx`, the three homepage cards, and the page close invitations, and redeploy.

---

## 11. Run locally

```
cd /Users/bdmccall/Projects/desert-rose-gives
npm install
npm run dev
# open http://localhost:3000
```

## 12. Redeploy after changes

```
cd /Users/bdmccall/Projects/desert-rose-gives
# ...edits...
git add -A
git commit -m "your message"
git push origin main
# Vercel auto-deploys on push to main. Manual alternative:
npx vercel --prod
```

---

## 13. End of Phase 5 report

Phase 5 (Build Execution) is complete. The site is live at https://desert-rose-gives.vercel.app and tracks commit `952356a` on branch `main`. The eleven open items in Section 5 and the dashboard-only actions in Section 8 and 9 remain with you.
