---
title: "Mycroft: Starting the Lineage Agent"
seoTitle: "Trace Patent Citations: Empty String vs Missing Value Bug"
description: "A fellow starts the Lineage Agent, checks the citation schema for free, scopes to backward citations and finds a bug where empty strings defeat a None check."
summary: "Humanitarians AI Fellow Aishwarya Patil begins the Lineage Agent, which traces a patent's citation lineage instead of its claims. The video covers a free schema check, an honest scope choice and a bug where BigQuery returns empty strings, not None."
keywords: ["trace patent citation lineage with ai", "backward versus forward patent citations", "check bigquery schema before writing code", "bigquery empty string instead of none", "non patent literature citation check", "difference between empty string and missing value", "scope a first build honestly", "verify a bug fix against raw data"]
generated: "article"
---

This video shows the real start of the Lineage Agent, the second half of the Mycroft patent intelligence system. Where the Claims Agent reads what a patent's claims say, the Lineage Agent traces the patent's citation lineage. Humanitarians AI Fellow Aishwarya Patil walks through checking the data structure first, choosing a narrow scope and a bug she caught in a field check.

## The first result

The first test returned a clean summary for one patent with 12 citations: one patent citation and 11 papers. The summary was right, the video says, but only after a real bug was caught along the way. The sections below explain how the number was reached and why it can be trusted.

## Checking the schema before writing code

Before writing anything, she checked what the data actually contains. The citation field is a repeated record holding a publication number, an application number, free text for non-patent literature, a type, a category and a filing date. Looking at a schema costs nothing, because there is no query cost to check it. The point is to learn the real shape of the data instead of assuming it.

## Scoping the first build honestly

Two directions exist for citations. Backward citations are the patents and papers a given patent cites. Forward citations are the patents that cite it back. Backward is a field on the row already being pulled. Forward means searching every other patent's citations for this one's number, which is a different, untested and likely expensive query. The decision was to build backward first and treat forward as a separate piece of work.

## The bug: empty is not missing

The first real test ran clean: 12 citations parsed, one patent and 11 papers. But the field meant to identify non-patent literature was not checking for empty text. It was checking for missing text. On this table, missing text is not missing at all. It is an empty string. As a result, every citation passed that check whether or not it had a real patent number.

## Verifying the fix

She fixed the check and ran it again, and the result was the same 12 citations, one patent and 11 papers. That did not mean the fix did nothing. This patent's real split genuinely is one patent citation and 11 academic papers, which she verified by hand against every line of raw text. The fix was correct and simply did not change this particular patent's answer. The video makes clear that a bug can exist even when the output looks right, which is why checking by hand against the raw lines matters.

## Key takeaways

- The Lineage Agent traces a patent's citation lineage, as a companion to the Claims Agent.
- Checking a schema is free, so check what a field really contains before writing code.
- The citation field holds a publication number, application number, free text, type, category and filing date.
- Backward citations come from data already on the row; forward citations need a likely expensive search across other patents.
- BigQuery returns empty strings, not None, for missing fields on this table, so a missing-value check passed every citation.
- A fix can be correct even when it leaves the answer unchanged, and hand-checking against raw text confirms it.

## Try it yourself

Before relying on a field's absence to mean something in your own pipeline, look at what an empty value actually looks like in real output. A missing value and an empty string are not automatically the same, and assuming they are can let a bug through unnoticed.
