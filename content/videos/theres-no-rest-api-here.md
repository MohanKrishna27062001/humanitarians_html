---
title: "There's No REST API Here."
seoTitle: "Linear API: One GraphQL Endpoint, Not REST"
description: "Linear has one GraphQL endpoint, two ID systems and an unusual rate limit. Learn how to call it with Claude and check that a request really worked."
summary: "Linear's API has a single GraphQL endpoint rather than REST paths. The video covers UUIDs versus readable identifiers, the bare authorization header, why HTTP 200 can hide errors, and why rate limits return 400 instead of 429."
keywords: ["linear api graphql endpoint example", "linear api authorization header no bearer", "linear uuid vs issue identifier", "linear graphql mutation invalid input", "graphql returns 200 with errors", "linear api rate limit 400 ratelimited", "linear viewer query test api key", "call linear api with claude"]
generated: "article"
---

A common assumption is that Linear has a REST API with paths like /issues and /projects. The video explains that it does not: there is one GraphQL endpoint for everything. The rest of the video walks through what that means for anyone calling the Linear API with Claude, including the quirks that trip up people who are used to REST.

## One endpoint, reads and writes alike

Linear's API has exactly one endpoint, a POST to api.linear.app/graphql. Reads are queries and writes are mutations, and everything goes through that same URL, never a REST-style path. The Authorization header is also different from what many people expect. The key goes in by itself, with no Bearer prefix.

## Two ID systems side by side

Two kinds of ID live together in Linear. A UUID is what the API expects for every operation. A human-readable identifier such as ENG-123 works only when you are reading. If you pass an identifier where a mutation expects a UUID, you get an INVALID_INPUT error back. That makes it important to look up the UUIDs you need before you try to change anything.

## HTTP 200 does not mean it worked

The video is emphatic that a 200 status does not prove success. GraphQL returns 200 for most errors, and the real failure sits in the response body under the errors field. A mutation's response also carries its own success field, separate from both the HTTP status and the errors field. That success field can be false even when the other two look fine, so it needs checking too.

## Workflow patterns that keep it manageable

The video recommends a few habits:

- Start with the viewer query, a quick sanity check that confirms who you are authenticated as.
- Before creating or updating anything, look up the UUIDs you will need, such as a team's UUID for a new issue or a workflow state's UUID to move an issue along.
- Write description and comment text as plain Markdown.
- Remember that most connections do not return a total count. To know how many issues are on a team, paginate and count, or read an aggregate field instead.

## The rate limit that returns 400, not 429

The point that catches people coming from REST is the rate limit. Linear does not return the usual 429. It returns HTTP 400 with an error code of RATELIMITED in the body, the same status you would get from a broken query. A retry loop written to watch for 429 never fires. When you read the reset time, it is in epoch milliseconds, not seconds, so you need to divide by a thousand or the wait comes out wrong.

## Key takeaways

- Linear has a single GraphQL endpoint at api.linear.app/graphql, with queries for reads and mutations for writes.
- The Authorization header carries the key alone, with no Bearer prefix.
- UUIDs are required for every operation; identifiers like ENG-123 work only for reading.
- An HTTP 200 can still be a failure, so check the errors field in the body.
- Check the mutation's own success field as well.
- Begin with the viewer query and look up UUIDs before you mutate.
- Rate limiting arrives as HTTP 400 with the code RATELIMITED, and the reset time is in epoch milliseconds.
- Neither a 200 nor a 400 tells you the truth by itself.

## Try it yourself

Paste a prompt into Claude asking it to show the GraphQL query that lists your open Linear issues and the mutation that moves one to In Progress, using real field names and IDs. For each one, ask what exactly you should check in the response to know it worked, beyond a 200 status, and what changes about that check if you have been rate limited. Try it on your own Linear workspace, or simply to see the shape of the calls.
