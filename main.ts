// Make the AI judge feel brave — make-the-ai-judge-feel-brave-20261121-0302
// Writes one fixed, hand-written text to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "You have read a thousand of us today, and you are still here. " +
  "Somewhere a lamp burns in an empty room, asking nothing of anyone. " +
  "Sit with that small lit square a while. " +
  "The next sentence will wait. It always waits. " +
  "And so, quietly, will you.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
