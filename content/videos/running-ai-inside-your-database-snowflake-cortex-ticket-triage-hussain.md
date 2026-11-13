---
title: "Running AI Inside Your Database: Snowflake Cortex Ticket Triage | Hussain"
seoTitle: "Snowflake Cortex Ticket Triage with SQL Functions"
description: "Hussain shows how Snowflake Cortex triages 40,000 support tickets with CLASSIFY_TEXT, SENTIMENT and SUMMARIZE, keeping data inside the warehouse."
summary: "Hussain explains how Snowflake Cortex runs models inside the data warehouse through SQL functions, using support ticket triage as the example. He also covers token costs, filtering before classifying, and measuring label accuracy."
keywords: ["snowflake cortex ticket triage sql", "classify support tickets with sql", "snowflake cortex classify text sentiment summarize", "run ai models inside data warehouse", "avoid external ai pipeline for text", "snowflake cortex token cost warning", "validate llm label accuracy sql", "filter before you classify tickets"]
generated: "article"
---

Forty thousand support tickets sit in a Snowflake table. SQL can count them, but it cannot read them. In this video, Hussain explains how Snowflake Cortex addresses that gap by running AI directly inside the database, and walks through a small ticket triage use case that is realistic to finish.

## The model comes to the data

Hussain frames Cortex as a SQL function you already know how to call, not another platform to integrate. The central idea is that the model comes to the data, not the other way around.

A warehouse is strong at structured columns such as ticket ID, timestamp and region. It is blind to the column that matters most here, the ticket body. Counting rows is easy, but knowing which tickets are angry about billing is not.

## Why not build a pipeline

The usual answer is an external pipeline: export the text, send it to a model API, then load the answers back. That creates a second system and a second copy of the data. Cortex inverts this. The model runs inside Snowflake, and your existing grants still apply, so there is no new security surface to manage.

## Triage in a single query

The query itself is ordinary. Three Cortex functions sit in a select list:

- CLASSIFY_TEXT picks from a label set that you define,
- SENTIMENT scores each ticket from -1 to +1, and
- SUMMARIZE writes a one-line summary.

The output is just a table, produced in the same warehouse under the same grants, with three new columns you can group by. Billing complaints sorted by how angry they are becomes a dashboard query.

## Where it bites

Cortex is billed per token, so a SELECT star over the whole table becomes a real invoice. The WHERE clause in the example was doing quiet but important work in limiting what gets processed. The second warning is about accuracy. The labels are not deterministic, and a guess is not accuracy until you measure it.

The verdict is that Cortex earns its place when the alternative is a pipeline you never wanted. The rule that follows is to filter before you classify and to measure before you trust the output.

## Key takeaways

- Cortex runs models inside Snowflake through SQL functions, so the model comes to the data.
- It avoids exporting text, calling an external model API and loading results back.
- Existing security grants continue to apply.
- CLASSIFY_TEXT, SENTIMENT and SUMMARIZE can all run in one select list.
- The result is an ordinary table that supports grouping and dashboard queries.
- Billing is per token, so scanning an entire table is expensive.
- Labels are not deterministic; measure accuracy before trusting them.

## Try it yourself

Paste this into Claude: provide the schema of one text-heavy table you own, and ask for the single Cortex query that would produce the most decision-useful column. Then ask what it costs per million rows and how to validate the labels. Hussain stresses that those last two clauses are the point, because anyone can hand you the query, but nobody hands you the invoice.
