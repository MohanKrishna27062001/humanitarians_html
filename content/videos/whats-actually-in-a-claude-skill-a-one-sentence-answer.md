---
title: "What's Actually in a Claude Skill? A One-Sentence Answer"
seoTitle: "What's Inside a Claude Skill? A One-Sentence Example"
description: "A tiny Claude skill called mining shows that a skill is a folder Claude reads before it acts, and that it cannot answer past what its file says."
summary: "The video opens the smallest skill example, a folder called mining holding one sentence about where diamonds spawn in Minecraft 1.20. It shows that a skill is a file Claude reads and follows, giving consistent answers that stop where the file stops."
keywords: ["what is a claude skill", "claude skills explained for beginners", "what is inside a skill md file", "how claude reads a skill folder", "claude skill vs built in knowledge", "why claude gives the same answer twice", "smallest example of a claude skill", "limits of a claude skill"]
generated: "article"
---

It is easy to guess that a Claude skill means built-in knowledge, as if Claude simply knows the topic. The video says otherwise: a skill is a folder Claude checks before it acts, and what is inside the folder sets the limits of the answer. To show this, it opens one of the smallest skills in the wild, called "mining."

## The naive guess

The video begins with the assumption that Claude just knows Minecraft trivia, and that a skill is a kind of built-in knowledge. The answer given is that it is not. Claude reads a file. The question then becomes what actually happens when Claude reads a skill.

## One folder, one file

The skill is a folder named mining, and opening it reveals exactly one file, SKILL.md. A natural second guess is that Claude was already trained on years of Minecraft guides, and that the skill only gives it permission to say what it already knows. The video treats this as the wrong guess and moves straight to the contents of the file.

## The whole file is one sentence

Opening SKILL.md shows no permission statement, no reasoning and no guide to cross-reference. The entire file is one sentence: where diamonds spawn in Minecraft 1.20. Claude reads that sentence and then acts on it directly. The video points out that there is no branching and no extra steps are invented along the way. The mechanism is simply to read the instruction, follow it and hand back the answer.

## Same answer twice, and nothing more

When the same question is asked twice, the answer comes back identical both times, and the video calls that consistency real. But the file only ever said one thing. If you ask about Minecraft 1.21 instead, or about emeralds instead of diamonds, there is nothing left for the skill to reach for. This is the limit of the approach as the video presents it: the skill's answer comes from the one sentence in its file, not from general recall.

## What a skill is

The video's conclusion is that a Claude skill is not Claude knowing more. It is Claude reading one short file right before it answers, and it cannot answer past what that file says. The mining example is used because it makes the point vividly. It is not a claim that every skill is this small.

## Key takeaways

- A Claude skill is a folder that Claude checks before it acts, not built-in knowledge.
- The mining skill contains a single file, SKILL.md.
- That file holds one sentence about where diamonds spawn in Minecraft 1.20.
- Claude reads the instruction, follows it and returns the answer without inventing extra steps.
- Asking the same question twice produces the identical answer.
- Asking about another version or another resource finds nothing in the file to use.
- A skill's answers cannot go beyond what its file says.

## Try it yourself

The video suggests handing Claude a short instruction file of your own, such as a note, a checklist or a short document, rather than the Minecraft example. Ask it to say exactly what it will read in the file and what it will do with it before it acts. Watching it explain first is how you see the constraint for yourself.
