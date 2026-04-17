import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUB = resolve(__dirname, '..', 'public');
mkdirSync(PUB, { recursive: true });

const INK = '#050509';
const ROYAL = '#1E3FA6';
const SKY = '#4FBDE8';
const BONE = '#FBFBFB';

// ---------- Logo (SVG placeholder until real file arrives) ----------
// "Desert Rose gives" wordmark-style placeholder using brand colors.
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 180" role="img" aria-label="Desert Rose Gives">
  <defs>
    <linearGradient id="dot" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%" stop-color="${SKY}"/>
      <stop offset="100%" stop-color="${ROYAL}"/>
    </linearGradient>
  </defs>
  <rect width="600" height="180" fill="${INK}"/>
  <circle cx="40" cy="92" r="10" fill="url(#dot)"/>
  <text x="68" y="110" font-family="Georgia, 'Times New Roman', serif"
        font-size="64" font-weight="600" fill="${BONE}" letter-spacing="-2">Desert Rose</text>
  <text x="432" y="112" font-family="Georgia, 'Times New Roman', serif"
        font-size="64" font-style="italic" fill="${SKY}">gives</text>
</svg>`;
writeFileSync(resolve(PUB, 'logo.svg'), logoSvg);

// Raster logo (used by OrganizationSchema.logo URL)
await sharp(Buffer.from(logoSvg))
  .resize(600, 180)
  .png()
  .toFile(resolve(PUB, 'logo.png'));

// ---------- og-image.jpg (1200 x 630) ----------
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow1" cx="30%" cy="0%" r="70%">
      <stop offset="0%" stop-color="${ROYAL}" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="${INK}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="100%" r="60%">
      <stop offset="0%" stop-color="${SKY}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${INK}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${INK}"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <g transform="translate(80, 92)">
    <circle cx="12" cy="14" r="12" fill="${SKY}"/>
    <text x="36" y="26" font-family="Georgia, 'Times New Roman', serif"
          font-size="30" font-weight="600" fill="${BONE}">Desert Rose</text>
    <text x="250" y="26" font-family="Georgia, 'Times New Roman', serif"
          font-size="30" font-style="italic" fill="${SKY}">gives</text>
  </g>

  <g transform="translate(80, 240)">
    <text font-family="Georgia, 'Times New Roman', serif" font-size="78"
          font-weight="500" fill="${BONE}" letter-spacing="-2">
      <tspan x="0" dy="0">Community wellness.</tspan>
      <tspan x="0" dy="92" fill="${SKY}" font-style="italic">Federally aligned.</tspan>
    </text>
  </g>

  <g transform="translate(80, 540)">
    <text font-family="Helvetica, Arial, sans-serif" font-size="18"
          fill="${BONE}" letter-spacing="4" font-weight="600">
      501(c)(3) · TRAUMA-INFORMED · CLINICALLY LED
    </text>
  </g>
</svg>`;

await sharp(Buffer.from(og))
  .resize(1200, 630)
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(resolve(PUB, 'og-image.jpg'));

// ---------- Favicon sources ----------
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" rx="48" fill="${INK}"/>
  <circle cx="128" cy="128" r="38" fill="${SKY}"/>
  <circle cx="128" cy="128" r="78" fill="none" stroke="${ROYAL}" stroke-width="10" stroke-opacity="0.85"/>
</svg>`;

// favicon.ico — sharp can't write .ico directly, but browsers accept PNG at /favicon.ico
// when served with the right Content-Type. Next.js serves /public/favicon.ico as-is.
// Easiest correct path: ship a PNG-encoded .ico (single-image ICO) by hand-rolling the
// container around a 32x32 PNG. Simpler still: ship multi-size PNGs and reference them.
// We follow the safe approach: write a small 32x32 PNG and wrap it in a minimal ICO header.
const png32 = await sharp(Buffer.from(iconSvg)).resize(32, 32).png().toBuffer();
writeFileSync(resolve(PUB, 'favicon-32.png'), png32);
const png16 = await sharp(Buffer.from(iconSvg)).resize(16, 16).png().toBuffer();
writeFileSync(resolve(PUB, 'favicon-16.png'), png16);

// Build ICO container (ICONDIR + ICONDIRENTRYs + PNG payloads).
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);         // reserved
  header.writeUInt16LE(1, 2);         // type: 1 = icon
  header.writeUInt16LE(pngs.length, 4); // count

  const entries = Buffer.alloc(16 * pngs.length);
  let offset = header.length + entries.length;
  const payloads = [];

  pngs.forEach(({ size, data }, i) => {
    const e = 16 * i;
    entries.writeUInt8(size === 256 ? 0 : size, e + 0);     // width
    entries.writeUInt8(size === 256 ? 0 : size, e + 1);     // height
    entries.writeUInt8(0, e + 2);                           // palette
    entries.writeUInt8(0, e + 3);                           // reserved
    entries.writeUInt16LE(1, e + 4);                        // color planes
    entries.writeUInt16LE(32, e + 6);                       // bits per pixel
    entries.writeUInt32LE(data.length, e + 8);              // size of data
    entries.writeUInt32LE(offset, e + 12);                  // offset
    offset += data.length;
    payloads.push(data);
  });

  return Buffer.concat([header, entries, ...payloads]);
}

const ico = buildIco([
  { size: 16, data: png16 },
  { size: 32, data: png32 },
]);
writeFileSync(resolve(PUB, 'favicon.ico'), ico);

// apple-touch-icon (180x180 PNG per Apple spec)
await sharp(Buffer.from(iconSvg))
  .resize(180, 180)
  .png()
  .toFile(resolve(PUB, 'apple-touch-icon.png'));

// Also ship a 512 maskable icon for PWA-ish manifest consumers
await sharp(Buffer.from(iconSvg))
  .resize(512, 512)
  .png()
  .toFile(resolve(PUB, 'icon-512.png'));

console.log('Generated:',
  ['logo.svg', 'logo.png', 'og-image.jpg', 'favicon.ico', 'favicon-16.png',
   'favicon-32.png', 'apple-touch-icon.png', 'icon-512.png'].join(', '));
