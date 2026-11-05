---
title: "Follows the File, Not Its Own Reasoning."
seoTitle: "How Claude Skills Follow Written Steps Exactly"
description: "See why a Claude Skill works as a written specification that Claude follows step by step, using the comps-analysis skill as the example."
summary: "A short walkthrough of what happens when Claude runs an Anthropic Skill. The comps-analysis skill shows that Claude executes a SKILL.md file in order rather than reasoning its own way through the task."
keywords: ["how claude skills actually work", "what is a skill.md file", "does claude follow skill instructions exactly", "anthropic skills explained for beginners", "claude skill steps run in order", "comps analysis skill with claude", "claude skill same input same output", "ask claude to explain skill first"]
generated: "article"
---

A common assumption is that when Claude runs a comps analysis, it reasons through the problem the way a human analyst would. The video argues that this is not what happens when a Skill is involved. Claude reads a written file and carries out what the file says, and that single fact explains both why the results are repeatable and where the approach stops being useful.

## The naive framing: does Claude reason through it?

The video opens with the question many people have when they hand Claude a task such as a comparable-company analysis: does it work out its own approach? The answer given is no. When a Skill is in play, Claude follows a written file step by step. The interesting question is therefore not how clever Claude's reasoning is, but what the file actually contains and how faithfully Claude follows it.

## A skill is a folder

The video explains that a Skill is just a folder. In the example, the folder is called comps-analysis, and inside it sits a SKILL.md file that serves as the full instruction set. The instructions are written in plain language, with no hidden logic behind them. Claude reads the file and then acts on it. The video sums this up by saying the file is the program.

## Steps, in order

The real pipeline lives in the file's Steps section. Claude reads each step and executes it one at a time, in the order the steps are written. The execution is linear, and Claude does not branch unless a step explicitly tells it to. That is a very different picture from an analyst improvising a method, and it means the structure of the work is decided by whoever wrote the file rather than by Claude in the moment.

## Spec, not suggestion

This is what makes the comps-analysis skill a specification rather than a suggestion. Run it on the same input twice and the same steps produce the same output both times. The video is equally clear about the limit. If you step outside what the file actually says, there is nothing written down to fall back on. Inside a Skill, Claude follows the written steps and does not reason its own way through the task, so it never does more than the file says.

## What the video deliberately leaves out

The video stays at the level of the general Skill mechanism: the folder, the SKILL.md file, the Steps section, linear execution, and the repeatability and limits that follow from it. It does not claim anything about which specific financial multiples or data sources the comps-analysis skill computes, because that detail was not specified in what the video was built from.

## Key takeaways

- A Skill is a folder, and the SKILL.md file inside it is the complete instruction set.
- The instructions are written in plain language, with no hidden logic.
- Claude executes the Steps section one step at a time, in the order written.
- Execution is linear and does not branch unless a step says to.
- Because it is a specification and not a suggestion, the same input gives the same output every time.
- The flip side is that Claude has nothing written down to fall back on outside what the file says.
- The video makes no claims about the specific calculations inside the comps-analysis skill.

## Try it yourself

Paste this into Claude: "I want to run a comps analysis on a public company. Read the comps-analysis skill and walk me through what you will do before you do it." The last clause is the important part. Asking Claude to explain first, before it runs anything, is what shows you the steps the file wrote for it. Try it today on a company you are genuinely curious about, and compare what Claude says it will do with what the file actually contains.
