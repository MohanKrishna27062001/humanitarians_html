---
title: "Temporal Placebo Testing in Causal AI: Falsifying Impossible Effects | Ushasvi"
seoTitle: "Temporal Placebo Test for Causal Models Explained"
description: "How a temporal placebo test uses future engagement as a negative control to stress-test a causal estimate of social engagement on product sales."
summary: "In Week 8 of the Causal Couture project, Ushasvi Rachel adds a temporal placebo test that checks an impossible direction, future engagement against current sales. A strong signal there suggests confounding, common trends, or misspecification."
keywords: ["temporal placebo test causal inference", "negative control exposure explained simply", "future engagement cannot cause past sales", "falsification test for causal models", "causal validation endpoint fastapi swagger", "sku level fixed effects day of week", "placebo test hidden confounding common trends", "observational causal estimate reliability checks"]
generated: "article"
---

Ushasvi Rachel of Humanitarians AI presents Week 8 of the Causal Couture project, which asks a pointed question: what happens if you deliberately test the model in a direction that cannot be causal? The answer is a temporal placebo test, added as another way for the project to challenge its own estimate rather than accept it at face value.

## Where Week 8 starts

Week 7 added SKU-level cluster bootstrap uncertainty. Earlier work in the project already combined adjusted estimation with uncertainty methods, shuffled placebo testing, overlap and stockout robustness checks, and observational evidence reporting. Week 8 adds a different reliability challenge on top of that.

## The primary question stays the same

The main question remains: what is the causal effect of social engagement on subsequent product sales? The estimator is an adjusted observational analysis under assumptions, not established causality. Its intended direction runs forward, with engagement at time T and product sales on the next calendar day. Exposure precedes outcome, although temporal ordering alone does not establish causality.

## Reversing the logic

The temporal placebo reverses that logic. It tests future engagement at time T plus one against current sales at time T. Future engagement acts as a negative control exposure, because it cannot cause sales that already occurred. The model can still estimate an association in this impossible direction, but the result is a falsification signal and not a second causal effect.

## Reading the signal

A substantial relationship in the impossible direction can point to remaining temporal structure, confounding, common trends, or model misspecification. It does not prove which explanation is responsible. It prompts further investigation. A relatively small placebo relationship is more reassuring, while a large one suggests such issues may remain. Neither result is an automatic verdict: passing does not prove causality or validate the causal diagram, and failing does not automatically invalidate the primary estimate.

## How it was implemented

The module causal_temporal_placebo.py builds future engagement within each SKU and then estimates the impossible direction as an independent reliability check. Future engagement is accepted only for the same SKU on exactly the next calendar day, so a later observation across a date gap is not treated as consecutive. The placebo model adjusts for prior sales, prior engagement, inventory availability, SKU fixed effects, and day-of-week effects. Inventory-constrained observations are excluded where the flag is available.

The procedure checks required variables, temporal order, and sample adequacy. An inadequate sample returns an insufficient-data result rather than an unreliable estimate, and observation and SKU counts are reported for transparency.

## Exposed through FastAPI and Swagger

The Phase 5 Causal Validation endpoint now exposes a temporal placebo test, while the Week 7 cluster uncertainty and the original uncertainty output remain available as complementary checks. The Causal Intelligence endpoint now includes the temporal placebo and carries forward SKU-level cluster bootstrap uncertainty. The existing evidence score was intentionally left unchanged, and the placebo is reported separately to preserve what the score already means.

## Key takeaways

- A temporal placebo tests an impossible direction: future engagement against current sales.
- Future engagement serves as a negative control exposure.
- A large placebo relationship hints at confounding, common trends, or misspecification.
- Passing does not prove causality, and failing does not invalidate the estimate automatically.
- Future engagement counts only for the same SKU on exactly the next calendar day.
- The model adjusts for prior sales, prior engagement, inventory, SKU effects, and day of week.
- Too little data returns insufficient data instead of an unreliable number.

## Try it yourself

For any causal claim you work with, name an exposure that cannot possibly cause the outcome, such as a future value, and test it the same way as your real exposure. Report the result separately from your main estimate and treat a strong signal as a reason to investigate.
