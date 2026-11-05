---
title: "Grounding & Retrieval: Why Citations Do Not Make an AI Answer True"
seoTitle: "Why AI Citations Do Not Make an Answer True"
description: "Adwait Changan explains the three checks a citation must survive and why only the first two can be automated, using a 14 versus 30 days example."
summary: "Retrieval gives a relevance signal, not a truth signal. Adwait Changan walks through three citation checks, shows a four-answer test where a verbatim quote still supports a false claim, and argues for putting quote and claim side by side for a human."
keywords: ["do ai citations prove an answer is true", "difference between retrieval and grounding", "how to verify ai citations", "verbatim quote check for citations", "ai answer cites real source but wrong", "relevance signal vs truth signal", "human review of ai citations", "design interface for checking ai sources"]
generated: "article"
---

An AI answer with a citation attached looks trustworthy, but the video by Adwait Changan argues that a citation does much less than people assume. The key distinction is between an agent finding a document and an agent actually using it. Those are two different events, and only one of them can be checked automatically.

## Three checks a citation must survive

For a citation to mean anything, it has to pass three checks. Does the source actually exist? Does the quoted text appear in it word for word? And does that quote actually support the claim being made? The first two are string comparisons that code can do. The third is a judgment about meaning, and no amount of engineering turns it into a string comparison.

## Relevance is not truth

The video also looks at what retrieval alone gives you. It returns a document that scored well against the question, which is a relevance signal and not a truth signal. Retrieval answers whether anything looked related. Grounding asks whether a specific sentence follows from a specific passage. The speaker's complaint is that most systems ship the first and call it the second.

## A four-answer test

To make this concrete, the video shows four answers, each with a citation, and runs the automatic checks. One cites a document that does not exist. One quotes text that is not in the document it names. The other two pass cleanly. But when you look at whether the claims are true, one of those two passing answers is false, and it is false in the most dangerous way, because everything a reviewer would check by habit comes back clean.

## The 14 versus 30 days case

The failing claim says that travel is reimbursed within 14 days. The cited document is real, and the quoted sentence appears in it word for word. That sentence says 30 days. Every automatic check passes, yet the answer is wrong, and no stricter string matching would have caught it. The video then shows an honestly labeled 12-line checker whose docstring says it checks only whether the source is missing and whether the quote is not in the source. It never decides whether the quote supports the claim, and pretending otherwise would be the real bug.

## What a citation buys you

The video lists what a citation proves: that the source exists, and that the text was not invented. It does not prove the quote is relevant, that the claim follows from it, or that the answer is true. Four of these six are things people assume they get for free.

From there it suggests three things to build, in order of value. Check that the source exists, which is nearly free. Check that the quote is verbatim, which catches invented text. Then put the quote beside the claim where a human can see both at once, because that is the only check that catches 14 against 30. In this view a citation is not there to convince the reader but to let the reader disagree quickly. A source link nobody can open next to the sentence it supports is decoration.

## Key takeaways

- Finding a document and using it are different events, and only one can be checked automatically.
- A citation should pass three checks: source exists, quote is verbatim, quote supports the claim.
- Only the first two checks can be automated with string matching.
- Retrieval returns a relevance signal, not a truth signal.
- In the four-answer test, two citations passed every automatic check and one was still false.
- The failure to watch for is a real, verbatim quote that the claim goes further than.
- Interfaces should show the quote beside the claim so a human can disagree fast.

## Try it yourself

Take three answers your system produced with citations attached. For each one, quote the exact sentence from the source that supports it, then ask whether that sentence actually says what the answer claims or only something nearby. Flag every case where the citation is real but the claim goes further than the quote. The video notes that this next topic, guardrails and evaluation, is covered in the following episode.
