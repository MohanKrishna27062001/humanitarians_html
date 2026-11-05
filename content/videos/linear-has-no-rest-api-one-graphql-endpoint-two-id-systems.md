---
title: "Linear Has No REST API — One GraphQL Endpoint, Two ID Systems"
seoTitle: "Linear API Explained: One GraphQL Endpoint, UUIDs and Errors"
description: "How Linear's single GraphQL endpoint works: UUIDs vs readable identifiers, the Authorization header, errors hidden behind HTTP 200 and rate limits."
summary: "Linear has no REST endpoints, only one GraphQL URL for every read and write. The video covers its two ID systems, the unusual auth header, the habit of checking the response body and why a rate limit arrives as a 400 instead of a 429."
keywords: ["linear api graphql endpoint explained", "linear api uuid vs identifier", "linear graphql mutation invalid input error", "linear api authorization header no bearer", "graphql returns 200 with errors", "linear api rate limit 400 ratelimited", "linear viewer query sanity check", "linear graphql query open issues"]
generated: "article"
---

A common assumption is that Linear has a REST API with endpoints such as issues and projects. This video explains that it does not. There is one GraphQL endpoint for everything, and a handful of quirks catch people who arrive with REST habits. The video walks through them with Claude calling the API in mind.

## One endpoint for everything

Linear's API has exactly one endpoint: a POST to api.linear.app/graphql. Reads are queries and writes are mutations, and all of them go through the same URL, never a REST-style path. Anyone looking for separate routes per resource will not find them.

## Two ID systems

Two ID systems live side by side. A UUID is what the API expects for every operation. A human-readable identifier such as ENG-123 only works when you are reading. If you pass an identifier where a mutation expects a UUID, you get back an INVALID_INPUT error. That is why the video advises looking up the UUIDs you will need before creating or updating anything, such as a team's UUID for a new issue, or a workflow state's UUID to move one along.

## The header and the 200 that is not success

The Authorization header is different from the usual pattern. The key goes in by itself, with no Bearer prefix. And an HTTP 200 does not mean the call worked. GraphQL returns 200 for most errors, with the real failure sitting in the response body under errors.

## Habits that keep it manageable

The video lists a few patterns that make the API easier to work with:

- Start with the viewer query, a quick sanity check that confirms who you are authenticated as.
- Look up the UUIDs you need before any mutation.
- Write description and comment text as Markdown, nothing fancier.
- Check the mutation's own success field, which is separate from the HTTP status and from the errors field, and can be false even when both of the others look fine.
- Expect that most connections do not return a total count. To know how many issues are on a team, you paginate and count, or read an aggregate field.

## The rate limit quirk

The part that catches people coming from REST is rate limiting. Linear's rate limit does not come back as the usual 429. It comes back as HTTP 400 with an error code of RATELIMITED in the body, the same status you would get from a broken query. A retry loop written to watch for 429 never fires. When you do read the reset time, it is in epoch milliseconds, not seconds, so you need to divide by a thousand.

## What to remember

The summary the video gives is that there is one endpoint, not many, and neither a 200 nor a 400 tells you the truth by itself. A 200 can still mean the request failed, and a 400 can just mean you have been rate limited.

## Key takeaways

- Linear has a single GraphQL endpoint at api.linear.app/graphql, with no REST-style paths.
- Mutations need UUIDs; identifiers like ENG-123 only work for reading.
- The Authorization header carries the key alone, with no Bearer prefix.
- An HTTP 200 can hide failures, so check the errors field in the body.
- Check the mutation's own success field as well.
- Rate limiting returns HTTP 400 with the code RATELIMITED, not 429.
- The rate limit reset time is in epoch milliseconds.

## Try it yourself

Paste this into Claude: show me the GraphQL query I would send to list my open issues in Linear, and the mutation to move one to In Progress, using real field names and IDs. For each one, tell me exactly what I would check in the response to know it worked, not just that the HTTP status was 200, and what changes about that check if I have been rate limited.
