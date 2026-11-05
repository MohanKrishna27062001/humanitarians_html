---
title: "BigQuery API with Claude: DONE Isn't Proof It Worked"
seoTitle: "Run BigQuery Queries with Claude: Location and Error Checks"
description: "Learn why a BigQuery query is a tracked job, and the two habits that prevent 404 errors and silently empty result pages when Claude runs it."
summary: "A BigQuery query is not one API call. It is a job in a billing project, pinned to a location, and a job marked done can still carry an error. The video teaches two habits that keep Claude's results trustworthy."
keywords: ["bigquery api job explained", "bigquery job location 404 error", "bigquery pagetoken vs nextpagetoken", "check bigquery job for errors", "claude run bigquery query", "bigquery billing project explained", "query bigquery public dataset", "bigquery synchronous vs async query"]
generated: "article"
---

It is easy to assume that when Claude queries BigQuery, it sends one API call and gets rows back. The video explains that this is not how it works. Every query becomes a job that is tracked and checked until it is ready, and two details of that job decide whether the answer can be trusted: the location it runs in, and whether it finished with an error.

## One call, or a tracked job

Ask Claude for the top 10 names in a public dataset and the rows sometimes come straight back. That is the synchronous mode: a single request that blocks until the query is done. A slower query cannot finish inside that window, so a job is submitted instead. The job gets its own ID and is checked and paged until the results are ready.

## The billing project pays, and the location pins the job

Every job runs inside a billing project, and that project is charged for the bytes the query scans. The project that pays is not necessarily where the data lives. The job is also pinned to the location where it ran.

That matters for every follow-up call. The video's example asks for the top 10 names in California from a public names dataset. Each later check on that job has to carry the same location back, or the request fails with a 404. With the location attached, the check comes back clean.

## DONE is not proof the job succeeded

A job that reaches the done state has not necessarily succeeded. The result can carry an error, so that error needs to be checked before any rows are trusted. The reverse also holds: a job that is still running is not proof that it is stuck. Waiting and re-checking is the whole purpose of the tracking.

## The page token trap

The video points out one more detail that is easy to miss. The field name for "more pages" is not the same everywhere. List endpoints use `nextPageToken`, but a query's own results use `pageToken`. Read the wrong one and the result comes back empty without any error after page one, so a query can look complete while rows are missing.

## The carry-out: two habits

The video boils all of this down to two habits that apply to every BigQuery job Claude runs:

- Carry the same location on every follow-up call.
- Check for an error before trusting a job that is marked done.

Get those two right, the video says, and both query modes, synchronous and job-based, take care of themselves.

## Key takeaways

- A BigQuery query is not always a single round trip. Slow queries become jobs with their own IDs that are checked and paged until ready.
- Every job runs in a billing project that pays for the bytes scanned, which is not necessarily where the data lives.
- A job is pinned to the location it ran in, and a follow-up check without that location returns a 404.
- A job marked done can still carry an error, so check for one before trusting the rows.
- A job that is still running is not stuck. That is what the checking is for.
- List endpoints use `nextPageToken`, while a query's own results use `pageToken`. Reading the wrong one silently returns nothing after page one.
- The two habits to remember are carrying the location every time and checking for an error before trusting a done job.

## Try it yourself

Give Claude this prompt: run a query against the BigQuery public dataset `bigquery-public-data.usa_names.usa_1910_current` and return the top five names for Texas. Then watch three things. Does it pass the same location on every follow-up call? Does it check for an error before trusting a job marked done? And does it use the bundled script rather than a raw request that might miss a page? The video's code is in the humanitarians-youtube repository, under the claude-bear folder.
