---
title: "Does Claude Remember Your Firm's Habits? No — Here's What Actually Runs"
seoTitle: "Does Claude Remember Your Firm's Habits? How Skills Work"
description: "See why Claude does not remember how your firm logs a case update, and how the matter-update skill follows the same written steps on every matter."
summary: "This Claude Basics episode shows that Claude does not build up habits like a new paralegal. The matter-update skill is a folder of written instructions it reads fresh every run, so it does exactly what the file says and nothing more."
keywords: ["does claude have memory between conversations", "claude matter update skill explained", "how claude skills follow instructions", "claude skill vs memory difference", "ai case log update workflow", "claude consistent behavior without memory", "what is a claude skill folder", "ask claude to explain before acting"]
generated: "article"
---

A common assumption is that after you use Claude a few times, it learns how your firm does things, much like a new paralegal who picks up the routine. This Claude Basics episode argues that this is not what happens. Claude does not remember anything between conversations. What it has is a skill, a folder it reads before it acts, and the video explains how that gives consistent results without any memory.

## Why every case update needs the same steps

The video starts with a practical situation. Every open matter keeps changing: a new filing, a settlement offer, a missed deadline. Each change has to be written down the same way on every case. The video follows one example, case 4471, where a settlement offer has just arrived and needs to go on the record.

The easy assumption is that Claude picks up the firm's habits over time. The video tests this directly. Open a brand-new conversation about a matter Claude has never touched, ask for the same kind of update, and the same steps run immediately. There was nothing to remember between conversations, because nothing was being remembered.

## What the matter-update skill actually contains

What is really there is a skill called matter-update. Inside the folder is one instruction in plain language: append a dated event to the matter's history file, and refresh the log row to match. The skill is built to fire for five kinds of change:

- a new development
- a status change
- a risk reassessment
- a deadline shift
- a change in settlement authority

Claude reads that file first, on every single run, and then follows the steps in order. The process is linear, with no branching unless a step says so.

## Logged, not remembered

Back in the example, the settlement offer becomes a dated event in the history file, and the log row updates to match. The video's point is that this follows the file's recipe, not a memory of case 4471. The same result would appear on any matter, because the instruction is the same every time.

## The boundary of what it will do

This design has a clear edge. Ask for exactly what the file describes, a dated event and a refreshed row, and it runs the same way every time on any matter. Ask for something the file never mentions, such as a strategy call, a new field, or a judgment about risk, and there is nothing to guess from. The skill only does what is written. The video presents this as the difference between consistent behavior and memory, and suggests that both are worth understanding before relying on either.

## Who this is for

The episode is aimed at legal teams evaluating AI case-logging tools, at anyone building or auditing Claude skills, and at anyone who wants to know why Claude behaves consistently without remembering earlier work.

## Key takeaways

- Claude does not remember a firm's habits between conversations.
- A skill is a folder Claude reads before it acts, fresh on every run.
- The matter-update skill holds one instruction: append a dated event to the history file and refresh the log row.
- It is built for five triggers: new development, status change, risk reassessment, deadline shift, and settlement authority change.
- Steps run in order, with no branching unless a step says so.
- A brand-new conversation on an untouched matter runs the same steps immediately.
- Anything the file does not mention, such as strategy calls or new fields, is outside what the skill does.

## Try it yourself

Before Claude makes any change, ask it to read its instructions for the task in full and explain, step by step, exactly what it is about to do: which file changes, and what it will not touch unless you say so. Only then let it proceed. The video notes that explaining first makes Claude's next move visible before it happens.
