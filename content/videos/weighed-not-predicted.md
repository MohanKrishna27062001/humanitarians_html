---
title: "Weighed, Not Predicted"
seoTitle: "How Claude's Forecast Skill Weights a Sales Pipeline"
description: "How the Forecast skill turns a sales pipeline into one stage-weighted number, and why that number weighs deals rather than predicting which will close."
summary: "The video explains how Anthropic's Forecast skill multiplies each deal's amount by a default stage probability and adds the results. It shows why the output measures pipeline size and confidence, not which deals will actually close."
keywords: ["stage weighted sales pipeline forecast", "how claude forecast skill works", "weighted pipeline forecast example", "commit versus upside deals explained", "stage probability sales forecasting", "does ai predict which deals close", "forecast gap to quota analysis", "sales forecast with crm win rates"]
generated: "article"
---

A common assumption is that an AI forecast skill predicts which sales deals will close. The video argues that it does not: the Forecast skill weighs deals by probability, which is a different thing. It walks through the mechanism with one example deal and shows what the resulting number can and cannot tell you.

## How a pipeline becomes one number

Forecast turns a pipeline into a single figure. You give it your deals, each with a name, an amount, a stage and a close date, along with your quota. Each stage carries a default probability, with negotiation at 80% and discovery at 20%, for example. The skill multiplies each deal's amount by its stage's probability and adds up the results. That sum is the weighted forecast.

## One deal, weighed

The video anchors the idea with a single deal: Acme Corp, $50,000, in negotiation, closing January 31st. At 80%, it adds $40,000 to the weighted forecast. That confidence is high enough for the deal to sit in Commit, the group of deals you would stake your number on. Deals with lower confidence go into a separate group called Upside. Acme Corp is described as the skill's own illustrative sample rather than a real customer.

## The one flag: your own data

The default stage probabilities are generic. The video flags that if you connect a CRM, those defaults stop being used. The skill then pulls your pipeline automatically, applies your team's actual historical win rates in place of the generic table, and tracks how the forecast moves over time. Until that connection exists, every probability in the forecast is a general assumption rather than something learned from your team.

## Commit can still slip

Back to Acme Corp: if there is no activity on the deal for 14 days, the skill flags it for a re-engage, even though it sits in Commit. The video's point is that a committed deal is not a closed deal. It is simply the one you would bet on, and that bet can still go wrong.

## Low odds can still land

The reverse also holds. A Discovery-stage deal at 20% is not written off, because it can still close. It just is not what you plan around. The video adds that the gap analysis only tells you how far short of quota you are. It never tells you which deals will close that gap.

## Key takeaways

- Forecast weighs deals by stage probability; it does not predict which deals will close.
- The weighted forecast is each deal's amount multiplied by its stage probability, added together.
- A $50,000 deal in negotiation at 80% adds $40,000 to the forecast.
- Commit holds deals you would stake your number on; lower-confidence deals go to Upside.
- Default probabilities are generic until a CRM supplies your team's historical win rates.
- A Commit deal can go quiet and need a re-engage, and a 20% Discovery deal can still land.
- Gap analysis shows how far short of quota you are, not which deals will close it.

## Try it yourself

Paste a prompt into Claude with your own pipeline rather than the video's example. The video suggests describing a few deals with their amounts, stages and close timing, stating your quarterly quota, and asking for a weighted forecast with best, likely and worst cases, split into Commit versus Upside, with anything at risk flagged. Then check what the forecast promises and what it does not.
