---
title: "Unbuilt Is Not Broken: Understanding AI Validation Findings | Mycroft AI"
seoTitle: "Unbuilt Is Not Broken: Sorting Validation Findings"
description: "Uday Sonawane shows how a checker's 725 findings dropped to 171 once unbuilt draft work stopped being counted as defects on the Mycroft project."
summary: "Uday Sonawane explains how a contract checker on the Mycroft project reported 725 findings, 554 of which were just draft recipes with no scripts yet. The video gives three questions for judging any count of problems."
keywords: ["unfinished work is not a defect", "how to classify validation findings", "contract mismatch checker false positives", "draft status for unbuilt recipes", "does this finding contradict a claim", "verify a guard that never fires", "sort problem list by claimed behavior", "mycroft project recipes validation"]
generated: "article"
---

Uday Sonawane presents his week on the Mycroft project with a surprising headline. A checker reported 725 findings, and 554 of them were not defects at all. They were unbuilt work, correctly described. The number that had been quoted was the big one, and the video explains why the real picture was much smaller.

## Where the 725 came from

Two episodes earlier, Uday built a checker that counts contract mismatches between a recipe and its scripts. It reported 725 findings, and 554 of them were one message: "This step has no script." Those recipes, however, were marked draft. A draft recipe whose scripts do not exist is not broken. It is a draft, and the work is honestly described as unbuilt.

## Three questions for any count of problems

The video offers three questions to ask of any count of problems:

- Does this finding contradict a claim? If nothing was claimed, nothing can be wrong.
- Which list did you match against, the specific one or anything that looks similar?
- Did the guard ever fire? A safety check that never triggers is only evidence if you know it could have.

## Question one: a rule instead of a number

The answer to the first question is a rule rather than a count. A finding is a defect when it contradicts something the recipe claims. Everything else is the honest state of unfinished work, and it gets named rather than counted. Applying that rule took the count from 725 down to 171. Then 91 recipes received the status they were missing, which brought it down to 80, with 90 recipes now completely clean.

## Question two: check before you label

This was the question that nearly went wrong. Before stamping 91 recipes as draft, Uday checked whether any actually had working scripts, since the label would be false for those. The first survey said 42 of them did, which would have mislabeled nearly half the batch. But that query matched any path under scripts that a recipe happened to mention, including legacy scaffolds that exist and do nothing. Narrowed to the six canonical steps in the script locations table, the real answer was zero for all 91. What got added was eight lines at the top of each file: a draft status, the count of the recipe's own open to-dos, and nulls where there is genuinely nothing yet.

## Question three: a guard that never fires

The generator that writes these lines refuses to stamp draft on any recipe that does have canonical scripts on disk. Across all 91, that refusal never fired. Normally a guard that never triggers is worth nothing as evidence, but here the 42 from the first survey proves it could have fired if the narrow query had been wrong.

## A mistake caught on camera

The video also admits an unplanned error. Uday's own count of recipes carrying a status line came back 98, while the checker said 97. His command searched the whole recipes folder and also matched a YAML file that happens to contain the word status. That was the same kind of mistake as the 42, made by the person making the video. The claim that nothing below line one changed can be checked from the diff alone: 91 files, 728 insertions, zero deletions, every hunk starting at line one. One more detail is that open to-do counts exclude markers inside gate test commands, which would otherwise inflate every recipe built from the template.

## Key takeaways

- A raw count of findings can hide the fact that most are honest descriptions of unfinished work.
- A finding is a defect only when it contradicts something that was claimed.
- Name unbuilt work rather than counting it as a problem; the count here went from 725 to 171.
- Check that a label is true before applying it in bulk.
- Match against the specific list, not anything that looks similar.
- A guard that never fires is evidence only if you can show it could have fired.
- Claims about a change can be verified from the diff, here 91 files, 728 insertions and no deletions.

## Try it yourself

Take any list of problems your tools produce and sort it by one question: does this contradict something we claimed, or is it just something we have not built yet? The video's point is that the second pile is not a backlog. It is a description.
