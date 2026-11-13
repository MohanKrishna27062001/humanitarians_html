---
title: "Continuous Batching Explained: Eliminating Idle GPU Slots in LLM Serving | Chinombe Simbaremuteuro"
seoTitle: "Continuous Batching for LLM Serving, Explained"
description: "Learn how continuous batching fixes idle GPU slots in LLM serving by redeciding batch membership at every decoding step, and what it costs in memory."
summary: "Static batching holds every slot until the slowest request finishes. Simba explains how continuous batching evicts finished sequences and admits new ones at each decoding step, why paged KV cache memory is required, and where the trade-offs sit."
keywords: ["continuous batching explained for llm serving", "static vs continuous batching", "idle gpu slots llm inference", "iteration level scheduling llm", "paged kv cache memory layout", "llm serving max batch size admission policy", "prefill spike in llm inference", "how llm servers schedule requests"]
generated: "article"
---

Imagine a batch of eight requests that starts decoding together. One finishes after 20 tokens; another needs 400. Static batching holds all eight slots until the slowest request is done, so for the last few hundred tokens most of those slots do nothing useful. In this video, Simba explains continuous batching, which asks what would happen if a finished slot could be handed straight to the next request waiting in line.

## The problem with static batching

In static batching, the baseline, the requests start together and the batch does not release until every one of them is done. Sequences that finish early do not leave. They sit padded, holding a slot for nothing, while new requests queue outside and wait for the whole group to drain. The video contrasts the two modes directly. Static is a fixed group for its whole lifetime. Continuous means the scheduler redecides who is in the batch at every single step.

## The scheduling loop

Mechanically, continuous batching is a loop. The server decodes one step for every sequence currently in the batch. It then checks whether anything just hit its end token or its length limit. If something finished, it is evicted, the slot is freed, and the next request is pulled off the queue into that slot. Then the server decodes another step and checks again. Batch membership is a decision made fresh at every step, and the batch is a different group of sequences almost every time.

## A four-slot example

The video works through a small example with four slots. Request B is short and finishes at step three, so slot two does not sit idle: request C is admitted at step four, starting with its own prefill step while the others keep decoding. Slot four stays empty until step six, not because the scheduler is slow but because the queue was actually empty until then. Continuous batching fills a slot the moment there is something to fill it with, and nothing more.

## Why paged KV cache memory matters

This only works cheaply if the KV cache is managed per sequence, allocated and freed independently rather than as one fixed block for the whole batch. That is the paged, block-based memory layout from the earlier paged attention episode. Without it, admitting a new request mid-batch would mean reshaping a contiguous buffer on every eviction, which is expensive enough to undo the benefit. The video adds that the size of the gain depends on how varied your request lengths are and how deep your queue is, and it gives no measured number.

## Three production knobs

The video names three real settings. The first is maximum batch size, which is bounded by how much KV cache memory you have, not by compute. The second is admission policy: plain first-come, first-served, or something that accounts for how long a request has waited. The third is how a new request's first step is handled. Prefill is a heavier, more compute-bound step than an ongoing decode, so admitting several requests at once can spike that step's cost.

## The trade-offs

What caps the gain is memory, not the scheduling idea. A clever scheduler facing a full KV cache has nowhere to put a new request. Continuous batching also takes on a scheduling decision at every step instead of one at the start, and latency now depends partly on who else happened to be admitted around you. In return, no slot sits padded for the slowest sequence, and a short request does not wait behind a long one just to start.

## Key takeaways

- Static batching holds every slot until the slowest sequence finishes, leaving padded, idle slots.
- Continuous batching redecides batch membership after every decoding step.
- Finished sequences are evicted at once and queued requests take the freed slot on the next step.
- Paged, per-sequence KV cache management keeps admission cheap.
- Maximum batch size is bounded by KV cache memory, not compute.
- Admitting several requests at once can spike the prefill step's cost.
- Continuous batching is not a way around a full cache.

## Try it yourself

If you serve variable-length requests, check whether your server still forms one fixed batch per inference call. If it does, GPU time is probably going to padded, already finished slots, which is the gap continuous batching is built to close.
