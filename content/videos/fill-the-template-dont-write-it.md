---
title: "Fill The Template. Don't Write It."
seoTitle: "How the Notify-Templates Skill Routes and Batches Alerts"
description: "Learn how the notify-templates skill fills fixed alert templates, routes messages by dollar threshold and sends one summary per sweep instead of many."
summary: "The video shows that Claude does not write each low-stock alert from scratch. The notify-templates skill fills three fixed formats, routes messages by threshold, and batches a many-SKU sweep into one summary and one append."
keywords: ["claude skill for low stock alerts", "fill notification templates instead of writing", "route alerts by dollar threshold", "batch notifications into one summary", "slack alert supplier email escalation template", "when to escalate purchase to finance", "avoid spamming one alert per sku", "claude skill without spawning a subagent"]
generated: "article"
---

Asking whether Claude writes each low-stock alert from scratch suggests that notifications are a small creative-writing task. The video says they are not. The notify-templates skill treats them as template fills, and it explicitly says not to spawn a subagent for the job.

## Three fixed templates

A skill is a folder that Claude reads before it acts. This one, notify-templates, contains three fixed formats:

- a low-stock Slack alert
- a supplier email
- an escalation for human review

Claude fills the slots from data it already has, appends the result and stops. The same data, template and append produce the same result every time.

## Routing instead of a fixed destination

Where the message lands is not fixed either. It is routed by rules in the skill:

- Most things go to the ops channel by default.
- An active stockout on a top SKU adds an @here.
- Anything over $25,000 goes straight to a purchasing lead rather than the channel.
- Finance only hears about it past $100,000 outstanding or when a duplicate order is suspected.

When a message crosses one of these thresholds, the message itself says which one it crossed.

## Batch, don't spam

For a daily sweep across many SKUs, the rule is one summary message, not one per SKU. That holds even when the task asks for a note to each SKU. Every line still goes into a single batch append.

Sending is deliberately simple: one append to an outbox file in JSON, with one line per notification. The skill says that if sending an alert takes more than two tool calls, something has gone wrong.

## Why no subagent

Because the work is a template fill, there is nothing for a subagent to figure out. The skill's file says so directly. A template, a routing table and one append are enough, and adding more machinery is the over-engineering the skill warns against.

## A test case

The video ends with a scenario to try: a low-stock alert for SKU-0042, with three units on hand, a reorder point of 20 and two days of cover, plus eight other SKUs that dropped below their reorder point the same day. The question is whether Claude sends one alert or nine, and where each is routed.

## Key takeaways

- Claude fills a fixed template for alerts; it does not write each one from scratch.
- The skill has three formats: Slack low-stock alert, supplier email and escalation.
- The skill says not to spawn a subagent for this job.
- Messages go to ops by default, with @here for an active stockout.
- Over $25,000 goes to a purchasing lead; finance hears only past $100,000 outstanding or on a suspected duplicate order.
- A sweep becomes one summary message and one batch append.
- Sending a notification should take no more than two tool calls.

## Try it yourself

Paste a scenario into Claude: a low-stock alert for SKU-0042 with three units on hand, a reorder point of 20 and two days of cover, plus eight other SKUs below their reorder point. Ask Claude to read the notify-templates skill and tell you what it will send, one alert or nine, and where each is routed, before it sends anything.
