---
title: "Claude, Redshift API."
seoTitle: "Amazon Redshift Data API: 200 Does Not Mean Success"
description: "Why a 200 from the Redshift Data API only means a query was accepted, and how to poll DescribeStatement and decode results correctly."
summary: "A 200 from ExecuteStatement means Redshift accepted the SQL, not that it ran correctly. The video shows how to poll DescribeStatement to a terminal state and decode result cells with to_entries[0].value."
keywords: ["redshift data api executestatement 200", "redshift describestatement poll status", "redshift data api failed query", "redshift serverless workgroup query api", "getstatementresult hasresultset check", "decode redshift data api results jq", "redshift data api secrets manager", "claude redshift api skill"]
generated: "article"
---

Someone sees a 200 back from Redshift and assumes the query worked. The video explains why that assumption is wrong: a 200 from the Data API only means the query began. Whether it actually finished, and whether it succeeded, shows up later. The video walks through how to set up a call, how to check the outcome, and how to read the results.

## A 200 means accepted

Redshift's Data API hands back an ID rather than rows. It is not a result, just an ID to check later. The video makes the point with a deliberate example: send SQL with a typo and `ExecuteStatement` still returns 200. The failure only appears when you poll `DescribeStatement` and see `Status: FAILED`. It never shows up in the response to the call that submitted the query.

## What must be set before any call

Two things have to be in place first. The first is the region, which is baked into the endpoint hostname. The second is a connection target in one of three shapes: a workgroup name for Serverless, a cluster plus a database user for provisioned access, or a secret for Secrets Manager.

With the workgroup set, the video submits a real query: the top twenty events from the past month, grouped by name. `ExecuteStatement` hands back exactly one thing, an ID.

## Polling to a terminal state

That same ID goes to `DescribeStatement`, which is polled until the statement reaches `FINISHED`. Only then should you check `HasResultSet` before calling `GetStatementResult`, because a write statement can finish with nothing to page.

The video adds that `FINISHED` alone is not proof the SQL was clean. The same status field can read `FAILED` instead, and only `DescribeStatement`, never the original call, says so. A statement still sitting at `STARTED` is not stuck either. That is exactly what the poll loop is for.

## Decoding result cells

One habit carries past this particular query. Each result cell should be decoded with `to_entries[0].value`. A plain `.value` silently returns nothing, which makes the failure easy to miss because no error accompanies it.

## The two habits that govern every query

The video's carry-out compresses everything into two habits. Poll `DescribeStatement` to a terminal state before ever calling `GetStatementResult`, and decode each cell with `to_entries[0].value` instead of a naive `.value`. Get those right, and a 200 from `ExecuteStatement` stops meaning anything it does not.

## Key takeaways

- A 200 from `ExecuteStatement` means the query was accepted, not that it ran correctly.
- The call returns only an ID, which you use to check the outcome later.
- SQL errors surface only through `DescribeStatement` as `Status: FAILED`.
- Set the region and a connection target first: workgroup for Serverless, cluster plus database user for provisioned, or a Secrets Manager secret.
- Poll `DescribeStatement` until a terminal state, and treat `STARTED` as normal rather than stuck.
- Check `HasResultSet` before `GetStatementResult`, since writes can finish with nothing to page.
- Decode cells with `to_entries[0].value`, because a naive `.value` returns nothing.

## Try it yourself

Ask Claude to query your Redshift Serverless workgroup for the top twenty events from the past month, grouped by name. Then watch three things. Does it set the region and the workgroup before making any call? Does it poll `DescribeStatement` to a terminal state before calling `GetStatementResult`? And does it read result cells with `to_entries[0].value` rather than a `.value` that comes back empty?
