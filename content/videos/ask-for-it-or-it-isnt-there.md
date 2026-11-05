---
title: "Ask For It, Or It Isn't There."
seoTitle: "HubSpot API Basics: Opt-In Fields, Dedup and Search Lag"
description: "How HubSpot's CRM API returns only the properties you ask for, how dedup keys and associations work, and why search can lag behind a new record."
summary: "This video explains the HubSpot API skill for Claude plugins. All five record types share one path, but a plain call returns only a few default fields, and the search endpoint can miss a record created moments ago."
keywords: ["hubspot api returns only default properties", "how to request properties in hubspot api", "hubspot crm v3 objects endpoint explained", "hubspot search eventually consistent delay", "hubspot contact dedup by email", "hubspot typed associations between records", "list hubspot contacts with claude", "hubspot api pagination cursor"]
generated: "article"
---

A common assumption is that calling HubSpot's contacts endpoint hands back everything about a contact. It does not; it returns only the fields you name. This video from the Claude Basics playlist covers the HubSpot API skill for Claude plugins and explains why asking for what you want is the central habit when working with HubSpot records.

## One path for five record types

HubSpot's five record types, contacts, companies, deals, tickets and custom objects, all live under the same path, /crm/v3/objects/ followed by the object type. List, get, create, update, delete and search work identically for all five. Only the type name changes.

## Properties are opt-in

The part that trips people up is that a plain get or list call returns only a small set of default fields: an internal ID, a couple of timestamps, and one or two type-specific fields such as email for a contact. Every other property is opt-in. You must name exactly the fields you want, or the record comes back looking almost empty. The field is not missing; you simply never asked for it.

## Dedup rules differ by type

Each record type has its own rule for duplicates.

- Contacts dedupe on email. Creating one that already exists produces a conflict, not a copy.
- Companies dedupe on domain.
- Deals and tickets have no dedup key at all, so you have to check before you create one.

## Typed associations and the property catalog

Links between records, such as a deal tied to a contact or a contact tied to a company, are typed associations. They are discovered and created through their own endpoint. Before writing anything, the video recommends reading the property catalog first, which lists the names and allowed values for every field, so a request does not fail on a name that was guessed wrong.

## The catch: search lags

HubSpot's search endpoint is eventually consistent. Create or update a record and search for it immediately, and it might not show up yet, because the write and the search index are not on the same clock. The skill gives no guidance on how long to wait or when to give up, so a script that searches right after creating a record can silently miss it. A missing result does not mean the record is absent; the index may just not have caught up. When you need certainty, look the record up directly by its ID instead of trusting a search you just triggered.

## Key takeaways

- All five HubSpot record types share one path, with only the type name changing.
- A plain get or list returns only a few default fields; every other property is opt-in.
- Name the exact properties you want, or records look nearly empty.
- Contacts dedupe on email and companies on domain; deals and tickets have no dedup key.
- Associations between records are typed and handled through their own endpoint.
- Read the property catalog before writing, to avoid guessing field names.
- Search is eventually consistent, so a just-created record may be missing; fetch by ID when you need to be sure.

## Try it yourself

Paste this into Claude: use the HubSpot API skill to find all contacts in the lead lifecycle stage created in the last 30 days, and return their email and phone number. Then check what Claude does. Does it pass the properties for email and phone, or come back with near-empty records? Does it follow the pagination cursor through every page of results? And does it mention that a contact created moments ago might not show up in search yet? Run it on your own HubSpot workspace or a sandbox account.
