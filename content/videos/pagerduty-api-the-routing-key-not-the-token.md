---
title: "PagerDuty API: The Routing Key, Not the Token"
seoTitle: "PagerDuty API: Routing Key vs API Token Explained"
description: "Learn why PagerDuty has two APIs with two auth schemes, and how mixing up the routing key and the API token produces a 401 with an empty body."
summary: "PagerDuty is two APIs on two hosts, each with its own authentication. The video walks through which credential goes where, a quick sanity check, and several details that trip people up when connecting Claude to PagerDuty."
keywords: ["pagerduty routing key vs api token", "pagerduty events v2 trigger alert", "pagerduty rest api authentication header", "pagerduty api 401 empty body", "how to trigger a pagerduty alert", "pagerduty from header required for writes", "pagerduty two apis two hosts", "connect claude to pagerduty api"]
generated: "article"
---

A common assumption is that one PagerDuty credential handles everything, so triggering an alert is just a matter of using your API token. This video, from the Claude Basics playlist and focused on a Claude Tag plugin for the PagerDuty API, shows why that assumption fails. Triggering runs through a separate routing key sent in the request body, with no token involved.

## Two APIs, two hosts, two auth schemes

PagerDuty splits into two separate APIs on two different hosts. The REST API lives at api.pagerduty.com and handles everything you read and manage: schedules, services, escalation policies, incidents, and users. It authenticates with an Authorization header that reads "Token" followed by the key. The video stresses that it is not "Bearer".

Events v2 lives at events.pagerduty.com and handles the alert life cycle: triggering, acknowledging, and resolving. It authenticates with a routing key sent in the request body, and it sends no Authorization header at all.

## How an alert becomes a record

The video also sketches what happens under the hood. An alert fires on a service, which routes through an escalation policy to specific schedules and users, opening an incident. Every notification along the way is logged, and that log is the actual record of who got paged and why. This is why the REST API and its token still matter: they are how you look up who is on call or trace an incident.

## A sanity check before touching data

Before reading or changing anything, the video recommends checking your credentials with a sanity call: a GET to the v1 user "me" endpoint using the token header. A 200 means the credentials work. A 401 comes back with an empty body, so curl shows you nothing unless you print the HTTP status explicitly, for example with the write-out option.

## The From header for writes

Once you move from reading to writing, every mutation needs a From header containing a real email address. That includes triggering, acknowledging, and resolving. Leave it off and you get a 400 that looks like it came from nowhere.

## More details worth knowing

The video lists several further points:

- Raw curl calls to the on-calls endpoint need the globbing-off flag, because the filters get mangled otherwise. The bundled on-call shell script already handles that.
- Any object you reference in a request body, such as a service or an escalation policy, needs both an ID and a type field, or you get a 400 naming the missing one.
- Events v2 error responses come back as plain text rather than JSON, so piping them through jq breaks immediately.
- The two APIs are rate limited differently. The REST API allows 960 requests a minute and gives headers you can watch. Events v2 has no such per-request header.

## The short version

The REST API reads and manages everything with a Token header. Events v2 triggers, acknowledges, and resolves alerts with a routing key in the body and no token at all. Mix the two up and you do not get an error message. You get an empty one.

## Key takeaways

- PagerDuty is two APIs on two hosts: api.pagerduty.com and events.pagerduty.com.
- The REST API uses an Authorization header of the form "Token", not "Bearer".
- Events v2 uses a routing key in the request body and no Authorization header.
- A 401 from the REST API arrives with an empty body, so print the HTTP status to see it.
- Every mutation needs a From header with a real email address.
- Referenced objects need both an ID and a type field.
- Events v2 errors are plain text, and the two APIs have different rate limits.

## Try it yourself

Paste a prompt asking Claude to plan three PagerDuty tasks: checking who is on call, triggering a test alert, and looking up why an incident paged someone. Ask it to name the API, the host, and the exact authentication for each one before it writes any code. You can check the reasoning without a live PagerDuty account.
