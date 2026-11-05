---
title: "Snowflake's API Won't Hand You Rows — It Hands You a Handle"
seoTitle: "Snowflake SQL API: Statement Handle, Polling, Partitions"
description: "How Claude queries Snowflake through the SQL API: submit returns a statement handle, then you poll to a terminal state and fetch results in partitions."
summary: "Submitting SQL to Snowflake does not return rows. It returns a statement handle, even for a query with a typo. The video explains polling to a terminal state, fetching partitioned results, and why a finished handle can still mean failure."
keywords: ["snowflake sql api statement handle", "how to poll snowflake statement status", "snowflake partitioned results fetch", "snowflake query failed after submit", "claude snowflake api skill", "list tables in schema snowflake api", "cancel running snowflake statement", "snowflake warehouse before running query"]
generated: "article"
---

Someone submits SQL to Snowflake and expects the answer to come straight back. It does not. The first thing returned is only a handle to check later. This video walks through what Claude has to do with that handle when it uses the snowflake-api skill, and the single habit that governs every query it runs.

## Submit returns a handle, not rows

Send a query to Snowflake's SQL API and the first response is a statement handle. It is not rows and it is not an error. Submit SQL with a typo and the API still hands back a handle just the same. Only polling that handle afterward reveals that the statement failed. The failure never shows up in the response to the call that submitted it.

## Pick a warehouse first

Before any query runs, Claude needs a warehouse to run it on, which is compute chosen from what is browsable: warehouses, databases, schemas, and tables. Once one is chosen, Claude can submit the real question, such as which tables are in a given schema. The SQL API hands back exactly one thing again, a statement handle, and not the table list.

## Poll, then fetch in partitions

The next step is to poll that same handle until it reaches a terminal state, and then fetch the result. The result can arrive in more than one partition, so a single fetch is not always the whole answer. For a long table list, the right expectation is that the list comes in pieces.

## A terminal state is not proof of success

Reaching a terminal state does not mean the query succeeded. That same status can read failed instead, and only the poll ever shows it, never the original submit. A handle that still shows as running is not stuck either. That is what polling is for, and it is also what you would cancel if you needed to stop the statement early.

## The habit that carries over

The video compresses everything into one habit: treat the submit call as a receipt, not an answer. Poll the handle to a terminal state, then fetch the result one partition at a time. Get that right, and a response from the SQL API stops being misleading.

## Key takeaways

- The first response to a submitted query is a statement handle, not rows.
- A query with a typo is still accepted, and the failure appears only when you poll.
- Claude needs a warehouse chosen before it can run anything.
- Poll the handle until it reaches a terminal state, then fetch the result.
- Results can come in more than one partition, so one fetch may be incomplete.
- A terminal state can mean failed as well as succeeded.
- A handle still showing as running is not stuck, and it can be cancelled.

## Try it yourself

Ask Claude: "List the tables in a schema I have access to in Snowflake." Then watch three things. Does it treat the first response as a handle to check rather than a finished answer? Does it poll that handle to a terminal state before trusting it? And does it fetch more than one partition if the table list is long?
