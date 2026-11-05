---
title: "Claude, Compose Outreach."
seoTitle: "How Claude Personalizes Outreach: The Compose-Outreach Skill"
description: "Learn how the compose-outreach skill personalizes a message from a named signal source rather than inventing a personal touch, and what a generic draft means."
summary: "When Claude drafts outreach, the personal line is not free-styled. The compose-outreach skill names one job, four trigger phrases and one signal source, Common Room signals, and the personal detail is something Claude was told to find."
keywords: ["how claude personalizes outreach messages", "compose outreach skill for claude", "common room signals outreach drafting", "why is my claude outreach draft generic", "claude skill trigger phrases explained", "draft personalized email from signals", "does claude invent personal details", "check where an outreach line comes from"]
generated: "article"
---

Ask Claude to draft outreach to a real contact and the natural guess is that it invents the personal touch. The video says it does not. Claude fetches a specific signal from data and writes around that. The question it works through is what "personalized" actually means here, using the compose-outreach skill as the example.

## Not a template, and not free-styled

The video starts with the requirement that the message has to actually be about that person, rather than being a template with a name dropped in. The tempting explanation is that Claude free-styles the personal touch, inferring a detail from its own general sense of the contact. The video tests that guess with a simple thought experiment: ask for a draft twice for the same contact. A free-styling writer might return two different flavors of flattery. Here, the file names one source to pull from, so both drafts point at the same signal.

## A skill is a folder Claude reads

That consistency comes from the way the skill is built. A skill is a folder Claude reads before it acts. Inside compose-outreach sit a SKILL.md file and a references folder, with the instructions in plain language. The skill also names its own triggers: four phrases, "draft outreach to," "write an email to," "compose a message for," or any outreach-drafting request.

## One job, one named source

The skill has exactly one job: to generate personalized outreach messages using Common Room signals. That is a named external data source, not Claude's general sense of the contact. The skill then works its steps in order: read the file, look up the signal, return the draft. There is no branching and no improvising.

## What a title change looks like

The video uses a running example. Say a contact's title has changed since your last outreach. The line in the draft that mentions it is not a flourish. It is the signal the file told Claude to go find. When a draft names a real signal, such as a title change or a usage spike, that is the skill doing its job: a fact from the data, not a guess.

## Why a generic draft is not broken

When a draft reads generic, that does not mean it broke. It can mean that no strong signal was on file for that contact. The file never tells Claude to invent one to fill the gap. The video is careful not to claim that a generic-sounding draft means the skill failed, and it does not judge whether Common Room signals are the right basis for personalized outreach. It only explains the mechanism and its edges.

## Key takeaways

- Claude does not invent the personal touch in outreach; the skill has it fetch a signal from data.
- Asking twice for the same contact gives drafts that point at the same signal, because the file names one source.
- The compose-outreach skill is a folder with SKILL.md and a references folder.
- Its four triggers are "draft outreach to," "write an email to," "compose a message for," and any outreach-drafting request.
- Its one job is generating personalized messages using Common Room signals.
- The steps are read the file, look up the signal, return the draft, with no improvising.
- A generic draft can simply mean no strong signal was on file.

## Try it yourself

Before Claude drafts outreach to a contact, ask it to read the compose-outreach SKILL.md and tell you exactly which signal source it is pulling from and what triggered it. Then have it draft the message and show you which line traces back to a real signal. Watch two things: does it name the signal source before writing a single line, and does the personal line actually trace back to something it named, or is it padding?
