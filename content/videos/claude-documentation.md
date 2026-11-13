---
title: "Claude, Documentation."
seoTitle: "How Claude's Documentation Skill Works"
description: "How Claude's documentation skill produces the same runbook, README or API doc shape every time, and why the guarantee ends outside its five named shapes."
summary: "The video explains that when you ask Claude to write documentation, a SKILL.md file rather than a mood decides the shape. The skill recognizes five document types, returns the same sections in the same order for each, and makes no promise outside that list."
keywords: ["claude documentation skill explained", "write a runbook with claude", "restart payment service runbook example", "claude skill same sections every time", "readme runbook api docs architecture docs", "what is a claude skill skill.md", "prompt claude to follow documentation skill", "consistent documentation structure with claude"]
generated: "article"
---

Ask Claude to document something and the expected result is a free-form write-up, shaped however Claude thinks fits. The video argues the opposite: the shape of the document comes from a file, not a mood. Using a request for a runbook as its example, it explains how the documentation skill fixes the sections in advance and where that guarantee stops.

## What decides the contents of a document

The video's example request is to write a runbook for restarting the payment service. It asks what actually decides what that document contains. The natural guess is that Claude drafts it the way a person would, improvising sections and picking whatever length feels right. If that were true, asking for the same runbook on another day would produce a different result each time.

## The same sections in the same order

According to the video, nothing drifts. Ask for the same runbook again and the same three sections come back in the same order: prerequisites, steps and rollback. The reason given is that a file decided them, not a mood. That is the central claim of the video, and the example request is the phrase it asks viewers to hold on to.

## A skill is a folder with one file

The documentation skill is a folder Claude reads before it writes. Inside is a single file, SKILL.md, containing the instructions in plain language. The video says the file does not cover just any writing. It names five specific shapes, each with its own trigger phrase:

- README
- runbook
- onboarding guide
- API docs
- architecture docs

## How the skill runs

The skill works in order: read SKILL.md, execute the matching steps and return the finished document. There is no improvising. The video describes the process as linear for the most part, and says the file branches only when a step itself says so, never on a whim. Because the runbook request named a shape the file already knows, the same sections come back each time. A generated runbook, README or API doc in a named shape is the promised shape delivered, which the video treats as real signal.

## Where the guarantee ends

If you ask for something the file does not name, such as some ad hoc write-up outside its list, the guarantee ends. You are then back to Claude's general judgment rather than the specification. The video also carefully limits its claims: it does not say five shapes is the right scope for a documentation skill, it does not say every skill works this way, and it does not say a document in a named shape is complete or accurate, only that its shape matches what the file promised.

## The prompt shown at the end

The closing prompt asks Claude, before it writes the runbook, to say exactly what SKILL.md tells it to include, namely the shape and the phrase that triggers it. Then the viewer asks for the same shape twice and compares. The video suggests watching whether Claude names the shape and its sections before writing a word, and whether the second draft matches the first.

## Key takeaways

- The structure of a document Claude writes under this skill comes from a SKILL.md file, not from improvisation.
- A skill is a folder Claude reads before it writes, and this one holds a single plain-language file.
- The skill recognizes five shapes: README, runbook, onboarding guide, API docs and architecture docs.
- Each shape has its own trigger phrase, so naming the shape matters.
- A runbook request returns the same sections, prerequisites, steps and rollback, in the same order.
- The process is read, execute, return, and branches only when a step says so.
- Outside the five named shapes, the guarantee ends and Claude falls back to general judgment.

## Try it yourself

Pick a document you need, such as a runbook for a service you maintain, and use the video's prompt. Ask Claude to read the documentation SKILL.md and state the shape, its sections and the trigger phrase before it writes. Request the same shape twice and compare the two drafts to see whether the sections and their order match.
