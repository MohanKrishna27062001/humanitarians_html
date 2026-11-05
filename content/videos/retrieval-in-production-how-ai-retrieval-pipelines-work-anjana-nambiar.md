---
title: "Retrieval in Production | How AI Retrieval Pipelines Work | Anjana Nambiar"
seoTitle: "How Production AI Retrieval Pipelines Work in Six Stages"
description: "Anjana Nambiar walks through the six stages of a production retrieval pipeline and how each stage spends a shared latency budget in milliseconds."
summary: "A production retrieval pipeline is more than embed, store, retrieve. The video walks through six stages between a user's question and the context a language model receives, and shows how each one competes for a roughly 500 millisecond latency budget."
keywords: ["how production retrieval pipelines work", "six stages of rag retrieval pipeline", "query rewriting hyde step-back decomposition", "cross-encoder reranker vs bi-encoder", "retrieval latency budget 500 milliseconds", "approximate nearest neighbor index hnsw", "metadata filtering in retrieval pipeline", "conditional query rewriting low confidence"]
generated: "article"
---

Most explanations of retrieval stop at three words: embed, store, retrieve. Anjana Nambiar argues in this video that a system that actually serves traffic has six stages, and that every stage spends from the same budget, measured in milliseconds. A production retrieval pipeline is not simply a search of a vector database.

## The six stages

Between a user's question and the context that reaches the language model, the video lists six stages: embed the query, search the index, rewrite and retry if needed, rerank the candidates, filter by metadata, and assemble the final context. Each stage adds latency, and each exists because skipping it degrades the answer.

## Embedding and searching the index

In stage one, the query goes to an embedding model, which converts the text into a dense vector, a list of numbers that captures its meaning. The video puts this at 5 to 15 milliseconds. In stage two, that vector searches an index. Approximate nearest neighbor algorithms such as HNSW and IVF trade a small amount of recall for speed, and from millions of stored vectors the index returns top candidates in under 50 milliseconds. These two stages are fast, but the video calls them only the starting point.

## Rewriting the query, but only when needed

A user's question is rarely the best search query, so a query rewriter can transform it before or after the first retrieval. The techniques named are:

- HyDE, which generates a hypothetical answer and embeds that instead,
- step-back prompting, which generalizes the question to retrieve broader context, and
- query decomposition, which splits a complex question into subqueries.

Rewriting adds 50 to 200 milliseconds if it calls a language model. For that reason, production systems apply it selectively, only when initial retrieval scores fall below a confidence threshold.

## Reranking and filtering

The initial search ranks candidates by vector similarity, a bi-encoder score. A cross-encoder reranker then reads each candidate alongside the original query and produces a more accurate relevance score. This is expensive because the cross-encoder processes each pair independently, so it runs on the top 20 or 50 candidates rather than the full index.

After reranking, metadata filters remove candidates that fail hard constraints such as date ranges, document types and access permissions. The result is a short, high-quality list. The video notes that filtering costs almost nothing and is non-negotiable, because permissions are not a ranking signal.

## Spending the latency budget

The typical production target is under 500 milliseconds of total retrieval latency. Embedding and search take about 50, rewriting adds up to 200 when triggered, reranking costs about 80, and filtering is near zero. That leaves room for network overhead and the occasional retry. The architecture is a sequence of tradeoffs, precision against speed and recall against latency, and the pipeline that ships is the one that fits the budget.

## Key takeaways

- A production pipeline has six stages, not three.
- Embedding and index search are cheap, about 50 milliseconds together.
- Query rewriting is the costliest step, so it is conditional on weak first-pass scores.
- Reranking with a cross-encoder is paid every time and runs on only the top 20 or 50 candidates.
- Metadata filtering is nearly free and enforces permissions.
- A typical target is under 500 milliseconds total retrieval latency.
- Every stage trades precision or recall against speed.

## Try it yourself

Take a search you already run, such as a help center, internal wiki or product catalog, and work out which of the six stages you actually have. The video says most systems have two. Then decide what your latency budget really is, and which stage you would add first if you had 100 milliseconds to spend. Paste that into Claude and pay attention to where it tells you a stage is not worth adding.
