---
title: "Claude, Snowflake Api."
seoTitle: "Claude and the Snowflake SQL API: Handles and Polling"
description: "Learn why Snowflake's SQL API returns a statement handle first, how to poll it to a terminal state, and why results can arrive in partitions."
summary: "This video explains how Claude's snowflake-api skill works: submitting SQL returns only a statement handle, which must be polled to a terminal state before results are fetched in partitions. It stresses that a terminal state can still mean failure."
keywords: ["snowflake sql api statement handle", "poll snowflake query until complete", "snowflake api result partitions explained", "claude snowflake api skill", "why snowflake query returns handle", "snowflake statement failed after submit", "cancel running snowflake statement", "list tables in snowflake schema api"]
generated: "article"
---

Someone submits SQL to Snowflake and expects the answer to come straight back. The video explains that it does not. Through the snowflake-api skill, the first thing returned is only a statement handle to check later, and treating that handle as a finished answer is the mistake the video is built to prevent.

## A handle, not rows

When a query goes to Snowflake's SQL API, the first response is a statement handle. It is not rows and it is not an error; it is simply a handle to check later. The video notes that this holds even when something is wrong. Submit SQL with a typo and the API still hands back a handle, exactly the same. Only polling the handle afterward reveals that the statement failed. The failure never shows up in the response to the call that submitted it.

## Choose a warehouse, then submit

Before any query runs, Claude needs a warehouse to run it on. That compute is picked from what is browsable: warehouses, databases, schemas, and tables. Once one is chosen, the real question can be submitted. The video's example is asking what tables are in a schema. Even then the SQL API hands back exactly one thing, a statement handle rather than the table list.

## Poll until the statement finishes

The next step is to poll that same handle until it reaches a terminal state, and only then fetch the result. A handle that still shows as running is not stuck. That is what polling is for, and it is also what you would cancel if you needed to stop the statement early.

## Results can arrive in partitions

When the result is fetched, it can arrive in more than one partition. One fetch is therefore not always the whole answer. A long table list, for instance, should be expected in pieces, and each piece should be retrieved before trusting the list as complete.

## A terminal state is not proof of success

Reaching a terminal state does not mean the query succeeded. The same status can read failed instead, and only the poll ever shows it, never the original submit. This is why the order matters: poll, check the status, then fetch.

## The habit to keep

The video condenses all of this into one habit that governs every Snowflake query Claude runs: treat the submit call as a receipt, not an answer. Poll the handle to a terminal state, then fetch the result one partition at a time. The video also says plainly what it is not claiming. It does not judge whether the skill is well designed, it does not give specific field or header names or terminal-state strings, and it does not say polling and partitioned fetching are the only rules that matter. Cancelling statements and browsing warehouses, databases, schemas, and tables are also real parts of the skill.

## Key takeaways

- Submitting SQL to Snowflake's SQL API returns a statement handle, not rows.
- A query with a typo is still accepted; the failure appears only when you poll the handle.
- Claude needs a warehouse chosen before a query can run, picked from the browsable warehouses, databases, schemas, and tables.
- Poll the handle until it reaches a terminal state, then fetch the result.
- Results can arrive in more than one partition, so one fetch may not be everything.
- A terminal state can read failed, so check status before trusting results.
- A handle still shown as running is not stuck, and it can be cancelled if you need to stop it.
- Treat the submit call as a receipt, not an answer.

## Try it yourself

Ask Claude to list the tables in a Snowflake schema you have access to. Then watch three things: whether it treats the first response as a handle to check rather than a finished answer, whether it polls that handle to a terminal state before trusting it, and whether it fetches more than one partition if the table list is long.
