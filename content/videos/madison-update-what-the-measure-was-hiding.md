---
title: "Madison Update: What the Measure was Hiding"
seoTitle: "Prot2Vec Update: Benchmark Controls and a Coverage Bug"
description: "A weekly Madison update on Prot2Vec: chance-corrected metrics, a sequence-length confound check, and a coverage setting that hid 61 statements."
summary: "This weekly update reads two Prot2Vec releases for what they defend against rather than what they add. It covers a chance floor for neighborhood preservation, a check for length masquerading as homology, and a coverage bug that hid 61 statements."
keywords: ["protein embedding benchmark harness", "chance corrected neighborhood preservation metric", "sequence length confound protein families", "dimensionality reduction benchmark protein sequences", "coverage ellipsis pattern hides statements", "random projection control baseline", "isolate failing pairs benchmark matrix", "check your own measurement tooling"]
generated: "article"
---

This weekly Madison update looks at two releases of Prot2Vec that landed in the same week. Prot2Vec grew considerably, going from two representations to nine, from two projections to 13 and from 10 metrics to 31. The video argues that the breadth is not the interesting part. What matters is that the releases added defenses against results that are secretly measuring something else, and that one of those defenses caught the project's own measuring tool.

## What Prot2Vec is

Prot2Vec is a benchmark harness for protein sequence embeddings. You hand it sequences with group labels. It runs every embedding method against every dimensionality reducer, and it scores all of them with the same metrics, so the comparison is like for like. The nine ways to turn a sequence into a vector range from counting amino acids to calling a protein language model, and six of the nine need no PyTorch at all.

## The floor under a good score

The first defense concerns neighborhood preservation, which asks what fraction of each point's true nearest neighbors survive a projection. The video points out that this number has a floor. Even a projection that carries no information keeps some neighbors by luck, a fraction of k over n minus one. The release therefore ships a chance-corrected version of the metric that subtracts that floor. Without it, a score that looks respectable could simply be what random noise would have produced.

## Real homology, or length in disguise

The second defense targets what the video calls the failure the harness exists to catch. Two protein families can separate cleanly on screen. That may mean the representation found real homology, or it may mean the representation encoded sequence length, and length happens to differ between the families. In a scatter plot the two cases look identical. A confound group added this week refuses to let them blur together.

## The instrument that hid sixty-one statements

The release then caught its own instrument. The code coverage tool had been told to ignore any line that is just an ellipsis, the placeholder used for abstract methods. The pattern was not anchored, so it also matched a type annotation containing a tuple of string and ellipsis. Coverage discards the whole statement that such a line belongs to, so 61 statements quietly left the report, and 47 of them were in the module that scores everything else. The video calls this the same mistake the whole tool exists to find: a number that looked fine while quietly measuring less than it claimed.

## Abort the matrix, or isolate the pair

Breadth also changes what a single bug costs. NMF refuses signed input, and a manifold method can fail on a disconnected neighbor graph. With four method pairs those failures are exceptions, but across a full matrix they are ordinary. Previously, one such failure discarded every pair that had already succeeded. The fork the week turned on was whether to abort the matrix or isolate the failing pair, and the written description says the project now isolates, names and records the skipped pair in the run manifest.

## Key takeaways

- Prot2Vec scores every embedding method against every dimensionality reducer with the same metrics.
- This week it grew to nine representations, 13 projections and 31 metrics, and six of the nine representations need no PyTorch.
- Neighborhood preservation has a chance floor, so the release ships a chance-corrected version.
- A sequence-length confound check separates real homology from a representation that only encodes length.
- An unanchored coverage pattern removed 61 statements from the report, 47 of them in the scoring module.
- Across a full matrix, expected failures should be isolated rather than allowed to discard completed pairs.
- The verdict: the defenses are the release, not the breadth.

## Try it yourself

Take a benchmark result you are about to publish and answer three questions before asking whether the score is good. What would a random control have scored on the same data? What does the result become if your representation encodes only length? Is the tooling you use to check your own work itself being checked? Then look for the one you forgot.
