---
title: "Asana API with Claude: Unwrap Data, Trust the GID"
seoTitle: "Asana API with Claude: Data Envelope, GIDs and Pagination"
description: "Learn the two habits behind every Asana API call Claude makes: use gids instead of names and unwrap the data key, so task lists are never quietly wrong."
summary: "This short video explains how Claude manages Asana tasks by calling the Asana API directly. Two habits govern every call: address objects by gid and unwrap the top-level data key. Skip either and a request can succeed while returning the wrong result."
keywords: ["how claude uses the asana api", "asana api gid instead of name", "asana api data key response", "asana api pagination incomplete task list", "list incomplete asana tasks with claude", "asana workspace search 100 result limit", "asana workspace project task hierarchy", "claude asana plugin prompt to try"]
generated: "article"
---

A common assumption is that Claude manages Asana by opening the app and clicking around. It does not. It calls the Asana API directly, sending and reading back JSON. This short video, part of the Claude Basics playlist and covering the Claude Tag plugin for Asana, explains what that API looks like and the two habits that keep Claude's task lists from being quietly wrong.

## Responses arrive in a data envelope

Ask Claude to list your incomplete tasks and the answer does not come back as a bare list. Every response the Asana API sends, whether a read or a write, arrives wrapped under a top-level data key. So the code reading the response has to unwrap data rather than assume the result is a plain array.

## Objects are addressed by gid, never by name

Every object inside the response is addressed by a gid, a string ID. A name will not do where a gid is required. The video presents this as one of the two rules that govern every single call Claude makes to Asana.

## How the objects nest

The structure is the same every time. A workspace holds projects, a project holds sections and tasks, and a task carries comments and subtasks. The video traces a single request through this hierarchy: asking for every incomplete task assigned to you in one project. Claude first resolves your name to a gid, then lists tasks under the project's gid, unwrapping data at each step.

## Complete, or quietly wrong

When both habits are followed, the same request returns every task across all pages, because the bundled script keeps requesting until the pages run out. If either habit is skipped, the request can look successful while it quietly returns the wrong task, or only the first page, assuming the first page is the whole list.

The video flags one exception. Workspace search is capped at 100 results and does not paginate at all. It is the one operation that does not follow the other nine.

## The carry-out

Every Asana call Claude makes turns on a gid instead of a name, and a response unwrapped from data. The video's claim is that get those two right and the ten operations take care of themselves. It is a compression of the essentials rather than a full reference, so details such as field selection and rate limits are outside its scope.

## Key takeaways

- Claude manages Asana by calling its API directly, not by clicking through the app.
- Every API response, read or write, is wrapped under a top-level data key.
- Every object is addressed by a gid, a string ID, never by name.
- Workspaces hold projects, projects hold sections and tasks, and tasks carry comments and subtasks.
- Claude resolves your name to a gid before listing your tasks.
- Without pagination, a request can return only the first page and still look successful.
- Workspace search is capped at 100 results and does not paginate.

## Try it yourself

Give Claude this prompt: list all incomplete tasks assigned to me across all my Asana workspaces, and tell me which ones are due this week. Then watch three things. Does it resolve who you are before it lists anything? Does it unwrap data from every response instead of assuming a bare array? And does it use the bundled script rather than a single unpaginated request that misses tasks past the first page?
