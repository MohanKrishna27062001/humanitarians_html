---
title: "Does Claude's matter-intake Skill Decide Which Clients to Take? No."
seoTitle: "Does Claude's Matter-Intake Skill Pick Which Clients to Take?"
description: "See how Claude's matter-intake skill asks nine fixed questions and logs the answers, while the decision to accept or decline a matter stays with the lawyer."
summary: "This Claude Basics episode shows that matter-intake is a fixed checklist, not a screening authority. It asks the same nine questions on every matter and writes two files plus a log row, but the accept-or-decline call never leaves the human."
keywords: ["does claude decide which clients to accept", "claude matter intake skill explained", "ai client intake checklist for lawyers", "claude skill nine intake questions", "ai conflict check limitations legal", "checklist vs judgment in ai tools", "write a skill.md for repeat decisions", "how claude skills log matter files"]
generated: "article"
---

A skill named matter-intake can sound as though Claude screens new clients and decides which matters are worth the risk before anyone else looks. This Claude Basics episode explains why that is not the case. The skill asks a fixed set of questions and logs the answers, and the decision to accept or decline a matter stays with the lawyer.

## The sound of screening authority

The video begins with the common guess: once Claude picks up matter-intake, it decides whether to take on a new matter. The name suggests gatekeeping, as if the skill weighs risk on its own.

To test it, the video runs the skill on a matter with an obvious conflict. Matter-intake does not refuse the matter or flag it as declined. It still asks the same nine questions and writes down the answers. The decision to decline was always the lawyer's, not the skill's.

## Nine questions, the same every time

What the skill actually does is ask one uniform set of questions on every matter. The video lists them:

- identification
- conflicts
- source
- risk
- materiality
- outside counsel
- owners
- legal hold
- key dates

Claude reads the SKILL.md file and works through the questions in order, with no branching. It then turns the answers into two files, matter.md and history.md, and appends one structured row to a running log.

## A specification, not a judgment call

The video describes this as a specification rather than a judgment. The benefit is that intake is identical every matter and for every lawyer who runs it. The limit is that the skill only structures what it is told. The decision to accept or decline the matter stays outside the file, with the human. The skill guarantees that the same nine questions get asked and the same two files get written, and that is the whole trick.

## Why a clean run proves little

The episode also warns against reading too much into the output. If matter-intake comes back clean on every field, that does not prove the matter is conflict-free. It only proves the checklist was filled in. And a flagged risk field does not prove a real problem exists. It may simply be a case the lawyer still has to judge.

So neither a clean run nor a flagged field is evidence on its own. Both need a person to interpret them.

## Who this is for

The video is aimed at legal teams evaluating AI intake tools, anyone building or auditing Claude skills, and anyone who wants to understand the line between a fixed checklist and a real decision before trusting either one.

## Key takeaways

- Matter-intake does not decide which matters a firm takes on.
- It asks the same nine questions on every matter, in order, with no branching.
- It produces two files, matter.md and history.md, plus one structured log row.
- The result is identical intake for every lawyer, but it only structures what it is told.
- Accept-or-decline stays with the human, outside the skill file.
- A clean run does not prove a matter is conflict-free.
- A flagged risk field does not prove there is a real problem.

## Try it yourself

Pick one recurring decision you make the same way every time before it starts, such as whether to open a new file or approve a request. Ask Claude to write a SKILL.md for it in plain language, with the fixed questions in order. Then have it read the file back and walk you through exactly what it will ask, before it asks it.
