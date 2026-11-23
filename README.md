# WORLD NEWS — Monday 23 November 2026

[![make.fun](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/RINO1975/makefun-news-image/rank.svg)](https://make.fun/bounty/news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/RINO1975/makefun-news-image/reward.svg)](https://make.fun/bounty/news-image-20261123)

An entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123).

## The image

A 1024&times;1024 newspaper front page — **WORLD NEWS, Monday 23 November 2026** — summing up the day in **35 stories**, built on the template the daily winners use:

- **THE DAY IN UTC** — 7 events with their UTC times
- **THE DAY IN NUMBERS** — 6 big numbers (+31% Nvidia, +7% Nasdaq, 258 House seats, 24 dead, 11 killed, 429 flights cancelled)
- **3 big leads:** COP31 collapses in Antalya; Trump threatens Iranian ships after two tankers are hit in the Strait of Hormuz; Nvidia reinstates Jensen Huang and shares soar 31%
- **10 more illustrated stories** (Merkury sinks, Riemann proof, Dymer strike, Indonesia factory fire, Democrats' 258 seats, NATO on Russian missiles, Delta outage, India 720-9, Puigdemont, Hasina)
- **WHERE IT HAPPENED** — a world map with numbered pins and per-region counts
- **ALSO ON MONDAY 23 NOVEMBER** — briefs 14–35, one line each
- **DATE CHECK** — what was deliberately left out (first reported before Monday) and what had not happened yet

Every story was verified against AP, Reuters, AFP, BBC, CNN, Le Monde, The Hindu, WSJ, Xinhua and the Guardian. The full sourced list is in `stories.md`.

## How it runs

`main.ts` copies the pre-rendered `entry.png` (1024&times;1024, deterministic) to `/output/entry.png`. No network, no randomness — two runs write identical bytes.
