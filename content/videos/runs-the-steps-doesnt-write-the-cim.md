---
title: "Runs the Steps. Doesn't Write the CIM."
seoTitle: "What Claude's CIM Builder Skill Does and Doesn't Do"
description: "Learn how Anthropic's cim-builder skill structures a sell-side CIM by running fixed steps from its SKILL.md, and what it leaves undone."
summary: "The video explains that Claude's cim-builder skill does not draft a deal story the way a banker would. It reads a SKILL.md folder and runs fixed steps in order to structure a sell-side confidential information memorandum the same way every time."
keywords: ["claude cim builder skill explained", "what is a confidential information memorandum", "does claude write a cim for me", "sell-side cim structure and drafting", "how claude skills run skill md steps", "claude skill is a folder", "ask claude to explain before acting", "investor-ready document consistent formatting"]
generated: "article"
---

Ask Claude to build a Confidential Information Memorandum, or CIM, and it is tempting to picture it drafting the deal story itself, the way a banker would. This short video explains that this is not what happens with Anthropic's cim-builder skill. The skill structures a CIM from a fixed set of steps. It does not write one with independent judgment.

## A skill is a folder Claude reads first

The video defines a skill as a folder Claude reads before it works. For this one, the SKILL.md file inside holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts on it. In the video's words, the file is the program, so understanding the skill means understanding what that file says.

## One step at a time

The instructions live in a Steps section. Claude reads each step in order and runs it. The flow is linear, one step after another, unless a step itself says to branch. There is no separate layer of decision-making behind the steps.

## What the skill's job actually is

The skill's job is specific: structure and draft a confidential information memorandum for a sell-side deal. It organizes company information into one investor-ready document with consistent formatting and a narrative that holds together, the same way on every run.

The limit follows directly. What is not in the SKILL.md's steps is not part of the job. The skill does not decide what belongs in the document beyond what the steps specify, and it makes no claim about any particular deal or company. The video describes the mechanism, a written procedure that Claude reads and executes, and its one stated limit, which is that it covers only what the file says.

## The carry-out

The summary line is that cim-builder does not write your CIM. It runs the SKILL.md's fixed steps on it, the same way every time. That framing sets realistic expectations: you get consistent structure and formatting, while the information and its accuracy still come from you.

## Key takeaways

- cim-builder is a skill, which is a folder Claude reads before it works.
- Its SKILL.md is a plain-language instruction set with no hidden logic.
- Claude runs the steps in order, one after another, unless a step says to branch.
- The job is to structure and draft a sell-side CIM as one investor-ready document.
- Output aims for consistent formatting and a coherent narrative on every run.
- Anything not in the steps is not part of the job.
- Asking Claude to explain first surfaces the steps it is about to run.

## Try it yourself

Paste this into Claude: "I want to structure and draft a confidential information memorandum for a sell-side M&A process. Read the cim-builder skill and walk me through what you will do before you do it." The last clause matters. Asking Claude to explain first brings out the actual steps it is about to run, so you can check them before anything runs.
