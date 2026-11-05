---
title: "Claude's Legal Hold Skill: One File, Four Modes, Zero Judgment"
seoTitle: "Claude's Legal Hold Skill: What It Does and Doesn't Do"
description: "See how Claude's legal-hold skill works as one SKILL.md file with four modes and an attorney check, and why it adds no legal judgment of its own."
summary: "This video opens Claude's legal-hold skill to show it is one instruction file, not legal judgment. It routes by issue, refresh, release, or status, asks about attorney review first, and leaves enforcement, scope, and sending the notice to a person."
keywords: ["claude legal hold skill explained", "what is a litigation hold notice", "skill.md four modes issue refresh release", "attorney review before legal hold", "can ai decide legal hold", "ai drafts legal hold notice", "claude skill follows file step by step", "limits of ai in litigation holds"]
generated: "article"
---

Claude picked up a skill called legal-hold. Does it decide on its own when documents need to be frozen for a lawsuit? The video says no. A skill is a folder holding one file, SKILL.md, that Claude reads before it starts and then follows step by step, and the legal-hold file is a good example of how little judgment that adds.

## It sounds like Claude's call

The skill issues legal holds, and that can sound as though Claude decides when documents need to be preserved. The video points to the file's own confirmation gate as evidence otherwise. Before it issues or releases a hold, the skill stops and asks whether the request has been reviewed with an attorney. If the answer is no, it hands back a one-page brief to take to one instead of sending anything.

## One file, in plain language

The skill is a single SKILL.md. It holds instructions for drafting the hold notice, logging the case fields, and calendaring the next refresh, all written in plain language that Claude reads before it starts.

## Four modes, routed by flag

The file routes by flag, with four modes: issue, refresh, release, and status. Once a mode is chosen, Claude follows that mode's steps in order. The steps described are to capture the details, draft the notice, update the log, and calendar the next refresh.

## The file draws its own edges

The specification states what it does not do. It drafts, it logs, and it calendars. It does not enforce preservation, it does not set scope alone, and it does not send the notice. A person does every one of those.

## What the skill guarantees

Legal-hold never taught Claude when a lawsuit calls for a hold. What it guarantees is consistency: once a person says issue, refresh, or release, Claude reads that same file and produces the same notice, the same log update, and the same next date every time.

## Two limits on what you can conclude

The video ends with two cautions. Watching Claude draft a clean, on-time hold notice does not prove it understood the lawsuit, because a file can be followed to the letter on a case it never grasped. And watching it stall on a request does not prove the skill is broken; it may be asking for something the written steps do not cover. The video says every specific claim comes from reading the real SKILL.md in full, including the confirmation gate, the four flags, and the list of what the skill does not do.

## Key takeaways

- Legal-hold is a folder with one SKILL.md file that Claude reads before it starts.
- Before issuing or releasing a hold, the skill asks whether an attorney has reviewed it.
- Answering no produces a one-page brief for an attorney instead of sending anything.
- The file routes by flag to four modes: issue, refresh, release, and status.
- Each mode follows its own steps in order, such as capturing details, drafting the notice, updating the log, and calendaring the next refresh.
- The skill does not enforce preservation, set scope alone, or send the notice; a person does.
- It gives consistency, not legal judgment.
- A clean notice does not prove understanding, and a stall does not prove a broken skill.

## Try it yourself

Pick one document or process that you produce the same way every time. Ask Claude to write a SKILL.md for it, in plain language with ordered steps, then have Claude read the file back to you and walk you through exactly what it will do before it does it. Use something you actually produce over and over.
