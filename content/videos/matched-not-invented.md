---
title: "Matched, Not Invented."
seoTitle: "Claude Design System Skill: Audit and Extend Components"
description: "How a Claude skill is just a folder with a SKILL.md file, shown through the design-system skill that audits, documents and extends a design system."
summary: "This video explains that a Claude skill is a folder holding a plain-language instruction file, using the design-system skill as its example. The skill audits, documents or extends a design system by matching patterns that already exist."
keywords: ["what is a claude skill folder", "skill md file instructions explained", "audit design system naming inconsistencies", "find hardcoded values in components", "document component variants and states", "extend existing design system patterns", "claude reads skill steps in order", "design system skill for claude"]
generated: "article"
---

A common assumption is that Claude keeps a design system consistent by taste. This video says that is not how it works: a written file does that job. It uses the design-system skill, an Anthropic skill, as a worked example of what a skill actually is, and of why the skill does not invent a new look.

## The naive framing

The video begins with the question of whether Claude uses a SKILL.md file to keep a design system consistent. The answer it gives is yes, and the claim is that taste plays no part. The consistency comes from a document that Claude reads before it works.

## A skill is a folder

A skill, the video explains, is a folder that Claude reads before it does a task. This one is called design-system. Its SKILL.md file holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts on it, so the file is the program.

## Read, then execute

The pipeline lives in a section of the file called Steps. Claude reads each step in order and then executes it. The execution is linear, with no branching unless a step explicitly says otherwise. This makes the behavior of the skill easy to inspect, because anyone can open the file and read the same sequence Claude follows.

## One file, one job

The design-system skill has exactly one job: to audit, document or extend a design system. In practice the video gives three kinds of work.

- Checking for naming inconsistencies or hardcoded values across components.
- Writing documentation for a component's variants, states and accessibility notes.
- Designing a new pattern that fits the system already there.

All of this lives inside that one file's script, and nothing outside it is invented from scratch.

## Matched, not invented

The closing idea is in the title. The skill does not create a new look. It checks your components against the patterns already in your codebase, and it matches or extends what is already there. The video also states what it does not claim: it does not say how Claude chooses which skill to use for a given request, and it does not say that every skill has this same folder and Steps shape. The description covers this one skill's structure.

## Key takeaways

- A Claude skill is a folder that Claude reads before it works.
- The design-system skill keeps its instructions in a SKILL.md file written in plain language.
- Claude reads the steps in order and executes them linearly unless a step says otherwise.
- The skill has one job: audit, document or extend a design system.
- Audits look for naming inconsistencies and hardcoded values across components.
- Documentation covers a component's variants, states and accessibility notes.
- New patterns must fit the system already in the codebase.
- Asking Claude to explain its plan first surfaces the constraint logic behind a recommendation.

## Try it yourself

Paste this into Claude: audit my design system for naming inconsistencies and hardcoded values, and walk me through your plan before you act. The last clause matters, because explaining the plan first shows the real constraint logic and not just a recommendation. Run it on your own project's components, not the video's example. The source skill is linked in the video description.
