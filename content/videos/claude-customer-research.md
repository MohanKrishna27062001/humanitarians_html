---
title: "Claude, Customer Research."
seoTitle: "How the Claude Customer Research Skill Works"
description: "Learn why Claude does not already know your customer, and how the customer-research skill pulls sources and attributes findings the same way every run."
summary: "A skill is not a new power Claude has; it is a written set of steps. This video opens the customer-research skill to show how a SKILL.md file turns a customer question into multi-source findings with attribution, run the same way every time."
keywords: ["claude customer research skill", "does claude know my customers", "multi-source research with attribution", "how claude skills work step by step", "claude skill md file explained", "ask claude to explain its plan", "research a customer question with claude", "why claude skills give consistent results"]
generated: "article"
---

It is tempting to assume that Claude already knows your customer. The video says it does not. Claude looks up the sources you give it and attributes what it finds. To show how, it opens the customer-research skill and looks at what is inside.

## A skill is a folder

A skill is a folder that Claude reads before it works. This one is called customer-research. Inside is one file, SKILL.md, written in plain language. Its purpose is stated as multi-source research on a customer question, with source attribution. Claude reads that file and then acts on it.

The key point is that the instructions are steps, and Claude runs them in order.

## Read, execute, return

The video breaks the run into three actions: read the SKILL.md, execute each step as written, then return the output. It is one pass, with no branching unless a step says so. Because the steps are fixed, the process does not change from one run to the next.

## Same every run, but not everything

A customer question gets the same treatment every time: pull sources, attribute them, and hand back the findings. This consistency is the benefit of writing the procedure down.

It also sets a limit. Ask Claude to skip the sources and just guess, and the skill has no instruction for that. Customer research only does what its steps describe. The video does not claim any built-in knowledge of your customers; the skill works on the sources you provide.

## The carry-out

The summary is that a skill is not a new power that Claude has. It is a written set of steps. Customer-research turns your question into the same multi-source, attributed findings every time.

## Key takeaways

- Claude does not already know your customer; it works from sources you give it.
- A skill is a folder, and SKILL.md holds plain-language instructions.
- The customer-research skill performs multi-source research with source attribution.
- Claude reads the file, executes each step as written, and returns the output.
- The run is a single pass with no branching unless a step says so.
- Fixed steps mean the same treatment on every run.
- The skill does not cover requests to skip sources and guess.

## Try it yourself

Paste the video's prompt into Claude: ask it to read the customer-research skill and walk you through what it is about to do before it does it. Then give it a real customer question and ask it to research across the sources you have supplied and attribute what it finds. Watching Claude explain the plan first shows you which step in the skill is doing the work. The skill's code is in the humanitarians-youtube repository.
