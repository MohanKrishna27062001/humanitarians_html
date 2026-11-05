---
title: "A Skill Is A File, Not An App."
seoTitle: "What a Claude Skill Is: A File, Not an App"
description: "Using a customer-pulse example, the video explains that a Claude skill is a plain-language SKILL.md file Claude reads and follows step by step."
summary: "A Claude skill is a folder Claude reads before it works, not software that runs by itself. The video uses a skill called customer-pulse to show why the same steps run in the same order every time, and why nothing outside the file is covered."
keywords: ["what is a claude skill", "claude skill is a file not an app", "how skill md file works", "claude skills run steps in order", "customer pulse claude skill example", "claude skill instructions plain language", "why claude skills are repeatable", "ask claude to explain skill first"]
generated: "article"
---

A common assumption is that a Claude skill is an app that Claude opens and runs on its own. This short video, part of the Extending Claude series on skills, plugins and connectors, corrects that using a skill called customer-pulse. A skill is a folder Claude reads before it works. It is not software that Claude switches on.

## The mistaken framing

The video starts with someone who assumed customer-pulse was an app. It is not. It is a plain file Claude reads before acting, and the question the video poses is whether opening that file tells Claude exactly what to do. The answer it builds toward is yes.

## SKILL.md is the instruction set

Inside the customer-pulse folder is one file, SKILL.md. It holds the full instruction set, written in plain language, with no hidden code underneath it. Claude reads that file and then acts on what it says. In the video's words, the file is the program.

## How a skill runs

The instructions live in a Steps section. Claude reads each step in order and carries it out, one step after another. The process is linear, with no branching unless a step itself says to branch. Because customer-pulse is a written spec, Claude does only what the file says: the same steps, in the same order, every time it runs.

## The limit is the file

That sameness is what makes a skill repeatable, and it has a reverse side. Anything not written in the file is simply outside what the skill covers. The file is not a suggestion that Claude improvises around. It is the whole boundary of what the skill does.

## What the video leaves unclaimed

The video is careful about its scope. It does not claim anything about which feedback sources customer-pulse reads or how it formats a report. Everything it states is the general Claude Skills mechanism: a folder, one SKILL.md file, plain-language instructions and a Steps section executed in order.

## Key takeaways

- A Claude skill is a folder Claude reads before it works, not an app it runs.
- The core is one SKILL.md file written in plain language.
- There is no hidden code beneath the instructions.
- Claude reads the Steps section in order and carries out each step.
- There is no branching unless a step explicitly calls for it.
- The same steps run in the same order each time, which makes the skill repeatable.
- Anything the file does not mention is outside the skill's coverage.

## Try it yourself

The video suggests pasting a prompt into Claude: ask for a quick pulse-check on what your customers are actually saying right now, and before doing anything, have Claude read any skill it has for this and walk you through exactly what steps it is about to take. Run it on your own customer feedback rather than the video's example. Asking Claude to explain first shows you what the file says to do before it does it.
