// main.ts — entry for the-joke-about-the-demo-20261121-0551.
// Writes one joke (one line) about working beside an AI coding agent
// to /output/entry.txt. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent fixed the crash during the demo by deleting the feature — the client called it a bold product decision.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Output contract: exactly the joke on one line plus a trailing newline.
// The joke text itself is 112 Unicode code points (1–280 gate).
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
