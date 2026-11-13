---
title: "Mycroft's Schema Drift: Unplanned Structural Changes & Silent Pipeline Failures"
seoTitle: "What Is Schema Drift? Silent Data Pipeline Failures"
description: "A Humanitarians AI Fellow explains schema drift with a documented Azure Data Factory failure and a BigQuery empty-string bug that defeated a null check."
summary: "Aishwarya Patil defines schema drift as any unplanned change in a data source's structure or meaning. She walks through a documented Azure Data Factory incident and a BigQuery empty-string bug that quietly broke a check."
keywords: ["what is schema drift in data", "schema drift silent pipeline failure", "azure data factory csv new column", "power bi dashboard showing nulls", "bigquery empty string versus null", "check for missing values in pipeline", "unplanned data source structure changes", "why data pipelines break quietly"]
generated: "article"
---

This video, from the Mycroft team, is about schema drift: why the same field can mean something different depending on where it comes from, and why that quietly breaks real pipelines. Humanitarians AI Fellow Aishwarya Patil opens with a simple scenario and then builds out the definition, one documented case, and a bug from her own work that week.

## One new column, blank dashboards

The scenario is short. A supplier adds one new column to a CSV. Overnight, real dashboards start showing blank numbers for key metrics. Nobody changed the dashboard. The data underneath it changed shape.

## What schema drift is

The video defines schema drift as any unplanned change in a data source's structure. A field may be added, removed or renamed, or its meaning may quietly shift, in a way that a downstream system was not built to expect.

It is especially common wherever multiple systems or vendors feed into one pipeline. The reason given is that nobody upstream is obligated to warn you before they change something.

## A documented Azure Data Factory case

The video cites a real Azure Data Factory pipeline that broke this way. A supplier added a field called lot batch notes to their CSV. The ingestion job was not built to expect it, and downstream Power BI dashboards started showing nulls for key numbers. The data was not wrong. The shape it arrived in had quietly changed.

## The same pattern, one field deep

Drift does not need to change the schema's shape to cause trouble. Sometimes a field stays exactly where it is supposed to be, but what counts as empty changes underneath you.

The video gives an example from the presenter's own work. One real system returned an empty string for a missing value, while a check written to look for a missing value expected null. The field never changed position, but what it meant when it was empty did. The check, which assumed the two were the same thing, was silently defeated.

## Why it matters more over time

The more systems a piece of data passes through, the more chances there are for one of them to redefine what a value means. The video notes that a pipeline can run clean for months and still be carrying an assumption nobody has checked lately.

## Key takeaways

- Schema drift is any unplanned change in a data source's structure or in the meaning of a field.
- Adding a single column to a CSV can make downstream dashboards show nulls overnight, even though no one touched the dashboard.
- Drift is most common where multiple systems or vendors feed one pipeline, because upstream owners need not warn you.
- A documented Azure Data Factory case involved a supplier adding a field called lot batch notes, which led Power BI dashboards to show nulls.
- Drift can be a change in meaning rather than shape, such as an empty string returned where a check expected null.
- The more systems data passes through, the more chances there are for a value to be quietly redefined.
- A pipeline that runs clean can still rest on an unchecked assumption.

## Try it yourself

Pick a field in a pipeline you rely on and check what it actually returns when the value is missing, not what you assume it returns. The video says the gap between those two answers is exactly where schema drift hides.
