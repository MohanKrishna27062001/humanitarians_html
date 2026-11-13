---
title: "Claude's SEC Filings Skill: Reliable, Not All-Knowing"
seoTitle: "Claude SEC Filings Skill: What It Can and Can't Do"
description: "Learn what Claude's edgartools-sec-data skill actually covers, why it is repeatable on four tasks, and why it stops at questions needing judgment."
summary: "Adding a skill for SEC data does not give Claude general finance expertise. The edgartools-sec-data skill covers four specific things, and the video shows why that makes it dependable inside its scope and silent outside it."
keywords: ["claude sec filings skill explained", "edgartools sec data skill", "what is a claude skill file", "claude pull xbrl financial statements", "claude item 1a risk factors", "does claude understand finance filings", "why claude skills are repeatable", "limits of claude skills"]
generated: "article"
---

A newcomer might assume that once Claude has a skill for SEC data, it must now understand finance and filings in general. The video argues the opposite: a skill makes Claude follow a file, and nothing more. Using the edgartools-sec-data skill as its example, it shows that the skill is dependable exactly where the file says what to do, and empty where the file is silent.

## The wrong guess: general expertise

Ask Claude to pull data from a company's SEC filings and it reaches for a skill built for that job, a folder called edgartools-sec-data. The natural reading is that handing Claude a skill for SEC data gives it broad knowledge of finance and filings, so that it can be asked anything and will know. The video treats this as the mistaken starting point and then takes it apart step by step.

## The four-item list

The anchor of the video is what the skill file actually says. It names four things: company lookups, filings, XBRL financial statements, and sections such as Item 1A risk factors. That is the whole list. Ask for something on it and Claude has a defined way to do it. Ask for something off it, such as whether a filing looks risky, and there is no step for it, because the file never wrote that down.

## A skill is a folder

The video then explains what a skill physically is. It is a folder that Claude reads before it acts. In this case one file does the job, SKILL.md, written in plain language. It is the whole instruction set, with no hidden logic behind it. There is nothing else for Claude to draw on when a request falls outside the file.

## Read, execute, return

Claude reads the file and works through its steps in order: read, then execute, then hand back the result. The process is linear unless a step says otherwise. This is what makes the skill repeatable. The same request runs the same steps and produces the same kind of output every time. Ask for a company lookup or an XBRL statement and you get the same reliable pull on each occasion.

## Dependable in one direction, empty in the other

The video states the consequence from both sides. The skill is dependable exactly when your question matches the file: a lookup, a filing, a financial statement. It flips the moment your question needs judgment the file does not have. Asking whether a company looks like a good bet was never written into these steps, so nothing in the skill supplies an answer. The summary line is that a skill file makes Claude repeatable, not all-knowing, and it only does what the file actually wrote down.

## Key takeaways

- A skill does not give Claude general expertise; it makes Claude follow a file.
- The edgartools-sec-data skill covers four things: company lookups, filings, XBRL financial statements, and sections like Item 1A risk factors.
- A skill is a folder Claude reads before it acts, and here one plain-language file, SKILL.md, is the whole instruction set.
- Claude works the steps in order: read, execute, return the result.
- Because the steps are fixed, the same request produces the same kind of output every time.
- Questions that need judgment the file does not contain, such as whether a filing looks risky, have no step to run.
- Dependability and limits come from the same source: what the file wrote down.

## Try it yourself

Paste this into Claude: "Read the edgartools-sec-data skill, and list, in your own words, exactly which four things it lets you pull from SEC filings — then tell me one thing about a company you might want to know that isn't on that list." Compare Claude's list with the four items above, and notice which of your own questions fall off it.
