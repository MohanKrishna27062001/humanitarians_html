---
title: "What Does Claude Actually Do When You Say \\\"Clean This Data\\\"?"
seoTitle: "What Claude's Clean Data Spreadsheet Skill Really Does"
description: "A look at Anthropic's clean-data-xls skill, which runs six fixed cleaning steps in order instead of using open-ended judgment about your spreadsheet."
summary: "The video explains that asking Claude to clean a spreadsheet runs one fixed checklist of six operations, not general judgment. A cleaned column has been reformatted, not fact-checked, and anything outside the checklist is left untouched."
keywords: ["what does clean this data mean", "claude clean data spreadsheet skill", "clean data xls checklist steps", "trim whitespace and fix casing spreadsheet", "convert numbers stored as text", "flag mixed type columns in spreadsheet", "does claude fact check spreadsheet data", "standardize dates and remove duplicates"]
generated: "article"
---

It is tempting to imagine that when you ask Claude to clean a messy spreadsheet, it looks over the sheet, decides what seems wrong and fixes it however it thinks best. The video explains that this is not what happens. Anthropic's clean-data-xls skill follows a written instruction file and runs one fixed checklist, and the difference matters for how much you can trust the result.

## Judgment or checklist

The common guess is that "clean this data" hands the decision to Claude's own judgment. The video says the skill instead runs a fixed list of six operations: trim whitespace, fix inconsistent casing, convert numbers stored as text, standardize dates, remove duplicates, and flag mixed-type columns. It does nothing beyond that list. The skill does not decide what "clean" should mean, and it does not invent a fix for a problem that is not on the checklist.

## A problem the checklist does not cover

To show the limit, the video gives an example of something outside the list: a column where the same currency symbol covers two different currencies, with no way to tell them apart. No step in the checklist resolves currency confusion. As a result, the column comes out exactly as ambiguous as it went in. The skill is not hiding the problem; it simply has no step that addresses it.

## One column through the checklist

The video follows a single anchor example, a revenue column holding " 1,200 ", "1300", "N/A" and " 1,400.00 ". The steps run in order. Whitespace is trimmed, and the number-like text converts into real numbers. The "N/A" entry cannot be converted, so the column is flagged as mixed type instead. Then the skill stops and waits for a person to look at it.

## Clean does not mean correct

The video draws two cautions from the revenue example. First, converting "1,200" into a number does not show that it is the right number. A typo that should have read 12,000 would convert just as cleanly. Second, a flagged mixed-type column is not automatically broken. An ID column that mixes numbers and letters on purpose receives the same flag. In both cases the cleaned sheet still waits for someone to check what the checklist cannot, which is whether the values themselves are correct.

## The carry-out

The summary line is that Claude does not judge what looks messy and fix it. It runs one fixed checklist in order, and anything outside that list is untouched. A column that comes back clean has been reformatted, not fact-checked.

## Key takeaways

- Clean-data-xls follows a written instruction file and runs six fixed operations in order.
- The six steps are trimming whitespace, fixing casing, converting text to numbers, standardizing dates, removing duplicates and flagging mixed-type columns.
- Problems outside the list, such as one currency symbol covering two currencies, come out unchanged.
- Text that converts to a number has been reformatted, not verified as correct.
- A mixed-type flag is a prompt to look, not proof that a column is broken.
- A person still has to check whether the values themselves are right.

## Try it yourself

Give Claude a spreadsheet with a messy column, for example mixed date formats, extra whitespace and a duplicate row or two, and ask it to run the clean-data-xls skill. Then add one problem that is not on the checklist, such as a currency symbol covering two currencies, and run it again. Watching what changes and what stays the same is the quickest way to see the fixed checklist at work.
