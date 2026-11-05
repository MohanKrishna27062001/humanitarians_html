---
title: "Salesforce API: Empty Responses Mean Success, Not Failure"
seoTitle: "Salesforce API: Why a 204 Empty Response Means Success"
description: "Learn why Salesforce PATCH and DELETE return 204 No Content on success, how real errors look, and why Composite calls need per-subrequest checks."
summary: "The video explains that an empty 204 response from a Salesforce PATCH or DELETE is what success looks like, while failures return a JSON array with an error code. It also shows why a 200 on a Composite call does not prove every subrequest worked."
keywords: ["salesforce 204 no content success", "salesforce patch empty response meaning", "salesforce api error code json array", "salesforce instance url my domain", "salesforce describe object before update", "salesforce composite api allornone", "salesforce composite subrequest http status code", "update opportunity stage closed won api"]
generated: "article"
---

Someone updates a Salesforce record with PATCH, gets an empty response back, and assumes it failed. This short video explains why that assumption is wrong. PATCH returns 204 No Content on success, and the emptiness is the success. The video, part of a series on Claude plugins, then covers how to tell a real failure apart and what to check when several writes travel together.

## Silent success, loud failure

A clean update comes back as 204 with nothing at all in the body. A real failure looks different. If you get a field name wrong, the response carries an actual body: a JSON array with an error code inside it. The video sums it up as success staying silent and failure always talking back, and never as a plain object. Those two shapes never match, so the response itself tells you which one you got.

## Instance URL, Describe, then query

Every call needs the org's own instance URL, which is the My Domain plus the versioned data path. There is no shared endpoint across orgs. Before touching any field, the video calls Describe on the object to confirm field names, picklist values and which fields are actually updateable.

The worked example then queries the open Opportunities closing this quarter, with the Account name and owner, and pulls the Id of the top match. That is the record about to change. Patching that Id's StageName to Closed Won returns 204, empty, which is exactly what a successful update looks like.

## The Composite caveat

The next scenario chains several updates in one Composite call. Here the outer response returning 200 does not mean every subrequest succeeded. Each subrequest carries its own HTTP status code, and only checking those tells you which wrote and which did not.

A single failed subrequest also does not undo the others, unless allOrNone was set to true. Otherwise the batch is partial and the writes that succeeded stay.

## Trust the status code, not the silence

The takeaway is to read the status code rather than the amount of content in the body. A 204 with no body is what success looks like. And when one call carries several writes, check each write's own code, not only the one wrapping it.

## Key takeaways

- PATCH and DELETE return 204 No Content on success; the empty body is the success.
- A failure carries a body: a JSON array containing an error code.
- Each org has its own instance URL, which is the My Domain plus the versioned data path.
- Use Describe first to confirm field names, picklist values and updateable fields.
- A 200 on a Composite call does not mean every subrequest worked.
- Each subrequest has its own HTTP status code that must be checked.
- Without allOrNone set to true, a failed subrequest does not undo the others.

## Try it yourself

Give Claude this prompt: "Find all open Opportunities closing this quarter, with Account name and owner, then update the top one to Closed Won." Watch three things. Does it set the org's real instance URL before making any call? Does it Describe the Opportunity object to confirm StageName is updateable and Closed Won is a valid picklist value before writing? And does it check the actual status code afterward rather than treating an empty response as a failure?
