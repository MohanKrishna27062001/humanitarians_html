---
title: "Claude Meets an API It's Never Seen: The Grafana API Skill"
seoTitle: "Claude and the Grafana API: A Skill as a Map of Traps"
description: "How a skill file helps Claude use an API it has not seen: Grafana's time formats, alert rule surfaces, dashboard replace and the limits of the map."
summary: "Claude does not need to already know Grafana's API, because it reads a skill first. The video describes that skill as a map of traps, and shows that Claude only avoids the traps the map marks clearly."
keywords: ["claude skill for an unfamiliar api", "grafana api time format by endpoint", "grafana alert state vs alert definition", "grafana provisioning api ui lock header", "grafana dashboard get then replace", "grafana 412 version conflict dashboard", "grafana annotations api no paging", "how to test claude on a new api"]
generated: "article"
---

The video starts from a guess: that Claude already knows how an outside system such as Grafana's API works. It argues Claude does not have to, because it reads a skill before it acts. The skill works as a map of where the traps are, and the rest of the video shows what is on that map and why its quality decides how well Claude does.

## The first trap: three time formats

Grafana's REST API expects a different time format depending on the endpoint, and a wrong choice returns empty results rather than an error. Data source queries and point annotations take Unix milliseconds. State history takes Unix seconds. Silences take RFC 3339. The example command in the skill relies on GNU date, so on macOS the built-in date needs a different flag.

## Roles and where errors show up

Each request carries a role of viewer, editor, or admin. A 403 means the identity is missing the role the call requires. Viewer is enough to read dashboards and query data, while writing alert rules or silences needs editor or higher.

Data source query results use Grafana's own frame format instead of raw Prometheus JSON. When a query fails, the error sits inside the response at `results.refId.error` while the HTTP status still reads 200, so a check on the status code alone would miss it. A helper that wraps the bearer token in one line is included, but it only lasts for the session.

## Two surfaces for alert rules

Alert rules are reachable two ways, and each answers a different question. The Prometheus API reports live state, whether a rule is firing, pending or inactive, and is read only. The provisioning API holds the definition, with the query, condition and labels, and allows creating, updating and deleting. Rules written through provisioning are locked in the Grafana UI unless the request adds a header that disables that lock.

## Dashboards: get, change, post the whole thing

A dashboard has no partial update. The workflow is to fetch the whole dashboard, modify it, and post the whole object back. If the version number is missing, Grafana responds with a conflict rather than deciding which copy wins.

## Batching queries and narrowing windows

Because data source queries fan out to the underlying database on every call, the skill's design is to batch several queries into one request rather than loop over separate calls. The annotations endpoint has no page parameter, so a long time range is handled by narrowing the window.

## What the map does and does not do

The video is careful not to oversell the skill. Where the file states something plainly, such as the time-format warning near the top or the exact field to check on a data source error, Claude follows it and avoids the mistake. Where a point is only one line, or sits after the read-only examples, Claude can still miss it, much as a person skimming the same page would.

So the carry-out is that a skill does not make Claude know an API. It gives Claude a map of the traps, and Claude only avoids the ones that are actually marked.

## Key takeaways

- Claude reads a skill file before acting, so it does not need to already know a given API.
- Grafana uses Unix milliseconds, Unix seconds and RFC 3339 on different endpoints, and the wrong one yields empty results.
- Query errors can appear inside a response whose HTTP status is 200.
- The Prometheus API shows live alert state; the provisioning API defines rules and can lock them in the UI.
- Updating a dashboard means fetching it, changing it and posting it back whole, with its version number.
- Batch data source queries into one request, and narrow the window for annotations.
- A skill is only as protective as the traps it marks clearly.

## Try it yourself

Choose an API you have not used with Claude, even a small public one. Before it writes any code, ask it to list three things it needs confirmed: how requests are authenticated, how paginated results come back, and any known regional or format quirk. Then let it write the first real call and check whether it used what it just said it needed.
