---
title: "One Script, Not One Call Each."
seoTitle: "How Claude Builds a Weekly Inventory Report With One Script"
description: "How the weekly-report skill has Claude compute stockouts and aging purchase orders for about 67,000 SKUs in one script instead of one call per row."
summary: "The video explains the weekly-report skill, whose explicit rule is to write one script and run it once. It covers the four report sections, the four backing files, and how the weekly and daily versions differ."
keywords: ["claude weekly inventory report skill", "one script instead of tool call per row", "process 67000 sku rows at once", "stockouts and days of cover report", "flag aging open purchase orders", "daily sweep versus weekly review report", "how claude skills use backing data files", "avoid per row tool calls with claude"]
generated: "article"
---

When Claude is asked for a weekly inventory report, the natural assumption is that it checks each product one at a time, using a tool call per SKU. This video, narrated by Liam for Humanitarians AI, shows that the weekly-report skill does the opposite. The stock file alone holds about 67,000 rows, so the skill's rule is explicit: write one script and run it once.

## A skill as a folder Claude reads

The video begins with the basic idea that a skill is a folder Claude reads before it acts. The weekly-report skill lays out four sections that are written every time: stockouts, low stock, open purchase orders, and forecast risk. It also names the files that back each one. There are four: a stock levels file, a products file, a sales history file, and an open orders file. Knowing the sections and the data sources in advance is what lets the whole report be produced in a single pass.

## One script over every row

The stock file is far too large to check SKU by SKU with separate tool calls. So the skill instructs Claude to write one script that loads every file, computes stockouts and days of cover for all SKUs together, and prints the finished report as markdown in one pass. The video describes this as zero per-SKU tool calls. Claude calls a tool only once in total.

## What the report contains depends on the request

What the script prints still depends on what is asked for, and the video shows the difference in both directions.

- The weekly version adds one more check. Any open purchase order that is older than its supplier's usual lead time is flagged as aging.
- The shorter daily sweep drops the open orders and forecast risk sections, and leads with whatever action was already taken.

So the same underlying approach, one script reading every row once, produces different outputs depending on whether you asked for the full weekly review or the daily sweep.

## The carry-out

The video's summary is that Claude writes one script that reads every row once, rather than checking each SKU by hand. Which sections the script prints depends on the cadence requested.

## Key takeaways

- A skill is a folder Claude reads before it acts.
- The weekly-report skill writes four sections every time: stockouts, low stock, open purchase orders and forecast risk.
- Each section is backed by named files: stock levels, products, sales history and open orders.
- The stock file holds about 67,000 rows, which is too many to check with separate tool calls.
- The skill's rule is to write one script and run it once, computing everything in a single pass.
- The weekly report adds an aging check for purchase orders older than the supplier's usual lead time.
- The daily sweep drops the open orders and forecast risk sections and leads with the action already taken.

## Try it yourself

The video offers a prompt for Claude. Describe a stock-levels file of about sixty thousand rows and a separate purchase-orders file, and ask for this week's inventory report covering stockouts, low stock, open orders, and which orders are now aging past their lead time. Then ask whether Claude would check it row by row with tool calls or write one script that computes it in a single pass, and have it show what the script would need to read and what the top of the report would say. Run it against your own inventory scenario.
