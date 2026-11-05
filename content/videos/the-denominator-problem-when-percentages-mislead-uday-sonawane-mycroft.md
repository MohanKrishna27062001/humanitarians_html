---
title: "The Denominator Problem: When Percentages Mislead | Uday Sonawane| Mycroft"
seoTitle: "The Denominator Problem: Why Percentages Mislead"
description: "A Humanitarians AI fellow shows one finding reported as 4%, 200% or 100% depending on the denominator, and three questions to ask of any percentage."
summary: "Using a checker that reviewed 97 recipes and 616 findings, the video shows how the same defect can look rare, impossible or universal depending on what is counted. It offers three questions to ask of any percentage in a report."
keywords: ["why percentages are misleading in reports", "what is the denominator problem", "how to choose the right denominator", "silent passes in data checks", "one defect or many repeated findings", "questions to ask about a percentage", "conformance checker recipe repository", "percentage over 100 percent explained"]
generated: "article"
---

A checker reported that a defect affected 4% of a repository. That number was wrong, and what exposed it was a second number that came out at 200%. In this video, Humanitarians AI Fellow Uday Sonawane walks through his week on a project called Mycroft, using a recipe-checking investigation to show how a percentage can mislead when the denominator changes, even though the underlying finding stays the same.

## A command that never existed

The previous episode made the conformance checker actually open the step scripts. This week goes one layer up. Every recipe in the repository ends by telling the reader to run a command called snickerdoodle, and that command had never existed. The instruction was written 1,444 times across 97 recipes and nobody could run it.

## Three questions for any percentage

The video proposes three questions for any percentage in any report.

- What is the denominator? Name the population out loud.
- Could every item in it actually have been found, or are some sitting in the denominator as silent passes?
- Is the share one defect or many?

The reasoning for the third is that a finding in 97% of things sharing a template is one defect, not 94.

## What the check found

The goal was to stop finding these problems one at a time by failing on them, and to measure how widespread they are without running anything. The checker covered 97 recipes and produced 616 findings. 94 of the 97 named step scripts that do not exist on disk, and zero recipes came back clean.

## The same finding, three denominators

Four recipes advertise a flag that no script implements. Scored against all 97, that is 4%, which reads as rare. But 93 of the 97 have no scripts on disk at all, so they could never have produced this finding. They were sitting in the denominator as silent passes. Scored against recipes with no missing scripts, the figure is four over two, or 200%. The right denominator is recipes with at least one script to compare, which gives four over four, or 100%: not rare, but universal. The checker's own source comment records why the obvious denominator is wrong.

## One defect or ninety-four

The 94 recipes naming missing scripts all inherit the same template, so this is one defect in one place repeated 94 times. Read as 94 defects it is a quarter's work; read as one it is an afternoon, and fixing it at the source closes it everywhere.

## The recount

Following the series rule of recounting rather than trusting a commit message, the speaker ran the committed checker himself, and every figure reproduced. One discrepancy resolved: the last episode counted 99 recipes and this one says 97, but there are 99 files and 97 carry the snickerdoodle contract. Both numbers were right and were counting different things. The same commit built the command, extracted from the spec already written in every recipe. Gate decisions now refuse an approval when the gate's own test fails, refuse any decision without a note, and require a named human. Approving anything that touches live action takes a second deliberate flag. A bug was also fixed in which gate tests written for POSIX shell ran under the wrong shell on Windows and reported failures for tests that actually pass.

## Key takeaways

- A percentage is only meaningful once the denominator is named.
- Items that could never produce a finding count as silent passes and distort the result.
- The same four recipes read as 4%, 200% or 100% depending on the denominator.
- A finding repeated across a shared template is one defect, not many.
- Recount a result yourself rather than trusting a commit message.
- Two counts that disagree may simply be counting different things.
- Something that cannot produce the finding is not a pass; it is not a measurement.

## Try it yourself

Find a percentage in your own dashboard and ask what is in its denominator. Then ask how many of those items could actually have failed.
