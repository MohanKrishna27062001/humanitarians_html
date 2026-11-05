---
title: "Is Claude's DCF Number Its Own Judgment?"
seoTitle: "Is Claude's DCF Valuation Its Own Judgment?"
description: "How Claude's dcf-model skill turns growth, discount rate and terminal assumptions into a valuation, and why that number is a formula, not an opinion."
summary: "The video explains that Claude's DCF valuation does not reflect an opinion about a company. The dcf-model skill runs your assumptions through a fixed formula around the discount rate, so the result is only as precise as the inputs."
keywords: ["does claude have opinion on valuation", "claude dcf model skill explained", "how dcf valuation uses discount rate", "wacc sensitivity analysis explained simply", "why terminal value is a guess", "claude financial model assumptions", "test dcf assumptions with claude", "dcf number is not an opinion"]
generated: "article"
---

Ask Claude to build a discounted cash flow valuation and it is tempting to imagine the model studying the business and reaching a conclusion, the way an analyst might. This short video argues that this picture is wrong. The dcf-model skill takes the assumptions it is given and runs them through a fixed formula, and the valuation follows from those inputs.

## Why the natural guess is wrong

The common assumption is that a Claude valuation reflects its own judgment about what a company is worth. The video says the skill has no opinion of that kind. It takes a growth rate, a discount rate and a terminal growth rate, and runs them through the same calculation every time. If you feed it a different assumption, the valuation moves without protest. It never argues that your number is wrong.

This framing matters because a polished valuation can look like the output of careful thinking about a business. The video points out that what looks like a conclusion is the arithmetic consequence of what you typed in.

## What the skill actually does

According to the video, the skill projects each year's cash flow forward. It then discounts every one of those cash flows, plus a terminal value, back to today using one number: the discount rate, known as WACC. That one dial anchors the whole calculation. Turn it, and the valuation follows every time.

The description of the skill adds that it retrieves financial data, builds the cash flow projections with WACC calculations, runs a sensitivity analysis and produces an Excel model. It does not invent growth assumptions or reason about the business beyond what it was given.

## What a sensitivity analysis shows

A sensitivity analysis is the same dial turned again and again while watching the valuation swing. The video draws two lessons from watching it.

First, a number that swings widely for a small change in the discount rate does not mean the model is broken. It means the input was never precise to begin with. The swing is information about uncertainty in the assumption, not a bug in the tool.

Second, a valuation that holds steady across the sensitivity range does not prove it is right either. The terminal value usually carries most of the total, and it is still just a guess about the distant future. A stable output can hide a shaky assumption.

## The bottom line on the number

The video's conclusion is that a DCF number is Claude running your growth and discount rate assumptions through a fixed formula, not Claude's opinion of what a company is worth. Change the assumption and the number moves. This means the useful questions are about the assumptions: where they came from, how confident anyone can be in them, and how much of the final figure rests on the terminal value.

## Key takeaways

- Claude's DCF output is not an independent judgment about a company's worth.
- The dcf-model skill projects cash flows and discounts them, along with a terminal value, using the discount rate (WACC).
- Changing one assumption moves the valuation, and the skill does not push back on your numbers.
- Large swings under small changes show an imprecise input, not a broken model.
- A steady result does not prove correctness, because the terminal value is a guess about the distant future.
- The precision of the output should not be trusted more than the quality of the assumptions.

## Try it yourself

Give Claude a simple set of DCF assumptions: a growth rate, a discount rate and a terminal growth rate. Ask it to run the dcf-model skill and value a hypothetical company. Then change only the discount rate by one point and watch how far the number moves. That is the fastest way to see how much of the valuation is assumption rather than analysis.
