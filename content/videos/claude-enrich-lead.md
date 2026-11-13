---
title: "Claude, Enrich Lead."
seoTitle: "Claude's Enrich-Lead Skill: One Detail In, Card Out"
description: "How Claude's enrich-lead skill turns a single detail, a name, company, LinkedIn URL or email, into a full contact card by following one instruction file."
summary: "The video explains that Claude's enrich-lead skill does not need a full profile to start. Given just a name, a company, a LinkedIn URL or an email, it follows the steps in its SKILL.md and returns the same contact card with email, phone, title, company intel and next actions."
keywords: ["claude enrich lead skill explained", "enrich a lead from just a name", "contact card from email or linkedin url", "claude skill for lead enrichment", "lead enrichment with only a company name", "what is a claude skill skill.md", "same input same output claude skill", "prompt claude to list steps before running"]
generated: "article"
---

Lead enrichment sounds like it needs a near-complete profile in hand before anything can happen. The video says the enrich-lead skill does not work that way. A single identifying detail is enough, and the skill follows one instruction file to turn it into a full contact card. The explainer covers what a skill is, how its pipeline runs and what the one-file design implies.

## The assumption the video corrects

The video opens with a common assumption: that enrich-lead needs a full LinkedIn profile, or at least a full name, before it can help. It does not. A name works, a company works, and so does an email. The word "or" is what matters. Each of those details works on its own, and a LinkedIn profile is not required.

## A skill is a folder Claude reads before it works

According to the video, a skill is a folder Claude reads before it works. For enrich-lead, the SKILL.md file holds the full instruction set in plain language, with no hidden logic. Claude reads it and then acts. The video sums this up by saying the file is the program, and notes that enrich-lead is not code Claude runs.

## The pipeline

The pipeline sits in a steps section. Claude reads each step in order and runs it. The flow is linear, with no branching unless a step says so.

## What you give it and what comes back

The skill is a specification written as an instruction set. Drop in any one of the following:

- a name
- a company
- a LinkedIn URL
- an email

and it hands back a full contact card containing email, phone, title, company intel and next actions. The video adds no fields beyond those it names.

## Same card every time

Ask about the same lead twice and you get the same card both times. The reverse is also true: ask for something the file does not cover and the skill has nothing to say about it. The video does not judge whether the skill is well designed. It states the one-file, same-input-same-output mechanism and stops there.

## The prompt shown at the end

The closing prompt describes a lead with just a first name and nothing else. It asks Claude to read the enrich-lead skill in the folder and walk through exactly which steps it will run, in order, before running them. The video says watching Claude explain first shows which single detail it is working from and where the file's instructions stop.

## Key takeaways

- Enrich-lead does not need a full profile; one identifying detail is enough.
- That detail can be a name, a company, a LinkedIn URL or an email.
- A skill is a folder Claude reads before it works, and this one is a single SKILL.md file in plain language.
- Claude reads the steps in order and runs them, with no branching unless a step says so.
- The output is a contact card with email, phone, title, company intel and next actions.
- Asking about the same lead twice returns the same card both times.
- Anything the file does not cover is something the skill has nothing to say about.

## Try it yourself

Use the video's prompt with a lead you know only by first name. Ask Claude to read the enrich-lead skill in the folder and list the steps it will run, in order, before it runs any of them. That explanation shows you which detail it starts from and where its instructions end.
