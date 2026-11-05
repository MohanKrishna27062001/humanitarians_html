---
title: "Builds the Data Pack. Doesn't Calculate the Numbers."
seoTitle: "What the Claude datapack-builder Skill Does and Does Not Do"
description: "Learn what Anthropic's datapack-builder skill does: it standardizes financial data into one Excel workbook, but it does not calculate your numbers."
summary: "A short explainer on the datapack-builder skill for financial services. A skill is a folder Claude reads, its steps run in order, and its job is to extract and standardize data into one workbook, not to run the analysis."
keywords: ["what is a claude skill", "claude datapack builder skill explained", "standardize financial data into excel", "build data pack from cim", "skill md steps run in order", "financial services data pack workflow", "ma due diligence data pack", "ask claude to explain before acting"]
generated: "article"
---

Ask Claude to build a financial services data pack and it is tempting to picture it crunching the numbers the way an analyst would. The video explains that this is not what happens. Anthropic's `datapack-builder` skill extracts and standardizes data from your sources into one workbook, and the skill's own instructions define exactly where its job ends.

## The naive framing

The video starts with a common assumption: that the skill will calculate your financials. It does not. The skill extracts and standardizes data from your sources into one workbook, the same way every time.

## A skill is a folder

A skill is a folder that Claude reads before it works. In this case it is `datapack-builder`, and the `SKILL.md` file inside holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts on it. In the video's phrase, the file is the program.

## One step at a time

The instructions live in a Steps section. Claude reads each step in order and runs it. The process is linear, one step after another, unless a step itself says to branch.

## What the skill is for

The job is specific. The skill pulls financial data from CIMs, offering memorandums, SEC filings, web search, or MCP servers. It standardizes that data into one investment-committee-ready Excel workbook with consistent structure, proper formatting, and documented assumptions.

It is built for M&A due diligence and portfolio reporting. It is not built for running the calculations itself, or for reworking a data pack that is already finished. Anything that is not in the steps of `SKILL.md` is not part of the job.

## The carry-out

The video's closing line is that `datapack-builder` doesn't calculate your numbers. It extracts and standardizes them into one workbook, and it does so the same way every time.

## Key takeaways

- A skill is a folder Claude reads before it works.
- The `SKILL.md` file holds the full instruction set in plain language, with no hidden logic.
- Claude reads the steps in order and runs them one after another, unless a step says to branch.
- `datapack-builder` pulls data from CIMs, offering memorandums, SEC filings, web search, or MCP servers.
- The output is one investment-committee-ready Excel workbook with consistent structure, proper formatting, and documented assumptions.
- It is meant for M&A due diligence and portfolio reporting.
- It does not run the calculations or rework a finished data pack, and anything outside the steps is not part of its job.

## Try it yourself

Paste this into Claude: "I want to build a financial services data pack from a CIM, an offering memorandum, and SEC filings for an investment committee review. Read the datapack-builder skill and walk me through what you will do before you do it." The last clause is the important part. Asking Claude to explain first surfaces the actual steps it is about to run, before it runs them.
