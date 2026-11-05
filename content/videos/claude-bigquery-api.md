---
title: "Claude, BigQuery API."
seoTitle: "How Claude Runs BigQuery Queries as Jobs via the API"
description: "Learn how Claude runs a BigQuery query as a tracked job, why the location must travel with every check, and why a DONE status is not proof of success."
summary: "Claude does not send SQL and get rows back in one call; every BigQuery query becomes a job that is tracked and checked. The video covers the billing project, location pinning, the error check after DONE, and a paging-field gotcha."
keywords: ["how claude runs bigquery queries", "bigquery api job location 404 error", "bigquery synchronous vs asynchronous query", "bigquery job done but has error", "bigquery billing project vs data location", "bigquery nextpagetoken vs pagetoken", "query bigquery public dataset with claude", "bigquery top names by state query"]
generated: "article"
---

Many people assume that Claude sends one API call to BigQuery and gets the rows back. The video says it does not. Every query becomes a job that is tracked and checked until it is ready. The video explains what that job looks like, and the two habits Claude needs for every job to behave correctly.

## A query becomes a job

The example request is to pull the top ten names from a public dataset. Sometimes the rows come straight back. That is synchronous mode: one request that blocks until the query is done. But a slower query cannot finish inside that window. In that case it is submitted as a job with its own ID, then checked and paged until it is ready, which is asynchronous mode.

## The billing project and the location

A job runs inside a billing project. The project that is charged for the bytes scanned is not necessarily the one where the data lives. The job is also pinned to the location it ran in. For a request such as the top ten names in California from the public names dataset, every later check on that job has to carry the same location back. Leave it off and the follow-up call fails with a 404.

## Done is not the same as succeeded

Check the job again with the location attached and the check comes back clean. But reaching DONE is not proof that the job succeeded, because the result can carry an error. That error gets checked before the rows are trusted. The video makes the opposite point too: a job that is still running is not proof that it is stuck, and that is exactly what the checking is for.

## A paging gotcha

The video also flags a naming difference. The field name for "more pages" is not the same everywhere. List endpoints use nextPageToken, but a query's own results use pageToken. Read the wrong one and the result comes back empty, silently, after page one. This is why the exercise includes a check on whether Claude uses the bundled script rather than a raw request that could miss a page.

## The two habits

The video compresses everything into two habits that govern every BigQuery job Claude runs: carry the same location on every follow-up call, and check for an error before trusting a job marked done. With those right, the video says, both query modes take care of themselves.

## Key takeaways

- Every BigQuery query becomes a job that is tracked and checked, not a single call returning rows.
- In synchronous mode one request blocks until the rows come back; slower queries are submitted and checked until ready.
- The billing project pays for the bytes scanned and is not necessarily where the data lives.
- A job is pinned to the location it ran in, and every later check must carry that location or it returns a 404.
- A job reaching DONE can still carry an error, so check for one before trusting the rows.
- A job that is still running is not necessarily stuck.
- List endpoints use nextPageToken while a query's own results use pageToken; the wrong one silently returns nothing after page one.

## Try it yourself

Ask Claude to run a query against the BigQuery public dataset bigquery-public-data.usa_names.usa_1910_current and return the top five names for Texas. Then watch three things. Does it pass the same location on every follow-up call? Does it check for an error before trusting a job marked done? And does it use the bundled script instead of a raw request that might miss a page?
