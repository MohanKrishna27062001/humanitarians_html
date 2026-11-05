---
title: "Mycroft's Data Contract Simulation: Catching Silent Metric Corruption Before Release"
seoTitle: "Catch Silent Metric Errors with Data Contract Simulation"
description: "A data contract agent builds a warehouse before and after a schema change to measure how much a business metric moves, even when every test passes."
summary: "Hussain shows a data contract agent that runs compiled SQL from a dbt manifest against a throwaway database in two passes. The simulation turns a vague warning about a renamed column into a measured change in monthly recurring revenue."
keywords: ["silent metric corruption data pipeline", "schema change passes tests wrong numbers", "simulate warehouse build before merge", "dbt manifest compiled sql simulation", "throwaway database data contract testing", "column rename double division bug", "lineage scoped patch versus find and replace", "measure impact of schema change on metrics"]
generated: "article"
---

This video presents a data contract agent and a feature that was added to it the same day. The feature targets a particular class of schema change: one that compiles, runs, passes every test, and still returns a number that is simply wrong. The presenter, Hussain, shows how the agent moves from knowing which models read a column to measuring how much a business metric changes when that column is altered.

## A change that nothing flags

The example starts with an ordinary change. An engineer renames a column from amount cents to amount and divides by 100 to match. Nothing crashes. The problem is that the staging layer was already dividing by 100. Monthly revenue is now 100 times too low, and not one test fires.

The agent could already prove which models read that column. The video points out that this is not the same as knowing what breaks. Knowing who reads a column does not tell you what happens to the numbers.

## Building the warehouse before and after

The new layer measures. It builds the warehouse before the change and after it, then diffs the marts. The video notes what the code never does: it never calls dbt. Every model's compiled SQL already sits in the manifest, so the agent runs that SQL in dependency order against a throwaway database. A model that fails to build becomes a finding.

## Why the first run is not enough

The first run failed usefully, but not informatively. Dropping the old column means every model that reads it stops compiling. Four go red. That is the loud half of the problem, and an ordinary build would have caught it, so it tells the team nothing new.

The realistic situation is different. Nobody merges a red pipeline. A reviewer renames the column in staging and moves on, and that is exactly the state in which the number is wrong.

## Two passes and a lineage-scoped patch

So the simulation builds twice: once as the change stands, then again with the reviewer's fix. Pass one records what breaks. Pass two applies the rename and measures from there.

The patch is scoped by lineage, not by name. A transactions model has its own amount cents column, and a plain find and replace would have corrupted a second metric. Scoping by lineage avoids that.

In the second run everything compiles and nothing is red, yet monthly recurring revenue reads one hundredth of what it read before. The warning is now a number rather than a hunch.

## Three layers, each with a job

The video summarises the design as three layers. The deterministic layer proves structure. The language model reads intent. The simulation measures damage. The row count never moved, which is exactly why schema tests sail straight past this kind of error.

## Key takeaways

- A schema change can compile, run and pass every test while still corrupting a business metric.
- Renaming a column and dividing by 100 when staging already divides by 100 makes monthly revenue 100 times too low.
- Knowing which models read a column is different from knowing what breaks.
- The simulation runs each model's compiled SQL from the manifest, in dependency order, against a throwaway database, without calling dbt.
- Building twice separates what breaks from what changes after a reviewer's fix.
- Patches scoped by lineage avoid the second corruption that find and replace would cause.
- Row counts do not move in this scenario, so schema tests miss it.

## Try it yourself

The video ends with a direct instruction. Paste the approach into Claude Code pointed at your own warehouse. Replay a migration you already shipped and ask which mart totals move. The video says the interesting answer is the one you were not expecting.
