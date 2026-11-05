---
title: "What-If Simulation Agent & Workflow Validation  | Mycroft AI"
seoTitle: "How a Portfolio Stress Test Gets Its Number"
description: "Tanmay Kulkarni takes apart a scenario stress-testing workflow in the Mycroft repository and checks it against an independent copy of its arithmetic."
summary: "The video explains how a stress-testing workflow turns a named scenario into a portfolio loss, using a minus 78% example on invented stocks. It then shows how the author built a second adder, matched it on 24 requests and tested a validator with deliberately flawed inputs."
keywords: ["how portfolio stress test is calculated", "scenario stress testing agent explained", "validate a workflow with independent check", "add up shocks per holding", "stress test minus 78 percent example", "checking financial pipeline arithmetic", "mycroft finance recipes repository", "validator for portfolio input errors"]
generated: "article"
---

A tech sector crash scenario took a portfolio of three invented chip stocks from $10,000 down to $2,200, a loss of 78%. In this video, Tanmay Kulkarni of Humanitarians AI asks where that 78 comes from and takes it apart. The work comes from a contribution to the Mycroft repository, a working collection of finance pipelines it calls recipes.

## The scenario stress-testing recipe

One of the recipes is a scenario stress-testing agent. It shocks a portfolio with a named scenario and reports what is left. The portfolios in the video are invented by the author, and the tickers come from the workflow's own list. The numbers are scenario arithmetic, not predictions and not investment advice.

## How shocks are added up

A scenario is a short list of named shocks. The tech sector crash names five: four price shocks, market minus 15%, technology sector minus 30%, semiconductors minus 35% and AI stocks minus 40%, plus a fifth that is a volatility number. The engine's rule is simple. For each holding, it adds up the shocks that belong to it. The biggest holding, a chip designer, belongs to the market, to semiconductors and to the AI list, so it takes minus 15, minus 35 and minus 40, which adds to minus 90. The workflow's own readme prints this exact sum as a worked example, and it also names a different way to combine shocks, so the rule is a choice you can see.

## From shocks to the final number

The third holding is a chip maker that is not on the AI list, so it takes minus 15 and minus 35, which is minus 50. The second chip stock takes minus 90 like the first. With shares of 40%, 30% and 30%, the contributions are 36, 27 and 15, which total 78. A smaller scenario follows the same rule: an aggressive rate hike with market minus 10%, growth stocks minus 20% and technology sector minus 15%. Across four equal-share growth names, three take minus 30 and one, also filed under technology, takes minus 45. The book loses 33.75%, which the workflow labels critical, its word for losses above 30.

## Checking the engine with a second adder

To verify the original, the author wrote a second adder, a Python copy of the engine's first steps, and ran both on the same portfolios. The original code comes straight from the workflow file. On 24 requests, every number, label and message matched. The author then added 12 deliberate breaks to the checks, and each one was caught.

## The input validator

Before any adding, a validator reads each portfolio using the workflow's own rules plus one addition from the author. Portfolios whose shares total 6/10 or 1.2 are accepted, because the workflow rescales them to one. A holding with no ticker, a share that is not a number, or an empty list is stopped with its reason written down. All 10 of the author's deliberately flawed portfolios were stopped, so a bad sum never reaches the screen.

## What remains open

Nothing in the checked code calls the outside world. The model call, the market data request and the reply to a caller are written down as handoffs, not approved. Five items in the recipe remain open, and it says draft on purpose.

## Key takeaways

- A stress-test result is built from added shocks, so the number can be traced term by term.
- Each holding receives the shocks that belong to it, such as market, sector and theme lists.
- The minus 78% example comes from weighting 90, 90 and 50 percent losses by 40%, 30% and 30% shares.
- An independent second implementation matched the original on all 24 requests.
- Deliberate breaks and flawed portfolios are a way to test the checks themselves.
- A validator stops bad inputs with a written reason before any arithmetic runs.

## Try it yourself

The next time a stress test gives you one number, ask what was added, which shocks from which lists, and whether anyone has run an independent adder beside the original. The Mycroft repository by Nik Bear Brown, which holds the recipes discussed here, is a good place to see the workflow itself.
