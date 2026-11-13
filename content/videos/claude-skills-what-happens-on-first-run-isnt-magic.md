---
title: "Claude Skills: What Happens on First Run Isn't Magic"
seoTitle: "What a Claude Skill Really Does on First Run"
description: "Learn what Claude actually does when it picks up a skill for the first time, using the first-run skill as a plain-language specimen."
summary: "This video opens up Anthropic's first-run skill to show that Claude's behavior is written down in a plain-language file, not hardwired. Claude reads it before acting, follows its steps in order, and goes no further than the file does."
keywords: ["what is a claude skill", "how claude skills work for beginners", "claude first run skill explained", "what is inside a skill.md file", "does claude follow skill instructions exactly", "claude skill steps section explained", "claude skill vs built in feature", "test claude with my own instructions"]
generated: "article"
---

It is easy to assume that Claude's first-run behavior is simply built into the model. The video says it is not. That behavior is written down in a skill file that Claude reads before it acts. Using a real skill called first-run as the specimen, the video shows exactly what such a file contains and what it means for how Claude behaves.

## The question: is it built in?

The starting assumption is that the way Claude handles a first run is hardwired. The video's answer is that it is written in a file instead. That distinction matters because a written file can be read, checked, and changed by a person, while a hidden built-in behavior cannot. Rather than stay abstract, the video looks at what this particular skill holds.

## A skill is a folder with one file

The skill is called first-run. Its SKILL.md file holds the whole instruction set in plain language. The video stresses what is absent: there is no hidden code and no separate logic buried somewhere else. Whatever Claude does, it is written right there in the file, and a reader can see all of it.

## How the skill runs

The skill's pipeline lives in its Steps section. Claude reads each step in order and executes it. The process is linear, with no branching unless a step itself says so. This is a useful picture of what a skill is: an ordered set of instructions, followed in sequence.

## Three steps, nothing else

First-run's job is spelled out in the file's own words as three steps:

- Check the environment.
- Run one safe, browser-only task.
- Open the trajectory viewer.

Claude follows that exact sequence every time. The video adds a boundary: the skill has nothing to say about a task the file never described. Claude follows the file only as far as the file goes.

## What a skill is, and what it is not

The video's carry-out is a one-sentence definition. A skill is not a built-in capability. It is a folder of plain-language instructions that Claude reads before it acts and follows exactly. The video does not claim that every skill is this simple, and it makes no judgment about whether the SKILL.md format is well designed. It states first-run's mechanism and its boundary, and then stops.

## Key takeaways

- Claude's first-run behavior is not hardwired; it is written in a skill file Claude reads before acting.
- A skill is a folder, and this one holds a single file, SKILL.md.
- The file contains the whole instruction set in plain language, with no hidden code or separate logic.
- Claude reads the Steps section in order and executes each step, with no branching unless a step says so.
- First-run's three steps are to check the environment, run one safe browser-only task, and open the trajectory viewer.
- Claude has nothing to say about tasks the file never described.
- A skill is a folder of instructions followed exactly, only as far as the file goes.

## Try it yourself

Take any set of detailed instructions you already have, such as a style guide, a runbook, or a SKILL.md if you have one. Paste it into Claude and ask it to walk you through what it will do, step by step, before it does anything. That one clause, before it acts, is what surfaces the real logic underneath. Use instructions of your own rather than the video's example, and compare Claude's walkthrough to what the text actually says.
