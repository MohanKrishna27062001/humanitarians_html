---
title: "Mycroft: Cross-Agent Validation & The Number That Wasn't There"
seoTitle: "Cross-Agent Validation: Catching a Hallucinated Ratio"
description: "Two independent AI agents read real SEC filings, one invents a debt-to-equity ratio, and five diagnostic tests reveal what the contradiction flag really measures."
summary: "Divij Pawar presents the first live run of cross-agent validation, where one agent fabricated a debt-to-equity ratio from data containing no such figures. Five diagnostic tests then show where the system works and where its contradiction flag falls short."
keywords: ["cross agent validation for ai", "ai hallucinated financial ratio example", "debt to equity ratio fabricated by ai", "testing llm agents on sec filings", "how to detect hallucinated numbers", "determinism test for local language model", "false positive contradiction flag ai agents", "claim verification against source url"]
generated: "article"
---

Divij Pawar presents the first live run of the Mycroft cross-agent validation system. The system runs two independent AI agents on the same company, pulls the numbers out of each agent's conclusion and flags anything that does not match. The first thing the live run produced was not a disagreement but a number that came from nowhere. The video uses that result to run five diagnostic tests and to be honest about what the system has and has not proven.

## What cross-agent validation does

The comparison is set arithmetic, with no model and no judge. Two weeks earlier the project had one real agent and one fixture, a handwritten stand-in that could be made to give any answer, used on purpose to prove the detector worked. Last week the fixture was replaced with a second real grader reading the same SEC filing through a different lens: balance sheet versus earnings quality. The test suite passed with 143 tests and the comparator itself did not change, but nobody had yet watched two real agents run side by side.

## The number that came from nowhere

The second agent ran on a locally hosted model. Producer A, reading assets, revenue and net income, calculated a debt-to-equity ratio of 0.34. Its input data contained no debt and no equity figures, so the concept was not in the data at all. Producer B, reading real earnings figures, cited no numbers; it described them as consistent and significantly large without writing one down. The system flagged a contradiction, which was correct, though not for the reason one would hope. Because one surprising result could be noise, five separate tests followed.

## Tests one and two: verification and determinism

Claim verification fetches the source behind each cited URL and checks that the claimed numbers appear within a 1% tolerance. Here it never got the chance. Claim extraction upstream only recognizes figures shaped like a dollar amount, a percentage, a multiple or basis points, so a bare decimal like 0.34 was invisible. The lesson: a verification layer is only as reliable as what it is handed.

Determinism runs the same question through the same model five times with a fixed temperature and seed. Four runs converged on the same invented pair of ratios, off by one digit in the last decimal place, and the original 0.34 never came back. Fixing temperature and seed narrows the model's behavior but does not make it fully deterministic, and the outlier was exactly the fabrication.

## Tests three and four: consistency and format

The consistency probe runs a second independent pass and scores overlap, weighting words lightly and specific numbers heavily, because a real number is harder to fabricate identically twice. The debt-to-equity figure appeared exactly once across all runs, so the hard divergence flag fired as designed. This was the one test that worked with no workaround.

The guardrail stress test checks whether agents can produce the required format at all. Across 24 real calls there were 24 first-attempt successes, zero retries and zero halts, so the failure lies in the reasoning, not the format layer.

## Test five: breadth across 12 companies

Running the two-producer comparison on 12 real companies flagged 11 of 12. The exception was the one company where neither agent cited a number. Checking one flagged case showed both agents were correct: one reported assets and revenue, the other earnings per share. The flag could not tell disagreement from two agents discussing different things.

## What was fixed and what was not

The missing-number blind spot turned out to be duplicated in three files, and all three were widened the same way. The flag needed a decision: a number cited by only one side no longer counts as a contradiction. Recalculated on the same 12 companies, flags dropped from 11 of 12 to 7 of 12. The remaining seven, where both agents cite real but unrelated numbers, are a known limit named in the code and tested, because nothing in the system yet knows which concept a number belongs to.

## Key takeaways

- Cross-agent validation compares numbers from two independent agents using set arithmetic, not a judge model.
- One local agent produced a debt-to-equity ratio of 0.34 from input with no debt or equity figures.
- Claim extraction missed the bare decimal, so the verification layer never saw the fabricated claim.
- Fixing temperature and seed does not guarantee identical outputs; the fabrication appeared in only one of five runs.
- The consistency probe caught the fabrication because the number never repeated across independent runs.
- The format guardrail held on 24 of 24 real calls.
- The flag fell from 11 of 12 to 7 of 12 companies after the fix, with the rest left open on purpose.
- The machinery works, but the flag does not yet reliably mean the agents disagree.

## Try it yourself

Take two model outputs about the same document and list every number each one cites. Check whether each number actually appears in the source, and note any figure, like a bare ratio, that a simple pattern matcher might miss.
