---
title: "Mycorft's Vendor Intelligence System: Fail-Closed Architecture &amp; Noise Reduction"
seoTitle: "Vendor Intelligence Fixes: Fail-Closed and Honest Logs"
description: "An engineering update on a vendor intelligence system: fixing wrong-company news matches, failing closed on errors, and logging real prompts and responses."
summary: "Muskan reports a week of cleanup on a vendor intelligence pipeline. Wrong-company headlines corrupted a health score, a token limit caused silent failures, and monitoring logged invented summaries; each was fixed."
keywords: ["vendor intelligence pipeline fixes", "fail closed vs fail open error handling", "company name keyword collision news", "llm headline relevance check accuracy", "log real prompts and responses", "token limit silent failure llm", "pin dependency versions to avoid breakage", "monitoring logs that lie"]
generated: "article"
---

Muskan's engineering update covers a week of cleanup on a vendor intelligence system, and she describes it as uncomfortable. A health score had been built on the wrong company's news, the monitoring was logging fake data, and one check would have failed silently. The video walks through what broke and how each problem was fixed, and it ends with a theme: a confident number can be pure noise.

## When the company name is also a normal word

The system finds news by searching for each company's name. That breaks when the name is also an ordinary phrase, and the worst case was Scale AI, where headlines say things like "raised a billion to scale AI" and scale is just a verb. Of Scale AI's 76 stored signals, 72 were really other companies' news, and they fed the financial health score. Scale AI showed a score of 75, and 25 of those points came from an Indian education company's funding raise.

The fix checks how the name is used in the headline, not just whether it appears, and only for names that are also ordinary words. After cleaning up the 72 bad rows, the score went from an invented 75 to an honest unknown, flagged for review.

## Keeping the system alive

The AI model that both collectors used had been retired by its provider, so every scheduled run would have failed. Muskan moved to a current model and roughly halved its cost by turning down its internal reasoning. A deprecated library that builds all five agents was migrated, and four dependencies were version-locked, because twice that week a library updated overnight and broke the build with no change from her side.

## Turning a judgment call into a lookup

The wrong-company check was made much stronger. The AI must now state what role the company name plays in the headline before it decides, which converts a judgment call into a lookup. Accuracy on unseen cases rose from 10 out of 16 to 16 out of 16, and the check now works for companies nobody configured by hand.

## Fail closed, not open

Testing exposed a dangerous problem. At the old token limit, about one in four of these checks would fail. On failure, the old code assumed the article was about the company. Shipping the better check would therefore have silently switched it off for a quarter of all headlines while the logs looked fine. Muskan flipped the failure behavior to reject instead of accept, matching what the instructions already said: when unsure, say no.

## Logs that tell the truth

The monitoring had been storing a handwritten summary of each AI call instead of the real request and response, so it could not answer the question it exists for: why did the AI decide that? It now logs the real prompt, the real response and real token counts. It had also been recording calls that never happened, which inflated the apparent cost.

## Key takeaways

- Searching by company name fails when the name is also an ordinary word, as with Scale AI.
- 72 of 76 stored Scale AI signals belonged to other companies, inflating its score to 75.
- Having the model state the name's role in the headline raised accuracy on unseen cases from 10 of 16 to 16 of 16.
- On failure, a check should reject rather than accept, so errors do not silently disable it.
- Monitoring should record real prompts, responses and token counts, not narrated summaries.
- Version-lock dependencies that can break builds overnight.
- Clean the bad inputs, fail closed when unsure, and log what happened rather than a story about it.

## Try it yourself

Pick one number your own tools report as fact, such as a score, a count or a confidence. Ask where it comes from and what happens to it when the data behind it is missing. If the honest answer is that the system makes something up, that is your next fix.
