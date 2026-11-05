---
title: "SQL Query Optimization: Stop Scanning 400k Rows for a 4k Result | Supriya"
seoTitle: "SQL Query Optimization: Avoid Full Table Scans"
description: "Two SQL queries return identical results, yet one reads 35 times more rows. Use EXPLAIN QUERY PLAN to find scans and rewrite predicates to use the index."
summary: "Supriya shows two analytics queries that return the same 4,459 rows while one reads 400,000 rows and the other about 11,000. EXPLAIN QUERY PLAN reveals the difference, and wrapping an indexed column in a function is the cause."
keywords: ["explain query plan sqlite tutorial", "how to spot a full table scan", "function on indexed column breaks index", "strftime in where clause slow", "rewrite sql predicate as range", "sql scan vs search query plan", "speed up slow analytics query", "ask claude to optimize sql query"]
generated: "article"
---

Two SQL queries can return exactly the same output and still differ enormously in how much work they do. Supriya opens with a concrete case: the same 4,459 rows, byte for byte, but one query reads 11,000 rows to get there and the other reads 400,000. Nothing in the SQL text tells you which is which. The query plan does.

## The shape of an analytics query

The example is a table of 400,000 postings, and the goal is one month of them. About 11,000 rows survive the date filter, and grouping by account leaves 4,459 rows. The answer is tiny. In Supriya's framing, optimization is the argument about how many of those 400,000 rows the database has to touch to find it.

## Ask the database with EXPLAIN QUERY PLAN

Instead of guessing, the video runs EXPLAIN QUERY PLAN. It costs nothing to run, and it does not run your query. It only reports what the engine intends to do. In a real terminal, query A shows a scan of the postings table, and scan means every row, all 400,000. Query B shows a search of postings using an index, with the date range in parentheses, which means the index was walked to January and stopped.

The plan said so before either query ran. Read as a comparison on a log scale, that is 400,000 rows against 11,369, which is 35 times fewer. Because the answer is only 4,459 rows, plan B sits near the floor, while plan A is two orders of magnitude away.

## Why the function breaks the index

Both queries filter on the same indexed column, so what is it about query A's WHERE clause that takes the index away? The answer is the function. Query A wraps the posting date in strftime, so the database no longer has a column to look up. It has an expression, and the only way to evaluate it is to visit every row. Query B leaves the column bare and compares it to constants.

The insight is that an index works on the column, not on a function of the column.

## Rewrite to a bare range

The fix the video demonstrates is to rewrite the predicate as a bare column range comparison. That one move took the read from 400,000 rows down to 11,000. The same trap applies to other wrappers: strftime, CAST, and UPPER are named as common culprits.

## Key takeaways

- Two queries with identical output can differ 35 times in rows read.
- EXPLAIN QUERY PLAN shows the engine's intent without running the query.
- The word SCAN means every row is read; SEARCH using an index means the index narrowed the work.
- Wrapping an indexed column in a function turns the predicate into an expression the index cannot serve.
- strftime, CAST, and UPPER are common ways this happens.
- Rewrite the predicate as a bare column compared to constants, such as a date range.
- Ask for the smallest rewrite so you can see which single change moved the plan.

## Try it yourself

Run EXPLAIN on your slowest dashboard query tonight and look for the word SCAN on a table you thought was indexed. Then give Claude the table schema and the query with this prompt: walk me through its explain plan step by step, tell me which steps read every row, find any predicate that a function or cast has made unusable by the index, and give me the smallest rewrite that turns a scan into a search.
