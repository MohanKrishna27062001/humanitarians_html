---
title: "Flags Decide The Path."
seoTitle: "When Claude Computes a Forecast vs Hands It to a Subagent"
description: "See how the forecasting skill uses four flags to choose between a simple rolling mean and a subagent, and why low confidence means escalate to a human."
summary: "The video explains that Claude does not always spawn a subagent to forecast demand. The forecasting skill checks four flags, and only if one is tripped does it delegate, and a confidence score under 0.6 means a human reviews the order."
keywords: ["when should claude use a subagent", "forecast demand with rolling mean", "claude forecasting skill explained", "subagent own context window ninety days history", "confidence below 0.6 escalate to human", "forecast qty is an estimate not a fact", "seasonality promo trend break forecast flags", "should i auto order or escalate"]
generated: "article"
---

Asking whether Claude always spawns a subagent to forecast demand invites a yes-or-no answer. The video says neither is right. The forecasting skill decides based on four flags, and it treats the number it produces as an estimate, not a fact about next month.

## A skill is a folder

A skill is a folder that Claude reads before it acts. This one handles a demand forecast for one SKU. Inside are two small scripts and a SKILL.md file. One script, rolling_mean.py, handles a single item. The other, batch_days_of_cover.py, ranks many SKUs at once. SKILL.md says which script to run and when to skip both and hand the job to a subagent instead.

## Two paths, chosen by flags

Path A is to compute it directly: a rolling mean over recent sales. It applies only when all four conditions hold:

- the horizon is two weeks or less
- the SKU is not seasonal
- there is no promotion next month
- nothing suggests a trend break

That means one script and no subagent.

Path B is to hand the work to a forecasting subagent whenever any one of those flags flips: a longer horizon, a seasonal item, a promotion or a visible trend. The reason for delegating is practical. The subagent needs 90 days of sales history to spot the pattern, and loading that much history into the main conversation would crowd out the rest of the task. The subagent gets its own context window instead.

## What the confidence score means

After the forecast comes back, the confidence matters. Below 0.6, the rule downstream is to escalate and not auto-order. A low score does not mean the model is broken. It means a human should look before anything is ordered. A high score does not guarantee the number is right either. It only means nothing in the input suggested otherwise.

## An estimate, not a fact

The number itself, forecast_qty, is not a fact about next month. It is what the rolling mean or the subagent's model computed from the flags it was given. With the same flags, the same path is taken and the same number comes out every time. Claude picks between computing it itself and delegating by the flags, not by guesswork.

## Key takeaways

- Claude does not always spawn a subagent to forecast; it sometimes does.
- The skill checks four flags: horizon, seasonality, next-month promotion and a mentioned trend break.
- With all four clear, Claude computes a rolling mean with one script.
- If any flag trips, it delegates to a forecasting subagent.
- The subagent gets its own context window for 90 days of sales history.
- A confidence score below 0.6 means escalate to a human, not auto-order.
- forecast_qty is a computed estimate, not a fact about next month.

## Try it yourself

Paste a scenario into Claude: you are forecasting demand for a product with a promotion next month and a 30-day horizon. Ask whether it should compute this itself with a simple average or delegate, and why. Then ask what confidence score it would attach, and whether that is high enough to auto-order or should escalate to a human.
