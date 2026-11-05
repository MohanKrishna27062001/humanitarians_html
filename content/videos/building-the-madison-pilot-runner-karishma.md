---
title: "Building the Madison Pilot Runner | Karishma"
seoTitle: "Madison Pilot Runner for LLM Visibility Research"
description: "Karishma builds an offline pilot workflow for the Madison project: a 117-run schedule and an API runner, with no live queries yet."
summary: "Karishma reports on the Madison persona-aware LLM visibility project. She built an offline pilot that schedules 39 prompts three times each and an API runner that saves full answers, but no model queries have been sent yet."
keywords: ["llm visibility research pilot", "schedule repeated prompts for testing", "offline api runner for llm testing", "persona aware prompt dataset", "record llm responses with metadata", "avoid counting planned runs as data", "brand mention versus recommendation", "madison project llm visibility"]
generated: "article"
---

Karishma gives a progress update on the Madison persona-aware LLM visibility project. The week before, she completed and validated the project's first persona-aware prompt dataset. This week she built the offline pilot workflow that prepares those prompts for future model testing. She is clear that this is infrastructure, not a completed experiment.

## The schedule: 39 prompts, 117 runs

The dataset contains 39 unique laptop recommendation prompts. For the initial pilot, Karishma proposed three repetitions per prompt, which creates 117 planned runs. The repetitions test run-to-run consistency and are separate from the three wording variants already in the dataset.

The tool builds a reproducibly shuffled schedule, and each repetition block contains every prompt once. Each run keeps its prompt ID, exact wording, dataset version, repetition number, and a unique run ID.

## The API runner

Karishma also built an API runner with an optional OpenAI adapter. Once access is approved and configured, it will send every question as a fresh, independent request. It saves the full answer with its question ID, model details, timestamp, and attempt number. This removes the need to enter each question and copy each answer by hand.

In offline mode, the runner prepares the requests without sending anything. It creates empty response slots marked "not run," plus a template for future attempts. It records model settings, timestamps, raw responses, usage, errors, and execution status.

## Keeping planned work out of the data

A planned slot is never counted as an observation. The collection validator also rejects empty placeholders as experimental data. Dataset validation still passes, and all five offline runner tests pass. The preview prepares all 117 requests while sending zero.

## Rules for reading the answers

Karishma drafted rules for analyzing responses later. They cover how to distinguish brand mentions from actual recommendations, how to preserve evidence, how to record presentation order without assuming rank, and how to report the denominator behind every visibility rate.

## What has not happened yet

The video is explicit about the limits. There have been zero live model queries, no answers collected, no visibility metrics calculated, and no findings about persona effects. API access is not configured yet. The next step is to confirm the model and set up approved access, then begin with a few real requests to check the connection and the answer-saving workflow before the full pilot. After collection, the team will compare which brands and products appear across different user profiles.

## Key takeaways

- The pilot uses 39 laptop recommendation prompts, repeated three times, for 117 planned runs.
- Repetitions test run-to-run consistency and are separate from the three wording variants.
- Each run keeps its prompt ID, exact wording, dataset version, repetition number, and run ID.
- The runner will send each question as a fresh request and save the full answer with its metadata.
- Offline mode sends nothing, and planned slots are never counted as observations.
- All five offline tests pass, but no live queries or findings exist yet.
- Analysis rules separate brand mentions from recommendations and require a stated denominator.

## Try it yourself

If you are planning a study of LLM answers, build the offline version first. Create the schedule, the empty response slots, and a validator that rejects placeholders as data, then confirm the preview sends zero requests before you configure live access.
