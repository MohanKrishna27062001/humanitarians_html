---
title: "The 402-Line Prompt: How Splitting Agents Makes Them 5x Faster"
seoTitle: "How Splitting a Long Agent Prompt Makes It Faster"
description: "A 402-line prompt took 102 tool calls and 488 seconds; splitting it into tools, skills and subagents cut one sweep to about 100 seconds."
summary: "A slow agent with a 402-line prompt and 12 tools is not fixed by adding more. The video splits the same knowledge across tools, skills and subagents so only the relevant slice loads for each task, and explains when that split backfires."
keywords: ["why is my agent so slow", "split a long agent prompt", "tools vs skills vs subagents", "load agent instructions on demand", "reduce ai agent tool calls", "agent system prompt too long", "when to decompose an ai agent", "claude agent skills explained"]
generated: "article"
---

A newcomer might assume a slow agent needs more tools, more context and more instructions. The video argues the opposite. It uses one example, a daily low-stock sweep run by an agent with a 402-line prompt and 12 tools, to show why carrying everything on every call is the real problem.

## The natural fix that makes things worse

When an agent works but runs slowly and expensively, the instinct is to pack more into the system prompt so it never misses a case. The video treats that as the wrong guess. In the example, the sweep took 102 tool calls and 488 seconds. Every one of the 402 lines is read on every call, and all 12 tools are considered even when only one applies. The point made is that more is not the problem; carrying all of it all the time is.

## Three levers: tools, skills and subagents

The video describes three levers that trade cost for control.

- Tools are stateless calls: ask, get an answer, decide what to do next.
- Skills are instructions that load only when they are needed.
- Subagents get a separate context window for a task that needs full autonomy.

Applying them to the example, the 402-line prompt splits. The core shrinks to 15 lines covering only the role, the decision logic and the output format. Five skill modules, for reorder policy, forecasting, notifications, vendor lookup and audit logging, load only when a task calls for them.

## Complexity hides behind the interface

The video then shows what a skill call looks like. The core issues one instruction, such as "run the forecasting skill". On the other side of that line the skill loads its own 200-line sub-prompt, does its own reasoning and returns a single result. The core never touches those lines, so the complexity stays behind the interface and out of the main context.

## The same sweep, decomposed

Back to the original task, the decomposed version runs as three scripts in about 100 seconds, with the same correctness. That is roughly five times faster than the 488-second original. The video attaches a clear caveat: the five-times figure and the roughly 100 seconds are one team's measurement on one workflow. How much anyone gains depends on how cleanly their own task splits into bounded pieces.

## When splitting helps and when it hurts

The video describes both directions. Decomposition works when the pieces are genuinely separable, such as a lookup, a policy check or a template, each bounded enough to hand to a tool or a skill on its own. It flips when the task is one continuous judgment call. Splitting that kind of task only adds a boundary to cross, and the back-and-forth can cost more than the single large prompt ever did. The closing line sums it up: faster agents do not know less, they load only the knowledge each task needs, exactly when it needs it.

## Key takeaways

- A long prompt and many tools slow an agent because all of it is read and considered on every call.
- Tools, skills and subagents are three ways to trade cost for control.
- Skills keep instructions out of the core prompt until a task needs them.
- A skill call hides its own sub-prompt and reasoning behind a single instruction and result.
- In the example, 102 tool calls and 488 seconds became three scripts and about 100 seconds.
- The five-times speedup is one measurement on one workflow, not a guaranteed multiplier.
- Splitting works for separable pieces and backfires on one continuous judgment call.

## Try it yourself

Take your own agent's system prompt and paste it into Claude with this request: find the lines that are decision logic versus the lines that are domain knowledge, split the knowledge into skills the agent loads on demand, and estimate the token and latency difference. Then check whether your task really splits into bounded pieces before you commit to the new structure.
