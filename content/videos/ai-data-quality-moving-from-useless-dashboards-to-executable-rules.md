---
title: "AI Data Quality: Moving from Useless Dashboards to Executable Rules"
seoTitle: "Turn Data Quality Dashboards into Executable Rules"
description: "Hussain explains how AI can propose evidence-backed data quality rules with owners, while humans ratify them and failing rows go to quarantine."
summary: "A 98.7 percent green data quality dashboard can measure only presence and type, not meaning. The video shows how AI can profile columns and propose executable rules with owners, and how people ratify them and failing rows are quarantined instead of silently fixed."
keywords: ["executable data quality rules with ai", "data quality dashboard measures wrong thing", "ai profile columns propose rules", "quarantine failing rows with owner", "human ratification of data rules", "why not auto correct data values", "rule rot in data quality checks", "data standards for thousands of columns"]
generated: "article"
---

Hussain's video is about how AI can help an organization manage its data standards and data quality, and specifically not the dashboard version. It is about the version where somebody has to decide what valid means for 4,000 columns and then keep that decision true every day while the data changes underneath. The central claim is that the useful output is a rule, not a report.

## The green dashboard illusion

Every organization already has a data quality dashboard, and the one in the video is 98.7 percent green. Nobody argues with it. But what it actually measures is whether a field is present and whether it is a string, so six spellings of one country all pass. The score is not wrong, the video says; it is measuring the wrong thing.

## Why nobody writes the rules

The honest answer is to write more rules, and that is exactly why nobody does it. Of the 4,000 columns, 12 have a written rule. Getting one right, which means profiling the column, arguing the edge cases and agreeing with the owner, costs about 40 minutes. That adds up to 330 working days to write them once, and they go stale quickly afterward. A standard that lives in a policy document is a wish, while a standard that can fail a row is a rule. A rule names the allowed set, the scope it applies to, who owns it, and what happens when it breaks: block the load, or let it through with a warning.

## The ask that works

The video contrasts a poor request, "clean my data," which produces a silent rewrite you cannot audit, with a better one: profile one column, propose the rule, show the evidence, name the owner, and do not change a single value. The result is six spellings ranked with counts, the proposed rule beneath them, and the number that matters most, which is that 1,284 rows would newly fail. The video calls that a negotiation opening rather than a bug report, because the real question is whether it is a data problem or a rule that is too strict.

## The model proposes, people ratify

Every proposal stops at a human. In the video's example, 218 rules were ratified, 59 were bounced to an owner who knows the domain, and 41 were rejected because the model pattern-matched a rule the business does not have. Once ratified, rules run on every load. A row that fails a blocking rule never reaches the warehouse. It goes to quarantine carrying the rule that caught it and the person who owns it, so the dashboard becomes a queue somebody works.

## Three ways it goes wrong

- Auto-correcting values leaves a silent edit nobody can trace.
- Every value can be valid and still meaningless; a column of perfect dates that are all the load date passes every check.
- Rules rot when the business changes and the check does not.

## Key takeaways

- A high green score can measure only presence and type, not meaning.
- Writing rules by hand does not scale across thousands of columns.
- AI's contribution is proposing and maintaining rules with evidence attached, not cleaning values.
- Each rule needs an allowed set, a scope, an owner and a failure action.
- Every proposal must stop at a human owner for ratification.
- Failing rows go to quarantine with the rule and owner attached.
- The test is whether a rule can fail a row and whether that failure reaches a person.

## Try it yourself

Take one table you own and ask Claude to propose, for each column, one executable expectation with a severity and an owner. Have it rank them by what a silent failure would cost and list every column where it cannot infer a rule and must ask a human. The video says to watch that last list hardest, because those columns are the ones your organization never actually decided.
