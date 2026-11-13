---
title: "Does Claude Already Know Every Matter You Have? (No — Here's Why)"
seoTitle: "Does Claude Know All Your Legal Matters? (Skill Isolation)"
description: "Learn what a Claude skill is and why the matter-workspace skill keeps each legal matter walled off from the others unless you switch cross-matter context on."
summary: "This Claude Basics episode explains what a skill actually is and what the matter-workspace skill does. By default it keeps every matter isolated, and neither a clean answer nor a missing detail proves the cross-matter switch is on or off."
keywords: ["does claude remember other matters", "claude matter workspace skill explained", "what is a claude skill file", "claude skill.md plain language instructions", "claude cross matter context setting", "claude md practice configuration switch", "ai legal matter isolation by default", "how to audit a claude skill"]
generated: "article"
---

It is easy to assume that an AI assistant with a matter-workspace skill has quietly folded every case you have ever discussed into one shared pool. This Claude Basics episode says that is not what happens. By default, Claude stays inside the single matter it is pointed at, and the video walks through why, what a skill really is, and how to check the setting yourself.

## The assumption that every matter is blended together

The video opens with the natural guess: Claude has a matter-workspace skill, so every matter you have ever discussed must feed one pool that Claude can draw on at any time. The name of the skill makes that sound plausible, and it is the kind of assumption that matters a great deal for a legal team deciding how far to trust an AI tool with client information.

The video tests the guess with a simple case. Open a brand-new matter and ask Claude about specifics from a different case. It cannot see them. That is not a bug or a workaround. It is the design: matter-workspace walls off every matter from every other one by default.

## What a skill actually is

The video then explains what is inside the skill. A skill is not hidden logic. Matter-workspace is a folder that holds a single file, SKILL.md, written in plain-language instructions that Claude reads before it works on a matter. In the video's words, the file is the program.

Claude reads that file section by section and works through it in order. The process is linear, with no branching unless a step itself says to branch. Because the instructions are written in ordinary language, anyone can open the file and read exactly what Claude has been told to do.

## Where cross-matter reading can be switched on

The constraint worth knowing is that matter-workspace never reads across matters by default. It draws on another case only when cross-matter context is explicitly switched on in the practice's CLAUDE.md file. So the skill never gave Claude one shared pool across every case. What it guarantees is that each time it runs, Claude reads that same file and stays inside the matter it is pointed at, unless that one switch is turned on.

## Why neither result proves anything

The sharpest point in the video is about evidence. Watching Claude answer correctly inside a single matter does not prove it is blind to every other case, because cross-matter context might already be switched on. The reverse is also true: if Claude misses a detail from another matter, that does not prove isolation is working, because it may simply not have been asked for that detail.

In other words, behavior alone cannot tell you the state of the switch. The only reliable way to know is to check the skill file and the setting directly, rather than inferring the answer from what Claude happens to do in one conversation.

## Who this is for

The video is aimed at legal teams evaluating AI matter-management tools, at anyone building or auditing Claude skills, and at anyone who wants to understand what a skill is before trusting what its name implies.

## Key takeaways

- A skill is a folder holding one plain-language file, SKILL.md, that Claude reads before it works.
- Claude follows the file in order, with no branching unless a step says to branch.
- By default, matter-workspace keeps every matter walled off from every other one.
- Cross-matter context only applies when it is explicitly switched on in the practice's CLAUDE.md.
- Seeing Claude stay inside one matter does not prove the switch is off.
- Seeing Claude miss a detail from another matter does not prove isolation is working.
- The reliable check is to read the skill file and the switch itself.

## Try it yourself

Ask Claude to read the matter-workspace skill and tell you, by default, whether it can see anything from your other matters. Then ask it to say exactly what would have to change, and where, for that to happen. Compare its answer against the skill file and your practice's CLAUDE.md rather than trusting its behavior in a single conversation.
