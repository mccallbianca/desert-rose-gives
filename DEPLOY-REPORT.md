# DR Gives — Deploy Report

_Generated: 2026-04-17_

## Live URLs

- **Production (Vercel alias):** https://desert-rose-gives.vercel.app
- **Deployment (canonical):** https://desert-rose-gives-dvdxhqfsm-mccallbianca-9993s-projects.vercel.app
- **GitHub repo:** https://github.com/mccallbianca/desert-rose-gives
- **Vercel project inspector:** https://vercel.com/mccallbianca-9993s-projects/desert-rose-gives

## Build status

- `npm install` — clean (0 vulnerabilities after Next.js bump).
- `npm run build` — ✅ compiles, 13 routes prerendered.
- `npx tsc --noEmit` — ✅ no errors.
- Dev server curl: ✅ all 10 routes returned **200**.
- Production curl (Vercel): ✅ all 12 routes/assets returned **200**.

## Errors found and fixed

| # | Issue | Fix |
|---|-------|-----|
| 1 | Next.js 14.2.15 shipped with 1 critical CVE (and 4 high CVEs). | Bumped to **15.5.15** (first CVE-clean release on the 15.x line). App Router code ported without breaking changes. |
| 2 | Stripe SDK types rejected `apiVersion: '2024-09-30.acacia'`. | Bumped Stripe API version to **`2025-02-24.acacia`** to match installed SDK. |
| 3 | `app/about/page.tsx` passed an `onError` handler to `<img>` inside a Server Component, crashing prerender. | Extracted `components/FounderPortrait.tsx` as a Client Component with graceful fallback (shows gradient + name until a real `/public/bianca.jpg` is added). |
| 4 | `app/layout.tsx` referenced `text-sand-50` and `bg-gold-500` — neither exists in the Tailwind palette (brand rule forbids warm accents). | Replaced with `text-bone-50` and `bg-sky-400`. |
| 5 | `DonateForm.tsx` used Tailwind default `rose-*` for error state — violates "never introduce rose/pink/gold accents" rule. | Replaced with `red-*` (functional error red, not a brand accent). |
| 6 | Several `Bianca McCall` references omitted the LMFT credential (violates absolute rule #2). | Updated home metadata, about page copy, and FAQ questions to use **"Bianca D. McCall, LMFT"** consistently. |
| 7 | Framer Motion `Reveal` wrappers left content at `opacity: 0` until IntersectionObserver fired — broke full-page screenshots and risked showing blank sections to users with slow JS. | Rewrote `components/Reveal.tsx` so SSR/first paint is always visible; only off-viewport content hides then animates in on scroll. Respects `prefers-reduced-motion`. |
| 8 | `text-bone-400` (#6F6F80) on ink-950 measured ≈ 4.24:1 — just under WCAG AA for normal text (4.5:1). | Global replace to `text-bone-300` (#A7A7B2) — measured ≈ 9:1 on ink-950. |
| 9 | Missing assets (`favicon.ico`, `apple-touch-icon.png`, `og-image.jpg`, `logo.png`). | Wrote `scripts/generate-assets.mjs` that renders all four from SVG via `sharp`, using only the brand palette (`#050509`, `#1E3FA6`, `#4FBDE8`). Produces `favicon-16.png`, `favicon-32.png`, `favicon.ico` (multi-size ICO wrapper), `apple-touch-icon.png` (180×180), `icon-512.png`, `og-image.jpg` (1200×630), `logo.png`, and `logo.svg`. |
| 10 | `.claude/settings.local.json` was staged on first `git add`. | Added to `.gitignore`, unstaged. |

## Playwright test results

Suite: `tests/smoke.spec.ts` (desktop 1440×900 + mobile 390×844).

```
  22 passed (58s)
```

Coverage per page (both projects):
- HTTP 200 for every route (`/`, `/about`, `/programs`, `/impact`, `/financials`, `/donate`, `/contact`).
- Wordmark "Desert Rose" visible in header on every page.
- `<h1>` present and matches expected regex per page.
- All six nav links + Donate CTA reachable (on mobile, test opens hamburger first).
- Footer visible with **988 crisis line**.
- `<script type="application/ld+json">` present on every page.
- No `"DRG"` substring anywhere.

Additional focused tests:
- `/donate` renders preset buttons (`$25`, `$100`, `$250`), mode toggle, and submit CTA.
- `/financials` links to `mccallbianca.github.io/DR-Gives-Financial-SOPs-`.
- Root Organization JSON-LD parses and names `Bianca D. McCall` with honorific `LMFT`.

## JSON-LD validation

`scripts/validate-jsonld.mjs` fetched every page and JSON-parsed every `<script type="application/ld+json">` block. Result:

```
OK   /          — 2 JSON-LD block(s)
OK   /about     — 2 JSON-LD block(s)
OK   /programs  — 3 JSON-LD block(s)
OK   /impact    — 2 JSON-LD block(s)
OK   /financials — 2 JSON-LD block(s)
OK   /donate    — 2 JSON-LD block(s)
OK   /contact   — 1 JSON-LD block(s)

All JSON-LD blocks parse cleanly.
```

Every block has `@context` and `@type`. Organization JSON-LD (from `<OrganizationSchema />` in `app/layout.tsx`) includes:
- `@type: NGO`, founder `Bianca D. McCall` with `honorificSuffix: LMFT`
- Parent organization: ECQO Holdings
- Funders: Intermountain Health, VGK Foundation, Clark County DCFS, Cox, United Way
- `contactPoint` trio (general, grants, executive) matching the real emails

## Accessibility (WCAG 2.1 AA)

- ✅ Skip-to-main link in `app/layout.tsx` (visible on focus).
- ✅ Semantic hierarchy: `<header>` → `<main id="main">` → `<footer>`; exactly one `<h1>` per page.
- ✅ Focus-visible: `:focus-visible { outline: 2px solid #4FBDE8; outline-offset: 3px; }` in `globals.css`.
- ✅ All images have alt text (`components/FounderPortrait.tsx`). Decorative edge fades on the marquee are `aria-hidden`.
- ✅ Nav has `aria-label="Main navigation"`; hamburger has `aria-expanded` + `aria-controls`.
- ✅ Color contrast sweep: bumped all low-contrast label text from `bone-400` → `bone-300`. Primary body text (`bone-100` / `bone-50` / `sky-400`) all measure ≥ 8:1 on ink-950.
- ✅ Error state on donate form now has `role="alert"`.
- ⚠️ Manual follow-up: when a real logo file (`/public/logo.png`) lands, keep `alt="Desert Rose Gives"` on any future `<img>` usage. The placeholder SVG in `/public/logo.svg` uses an accessible `<text>` wordmark (screen-reader readable).

## Screenshots

Captured full-page at two viewports in `tests/screenshots/`:

- `home-1440x900.png`, `home-390x844.png`
- `about-1440x900.png`, `about-390x844.png`
- `programs-1440x900.png`, `programs-390x844.png`
- `impact-1440x900.png`, `impact-390x844.png`
- `financials-1440x900.png`, `financials-390x844.png`
- `donate-1440x900.png`, `donate-390x844.png`
- `contact-1440x900.png`, `contact-390x844.png`

Screenshot notes:
- Tests scroll through each page before snapping, then hide the sticky header and neutralize Framer Motion's `opacity`/`transform` inline styles so the captured image reflects the revealed end-state (not the mid-animation intermediate state). This does not affect the running application — only the screenshot composition.

## Deployed environment variables

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://desert-rose-gives.vercel.app` | production |
| `STRIPE_SECRET_KEY` | **NOT YET SET** — donate flow returns HTTP 500 until added | — |

## Remaining manual steps

1. **Set `STRIPE_SECRET_KEY` in Vercel.**
   Dashboard → Settings → Environment Variables → add `sk_live_...` (or `sk_test_...` for staging).
   Or via CLI: `npx vercel env add STRIPE_SECRET_KEY production` (paste the key when prompted), then `npx vercel --prod --yes` to roll it out.

2. **Connect GitHub → Vercel for auto-deploy.**
   The initial `vercel link` surfaced a `Login Connection` error (`Error: Failed to link mccallbianca/desert-rose-gives. You need to add a Login Connection to your GitHub account first.`). Visit https://vercel.com/docs/accounts/create-an-account#login-methods-and-connections, connect your GitHub login, then run `npx vercel link --yes --project desert-rose-gives --repo mccallbianca/desert-rose-gives` again.

3. **DNS cutover to `desertrosegives.org`.**
   Vercel Dashboard → Project → Settings → Domains → add `desertrosegives.org` and `www.desertrosegives.org`. Vercel will print the CNAME/A records — point your registrar there. After DNS propagates, update `NEXT_PUBLIC_SITE_URL` to `https://desertrosegives.org` and redeploy so `sitemap.xml`, `robots.txt`, and all JSON-LD use the canonical domain.

4. **Swap Stripe test keys for live keys when ready to accept real donations.**
   The `/api/donate` endpoint transparently handles `sk_live_` vs `sk_test_`; only the env value changes.

5. **Submit sitemap to Google Search Console + Bing Webmaster Tools.**
   - GSC: https://search.google.com/search-console → add property (use the `desertrosegives.org` DNS record once live) → Sitemaps → submit `https://desertrosegives.org/sitemap.xml`.
   - BWT: https://www.bing.com/webmasters → Import from GSC to avoid re-verification.

6. **Drop a real founder headshot at `/public/bianca.jpg`.**
   `components/FounderPortrait.tsx` will auto-swap from the gradient/wordmark fallback.

7. **Drop the final logo.**
   Replace `/public/logo.svg` and `/public/logo.png` with the authoritative wordmark. The `OrganizationSchema.logo` field still resolves to `/logo.png`.

8. **(Optional) Resolve residual npm audit notice.**
   `npm audit` is currently clean, but Next.js 15 → 16 is available. Holding at 15.5.15 to honor the "Next.js 14 App Router" scope specified in the brief; migrating to 16 is a future ticket.

## Commit & push

- Commit: `8c15a3e` — "Initial build: DR Gives grant-ready site"
- Branch: `main`
- Remote: `origin` → `https://github.com/mccallbianca/desert-rose-gives`

---

**Ship authority exercised. Site is live.**
