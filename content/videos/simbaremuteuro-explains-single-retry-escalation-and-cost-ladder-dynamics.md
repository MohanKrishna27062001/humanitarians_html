---
title: "Simbaremuteuro explains: Single-Retry Escalation and Cost-Ladder Dynamics"
seoTitle: "AI Gateway Single-Retry Escalation and Cost Ladder"
description: "How an AI gateway retries exactly once on a stronger tier after a free check fails, and why sticker price can mislead you about real token spend."
summary: "Simba walks through the fourth Mycroft Sprint, where a router gets one retry on the tier above, triggered only by free validation checks. Results from 24 fixtures show escalation costs about 3.2 times a normal request, and sticker prices mislead."
keywords: ["ai gateway retry once escalation", "free validation checks for llm output", "llm model routing cost ladder", "sticker price vs real token cost", "when should an llm request retry", "non retryable errors in ai gateway", "llm benchmark fixtures zero failures", "strong model cheaper than cheap model"]
generated: "article"
---

This is the fourth sprint in a series on a model router, and it is the one where the router finally gets to retry. The rule is simple: one retry, ever, on the tier above, triggered by a free check failing. Simba built the sprint to answer one worry: can a wrong answer in the right shape slip through with nothing catching it and no retry helping?

## One retry, structurally enforced

The retry happens exactly once, on the escalation tier, and only when a free validation check fails. There is no retry loop in the code, so a chain of retries is not just discouraged but structurally impossible. The gateway file is the whole path: route to a tier, call the model, run the check, and if it fails, retry once on the tier above. Nothing exists to walk back down or try a third time.

## The free checks

A validators file holds five checks, one per task type. The answer must be an allowed label, the JSON must have its required keys, a contradiction verdict must actually quote the input, a summary's numbers must all appear in the input, and a retrieval-based answer must cite a passage. Two more checks run on every task: the answer is not empty, and it is not cut off.

## Failures that should not retry

The adapters changed too, so every failure now reports whether retrying could actually help. A bad API key, an unknown model, or a request that is simply too large are terminal. The gateway never retries those, because no retry fixes them. A benchmark script runs every frozen fixture through the whole path and grades each answer against an answer key. Tests grew from 96 to 146 over the sprint.

## Results across 24 fixtures

The final sweep covered 24 fixtures. The 24 requests became 26 attempts, with escalation on 8 percent, which was two fixtures. Failures were 0 percent. Total cost was $0.00250, about a hundredth of a cent per request, and latency was 393 milliseconds at the median and 734 at the 95th percentile. Of the 24, 16 were graded and 14 were correct.

The two flagged fixtures turned out to be a wrong answer key, not a wrong model. Both models answered positive where the key said negative, and the models were right. The cheap 20B model even got one of them right, a headline where the negative words belong to a rival company.

## What broke along the way

Several things broke. The quote check was too strict, so all three first-sweep escalations were false alarms because models quoted two conflicting statements joined together. Fixing the prompt dropped escalation from 11 percent to 8. A strong-tier model started returning errors and was replaced, and its replacement was then refused because its token budget exceeded the account's output cap, so it was lowered to 896. A shared log file also double-counted three requests, giving 27 instead of 24, so logs are now stamped to the second.

## The cost ladder

Two numbers are worth keeping. Escalated requests cost 3.2 times a normal one, $0.000282 against $0.000088, and two of 24 requests took 23 percent of the spend. Second, the ladder is not monotonic: on the gate prompt the strong tier cost 20 percent less than the cheap tier despite a 13 times higher sticker price on output, because the cheap model spent 77 tokens thinking while the strong one answered in two.

## Key takeaways

- Retry exactly once, on the tier above, and only when a free check fails.
- Make a retry chain structurally impossible rather than merely discouraged.
- Fail fast on terminal errors such as a bad key or oversized request.
- Zero failures across 24 fixtures, including every deliberate trap.
- An escalated request cost 3.2 times a normal one.
- Sticker price and real cost can point in opposite directions.
- Check an alleged model error against your answer key before blaming the model.

## Try it yourself

If you price tiers by sticker rate alone, measure where your own cost ladder crosses over. Run the same prompt through your cheap and strong tiers, count the output tokens each actually spends, and compare real cost rather than the price list.
