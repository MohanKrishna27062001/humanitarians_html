---
title: "Extract, Don't Decide: Using LLMs for Structured Signal Extraction | Mycroft"
seoTitle: "Use an LLM to Extract Structured Signals From News"
description: "How a LangChain pipeline turns raw news headlines into typed, confidence-scored signals while a human keeps the final decision."
summary: "Amruta Naik shows how she used a language model to read news headlines and return typed fields with a confidence score, while leaving every judgment to a human reviewer. The rule she keeps: the model reads, it never decides."
keywords: ["extract structured data from headlines with llm", "langchain structured output schema example", "llm confidence score for extracted signals", "human validation of ai extracted data", "use llm to read not decide", "classify news headlines by signal type", "prevent llm from inventing dates and amounts", "human in the loop llm pipeline"]
generated: "article"
---

A pipeline that gathers news headlines about a company still has a problem: a raw headline is just text, and a scoring system cannot do anything with it. In this presentation, Amruta Naik describes how she taught a language model to turn headlines into structured signals, under one firm rule. The model reads, and it never decides.

## Why raw headlines cannot be scored

Her agent collected headlines about a company, but every one arrived tagged the same generic way, as a news mention. That label is not enough to score anything. Someone has to read each headline and judge what kind of event it describes: a funding round, a layoff, a security breach, an executive change. A headline such as "OpenAI safety employee resigns" is only text until someone decides which category it belongs to.

Doing that judgment by hand across hundreds of headlines does not scale. But handing the judgment entirely to an AI is exactly what the project refuses to do. The question was where to draw the line.

## Drawing the line: the model reads, it never decides

The line was drawn carefully. The language model is used to extract structure. It reads the headline, decides what type of signal it is, pulls out any amount or date, and rates its own confidence. Then it stops. It does not score risk, and it does not decide that a signal is true. A human still validates the result before anything counts.

## Forcing typed fields with LangChain

To make this reliable, the pipeline uses LangChain to force the model to return clean, typed fields instead of loose text. The schema asks for exact fields rather than a paragraph:

- the signal type
- any dollar amount
- any date
- a confidence score from 0 to 100
- one line of reasoning

The prompt also carries a hard instruction: never invent an amount or a date that is not in the headline. If the model is unsure, it must say so with low confidence instead of making something up.

## Testing on two real headlines

The video then shows the model reading two real headlines. For the first, "OpenAI safety employee resigns," the model typed the signal as an executive change, gave a confidence of 70, and explained that a resignation is a personnel change. The second was a vague headline about superintelligence. The model typed it as a plain news mention with a confidence of 20, and its reasoning noted that there was no funding, no layoff and no real event.

The gap between 70 and 20 matters. The model did more than classify: it indicated how much to trust each result.

## The unvalidated signal rule

Both extracted signals, the confident one and the vague one, came out marked unvalidated. The model read them, typed them, scored its own confidence, and then stopped. It does not get to say they count. A human reviews the confidence, checks the reasoning, and makes the decision. In Naik's phrasing, the AI made the human faster, not absent. That, she says, is the difference between a tool you can trust and one you cannot.

## Key takeaways

- A raw headline cannot be scored until someone converts it into a structured signal.
- Use the language model to extract structure: signal type, amount, date, confidence and reasoning.
- Enforce a typed schema so the model returns fields, not free text.
- Tell the model never to invent an amount or date, and to report low confidence when unsure.
- A self-reported confidence score tells the reviewer how much to trust each result.
- Mark every extracted signal as unvalidated until a human has checked it.
- Let the model do the tedious reading at scale, and keep the judgment with a person.

## Try it yourself

If you are putting an LLM into a workflow, ask one question about each step: is it reading or is it deciding? Reading means pulling structure out of messy text, where mistakes are cheap because a human checks them. Deciding means letting the model make the final call unchecked, which is where trust breaks. Pick one step in your own workflow and move any final decision back to a person.
