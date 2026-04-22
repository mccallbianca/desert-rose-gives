import { test, expect } from '@playwright/test';

const PAGES = [
  { path: '/', title: /Desert Rose Gives/i },
  { path: '/about', title: /About/i },
  { path: '/programs', title: /Programs/i },
  { path: '/programs/wellxcel', title: /WellXcel/i },
  { path: '/programs/mind-over-media', title: /Mind Over Media/i },
  { path: '/impact', title: /Impact/i },
  { path: '/get-involved', title: /Get Involved/i },
  { path: '/news', title: /News/i },
  { path: '/contact', title: /Contact/i },
  { path: '/privacy', title: /Privacy/i },
  { path: '/accessibility', title: /Accessibility/i },
];

for (const page of PAGES) {
  test(`[smoke] ${page.path} renders without console errors`, async ({
    page: p,
  }) => {
    const errors: string[] = [];
    p.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    const res = await p.goto(page.path);
    expect(res?.ok()).toBeTruthy();
    await expect(p).toHaveTitle(page.title);
    // Navigation renders with a logo on every page
    await expect(p.getByRole('img', { name: /Desert Rose Gives logo/i })).toBeVisible();
    expect(errors.filter((e) => !e.includes('Failed to load resource'))).toHaveLength(0);
  });
}

test('[smoke] donate CTA on home links to PayPal', async ({ page }) => {
  await page.goto('/');
  const cta = page.getByRole('link', { name: /donate/i }).first();
  const href = await cta.getAttribute('href');
  expect(href).toMatch(/paypal\.com/);
});
