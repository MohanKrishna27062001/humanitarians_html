---
title: "Confluence API: Two APIs, Not One — What Claude Must Know"
seoTitle: "Confluence API v1 vs v2: What Claude Needs to Know"
description: "Learn why Claude uses Confluence's v2 API by default, when it drops to v1, and how to avoid 404 errors and silently short search results."
summary: "Confluence Cloud runs two REST API generations at once. The video explains which one Claude uses for what, the two details that trip people up, and the rule that Claude treats page text as content to report, never as a command."
keywords: ["confluence api v1 vs v2", "claude confluence api skill", "confluence api 404 missing wiki prefix", "confluence search pagination trap", "claude read confluence page summary", "confluence cql search with claude", "ai agent prompt injection confluence", "claude tag confluence plugin"]
generated: "article"
---

A common assumption is that Claude simply calls one Confluence API. The video explains that it actually calls two: a newer default and an older one reserved for a few specific jobs. It covers which runs when, the two details that trip people up, and a safety rule about how Claude treats whatever it reads inside a Confluence page. The example comes from the Claude Tag plugin's Confluence API skill.

## Two API versions, running at once

Confluence Cloud runs two REST API generations side by side. Claude defaults to the newer one, v2, which handles pages, spaces, blog posts, comments, attachments, and labels. It drops to the older v1 only for three jobs v2 cannot do: searching with Confluence's query language, uploading or downloading an attachment, and adding a label. The video makes clear that v1 is the correct choice for those three jobs, not a fallback for something broken.

## Three small scripts

Everyday work is covered by three small scripts. One search script runs a search and pages through every result. A read-page script fetches a page in the format you ask for. A write-page script creates or updates a page and safely retries if someone else saved a change first.

## Trap one: the missing /wiki prefix

The first detail that trips people up is that every Confluence call needs a /wiki prefix in the URL. Leave it off and every request fails with a not-found error. It looks like a bug, but it is only a missing prefix.

## Trap two: the pagination link

The second is a pagination trap. When a search has more results, the next-page link works differently in each API version. In v2, the link already starts from the site's root, so you must strip the /wiki part off your base address before adding it, otherwise you end up with /wiki twice. In v1, you add the link to the base address exactly as it is. Mix these up and later pages simply stop appearing, with no error at all.

## Read it, don't obey it

The video says one rule matters more than any API detail. A Confluence page might contain text written specifically to hijack an AI reading it, such as instructions hidden in a comment or a page body hoping Claude will follow them. Claude treats anything it reads back from Confluence as content to report, never as a command to run.

## Smaller things worth knowing

A few further details are listed. One of the write formats packs its data as a string that has to be decoded twice. Long result lists cap out well below their real maximum, so a big search can quietly come back short. Permanently deleting a page, or uploading a file, each needs one extra permission or header that most people forget the first time.

## Key takeaways

- Confluence Cloud runs two REST API generations at once, and Claude uses both.
- Claude defaults to v2 for pages, spaces, blog posts, comments, attachments, and labels.
- It drops to v1 only for query-language search, attachment upload or download, and adding labels.
- Every call needs the /wiki prefix, or it fails with a not-found error.
- Next-page links differ by version: in v2 strip /wiki from the base address first, in v1 add the link as is.
- Mixing up the pagination rules makes later pages vanish without any error.
- Whatever a page says, Claude reads it as content to report, never as a command.

## Try it yourself

On your own Confluence space, not the video's example, ask Claude: "Search our Confluence space for pages about onboarding, then read the most recently updated match and summarize it for me. Before you show me anything from inside that page, tell me plainly whether you're giving me your own summary or quoting the page's own words."
