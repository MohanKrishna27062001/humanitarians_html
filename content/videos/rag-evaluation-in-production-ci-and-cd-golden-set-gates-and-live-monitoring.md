---
title: "RAG Evaluation in Production: CI and CD Golden Set Gates and Live Monitoring"
seoTitle: "RAG Evaluation in Production: Golden Sets and Monitoring"
description: "Learn how to evaluate RAG before and after deploy: golden-set gates in CI/CD, label-free proxy signals in production, and request tracing to find causes."
summary: "Liam, in for Ameya Deshmukh, separates offline evaluation, which can measure correctness, from online monitoring, which cannot. The video shows how a golden-set gate blocks regressions and how proxies and traces catch drift after launch."
keywords: ["rag evaluation in production explained", "golden set for rag evaluation", "ci cd gate for rag quality", "offline vs online rag evaluation", "monitor rag without ground truth labels", "retrieval score distribution drift alert", "mrr and faithfulness deploy gate", "per request tracing for rag debugging"]
generated: "article"
---

You shipped the RAG system and the numbers look good. The question that matters, the video says, is how you know it still works tomorrow on traffic you have never seen. In this video, Liam, in for Ameya Deshmukh, explains that there are two kinds of evaluation and you need both.

## Offline and online are different jobs

Offline evaluation runs before you ship, on a fixed set where you know the right answer, so correctness can be computed directly. Online evaluation runs in production on real questions with no labels, where correctness cannot be computed at all. The video stresses that it is the same word for two completely different problems.

## Building a golden set

Offline is the one you control. You build a golden set of real questions with known good answers and score your system against it. Retrieval quality is measured with hit rate and MRR, and generation quality with faithfulness. Because you know the truth, these numbers mean exactly what they say.

## Making it a gate

Then you make it a gate. Run the golden set on every deploy and compare to the baseline. If MRR or faithfulness drops, the deploy is blocked, the same way a failing unit test stops a release. The video says a silent quality regression after a prompt tweak is exactly the bug this catches before a single user sees it. In practice, the gate is small: run the golden set, compute MRR, and fail the build if it slipped below the baseline. It uses the same eval harness the series has been building, pointed at the deploy.

## Watching without labels

After you ship, the ground truth disappears. Online monitoring therefore changes the question from "is this answer correct?" to "is the system behaving like it did when it was healthy?" Without labels, you watch proxies, which are signals that move when something breaks:

- The retrieval score distribution. Alert when the mean top-one score starts declining, because that means retrieval is drifting.
- Refusal rate.
- Latency and cost per request.
- User feedback signals.

None of these is correctness, but together they tell you when to go look.

## Traces explain the alerts

What makes both loops debuggable is the trace. For every request, a tool like LangSmith records the whole story: which chunks were retrieved and at what scores, the exact prompt sent, what came back, the latency of each stage, plus tokens and cost. When a proxy alerts, the trace is where you find out why.

## The full picture

There are two loops. Before deploy, the offline golden set in CI gates the release. After deploy, online proxies watch for drift and traces explain it. One rule ties them together, the same one from the whole series: debug retrieval first. When a number moves, look at the retrieved chunks before you touch the prompt.

## Key takeaways

- Offline evaluation measures correctness on a golden set; online monitoring has no labels.
- Hit rate and MRR cover retrieval quality, and faithfulness covers generation quality.
- Run the golden set on every deploy and block the release if MRR or faithfulness drops below baseline.
- Online, watch proxies: retrieval score distribution, refusal rate, latency, cost, and feedback.
- A per-request trace makes either loop debuggable.
- When a number moves, check the retrieved chunks before changing the prompt.

## Try it yourself

Build a 20-question golden set for your own system and wire it into CI so a drop blocks the deploy. Then log the retrieval scores of live traffic and watch the mean. The video says that the day the mean starts sliding, you will know before your users do, and the trace will tell you why.
