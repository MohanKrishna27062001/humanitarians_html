---
title: "Routing LLM Requests Without Rule Contradictions: The Mycroft Router"
seoTitle: "Routing LLM Requests Across Cost Tiers Without Conflicts"
description: "Simba presents the Mycroft router: one locked policy file, a pure routing function, 24 synthetic fixtures, and a structural gap in format-only checks."
summary: "Simba, a fellow at Humanitarians AI, describes the third Mycroft sprint: a router that sends each request to a cheap, mid or strong model tier using one policy file. The video reports honest results, including that the router never selects the strong tier."
keywords: ["route llm requests across cost tiers", "single policy file for model routing", "pure router function no hidden state", "llm router escalation by input length", "synthetic fixtures for evaluating a router", "format checks pass wrong llm answers", "human labels versus router predictions", "choose cheapest model that is good enough"]
generated: "article"
---

Simba, a fellow at Humanitarians AI, describes the third sprint of Mycroft, a router that decides for every request whether a cheap model can handle it or whether something stronger is needed. The setup is six kinds of task and three cost tiers, with one rule Simba held to throughout: nothing about how one task type is routed should be able to quietly contradict how another is.

## One policy file so rules cannot disagree

All task types and their routing rules live in exactly one file, policy.json, not scattered across the router or left in someone's memory of last sprint's decisions. It covers six task types: sentiment, topic, structured extraction, contradiction detection, summarization and a RAG answer.

For each type, the file records the answer format, the allowed labels, the check used to grade the answer, the tier it starts on, the tier it escalates to, and the input length that triggers promotion. Each type also points to a real file in the repo that shows Mycroft does that kind of work, and a test fails if that file disappears.

## A router with no hidden state

The router itself is a pure function with no network call, no clock and no model involved in the decision. It refuses anything pinned or unrecognized. Every other request starts on the tier its policy names and is promoted one tier if the input is long. Length is measured in characters rather than tokens, because token counts depend on which model you are asking. Every decision comes back with a one-sentence reason. A break-even rule that would route on cost against accuracy was left out on purpose, because clever was not the goal this sprint.

## Twenty-four synthetic fixtures

The bench folder holds three tools: one checks and freezes the fixtures, one reports how much of the policy they cover, and one is used to label them by hand. There are 24 fixtures, four per task type, two easy and two hard, built around fictional companies and frozen on September 10th with a fingerprint of every file. Simba is plain that they are synthetic, and that no real request data is in the repo yet.

The expected tier on each fixture is Simba's own judgment: the cheapest tier trusted to get the answer right. Labels were made before any model touched them, and the labeling tool never shows what the router would pick.

## What the comparison showed

Simba's labels put six fixtures on cheap, 11 on mid and seven on strong. The router put eight on cheap, 16 on mid and none on strong. It agreed with the labels on 9 of 24. Simba stresses this is a prediction checked against human judgment, not a measurement of real performance.

The zero is structural. The only paths to the strong tier are a long input or an escalation, and every fixture labeled strong is a short input with a trap in it. Separately, the free checks catch answers in the wrong format, not answers that are simply wrong. A model that misreads sarcasm can still return an allowed label, so the check passes and nothing escalates. Two fixtures exist to test the checks themselves.

## Key takeaways

- Keep all routing rules in one file so two rules cannot quietly disagree.
- Make the router a pure function: no network, no clock, no model.
- Measure length in characters, not tokens, since tokens vary by model.
- Label fixtures by hand before seeing what the router would choose.
- The router agreed with human labels on 9 of 24 fixtures, a starting point rather than a benchmark.
- It never routed to the strong tier because short trap inputs have no path there.
- Format checks catch the wrong shape of answer, not a confidently wrong one.
- All fixtures are synthetic, so results do not describe real traffic yet.

## Try it yourself

If you route requests across cost tiers, ask whether your cheap check only catches the wrong shape of answer, or whether it would catch a confidently wrong answer that arrives in the right shape. Write one short trap question for your own task type and see whether your routing would send it anywhere stronger.
