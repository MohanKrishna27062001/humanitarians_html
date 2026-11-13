---
title: "Claude, Draft Outreach."
seoTitle: "How Claude's Draft-Outreach Skill Researches First"
description: "How Claude's draft-outreach skill researches a prospect on the web before drafting a cold email, so specific details are checked rather than remembered."
summary: "The video explains that Claude's draft-outreach skill does not rely on what it remembers about a company. It runs web research by default and then drafts personalized outreach, so a detail like a recent funding round is something it found, not something it recalled."
keywords: ["claude draft outreach skill explained", "write cold email to a prospect", "personalized cold email with research", "claude researches prospect before drafting", "cold email recent funding round detail", "enrichment and crm for outreach drafts", "why is my outreach draft generic", "prompt claude to show what it checked"]
generated: "article"
---

Ask Claude to draft outreach to a real prospect and it is easy to assume it already knows the company from training. The video explains that the draft-outreach skill does not work that way. It researches the prospect first and then drafts, so the specific detail in a cold email is something Claude checked, not something it remembered.

## The message has to be about this prospect

The video begins from a simple requirement: outreach has to be about the specific prospect, not a company name slotted into a template. The natural guess is that Claude already knows the company and pulls its detail from memory rather than from anything checked today. The video tests that guess by pointing at a prospect that just made news, such as a funding round or a new product. Recall cannot reach something that recent, because it falls past any fixed memory. The skill's file has Claude actually go and look.

## A skill is a folder with one file

Draft-outreach is a folder Claude reads before it acts, containing a single file, SKILL.md, which holds the whole instruction set in plain language. The video says the skill names its own triggers: the phrases "draft outreach to," "write cold email to" and "reach out to" followed by a name.

## The job: research first, then draft

The skill's job has two steps, in order. First it researches the prospect, then it drafts personalized outreach. Web research runs by default, meaning Claude looks the company up. The video says that default can be supercharged by layering enrichment services and your CRM on top, but the base step is the same either way: go check, don't guess. The skill runs the steps in order, with no branching and no improvising: read the file, research the prospect, return the draft.

## Checked, not remembered

The video's running example is a prospect that closed a funding round last week. The line in the draft that mentions it is not recalled from training, which has a cutoff. It is what the research step found when it looked. When a draft names something specific and current, such as a raise, a launch or a new hire, that is the research step doing its job.

## When a draft reads generic

A generic draft does not mean the skill broke. According to the video, it can mean the research turned up little, or that enrichment and CRM sources are not hooked up. The file never tells Claude to invent detail to fill the gap. The video avoids judging whether web research by default is the right basis for personalization, and it describes this skill only, not skills in general.

## The prompt shown at the end

The closing prompt asks Claude, before drafting outreach to a prospect, to read the draft-outreach SKILL.md and say exactly what it will research and how it will trigger it. Then it should draft the message and show which lines trace back to something it actually checked and which do not. The video suggests watching whether Claude names its research before writing a line, and whether the specific detail traces back to something it looked up rather than filler.

## Key takeaways

- Draft-outreach researches a prospect on the web by default before it drafts anything.
- A recent detail, such as a funding round from last week, comes from the research step, not from training.
- The skill is one SKILL.md file, written in plain language, that Claude reads before it acts.
- It is triggered by phrases such as "draft outreach to," "write cold email to" and "reach out to."
- The job has two steps in order: research the prospect, then draft personalized outreach.
- Enrichment services and a CRM can be layered on top, but they are not required.
- A generic draft can mean little was found or those sources are not connected; the file never says to invent detail.

## Try it yourself

Use the video's prompt for a prospect you actually plan to contact. Ask Claude to read the draft-outreach file, state what it will research and how it is triggered, draft the message, and then mark which lines trace back to something it checked and which do not. Treat any line it cannot trace as filler to cut.
