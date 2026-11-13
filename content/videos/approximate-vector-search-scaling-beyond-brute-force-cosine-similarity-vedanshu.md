---
title: "Approximate Vector Search: Scaling Beyond Brute Force Cosine Similarity | Vedanshu"
seoTitle: "Approximate Vector Search vs Brute-Force Cosine Similarity"
description: "Benchmark exact vector search against an inverted file index, and see how the speed versus recall dial trades accuracy for scale."
summary: "A Humanitarians AI fellow benchmarks brute-force cosine similarity from 1,000 to 100,000 vectors, then adds an inverted file index with cell centroids. The video measures what the shortcut costs in recall instead of assuming it is free."
keywords: ["brute force vs approximate vector search", "how inverted file index works", "vector database nearest neighbor search explained", "speed versus recall tradeoff in vector search", "cosine similarity search does not scale", "benchmark exact search on embeddings", "ivf index cell centroids explained", "find breaking point of approximate search"]
generated: "article"
---

After chunking documents and turning each chunk into an embedding, the next question is how to find the nearest few out of hundreds of thousands fast enough that nobody is left waiting. This video from a Humanitarians AI fellow covers that step, which is Chapter 5 of the series it belongs to. It benchmarks exact search, adds an approximate index, and measures what the shortcut costs.

## The wall that exact search hits

Comparing a query against every stored vector is exactly correct. It never misses a true nearest neighbor. It is also the thing that does not scale, because every comparison still has to happen: double the collection and you double the work. A few hundred chunks is fine, but a whole company's documents is not.

## Timing the naive version

The test uses synthetic embeddings at three collection sizes, 1,000, 10,000 and 100,000, with 20 queries each, returning the top 10 by comparing against every stored vector, with no index and no tricks. The search function is one dot product against every stored vector, keeping the top 10. The vectors are normalized, so the dot product is cosine similarity. The measured times were about a millisecond or less at 1,000 vectors, 1.16 milliseconds at 10,000, and 10.9 milliseconds at 100,000. Ten times the collection took very nearly ten times as long, a linear curve, and a real document store does not stop at 100,000 chunks.

## How the inverted file index narrows the search

The revision groups the vectors into cells. A query is compared against the cell centroids first, and only the nearest few cells are scanned. The index uses two functions. Build puts every vector into a cell, with about the square root of the collection's size in cells, so each cell holds about the square root as well. Search ranks the centroids, takes the nearest few cells, and scans only what is inside them. Everything else is never examined.

The effect is large. With 100 times the data, exact search goes from 1,000 comparisons per query to 100,000, exactly 100 times the work. The index goes from 121 to 1,271 comparisons, about 10.5 times for 100 times the data.

## The speed versus recall dial

The cost is recall, which the test reports against the exact answer so the shortcut is measured instead of assumed free. Comparing against a third of one percent of the collection returns a third of the true neighbors. About 1.3 percent gets 60 percent recall, 5 percent gets 88, and 10 percent gets 96. As the video puts it, approximate does not mean unpredictable: there is a dial, and you decide where to set it.

The video adds a caveat. The chapter itself covers HNSW, a graph index, while this demonstration builds an inverted file. The mechanism differs but the bargain is the same.

## Key takeaways

- Exact search is always correct but its cost grows in step with the collection.
- Measured exact search time rose roughly tenfold when the collection grew tenfold, from 1,000 to 100,000 vectors.
- An index narrows the search space instead of scanning all of it.
- An inverted file index compares the query to cell centroids, then scans only the nearest cells.
- With 100 times the data, the index used about 10.5 times the comparisons, versus 100 times for exact search.
- Recall is the price: roughly 33 percent at a third of one percent compared, 96 percent at 10 percent compared.
- Always measure recall against the exact answer rather than assuming the shortcut is free.

## Try it yourself

Ask Claude to take your brute-force search and add an approximate index. Then have it sweep the accuracy setting, plot recall against the share of the collection actually compared, and report the lowest setting that still answers your questions correctly. Also ask it to show the query where the approximate search first breaks, so the failure is shown instead of averaged away, and run it on your own data.
