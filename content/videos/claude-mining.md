---
title: "Claude, Mining."
seoTitle: "What Is a Claude Skill? A One-Sentence SKILL.md Example"
description: "A Claude skill is a folder Claude reads before it acts. A one-sentence Minecraft example shows what a skill adds and what it cannot do."
summary: "The video uses a skill called mining, whose SKILL.md is one sentence about diamonds in Minecraft 1.20, to show what a Claude skill really is. Claude reads the file and answers from it, and cannot answer past what it says."
keywords: ["what is a claude skill", "what is inside a skill md file", "does claude skill add knowledge", "claude skill folder explained simply", "how claude reads a skill before answering", "claude skill example minecraft diamonds", "limits of a claude skill", "test a claude skill instruction file"]
generated: "article"
---

The common guess is that a skill means Claude has built-in knowledge, as if a skill unlocked a new ability the way a plugin might. The video says it does not work that way. A skill is a file that Claude reads, and it uses a deliberately tiny example, a skill named mining, to show exactly what that means.

## The naive framing

The starting assumption is that Claude "just knows" something like Minecraft trivia, and that having a skill for it means built-in knowledge. The video's answer is simple: it reads a file. The question it then asks is what is actually happening when Claude reads a skill.

## A folder with one file

A Claude skill is a folder that Claude checks before it acts. This one is called mining. Open it, and there is exactly one file inside, SKILL.md.

## The tempting wrong guess

One tempting explanation is that Claude was already trained on years of Minecraft guides, and the skill merely gives it permission to say what it already knows. The video sets that aside by opening the file.

## The anchor: the entire file is one sentence

Inside SKILL.md there is no permission statement, no reasoning, and no guide to cross-reference. There is a single sentence about where diamonds spawn in Minecraft 1.20. That is the entire file.

## Read, follow, answer

Claude reads that sentence and acts on it directly. There is no branching and no extra steps invented along the way. The mechanism is to read the instruction, follow it, and hand back the answer.

## Consistent, and bounded

Ask the same question twice and you get the identical answer both times. The video says that consistency is real. But ask about Minecraft 1.21 instead, or about emeralds instead of diamonds, and there is nothing left to reach for, because the file only ever said the one thing.

## What the video does not claim

It does not say every skill is this small. Mining is used because it makes the point vividly, not because all skills are one sentence. It also gives no verdict on whether mining is a well-built skill, and it does not claim Claude is otherwise ignorant of Minecraft. The claim is narrower: for this skill, the answer comes from the one sentence in its file.

## Key takeaways

- A Claude skill is a folder that Claude checks before it acts.
- The mining skill contains one file, SKILL.md, holding a single sentence about where diamonds spawn in Minecraft 1.20.
- Claude reads the instruction, follows it directly and returns the answer, with no invented steps.
- Asking twice gives the same answer, which is a real benefit.
- A skill is not Claude knowing more; it is Claude reading one short file right before it answers.
- Questions the file does not cover, such as another version or another resource, have nothing to draw on.
- Claude cannot answer past what the file says.

## Try it yourself

Take a short instruction you have on hand, such as a note, a checklist or a short document, rather than the Minecraft example. Then ask Claude: "I'm going to hand you a short instruction file. Before you use it, tell me exactly what you'll read in it and what you'll do with what's inside, before you act." Having Claude explain first is how you see the constraint for yourself.
