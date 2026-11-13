---
title: "Mycroft: Testing Pipeline Shadows & The Stages That Stayed Dark"
seoTitle: "Negative Assertions: Test That Pipeline Stages Never Ran"
description: "Why output-only tests miss a broken pipeline, and how assertions on stages that must not run catch early-halt bugs in an agentic insurance claims pipeline."
summary: "Tanmay Kulkarni shows a reference claims pipeline with 28 passing tests, then breaks it with a one-line change that no output assertion catches. Eight negative assertions on stages that must stay dark are what reveal the fault."
keywords: ["negative assertions for pipeline testing", "test that a stage was not called", "output assertions pass on broken pipeline", "testing agentic claims pipeline", "assert early halt skips later stages", "mock call assertion in python tests", "auditable trail does not prove correct behavior", "test every condition that stops a pipeline"]
generated: "article"
---

A passing test tells you what your system did, but nothing about what it did on the way there. Tanmay Kulkarni uses a travel insurance claims pipeline, a reference implementation built for a Zurich agentic AI case study, to show why. It has 28 tests, all passing, and eight of those assertions check something different from what the pipeline produced: they check which stages never ran.

## The happy path is the least interesting path

A claim arrives with three documents: a cancelled flight, a hospital receipt in another language and a note asking for the cost of a missed tour. It moves through intake, extraction, coverage check, authorization and resolve. All five stages light up and the claim resolves. That is the whole happy path, and the video calls it the least interesting thing the pipeline does.

## A claim that stops early

In the second claim, the hospital receipt comes back with an extraction confidence of 0.4, below the threshold. Intake passes and extraction halts. The claim escalates to a human with a named reason, low extraction confidence, and three stages never run: coverage check, authorization and resolve. The question of the video is how you would prove those three stages stayed dark. The obvious test runs the claim and asserts that the status is escalated and the reason is correct. That test passes and is a good test, but it cannot answer the question.

## Breaking the pipeline gently

To show the gap, Tanmay moves one line up four lines, so the coverage check runs before the extraction halt is honored. Running the same claim gives the same status, reason and detail string, and the output is byte for byte identical, so every output assertion still passes. What changed is that the broken pipeline fetched the customer's policy record for a claim that should have stopped a stage earlier. In a claim system, looking up a policy is an event that is neither free nor invisible.

One assertion catches it: patch the coverage check, run the claim and assert it was not called. On the correct pipeline that passes, and on the broken one it fails. It is the only test in the suite that does, so 27 of the 28 still pass on a wrong pipeline.

## The shrinking shadow

The eight assertions follow a pattern. A document without a language tag halts at intake, so three stages must stay dark: extraction, coverage and the gate. A low-confidence extraction halts there, leaving two stages dark. A claim with no matching policy halts at coverage, leaving only the gate dark. Three, then two, then one: the further a claim travels, the smaller the shadow behind it, and the assertion shrinks to match.

## The fourth condition: a malformed gate decision

The remaining two assertions cover a different case. The authorization gate takes a decision function. If it returns something malformed, such as a string that is not a decision, the pipeline must reach neither outcome, not resolve and not escalate. Escalating would look safe, since a human gets the claim, but a broken gate would then be indistinguishable from a busy Tuesday, and nobody would find out.

## What an audit trail cannot tell you

The one property Zurich confirms about the system is an auditable trail of the reasoning behind decisions. The broken pipeline's trail would be accurate, because it really did fetch that record. A trail says what happened and cannot say it should not have.

## Key takeaways

- Output assertions can pass on a pipeline that does extra, wasteful work.
- A negative assertion checks that a stage was never called.
- Moving one line up four lines left the output identical, and only the negative assertion failed.
- The expected shadow shrinks as a claim travels further, so assertions match the stage where it halts.
- A malformed gate decision should reach neither resolve nor escalate.
- An accurate audit trail does not prove the right things happened.
- The technique only applies where a pipeline stops early; on the happy path the broken and correct builds behave the same.

## Try it yourself

Take your own pipeline and, for every condition that stops it early, name the stage that must not run. Then write the line that fails if it does. The repository is linked in the video description, with 28 tests using only the standard library and no pytest needed.
