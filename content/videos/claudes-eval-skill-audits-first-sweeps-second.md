---
title: "Claude's Eval Skill: Audits First, Sweeps Second"
seoTitle: "Claude Eval Audit and Sweep: Why the Audit Comes First"
description: "Learn how Claude's eval-audit-and-sweep skill audits your eval before ranking models, and why the sweep only answers which model wins with two or more."
summary: "This video explains that Claude's eval-audit-and-sweep skill will not jump straight to a model-versus-model sweep. It audits the eval first, because a sweep over a broken eval misleads, and only then runs the full grid of models and settings."
keywords: ["claude eval audit and sweep skill", "find cheapest model that still passes", "audit eval before model sweep", "golden set and scoring function", "eval grader bias metric hygiene", "sweep every model and parameter", "why broken evals mislead model comparison", "rank models with one model only"]
generated: "article"
---

A newcomer might expect Claude's eval skill to jump straight into sweeping models to find the best one. The video explains that it does not. The skill, called eval-audit-and-sweep, audits the eval first and sweeps second, and that order does not move even when a request is ambiguous.

## The goal: cheapest model that still passes

The situation is a common one. You want to know which Claude model gives you the best results for the least cost, so you reach for a skill built for exactly that. The natural reading is that you hand over your eval, ask which model wins, and the skill runs straight into a sweep, model against model, cost against quality.

## Why the audit comes first

The skill enforces a different order. Ask it to skip straight to the sweep and it will not. The reason is that a sweep run over a broken eval produces misleading numbers, so the audit goes first. The two phases are independent, but on an ambiguous request or one asking for both, the audit leads.

## What is actually inside the skill

The video notes that the skill contains no runnable script. Claude reads your actual eval code, reads the audit and sweep reference files, and writes the glue code your specific setup needs.

## Locating the eval and running the audit

First, Claude locates your eval: the golden set, the scoring function, and the single command that runs a full pass. The audit is then a health check across four areas:

- Task design.
- Harness design.
- Metric hygiene.
- Whether the grader itself is biased.

## The sweep

Only once the audit clears does the sweep run. It is a full grid, every accessible model against every parameter setting, and it is never trimmed down early.

## What the grid can and cannot answer

The result depends on what actually made it into the grid. With two or more models cleared for access, the grid genuinely answers which model wins, cost against quality, side by side. If only one model survives the access check, the grid can only rank that model's own settings, not the field. In the video's words, the skill audits the eval before it ranks models, and it only answers which model when more than one model made the grid.

The video also notes it removed one claim that an earlier cut had added, about the sweep grid versus production under real load, because that framing is not in the skill's own text.

## Key takeaways

- Claude's eval-audit-and-sweep skill audits the eval before it sweeps.
- A sweep over a broken eval gives misleading numbers, so the audit cannot be skipped.
- The skill has no runnable scripts; Claude reads your eval code and reference files and writes the glue.
- It first locates the golden set, scoring function, and one-pass command.
- The audit checks task design, harness design, metric hygiene, and grader bias.
- The sweep is a full grid of every accessible model against every parameter setting.
- Two or more cleared models allow a real which-model answer; one model only ranks its own settings.

## Try it yourself

Ask Claude to read the eval-audit-and-sweep skill and tell you what it would check before ever running the sweep if you asked it to find your cheapest model that still passes, and why. Do it against your own eval rather than any example, and compare its answer to the audit areas above.
