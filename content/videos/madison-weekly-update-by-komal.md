---
title: "Madison Weekly Update by Komal"
seoTitle: "Madison Weekly Update: Brand Visibility Pilot Plan"
description: "A weekly Madison update on a 39-prompt, 117-attempt brand visibility pilot: the run plan, three counting rules and why nothing has been measured yet."
summary: "This weekly update covers Team Madison's brand visibility pilot, where the plan and runner are ready but no live query has been sent. It sets out three counting rules and notes progress on three other tracks."
keywords: ["ai brand visibility pilot plan", "how to test brand mentions in llm", "39 prompts three repeats 117 attempts", "mention is not a recommendation", "counting rules for llm visibility metrics", "report counts with their denominator", "prepared versus collected data", "validate runner with local tests"]
generated: "article"
---

This is a weekly update from Team Madison, read by Liam in place of Komal. Its main message is a careful distinction. The visibility pilot, which tests how a model mentions brands, now has its plumbing in place, but it has not been run. The video argues that this difference between prepared and collected is the substance of the week.

## A run plan, not a result

The central deliverable is a run plan. There are 39 unique prompts, shuffled in a reproducible way. Each prompt is run three times, which gives 117 attempts in total. The video's reasoning for the repeats is that a one-off answer cannot hide as a result when every prompt is asked more than once.

An automated runner pulls every prompt by itself, with no copy and paste, and saves the full structured response each time. For each attempt it records the model, the settings, a timestamp, the attempt number, the raw response and its status.

## Counting rules, locked before any data

Before any real data exists, the team fixed three counting rules.

- A mention is not a recommendation.
- Appearing first is not a ranking.
- Every count ships with its denominator.

The update presents these as rules to lock now and apply later, so that nobody can adjust the definitions after seeing the numbers.

## Five tests passed, zero queries sent

The runner logic was checked with five local validation tests, and all passed. They confirmed that the 39 prompts are valid and that the 117 requests are correctly prepared. None of those requests has been sent. The update states that there are zero live queries, zero collected answers and zero visibility metrics. The next steps are to confirm the model and the access check by recording a run end to end, and then to compare across profiles on a small scale before the full collection.

## Three other tracks

Three other pieces of work moved in parallel, and the video keeps them separate from the pilot. A laptop recommendation study is testing prompts and starting to collect real model responses. It is not the visibility pilot. The Loon Conservatory track covers access to the metadata annotation tool, a demo model ahead of the meeting, and work on the brand document in the presentation. Finally, research has started on a brand archetype detector, which the video describes as started, not built.

## Verdict: prepared is not collected

The recap is that the visibility pilot has a runner, a run plan and locked counting rules, five tests passed, and nothing has been queried. The design judgment is not to mix a prepared request with a collected answer. The next step is a small live check, not the full 117.

## Key takeaways

- The visibility pilot has 39 unique prompts, each run three times, for 117 attempts.
- The runner is automated and saves structured responses along with model, settings, timestamp, attempt number and status.
- Three counting rules were fixed before any data: a mention is not a recommendation, first is not a ranking, and every count needs a denominator.
- Five local tests passed, and zero live queries have been sent.
- The laptop study, the Loon Conservatory work and the archetype detector research are separate from the pilot.
- The next step is a small live check, not the full run.

## Try it yourself

The video ends with an exercise. Imagine being handed a 39-prompt set, a 117-attempt plan and a runner that has not sent a query. Explain why three repeats beat a single pass, why a mention is not a recommendation, and what must be true before anyone reports a visibility number. Then apply the same questions to the first data set you plan to collect.
