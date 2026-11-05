---
title: "Why Solar Storm AI Forecasts Lie: Data Leakage Explained | Om Mali"
seoTitle: "How Data Leakage Inflates Solar Storm Forecast Scores"
description: "Om Mali shows how shuffling sunspot region measurements leaks data between train and test sets, and how splitting by region exposes the true score."
summary: "Episode 12 of AI in Astronomy shows how shuffling hourly sunspot measurements lets a flexible model memorize regions it is later tested on. Its score falls from 0.48 to 0.12 once the data is split by region instead of by row."
keywords: ["data leakage in time series forecasting", "why shuffled train test split inflates scores", "solar storm prediction machine learning", "split dataset by group not row", "sunspot active region forecasting ai", "how to detect data leakage in models", "flexible model memorizes training data", "starlink satellites lost to geomagnetic storm"]
generated: "article"
---

A forecast score can be too good to be true even when the model looks impressive. Episode 12 of the AI in Astronomy series, presented by Om Mali for Humanitarians AI, looks at models that forecast solar storms and asks about the number used to decide whether any of them work. Its central idea is that if hourly measurements of a sunspot region are shuffled before the data is split, the model gets tested on regions it has already memorized.

## Why forecasting matters

In February 2022, SpaceX launched 49 Starlink satellites into a moderate geomagnetic storm. The air thickened, drag rose, and 38 of them came back down within days. The video stresses that this was only a moderate storm, and that this kind of event is what forecasters are trying to predict.

## How the data is structured

Each row in the dataset is one active region on the sun, measured every hour for days. That means one region is dozens of rows that barely change from one hour to the next. The video also notes that a few regions do all the flaring, so the rows that matter most are concentrated in a small number of regions.

## The split trap

Now comes the step of splitting the data for testing. If you shuffle the rows, every region lands on both sides of the split, both in training and in testing. If you split by region instead, none do. The video shows that the leak can be measured directly: for each test row, find the closest row the model trained on. After shuffling, that row is nearly always the same region, an hour earlier, with almost the same numbers.

## What the leak does to the scores

The video compares two models, a plain one and a flexible one. With shuffled rows, the flexible model wins, 0.48 against 0.36, which is the headline someone might publish. When the data is split by region, the plain model does not move. The flexible model falls to 0.12, so three quarters of its score came from the split rather than from the sun. The result held across 12 runs, with the flexible model landing at the low value every time. The video attributes this to memorizing: strip the region's fingerprint out of the measurements and the gap goes to zero.

## The one-line fix

The fix is one line: split by region, not by row. In the video's words, the model was never the problem; the split was. The practical rule it draws is to ask how the test set was built before you believe any score, including your own.

## Key takeaways

- Moderate geomagnetic storms can have real costs: 38 of 49 Starlink satellites came down within days in February 2022.
- Each active region is measured hourly for days, so one region produces dozens of nearly identical rows.
- Shuffling rows puts every region on both sides of the train and test split.
- The leak is measurable by finding each test row's nearest training row, usually the same region an hour earlier.
- With a shuffled split the flexible model scored 0.48 against 0.36 for the plain model.
- With a region-based split the plain model stayed put and the flexible model fell to 0.12.
- The flexible model memorizes each region's fingerprint, and removing it closes the gap.
- Split by region rather than by row, and always ask how a test set was built.

## Try it yourself

The video ends with a prompt you can give an AI: describe how you split your own data, then ask what could appear on both sides of the split and what your score would look like if you split it properly instead. If your data has repeated measurements of the same thing, check whether any single item appears in both training and testing.
