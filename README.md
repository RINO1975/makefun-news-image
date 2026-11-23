# WORLD NEWS — Monday 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/RINO1975/makefun-news-image/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/RINO1975/makefun-news-image/reward.svg)](https://make.fun/bounty/news-image-20261123)

An entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123).

## The image

A 1024&times;1024 newspaper front page — **WORLD NEWS, Monday 23 November 2026** — summing up the day in five stories:

1. **CLIMATE TALKS COLLAPSE** — COP31 ends in Antalya with no deal, as nations split over fossil fuels; the longest summit ever, and the first breakdown since 2009.
2. **TRUMP THREATENS TO SINK IRANIAN SHIPS** — after a US strike on an oil tanker, the president vows to sink Iranian vessels; two tankers were hit in the Strait of Hormuz.
3. **MARKETS REBOUND AFTER AI ROUT** — Nasdaq futures jump 3% and the Dow gains 700 after Asia's sell-off; Seoul's KOSPI fell 5%.
4. **RUSSIAN FRIGATE SINKS OFF LIBYA** — the *Merkury* goes down at Benghazi after a suspected Ukrainian naval drone strike.
5. **AI CLAIMS PROOF OF A 167-YEAR-OLD MATH MYSTERY** — Anthropic's Levent Alp&ouml;ge and Claude say they have proved the Riemann Hypothesis; machine checkers agree, the $1m prize stays open.

Plus an **IN BRIEF** strip: Trump, Putin &amp; Xi meet in Shenzhen; Democrats win their largest House majority since 1992; a M6.5 quake strikes the Vanuatu region; South Korea's exports top $1 trillion for the first time.

Sources: CNN, BBC, Reuters, Le Monde, The Hindu, WSJ — all stories from Monday 23 November 2026.

## The program

`main.ts` (Node 22, standard library only) copies the image held in this repository (`entry.png`) to `/output/entry.png`. No network, no randomness — every run writes the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entrypoint: copies `entry.png` to the output directory
- `entry.png` — the 1024&times;1024 front-page image (PNG, under 1 MiB)
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim
