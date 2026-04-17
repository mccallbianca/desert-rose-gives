// Validates JSON-LD on every rendered page by fetching and parsing the
// <script type="application/ld+json"> blocks. Requires dev or prod server running.

const SITE = process.env.BASE_URL || 'http://localhost:3000';
const PATHS = ['/', '/about', '/programs', '/impact', '/financials', '/donate', '/contact'];

let failures = 0;

for (const path of PATHS) {
  const res = await fetch(SITE + path);
  const html = await res.text();
  const matches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  if (matches.length === 0) {
    console.error(`FAIL ${path} — no JSON-LD found`);
    failures++;
    continue;
  }
  let ok = true;
  for (const [, body] of matches) {
    try {
      const parsed = JSON.parse(body);
      if (!parsed['@context'] || !parsed['@type']) {
        console.error(`FAIL ${path} — missing @context/@type`);
        ok = false;
        failures++;
      }
    } catch (e) {
      console.error(`FAIL ${path} — JSON parse error: ${e.message}`);
      ok = false;
      failures++;
    }
  }
  if (ok) console.log(`OK   ${path} — ${matches.length} JSON-LD block(s)`);
}

if (failures) {
  console.error(`\n${failures} JSON-LD failure(s).`);
  process.exit(1);
}
console.log('\nAll JSON-LD blocks parse cleanly.');
