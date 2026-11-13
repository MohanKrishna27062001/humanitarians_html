---
title: "How Agentic Systems Work (And How to Make Them Fail Safely)"
seoTitle: "How Agentic AI Systems Work and Fail Safely"
description: "Mubin Modi explains four layers of oversight for AI agents, using an appointment-rescheduling example, typed parameters and full-trace evaluation."
summary: "A chatbot that is wrong gives you bad text, but an agent that is wrong cancels your appointment. Mubin Modi shows four oversight layers, typed fields instead of free text, and why a grader must read the whole trace."
keywords: ["how do agentic ai systems work", "ai agent oversight layers explained", "make ai agents fail safely", "typed parameters vs free text agents", "prompt injection and tool call validation", "evaluate agent trace not final answer", "human approval before agent action", "ai agent reschedule appointment example"]
generated: "article"
---

You may have used a chatbot that rescheduled something for you, and it worked. Mubin Modi's video asks the question people rarely ask: what happens when it does not? A chatbot that is wrong hands you bad text, but an agent that is wrong cancels your appointment. The video opens up what sits behind the green check mark, using an appointment example.

## Why oversight, not a better model

The video's central claim is that an agent fails because the model acted and no one checked. The fix is therefore oversight rather than a better model. Everything that follows is that oversight, built one layer at a time. The agent is never the final word on its own action.

## The four layers

Changing a calendar entry is reversible enough to automate carefully, so the video builds a four-layer structure around it. First, the agent proposes the action. Second, code checks that the slot is real and that the appointment belongs to you. Third, you approve explicitly. Only then does the tool run. Each of the four layers catches a different kind of failure.

## Following one sentence through

The example sentence is "Move my Tuesday appointment to Thursday afternoon." The system classifies the intent as reschedule rather than cancel, resolves which appointment is meant, checks whether Thursday is open, gets a yes, and then writes the change. Broken into ordered steps, each one is testable on its own. Left whole, it is a single guess that can only be graded at the end.

## Typed fields, not free text

Layer two can only check what it can see. So the agent never hands the back end the raw sentence. It hands over specific fields: which appointment, what new time, why, and whether confirmation is required. Free text arriving at a system cannot be validated and is an injection surface. Narrow typed parameters are what turn a tool call into something code can check before it runs.

## The failure that survives

Even with all of that, one failure remains. Every step returns clean, and the final message reads that your appointment is confirmed for Thursday. No exception was thrown, and it is still wrong, because step five never checked the 24-hour rescheduling policy. Grade the last sentence and this passes. Grade the whole trace step by step and it does not. The video describes that as the difference between a demo and production.

## Wrong safely

Rescheduling one appointment touched almost all of it: four layers between the agent and the calendar, one sentence broken into ordered testable steps, typed fields so code has something to check, and a grader that reads the whole trace. None of this exists because the model is bad. It exists because acting in the real world means being wrong safely.

## Key takeaways

- A wrong chatbot produces bad text; a wrong agent takes a bad action.
- Agents fail when the model acts and nobody checks, so the fix is oversight.
- The four layers are proposal, code validation, explicit human approval, and tool execution.
- Break a request into ordered steps so each can be tested on its own.
- Pass typed fields rather than raw text, which code can validate and which limits injection.
- A clean final message can hide a skipped rule such as a 24-hour rescheduling policy.
- Evaluate the whole execution trace, not only the last sentence.

## Try it yourself

Take one action your agent can perform on a real system and write the four layers for it: what the agent proposes, what code can validate before it runs, what the human must explicitly approve, and what the tool actually executes. Then name one failure that gets through all four. Check your answer three ways. Is layer two a check code could actually run? Is the approval explicit rather than inferred? Would your logs catch the failure you named?
