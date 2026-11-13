---
title: "How Does Claude Fill In a Financial Model?"
seoTitle: "How Claude's 3-Statement Model Skill Links Statements"
description: "See how Anthropic's 3-statement-model skill links an income statement, balance sheet and cash flow template with fixed steps instead of analyst judgment."
summary: "This short video explains that Claude does not reason about a business like an analyst when filling in a financial model. The 3-statement-model skill follows a fixed written list of steps to link existing statement templates."
keywords: ["how claude fills in a financial model", "claude 3-statement-model skill explained", "link income statement balance sheet cash flow", "net income to retained earnings link", "model ties out but may be wrong", "does claude use analyst judgment", "why a model line stays blank", "test financial model by changing assumption"]
generated: "article"
---

Ask Claude to fill in a three-statement financial model and it is tempting to picture it reasoning about the business like an analyst, weighing which revenue drivers matter and which assumptions are reasonable. This video from Humanitarians AI, narrated by Liam, explains that this is not what happens. Anthropic's 3-statement-model skill reads a written SKILL.md and follows a fixed list of steps.

## Judgment or a written list

The natural guess is that Claude decides what belongs in the model from general financial knowledge. The video says the skill does not work that way. It follows a fixed list of steps written in advance. Ask it to do something those steps do not cover and it will not improvise a fix; it stays exactly inside what is written.

According to the video, the skill completes, populates and links existing three-statement templates. It does not decide what belongs in the model, invent assumptions, or reason about the business beyond what the template and your inputs define.

## One number, three statements

What the skill actually does is read a template that already lays out the income statement, balance sheet and cash flow statement, and link them together. The video's anchor example follows one figure:

- Net income leaves the income statement.
- It lands in retained earnings on the balance sheet.
- It shows up again at the top of the cash flow statement.

That link is now built, the three statements tie together, and the numbers move where they are supposed to. The video notes that it is the same link every time.

## Tied out is not the same as right

The video adds two cautions. A model that ties out is not the same as a model that is right: the connections can stay consistent even when the assumption feeding them is wrong. And a line that is still blank does not mean the run failed. It can mean the template step for that line never received an input to connect.

The carry-out is that a filled-in model is not Claude's financial judgment. It is the numbers you gave it, linked by a fixed set of steps, and the model only connects what the template told it to connect.

## Key takeaways

- Claude does not fill in a model by reasoning like an analyst; the 3-statement-model skill follows a fixed, pre-written list of steps.
- If a request falls outside those steps, the skill stays inside what is written rather than improvising.
- The skill reads an existing template and links the income statement, balance sheet and cash flow statement.
- Net income flows to retained earnings and again to the top of the cash flow statement, the same way each time.
- A model can tie out while the assumption behind it is wrong.
- A blank line can mean the template step never got an input, not that the run failed.
- The video makes no claim about specific numbers, interfaces or output formats.

## Try it yourself

Give Claude a simple set of assumptions, such as one revenue line, one expense and a starting cash balance, and ask it to run the 3-statement-model skill to link the three statements. Then change one assumption and watch which lines move and which stay put. The video presents this as the fastest way to see the linkage the skill performs, instead of just trusting that it happened.
