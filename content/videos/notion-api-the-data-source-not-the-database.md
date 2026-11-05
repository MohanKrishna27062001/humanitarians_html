---
title: "Notion API: The Data Source, Not the Database"
seoTitle: "Notion API: Data Source ID vs Database ID Explained"
description: "Why Notion API queries need a data source ID instead of a database ID, plus the version header and sharing traps that cause confusing errors."
summary: "In Notion's API a database is only a container, and the schema and rows live in a separate data source with its own ID. The video explains that distinction, the required version header, why a 404 usually means a page was not shared, and several reading pitfalls."
keywords: ["notion api data source id", "notion database id vs data source", "notion api version header error", "notion api 404 object not found", "share notion page with integration", "notion api query database filters", "notion api pagination infinite loop", "read notion page with claude"]
generated: "article"
---

In Notion's API, the database is not where the data lives. A database is a container, and the schema and every row sit in a separate object called a data source, with its own ID. This video, narrated by Liam for Humanitarians AI, explains what that means for anyone asking Claude to query Notion, and lists the other traps that tend to appear alongside it.

## One database, two IDs

The video opens by correcting an assumption: that Claude only needs a database's ID to run a query. Notion splits every database from its data source, and queries need the data source's ID instead. The data source underneath is where the actual table lives, with its schema and every row. A row is simply a page whose parent happens to be that data source.

Because of this, schema reads, queries and creating a new row all need the data source ID, not the database ID. Use the wrong one and you are told the object does not exist. The database ID is not useless, though. It is what you retrieve first, so that you can read its list of data sources and find the ID that matters.

Two bundled scripts cover common work. One searches the workspace and pages through every result, and the other reads a full page block by block in reading order.

## Missing version, missing share

Two details trip people up early. First, every request needs a specific version header. Leave it off and every call fails immediately with a missing-version error, before Notion even looks at what you asked.

Second, when a search or read comes back empty or says the object was not found, the video says the cause is almost never a bad ID. It almost always means the page or database has not been shared with Claude's connection. Check sharing before doubting the ID.

## Listed, not opened

The video then lists a few things that are easy to miss when reading:

- The page-reading script lists a nested subpage or subdatabase when it finds one, but does not open it. That needs its own separate read.
- Any file link inside a block, such as an image, stops working after about an hour, so it should never be saved and reused.
- When a result list has more pages, the code fetching them has to watch for an error coming back midstream, or the loop can run forever instead of stopping.
- Filtering depends on the property type. Select takes equals, multi-select takes contains, and date takes before or after.

Because of that last point, reading the schema first is not optional. It is the only way to know which filter applies.

## Key takeaways

- A Notion database is a container; the schema and rows live in a data source with a separate ID.
- Schema reads, queries and creating rows need the data source ID, not the database ID.
- Retrieve the database first to read its data source list and find the right ID.
- Every request needs a specific version header, or it fails immediately.
- An empty result or not-found error almost always means the page was not shared with Claude's connection.
- Nested subpages are listed but not opened, and file links expire after about an hour.
- Read the schema before filtering, since the right condition depends on the property type.

## Try it yourself

The video suggests asking Claude to search your Notion workspace for pages about onboarding, then read the most recently updated match and summarise it in its own words. If reaching that page means querying a database, ask Claude to say out loud whether it is using the database's own ID or the data source ID underneath it. Try it on your own workspace rather than the video's example.
