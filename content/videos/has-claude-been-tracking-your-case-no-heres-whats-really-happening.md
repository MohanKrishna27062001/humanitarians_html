---
title: "Has Claude Been Tracking Your Case? No — Here's What's Really Happening"
seoTitle: "Does Claude Track Your Case? How Skills Really Work"
description: "Claude has no ongoing memory of your matter. The matter-briefing skill is one SKILL.md file Claude runs on the record you provide, in order."
summary: "Claude has not been quietly tracking your legal matter. The matter-briefing skill is a single SKILL.md file that turns whatever is on record into a five-part briefing, so a gap in the record is a gap in the briefing."
keywords: ["does claude remember my legal case", "claude matter briefing skill explained", "what is a skill.md file", "claude skills are not memory", "ai legal matter tracking limits", "delete claude skill forget anything", "claude briefing posture deadline risk", "write a skill for recurring briefings"]
generated: "article"
---

It is natural to think Claude has been quietly keeping tabs on a legal matter, building up a memory of it as things happen. This Claude Basics episode explains why that is not true. Claude was handed a file on the matter once, when you asked, and there is no ongoing memory to lose. The video shows what the matter-briefing skill actually does and where its reliability ends.

## The naive framing

The video begins with the assumption that Claude has been tracking the matter. The matter-briefing skill sounds as though it has been following the case the whole time. The video says there is nothing like that happening, and that to see why you need to look at what is actually inside the file.

## Delete the folder, forget nothing

A direct test makes the point. Delete the skill folder and Claude does not forget a single update on the matter, because it was never storing any. It just stops running that one routine.

## What a skill actually is

Matter-briefing is a folder holding one file, SKILL.md. That file contains instructions for turning whatever is currently on record into one structured read with five parts: posture, what has changed, the next deadline, open questions, and a risk check. Claude reads the file from top to bottom and works through it step by step, in the order written, with no branching unless the file itself says to branch.

That makes a skill a specification and not an ongoing watch. The payoff is that Claude produces the same five-part read every time. The limit is that anything not already on the record when you asked will not appear.

## Neither result is proof

The video draws two conclusions in opposite directions. Watching Claude produce a sharp, complete-looking briefing does not prove it caught every development, because the file only compiles what is already on record, and a gap in the record is a gap in the briefing. In the other direction, a briefing that misses something obvious does not prove the skill is broken, because the record it was given may never have contained that item.

So a skill does not give Claude a memory of the case. It is a file of steps that Claude runs on whatever is on record at that moment. The audience includes legal teams evaluating AI matter-tracking tools, people building or auditing Claude Skills, and anyone who wants to understand the difference between a specification and an ongoing watch before trusting either.

## Key takeaways

- Claude does not quietly track a matter between conversations.
- The matter-briefing skill is a folder with a single SKILL.md file.
- The file turns the current record into posture, changes, next deadline, open questions and risk.
- Claude follows the file in order, top to bottom, without branching unless told to.
- Deleting the folder removes the routine, not any stored memory.
- A gap in the record becomes a gap in the briefing.
- Neither a sharp briefing nor a flawed one is proof on its own.

## Try it yourself

Pick one thing you brief someone on regularly, such as a project, a matter or a case. Ask Claude to write a SKILL.md for it covering current status, what has changed, next deadline, open questions and risk. Then have Claude read it back and walk you through exactly what it will do before it does it. The video's code reference is the matter-briefing skill in the humanitarians-youtube repository.
