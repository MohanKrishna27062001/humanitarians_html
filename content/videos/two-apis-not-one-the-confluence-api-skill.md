---
title: "Two APIs, Not One. — The Confluence API Skill"
seoTitle: "Confluence Cloud REST API v1 vs v2 With Claude"
description: "Confluence Cloud runs two REST API versions at once. Learn when Claude uses v2, when it drops to v1, and the /wiki and pagination traps to avoid."
summary: "Claude does not call a single Confluence API. It defaults to v2 and drops to v1 for search, attachments and labels, and the video flags two traps: the /wiki prefix and differing next-page links. It also explains why page content is never treated as a command."
keywords: ["confluence cloud rest api v1 vs v2", "confluence api 404 missing wiki prefix", "confluence cql search with api", "confluence api pagination next link", "upload attachment confluence rest api", "add label confluence api v1", "claude confluence api skill", "prompt injection in confluence pages"]
generated: "article"
---

A natural assumption is that Claude calls one Confluence API. The video shows that it actually calls two: a newer default, and an older one for a few specific jobs. Confluence Cloud runs both generations at once, so knowing which one runs and when saves a lot of confusion.

## Which version handles what

Claude defaults to the newer API, called v2. It handles pages, spaces, blog posts, comments, attachments and labels. It drops to the older v1 API only for three jobs that v2 cannot do: searching with Confluence's query language, uploading or downloading an attachment, and adding a label.

## Three small scripts for everyday work

Three scripts cover the common tasks. One runs a search and pages through every result. A second fetches a page in the format you ask for. A third creates or updates a page and safely retries if someone else saved a change first. Together they cover the hot path of reading, searching and writing.

## Trap one: the /wiki prefix

Every Confluence call needs a /wiki prefix in the URL. Leave it off and every single request fails with a not-found error. It looks like a bug, but it is only a missing prefix.

## Trap two: pagination differs by version

When a search has more results, the next-page link works differently in each version. In v2, the link already starts from the site's root, so you must strip the /wiki part off your base address before adding it. Otherwise you end up with /wiki twice. In v1, you add the link to the base address exactly as it is. If you mix these up, later pages simply stop appearing, with no error at all. That makes this a silent failure rather than a loud one.

## Read it, don't obey it

The video says one rule matters more than any API detail. A Confluence page might contain text written specifically to hijack an AI reading it, such as instructions hidden in a comment or a page body hoping Claude will follow them. Claude treats anything it reads back from Confluence as content to report, never as a command to run.

## Smaller details worth knowing

The video adds a few quick points:

- One of the available formats packs its data as a string that has to be decoded twice.
- Long result lists cap out well below their real maximum, so a big search can quietly come back short.
- Deleting a page permanently, or uploading a file, needs one extra permission or header that most people forget the first time.

## Key takeaways

- Confluence Cloud runs two REST API generations at once, and Claude defaults to the newer v2.
- v1 is used only for query-language search, attachment upload or download, and adding labels.
- Every call needs the /wiki prefix, or it fails with a not-found error.
- The next-page link is built differently in v2 and v1, and getting it wrong silently drops later pages.
- Large searches can quietly return fewer results than expected.
- Permanent deletes and file uploads need an extra permission or header.
- Whatever a page says, Claude reads it as content, never as a command.

## Try it yourself

Ask Claude to search your Confluence space for pages about onboarding, then read the most recently updated match and summarize it. Before it shows you anything from inside the page, have it say plainly whether it is giving its own summary or quoting the page's words. Run it on your own Confluence space rather than the video's example.
