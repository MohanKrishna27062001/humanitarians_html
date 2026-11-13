---
title: "Sparse vs. Dense vs. Hybrid Retrieval | Vedanshu"
seoTitle: "Sparse vs Dense vs Hybrid Retrieval for RAG"
description: "Compare BM25 keyword search, dense embeddings, and reciprocal rank fusion on a 12-passage test, and see how a hybrid can lose to its best single retriever."
summary: "Vedanshu Patel compares BM25, dense embeddings, and reciprocal rank fusion on exact code lookups and paraphrased questions. In this run plain dense retrieval got both right, while the hybrid missed one because a wrong sparse ranking outvoted a right one."
keywords: ["sparse vs dense retrieval explained", "bm25 vs embeddings for rag", "reciprocal rank fusion explained simply", "hybrid search can perform worse", "bm25 exact code lookup example", "why bm25 misses paraphrased queries", "rrf rank arithmetic example", "build sparse dense hybrid retrievers"]
generated: "article"
---

Vedanshu Patel, a fellow at Humanitarians AI, works through a question from the retrieval chapter of a RAG course: is comparing embeddings even the right way to match a question to a passage? There are two genuinely different ways to decide whether a chunk answers a question, and each fails exactly where the other works.

## Two questions, one answer

The chapter's example involves two employees asking about the same tuition reimbursement policy. The first quotes an exact code, TR114. The second never says tuition, reimbursement, or policy at all and simply asks whether the company helps pay for grad school. The answer is the same, but the questions are opposite in how they relate to the text.

## Sparse retrieval with BM25

The video builds sparse retrieval from scratch using BM25: term frequency, inverse document frequency, length normalization, and saturation, so that a word repeated 50 times does not count 50 times. One detail matters more than it looks. TR114 has to be tokenized as a single term, because splitting it into TR and 114 destroys the exact-match signal before scoring starts.

Each query term contributes its inverse document frequency, scaled by how often it appears in the passage, and the normalizer divides by length so a long passage cannot win just by being long. TR114 appears in exactly one of 12 passages, which gives it the highest IDF in the collection. Run on the code query, it wins at 3.49 ahead of two other policies that merely contain the word reimbursement.

## The paraphrase gap

The paraphrase, "help pay for grad school," returns the certification exam policy at 3.82, because that passage literally contains the words "company pays." The right answer comes in third. That is the paraphrase gap, measured.

## Adding dense retrieval and fusing

The revision adds dense retrieval using real MiniLM embeddings, which match on meaning instead of words. The query embedding is dotted against every passage embedding, and because the vectors are normalized, the dot product is cosine similarity.

The two rankings are then fused with reciprocal rank fusion. Each candidate scores one over 60 plus its rank in every list it appears in, summed. It uses ranks rather than scores because BM25 scores and cosine similarities are not on a comparable scale. There are no weights and no tuning, and the whole method is four lines long.

## The surprising result

Dense retrieval got both queries right. It found TR114 for the code query at 0.6, so the entity-centric weakness the chapter warns about did not show up at 12 passages. The hybrid, the supposedly safe default, missed the paraphrase. On that query the certification policy was sparse's number one and dense's number two, while the right answer was dense's number one and sparse's third. One over 61 plus one over 62 beats one over 63 plus one over 61 by about a quarter of a thousandth. Fusion counted ranks without reasoning about either list, and a confidently wrong ranking outvoted a correct one.

The video states two honest limits. Twelve passages is too small to reproduce dense retrieval's known weakness on rare entities, and one fusion loss is not a verdict on fusion. The summary is not that hybrid always wins.

## Key takeaways

- Sparse search matches literal words and misses paraphrases.
- Dense search matches meaning, and here it missed nothing.
- Tokenization matters: splitting TR114 loses the exact-match signal.
- Reciprocal rank fusion sums one over 60 plus rank across lists.
- Fusion uses ranks because BM25 scores and cosine similarities are not comparable.
- A hybrid usually helps and rarely hurts, but this run was a case where it hurt.
- Averages can make fusion look good; look at the queries where it loses.

## Try it yourself

Paste this prompt to Claude: take my own document set and build all three retrievers, sparse, dense, and a fused hybrid. Then find the queries where the hybrid is worse than its best single retriever and show the rank arithmetic that made it lose. Asking for the losing cases plus the arithmetic turns a default into a decision you can defend.
