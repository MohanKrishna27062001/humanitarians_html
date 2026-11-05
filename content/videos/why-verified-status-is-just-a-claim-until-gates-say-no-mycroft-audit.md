---
title: "Why \"Verified\" Status is Just a Claim Until Gates Say No | Mycroft Audit"
seoTitle: "When Verified Is Only a Claim: Attestation and Gates"
description: "Uday Sonawane explains why he refused to mark a recipe verified on Mycroft, using 125 lines of attestation, 18 defects found and a gate that said no."
summary: "An engineering log from a Humanitarians AI fellow on the Mycroft project. After writing a 125-line attestation, he did not promote the recipe to verified, because no live run existed and a recorded gate denial outranks his own judgment."
keywords: ["what makes a verified status real", "how to write an attestation record", "gate that cannot deny a build", "test evidence before marking verified", "documenting what you did not test", "break testing a release gate", "recorded denial outranks judgment", "audit project readiness against evidence"]
generated: "article"
---

This engineering log from Uday Sonawane, a fellow at Humanitarians AI, covers his week on the Mycroft project. He wrote the paperwork that says what he tested, and then he did not promote the thing it documents. The video argues that this refusal was the week's real work, and that a status such as "verified" is only a claim until the evidence behind it exists.

## The attestation and three questions

Last episode, he gave two gates real failure paths. This week he wrote an attestation, 125 lines recording what he actually ran, and the recipe's own life cycle then told him he could not mark it verified. One of the gates he had just fixed was the reason. Three questions decide whether a status is a fact or a claim:

- What did you run, in named rows rather than a feeling?
- What did you not run, and is that written down where a reviewer will see it?
- Did a gate say no?

The third matters because a recorded refusal has to outrank your own judgment, or it was never a gate.

## What was run

The ask was ordinary: write the attestation in the house format, then set the status the evidence earns. For the first question, the suite had 17 rows, seven of them deliberate attempts to break the thing. It found 18 catalog defects, all at the exact location the manifest declares: eight in step three and ten in step four. A negative check confirmed that none of step four's ten leaked into step three's output, so neither step masks the other.

## What was not run

The second question is, in the video's view, the half that makes the format worth anything. The log has ten entries under "did not test". Live execution never happened, not once. Nobody has checked whether the sentiment score means anything, since the weights came across with no derivation and no author. Wrong-entity rows are also unchecked: a row that is fresh, unique and complete but belongs to a different company, which no check catches. That class has already cost 782 purged rows.

## Gate five and the life cycle

Gate five was break tested four ways. No live call and no record passes. No live call with a recorded denial passes. A live call with an approval passes. A live call against a recorded denial must fail, and that is the only case that proves the gate reads the decision rather than just counting that one exists. The life cycle runs draft, specified, runnable sample, runnable live, verified. The recipe sits at runnable sample, and reaching verified means passing through runnable live, whose test is a live run with a human clearing every gate. No live run exists, and gate five is recorded as deny. Writing verified would assert a run that never happened in a clearance that was refused.

## Fixing the gates

The video is candid about the failures. Nine things broke during testing and had to be fixed, two of them the gates from last episode. Gate five was fixed twice: first it passed if you did nothing, then it passed on the mere existence of a decision record, so a denial cleared it exactly as an approval would. That means last week's episode shipped a gate already called fixed. The attestation is evidence the testing was real, not evidence the thing works. What verified would take is written out in order: implement live mode, build a second fixture set for the HTTP failures, reopen gate five, do a live run with every gate cleared, and write a fresh attestation against the version that actually ran. The first two steps are code, and the third is a judgment that has already been made once and was no.

## Key takeaways

- A status is a fact only if named test rows back it, and otherwise it is a claim.
- Write down what you did not test where a reviewer will see it.
- A recorded refusal must outrank your own judgment, or it was never a gate.
- Break test a gate in cases that prove it reads the decision, not merely that a record exists.
- A gate that cannot deny a build is not a real gate.
- An attestation shows the testing was real, not that the thing works.
- Reaching a status like verified should require the steps for it to be written out in order.

## Try it yourself

Find something in your project that carries a status such as verified, passing or production ready. Ask what evidence would have to exist for that word to be true, and whether anything ever said no. If the answer is that nobody checked, the video's conclusion is that the word is a claim.
