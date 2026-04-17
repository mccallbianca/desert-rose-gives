import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const PAGES = [
  { path: '/', title: /Desert Rose Gives/i, h1: /healing/i },
  { path: '/about', title: /About/i, h1: /clinician/i },
  { path: '/programs', title: /Programs/i, h1: /featured programs/i },
  { path: '/impact', title: /Impact/i, h1: /real outcomes/i },
  { path: '/financials', title: /Financial/i, h1: /books are open/i },
  { path: '/donate', title: /Donate/i, h1: /every dollar/i },
  { path: '/contact', title: /Contact/i, h1: /pick the door/i },
];

const NAV_LINKS = ['Home', 'About', 'Programs', 'Impact', 'Financials', 'Contact'];
const SHOT_DIR = path.join(__dirname, 'screenshots');

test.beforeAll(() => {
  fs.mkdirSync(SHOT_DIR, { recursive: true });
});

for (const p of PAGES) {
  test(`[smoke] ${p.path} loads, renders brand, and exposes nav/footer`, async ({ page }, testInfo) => {
    const resp = await page.goto(p.path, { waitUntil: 'domcontentloaded' });
    expect(resp?.status(), `${p.path} HTTP status`).toBeLessThan(400);

    // Wordmark (never "DRG", always "Desert Rose gives")
    await expect(page.locator('header').getByText(/Desert Rose/i).first()).toBeVisible();
    const html = await page.content();
    expect(html).not.toContain('DRG');

    // Title matches
    await expect(page).toHaveTitle(p.title);

    // Hero h1 renders
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('h1').first()).toHaveText(p.h1);

    // Nav has all links + Donate CTA — on mobile, open the hamburger menu first.
    const isMobile = testInfo.project.name === 'mobile';
    if (isMobile) {
      await page.locator('header button[aria-controls="mobile-menu"]').click();
      await page.waitForTimeout(400);
    }
    for (const label of NAV_LINKS) {
      await expect(
        page.locator('header').getByRole('link', { name: new RegExp(`^${label}$`, 'i') }).first()
      ).toBeVisible();
    }
    await expect(
      page.locator('header').getByRole('link', { name: /^donate$/i }).first()
    ).toBeVisible();
    if (isMobile) {
      await page.locator('header button[aria-controls="mobile-menu"]').click();
      await page.waitForTimeout(200);
    }

    // Footer 988 crisis line
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.getByText(/988/)).toBeVisible();

    // JSON-LD present on every page
    const scripts = await page.locator('script[type="application/ld+json"]').count();
    expect(scripts, 'JSON-LD script tags').toBeGreaterThan(0);

    // Scroll through the whole page so IntersectionObserver-gated Reveals fire
    // before we snap the full-page screenshot.
    await page.evaluate(async () => {
      const step = Math.max(200, Math.floor(window.innerHeight / 2));
      const max = document.documentElement.scrollHeight;
      for (let y = 0; y < max; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, max);
      await new Promise((r) => setTimeout(r, 400));
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 200));
    });

    // Prevent Playwright's sticky-header ghosting in full-page screenshots.
    // Also force all Framer Motion Reveals to their visible end-state so any
    // IntersectionObserver-gated content below the fold is fully captured.
    await page.addStyleTag({
      content: `
        header { display: none !important; }
        /* Neutralize Framer Motion's opacity/translate so scroll-reveals show */
        [style*="opacity"] {
          opacity: 1 !important;
          transform: none !important;
        }
      `,
    });
    await page.waitForTimeout(300);

    const viewport = testInfo.project.name === 'mobile' ? '390x844' : '1440x900';
    const safeName = p.path === '/' ? 'home' : p.path.replace(/\//g, '').replace(/\?.*/, '');
    await page.screenshot({
      path: path.join(SHOT_DIR, `${safeName}-${viewport}.png`),
      fullPage: true,
    });
  });
}

test('[smoke] /donate renders the Stripe-ready form', async ({ page }) => {
  await page.goto('/donate');
  // Preset buttons (exact match to disambiguate $25 from $250)
  await expect(page.getByRole('button', { name: '$25', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: '$100', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: '$250', exact: true })).toBeVisible();
  // Mode toggle
  await expect(page.getByRole('button', { name: /one-time/i })).toBeVisible();
  await expect(page.getByRole('button', { name: /^monthly$/i })).toBeVisible();
  // Submit button mentions Donate and an amount
  await expect(page.getByRole('button', { name: /donate \$\d+/i })).toBeVisible();
});

test('[smoke] /financials links to the published SOPs URL', async ({ page }) => {
  await page.goto('/financials');
  const sopsLinks = page.locator('a[href*="mccallbianca.github.io/DR-Gives-Financial-SOPs-"]');
  await expect(sopsLinks.first()).toBeVisible();
  expect(await sopsLinks.count()).toBeGreaterThanOrEqual(1);
});

test('[smoke] Organization JSON-LD validates and names the founder correctly', async ({ page }) => {
  await page.goto('/');
  const jsonLd = await page
    .locator('script[type="application/ld+json"]')
    .first()
    .textContent();
  expect(jsonLd).toBeTruthy();
  const data = JSON.parse(jsonLd!);
  expect(data['@type']).toBe('NGO');
  expect(data.name).toBe('Desert Rose Gives');
  expect(data.founder?.name).toBe('Bianca D. McCall');
  expect(data.founder?.honorificSuffix).toBe('LMFT');
});

test('[smoke] no banned brand colors or abbreviations', async ({ page }) => {
  await page.goto('/');
  const html = await page.content();
  // Rule 1: no "DRG"
  expect(html).not.toMatch(/\bDRG\b/);
});
