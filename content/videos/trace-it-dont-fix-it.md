---
title: "Trace It, Don't Fix It."
seoTitle: "Trace a Reconciliation Break Before Fixing It"
description: "See how the break-trace Claude skill follows an audit trail to show where two records stopped matching, without deciding how to fix the difference."
summary: "When two records that should match don't, does Claude fix the break or explain it? The video uses the break-trace skill to show a trace-first approach: find where the numbers first differ and say why, before any fix is discussed."
keywords: ["trace reconciliation break back to source", "claude skill for reconciliation breaks", "what is a claude code skill", "skill md file plain language steps", "find where two numbers stopped matching", "audit trail trace transaction posting", "explain discrepancy before fixing it", "break trace financial services skill"]
generated: "article"
---

When Claude finds a break in the books, meaning two records that should match and do not, does it fix the discrepancy or only explain it? The video answers that Claude traces the break rather than fixing it. Its worked example is break-trace, an Anthropic Claude Code skill from a financial-services reconciliation plugin.

## What a skill is

The video begins by explaining the format. A skill is a folder that Claude reads before it works. Inside is a single file, SKILL.md, written in plain language, with no hidden code. Claude reads the file and then acts on what it says, so the file is effectively the whole program. The instructions are steps that Claude runs in order: read the file, run each step exactly as written, then hand back the result. There is no branching unless a step itself says to branch.

## Where break-trace fits

This particular skill runs after another skill has already flagged a break, which is a spot where two records that should match do not. It is not the thing that finds the problem in the first place. Its job starts once a discrepancy has been identified and someone needs to understand it.

## What break-trace actually does

Given a flagged break, break-trace follows the audit trail back on each side to the original transaction or posting. It then states exactly what is different and why. The skill does not decide what to do about the difference, and it never fixes anything. It only finds where the break started. The video sums this up by saying that break-trace finds exactly where two numbers stopped agreeing and says why, and it never decides what happens next.

## The order matters

The video closes on the sequence the skill follows: find the cause, say it plainly, and only then talk about a fix. Keeping those steps separate means that a person sees the explanation before anything is changed, which is the point of the title. Trace it, don't fix it.

## Key takeaways

- Claude traces a break in the books rather than fixing it automatically.
- A skill is a folder Claude reads before it works, built around one plain-language SKILL.md file.
- Steps in a skill run in order, with no branching unless a step says so.
- break-trace runs after another skill has already flagged a break.
- It follows the audit trail on each side back to the original transaction or posting.
- It states exactly what is different and why.
- It never decides what to do about the difference, so any fix is a separate step.

## Try it yourself

Paste a prompt into Claude along these lines: you have two numbers that should match but do not, and before it tries to fix anything, it should walk you through exactly where they first differ and why. Notice whether the answer names a cause before it suggests a correction, which is the same order break-trace follows.
