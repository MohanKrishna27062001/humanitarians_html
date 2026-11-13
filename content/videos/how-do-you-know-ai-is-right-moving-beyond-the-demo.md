---
title: "How Do You Know AI Is Right? Moving Beyond the Demo"
seoTitle: "How to Tell If an AI Answer Is Actually Correct"
description: "Asavari explains why a polished AI demo is not evidence, and what an honest evaluation needs: an answer key, an independent grader and a held-out test."
summary: "Asavari, a fellow at Humanitarians AI, explains the fundamentals of evaluating AI output. The video shows why fluency and confidence can fool a gut check, and how answer keys, independent grading and honest test sets create real evidence."
keywords: ["how to evaluate ai answers properly", "why ai demos are not evidence", "ai fluency versus correctness", "write ground truth before running model", "why a model cannot grade itself", "how to build an honest test set", "held out test set for ai", "questions to ask before trusting ai"]
generated: "article"
---

Every AI demo looks impressive, but looking good and being right are different things. In this short video, Asavari, a fellow at Humanitarians AI, asks a practical question: how do you actually know an AI's answer is correct and not just convincing? The video is aimed at anyone who has to trust or approve an AI system's output.

## Why a good demo is not evidence

The video's starting claim is that you cannot know a model is right by admiring its output. When you judge an answer by reading it, you reward what is easy to fake: fluency, confidence and official-sounding citations. None of those is correctness. A model that has learned to sound thorough can pass your gut check while being wrong, and you approve it.

## Write the answer key first

The fix begins before the model runs. The video says to write the ground truth, the answer key, in advance so that it cannot be contaminated by the model's output. Only then should the model produce its answers, so there is something fixed to compare against.

## Let something independent do the grading

The second rule is that the thing being tested cannot be its own judge. If a model checks its own work, the video explains, it grades against its own assumptions and passes. An independent key catches what the model cannot see in itself.

## Make the test set honest

An evaluation is only as good as its answer key. If the test is easy, or you keep tuning against the same test, you end up with a great-looking score that means nothing. The video asks for a test set that is honest, held out, representative and hard. A number you optimize directly against is not evidence; the video calls it a mirror.

## Questions to ask before you trust a system

The video closes with a short checklist for looking past the demo and asking for the evaluation:

- Is there an answer key written before the output?
- Is the grader independent?
- Could the test have been gamed?
- Would the result survive on unseen data?

Its one-line summary is that a demo is a show, while an evaluation is evidence, so ask for the evidence.

## Key takeaways

- Looking good and being right are different things, and you cannot judge correctness by admiring output.
- Fluency, confidence and official-sounding citations are easy to fake and are not correctness.
- Write the ground truth before the model runs so the key cannot be contaminated.
- The system being tested should never grade its own output.
- A test set should be honest, held out, representative and hard.
- Tuning against the same test produces a score that is a mirror, not evidence.
- Before trusting an AI system, ask to see the evaluation, not just the demo.

## Try it yourself

Pick an AI tool you are about to rely on and ask the four questions from the video. Find out whether an answer key was written before the outputs, who or what did the grading, whether the test could have been gamed, and whether the result would hold on unseen data. If you cannot get answers, treat what you saw as a show rather than evidence.
