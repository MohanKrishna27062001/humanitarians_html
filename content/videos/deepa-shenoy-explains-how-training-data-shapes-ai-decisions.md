---
title: "Deepa Shenoy explains: How Training Data Shapes AI Decisions"
seoTitle: "How Training Data Shapes AI Decisions and Bias"
description: "Deepa Shenoy explains how data, labels, sampling and deployment conditions shape what an AI system does, with a safety-equipment vision example."
summary: "Deepa Shenoy explains that machine learning systems learn patterns from examples that people choose, label and measure. A fictional safety-equipment vision system illustrates distribution shift, and the video explains why evaluation and monitoring must continue after deployment."
keywords: ["how training data affects ai decisions", "what is distribution shift in machine learning", "what is construct validity ai", "proxy labels in machine learning", "why one accuracy score is not enough", "evaluate ai model by subgroup", "sampling bias in training data", "monitor ai model after deployment"]
generated: "article"
---

In this video Deepa Shenoy, with narration by Liam on her behalf, explains how data can shape AI decisions. Machine learning systems learn patterns from examples to produce outputs for a task. They do not independently decide what the world should look like. The video follows the chain from the people who set the task, through the data, to how the system should be tested.

## People set the task, labels and measurements

People choose the tasks, the labels and the measurements. That is why training data quality and composition matter. If examples are incomplete or unrepresentative, relevant conditions may be left out. The video is careful to describe this as a possible issue to evaluate, not an automatic outcome.

## Sampling and history

Sampling concerns which examples are collected. Data can also reflect historical or institutional patterns. The video notes that NIST treats bias as involving data, measurement, and the human or organizational context, so the problem is not located in the algorithm alone.

## Labels and construct validity

Labels and measurements need review. A proxy label may not capture the intended concept. Construct validity asks whether a measure represents what it is meant to represent. A system can be trained well on a label that does not measure the thing people actually care about.

## Training conditions versus deployment

Training conditions may differ from deployment. Lighting, camera angle, equipment or other inputs can shift, and research on distribution shift studies how such mismatches may affect performance.

The video illustrates this with a fictional example. A vision system learns to recognize required safety equipment in worker photos, such as hard hats and reflective vests. Suppose most training images show similar workplaces, lighting, camera angles and equipment. It may learn patterns for those represented settings. Under glare, from a different angle or with unfamiliar equipment, its performance may change, and that outcome must be tested. The video states that this illustration is not evidence about a real company or system.

## Evaluating beyond one number

One overall score describes a particular evaluation set, but it may not show results for every relevant condition or group. The video recommends evaluating conditions similar to intended use, examining appropriate groups, and investigating meaningful differences. No single metric answers every question.

## What to do about it

The steps are to review how the data was collected and what it represents, check labels and measurements, and test under relevant conditions. If differences appear, investigate their causes and consider adjusting the data, the model design or the evaluation. Monitoring should continue after deployment, because conditions and inputs can change. Testing and mitigation may reduce identified problems, but they cannot guarantee that every source of bias or error is eliminated.

## Key takeaways

- Machine learning learns patterns from examples, and people set the tasks, labels and measurements.
- Incomplete or unrepresentative data may leave relevant conditions absent, which is something to evaluate.
- Bias involves data, measurement and human or organizational context, not only the algorithm.
- A proxy label may not capture the intended concept, and construct validity asks whether it does.
- Distribution shift means training and deployment conditions can differ.
- One overall score may hide differences between conditions or groups.
- Keep monitoring after deployment, since inputs and conditions change.

## Try it yourself

Pick an AI system you rely on and ask four questions from the video: how was the data collected and what does it represent, what do the labels actually measure, how does it perform under conditions like yours, and who is monitoring it after deployment?
