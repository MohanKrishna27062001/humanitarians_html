---
title: "Notification Templates: Fill Them, Don't Write Them"
seoTitle: "Claude Notification Templates: Fill, Route and Batch Alerts"
description: "How the notify-templates skill has Claude fill three fixed alert formats, route them by threshold, and batch a sweep into one summary."
summary: "The video explains the notify-templates skill, which treats notifications as template fills rather than creative writing. It covers the three formats, the routing thresholds, and the rule that sending an alert should take no more than two tool calls."
keywords: ["claude notification templates skill", "how to route alerts by threshold", "batch notifications into one summary", "stop alert spam from ai agents", "low stock slack alert template", "claude skill outbox append", "ai agent notification best practices", "escalation alert for human review"]
generated: "article"
---

Every notification Claude sends should cost no more than two tool calls, and none of them should involve writing. That is the point of the notify-templates skill, covered in this Humanitarians AI video narrated by Liam. The skill treats notifications as template fills rather than creative writing, and it explicitly says not to spawn a subagent for the job. The video opens by correcting a common assumption: that Claude writes each low-stock alert from scratch.

## What a skill is and what this one contains

The video describes a skill as a folder Claude reads before it acts. This one holds three fixed formats: a low-stock Slack alert, a supplier email, and an escalation for human review. Claude fills the slots from data it already has, appends the result, and stops. Because the data, the template and the append are the same every time, there is no creative step to delegate.

## Routing instead of a fixed destination

Where a message lands is also decided by rules rather than by Claude's judgment in the moment. The video lists the tiers:

- Most notifications go to the ops channel by default.
- An active stockout on a top SKU adds an @here.
- Anything over $25,000 goes straight to a purchasing lead instead of the channel.
- Finance only hears about it past $100,000 outstanding, or when a duplicate order is suspected.

Cross a threshold, and the message says which one was crossed.

## Batch, do not spam

For a daily sweep across many SKUs, the rule is one summary message, not one per SKU. This holds even when the task asks for a note to each SKU: every line still goes into a single batch append. Sending is one append to an outbox file in JSON, with one line per notification.

The video gives a simple test for whether the process has gone wrong. If sending an alert takes more than two tool calls, something has been over-engineered.

## The carry-out

The video's summary is short. Claude does not write these alerts; it fills three fixed templates from data it already has. A sweep becomes one summary and one append, never one call per SKU.

## Key takeaways

- Notifications are template fills, not creative writing, and the skill says not to spawn a subagent for them.
- The three fixed formats are a low-stock Slack alert, a supplier email and an escalation for human review.
- Most alerts default to the ops channel, and an active stockout on a top SKU adds an @here.
- Amounts over $25,000 go directly to a purchasing lead rather than the channel.
- Finance is contacted only past $100,000 outstanding or for a suspected duplicate order.
- A sweep across many SKUs produces one summary and one batch append, even if a note to each SKU was requested.
- Sending a notification should never take more than two tool calls.

## Try it yourself

The video gives a prompt to paste into Claude. It asks for a low-stock alert for SKU-0042 with 3 units on hand, a reorder point of 20 and 2 days of cover, and notes that eight other SKUs also dropped below their reorder point that day. It asks Claude to read the notify-templates skill and explain what it will send, one alert or one for each of the nine, and where each is routed, before sending anything. Run it against your own notification scenario.
