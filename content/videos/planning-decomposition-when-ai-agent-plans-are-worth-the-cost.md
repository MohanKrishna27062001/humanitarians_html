---
title: "Planning & Decomposition: When AI Agent Plans Are Worth the Cost"
seoTitle: "When Is Planning Worth It for AI Agents? Cost Math"
description: "Work through the call-count math of plan-first versus step-by-step AI agents, and learn the three conditions a plan must meet to be worth its cost."
summary: "Adwait Changan prices two ways an agent can handle a multi-step task and shows how the savings from planning shrink when reality diverges. He gives a three-part test for when a plan is worth writing and warns about plans that are written and then ignored."
keywords: ["when should an ai agent plan", "plan first vs step by step agents", "ai agent planning cost trade-offs", "how many model calls does planning save", "agent plan fails at step one", "load bearing plan vs decorative plan", "three rules for agent planning", "does my ai agent actually use its plan"]
generated: "article"
---

Most agent frameworks plan by default, and almost none ask whether planning is worth it for the task in front of them. In this video, Adwait Changan prices the choice out in model calls and arrives at a simple test for when breaking a task into steps pays off and when it is pure overhead.

## Two ways to approach a multi-step task

An agent can approach a task with several steps in only two ways. It can write the whole plan first and then run it, or it can decide one step, run it, look at what happened, and decide again. Everything else is a blend of the two. The video argues that the choice looks like a style preference but is really a bet, so it is worth pricing.

## The call math when nothing goes wrong

Take an eight-step task. Plan-then-execute needs one call to write the plan and eight to run it, which is nine calls. Step by step needs a call to decide and a call to act at every step, which is 16. Planning saves seven calls, close to half the work. The video calls that a real advantage and the reason frameworks default to planning.

## What a plan costs when it is wrong

That number assumes nothing surprises you. A plan is written before the agent has touched anything, so every step after the first is a guess about a world it has not looked at yet. The honest question, the video says, is what a plan costs when it turns out to be wrong.

It runs the same task with something going wrong at step K. If the failure comes at step eight, planning still wins comfortably. If it comes at step four, the margin is thin. If it comes at step one, planning costs 18 calls against 18 for step by step. The entire advantage is gone, because all eight planned steps described a world that no longer exists.

## The three-condition test

The video turns this into a test that can be run before writing any planner. Planning earns its call only when all three of these hold:

- The steps are expensive or hard to undo.
- The world is stable enough that the plan survives contact with it.
- The steps actually depend on each other, because order is the only thing a plan really buys you.

Changing any one of those to false flips the answer to "do not plan." In plain terms: plan when a wrong step is expensive to take back, when the ground is not moving under you, and when step four genuinely cannot happen before step three. Otherwise take one step and look, since looking is the cheapest information an agent can buy.

## Load-bearing plans versus decorative ones

The video names a common failure mode: a plan that is written, shown to the user, and then quietly ignored while the agent improvises anyway. That is the worst of both worlds. You paid for the plan, you got the step-by-step call count, and you handed someone a document that does not describe what happened.

So the useful question about any agent is not whether it plans but whether the plan is load-bearing. Does anything consult it after step one? If nothing does, the video says, it is not a plan. It is a paragraph.

## Key takeaways

- An agent either plans first and executes, or decides and acts one step at a time.
- On an eight-step task, planning takes nine calls against 16 when nothing goes wrong.
- The advantage shrinks the earlier reality diverges from the plan and reaches zero if step one fails.
- A plan earns its cost only if steps are expensive, the world is stable, and the steps depend on each other.
- All three conditions are required, not two, and most tasks handed to agents do not meet them.
- A plan that is displayed but not consulted costs you twice and cannot be audited.
- The next topic in the series is grounding and retrieval.

## Try it yourself

Take an agent you are building and ask Claude whether it plans. If it does, have Claude answer three things: how many steps it commits to before looking at anything, what happens to those steps when step two fails, and whether any code reads the plan after step one. The video notes that the third question is the uncomfortable one.
