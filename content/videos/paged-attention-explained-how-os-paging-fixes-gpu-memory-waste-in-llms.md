---
title: "Paged Attention Explained: How OS Paging Fixes GPU Memory Waste in LLMs"
seoTitle: "Paged Attention Explained: OS Paging for LLM Memory"
description: "See how PagedAttention borrows operating system paging to cut KV cache waste from 60-80% to under 4% and raise LLM serving throughput by two to four times."
summary: "A Humanitarians AI fellow explains how PagedAttention splits each request's KV cache into small non-contiguous blocks instead of one reserved slab. The change cuts wasted memory sharply and lets a server handle more requests at once."
keywords: ["what is paged attention in llms", "how paged attention reduces gpu memory waste", "kv cache memory fragmentation explained", "vllm paged attention block table", "llm serving throughput improvement techniques", "contiguous kv cache allocation problem", "paged attention beam search memory sharing", "operating system paging applied to llms"]
generated: "article"
---

Imagine a server handling a hundred conversations with a language model at the same time. Each conversation needs its own slice of GPU memory to hold everything the model has generated so far. This video, presented by a fellow at Humanitarians AI, explains how PagedAttention solves the problem of reserving that memory, and why the fix comes from an old idea in operating systems.

## The memory problem in multi-tenant serving

Every active conversation needs GPU memory for its key and value cache, the stored record of what has been processed so far. The video frames the dilemma plainly. If a server reserves too little, long conversations break. If it reserves the maximum for everyone, most of that memory simply sits empty.

Before PagedAttention, most serving systems handled this by giving each request one contiguous slab of memory, sized for the longest sequence the system allowed. A short reply therefore still held room for thousands of tokens it would never use.

## How much memory the slab approach wastes

The paper behind PagedAttention measured the damage: 60 to 80 percent of the cache memory went to waste. The video asks the viewer to picture one giant reserved block per conversation with only a sliver holding real generated tokens. The rest waits for tokens that may never arrive. Nobody else can use it, even while other requests are queued for space.

## Paging the KV cache

PagedAttention borrows paging from operating systems. Instead of one contiguous slab, each sequence's key and value cache is split into small fixed-size blocks of 16 tokens each. In the original design, a block table maps each sequence's logical blocks to wherever they actually sit in physical memory. The blocks are scattered rather than sequential, exactly as a page table maps virtual memory to physical RAM.

Blocks are allocated one at a time, only as new tokens are generated, and never reserved in advance. Every block before the last one is completely full. Only the final, in-progress block can be partly empty, so the most any single sequence can waste is less than one block: a few tokens rather than a few thousand.

## Sharing memory between requests

Because sequences are just pointers into a shared pool of blocks, requests can share memory. If you ask a model for several sampled outputs from the same prompt, or run a beam search, every candidate starts by pointing at the same prompt blocks. A block is copied only if and when one candidate's tokens diverge from another's.

## What the results show

Measured against the same fragmented systems, KV cache waste falls from the 60 to 80 percent range to under 4 percent. Almost every byte allocated holds a real token. That reclaimed memory goes straight into serving more requests at once. vLLM, the engine built around this technique, reported two to four times the throughput of the strongest prior systems, with the gap widening on longer sequences, which is where fragmentation used to hurt most.

## What PagedAttention does not do

The video is careful about the limits. PagedAttention is a memory manager, not a shortcut around attention's own math. It applies an operating system idea to the KV cache, and the throughput gain comes because freed memory now serves more requests. It does not make attention itself cheaper. A longer, more shared cache is still more work to attend across.

## Key takeaways

- Giving each request one contiguous slab sized for the longest sequence wastes 60 to 80 percent of KV cache memory.
- PagedAttention splits each sequence's cache into fixed 16-token blocks that need not sit next to each other.
- A block table maps logical blocks to physical locations, like a page table in an operating system.
- Blocks are allocated only as tokens are generated, so waste per sequence is under one block.
- Sampled outputs and beam search candidates can share prompt blocks and copy only when they diverge.
- Waste drops to under 4 percent, and vLLM reported two to four times the throughput.
- It is a memory management technique and does not reduce the cost of attention itself.

## Try it yourself

If you serve a model yourself, check how your KV cache is actually allocated. Find out whether each request gets one reserved slab, or whether blocks are handed out only as tokens arrive. That single answer tells you how much memory your setup may be leaving idle.
