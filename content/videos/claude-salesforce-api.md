---
title: "Claude, Salesforce API."
seoTitle: "Salesforce REST API: Empty 204 Response Means Success"
description: "Why an empty 204 from a Salesforce PATCH is success, how real errors look, and why Composite calls need each subrequest status checked."
summary: "An empty response from Salesforce's REST API is not a failure, since PATCH returns 204 No Content on success. The video covers instance URLs, Describe, and why a Composite call's outer 200 does not prove every subrequest worked."
keywords: ["salesforce patch 204 no content", "salesforce rest api empty response", "salesforce composite api subrequest status", "salesforce allornone composite explained", "salesforce my domain instance url api", "salesforce describe object updateable field", "update opportunity closed won api", "salesforce api error code array"]
generated: "article"
---

Someone updates a Salesforce record with `PATCH`, gets an empty response, and assumes it failed. The video explains that it did not: `PATCH` returns 204 No Content on success. It then covers how a real failure looks, what a call needs before it touches a field, and a caveat about Composite calls that is easy to miss.

## Silent success, loud failure

A clean `PATCH` update comes back as 204 with nothing in the body, and the video says that emptiness is the success. A failure looks different. Get a field name wrong and the response carries a real body, this time a JSON array with an error code inside it.

The video sums it up this way: success stays silent, and failure always talks back, never as a plain object. That shape difference is how you tell the two apart.

## Instance URL, Describe, then query

Every call needs the org's own instance URL. That is the org's My Domain plus the versioned data path, and there is no shared endpoint across orgs.

Before touching a field, the video describes the object using `Describe`, which shows field names, picklist values, and which fields are actually updateable. It then queries the open Opportunities closing this quarter, with account name and owner, and pulls the Id of the top match. That is the record about to change.

## The update itself

With the Id in hand, the video patches that record's `StageName` to Closed Won. The response comes back 204 and empty, which is exactly what a successful update looks like.

## The Composite caveat

Things change when several updates are chained in one Composite call. There the outer response returning 200 does not mean every subrequest succeeded. Each subrequest carries its own `httpStatusCode`, and only checking those tells you which writes landed and which did not.

A single failed subrequest also does not undo the others unless `allOrNone` was set to true. Without it, the batch is partial and the successful writes stay.

## Trust the code, not the silence

The video's summary has two parts. An empty response is not a failure, because 204 with no body is what success looks like, so trust the status code rather than the silence. And when one call carries several writes, check each one's own code, not just the one wrapping it.

## Key takeaways

- `PATCH` returns 204 No Content on success, so an empty body is the success.
- A real failure carries a body: a JSON array containing an error code.
- Every call needs the org's own instance URL, which is My Domain plus the versioned data path.
- `Describe` an object to confirm field names, valid picklist values, and which fields are updateable.
- A Composite call's outer 200 does not prove every subrequest succeeded.
- Each subrequest has its own `httpStatusCode` that must be checked.
- A failed subrequest does not undo the others unless `allOrNone` is true.

## Try it yourself

Ask Claude to find all open Opportunities closing this quarter, with account name and owner, then update the top one to Closed Won. Watch three things. Does it set the org's real instance URL before making any call? Does it describe the Opportunity object to confirm `StageName` is updateable and Closed Won is a valid picklist value before writing? And does it check the actual status code afterward instead of treating an empty response as a failure?
