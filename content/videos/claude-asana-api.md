---
title: "Claude, Asana API."
seoTitle: "How Claude Uses the Asana API: gid, Data and Pages"
description: "Learn how Claude manages Asana tasks through the REST API, using gids instead of names, unwrapping the data key, and paging through every result."
summary: "Claude does not click around inside Asana; it calls the Asana REST API and reads back JSON. The video explains the two habits behind every call, using a gid rather than a name and unwrapping data, plus why pagination matters."
keywords: ["how claude uses the asana api", "asana api gid instead of name", "asana api data envelope response", "asana api pagination incomplete results", "list incomplete asana tasks with claude", "asana workspace project task structure", "asana workspace search 100 result limit", "claude asana plugin tutorial"]
generated: "article"
---

A common assumption is that Claude manages your Asana tasks by opening the app and clicking around. The video explains that it does not. Claude calls Asana's own REST API directly, sending requests and reading back JSON. The video then looks at what that API returns and the two habits that decide whether a request gives the right answer.

## Claude calls the API, not the app

Instead of working through the Asana interface, Claude sends requests to the API and reads the JSON that comes back. This is the starting point of the whole video: the question is not how Claude navigates a screen, but what the API's responses look like and how Claude has to handle them. The video frames this with a simple request, asking Claude to list your incomplete tasks.

## A data envelope, not a bare list

The answer to that request does not come back as a bare list. Every response the Asana API sends, whether a read or a write, arrives wrapped under a top-level data key. Every object inside it is addressed by a gid, a string global ID, never by a name. Anything that expects a plain array, or that tries to refer to an object by its name, will go wrong.

## How the objects nest

The objects nest the same way every time. A workspace holds projects. A project holds sections and tasks. A task carries comments and subtasks. This predictable structure is what lets one pattern work across the whole API.

## One request traced through

Take a request for every incomplete task assigned to you in one project. Claude first resolves your name to a gid. It then lists the tasks under that project's gid, unwrapping data at each step. If the bundled script keeps requesting until the pages run out, the list comes back complete, page after page.

## When a request looks fine but is wrong

Skip either habit and the request can look successful while quietly returning the wrong task or only the first page. Assuming a name works where a gid is required is one mistake. Assuming the first page is the whole list is the other. The video adds one more thing to watch for: workspace search is capped at 100 results and does not paginate at all. It is the one operation that does not follow the other nine.

## Key takeaways

- Claude does not click around inside the Asana app; it calls the REST API and reads JSON.
- Every response, read or write, arrives wrapped under a top-level data key.
- Every object is addressed by a gid, a string global ID, never by a name.
- Objects nest consistently: a workspace holds projects, a project holds sections and tasks, and a task carries comments and subtasks.
- Claude resolves your name to a gid before listing tasks, and unwraps data at each step.
- A bundled script that keeps requesting until the pages run out returns the complete list.
- Workspace search is capped at 100 results and does not paginate, unlike the other operations.

## Try it yourself

Ask Claude to list all incomplete tasks assigned to you across all your Asana workspaces, and to tell you which ones are due this week. Then watch three things. Does it work out who you are before it lists anything? Does it unwrap data from every response rather than assuming a bare array? And does it use the bundled script, rather than a single unpaginated request that could quietly miss tasks past the first page?
