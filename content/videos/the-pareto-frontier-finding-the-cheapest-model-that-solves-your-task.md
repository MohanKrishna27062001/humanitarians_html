---
title: "The Pareto Frontier: Finding the Cheapest Model That Solves Your Task"
seoTitle: "How to Pick the Cheapest Claude Model for Your Task"
description: "Learn how to sweep Opus, Sonnet and Haiku across one eval and use the Pareto frontier to find the cheapest model that clears your accuracy bar."
summary: "Choosing the smartest model or the cheapest one usually loses on a real task. This video shows how to run one eval sweep, plot accuracy against cost, and read the Pareto frontier to pick the model that fits your threshold."
keywords: ["how to choose a claude model", "opus vs sonnet vs haiku cost", "pareto frontier model selection", "cheapest model that meets accuracy", "run an eval across multiple models", "plot accuracy against cost per call", "customer support classification model choice", "balance llm accuracy and price"]
generated: "article"
---

Opus, Sonnet and Haiku can all do the same task, at three different prices and three different accuracies, and testing all three on real traffic before deciding is expensive. The video argues that the smartest model is not automatically the right pick, and neither is the cheapest. The right pick is the cheapest model that still clears your bar, and it shows how to find it with a sweep.

## Why both extremes usually lose

The natural instinct is to grab one extreme: Opus for the accuracy, or Haiku for the price. Either feels like the safe choice. The video uses a customer-support classification task to show why that instinct fails. On that task, Opus's extra accuracy costs double what Sonnet charges for the same job, while Haiku saves only three cents per call but gives up eight points of accuracy. Neither end of the range is clearly the best deal.

## The idea: the Pareto frontier

The video asks viewers to hold on to one shape. The Pareto frontier is the curve of models where you cannot buy more accuracy without paying more, and cannot cut cost without losing accuracy. A model belongs on the frontier only if no other model beats it on one axis without losing on the other. Any model that is both more expensive and less accurate than another option is off the frontier and can be dropped.

## How to run the sweep

Finding the frontier takes a sweep. You run every candidate model on the same eval suite and record two numbers for each: accuracy and cost per call. Then you plot accuracy against cost and look at which points are not beaten on both axes. The video stresses that this is a general method, and that the sweep is the only reliable way to find the answer for your own task.

## A worked example

The video gives plain numbers for its illustrative case. Per million tokens in and out, Opus costs $15 and $75, Sonnet $3 and $15, and Haiku a quarter and $1.25. Quality comes out at 98, 90 and 82 percent. In per-call terms, Haiku is about 1 cent at 82 percent, Sonnet about 4 cents at 90 percent, and Opus about 8 cents at 98 percent. In this example Sonnet sits on the frontier and saves $4,000 per 100,000 calls compared with Opus. The video flags clearly that these are illustrative figures and tells viewers to check current pricing before deciding, because prices move.

## The frontier depends on your threshold

The same chart gives different answers depending on how much accuracy the task needs. If you need 95 percent or higher, only one point on the frontier clears it, which is Opus, and the extra cost is simply the price of accuracy you actually need. If 82 percent is enough, Haiku is the frontier point, and Sonnet's extra accuracy is money you did not need to spend. The frontier is task-specific, so the answer changes when the requirement changes.

## Key takeaways

- The smartest model is not always the right pick; the right pick is the cheapest model that clears your bar.
- Grabbing either extreme, Opus for accuracy or Haiku for price, often loses on a real task.
- The Pareto frontier is the set of models where you cannot gain accuracy without paying more or cut cost without losing accuracy.
- Run every model on the same eval suite and record accuracy and cost per call for each.
- A model is on the frontier only if no other model beats it on one axis without losing on the other.
- The cost and quality figures in the video are illustrative, so check current pricing before you build.
- Your accuracy threshold decides which frontier point wins: a high bar can force Opus, a low bar can make Haiku the better buy.

## Try it yourself

The video ends with a prompt you can use today: ask Claude to sweep your task across Opus, Sonnet and Haiku, plot cost against accuracy, and tell you which model sits on the Pareto frontier for you. Run it against your own task and your own eval, and set your accuracy threshold before you look at the results.
