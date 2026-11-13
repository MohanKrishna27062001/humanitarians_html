---
title: "RAG Chunking Explained: Fixed vs Recursive Splitting and Retrieval Quality | Ameya"
seoTitle: "RAG Chunking: Fixed vs Recursive Splitting Explained"
description: "Learn how sliding-window chunking works, why recursive splitting beats fixed character limits, and a simple test for spotting broken chunks."
summary: "Liam, in for Ameya Deshmukh, takes apart a 12-line chunker. The video covers step size, overlap, recursive splitting, the real distribution of chunk sizes, and a read-one-chunk-alone test for broken context."
keywords: ["rag chunking fixed vs recursive splitting", "sliding window chunk size and overlap", "chunk size minus overlap step size", "why recursive text splitting works better", "how to chunk different document types", "test if rag chunks are broken", "chunk size is a ceiling not target", "improve rag retrieval quality chunking"]
generated: "article"
---

Chunking is about twelve lines of code that most people write once and never think about again. It also moves retrieval quality more than almost anything else in a RAG pipeline. In this video, Liam, in for Ameya Deshmukh, builds the chunker with Claude and then takes it apart.

## The sliding window and the step size

When you slide a window across text, the step is not the chunk size. It is the chunk size minus the overlap. That single subtraction is what makes chunks overlap instead of sitting edge to edge. Get it wrong and the chunks either leave gaps or duplicate each other.

The actual twelve lines are a list comprehension, and the part to read is the range step, which is chunk size minus overlap exactly as described. One guard stops the overlap from swallowing the chunk. That is the entire naive chunker.

## Why overlap exists

A fact that lands exactly on a boundary can get cut in half. Overlap is a small insurance policy: repeat a little text at each seam so no sentence is orphaned across the cut, and either neighboring chunk can then answer the question.

## Fixed versus recursive splitting

The naive splitter is blind. It cuts at exactly 400 characters whether that is the end of a sentence or the middle of a word. The production fix is recursive splitting, which tries to break on paragraphs first, then lines, then sentences, then words, and only as a last resort raw characters. Recursive splitting just wraps smarter separators around the same idea.

The video points out a result that surprises people. With the same chunk size and the same overlap, recursive splitting produced 10 chunks where the fixed splitter produced eight. It stops at a sentence boundary even when there is room left in the budget, rather than packing text up to the limit.

## What real chunk sizes look like

Because of that behavior, chunks are not uniform. In the project's 1,500 chunks, the distribution was bimodal: a tall cluster of short pieces such as headers and trailing fragments, and a tall cluster of full body paragraphs. The minimum was 67 characters, the maximum 388, the mean 200, and the median just 104. So the chunk size is a ceiling, not a target.

## Chunk by data type

The video's rule is that one size does not fit all data:

- Prose splits recursively at around 500 to 1,000 characters.
- Code splits on function boundaries.
- Tables split into row groups, with the header repeated in every chunk.
- Contracts split by clause.
- Transcripts split by speaker turn.

## The isolation test

One test, runnable by eye, tells you whether chunking is broken: read a chunk in isolation. If it says something like "increased 40% due to this factor," with no subject and no idea what increased, the context was severed and no retriever or model will recover it. Good chunks stand alone.

## Key takeaways

- The window step is chunk size minus overlap.
- Overlap protects facts that fall on a boundary.
- Recursive splitting breaks on paragraphs, lines, sentences, then words, and beats fixed character cuts.
- Chunk size is a ceiling: real chunks vary widely, with a mean of 200 and a median of 104 characters in the project's data.
- Split by data type: prose, code, tables, contracts, transcripts.
- If a chunk cannot be understood alone, fix chunking before touching anything else.

## Try it yourself

Take your own documents and chunk them both ways, fixed and recursive, with the same settings. Then read ten random chunks from each out loud. You will feel which ones stand alone and which ones do not, and the video says that signal predicts retrieval quality before you even build the index.
