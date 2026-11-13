---
title: "The File Is The Program."
seoTitle: "What Is a Claude Skill? A Plain-Text SKILL.md File"
description: "A Claude skill is a folder with a plain-language SKILL.md, not a hidden app. The client-report skill shows how the file drives each report."
summary: "The video explains that Claude's client-report skill is not a built-in finance app but a plain-text file Claude reads and follows step by step. Whatever the file does not cover, Claude has to reason through on its own."
keywords: ["what is a claude skill file", "how does skill.md work", "claude skill is a folder", "claude client report skill explained", "how claude follows skill steps", "write a skill.md for a report", "claude skill repeatable output", "what happens when skill is silent"]
generated: "article"
---

It is easy to assume that a repeatable, finance-specific Claude capability means there is a built-in finance app under the hood. This video argues otherwise. Using the client-report skill from the Anthropic skills set, it shows that a skill is a plain text file Claude reads, and that the file is the program.

## A skill is a folder

A skill is a folder Claude reads before it works. The one examined here is client-report, and its SKILL.md file holds the full instruction set in plain language, with no hidden code. Claude reads the file and then acts on it. The pipeline lives in the file's Steps section.

## Read, execute, return

Claude reads the file, runs each step in order and returns the result. The flow is linear, with no branching unless a step itself says so. The client-report file spells out exactly what to produce: portfolio returns, an allocation breakdown, and market commentary, timed for quarterly or annual delivery.

## Same input, same report

Because the file specifies what to produce, feeding it the same numbers twice builds the same report twice. The repetition comes from the instructions, not from any special finance engine.

## Where the file runs out

The video then asks what happens when a request goes beyond the file, such as a chart type it never mentions or a client segment it does not list. There is no instruction to fall back on, so Claude reasons past the file on its own. In other words, whatever the file does not say, Claude has to work out itself.

## What the video does not claim

Two limits are stated for the source material. The video makes no claim about how Claude decides which skill to use when several are available, since the source skill does not document that. It also does not claim every skill is built like client-report; the read, execute and return pipeline and the plain-language format are properties of this skill, generalized only to the point that a skill is a file Claude reads.

## Key takeaways

- A Claude capability like client-report is not a built-in finance app.
- A skill is a folder whose SKILL.md holds plain-language instructions with no hidden code.
- The Steps section is the pipeline, and Claude runs it in order.
- The flow is linear unless a step says otherwise.
- The same input produces the same report because the file defines the output.
- Anything the file does not cover is handled by Claude reasoning past it.
- The file is the program.

## Try it yourself

Paste this into Claude: write a SKILL.md for a report you create regularly. Ask it to list exactly what must appear every time, then list what would be left to your judgment because the file does not cover it. Read the two lists back: the first is what repeats identically on every run, and the second is where Claude is reasoning past the file rather than following it.
