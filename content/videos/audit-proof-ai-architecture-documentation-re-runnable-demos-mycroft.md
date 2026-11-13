---
title: "Audit-Proof AI Architecture: Documentation & Re-Runnable Demos | Mycroft"
seoTitle: "Audit-Proof AI Architecture: Docs and Re-Runnable Demos"
description: "Week 11 of the Mycroft Private Eye valuation agent: auditing documentation against commits, tracing a headline to its source, and a re-runnable demo."
summary: "Om Mali covers the final build week of the Mycroft Private Eye valuation agent, where the work was documentation rather than code. He audits the plan against the last commit, explains a three-layer, 15-table design, and replaces a recorded demo with a script."
keywords: ["audit documentation against git commits", "re-runnable demo instead of recorded video", "immutable append-only rebuildable data layers", "trace a published number to source data", "check plan requirements with grep", "ai valuation agent sec filings project", "document system architecture for handoff", "honest prior art literature citations"]
generated: "article"
---

In this video, Om Mali describes the last week of building the Mycroft Private Eye valuation agent, Week 11. The code was finished. What was missing was the part that lets someone else understand the system without the builder sitting next to them. The week contained three tasks and none of them was code: the documents that explain the system, a literature requirement that had been written down and never met, and a demo that reruns instead of one that was only true on the day it was recorded. Every count in the video is measured against the last commit, not remembered.

## Auditing the plan against the commit

The plan named six documents. Rather than assume each existed, Om Mali checked every one against the last commit. Three did not exist at all: the proposal, the system architecture, and the data architecture. They were not thin or stale; they were absent, and the audit found them. They have since been written from nothing, totalling 444 lines.

## A requirement met zero times

The plan also said the published documents must cite the prior-art literature honestly. A search for every author name turned up zero in two published documents. The video is careful here: the third document was the proposal, which did not yet exist, so its zero was a missing file rather than a failed requirement. After the fix the documents cite the literature 13 times. The video cautions that a citation count is not a literature review, and most citations are context. One is load-bearing: it established that funds write up every share class to the latest round price. Reproducing that on this cohort is the reason dispersion is measured per company with the share class recorded, and it overturned an earlier draft's rule.

## Three layers, 15 tables

The architecture document is built around one idea: 15 tables in three layers, each allowed to change in a different way. What the SEC filed is immutable. What a human decided is append-only. What the code derived is rebuildable. Every filed holding carries exactly one match decision, which is why the middle layer has the same row count as the first.

## Tracing a headline down eight links

The data architecture document ends with a trace. One headline, that 25 percent of consecutive observations were unchanged, is followed down eight links: the published sentence, the generated figure, the function with its guards, the panel, the match decision, the named human behind it, the filed position, and the archive file the SEC published. Break any link and you have an output, not evidence.

## A demo that reruns

The plan said to record a demo. Instead, Om Mali wrote a script with five acts, where every figure is queried live. A transcript that disagrees with the database is therefore a bug rather than an old file. The demo writes nothing: there are zero write statements across the demo and the server it calls. Act two shows a decision a named human already made and deliberately does not make a new one.

## What the week does not establish

The video lists four limits. The audit covers only the six documents the plan names. A citation count is not a literature review. The write-statement count is a static scan of five files, not a proof. And the run log that makes the chain datable has two rows, which is a start and not a history.

## Key takeaways

- Check each planned document against the last commit rather than your memory.
- Three of six planned documents did not exist until the audit found them.
- A stated requirement can be met zero times; search for evidence of each one.
- Design layers by how they may change: immutable, append-only, rebuildable.
- Trace a published number back to its source, because a broken link leaves an output without evidence.
- Replace a one-off recording with a script that queries live and writes nothing.
- State what your audit does not establish.

## Try it yourself

Take your own plan and list every requirement it states as a must. Then search for evidence of each one against your last commit, rather than against what you remember, and count the ones at zero. In the video, the builder found one, and he had written it down himself.
