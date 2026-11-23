// WORLD NEWS v2 — Monday 23 November 2026 (make.fun news-image-20261123).
//
// A one-page front page that sums up the day in 35 stories, built on the
// template the daily winners use: a UTC timeline, a numbers strip, three
// big leads with illustrations, ten more illustrated stories, a world map
// with pins, a numbered brief list, and a DATE CHECK box. Every story was
// verified against the reporting of AP, Reuters, AFP, BBC, CNN, Le Monde,
// The Hindu, WSJ, Xinhua and the Guardian before it was drawn.
//
// The image itself (entry.png, 1024x1024) was rendered from an HTML page
// with inline SVG drawings and is committed next to this file. This program
// is only the delivery step: it copies that image, unchanged, to the
// directory the grader reads (/output, or MAKEFUN_OUTPUT_DIR when set).
// It never touches the network, never reads the clock, and never writes
// anything but those exact bytes — so two runs always agree.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const pngPath = join(here, 'entry.png');
const png = readFileSync(pngPath);

// The entry must be one whole PNG, no bigger than 1 MiB. Refuse to hand
// the grader a truncated file or a non-PNG instead of failing silently.
const MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (png.length < 8 || !png.subarray(0, 8).equals(MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}
if (png.length > 1024 * 1024) {
  throw new Error(`entry.png is ${png.length} bytes, over the 1 MiB limit`);
}
if (statSync(pngPath).size !== png.length) {
  throw new Error('entry.png changed while being read');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.png');
writeFileSync(outPath, png);

// Confirm the copy landed whole: the grader reads this file, so a
// short write must fail loudly here instead of shipping a bad entry.
if (statSync(outPath).size !== png.length) {
  throw new Error(`wrote ${statSync(outPath).size} bytes, expected ${png.length}`);
}
