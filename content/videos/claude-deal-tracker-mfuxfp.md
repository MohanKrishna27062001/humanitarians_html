---
title: "Claude, Deal Tracker."
seoTitle: "How Claude's Deal Tracker Skill Works"
description: "A short explainer on Claude's deal-tracker skill: what its SKILL.md instructs, why it is reliable inside the spec, and why it does nothing outside it."
summary: "The video shows that Claude's deal-tracker skill is a folder of plain instructions rather than a smart assistant that already knows your pipeline. It tracks milestones and flags overdue items inside its written steps and does nothing for requests outside them."
keywords: ["how claude deal tracker skill works", "claude skill skill.md explained", "track deals with claude skill", "claude skill flags overdue milestones", "claude skills follow written steps", "what is a claude skill folder", "test claude skill limits prompt", "claude skill outside its spec"]
generated: "article"
---

It is easy to assume that Claude's deal tracker is a smart assistant that already knows your pipeline. The video argues that it is not: it is a scripted set of steps. The short walkthrough explains what the deal-tracker skill actually contains, runs one example deal through it, and then shows what happens when you ask for something the skill never mentions.

## A skill is a folder Claude reads before it acts

The video describes a skill as a folder that Claude reads before it does anything. In the deal-tracker skill, the file called SKILL.md says exactly what to do: track live deals, including milestones, deadlines, action items and status, and surface whatever is overdue. The instructions are plain language, with no hidden reasoning behind them. That framing is the main point of the video. What looks like intelligence about your pipeline is a written specification being followed.

## The steps run in order, one deal at a time

According to the video, the steps in the skill run in sequence and handle one deal at a time. To make that concrete, it follows a single example deal named Acme as it moves through the pipeline. When a milestone's deadline passes, the tracker flags it as overdue, which is exactly what step three of the skill tells it to do. The behavior is not improvised. It is the next instruction in the file being carried out.

## What happens outside the spec

The video then asks the same Acme tracker for something the specification never lists: drafting the counterparty's redline. The result is that nothing happens. There is no fallback and no guess. The narration puts the contrast simply: for what is written, the same input gives the same reliable output every time; for anything outside the written steps, the skill does not reach. It also notes that the skill is triggered by a fixed set of six phrases, and a request that falls outside them does not run the steps.

## What the skill is, and is not

The video's conclusion is a statement about behavior, not a judgment of quality. The deal tracker gives reliable output for exactly what is written in its steps and nothing at all for what is not. It does not claim the skill is broken or unintelligent, and it does not argue that the skill should cover more ground. It states the mechanism and stops there.

## The prompt the video suggests

The closing segment gives a paste-ready prompt. It asks Claude to read the deal-tracker skill, then track three deals: Acme, a Series C with a milestone due Friday; Beta Corp, an add-on due next Tuesday; and Gamma LLC, a refinancing with no deadline set. The prompt also asks for the pipeline view and anything overdue. After that, the viewer is told to ask for something the skill never lists, such as negotiating strategy, and to watch whether Claude says the request is outside the skill or guesses.

## Key takeaways

- A Claude skill is a folder of plain-language instructions that Claude reads before acting.
- The deal-tracker skill tracks live deals, milestones, deadlines, action items and status, and surfaces what is overdue.
- Its steps run in order, one deal at a time, and an overdue flag appears because a step says to raise it.
- The same input gives the same reliable output for anything the written steps cover.
- A request outside the spec, such as drafting a redline, produces nothing, with no fallback and no guess.
- Six exact trigger phrases start the skill, so wording matters.
- Reliable inside the spec and unhandled outside it is a description of the design, not a flaw claim.

## Try it yourself

Use the video's prompt with three deals of your own, or the three examples it names, and ask for the pipeline view and anything overdue. Then ask a question the skill never lists, such as negotiating strategy, and note whether Claude states that it falls outside the skill or starts guessing. That second answer is the test of whether the behavior described in the video holds on your setup.
