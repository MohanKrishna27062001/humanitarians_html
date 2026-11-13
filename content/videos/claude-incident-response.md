---
title: "Claude, Incident Response."
seoTitle: "How Claude Runs Incident Response With a SKILL.md"
description: "When production is down, Claude follows a written incident-response skill, not instinct: triage, communicate, postmortem, in the same order every time."
summary: "The video corrects the idea that Claude handles an outage by pure instinct. With an incident-response skill loaded, Claude reads one plain-language file and runs triage, status communication and a blameless postmortem in order, every time."
keywords: ["how claude handles incident response", "incident response skill for claude", "skill md steps run in order", "triage communicate postmortem workflow", "blameless postmortem with claude", "why claude plan changes each time", "claude skill is a folder", "test claude incident response skill"]
generated: "article"
---

When production goes down at 2:00 in the morning, it is tempting to think Claude just knows what to do, as if by instinct. The video says it is not instinct at all: it is instructions. The rest of the video looks at what those instructions are, what they guarantee, and where they stop.

## The scenario

An alert fires, production is down, and someone asks Claude to run the incident. The question the video poses is what actually tells Claude what to do next. The reasonable-sounding guess is that Claude has read thousands of postmortems and so already knows how to run yours.

## Instinct versus the file

The video tests that guess. Ask Claude to handle an incident with no file loaded, and the plan changes every time you ask. Load the file, and the same three steps show up on every run. The difference between those two behaviors is the skill.

## A skill is a folder, and SKILL.md is the program

A skill is a folder that Claude reads before it acts. This one is named incident-response, and it holds a single file. That file, SKILL.md, is the entire instruction set, written in plain language. In the video's phrasing, the file is the program.

## Steps in order

Inside the file, a Steps section lists what to do in order. Claude reads each step and executes it linearly, one after another, with no branching unless a step itself says so.

For incident response, there are three steps:

- Triage the alert.
- Communicate a status update.
- Write a blameless postmortem once the incident is resolved.

The file also names exactly when to start. The trigger phrases are things like "production is down," an alert that needs a severity call, or a status update mid-incident.

## What the file buys you, and where it ends

What the file buys is repeatability. The same three steps run the same way whether it is your first incident or your fiftieth, and reliability under pressure is the point.

The limit is just as direct. If what is actually happening is not triage, communication or a postmortem, the file has nothing written for it. It only knows the page it was given. The video puts it this way: the incident-response skill is not Claude's judgment about your outage, it is your team's playbook, typed once and followed exactly every time it is asked.

## What the video does not claim

The video does not say what any particular team's incident-response file contains beyond triage, communication, postmortem and the trigger phrases. It asserts no severity taxonomy, tooling or paging system. The mechanism, a written file read before acting and executed step by step, holds whichever team's playbook is loaded.

## Key takeaways

- Claude does not handle an outage by pure instinct; with a skill loaded it follows a written file.
- Without the file, Claude's plan changes each time you ask; with it, the same three steps appear every run.
- A skill is a folder Claude reads before it acts, and SKILL.md is the whole instruction set.
- The Steps section is executed in order, with no branching unless a step says so.
- The three steps are triage, communicate and a blameless postmortem.
- The file names when to start, using phrases like "production is down."
- Outside those steps the file has nothing to say, because it only knows the page it was given.

## Try it yourself

Paste this into Claude: "I want to run an incident response workflow: triage, communicate, and write a postmortem. Read the incident-response skill and walk me through what you will do, before you do it." Run it on your own incident-response skill or workflow, not the video's example, and compare the plan Claude describes with what the file actually says.
