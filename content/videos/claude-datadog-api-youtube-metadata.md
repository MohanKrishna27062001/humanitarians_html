---
title: "Claude, Datadog API. — YouTube metadata"
seoTitle: "Claude and the Datadog API: What a Skill File Adds"
description: "Learn what Claude needs from a skill file to use Datadog's API correctly, from v1 and v2 resources to regional sites, pagination, and JSON:API traps."
summary: "Claude does not automatically know an outside API such as Datadog's. This video shows how a skill file carries the account-specific details, and why it works as a map of traps rather than knowledge, helping only where the map is explicit."
keywords: ["claude skill for datadog api", "datadog api regional site error", "datadog v1 and v2 endpoints", "datadog api two required headers", "datadog pagination schemes explained", "json api nesting error datadog", "how claude uses a skill file", "ask claude what it needs before coding"]
generated: "article"
---

Does Claude already know how an outside system like Datadog's API works, or does something have to tell it? The video's answer is that it needs to be told. Claude reads a skill, which is a file, before acting, and that file carries the account-specific detail training alone would not reliably supply.

## Which version covers which resource

The Datadog API splits into v1 and v2 according to what you are asking for, not according to which version is newer. V1 covers metrics, monitors, dashboards, and service levels. V2 covers logs, traces, incidents, and session data. A skill that records this split saves Claude from reaching for the wrong one.

## Two headers and one regional trap

Every request Claude sends carries two headers. One identifies the account, and the other identifies who is calling and what they are allowed to touch.

The sharpest trap is regional. Datadog runs several separate regional addresses, and calling the wrong one returns a flat permission error even when the keys are valid. The skill's fix has two parts: set the region first, then make one throwaway call to the validate endpoint to confirm it before doing anything real.

## Three ways results are paged

Long results arrive a page at a time, and the scheme depends on the endpoint:

- Logs, events, and traces hand back a cursor that is passed forward until it is empty.
- Monitors use a page number.
- Incidents and users use a page size and an offset.

## Quirks that survive even with the file

The video highlights two real JSON:API quirks. One endpoint wraps its results one layer deeper than the others, so the same shape of request needs extra nesting, and the error returned does not say which field was wrong. The second is that updating a dashboard replaces the whole document, so a widget left out of the update is removed rather than skipped.

## Documented plainly versus easy to miss

Having the file does not mean Claude never trips. Where the file states something plainly, such as the region check or the exact error text a missing flag produces, Claude follows it and avoids the mistake. Where a point is buried in a single line or never flagged as a trap, Claude can still get it wrong, much as a person skimming the same page could. The carry-out is that a skill does not make Claude know an API. It gives Claude a map of where the traps are, and Claude only avoids the ones the map marks.

## Key takeaways

- Claude does not automatically know an outside API; a skill file supplies the specifics.
- Datadog splits v1 and v2 by resource, not by age.
- Two headers are needed on every request.
- Wrong regional addresses give a permission error even with valid keys.
- Set the region, then confirm with the validate endpoint.
- Pagination uses cursors, page numbers, or size with offset depending on the endpoint.
- One endpoint nests results deeper, and its errors do not name the faulty field.
- Dashboard updates replace the whole document.

## Try it yourself

Choose an API you have not used with Claude before, even a small public one. Before it writes any code, ask Claude to list the three things it would need confirmed: how requests are authenticated, how paginated results come back, and any regional or versioning quirk. Then have it write the first real call and check whether it used that list. The Datadog skill is in the humanitarians-youtube repository.
