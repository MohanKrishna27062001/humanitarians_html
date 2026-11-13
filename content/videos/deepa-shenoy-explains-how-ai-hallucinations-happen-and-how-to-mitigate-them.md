---
title: "Deepa Shenoy explains: How AI Hallucinations Happen and How to Mitigate Them"
seoTitle: "How AI Hallucinations Happen and How to Reduce Them"
description: "Deepa Shenoy explains why language models can sound confident and still be wrong, and which checks reduce the risk of hallucination."
summary: "Deepa Shenoy explains that a hallucination is a fluent answer containing false or unsupported information, and that plausible wording is not evidence. A made-up country example shows the gap, followed by mitigation steps and a source-citation exercise."
keywords: ["why do ai models hallucinate", "what is an ai hallucination", "plausible is not verified ai", "how language models predict tokens", "reduce ai hallucinations with sources", "ask ai to cite passages", "check ai answers against sources", "invented citations from ai"]
generated: "article"
---

In this video Deepa Shenoy, with narration by Liam on her behalf, looks at how AI can sound confident and still be wrong. A language model can give a convincing answer without checking every claim in it. The video explains why plausible wording and verified facts are different things, and calls that difference the gap.

## What a hallucination is

An AI hallucination is a fluent answer that includes false or unsupported information. The fluency is what makes it hard to catch, since the sentence reads as well as a correct one would. The video's point is that how an answer sounds tells you little about whether it is true.

## Why it happens

A language model predicts tokens from patterns learned during training. That process can produce useful text. But ordinary generation does not automatically check each new claim against a trusted source. The model is following patterns, not looking facts up, so a claim can be produced because it fits the pattern even when nothing supports it.

## A made-up example

To make the gap concrete, the video uses a fictional country called Belora. Asked for its capital, an AI confidently answers Lumen. Both names are invented, so there is no capital to find, yet the answer arrives in a confident sentence. The lesson drawn from it is that a confident sentence is not evidence.

## Why it matters

This matters when people rely on invented citations, instructions or details in consequential decisions. A made-up reference or a wrong instruction is just as easy to read past as a correct one, and the cost shows up later, when someone acts on it.

## What reduces the risk

The video lists a few steps:

- Check important claims against reliable sources.
- Give the model useful context.
- Use retrieval, which can bring relevant documents into an answer when appropriate.

It is careful about the limits. These steps reduce risk, but they cannot guarantee truth. The summary line is to remember that plausible is not verified, and to treat important claims as questions to check.

## A prompt exercise

The video ends with a practical test you can run with Claude. Ask it to answer your question using only the sources you paste, and to cite each claim to a passage. Have it mark unsupported claims. Then remove one source and compare the two answers. The comparison shows which claims depended on the source you removed, and whether the model is willing to say that something is no longer supported.

## Key takeaways

- A hallucination is a fluent answer that includes false or unsupported information.
- Language models predict tokens from patterns learned during training.
- Ordinary generation does not automatically check each claim against a trusted source.
- A confident sentence is not evidence.
- Invented citations, instructions and details are especially risky in consequential decisions.
- Checking sources, giving context and using retrieval can reduce risk but cannot guarantee truth.
- Treat important claims as questions to check.

## Try it yourself

Run the exercise from the video on your own question and your own sources. Paste the sources, ask Claude to answer using only those and to cite each claim to a passage, and have it mark any unsupported claims. Then remove one source and compare what changes in the answer.
