---
title: "RAG Embeddings: Mean Pooling, Memory Bandwidth, and the 12x Batching Speedup | Ameya"
seoTitle: "RAG Embeddings: Mean Pooling and the 12x Batching Speedup"
description: "Learn how a transformer builds one chunk vector with mean pooling, and why batching embeddings is about 12 times faster with identical arithmetic."
summary: "Liam, in for Ameya Deshmukh, opens the black box of text embedding. The video shows how per-token vectors are averaged into a chunk vector and why batching 64 chunks beats looping, because memory bandwidth, not math, is the bottleneck."
keywords: ["how mean pooling creates chunk embeddings", "per token vectors to chunk vector", "why batching embeddings is faster", "embedding batch size 64 to 256", "memory bandwidth bottleneck in embeddings", "sentence transformers batch size tip", "speed up rag indexing large corpus", "content hashing to avoid re-embedding"]
generated: "article"
---

Turning text into vectors can sound like a black box. In this video, Liam, in for Ameya Deshmukh, argues that it is not, and shows one move, batching, that made the project's embedding step 12 times faster while doing exactly the same math.

## One vector per token, not per chunk

Most people get one thing wrong: the transformer does not produce one vector for your chunk. It produces one vector per token. In the video's example, seven tokens go in and seven vectors come out, each 384 numbers wide. The chunk vector you think you have does not exist yet.

## Mean pooling

To get a single vector for the chunk, you use mean pooling. The seven token vectors are averaged, element by element, into one. That average is a single 384-dimensional vector, and it is what represents the whole chunk in your index. The video notes that it is simple and is the default for a reason.

## Looping versus batching

You could embed one chunk at a time, but almost nobody does. Instead, many chunks are stacked into one matrix and pushed through together. One row becomes 64 rows, so a skinny multiply becomes a fat one, and the same weight matrix serves all of them at once.

The video gives the measurement from the project. Sixty-four separate matrix multiplies took just under 15 milliseconds. One batched multiply of the same 64 took 1.2 milliseconds, a speedup of about 12 and a half times.

## Identical arithmetic, different cost

The work was identical. Counting the arithmetic operations both ways gives the same number, 75,497,472, whether looped or batched. So the speedup is not less math, which raises the question of where the time went.

The answer is overhead and memory. Looping pays a fixed setup cost 64 times, while batching pays it once. The weight matrix is loaded from memory once and reused across all 64 rows, instead of being fetched again and again. The bottleneck was never the arithmetic; it was memory bandwidth. The video's analogy is an oven: one cookie or 64, it still takes 12 minutes.

## In practice

In practice this is one argument. Sentence Transformers takes a batch size, and handing it your whole list of chunks with a batch size of 64 to 256 lets it do the stacking for you. The video calls this the single biggest win at index time, and the lever that matters most when you index a large corpus.

## Scaling to a large corpus

Beyond batching, the video names two more practices:

- Stream the work in shards so that memory stays bounded.
- Content-hash each chunk so you only re-embed what actually changed.

Do those three things, it says, and embedding a million chunks stops being scary.

## Key takeaways

- A transformer outputs one vector per token; mean pooling averages them into one chunk vector.
- In the example, a 384-dimensional vector represents the chunk in the index.
- Batching 64 chunks took 1.2 ms versus just under 15 ms for 64 separate multiplies.
- The arithmetic is identical, at 75,497,472 operations either way.
- The real bottleneck is memory bandwidth and per-call overhead, not math.
- Use a batch size of 64 to 256, stream in shards, and content-hash chunks.

## Try it yourself

Take your own indexer and time encoding your chunks one at a time versus batched at 64. Then confirm that the outputs are identical. Seeing the same vectors come out an order of magnitude faster is the point of the exercise.
