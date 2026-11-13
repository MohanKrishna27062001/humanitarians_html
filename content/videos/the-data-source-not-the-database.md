---
title: "The Data Source, Not the Database."
seoTitle: "Notion API: Data Source ID vs Database ID Explained"
description: "Why Notion queries need a data source ID instead of the database ID, plus the version header and sharing traps that cause errors and 404s with Claude."
summary: "Notion splits every database into a container and a separate data source that holds the schema and rows. The video explains which ID Claude needs, why requests fail without a version header, and what a 404 usually means."
keywords: ["notion data source vs database id", "notion api query database data source", "notion api missing version header error", "notion api 404 object not found", "share notion page with claude connection", "claude notion api skill explained", "notion api filter by property type", "notion api pagination infinite loop"]
generated: "article"
---

Someone setting up Claude with Notion might assume it only needs a database's ID to run a query. The video explains why that fails. Notion splits every database into a container and a separate data source underneath it, and the queries Claude runs need the data source ID instead. The video also covers two smaller traps that tend to show up alongside it.

## One database, two IDs

Every Notion database has a data source beneath it, and that data source is where the real table lives: its schema and every row. A row is simply a page whose parent is that data source. As a result, schema reads, queries and creating a new row all need the data source ID, not the database ID. Use the wrong one and you are told the object does not exist. The video clarifies that the database ID is not useless: it is what you retrieve first, so you can read its list of data sources and find the ID that matters.

## Two bundled scripts

The skill described includes two scripts for common work. One searches the workspace and pages through every result. The other reads a full page block by block, in the order you would read it.

## Missing version and missing share

Two details trip people up. First, every request needs a specific version header. Leave it off, and every call fails immediately with a missing version error, before Notion even looks at what was asked. Second, when a search or read comes back empty or says an object was not found, that is almost never a bad ID. It almost always means the page or database has not been shared with Claude's connection. The advice is to check sharing before second-guessing the ID.

## Listed, not opened

The video lists a few easy-to-miss behaviors.

- The page-reading script lists a nested subpage or subdatabase when it finds one, but does not open it. That needs its own separate read.
- A file link inside a block, such as an image, stops working after about an hour, so it should not be saved and reused.
- When a result list has more pages, the code fetching them has to watch for an error coming back midstream, or the loop can run forever.
- Filtering depends on the property's type: select takes equals, multi-select takes contains, and date takes before or after. Reading the schema first is the only way to know which applies.

## Key takeaways

- A Notion database is a container; the schema and rows live in its data source, which has its own ID.
- Schema reads, queries and new rows need the data source ID.
- Retrieve the database first to find the data source in its list.
- Every request needs a specific version header or it fails immediately.
- An empty result or "not found" usually means the page was not shared with Claude's connection.
- Nested subpages are listed but not opened, and file links expire after about an hour.
- Read the schema before filtering, because the right condition depends on property type.

## Try it yourself

Run the video's prompt on your own Notion workspace: ask Claude to search for pages about onboarding, read the most recently updated match and summarize it in its own words. If reaching that page means querying a database, ask Claude to say aloud whether it is using the database's ID or the data source ID underneath it.
