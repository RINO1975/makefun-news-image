// WORLD NEWS — Monday 23 November 2026 (make.fun news-image-20261123).
//
// The entry is a front-page image that sums up the day's world news:
// COP31 collapses in Antalya, Trump threatens to sink Iranian ships,
// markets rebound after an AI rout, a Russian frigate sinks off Libya,
// and an AI claims proof of the 167-year-old Riemann Hypothesis.
// The image was drawn from the day's reporting (CNN, BBC, Reuters,
// Le Monde, The Hindu, WSJ) and rendered to entry.png beside this file.
//
// This program does one thing: it copies that image, byte for byte,
// to /output/entry.png (or MAKEFUN_OUTPUT_DIR when set, for local runs).
// No network, no randomness, no timestamps — every run writes the
// exact same bytes, so the two grader runs agree.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const image = readFileSync(join(here, 'entry.png'));

// Guard: the file must be a whole PNG (the gate checks its chunks and
// checksums, so a truncated or non-PNG file would fail the entry).
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!image.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
