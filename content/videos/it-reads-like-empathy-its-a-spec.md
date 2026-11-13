---
title: "It Reads Like Empathy. It's a Spec."
seoTitle: "How Claude's Draft-Response Skill Writes Customer Replies"
description: "How the draft-response skill writes customer replies from a written specification in SKILL.md, not from empathy, and what situations it covers."
summary: "The video explains that a good customer reply from Claude comes from a written file, not from the model's own empathy. The draft-response skill holds its instructions in SKILL.md and runs the same way every time it is called."
keywords: ["how claude drafts customer replies", "claude draft response skill explained", "does claude use empathy in replies", "what is a skill md file", "claude skill steps execute in order", "draft reply to customer escalation", "ai reply to billing issue customer", "ask claude to explain its plan first"]
generated: "article"
---

A reply that reads as warm and considerate can look like evidence that the AI behind it is being empathetic. This video argues something different about Claude's draft-response skill: the reply comes from a written file, and the file works like a specification that runs the same way every time. The video uses a customer reply scenario to explain how skills work.

## The assumption being questioned

The video starts with a naive framing: someone assumed that Claude's own empathy writes a good customer reply. The answer it gives is that a written file does. The question it poses is whether Claude uses its SKILL.md to draft a good customer reply, and the rest of the video explains why the answer is yes.

## A skill is a folder

A skill is a folder that Claude reads before it works. This one is called draft-response. Its SKILL.md file holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts on it. The way the video summarizes it: the file is the program. That is why behavior can be described by pointing at the file rather than by guessing at what the model is feeling.

## Read, then execute

The pipeline lives in the Steps section of the file. Claude reads each step in order and then executes it. The process is linear, with no branching unless a step says otherwise. The simplicity is deliberate. A reader who knows the steps can predict what the skill will do, and can see why it does it.

## One file, one job

This skill has exactly one job: to draft a professional customer-facing response, tailored to the situation and the relationship. The video lists the situations the skill covers:

- a product question
- an escalation or outage
- bad news, such as a delay or a decision not to fix something
- a declined feature request
- a billing issue

All of it lives inside that one file's script, and nothing outside it is covered. So what reads like empathy is, as the video puts it, really a spec, and it runs the same way every time you call it.

## What this does and does not claim

The claim is narrow. The video is not saying that the drafted reply is cold or inauthentic. It is saying that the process that produces the reply is a specification, rather than the model exercising judgment about tone in the moment. It also describes the structure of this particular skill, a folder with SKILL.md and a Steps section, and does not claim that every skill is built the same way.

## Why asking for a plan helps

The prompt the video suggests adds one clause: walk me through your plan before you act. The video says that clause matters, because explaining the plan first surfaces the real constraint logic, not just a draft. Asking for the plan makes the specification visible, so you can see what the skill is working from.

## Key takeaways

- A good customer reply from Claude comes from a written file, not from the model's own empathy.
- A skill is a folder Claude reads before it works, with SKILL.md holding plain-language instructions.
- Claude reads each step in order and then executes it, without branching unless a step says so.
- The draft-response skill has one job: a professional customer-facing response suited to the situation and relationship.
- It covers product questions, escalations or outages, bad news, declined feature requests and billing issues.
- Nothing outside that file is covered, and it runs the same way every time.
- Asking Claude for its plan first reveals the constraint logic behind a draft.

## Try it yourself

Paste this into Claude: draft a reply to an escalation from my team, and walk me through your plan before you act. Use your own team's real escalation rather than an invented one, and read the plan before you read the draft.
