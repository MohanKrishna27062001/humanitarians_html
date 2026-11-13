---
title: "Mycroft Finance Investigator: Evidence Gap Planner & Specialist Routing"
seoTitle: "Supervisor Agent That Ranks Evidence Gaps by Dollar Impact"
description: "How a supervisor turns one finance agent into a team of specialists, verifies the source chain first, ranks evidence gaps by money and keeps humans in the loop."
summary: "Adwait presents a supervisor architecture for the Mycroft finance investigator that verifies lineage, ranks evidence gaps by cumulative adverse impact and routes each to a scoped specialist. The top-ranked gaps still wait on a human business owner."
keywords: ["supervisor agent for multi agent systems", "rank evidence gaps by dollar impact", "how to route tasks to specialist agents", "verify data lineage before delegating work", "human in the loop finance agent", "limit delegations in multi agent system", "fingerprint agent results to detect changes", "agents cannot infer causation from data"]
generated: "article"
---

This video explains how the Mycroft finance investigator went from a single agent to a small supervised team of specialists. The presenter, Adwait, built a supervisor that ranks evidence gaps by money and routes each one to the specialist who can chase it. The most interesting result is what ends up at the top of the queue: an item that no specialist in the system is able to close.

## Order of operations in the supervisor

The supervisor does three things, strictly in sequence. It first verifies the entire source chain, then ranks the outstanding evidence gaps by how much money they account for, and only then hands each one to a specialist. Nothing is delegated until the data underneath has been checked.

The run shown makes four delegations in total, and the first is the one people tend to skip. Before any category is analyzed, a lineage specialist is asked to verify the input chain. Only after that comes back verified do the revenue and cost specialists receive work. Two categories share one specialist, which makes this a team and not one agent per row.

## A ranking a reviewer can recompute

The queue the supervisor produced puts revenue first with 200,000 of cumulative adverse impact, cost of goods second at 100,000 and operating expenses third at 36,000. The video stresses that this ranking is not a judgment about importance. It is arithmetic over verified periods, so a reviewer can recompute it.

The ranking code is about ten lines, and the condition on line four is described as the whole design: only periods already marked materially adverse are counted. A category is not promoted because it looks dramatic or because it appeared most often, only because verified periods add up to more money.

## What the top gaps are waiting on

The key observation is what each gap is waiting for. It is not more computation or a better model. The highest-ranked gap, worth 200,000, is missing an owner causal explanation, which is a sentence only a human who runs the business can write. The other two gaps need operational driver records, which also come from outside the system. The supervisor can rank the work but cannot finish any of it.

## Fencing the specialists

Because specialists are agents with their own scope, each is fenced in three ways:

- A specialist can only touch its assigned category.
- There is a hard limit on how many delegations a run may make.
- Every specialist result carries a fingerprint, so any change to a source file after the fact is detected instead of absorbed.

## Humans stay in the loop

This leaves a clear line through the system. Specialists collect and verify evidence. They do not infer causation and they do not approve anything. The report says so in its own header and ends with a sentence the presenter put there deliberately: a prioritized queue is not an approved explanation or decision.

The temptation with a specialist system is to let the top agent summarize and call that an answer. The video describes choosing not to. The supervisor produces a work queue with a named owner on every row, and the run stays blocked until a person does the part only a person can do.

## Key takeaways

- A supervisor can turn a single finance agent into a team, but should verify the input chain before delegating anything.
- Evidence gaps can be ranked by cumulative adverse impact using plain, recomputable arithmetic.
- Only periods already marked materially adverse count toward a category's rank.
- Specialists are scoped to one category, delegations are capped and every result is fingerprinted.
- The highest-ranked gap waits on an owner explanation that no agent can write.
- A prioritized queue is not an approved decision; each row needs a named human owner.
- Code and the full handoff trace are in pull request 17 of the project repository.

## Try it yourself

The video's own exercise is to take a multi-agent system you are building and, for every task it delegates, write down what evidence would close that task and whether any agent in the system can actually produce it. Then list the tasks that are secretly waiting on a human. A queue that looks automated is often a queue of things nobody has assigned to a person yet.
