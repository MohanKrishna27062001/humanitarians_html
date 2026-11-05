---
title: "It Drafts the Reply. It Never Sends It."
seoTitle: "Claude customer-pulse-check Skill: Drafts, Never Sends"
description: "How the customer-pulse-check skill groups recurring complaints, ranks the top three and drafts replies, while leaving the decision to send to a person."
summary: "The video uses the customer-pulse-check skill to show that Claude drafts replies to unhappy customers but does not send them. The skill pulls complaints from several sources, finds repeating themes, ranks three and drafts a reply template for each."
keywords: ["does claude reply to customers automatically", "claude customer complaint analysis skill", "draft replies to customer complaints", "find top customer complaint themes", "what is a claude skill file", "claude skill steps run in order", "human approves customer replies ai", "prompt to group customer complaints"]
generated: "article"
---

Does Claude send replies to unhappy customers on its own? This video says no. Using an Anthropic Claude Skill called customer-pulse-check as the example, it shows that Claude finds the patterns in complaints first, then drafts replies, and leaves the question of what goes out to a person. The video is part of Professor Bear's Claude-basics series, narrated by Liam.

## The assumption being tested

The video starts with a common assumption: that Claude would reply to unhappy customers automatically. The answer it gives is that Claude drafts replies after finding the patterns, and nothing more. The point is not that the tool is limited. It is that the skill is deliberately built so that the final decision stays with a human.

## What a skill is

A skill, as the video describes it, is a folder Claude reads before it works. In this case it is a single file called SKILL.md, written in plain language with no hidden logic. Claude reads the file and then acts on what it says, so the file is effectively the program. Inside are instructions written as steps, and Claude runs them in order. There is no branching unless a step itself tells it to branch.

## The steps in customer-pulse-check

The skill is built for one job: turning scattered complaints into a short, fixable list. The steps run like this:

- Pull complaints from PayPal disputes, HubSpot tickets and review exports.
- Find the themes that repeat.
- Rank the top three.
- Draft a reply template for each of those three.

You can give the skill a since date, and it will pull from those sources from that point. The result is a grouped view of recurring complaints with a draft reply ready for each of the top three themes, rather than a long pile of individual tickets.

## Where the human comes in

The key line in the video is about what the skill leaves undone. It does not decide which replies go out. It drafts them, and sending one is still a person's call. The carry-out is stated plainly: customer-pulse-check finds the repeating complaints and drafts a reply for each, and it never decides which ones actually go out.

This is a useful design pattern to notice. The skill automates the slow, mechanical part, which is reading a stack of complaints and spotting what repeats. The part that carries risk, putting words in front of a customer, is left to someone who can judge whether a reply is appropriate.

## The order matters

The video ends by pointing out that the prompt it suggests follows the same order as the skill: find the pattern, draft the reply, and leave sending it to a person. Asking Claude to look at the pattern before drafting anything keeps the drafts tied to what customers are actually saying, rather than to a first impression of a single message.

## Key takeaways

- Claude does not automatically send replies to unhappy customers in this example; it drafts them.
- A skill is a folder of plain-language instructions, with SKILL.md as the main file.
- Claude reads the steps and runs them in order, with no branching unless a step says so.
- Customer-pulse-check pulls complaints from PayPal disputes, HubSpot tickets and review exports.
- It groups recurring themes, ranks the top three and drafts a reply template for each.
- An optional since date limits how far back it looks.
- Whether a reply goes out is still a person's decision.

## Try it yourself

Paste this into Claude: I have a stack of customer complaints. Before drafting any responses, find the three that come up most often, tell me what people are actually saying, and only then draft a reply for each. Leave it to me whether any of them goes out. Run it on a real set of complaints and check that you get the pattern first, then the drafts.
