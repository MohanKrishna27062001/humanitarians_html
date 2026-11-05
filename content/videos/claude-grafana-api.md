---
title: "Claude, Grafana API."
seoTitle: "Does Claude Know the Grafana API? What a Skill Spells Out"
description: "See what a Grafana API skill has to tell Claude: three time formats, two alert surfaces, and why dashboard updates replace the whole object."
summary: "The video asks whether Claude already knows an outside system like Grafana's API. It shows that Claude reads a skill file first, and that the file carries the account-specific details: time formats, alert surfaces and dashboard updates."
keywords: ["does claude know the grafana api", "grafana api unix milliseconds or seconds", "grafana api returns empty results", "grafana prometheus api vs provisioning api", "grafana dashboard update version conflict", "grafana api viewer editor admin roles", "batch grafana data source queries", "test claude on an unfamiliar api"]
generated: "article"
---

Someone might assume Claude already knows how to work with an outside system such as Grafana's API. The video says not quite: Claude is shown a file it reads before acting. It walks through what that file has to spell out, where Claude benefits from it, and where Claude can still go wrong.

## Three time formats, and a wrong one fails quietly

Grafana's REST API uses three different time formats depending on the endpoint. Picking the wrong one does not return an error. It just comes back empty. Data source queries and point annotations both want Unix milliseconds, state history wants Unix seconds, and silences want RFC 3339. The example command in the skill only works with GNU date, and macOS's built-in date needs a different flag.

## Roles, responses and a one-line helper

Every request carries a role: viewer, editor, or admin. A 403 means the identity is missing the role the call needs. Reading dashboards and querying data takes only viewer, while writing alert rules or silences takes editor or higher.

Data source query responses come back in Grafana's own frame format, not raw Prometheus JSON. A failure lands inside the response, in `results.refId.error`, while the HTTP status still reads 200. The skill also includes a one-line helper that wraps the bearer token, but it lives only for the session and is not saved anywhere.

## Two alert surfaces

Alert rules live on two separate surfaces that answer different questions. The Prometheus API gives live state, firing, pending or inactive, and it is read only. The provisioning API gives the rule's definition, meaning the query, the condition and the labels, and supports full create, update and delete. Anything written through the provisioning API is locked in the Grafana UI unless the request adds a header telling Grafana to disable that lock.

## Dashboards are replaced, not patched

Dashboards work differently again. There is no partial update. The pattern is to get the whole dashboard, change it, and post the whole thing back. If the version number is left out, Grafana returns a conflict instead of guessing which copy should win.

## Batching and the annotations limit

Data source queries fan out to the underlying database on every call, so the design is to batch several queries into one request instead of looping separate calls. The annotations endpoint has no page parameter at all, so for a long time window the fix is to narrow the window rather than page through it.

## Documented plainly versus easy to miss

Having the file does not mean Claude never trips. Where the file spells something out plainly, such as the time format warning up front or the exact field to check on a data source error, Claude follows it and skips the mistake. Where a point is a single line, or buried after the read-only examples, Claude can still get it wrong, the same way a person skimming the same page would.

The video's conclusion is that a skill does not make Claude know an API. It gives Claude a map of where the traps are, and Claude only avoids the ones the map actually marks.

## Key takeaways

- Claude does not arrive already knowing a specific API; it reads a skill file before acting.
- Grafana endpoints use Unix milliseconds, Unix seconds or RFC 3339, and the wrong format returns empty results rather than an error.
- A 403 means the identity lacks the needed role; writing alert rules or silences takes editor or higher.
- Data source query errors appear inside the response body while the HTTP status stays 200.
- The Prometheus API shows live alert state; the provisioning API holds alert definitions.
- Dashboard updates replace the whole object and need the version number, or Grafana returns a conflict.
- A skill is a map of traps, and Claude only avoids the ones the map marks plainly.

## Try it yourself

Pick an API you have never used with Claude before, even a small public one. Before letting it write any code, ask it to list the three things it would need confirmed first: how requests are authenticated, how paginated results come back, and any known regional or format quirk. Then have it write the first real call and check whether it actually used what it said it needed.
