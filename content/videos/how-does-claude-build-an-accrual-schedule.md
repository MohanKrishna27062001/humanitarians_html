---
title: "How Does Claude Build an Accrual Schedule?"
seoTitle: "How Claude's Accrual Schedule Skill Drafts Journal Entries"
description: "Learn how Anthropic's accrual-schedule skill computes each entry, cites its support document and drafts a journal entry that waits for approval."
summary: "This short video explains that Claude does not use its own accounting judgment to decide what to accrue. The accrual-schedule skill follows a written procedure: it computes the entry, cites support, drafts a journal entry and then waits."
keywords: ["how claude builds an accrual schedule", "claude accrual-schedule skill explained", "period end accrual journal entry draft", "accrual with cited support document", "december utility bill accrual example", "does claude use accounting judgment", "controller approval before posting accrual", "test accrual without supporting document"]
generated: "article"
---

Ask Claude to build a period-end accrual schedule and it is tempting to imagine it deciding, from its own accounting judgment, which expenses and revenues belong in the close. This video from Humanitarians AI, narrated by Liam, explains that this is not what happens. Anthropic's accrual-schedule skill reads a written SKILL.md and, for each accrual, computes the entry and cites the support document behind it.

## The guess and the actual procedure

The natural guess is that Claude decides on its own which items belong in this period's accrual schedule. The skill does not work that way. For each accrual it computes the entry and cites the support that backs it. Give it an expense with no supporting document and it will not invent a number: there is nothing for it to cite, so there is nothing to draft.

The video adds that the skill does not decide what counts as an accrual and does not exercise accounting judgment beyond what the template and your inputs already define.

## One accrual, four stops

The worked example is a December utility bill that will not be billed until January. The video walks through the stops in order:

- The accrual is identified.
- The entry is computed.
- The utility contract is cited as support.
- A draft journal entry is created.

Then the skill stops and waits.

## Drafted is not the same as correct

The draft is built, computed, cited and ready to review, but the video makes two cautions. First, a drafted journal entry with a citation is not the same as a correct entry. It reflects only what the cited document says, so a wrong document produces a wrong entry that is cited correctly. Second, an accrual with no draft this period does not mean something broke. It can simply mean that expense has no qualifying support yet.

Either way, the draft still waits for the controller before anything posts. The video's carry-out is that a drafted accrual journal entry is not Claude's judgment about what you owe. It is a computed entry tied to cited support, waiting for a controller's approval.

## Key takeaways

- Claude does not decide what to accrue from its own accounting judgment; the accrual-schedule skill follows a written procedure.
- For each accrual the skill computes the entry, cites the supporting document and drafts the journal entry.
- With no supporting document, the skill will not invent a number, because there is nothing to cite.
- In the example, a December utility bill not billed until January is identified, computed, cited to the utility contract and drafted.
- A citation does not make an entry correct: a wrong document yields a wrong entry that is cited correctly.
- A missing draft can mean the expense lacks qualifying support yet, not that the run failed.
- Nothing posts until a controller approves the draft.

## Try it yourself

Give Claude one expense that belongs in this period's close, with the invoice or contract as its support, and ask it to run the accrual-schedule skill: compute the entry, cite that document and draft the journal entry. Then remove the supporting document and ask it to try the same accrual again. Watching what it does when there is nothing left to cite is the fastest way to see that the skill computes from support rather than judgment.
