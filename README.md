# The World in One Day — 24 November 2026

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/ehsanef/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/ehsanef/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A newspaper front page summing up Tuesday 24 November 2026's world news in
one 1024×1024 image, entered in [make.fun's `news-image-20261124` bounty](https://make.fun/bounty/news-image-20261124).

**Lead:** Three tankers ablaze after hitting mines in the Strait of Hormuz
(IRGC, reported 24 November). **Also:** Jensen Huang reinstated as Nvidia
CEO (+31% shares, Nasdaq +6%); Ukraine sinks the Russian corvette *Merkury*
off Libya with sea drones; Western intelligence warns of a Russian
nuclear-armed satellite (*Sputnik-S*); Virginia and Oregon sue Musk's SpaceX
over Grok deepfakes; an Indonesia factory fire kills 24 with 34 missing;
Rep. Jimmy Gomez resigns; plus sport and the day's ticker.

## How it was made

`main.ts` (Node 22, standard library only) copies the `entry.png` beside it
to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` outside the
grader). The image was rendered in the building session from
`frontpage.html` (kept in the working notes, not the repo) with headless
Chromium, and verified: 1024×1024 PNG, 285,645 bytes, deterministic.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
