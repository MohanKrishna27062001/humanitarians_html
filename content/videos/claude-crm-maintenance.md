---
title: "Claude, Crm Maintenance."
seoTitle: "Does Claude Maintain Your CRM? Skill Scope Explained"
description: "Find out why a crm-maintenance skill is a bounded set of instructions that runs once per request, not a background job that tidies your CRM nonstop."
summary: "The word maintenance can suggest Claude tends your CRM all the time. This video explains the crm-maintenance skill as a written specification that runs once when asked, follows its steps, and gives the same result for the same input."
keywords: ["does claude maintain my crm", "claude crm maintenance skill", "claude skill is not a background job", "claude runs once per request", "skill md and reference folder", "same input same result claude", "ask claude which steps it will run", "what a claude skill will not do"]
generated: "article"
---

Someone typing "maintain" might picture Claude tidying a CRM nonstop in the background. The video explains why that picture is wrong. A skill called crm-maintenance runs one fixed routine per request, and the same input gives the same result.

## The mistaken picture

The opening asks whether Claude checks your CRM by itself. The answer is no. Nothing in the skill makes it a standing process. The video sets this up as a naive framing and then uses the skill's structure to correct it.

## What is inside the folder

A skill is a folder that Claude reads before it works. The crm-maintenance folder holds two items: a SKILL.md file and a reference folder. The SKILL.md is the full instruction set, written in plain language with no hidden logic. Claude reads it and then acts, so the file is effectively the program.

## How the pipeline runs

The pipeline sits in the Steps section. Claude reads each step in order and then runs it. The route is linear, with no branching unless a step says so.

## A specification, not a standing job

The part the video flags as worth knowing is that maintenance here is a specification written as an instruction set. It is not a job that stays on. It runs once when you ask, and it does exactly what the file says. Nothing runs in the background on its own.

Two consequences follow:

- Ask the same thing twice and you get the same result both times.
- Ask for something the file does not cover and the skill has nothing to say about it.

## The carry-out

The video's summary is that maintenance in this context is not an ongoing task Claude performs by itself. It is one bounded check, with the same steps and the same result every time you ask. The word describes what the file specifies, not an ongoing commitment.

## Key takeaways

- The name "maintenance" does not mean Claude monitors your CRM continuously.
- The crm-maintenance skill is a folder containing SKILL.md and a reference folder.
- SKILL.md holds the full instruction set in plain language.
- Claude reads each step in order, with no branching unless a step says so.
- The skill runs once per request and does exactly what the file says.
- Nothing runs in the background on its own.
- The same request produces the same result, and uncovered requests get no help from the skill.

## Try it yourself

Use the prompt from the video in a folder containing the skill: ask Claude to read the crm-maintenance skill and, before running it, to tell you exactly which steps it will execute in order. Also ask it to say plainly if anything you request falls outside what the file covers. That gives you a clear view of the skill's boundaries. The skill's code is in the humanitarians-youtube repository.
