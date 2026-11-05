---
title: "Mycroft Finance Investigator: Reviewer-Guided Reinvestigation &  Refusal Loops"
seoTitle: "Reviewer-Guided Reinvestigation: An AI Check That Refuses"
description: "How the Mycroft finance investigator binds reviewer follow-ups to earlier runs by hash, replays results from scratch and returns verified, rejected or open."
summary: "Adwait Changan explains the reinvestigation loop in the Mycroft finance investigator, where each follow-up is bound by hash to an earlier run and replayed from scratch. Three requests produce three different outcomes, which is the point of an honest review loop."
keywords: ["ai review loop that can refuse", "bind reviewer follow up to earlier run", "replay verification with fingerprints", "difference between verified evidence and business cause", "append only closure pack for audits", "human reviewer final approval ai finance", "how to test an ai self check", "reinvestigation loop for finance agent"]
generated: "article"
---

This video looks at what happens after a reviewer asks a finance agent to go back and check its work. Adwait Changan describes the reinvestigation loop he built for the Mycroft finance investigator. Three follow-up requests went in and three different answers came back, and only one of them was yes. The video argues that this variety is the whole point of a review loop.

## Binding follow-ups to a specific earlier run

A follow-up only means something if it points to a specific earlier run. Every reviewer request is therefore bound by hash to the exact investigation it questions. If the routing plan has changed, the run is rejected. If the underlying trend log has changed, it is rejected. A reviewer cannot quietly reopen a different investigation from the one they actually looked at.

## The 18-line replay

The replay mechanism is 18 lines. It rehashes the plan, rehashes the trend log, then reruns the entire orchestration from scratch and compares the fingerprint of every specialist result against what was stored. Four separate conditions in the code end the run. The key design choice is that it never reads the old answer and agrees with it. It regenerates the answer and checks whether the new one still matches.

## Three requests, three outcomes

The reviewer sends three different kinds of request: verify the evidence already held, test an explanation the reviewer believes is true, and go find evidence that does not exist yet. A system worth trusting has to answer these differently, and this one did:

- Verifying existing evidence came back verified, because the replay matched exactly.
- Testing a causal claim came back unsupported, because nothing in the evidence establishes the cause.
- Requesting additional evidence stayed open, because the operational records are simply not there.

One yes, one no, one not yet. The presenter says the middle row is the one he would check first if handed the system. A review loop that can only return verified is not reviewing anything, and he calls it a rubber stamp with extra steps.

## Verified does not mean a business cause is proven

The sentence the presenter cares most about in the report is that verified means the evidence replayed exactly. It does not verify a business cause. Those are different claims, and the gap between them is where a finance tool either stays honest or quietly starts misleading people.

## Fenced on five sides

The loop is guarded against five failures:

- A modified source file is caught.
- A missing task is caught.
- A duplicate request is refused.
- A citation pointing at evidence that does not exist is refused.
- A report overwritten after the fact is detected instead of absorbed.

## Append-only closure packs

The output is an append-only closure pack that shows before and after side by side for every task. Nothing is edited in place, so a reviewer can see what changed and what did not. Closure status stays blocked pending human review, because the system finishes the checking and stops exactly where judgment begins. Final approval rests with a named human reviewer. The video notes that the easy version, returning verified on all three requests and closing the ticket, would have been faster to build and useless to a reviewer, since a result that is always yes carries no information.

## Key takeaways

- Bind every reviewer follow-up by hash to the exact earlier run it questions, and reject it if the plan or log has changed.
- Regenerate results from scratch and compare fingerprints instead of trusting stored answers.
- A good review loop returns different outcomes: verified, unsupported and open.
- Verified means the evidence replayed, not that a business cause has been established.
- Guard against modified sources, missing tasks, duplicate requests, nonexistent citations and overwritten reports.
- Use append-only closure packs so before and after stay visible.
- Keep closure blocked until a named human reviewer decides.

## Try it yourself

The video's exercise is to take a system you have built that rechecks its own work and list every outcome it is capable of returning. If the only outcome is success, write down what that costs a reviewer who relies on it, then find the smallest change that would let it return an honest no. If you cannot find a path that produces a refusal, the check is only a formality. Code and the full before-and-after report are in pull request 17 of the project repository.
