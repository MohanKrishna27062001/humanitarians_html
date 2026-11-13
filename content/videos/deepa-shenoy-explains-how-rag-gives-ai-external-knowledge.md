---
title: "Deepa Shenoy explains: How RAG Gives AI External Knowledge"
seoTitle: "How RAG Gives AI Access to External Knowledge"
description: "Deepa Shenoy explains retrieval-augmented generation: retrieve a relevant passage first, add it as context, then generate an answer."
summary: "Deepa Shenoy uses a fictional company remote work policy to explain retrieval-augmented generation. The system retrieves a passage from an approved knowledge base, adds it to the question and then generates, without retraining the model for each question."
keywords: ["what is retrieval augmented generation", "how rag works step by step", "retrieve add context then generate", "rag for private company documents", "does rag reduce ai hallucinations", "ai answers from company knowledge base", "why language models miss private facts", "check ai answer against its source"]
generated: "article"
---

In this video Deepa Shenoy, with narration by Liam on her behalf, explains how retrieval-augmented generation, or RAG, gives AI access to external knowledge. It builds on her earlier video about hallucinations, and it answers a practical question: what does an AI do when it needs a fact it was never trained on?

## What a model may not know

A language model draws on patterns learned during training and on the context it receives. That means it may not know a specific, current or private fact that you need. The video offers a simple case. Imagine asking an assistant, "What is our company's remote work policy?" That policy is private, and it may have changed. A model working only from training has no reliable way to answer.

## Retrieval before answering

With RAG, the system does something before it answers. It searches an approved company knowledge base and retrieves a relevant policy passage. It then adds that passage to the question as context. Now the model has specific information to work from, instead of having to guess.

## The fictional policy example

The video completes the example in a fictional way. If the retrieved policy says remote work is allowed two days a week, the assistant can explain that rule. The answer comes from the passage that was fetched, not from the model's general patterns. The video sums the method up as retrieve first, add context, then generate.

## Where the knowledge comes from

The external sources can include documents, databases or other approved knowledge sources. The video stresses that the model is not retrained for each question. What changes from question to question is the context supplied to it, not the model itself.

## How it connects to hallucinations

The video links RAG to her last video on AI hallucinations. Relevant retrieved context can help reduce unsupported claims. It does not guarantee correctness, though. Retrieval and source quality still matter, because the model can only be as well grounded as the passage it was given. The closing advice is to check the answer against its source.

## Key takeaways

- A model may not know a specific, current or private fact, such as a company's remote work policy.
- RAG retrieves a relevant passage first, adds it to the question as context, and then generates.
- The sources can be documents, databases or other approved knowledge sources.
- The model is not retrained for each question.
- Relevant retrieved context can help reduce unsupported claims.
- RAG does not guarantee correctness, and retrieval and source quality still matter.
- Check the answer against its source.

## Try it yourself

Think of a question in your own work that depends on a private or changing document, like a policy or a price list. Write down which passage a retrieval step would need to find, and then compare any AI answer against that passage to see whether it actually used what the passage says.
