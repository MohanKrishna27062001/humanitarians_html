---
title: "AI Effort Estimation: Stop Guessing and Estimate from History"
seoTitle: "Estimate Project Effort from History with AI"
description: "Sanjana shows how to use Claude and reference class forecasting to turn single gut-number estimates into honest ranges built from completed work."
summary: "Single-number estimates picture the best case and ignore history. The video builds a four-step reference class method with Claude that reports a median-to-80th-percentile range, scales for team velocity and flags tasks with no precedent as spikes."
keywords: ["estimate project effort from history", "reference class forecasting for software tasks", "use claude for effort estimation", "planning fallacy in sprint estimates", "report estimate ranges not single numbers", "50th and 80th percentile estimate", "adjust estimates for team velocity", "flag tasks with no history as spike"]
generated: "article"
---

Every plan quietly depends on an estimate, and most estimates are a gut number. In this video, Sanjana, a project manager at Humanitarians AI, shows how to use AI to turn that guess into an honest range built from how a team's work has actually gone before, rather than from how anyone hopes it will go this time.

## Why a single number fails

When someone asks how long a task will take, we picture it going well. Adding OAuth login takes about a week, a settings page a couple of days, and the sprint gets a confident total of 10 days. But the last integration hit a surprise and the quick page grew. Estimating from the best case and then being shocked when reality lands later is what psychologists call the planning fallacy, and a single gut number walks right into it.

## The method: reference class forecasting

The video names the method before building anything. It has four steps:

1. Describe the task in plain features: what kind of work is this really?
2. Match it to its reference class, the pile of similar tasks you have actually completed.
3. Read that class's real distribution, meaning what the tasks actually took rather than what you hoped.
4. Calibrate for how fast your team is moving right now and report a range.

The result is an estimate that comes from evidence rather than optimism.

## The naive version with Claude

The video first asks Claude to estimate three tasks in days, because seeing where the simple ask falls short shows what to fix. The generated code is a list of tasks with one number each, straight from the gut: five days for OAuth, two for the settings page, three for the endpoint. There is no history and no range, and the code's own comment says so. Running it gives three tidy numbers and a clean total of 10 days. That is the danger: with no visible uncertainty, everyone treats 10 days as a fact. The video calls it a guess wearing the costume of a measurement.

## The revised ask

The fix is the team's own past. The revised request tells Claude not to guess a number but to match each new task to similar finished work, read what that group actually took, and return a range from the middle to the 80 percent mark, scaled for the fact that the team is running slower this quarter. In code, that means pulling the actual times from the matched class, taking the 50th and 80th percentiles and multiplying by velocity. The 50th percentile is a coin flip, and the 80th is the number you can commit to.

## What changes

Every task becomes a range. OAuth is 8 to 12 days, because integrations like it really do run long. The settings page holds near 2 to 3, and the endpoint comes to 3 to 5. The old gut numbers each sit on the optimistic edge of their range. Adding the honest ends moves the sprint from 10 days to about 19. The new database migration has no similar past work, so instead of faking a number it is flagged as a spike to investigate first. When there is no reference class, the right answer is "I don't know yet."

## Key takeaways

- A single-point estimate hides uncertainty and invites the planning fallacy.
- Reference class forecasting groups new tasks with similar completed work.
- Use what past tasks actually took, not what you hoped they would take.
- Report a range from the 50th to the 80th percentile.
- Multiply by current team velocity so the estimate reflects today's pace.
- Flag tasks with no reference class as spikes, not promises.
- Ask three questions: what is the reference class, what did it actually take, and what is our velocity?

## Try it yourself

Gather your backlog and, just as important, your last dozen or so finished tasks with the days they really took. Paste the prompt into Claude and have it group the finished work into classes, match each new task and return ranges, flagging tasks with no match. A good answer gives ranges and names its evidence. A bad one hands back a single confident number.
