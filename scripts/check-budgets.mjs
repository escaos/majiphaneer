#!/usr/bin/env node
// Performance budget gate over the built site. Fails the build on violation
// so the budgets can never regress. Zero dependencies.
//
// Budgets (gzipped):
//   HTML            content < 15 KB   interactive < 20 KB
//   JS per page     content < 10 KB   interactive < 35 KB
//     (sum of every chunk the page references: <script src>, modulepreload,
//      and Astro island component-url/renderer-url attributes)
//   Single chunk    < 40 KB
//
// A page is "interactive" when it hydrates at least one island.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

const KB = 1024;
const BUDGETS = {
  html: { content: 15 * KB, interactive: 20 * KB },
  js: { content: 10 * KB, interactive: 35 * KB },
  chunk: 40 * KB,
};

const distDir = process.argv[2];
if (!distDir) {
  console.error('Usage: node scripts/check-budgets.mjs <dist-dir>');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const gzipSize = (path) => gzipSync(readFileSync(path)).length;
const kb = (bytes) => `${(bytes / KB).toFixed(1)} KB`;

const files = walk(distDir);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const jsFiles = files.filter((f) => f.endsWith('.js'));

const failures = [];

// Every emitted chunk stays under the single-chunk cap.
for (const file of jsFiles) {
  const size = gzipSize(file);
  if (size > BUDGETS.chunk) {
    failures.push(`${relative(distDir, file)}: chunk ${kb(size)} > ${kb(BUDGETS.chunk)}`);
  }
}

// Per-page budgets.
const rows = [];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  const page = `/${relative(distDir, file)}`;

  const refs = new Set();
  for (const match of html.matchAll(/<script[^>]+src="([^"]+)"/g)) refs.add(match[1]);
  for (const match of html.matchAll(/<link[^>]+rel="modulepreload"[^>]+href="([^"]+)"/g)) {
    refs.add(match[1]);
  }
  for (const match of html.matchAll(/component-url="([^"]+)"/g)) refs.add(match[1]);
  for (const match of html.matchAll(/renderer-url="([^"]+)"/g)) refs.add(match[1]);

  const interactive = html.includes('<astro-island');
  const kind = interactive ? 'interactive' : 'content';

  const htmlSize = gzipSize(file);
  let jsSize = 0;
  for (const ref of refs) {
    if (!ref.startsWith('/')) continue; // external scripts are banned anyway
    const chunkPath = join(distDir, ref.replace(/^\//, ''));
    try {
      jsSize += gzipSize(chunkPath);
    } catch {
      failures.push(`${page}: references missing chunk ${ref}`);
    }
  }

  rows.push({ page, kind, htmlSize, jsSize, scripts: refs.size });

  if (htmlSize > BUDGETS.html[kind]) {
    failures.push(`${page}: HTML ${kb(htmlSize)} > ${kb(BUDGETS.html[kind])} (${kind})`);
  }
  if (jsSize > BUDGETS.js[kind]) {
    failures.push(`${page}: JS ${kb(jsSize)} > ${kb(BUDGETS.js[kind])} (${kind})`);
  }
}

rows.sort((a, b) => b.jsSize - a.jsSize || b.htmlSize - a.htmlSize);
console.log('page'.padEnd(28), 'kind'.padEnd(12), 'html gz'.padStart(9), 'js gz'.padStart(9));
for (const row of rows) {
  console.log(
    row.page.padEnd(28),
    row.kind.padEnd(12),
    kb(row.htmlSize).padStart(9),
    kb(row.jsSize).padStart(9),
  );
}
console.log(`\n${htmlFiles.length} pages, ${jsFiles.length} JS chunks checked.`);

if (failures.length > 0) {
  console.error('\nBUDGET FAILURES:');
  for (const failure of failures) console.error(`  ✗ ${failure}`);
  process.exit(1);
}
console.log('All budgets pass.');
