---
title: "The 402-Line Prompt: How Decomposition Makes Agents 5x Faster"
seoTitle: "Agent Decomposition: Tools, Skills, Subagents"
description: "How splitting a 402-line agent prompt into tools, skills, and subagents loaded on demand cut one low-stock sweep from 488 seconds to about 100."
summary: "A slow agent does not need more tools and instructions. In one measured case, a 402-line prompt with 12 tools took 102 tool calls and 488 seconds, and decomposing it into skills and scripts cut the run to about 100 seconds with the same correctness."
keywords: ["why is my ai agent slow", "split long system prompt into skills", "agent tools vs skills vs subagents", "load agent instructions on demand", "reduce agent tool calls and latency", "agent prompt decomposition example", "when not to split an agent", "claude skills for long prompts"]
generated: "article"
---

A slow, expensive agent tempts you to add more: more tools, more context, more instructions packed into the system prompt so it never misses a case. This video argues the opposite. One measured case shows that cutting what loads on every call, while keeping the same knowledge, can make an agent about five times faster.

## The wrong guess: add more

The natural fix for an agent that works but is slow is to add more of everything. The video holds on to one case that breaks that guess: a 402-line prompt with 12 tools, doing one task, a daily low-stock sweep. It took 102 tool calls and 488 seconds.

## Why more is the problem

Every one of those 402 lines is read on every call, and all 12 tools are considered even when only one applies. The video's diagnosis is that more is not the problem. Carrying all of it, all the time, is.

## Three levers

The video names three levers that trade cost for control:

- Tools: stateless calls that ask, get an answer, and decide what to do next.
- Skills: instructions loaded only when needed.
- Subagents: a separate context window for a task that needs full autonomy.

The 402-line prompt splits accordingly. The core shrinks to 15 lines covering the role, the decision logic, and the output format. Five skill modules, for reorder policy, forecasting, notifications, vendor lookup, and audit logging, load only when a task needs them.

## Complexity hides behind the interface

A skill call looks simple from the core. It issues one instruction, such as run the forecasting skill. On the other side of that line, the skill loads its own 200-line sub-prompt, runs its own reasoning, and returns one result. The core never touches those lines, so the complexity stays hidden behind the interface.

## The same sweep, decomposed

Back to the low-stock sweep. The same task that took 102 tool calls and 488 seconds now runs as three scripts in about 100 seconds, with the same correctness, roughly five times faster.

## An honest caveat and a limit

The video flags that these numbers are one team's measurement on one workflow. How much you gain depends on how cleanly your own task splits into bounded pieces. Decomposition works when the pieces are genuinely separable, such as a lookup, a policy check, or a template. It flips when the task is one continuous judgment call, because splitting that just adds a boundary to cross, and the back-and-forth can cost more than the single large prompt did.

## Key takeaways

- Adding more tools, context, and instructions is not the fix for a slow agent.
- A long prompt is read on every call, and every tool is considered each time.
- Tools, skills, and subagents are three levers that trade cost for control.
- Skills load their instructions only when a task needs them.
- In the example, a 402-line prompt shrank to a 15-line core plus five skill modules.
- The sweep fell from 102 tool calls and 488 seconds to three scripts and about 100 seconds.
- Decomposition helps when pieces are separable and can hurt for one continuous judgment call.

## Try it yourself

Paste this into Claude: "Here is my agent's system prompt. Find the lines that are decision logic versus the lines that are domain knowledge, split the knowledge into skills the agent loads on demand, and estimate the token and latency difference." Run it on your own agent and find your split.
