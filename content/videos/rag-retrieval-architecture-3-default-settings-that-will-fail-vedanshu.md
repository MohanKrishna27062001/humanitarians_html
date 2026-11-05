---
title: "RAG Retrieval Architecture: 3 Default Settings That Will Fail | Vedanshu"
seoTitle: "RAG Retrieval Architecture: 3 Default Settings That Fail"
description: "See why chunk size, vector search recall, and hybrid retrieval are design choices with no safe default, and how to test each one on your own data."
summary: "Vedanshu Patel, a fellow at Humanitarians AI, recaps three chapters on chunking, approximate vector search, and hybrid retrieval. In each, the convenient default failed a measurement, so each setting needs an empirical test on your own data."
keywords: ["rag retrieval design choices explained", "no safe default chunk size", "approximate vector search recall trade-off", "hybrid search reciprocal rank fusion failure", "sparse vs dense retrieval differences", "why hybrid retrieval can be worse", "how to test rag settings on your data", "rag architecture tuning without defaults"]
generated: "article"
---

Three chapters, three builds: where to cut a document, how to search 100,000 vectors, and which kind of match to trust. Each looked like it should have a single best answer. In this video, Vedanshu Patel, a fellow at Humanitarians AI, recaps all three and finds that the honest answer has the same shape each time: these are design problems, and in all three the convenient default did not survive contact with a measurement.

## Chunking has two failure modes

The first decision is chunking. Too small, and a chunk loses the context that gave it meaning: "five days per year" leaves the question of five days of what. Too large, and one fact gets diluted among everything around it. The chapter refuses to name a correct size, and the video says it is right to, because the axis has two failure modes and no marked middle.

## Approximate search is a dial

The second decision is searching 100,000 vectors. Exact search never misses but does not scale, so you approximate, and the approximation is literally a dial. Compare a third of one percent of the collection and you get a third of the true neighbors back. Compare 10 percent and you get 96. You pick the point on that curve, trading recall for speed.

## Hybrid retrieval is not automatically safe

The third decision is which kind of match to trust. Sparse retrieval matches literal words, such as an exact policy code. Dense retrieval matches meaning, such as a paraphrase. Hybrid, the combination that is supposed to be the safe default, was the one that missed in this run. Only plain dense retrieval got both queries right.

The video explains how hybrid lost. Reciprocal rank fusion sums 1 over 60 plus each rank. The wrong passage was sparse's confident number one, while the right one was only sparse's third. The scores came out at .03252 against .03227, so a quarter of a thousandth decided it. Fusion counted ranks and never reasoned about either list.

## What the three chapters add up to

- Where you cut decides what can be found, and no size is universally correct.
- Approximate search trades recall for speed, and the trade is a number you set.
- Sparse and dense fail on different queries. Combining them usually helps, but this run was one of the times it did not.

Three layers, three trade-offs, and not one ships with a default you can install and forget.

## Ask what would prove each choice wrong

The video's closing advice is practical. Anything will hand you best practices. Asking what would falsify each choice, and what the cheap version of that test costs, turns three inherited defaults into three decisions you can defend.

## Key takeaways

- Chunk size, recall setting, and retriever type are design choices rather than defaults.
- Too-small chunks lose context, and too-large chunks dilute facts.
- Approximate search is a dial: about a third of 1 percent compared gave a third of true neighbors, and 10 percent gave 96.
- Sparse matching suits exact codes, and dense matching suits paraphrase.
- Reciprocal rank fusion counts ranks and can promote a confident wrong passage.
- In the run shown, plain dense retrieval beat hybrid on both queries.

## Try it yourself

Paste a prompt into Claude listing the three retrieval decisions you made by default: your chunk size, your index's accuracy setting, and your choice of retriever. For each one, ask what measurement would prove it wrong on your data and what the cheapest version of that measurement looks like.
