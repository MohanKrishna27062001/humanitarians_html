---
title: "Claude Doesn't Write a Report. It Profiles the Data."
seoTitle: "Claude's Explore-Data Skill: Profile a Dataset"
description: "How Claude's explore-data skill profiles a dataset's shape, quality and patterns with the same checklist every time, instead of writing a freeform report."
summary: "The video explains that Claude's explore-data skill does not write a narrative report on your data. It follows a fixed set of steps to profile shape, quality and patterns, flags issues such as duplicates, and suggests which dimensions and metrics to analyze next."
keywords: ["claude explore data skill explained", "profile a csv dataset with claude", "check null rates and column distributions", "find duplicate rows in a dataset", "which columns to analyze next", "what is a claude skill skill.md", "prompt claude to profile customer orders", "dataset shape quality and patterns"]
generated: "article"
---

A common assumption is that asking Claude to explore your data means getting a written report back. The video says the explore-data skill does something different: it profiles the dataset, covering its shape, quality and patterns, using the same checklist every time. The short explainer walks through what a skill is, how this one runs and what the profile contains.

## A skill is a folder Claude reads before it works

The video starts from the idea that a skill is a folder Claude reads before it works. For this skill, the folder is explore-data, and its SKILL.md file holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts. The video summarizes this as the file being the program. That means the behavior you see comes from written instructions that anyone can read.

## Steps, in order

The instructions are laid out in a steps section. Claude reads each step in order and runs it. The process is linear, with no branching unless a step says otherwise. Because the order is fixed, the result is the same kind of output each time rather than whatever shape a freeform write-up might take.

## What profiling a dataset means

The video states the actual job as profiling a dataset to understand its shape, quality and patterns. In practice that includes:

- checking null rates and column distributions
- spotting issues such as duplicates or suspicious values
- deciding which dimensions and metrics are worth analyzing next

The output is a profile: shape, quality, patterns and the issues worth flagging. It is not a freeform report, and the video repeats that it is the same checklist every time.

## What the video does not claim

The video describes what the skill is built to check. It makes no claim about what conclusions the skill will draw from any particular dataset, and it does not promise anything about the findings for your data. The behavior it describes is the checklist, not the result.

## The prompt shown at the end

The closing segment gives a prompt to paste into Claude. It describes a CSV of customer orders and asks for a profile: how many rows and columns there are, which columns have missing values and how often, whether any rows look like duplicates, and which two or three columns are most worth digging into next. It ends with the instruction to walk through the plan before starting. The video says that clause matters, because explaining first surfaces the real constraint logic before any profiling is done.

## Key takeaways

- A skill is a folder Claude reads before it works; explore-data is driven by a single SKILL.md file.
- The file holds the whole instruction set in plain language, with no hidden logic.
- Claude runs the steps in order, with no branching unless a step says otherwise.
- The job is to profile a dataset's shape, quality and patterns, not to write a narrative report.
- The checks include null rates, column distributions, duplicates and suspicious values.
- The profile also decides which dimensions and metrics are worth analyzing next.
- Asking Claude to walk through its plan first makes the constraints visible before any work begins.

## Try it yourself

Take a CSV you already have, such as customer orders, and paste the video's prompt. Ask for the row and column counts, which columns have missing values and how often, whether any rows look like duplicates, and which two or three columns deserve a closer look, and ask Claude to explain its plan before it starts. Compare what comes back with the checklist described above.
