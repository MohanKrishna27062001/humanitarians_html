---
title: "Redshift API: 200 Means Accepted, Not \"Your Query Worked\""
seoTitle: "Redshift Data API: Why a 200 Doesn't Mean Success"
description: "Learn why a 200 from the Redshift Data API only means a query was accepted, and how to poll DescribeStatement and decode result cells correctly."
summary: "The video explains that ExecuteStatement on Amazon Redshift's Data API returns 200 for any accepted query, even one with a typo, and returns only an Id. It then covers the polling and cell-decoding habits that make results trustworthy."
keywords: ["redshift data api execute statement 200", "redshift describe statement poll status", "redshift get statement result has result set", "redshift serverless workgroup data api", "decode redshift result cells jq", "redshift statement finished vs failed", "how claude queries amazon redshift", "redshift data api async query pattern"]
generated: "article"
---

A common assumption is that a 200 response from Amazon Redshift's Data API means the query worked. This short video, part of a series on Claude plugins, explains why that is wrong. A 200 from ExecuteStatement means only that the query was accepted. Whether it ran correctly is a separate question, answered later through a different call.

## 200 means accepted, not correct

The Data API does not return rows when you submit SQL. It returns an Id, a handle to check later. The video makes the point with a blunt example: send SQL containing a typo and ExecuteStatement still returns 200. The failure appears only when you poll DescribeStatement and see a status of FAILED. It never shows up in the response to the call that submitted the query.

## Set the region and connection target first

Before any call is made, two things have to be set. The first is the region, which is baked into the endpoint hostname. The second is a connection target, which takes one of three shapes:

- a workgroup name for Redshift Serverless,
- a cluster plus a database user for provisioned access, or
- a secret for Secrets Manager.

With the workgroup set, the video submits a real query: the top twenty events from the past month, grouped by name. ExecuteStatement hands back exactly one thing, the Id.

## Poll until the statement reaches a terminal state

The next step is to poll that same Id with DescribeStatement until the statement reaches FINISHED. Only then should you check HasResultSet before calling GetStatementResult, because a write statement can finish with nothing to page through.

The video adds two cautions. FINISHED alone does not prove the SQL was clean, since the same status field can read FAILED instead, and only DescribeStatement ever says so. And a statement sitting at STARTED is not stuck. Waiting through that state is exactly what the poll loop is for.

## Decode each cell correctly

One habit carries beyond this single query: decode each result cell with `to_entries[0].value` rather than a plain `.value`. A plain `.value` silently returns nothing, which is easy to miss because no error is raised.

## The carry-out

The video boils every Redshift query Claude runs down to two habits. First, poll DescribeStatement to a terminal state before ever calling GetStatementResult. Second, decode cells with `to_entries[0].value`. With those in place, a 200 from ExecuteStatement stops being treated as proof of anything beyond acceptance.

## Key takeaways

- A 200 from ExecuteStatement means the query was accepted, not that it succeeded.
- ExecuteStatement returns an Id, not rows or a result.
- Failures surface only as a FAILED status on DescribeStatement.
- Set the region and a connection target (workgroup, cluster plus database user, or secret) before any call.
- Poll to a terminal state, then check HasResultSet before calling GetStatementResult.
- A statement at STARTED is not stuck; keep polling.
- Decode result cells with `to_entries[0].value`, not a naive `.value`.

## Try it yourself

Give Claude this prompt: "Query my Redshift Serverless workgroup, find the top twenty events from the past month, grouped by name." Then watch three things. Does it set the region and workgroup before making any call? Does it poll DescribeStatement to a terminal state before calling GetStatementResult? And does it read result cells with `to_entries[0].value` instead of a naive `.value` that comes back empty?
