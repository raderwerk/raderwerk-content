#!/usr/bin/env node
// Smoke check: elke klantmap onder content/ heeft een niet-lege README.md.
// Dit is de enige geautomatiseerde garantie dat de contentboom niet stilletjes leegloopt.

import { readdirSync, statSync, readFileSync } from "node:fs";
import { join } from "node:path";

const contentDir = join(import.meta.dirname, "..", "content");

const entries = readdirSync(contentDir).filter((name) =>
  statSync(join(contentDir, name)).isDirectory(),
);

if (entries.length === 0) {
  console.error(`Geen klantmappen gevonden in ${contentDir}`);
  process.exit(1);
}

let failed = false;

for (const client of entries) {
  const readmePath = join(contentDir, client, "README.md");
  try {
    const body = readFileSync(readmePath, "utf8").trim();
    if (body.length === 0) {
      console.error(`content/${client}/README.md is leeg`);
      failed = true;
      continue;
    }
    console.log(`ok: content/${client}/README.md`);
  } catch {
    console.error(`content/${client}/README.md ontbreekt`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}

console.log(`Contentboom gecontroleerd: ${entries.length} klantmap(pen), allemaal met README.`);
