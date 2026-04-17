# Desert Rose Gives — Deploy Guide

A grant-ready, AEO/SEO-optimized Next.js site for Desert Rose Gives (DR Gives),
the research partner of ECQO Holdings. Built in the Baseborn Studio aesthetic
(dark cinematic, Framer Motion-powered transitions, royal blue + sky blue
palette matched to your logo).

**Live file tree:**

```
desert-rose-gives/
├── app/
│   ├── layout.tsx             ← site-wide layout, SEO metadata, JSON-LD
│   ├── page.tsx               ← Home
│   ├── globals.css
│   ├── sitemap.ts             ← auto-generated /sitemap.xml
│   ├── robots.ts              ← /robots.txt (welcomes AI crawlers)
│   ├── about/page.tsx
│   ├── programs/page.tsx      ← WellXcel + ECQO-Care pilots + grant index
│   ├── impact/page.tsx        ← real outcomes, success story
│   ├── financials/page.tsx    ← transparency + SOPs link
│   ├── donate/page.tsx
│   ├── contact/page.tsx
│   └── api/donate/route.ts    ← Stripe Checkout session
├── components/
│   ├── Navigation.tsx         ← sticky, scroll-aware, animated
│   ├── Footer.tsx
│   ├── Hero.tsx               ← cinematic animated hero
│   ├── Reveal.tsx             ← scroll-triggered fade+slide wrapper
│   ├── PageTransition.tsx     ← fade on route change
│   ├── FunderMarquee.tsx      ← infinite-scroll funder strip
│   ├── FAQ.tsx                ← AEO-ready FAQ component (emits JSON-LD)
│   ├── FAQSchema.tsx          ← JSON-LD FAQ builder
│   ├── OrganizationSchema.tsx ← JSON-LD for the NGO, founder, partnerships
│   ├── DonateForm.tsx         ← Stripe-wired donate form
│   └── ContactForm.tsx        ← intent-routed contact form
├── public/
│   ├── llms.txt               ← AI-crawler friendly content map
│   ├── logo.png               ← YOU SAVE THIS: the blue DR Gives logo
│   └── og-image.jpg           ← YOU SAVE THIS: 1200x630 social image
├── package.json
├── next.config.mjs
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── .gitignore
├── .env.example
├── PROMPT-LIBRARY.md          ← prompt templates for ongoing content
└── README.md                  ← this file
```

---

## Step-by-step deploy (non-developer friendly)

### 1. Save your brand assets (2 minutes)

Before anything else, drop these two images into the `public/` folder:

- `public/logo.png` — the blue DR Gives logo you uploaded (1024×1024 square
  version works best)
- `public/og-image.jpg` — a 1200×630 social sharing image (the logo on a dark
  background is fine for MVP — we can design a cinematic one in Canva later)
- `public/favicon.ico` — a 32×32 favicon (Canva can export this)

### 2. Create a GitHub repo (5 minutes)

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `desert-rose-gives`
3. Set to **Public** (required for free Vercel hosting; doesn't expose secrets
   because we use environment variables)
4. Don't initialize with a README (we already have one)
5. Click **Create repository**
6. On the resulting page, copy the URL that ends in `.git`

Now upload the `desert-rose-gives/` folder:

- On GitHub, click **Add file → Upload files**
- Drag the entire contents of this folder in (not the folder itself — open it
  first and select everything inside)
- Scroll down and click **Commit changes**

### 3. Deploy to Vercel (3 minutes)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Sign in with GitHub
3. Find your `desert-rose-gives` repo and click **Import**
4. Framework preset: **Next.js** (auto-detected)
5. Click **Environment Variables** and add:
   - `STRIPE_SECRET_KEY` = (copy from Stripe dashboard — your secret key)
   - `NEXT_PUBLIC_SITE_URL` = `https://desertrosegives.org` (use your real
     domain; placeholder `https://desert-rose-gives.vercel.app` is fine
     initially)
6. Click **Deploy**

Wait ~60 seconds. Vercel gives you a URL like `desert-rose-gives.vercel.app` —
that's a working preview.

### 4. Point your domain at Vercel (10 minutes)

1. In Vercel, go to **Project → Settings → Domains**
2. Add `desertrosegives.org` (and `www.desertrosegives.org`)
3. Vercel tells you two DNS records to add at your domain registrar (GoDaddy,
   Namecheap, etc.) — copy them exactly
4. In your domain registrar: **DNS settings → Add records**
5. Paste the two A / CNAME records Vercel gave you
6. Wait 15–60 minutes for DNS propagation
7. Vercel auto-provisions an SSL certificate once DNS resolves. Your site is
   live at `https://desertrosegives.org`

### 5. Verify Stripe is live (5 minutes)

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com) → API keys
2. Copy the **Live secret key** (starts with `sk_live_…`) — this is what goes
   into `STRIPE_SECRET_KEY` in Vercel (update if you put the test key before)
3. In Vercel → Project → Settings → Environment Variables → update the value
4. Redeploy (one click in Vercel)
5. Test a $5 donation on your live site with a real card — it should appear in
   your Stripe dashboard within seconds. Refund yourself.

### 6. Submit to search engines + AI engines (10 minutes)

1. **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console)
   - Add `desertrosegives.org` as a property
   - Submit `https://desertrosegives.org/sitemap.xml` under Sitemaps
2. **Bing Webmaster Tools** — [bing.com/webmasters](https://www.bing.com/webmasters)
   - Same process
3. **Yandex, DuckDuckGo, Mojeek** — these crawl from Bing and Google by
   default, so submitting to Google + Bing covers them
4. **AI engines** — GPTBot, ClaudeBot, PerplexityBot, Google-Extended, and
   Applebot-Extended all read `/robots.txt` and `/llms.txt`. Nothing extra to
   submit; we've already explicitly welcomed them. Expect first indexing
   within 2–14 days.

---

## How to publish a new blog post or page (no dev skills required)

1. Open `app/` in GitHub's web editor
2. Copy an existing page (e.g. `app/about/page.tsx`) into a new folder like
   `app/blog/your-post-slug/page.tsx`
3. Replace the content inside using a prompt from `PROMPT-LIBRARY.md`
4. Commit the change — Vercel auto-redeploys in 60 seconds
5. The new URL `desertrosegives.org/blog/your-post-slug` goes live

For a more automated pipeline later, connect Make.com to run PROMPT-LIBRARY
prompts on a schedule and push new posts to GitHub automatically.

---

## What's already optimized for you

**SEO (humans + search engines):**
- Semantic HTML with proper heading hierarchy
- Per-page meta titles + descriptions + Open Graph + Twitter cards
- Auto-generated sitemap and robots.txt
- Mobile-first responsive design
- Fast-loading static generation
- Canonical URLs set per page

**AEO (AI answer engines):**
- `llms.txt` in the public root describing who we are, for LLM training and
  citation
- JSON-LD structured data: NGO, Person (Bianca), FAQPage, and the partnership
  with ECQO Holdings as parentOrganization
- Every page has an FAQ block with schema markup
- Clear, citable prose written in "LLM-friendly" direct-answer format
- robots.txt explicitly welcomes GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, Applebot-Extended, and more

**Conversion (grants + donations):**
- Stripe Checkout wired for one-time and monthly giving ($5 min, $50k max)
- Audience-specific CTAs: Grantmakers, Donors, Volunteers, Partners
- Contact form routes grant inquiries to `grants@` and all others to `hello@`
- Financial transparency page links directly to your published SOPs
- Every outcome claim is sourced from real funder-reviewed reports

**Legal & compliance:**
- Crisis/988 references throughout
- 501(c)(3) disclosures in footer and donate page
- Donor privacy language aligned with your SOPs
- Tax-deductibility language vetted
- "Not a legal or financial advisor" disclaimer on financial page

---

## Cost to run

- **Vercel Hobby plan:** $0 (free tier covers DR Gives)
- **Stripe:** 2.2% + $0.30 per donation (nonprofit rate — apply at
  stripe.com/nonprofits for the discount)
- **Domain:** ~$12/year at any registrar
- **Total:** $0–$12/year for hosting. Stripe fees only when money moves.

---

## Need to change copy?

- Hero headline lives in `components/Hero.tsx`
- Home page sections live in `app/page.tsx`
- Program details live in `app/programs/page.tsx`
- Outcomes numbers live in `app/impact/page.tsx`
- SOPs link lives at the top of `app/financials/page.tsx`

Every string is clearly commented or trivially searchable — no build steps
required for copy tweaks. Commit to GitHub, Vercel redeploys.

---

Built for Bianca D. McCall, LMFT — Founder, Desert Rose Gives.
