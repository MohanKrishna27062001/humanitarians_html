---
title: "Simbaremuteuro explains: Prefill vs. Decode and GPU Serving Bottlenecks"
seoTitle: "LLM Prefill vs Decode: GPU Serving Bottlenecks"
description: "Why every LLM reply is two jobs, compute-bound prefill and memory-bound decode, and how chunked prefill and split GPU pools ease the collision."
summary: "Every language model answer combines a compute-bound prefill pass and a memory-bound, token-by-token decode. Simba explains why mixing them on one GPU stalls serving and compares two fixes: chunked prefill and disaggregated GPU pools."
keywords: ["llm prefill vs decode explained", "compute bound vs memory bound llm", "time to first token vs time per output token", "what is kv cache in llm", "chunked prefill scheduling explained", "disaggregated prefill decode serving", "why llm inference is slow", "sarathi serve vs disaggregated serving"]
generated: "article"
---

Every time a language model answers a question, it does two completely different jobs. It reads the whole prompt at once, and then it writes the reply one token at a time. Simba explains that these jobs load a GPU in opposite ways, and that mixing them badly is one of the biggest reasons a model server ends up slow.

## Prefill: reading the whole prompt in one pass

Prefill looks at every token in the prompt at the same time. Whether the prompt is 100 tokens or 1,000, it is a single forward pass, computed as one large matrix multiplication. Every input token feeds into that one pass, and the pass produces two things: a key-value cache entry for each token, and the first token of the reply.

Because prefill multiplies a big batch of tokens against the same weights, it does a lot of math for each byte of memory it touches. The GPU's compute cores stay busy, which is why prefill is called compute-bound.

## Decode: writing the reply one token at a time

Decode does the opposite. Each step involves one token's worth of math, but the GPU still has to pull in every model weight and the entire key-value cache from memory to do it. There is almost nothing to compute and a lot to read, so decode is memory-bound.

The decode loop never changes shape. It takes the last token and the cache built so far, runs one forward pass, gets the next token, appends to the cache, and repeats. Every step depends on the one before it, so there is no way to skip ahead or run two steps at once for the same reply. The cache grows by one block each time around.

## Two clocks servers measure

Servers measure the two phases separately. Time to first token is how long prefill takes, and it grows with prompt length. Time per output token is how long each decode step takes. It barely changes with prompt length but is set by how much must be read from memory at every step.

## When the two collide

Put both phases on the same GPU without care and they fight. A large prefill batch can hold the GPU until it finishes, and every decode step waiting behind it stalls. A new prompt arriving mid-conversation can freeze everyone else's reply. The video stresses that this is not a bug in one phase. It is the two bottlenecks colliding.

## Two architectural fixes

One fix keeps both phases on the same GPU but schedules around the collision. Sarathi-Serve splits a big prefill into small chunks and slots each chunk between ongoing decode steps, so no decode waits for an entire prefill to clear. The video reports that this bought 2.6 to 5.6 times the serving capacity of vLLM, depending on the model.

The other fix does not share the GPU at all. Disaggregated serving runs prefill and decode on separate pools of GPUs, each tuned to its own bottleneck. Against the same latency bar, the video says it served 7.4 times more requests while meeting a 12.6 times tighter deadline on over 90 percent of them.

## Key takeaways

- Every reply is two jobs: a parallel prompt read and a sequential token write.
- Prefill is compute-bound; decode is memory-bound.
- Time to first token reflects prefill and grows with prompt length.
- Time per output token reflects decode and depends on memory reads per step.
- Mixing the phases on one GPU makes decode steps wait behind large prefills.
- Chunked prefill and separate GPU pools both turn that collision into serving capacity.
- The fix for one slow clock is not the fix for the other.

## Try it yourself

If your own serving stack feels slow, work out which clock is actually stuck: time to first token or time per output token. Measure both separately before choosing between chunked scheduling and splitting the work across separate pools.
