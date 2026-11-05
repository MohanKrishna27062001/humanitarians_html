---
title: "Why AI Experiments Need a Dry Run | Karishma"
seoTitle: "Why You Should Dry Run an AI Experiment Offline"
description: "Karishma explains how an offline dry run tests an AI experiment's structure before any model request is sent, and what a passing dry run does not prove."
summary: "An offline dry run checks prompts, run IDs, repetition schedules, request bodies and recording fields without spending API credits. The video explains what it verifies, what it cannot prove, and how to keep plans separate from real evidence."
keywords: ["offline dry run for ai experiment", "how to validate ai experiment before running", "avoid empty response slots as data", "ai experiment run id schedule", "reproducible ai research workflow checks", "test llm experiment without api cost", "separate planned and observed records", "what a dry run does not prove"]
generated: "article"
---

An AI experiment can look like it has data before it has collected a single answer. The video, created by Karishma for Humanitarians AI, opens with a research plan that contains 117 empty response slots. If the pipeline cannot tell those slots apart from real answers, it creates the appearance of data before the experiment has started. The remedy it proposes is an offline dry run.

## What a dry run exercises

A dry run exercises the structure of the workflow without sending a model request. That covers the prompts, the run IDs, the request bodies, the recording fields and the validation rules. Because nothing goes over the network, it spends no API credits and produces no research data. It is a test of the plumbing, done before the money and the model time are committed.

## Turn the data set into an explicit schedule

The first step is to turn the data set into an explicit schedule. Every planned attempt needs a stable prompt, a repetition number and a unique run ID. With the schedule written out this way, the pipeline can catch missing prompts and duplicates before collection begins, rather than discovering them in the results.

## Keep planned and observed records impossible to confuse

The next step is to make planned records and observed records impossible to confuse. An empty slot should say "not run". A real attempt should record several things:

- what was submitted
- when it ran
- which model and settings were used
- the raw response
- whether it completed or failed

This separation is what protects the research from the 117-empty-slots problem: a planned attempt is not an observation, and the records should say so on their face.

## Test the local workflow

Then the video tests the local workflow itself with a set of questions. Can it prepare every request without calling the network? Does it preserve the approved wording of the prompts? Does it stop safely on errors? Does it refuse to overwrite files that have changed? Checks like these catch engineering problems before they turn into research problems.

A useful dry run also records the data set version, a checksum, the configuration and the ordering rule. Together these form a traceable contract for what the future experiment intends to do, so that anyone can later compare what was planned with what actually happened.

## What a passing dry run does not prove

The video is careful about the limits. A passing dry run proves only that the plumbing is coherent. It does not prove that authentication will work, that the chosen model supports every setting, that the answers will be high quality, or that the research design is valid. Those questions can only be answered by a live test, and the video suggests considering only a tiny authorized live test after the dry run passes.

## Key takeaways

- Empty response slots are plans, not evidence, and the pipeline must never treat them as answers.
- A dry run tests prompts, run IDs, repetition schedules, request bodies, recording fields and error handling without a model request.
- Every planned attempt needs a stable prompt, a repetition number and a unique run ID.
- Label unrun slots "not run" and record the submission, time, model, settings, raw response and status for real attempts.
- Check that the workflow preserves approved wording, stops safely on errors and refuses to overwrite changed files.
- Record the data set version, checksum, configuration and ordering rule as a traceable contract.
- A passing dry run does not prove authentication, model compatibility, answer quality or scientific validity.

## Try it yourself

Try the video's small exercise. Create three prompts, schedule two repetitions each, and generate empty slots for all of them. Then verify that your report says six planned attempts but zero observations. Only after that should you consider a tiny authorized live test. The principle the video leaves you with is to validate the experiment before you pay for it, and never let a plan masquerade as evidence.
