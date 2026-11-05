---
title: "Screens the Deal. Doesn't Decide It."
seoTitle: "What Claude's Deal-Screening Skill Does and Doesn't Do"
description: "Learn how Anthropic's deal-screening skill extracts key metrics and runs pass/fail checks into a one-page memo, and why it never decides the deal."
summary: "The video explains that Claude's deal-screening skill does not weigh a deal like a partner would. It follows the fixed steps in a SKILL.md: extract key metrics, run a pass/fail framework against the fund's criteria, and produce a one-page screening memo."
keywords: ["claude deal screening skill explained", "screen inbound cims teasers broker materials", "pass fail framework investment criteria", "one page deal screening memo", "does claude decide whether to do a deal", "how claude skills run skill md steps", "ask claude to explain before running", "extract key deal metrics from cim"]
generated: "article"
---

Ask Claude to screen a deal and it is tempting to picture it weighing the opportunity the way a partner would, deciding whether the fund should pursue it. This short video explains that this is not what happens with Anthropic's deal-screening skill. It screens the materials against your criteria and leaves the decision where it was, with you.

## A skill is a folder Claude reads first

A skill is a folder Claude reads before it works. For deal-screening, the SKILL.md inside holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts on it. The video's shorthand is that the file is the program.

## One step at a time

The instructions live in a Steps section. Claude reads each step in order and runs it. The flow is linear, one step after another, unless a step itself says to branch. Nothing else sits behind the steps making separate judgments.

## What the skill actually does

The job is specific. The skill extracts the deal's key metrics from inbound CIMs, teasers and broker materials. It runs those metrics through a pass/fail framework against the fund's investment criteria. Then it outputs a one-page screening memo, the same way on every run.

The boundary follows from that. What is not in the SKILL.md's steps is not part of the job. The skill does not decide whether you should do the deal. It runs the file's fixed pass/fail checks against your criteria and hands you a memo.

## Why the distinction matters

Knowing this limit helps set expectations. The memo is a consistent, repeatable screen, which is useful for quickly sorting incoming deal flow. It is not a recommendation, and it does not make the call on whether the fund should proceed. That judgment remains a human one.

## Key takeaways

- deal-screening is a skill, which is a folder Claude reads before it works.
- Its SKILL.md is a plain-language instruction set with no hidden logic.
- Claude runs the steps in order, linearly, unless a step says to branch.
- It extracts key metrics from CIMs, teasers and broker materials.
- It applies a pass/fail framework against the fund's investment criteria.
- The output is a one-page screening memo, produced the same way every run.
- It screens the deal but does not decide whether the fund should do it.

## Try it yourself

Paste this into Claude: "I want to quickly screen inbound deal flow, meaning CIMs, teasers and broker materials, against my fund's investment criteria. Read the deal-screening skill and walk me through what you will do before you do it." The last clause matters. Asking Claude to explain first surfaces the actual steps it is about to run, before it runs them.
