---
title: "The Real Cost of a Query | Aishwarya Patil"
seoTitle: "The Real Cost of a BigQuery Query on a Large Table"
description: "A fellow shows what querying a 98-million-row BigQuery table really costs, from a free-tier quota error to billing, caching and Anthropic API spend."
summary: "Humanitarians AI Fellow Aishwarya Patil walks through a real BigQuery quota error, the investigation into its cause, the cost math, and the decision to add billing. She also covers a rejected alternative and a second cost, the Anthropic API."
keywords: ["bigquery free tier quota exceeded", "how much does a bigquery query cost", "bigquery bytes processed job history", "bigquery table clustering reduce cost", "bigquery cached results zero bytes", "check query cost before running", "bigquery cost per terabyte", "anthropic api cost per call"]
generated: "article"
---

Humanitarians AI Fellow Aishwarya Patil presents something that rarely makes it into a project demo: what it actually costs, in real dollars, to query a very large public dataset, and what happens when that cost appears mid-project. The video follows a genuine error, the investigation that explained it, and the decisions that came afterward.

## The error that stopped the project

Nine test runs into the work, the project hit an error saying it had exceeded its quota for free query bytes scanned. The free tier was gone. The video explains that BigQuery gives one terabyte of free query processing a month, and that past that point usage is billed. The error message said, word for word, to upgrade to a paid billing account to continue.

## Investigating the real cause

The first assumption was that a wildcard search was the expensive part. Checking the actual job history showed otherwise. An exact match on a single patent scanned about 116 GB. Repeating that exact query processed zero bytes, because the result was fully cached. The real cost was not the style of the query but the table itself: roughly 98 million rows with no clustering on the field being searched, so even a precise lookup had to scan a huge amount of data.

## The cost math and the decision

At $6.25 per terabyte, each lookup of that size came to about 70 cents. The video treats that as real money and therefore a real decision. A billing account was set up and linked to the project, and the work continued with a new discipline: reuse cached results instead of re-querying blindly.

## A dead end worth reporting

Before spending more, the fellow looked at a cheaper table that seemed promising. It was about a third the size and had fields that looked like a pre-built dependency parser. Checking it directly showed it was last updated in 2017 and did not cover any of the patents the project needed. The video calls this an honest dead end rather than a shortcut, and includes it because ruling out the cheap option is part of the real story.

## The second cost: the Anthropic API

Classifying the scope of patent claims protection needed real judgment, not simple rules, so the Anthropic API came into the project. That meant a real key and a real per-token cost that is tiny per call but still real. The description also notes that a real model refusal came up along the way. The video's summary is that money and effort went into two separate fronts, and both times it was because the cheap option was tried first and genuinely did not hold up.

## Key takeaways

- BigQuery's free tier gives one terabyte of query processing a month, and the quota can run out during testing.
- Check the actual job history rather than guessing which query is expensive.
- In this case an exact match on one patent scanned about 116 GB, while an identical repeat processed zero bytes because it was cached.
- A large table with no clustering on the searched field makes even precise lookups costly.
- At $6.25 per terabyte, the lookups cost about 70 cents each.
- Reusing cached results is a practical way to avoid paying twice.
- Try the cheaper alternative first, and be ready to report honestly when it does not work.
- Language-model API calls add a second cost that is small per call but real.

## Try it yourself

Before trusting any dataset's cost, do what the video recommends: check the actual job history, the bytes processed, the caching, and the size of the table you are touching, rather than assuming from how the query reads. Run one lookup, then look at the bytes it scanned before you run the next.
