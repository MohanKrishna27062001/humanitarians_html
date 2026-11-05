---
title: "HubSpot API: Ask for Every Field, or You Get Almost None"
seoTitle: "HubSpot API Opt-In Properties and Search Lag"
description: "Why HubSpot API calls return near-empty records unless you name the properties you want, plus dedup keys, associations and search lag."
summary: "HubSpot's five record types share one API path, but a plain get or list call returns only a few default fields. The video explains opt-in properties, per-type dedup rules, typed associations and why search can lag behind a write."
keywords: ["hubspot api returns empty properties", "hubspot crm v3 objects endpoint", "how to request hubspot contact properties", "hubspot contact dedup by email", "hubspot typed associations endpoint", "hubspot search eventually consistent", "hubspot api pagination cursor", "claude hubspot api skill"]
generated: "article"
---

Someone assumes that calling HubSpot's contacts endpoint will hand back everything about a contact. It will not. The video explains that you get only the fields you name, plus a few defaults, and that a search run right after a write can miss the new record. It is part of the Claude Basics playlist and covers a Claude plugin skill for the HubSpot API.

## One path for five record types

HubSpot's five record types are contacts, companies, deals, tickets and custom objects. All of them live under the same path, /crm/v3/objects/{objectType}. List, get, create, update, delete and search work identically for all five, and only the type name changes. That uniformity makes the API easy to learn, but it hides the detail that trips people up.

## Properties are opt-in

A plain get or list call returns only a small set of default fields: an internal ID, a couple of timestamps, and one or two type-specific fields such as email for a contact. Every other property is opt-in. You have to name exactly the fields you want, or the record comes back looking almost empty. The field is not missing; you simply never asked for it. The video's one-line summary is that if you do not ask for it, it is not there.

## Dedup rules and typed associations

Each record type has its own rule for duplicates:

- Contacts are deduplicated on email. Creating one that already exists gives a conflict, not a copy.
- Companies are deduplicated on domain.
- Deals and tickets have no dedup key at all, so you must check before you create one.

Links between records, such as a deal tied to a contact or a contact tied to a company, are typed associations. They are discovered and created through their own endpoint. Before writing anything, the video recommends reading the property catalog first, which lists the names and allowed values for every field, so a request does not fail on a name you guessed wrong.

## Search is eventually consistent

The catch is that HubSpot's search endpoint is eventually consistent. If you create or update a record and then search for it immediately, it might not show up yet, because the write and the search index are not on the same clock. The skill never says how long to wait or when to give up, so a script that searches right after creating a record can silently miss it.

A missing result therefore does not prove the record is absent. If you need to be sure, look the record up directly by its ID instead of trusting a search you just triggered.

## What the video does not claim

The video makes no claim about how long the search index takes to catch up, since the source skill documents the behavior without giving wait or retry guidance and no number is invented. It also does not claim every object type behaves identically end to end. The uniform path and opt-in properties are shared across all five, but dedup keys and default fields differ per type.

## Key takeaways

- All five HubSpot record types share the path /crm/v3/objects/{objectType}.
- A plain get or list returns only default fields, so near-empty records usually mean you did not name the properties.
- Contacts dedup on email, companies on domain, and deals and tickets have no dedup key.
- Associations between records are typed and discovered through their own endpoint.
- Read the property catalog before writing, so you use correct field names and allowed values.
- Search is eventually consistent, so a record created moments ago may not appear yet.
- When you must be certain a record exists, fetch it by ID.

## Try it yourself

On your own HubSpot workspace or a sandbox account, paste this into Claude: "Use the hubspot-api skill to find all contacts in the lead lifecycle stage created in the last 30 days, and return their email and phone number." Then check whether it names the email and phone properties, follows the pagination cursor through every page, and mentions that a just-created contact might not appear in search yet.
