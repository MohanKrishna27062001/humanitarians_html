---
title: "Six Agent Variants: How to Measure What Prompt Changes Actually Do"
seoTitle: "How to Measure Prompt Changes With Agent Evals"
description: "A two-layer eval of code checks plus an LLM judge shows what prompt edits really change in a slide-writing Claude agent, and what a model swap does."
summary: "Glancing at a new deck next to the old one is not a measurement. The video shows a two-layer eval for a slide-writing Claude agent, with code graders and an LLM judge, run across four rounds of prompt changes against a pinned baseline."
keywords: ["how to test prompt changes", "evaluate claude agent prompt versions", "code graders and llm judge", "agent evals fixed test set", "pinned baseline for prompt evaluation", "prompt rule vs model swap", "measure ai agent improvement", "eval driven agent development"]
generated: "article"
---

You keep editing the system prompt of a Claude agent that writes slide decks, hoping each version beats the last. The natural way to check is to open the new deck next to the old one and ship it if it looks cleaner. This video argues that a glance is not a measurement, and shows what testing a prompt change looks like round after round.

## Why a glance fails

The setup is a slide-writing agent that is run on five different topics each time. The video holds on to one example. A slide-writing rule says every slide must carry a real diagram, and one grader does nothing but count whether that happened. A glance also will not catch a nine-point caption sitting under the ten-point font floor on slide four. A code grader that parses the file's actual font sizes catches it in milliseconds, with no eyeballing.

## Layer one: code checks

The eval runs in two layers. The first parses the deck file directly and checks slide count, images present, cluttered slides, tiny fonts, and stray emoji. There is no model call, and each check passes or fails in milliseconds. Each one is a plain fact: present or not.

## Layer two: an LLM judge

The second layer hands the rendered slide images to an LLM judge. The judge scores text, imagery, layout, color, and whether the title actually matches the body beneath it. Code checks cover defects that can be proven at parse time. The judge covers what a rule cannot express.

## Three rounds, one rule each

Each round builds on a naive baseline, and every version is run against the same five fixed tasks and the same pinned baseline:

- Round one tightens typography and trims word count.
- Round two adds the mandatory diagram.
- Round three adds a QA loop. The agent rasterizes its own deck, inspects every slide for overlap and overflow, fixes what it finds, and checks again before it is done.

## The round that breaks the pattern

Round four drops every one of those rules and goes back to the plain prompt, but on a stronger model. When the diagram grader is checked again, it is empty again. The point of the video is that this rule only ever lived in the prompt, so a rule that lives only in the prompt does not survive a model swap.

## Both directions

When a code check fails, such as a missing diagram or a caption under the size floor, that is a concrete defect proven the moment the file is parsed, and no judgment call is needed. The reverse is also true. Passing every code check does not mean the deck is good. A slide can hit every rule and still fail to explain the idea, which is exactly what the LLM judge is there to catch.

## Key takeaways

- Comparing two outputs by eye is a glance, not a measurement.
- Layer one is code that parses the output file and returns pass or fail with no model call.
- Layer two is an LLM judge scoring the rendered result against a rubric.
- Run every version against the same fixed test set and the same pinned baseline.
- A rule that exists only in the prompt may not survive a change of model.
- Passing all code checks does not prove the output is good.
- Swapping the model is a separate lever from editing the prompt.

## Try it yourself

Take an agent you are iterating on. Freeze one fixed test set of real inputs, write one code check that is just a plain fact, present or not, and write one rubric a judge model can score from the rendered result. Run every version, including one where you swap the model instead of the prompt, and ask what actually moved and what only looked like it moved.
