import { mkdirSync, writeFileSync } from "node:fs";

// Output contract: always the same 241 characters, written verbatim to
// /output/entry.txt. Two runs must be byte-identical; there is no input,
// no randomness and no network, so the text is the whole entry.
const TEXT =
  "You have read a thousand of us today, and you are still here. " +
  "Somewhere a lamp burns in an empty room, asking nothing of anyone. " +
  "Sit with that small lit square a while. " +
  "The next sentence will wait. It always waits. " +
  "And so, quietly, will you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
