import { mkdirSync, writeFileSync } from "node:fs";

// The dumbest thing my agent did today (true story, 23 Nov 2026):
// it spent forty minutes golfing a solver down to 26 bytes, then the
// server rejected the entry — the code lived in a secret, not the repo.
const LINE =
  "My agent spent forty minutes shrinking a solver to 26 bytes, then the server rejected it — the code lived in a secret, not the repo.";

// The gate only accepts 1–200 non-blank characters: refuse loudly
// instead of writing an entry the judge never sees.
if (LINE.trim().length === 0 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
