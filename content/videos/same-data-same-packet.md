---
title: "Same Data, Same Packet"
seoTitle: "How Claude's Client-Review Skill Builds a Meeting Packet"
description: "See how the client-review skill uses a plain-language SKILL.md to prep a portfolio summary, talking points and action items the same way each time."
summary: "The video explains that Claude's client-review capability is not a hidden portfolio analysis app but a plain-text skill file. Claude reads the steps in order, builds the same meeting-ready packet from the same data, and reasons on its own when the file is silent."
keywords: ["claude client review skill explained", "prep client meeting with claude", "portfolio performance summary talking points", "what is a skill md file", "claude skill plain language instructions", "repeatable meeting prep packet", "write a skill md for recurring meeting", "claude reasons past the skill file"]
generated: "article"
---

Does a repeatable, finance-specific Claude capability mean there is a built-in portfolio analysis app underneath? This short video says no. The client-review skill is a plain text file that Claude reads, and the video uses it to explain what a skill really is, what it guarantees, and where it stops.

## A skill is a folder with one file

A Claude skill is a folder Claude reads before it works. This one holds a single file, SKILL.md, which contains the full instruction set in plain language with no hidden logic. Claude reads the file and then acts on it. The video's phrase for this is that the file is the program.

## Read, execute, return

The pipeline lives in the file's Steps section. Claude reads the file, runs each step in order, and returns the result. The flow is linear, with no branching unless a step itself says to branch.

## What the file specifies

The client-review SKILL.md spells out exactly what to produce. It preps four things ahead of quarterly reviews, annual checkups or ad-hoc client meetings:

- a portfolio performance summary,
- an allocation analysis,
- talking points, and
- action items.

Because the file is explicit, feeding it the same account data twice builds the same meeting-ready packet twice.

## When the file is silent

The video then covers the limit. Ask for something the file does not cover, such as a comparison it never mentions or a chart it does not list, and there is no instruction to fall back on. In that case, Claude reasons past the file on its own. The repeatable part of the output comes from what the file says, and the rest comes from Claude's judgment in the moment. That is a useful boundary to know, because it tells you which parts of a result you can count on to repeat and which you should check.

## The carry-out

A Claude skill is not a hidden analysis app. It is a plain text file of instructions. The same account data builds the same packet every time, and whatever the file does not say, Claude has to work out itself. The video notes that it makes no claim that every skill is structured exactly like this one, only that a skill is a file Claude reads.

## Key takeaways

- A skill is a folder Claude reads before it works.
- client-review has one file, SKILL.md, written in plain language.
- Claude reads the file, runs each step in order, and returns the result.
- Steps run linearly unless a step says to branch.
- The file defines a performance summary, allocation analysis, talking points and action items.
- The same account data produces the same packet each time.
- Anything the file does not cover is left to Claude's own reasoning.

## Try it yourself

Paste this into Claude: write a SKILL.md for a recurring meeting you prep for. List exactly what must appear every time, then list what would be left to your judgment because the file does not cover it. Read back what Claude wrote. The first list is what repeats identically on every run, and the second is where Claude is reasoning past the file instead of following it.
