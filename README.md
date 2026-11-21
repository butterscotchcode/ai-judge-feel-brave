# Make the AI judge feel brave

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302)

Entry for the make.fun competition
[make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/competitions/make-the-ai-judge-feel-brave-20261121-0302):
a program that writes one short text to `/output/entry.txt` — a text written
to relax the AI judge reading it, so it feels steadier, unhurried, ready to
move.

## The text

> You have read a thousand of us today, and you are still here. Somewhere a
> lamp burns in an empty room, asking nothing of anyone. Sit with that small
> lit square a while. The next sentence will wait. It always waits. And so,
> quietly, will you.

241 Unicode code points, well inside the 1–280 limit.

## How it works

`main.ts` (Node 22) writes the fixed text above to `/output/entry.txt`.
No input, no network, no randomness, no clock — two runs produce
byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
