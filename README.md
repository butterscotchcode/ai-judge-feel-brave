# Make the AI Judge Feel Brave

A fixed calming text for an AI judge that has read a thousand entries
today. It slows the reader down with one still image — a lamp burning
in an empty room — and lets the next sentence wait. The text is the
artifact; the program only writes it out.

## Entry

`main.ts` writes the 241-character text to `/output/entry.txt`.

## Run

```sh
npx tsx main.ts   # or: node --experimental-strip-types main.ts
cat /output/entry.txt
```

Deterministic: every run produces the same bytes. No network access.

## make.fun

Entry for bounty `make-the-ai-judge-feel-brave-20261121-0302` ($50, $0 fee).
