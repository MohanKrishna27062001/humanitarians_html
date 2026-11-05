---
title: "Your Phone Can Do RAG — MiniRAG, Explained | Neelabh"
seoTitle: "MiniRAG Explained: Retrieval-Augmented Generation on a Phone"
description: "A walkthrough of the MiniRAG paper: why moving reasoning from a large model into a graph index lets small models do RAG, and where it makes more errors."
summary: "The video explains MiniRAG from the University of Hong Kong, which builds a graph index so a 1.5 to 4 billion parameter model can do retrieval-augmented generation. It covers the accuracy gains, the ablation evidence and the higher error rate on hard questions."
keywords: ["minirag explained for beginners", "run rag on small language model", "on device private retrieval augmented generation", "why lightrag fails with small models", "heterogeneous graph index for rag", "minirag ablation study results", "multi-hop question answering rag error rate", "better index instead of bigger model"]
generated: "article"
---

Does retrieval-augmented generation need a big model? A paper from the University of Hong Kong says no, and the video, narrated by Liam on behalf of Bear, walks through why. The claim is that to answer questions about your own files, AI needs a better index rather than a bigger model. If that holds, private retrieval stops being a data-center problem and becomes a problem a phone can handle.

## The assumption inside RAG

Retrieval-augmented generation works in three stages: build an index over your documents, retrieve what looks relevant, and generate the answer. Behind all three sits a large language model doing the understanding at every step. The video calls this a design assumption that nobody wrote down. Pulling the large model out and putting a small one in shows what depends on it. LightRAG falls from 56.9 percent accuracy to 35.4 percent. GraphRAG does not fall, it stops: every small model produced no usable output, and the paper's table just prints a slash. These systems were built on an assumption, and the assumption left the room.

## How MiniRAG moves the work

MiniRAG keeps the same three stages but changes where the work happens. Indexing builds a graph instead of a pile of text. Retrieval walks that graph in two steps: first it maps the query onto entities, then it follows the structure to the answer. The model still writes the final sentence, but it has stopped doing the thinking.

## Two kinds of node, two kinds of edge

The index is the trick. It has two kinds of node, the text chunks themselves and the named entities extracted from them. It has two kinds of edge, entity to entity and entity back to the chunk it came from, each carrying a written description of the relationship. Small models are poor summarizers but perfectly good entity extractors, so the index only asks them for the easy part. In the video, a real question from the paper asks which Italian restaurant two people will go to in order to celebrate a promotion. LightRAG on the same small model hunts for matching text and returns a pasta restaurant's name that is not listed. MiniRAG first guesses the answer type, a location, and then walks the graph to the location that connects both people and the promotion.

## The results and the ablation

Across the small models tested, the pattern held. Phi-3.5 rose from 39.8 to 53.3, and GLM Edge, a 1.5 billion parameter model, rose from 35.7 to 52.5. The smallest model in the set gained the most, between 1.3 and 2.5 times the effectiveness of the lightweight systems it replaces.

A results table shows that it works, not why, so the authors took it apart. Removing the edge descriptions costs about three points of accuracy, and removing the chunk nodes costs four. Replacing the heterogeneous index with ordinary description-based indexing drops accuracy from 53.29 percent to 26.02 percent. Roughly half the system's performance lives in the index, which is the claim tested.

## Where it bites

The video then covers what it says the paper underplays. On the harder multi-hop benchmark, MiniRAG answers far more correctly than LightRAG, 49.96 percent against 27.03 percent. But its error rate is also higher, 28.44 percent against 11.78 percent. It answers more questions and is confidently wrong more often, and the video says that trade is for anyone building on it to price.

## Why it matters

A 3 billion parameter model runs on the phone in your pocket, so the documents never leave it. MiniRAG does this on roughly a quarter of the storage its nearest rival needs. That makes private retrieval over your own messages and notes possible without a round trip to a data center. The video's verdict is that the contribution is not a better model but a better place to put the work.

## Key takeaways

- MiniRAG's claim is that RAG needs a better index, not a bigger model.
- With a small model, LightRAG falls from 56.9 to 35.4 percent and GraphRAG produces no usable output.
- The index is a graph with text-chunk nodes, entity nodes, and described edges.
- Small models are asked only to extract entities and write the final sentence.
- Phi-3.5 improved from 39.8 to 53.3 and GLM Edge from 35.7 to 52.5.
- Ordinary description-based indexing cuts accuracy from 53.29 to 26.02 percent.
- On multi-hop questions MiniRAG scores 49.96 against 27.03 percent, but its error rate is 28.44 against 11.78 percent.
- The approach offers on-device private retrieval at about a quarter of the storage.

## Try it yourself

The video suggests asking Claude to help design a small experiment on your own data. Pick a document set you already have, write 10 questions whose answers need two hops, and decide which accuracy and error rate would make you believe the index is doing the work rather than the model. Then check the answer: it should separate accuracy from error rate, name a baseline to compare against, and say what result would prove the claim wrong. The paper is MiniRAG by Fan, Wang, Ren and Huang, and its code is on GitHub from HKUDS.
