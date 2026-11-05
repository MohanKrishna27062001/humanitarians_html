---
title: "Fan Out: Coordinating Dozens of Agents in Parallel Without Blocking"
seoTitle: "How One Agent Coordinates Dozens of Parallel Sub-Agents"
description: "Learn how a custom dispatch tool lets one head agent spawn parallel analyst sessions, merge their results and cut 25 minutes of work to about 30 seconds."
summary: "The video explains how a single agent can coordinate many long-running sub-agents without opening separate chats. A custom tool the server intercepts spawns isolated sessions, and a schema contract keeps one bad result from corrupting the merged report."
keywords: ["how to run parallel ai agents", "claude managed agents orchestration explained", "custom tool spawns sub agent sessions", "fan out fan in agent pattern", "parallel agents versus serial execution time", "schema contract between agents and aggregator", "head agent waits without blocking terminal", "merge results from multiple sub agents"]
generated: "article"
---

It is easy to picture coordinating fifty analysts as fifty separate chats, all running at once. The video says that is not how it works. One call is made, and the server spawns the sessions. The question it answers is how a single agent can coordinate long-running parallel sub-agents without opening multiple conversations or blocking the whole flow.

## The wrong guess

The natural first idea is to open three separate Claude conversations yourself, one per analyst, and copy the results between them by hand. The video treats this as the wrong model. Nothing about the coordination should depend on you moving results around.

## A custom tool the server intercepts

The mechanism is a custom tool called dispatch analysts. When the head agent calls it with a list of tickers, the server intercepts the call. The server does not run the analysis itself. It spawns independent analyst sessions, each with its own full context window, each running in parallel. The head agent pauses while the server monitors the sessions. When all of them finish, the server resumes the head with the accumulated results. The video calls this fan out, fan in.

## A worked example with three tickers

The anchor example is a prompt to sweep NVDA, AMD and MU, ranked by margin durability. The head agent calls dispatch analysts with the three tickers, and three analyst sessions spawn at the same time. Each one independently reads 20 pages of SEC filings, scores the company on a rubric and returns a grade.

While they work, the head waits. It does not block your terminal and it does not lock the conversation. When all three finish, NVDA scores nine, AMD scores six and MU scores four. The head reads the accumulated table and synthesizes a ranked report: one conversation, three parallel analysts, one merged report.

## Isolation and timing

Each session is fully isolated, with its own context, its own tools and its own errors. The sessions converge when they finish, not when the head decides to check. The server is the coordinator, not the agent.

The timing difference is described as categorical rather than incremental. Fifty analysts run serially, at about 30 seconds each, take 25 minutes. Dispatched in parallel, all fifty finish in about the time the slowest one takes, around 30 seconds. In the video's words, serial is a queue and parallel is a wave.

## Fan-in and the schema contract

Results do not merge themselves. Each session returns a result with a ticker, a score and findings, and these arrive at different times. The aggregator holds them until the last one lands, then runs three operations: deduplicate, rank by score and merge into one structured report. The video describes it as a collector that waits for the full set before handing anything back.

Both sides follow a fixed contract. The head sends a task ID, a ticker and a query focus. The analyst returns a task ID, findings, confidence and sources. The aggregator checks every result against that shape, so an off-schema result is rejected on its own and one broken session does not corrupt the others. Without the contract, one bad session can corrupt the merged report silently.

## Key takeaways

- Fanning out is not opening more chats; it is one call that spawns isolated sessions.
- A custom tool, intercepted by the server, triggers the spawning.
- Each session has its own full context window, tools and errors.
- The head agent waits without blocking your terminal.
- Parallel time is roughly the slowest single session, not the sum of all of them.
- The aggregator waits for every result, then deduplicates, ranks and merges.
- A schema in and a schema out lets a broken session be rejected cleanly.

## Try it yourself

Pick a workload with independent sub-tasks, such as research questions, files to summarize or options to compare, and ask Claude to fan it out across parallel sub-agents and merge the results into one ranked decision. Then watch two things: what happens if one sub-task fails, and whether the merge waits for the slowest session before it hands back an answer.
