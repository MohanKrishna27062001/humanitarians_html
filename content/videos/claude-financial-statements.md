---
title: "Claude, Financial Statements."
seoTitle: "How Claude Flags Material Variances in Statements"
description: "How Claude's financial-statements skill builds three statements and flags variances against a threshold written in its file, not through judgment."
summary: "The video explains that Claude does not decide by judgment what counts as a material variance. Its financial-statements skill builds the income statement, balance sheet and cash flow statement, compares periods and flags anything crossing a threshold set in the file."
keywords: ["claude financial statements skill explained", "what makes a variance material", "income statement balance sheet cash flow with claude", "compare financial statements period to period", "flag variances over a threshold", "what is a claude skill skill.md", "does claude use judgment on variances", "prompt claude to explain materiality rule"]
generated: "article"
---

The phrase "material variance" sounds like a judgment call, the kind of read an experienced accountant makes by feel. The video says that in this Claude skill it is not. The financial-statements skill checks numbers against rules written in a file, and the same steps run every time. The explainer shows where the rule lives and what repeated flags do and do not prove.

## No separate judgment module

The video begins with the assumption that Claude uses its own judgment to decide what counts as a material variance. It does not. Open the financial-statements folder and there is no separate module for accounting judgment. One file, SKILL.md, spells out the job. Claude reads that instruction and follows it, and the video states that nothing is left to discretion.

## What the file tells Claude to do

The job in the file has three parts:

- build the income statement, the balance sheet and the cash flow statement
- compare each period to the last
- flag variances that cross a threshold the file itself sets

The video does not say what the numeric threshold is, and it does not describe the exact line items or output layout. It limits itself to the skill's documented job.

## Request in, steps in order, flags out

The pipeline lives in a steps section, and Claude works through it top to bottom. The process is linear, with no branching unless a step says so. Ask for financial statements covering the first quarter and it builds the income statement, balance sheet and cash flow statement, lines each one up against the prior period and flags what crosses the threshold. The video stresses that these are the same steps every single time.

## Same steps, same flags

Ask for the same first quarter again and the flags come back identical. The video explains that this is not because Claude re-judged the numbers, but because the same steps ran a second time. It then points out that this cuts both ways. Identical flags on identical input are not proof that Claude understood the business; they only prove the fixed steps repeated. And a different flag next quarter does not mean the rule changed. The same steps simply ran against new numbers.

## What flagging a variance really is

The video's conclusion is that flagging a variance is not a judgment call by Claude. It is a check of the numbers against a rule someone already wrote, done the same way every time. The video offers no verdict on whether the skill's design is good.

## The prompt shown at the end

The closing prompt asks Claude to open the financial-statements skill folder and, before running anything, read the SKILL.md and say in its own words what makes a variance count as material. The point, as the video frames it, is to make the written rule visible before it is applied.

## Key takeaways

- Claude does not use its own judgment to decide what counts as a material variance in this skill.
- One file, SKILL.md, spells out the job, and Claude reads and follows it.
- The job is to build the income statement, balance sheet and cash flow statement, compare each period to the last, and flag variances over a threshold.
- The threshold is set by the file itself.
- Claude works through the steps top to bottom, with no branching unless a step says so.
- Identical flags on identical input show only that fixed steps repeated, not that Claude understood the business.
- A different flag next quarter means the same steps ran on new numbers, not that the rule changed.

## Try it yourself

Open a financial-statements skill folder you use and paste the video's prompt: ask Claude to read the SKILL.md and explain, in its own words, what makes a variance count as material, before it runs anything. Compare its answer with the threshold written in the file to confirm the rule is the one actually in use.
