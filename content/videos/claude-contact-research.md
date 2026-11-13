---
title: "Claude, Contact Research."
seoTitle: "How the Claude Contact Research Skill Works"
description: "Learn why Claude cannot simply know a contact, and how the contact-research skill looks people up the same way each time when your words match."
summary: "This video explains the contact-research skill, a SKILL.md file that Claude reads before acting. It fires only on matching trigger phrases, runs the same three steps each time, and does nothing special when a question falls outside its list."
keywords: ["claude contact research skill", "how claude looks up a person", "claude skill trigger phrases explained", "is this person a warm lead", "common room contact signals claude", "why claude cannot know a contact", "repeatable steps in claude skills", "research a contact with claude"]
generated: "article"
---

When you ask Claude about a specific person, it feels natural to expect it to already know them. The video says it does not, at least not in the way that matters for sales work. Claude has to look the person up first, and the video uses the contact-research skill to show how that lookup is organized and where it stops working.

## Why memory is not enough

Claude does hold a lot of general knowledge about people. The trouble is that a question like "is this person a warm lead right now" depends on today's signals: a recent reply, a meeting that was booked, a title change. None of that lives in anything Claude was trained on. Answering from memory alone would mean guessing rather than researching, and the video treats that as the problem the skill exists to fix.

## A skill is a file Claude reads before it acts

The fix is contact-research, a skill built around a SKILL.md file. Claude reads the file before it acts, and what the file contains is instructions, not memory. That distinction is the center of the video. The skill does not give Claude knowledge of a person. It gives Claude a written procedure for finding out.

## It only fires on matching words

The skill runs only when your words match its triggers. The video gives examples such as asking who a person is or whether someone is a warm lead, and describes these as phrases of that kind. Say "who is Jane Doe at Acme" and the skill runs the same three steps every time:

- read the file
- pull the contact's Common Room signals
- return them

## Repeatable, not remembered

Run the same question next month and Claude walks the same three steps again. The video describes this as what a written spec buys you: the process is repeatable, but nothing is remembered between runs. The result depends on the current signals, while the method stays constant.

## When the question falls outside the list

The other side of the design is what happens when a question does not match. Phrase it outside the trigger list, with an open-ended question about a person the file never anticipated, and the pipeline never starts. Claude goes back to answering from what it already knows, which is the same guess the video opened by questioning. The video does not describe any error message in that case; the skill simply does not start.

## Key takeaways

- Claude's general knowledge about people does not include a contact's current signals.
- Answering from memory alone would be guessing, not researching.
- The contact-research skill is a SKILL.md file with instructions, not stored knowledge.
- It fires only when your words match its triggers, such as asking who someone is or whether they are a warm lead.
- Once triggered, it follows three steps: read the file, pull Common Room signals, return them.
- The same request later runs the same steps, so the method is repeatable.
- Questions outside the trigger list do not start the skill.

## Try it yourself

Paste the prompt the video suggests into Claude: say you want to research a specific person using Common Room data, and ask it to read the contact-research skill and walk you through its steps before doing anything. Then watch for two things. Check whether Claude names the exact trigger phrase your words matched, and whether it lays out the steps before it runs them. The skill's code is in the humanitarians-youtube repository.
