---
title: "The Routing Key, Not the Token."
seoTitle: "PagerDuty REST API vs Events API v2 Authentication"
description: "PagerDuty has two APIs on two hosts with different authentication. Learn when to use a token header and when to use a routing key in the body."
summary: "PagerDuty is not one API with one credential. The REST API uses a token header to read and manage data, while Events v2 uses a routing key in the request body, and mixing them up gives an empty 401."
keywords: ["pagerduty rest api vs events api", "pagerduty events v2 routing key", "pagerduty api token authorization header", "trigger a pagerduty alert with curl", "pagerduty 401 empty response body", "pagerduty from header email required", "pagerduty api rate limits 960", "connect claude to pagerduty api"]
generated: "article"
---

A common assumption is that one PagerDuty credential handles everything, so triggering an alert is just a matter of using your API token. The video explains that this is wrong. PagerDuty is two separate APIs on two different hosts, each with its own way of authenticating, and triggering an alert uses a routing key in the request body with no token involved.

## Two APIs, two hosts, two auth schemes

The REST API lives at api.pagerduty.com and handles everything you read and manage: schedules, services, escalation policies, incidents and users. It authenticates with an Authorization header that reads token followed by the key, not bearer and not basic. Events v2 lives at events.pagerduty.com and handles the alert life cycle instead: triggering, acknowledging and resolving. It authenticates with a routing key sent in the request body and sends no Authorization header at all.

The video also describes how the pieces fit together. An alert fires on a service, which routes through an escalation policy to specific schedules and users, opening an incident. Every notification along the way is logged, and that log is the actual record of who got paged and why.

## Sanity check before touching data

Before doing anything else, the video recommends checking your credentials with a simple call: a GET to the v1 user "me" endpoint with the token header. A 200 means you are good. A 401 comes back with an empty body, so curl shows you nothing unless you print the HTTP status explicitly with its write-out option.

## Writes need a From header

Once you start writing rather than only reading, every mutation, whether triggering, acknowledging or resolving, needs a From header containing a real email address. Leave it off and you get a 400 that looks like it came from nowhere.

## More details worth knowing

The video lists several further points:

- Raw curl calls to the oncalls endpoint need the -G option, otherwise the filters get mangled. The bundled on-call shell script already handles this.
- Any object you reference in a request body, such as a service or an escalation policy, needs both an ID and a type field, or you get a 400 naming the missing one.
- Events v2 error responses come back as plain text rather than JSON, so piping them through jq breaks immediately.
- The two APIs are rate limited differently. The REST API allows 960 requests a minute and provides headers you can watch, while Events v2 provides no such per-request header.

## Why mixing them up is costly

The carry-out is simple. The REST API reads and manages everything with a token header, while Events v2 triggers, acknowledges and resolves alerts with a routing key in the body and no token at all. Mix the two up and you will not get a helpful error message; you will get an empty one.

## Key takeaways

- PagerDuty is two APIs on two hosts, not one API with one credential.
- The REST API at api.pagerduty.com uses a token Authorization header and manages schedules, services, escalation policies, incidents and users.
- Events v2 at events.pagerduty.com uses a routing key in the request body and no Authorization header.
- A 401 from PagerDuty can arrive with an empty body, so print the HTTP status when using curl.
- Mutations need a From header with a real email address, or you get a confusing 400.
- Referenced objects need both an ID and a type field.
- Events v2 errors are plain text, and rate limits differ between the two APIs.

## Try it yourself

Before writing any code, ask Claude to plan a PagerDuty connection for three tasks: checking who is on call, triggering a test alert, and looking up why an incident paged someone. For each task, ask it to say which API it would call, which host, and exactly how it would authenticate. You do not need a live PagerDuty account to check the reasoning.
