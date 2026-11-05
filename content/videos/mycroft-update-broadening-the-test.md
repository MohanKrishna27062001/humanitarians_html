---
title: "Mycroft Update: Broadening the Test"
seoTitle: "Patent Claims Parser Bug: Testing on New Patents"
description: "A Humanitarians AI Fellow tests a patent claims agent on unseen patents, finds a silent parser bug, fixes it, and flags an open question about the classifier."
summary: "Aishwarya Patil tests the Mycroft claims agent on three new patents and finds that one returned zero claims instead of fourteen. The video traces the cause to one character of whitespace, shows the fix, and reports the classifier results with an honest caveat."
keywords: ["patent claims parser silent failure", "testing a parser on new patents", "claim numbering format parsing bug", "classifier bias toward defensive claims", "how to debug empty parser output", "regex optional space before period", "patent claims classification results", "check parser output before trusting it"]
generated: "article"
---

This update from the Mycroft team describes what happened when the patent claims agent was tested on patents it had never seen before. Humanitarians AI Fellow Aishwarya Patil presents three new patents, covering mechanical, robotics and medical device subjects. One of them came back with zero claims parsed, even though the patent actually had fourteen. The video follows that failure from discovery to fix, then reports the classifier results and one question that remains open.

## The gap that broader testing exposed

Every patent tested up to that point had numbered its claims the same way: a digit, then a period, with no space between them. The new patent put a space before the period. The parser required the period to come immediately after the digits, so it did not recognise the numbering on the new patent. Because the claims text was genuinely present, the failure was silent. The parser did not raise an error. It simply returned nothing, and the result looked like a patent with no claims.

This is the real value of broadening the test set. A parser that works on every example it has seen can still be built around an assumption that those examples happen to share.

## Tracing the fix

The cause became clear once the raw text was inspected. The difference was one dot with a space instead of one dot with no space, a single character of whitespace producing a silent failure. The fix allowed an optional space between the number and the period.

The video stresses what came next. The fix was checked against the new format, and also against the original format, to make sure nothing that already worked had broken. A fix that handles the new case but regresses the old one is not a fix, so both formats were verified.

## The real results

With the parser repaired, the classifier was run on independent claims from four real patents in four different domains: semiconductor, mechanical, robotics and medical device. This produced eight readings in total. There were zero refusals on this batch, and every reading came with a specific, checkable justification rather than a vague label.

## The honest open question

The video then raises a caveat. Every one of the eight readings came back narrow and defensive. Six claims in a row were classified that way, with none classified as broad or offensive. There are two possible explanations. It may simply be how these particular patents are drafted. Or it may reflect a bias in the classifier toward the safer-sounding answer. The video does not conclude either way. The pattern is flagged and left open until more real data is available, which is a useful model for reporting a result you cannot yet explain.

## Key takeaways

- Testing on patents the agent has never seen can reveal assumptions that earlier test data hid.
- A claim-numbering difference, a space before the period, made the parser return zero claims on a patent that had fourteen.
- The failure was silent: no error appeared, only an empty result.
- The fix allowed an optional space between the number and the period.
- A fix should be verified against both the new format and the original format.
- The classifier handled eight independent claims across four domains with no refusals and specific, checkable readings.
- All eight readings were narrow and defensive, and the video leaves open whether that reflects the patents or a classifier bias.

## Try it yourself

Before trusting a parser on a new document, check that it actually returned something. If a real patent with real claims comes back empty, treat that as a signal to inspect the raw text rather than as proof that the patent had no claims. Then, as the video does, confirm your fix against both the new and the old input formats.
