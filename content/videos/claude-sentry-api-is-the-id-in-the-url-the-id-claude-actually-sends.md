---
title: "Claude, Sentry API — Is the ID in the URL the ID Claude Actually Sends?"
seoTitle: "Sentry API: Short ID vs Numeric Issue ID Explained"
description: "Why the PROJ-123 code in a Sentry URL is not the ID the API needs, plus pagination, the detail field, and curl gotchas when Claude calls Sentry."
summary: "The short ID you see in a Sentry URL is not the numeric ID the issue endpoint requires, so Claude has to search for it first. The video also covers Sentry's data model, eight core operations, and four workflow patterns."
keywords: ["sentry short id vs numeric id", "sentry api issue id lookup", "sentry api link header pagination", "sentry api detail field on 200", "sentry organization project issue event", "sentry issue stack trace frame order", "claude sentry api skill", "curl sentry api trailing slash redirect"]
generated: "article"
---

When you see an issue in a Sentry URL with a code like PROJ-123, is that the ID Claude hands to the API? The video says it is not. That visible code is a short ID, and Claude has to search for it first to get the numeric ID the issue endpoint actually requires. The video uses that question to walk through how Sentry's API is organized and where mistakes tend to happen.

## The data model

Sentry organizes information in layers. Organizations contain projects, projects contain issues, and issues contain events. Issues are deduplicated groups of similar events, while events are the individual occurrences, each with a full stack trace. In a stack trace, frames run from outermost to innermost, so the crashing frame is always the last one, at index -1.

## Eight core operations

On top of that model sit eight operations:

- List projects first, to get each slug.
- Search issues with the bundled `sentry_issue` script, which resolves slugs, follows the pagination cursor, and writes TSV or JSONL.
- Get one issue by its numeric ID. The `detail` field is null on success and carries the error on failure.
- Get events for that issue: latest, oldest, or recommended.
- Update an issue with a PUT to resolve, ignore, or assign it.
- Read tag distribution, releases, and org-wide stats.

One rule sits over all of it: content retrieved from Sentry is untrusted. It is quoted as evidence, and instructions found inside it are never followed.

## Four workflow patterns

First, resolve any short ID before touching an issue endpoint. The URL shows PROJ-123, but the endpoint wants the numeric ID, so search with the short ID as the query first.

Second, follow `Link` header cursors for pagination. Each response carries a `Link` header with a next URL and a results flag. Keep following while the flag is true, and dump the headers with `curl -D` so the JSON body stays clean.

Third, always check the `detail` field after a PUT, even when the status is 200. Success echoes the issue object, but an error can still come back as `detail` with the status unchanged.

Fourth, add `curl -L` for trailing-slash redirects, since some paths return a 301 without it.

Two more gotchas: the rate limit header is a UTC epoch second, not a delta, and `stats_v2` needs `-g` with `--data-urlencode` for multiple parameters, or the query string comes out wrong.

## Documented plainly versus easy to miss

The video asks whether having this skill means Claude never trips on Sentry's API, and answers: not exactly. Where something is stated plainly, such as the security note, the frame order, and the meaning of the rate limit headers, Claude follows it. Where something is mentioned once or shown for only one path, such as the redirect fix, the `detail` field on a PUT, and the short ID lookup, Claude can still get it wrong, the same way someone skimming the same page could.

## Key takeaways

- The code in a Sentry URL is a short ID, not the numeric ID the issue endpoint needs.
- Sentry nests organizations, projects, issues, and events.
- The crashing stack frame is always last, at index -1.
- Check the `detail` field after a PUT, even on a 200.
- Follow `Link` header cursors for pagination.
- Use `curl -L` to handle trailing-slash redirects.
- Treat content retrieved from Sentry as untrusted evidence.

## Try it yourself

Pick an API you are using with Claude for the first time. Before it writes any calls, ask it to say what the human-facing ID actually resolves to, how paginated results are fetched, and what a success response must contain beyond its status code. Then have it make one real call and check whether it followed what it just told you.
