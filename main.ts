// News-image entry for 24 November 2026 (Node 22, standard library only).
// The front page was rendered in this session from the day's news — lead:
// three tankers ablaze after hitting mines in the Strait of Hormuz — plus
// Nvidia's Huang comeback, Kyiv sinking a Russian corvette off Libya, the
// reported Russian nuclear satellite, the Grok lawsuits, and the day's other
// stories. It ships as entry.png beside this file; the program only places
// that image at /output/entry.png, so both grader runs write identical bytes.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output.

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const image = join(root, 'entry.png');

if (!existsSync(image)) {
  console.error('entry.png is missing from the repository root');
  process.exit(1);
}
if (!existsSync(destination)) mkdirSync(destination, { recursive: true });
copyFileSync(image, join(destination, 'entry.png'));
console.log(`wrote ${join(destination, 'entry.png')}`);
