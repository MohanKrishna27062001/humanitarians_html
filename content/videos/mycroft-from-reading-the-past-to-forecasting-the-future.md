---
title: "Mycroft: From Reading the Past to Forecasting the Future"
seoTitle: "Forecasting Earnings Guidance with a Logistic Regression Model"
description: "How the ECIS system moved from reading earnings calls to forecasting guidance with locked, append-only predictions and a two-level scorecard."
summary: "Anjana introduces Episode 6 of ECIS, a system that began by extracting guidance signals from earnings calls and now predicts next quarter's guidance direction before the CEO speaks. Predictions are locked in advance and graded at two separate levels."
keywords: ["forecast earnings call guidance direction", "logistic regression for guidance prediction", "pre register predictions before outcome", "append only prediction log", "predict stock performance from guidance signals", "earnings call transcript signal extraction", "two level scorecard for predictions", "use decision log to predict outcomes"]
generated: "article"
---

This video is Episode 6 of ECIS, a financial intelligence system that reads earnings call transcripts and extracts guidance signals. In the first five episodes the system learned to read a call and grade itself on what it read. In this one, Anjana explains how it stopped waiting for the call and started forecasting what the company will say next, using only data it already had.

## The foundation: reading and grading the past

ECIS runs four independent readers on every chunk of every transcript: keyword matching, FinBERT sentiment analysis, named entity recognition and a large language model. A triangulator fuses their outputs. Every signal is pre-registered before anyone knows the outcome and then graded against the market at 30, 90 and 180 days. The design principle is that the system trusts no single reader and no single confidence number. It triangulates, scores and corrects itself.

## Features hidden in the decision log

The new step starts from the observation that the signal history contains patterns of its own. What direction did a company report last quarter? How many consecutive quarters has it raised guidance? Has the stock already moved before the call? What are peer companies saying this quarter? These are features, and all of them can be computed from data the system already has. There are no new sources and no new APIs, only the decision log the system had been building all along.

## A locked, append-only forecast

A logistic regression model takes those features and predicts where guidance will go next quarter, before the CEO speaks. The prediction follows the same honesty rules as every extraction: it is logged before the earnings call. The record holds the ticker, predicted direction, confidence, a snapshot of the full feature vector, the model version and a timestamp. It is locked and append-only. After the call, the transcript is extracted and the actual guidance direction becomes known, and only then does the scorecard grade the prediction. A prediction cannot be revised, softened or deleted after the fact.

## Two scorecards, two questions

There are now two scorecards asking different questions. Level one asks whether the prediction model correctly forecast what the company would say. Predicting raised and seeing raised is correct, and predicting maintained and seeing lowered is wrong. This grades the prediction against the extraction.

Level two asks whether the extracted guidance correctly predicted stock performance. Raised guidance followed by an outperforming stock counts as correct. This grades the extraction against the market. Each level is graded independently, so a prediction can be right about what the CEO said and still wrong about what the market did.

## The forecast dashboard

The dashboard gains a forecast view. For every company with an upcoming earnings call it shows the predicted direction, the confidence, which features drove the prediction and whether it agrees or disagrees with what the rest of the sector is saying. A timeline shows how accurate past predictions were for that company, giving one screen for what the system expects before the call.

## Key takeaways

- ECIS extracts guidance signals from earnings calls with four readers fused by a triangulator, and grades them at 30, 90 and 180 days.
- Forecast features come entirely from the existing decision log, such as last quarter's direction, consecutive raises, pre-call stock movement and peer talk.
- A logistic regression model predicts the next quarter's guidance direction.
- Each prediction is logged before the call, with a feature snapshot, model version and timestamp, and cannot be changed later.
- Level one grades the forecast against the extracted guidance; level two grades the guidance against stock performance.
- Being right about what a CEO said does not guarantee being right about the market's response.

## Try it yourself

The video ends with a prompt for Claude. Take a record of your own past decisions and outcomes, such as a log, spreadsheet or journal. Ask for three patterns in it that might predict your next decision, which of them you could check against a real outcome and which are just impressions, and whether you would be willing to write down a prediction before the outcome so you cannot quietly revise it.
