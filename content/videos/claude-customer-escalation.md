---
title: "Claude, Customer Escalation."
seoTitle: "How Claude Escalates Customer Issues Step by Step"
description: "See how the customer-escalation skill builds a case with a checklist, picks a target from a fixed tier ladder, and asks before sending anything."
summary: "Asking Claude to escalate a customer bug does not simply forward it. This video shows the customer-escalation skill running a checklist, choosing a target by fixed tier rules, building a brief, and waiting for your go-ahead, or keeping the issue in support."
keywords: ["how to escalate a customer issue", "claude customer escalation skill", "support escalation tier ladder", "escalate a bug to engineering", "customer escalation brief contents", "when to escalate to security", "ask claude before sending escalation", "keep documented fixes in support"]
generated: "article"
---

Telling Claude to escalate a customer bug suggests it will simply forward the complaint. The video shows that the customer-escalation skill does something more careful: it builds the case first, chooses a target by fixed rules, and then asks before anything is sent.

## Checklist first, no target yet

The video's example is an API returning 500 errors intermittently for a customer called Acme Corp. Claude does not send that anywhere yet. It runs a fixed checklist first:

- what is broken
- who is affected
- how long it has been going on
- what has already been tried

It then checks the answers against the skill's own rules for when an issue actually needs to escalate at all. Only after that does it decide who the case should go to.

## A fixed ladder, not a guess

The choice of target follows a fixed ladder. Support escalations move up to senior support. Confirmed bugs go to engineering. Feature gaps go to product. Anything touching data exposure or access skips the ladder entirely and goes straight to security. A high revenue churn risk, or a breached SLA on a critical account, goes to leadership.

Back in the Acme example, the brief is built with severity, impact, and exact reproduction steps. It lands with engineering, which the video describes as the right tier for a confirmed bug.

## Brief built, then it asks

Even with the brief complete, Claude does not post it or message the customer on its own. It asks first.

## When nothing gets escalated

The same checklist can lead the other way. If the fix is already documented, the issue never escalates at all and stays in support. The video's summary is that Claude does not forward anything blindly. It builds the full case, picks the target by fixed tier rules, and waits for you to say go.

## Key takeaways

- Escalating with Claude begins with building a case, not forwarding a message.
- The checklist covers what is broken, who is affected, duration, and what has been tried.
- The checklist is checked against rules for whether escalation is needed at all.
- Targets follow a fixed ladder: senior support, engineering, product, security, or leadership.
- Data exposure or access issues go straight to security, skipping the ladder.
- Churn risk or a breached SLA on a critical account goes to leadership.
- Claude asks before posting the brief or contacting the customer.
- A documented fix keeps the issue in support.

## Try it yourself

Describe a real support issue to Claude, such as a bug, a slow response, or an angry customer. Ask it to read the customer-escalation skill and walk you through what it would check before deciding whether to escalate, and tell it not to send or post anything until you say go. Then see whether it builds a full brief and asks, or just reacts. The skill's code is in the humanitarians-youtube repository.
