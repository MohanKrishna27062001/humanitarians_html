---
title: "Claude, Jira API."
seoTitle: "Claude and the Jira API: Transitions, ADF and Paging"
description: "Why Claude cannot set a Jira status directly: it posts a transition ID, sends comments as ADF JSON, and pages search results by token."
summary: "The video shows how Claude actually moves a Jira ticket, comments on it and searches for it. Status changes use transition IDs, comments must be JSON trees, and search pages by token instead of by total."
keywords: ["jira api change issue status transition", "jira transition id differs per workflow", "jira api comment atlassian document format", "jira comment 400 error plain string", "jira jql search next page token", "jira rest api v3 vs agile v1", "jira api assignee account id not email", "claude jira api prompt to test"]
generated: "article"
---

A common assumption is that Claude can set a Jira ticket's status directly, like dragging a card across a board. The video says it cannot. It follows one request, finding open bugs, moving one and commenting on it, to show the habits that make Jira calls work and the quiet failures that follow when they are skipped.

## There is no status field to write

Jira has no direct status field to set. To move a ticket to Done, Claude first lists the issue's available transitions, matches the one named Done, and posts that transition's ID. The ID is not universal. The same-looking transition on a different ticket, in a different workflow, often carries a different ID, so the lookup has to happen each time.

## Two API families

The work splits across two families. Platform REST v3 handles issues, projects and search, and is the default. Agile REST v1 covers only boards and sprints, concepts the core issue model does not have.

## Searching with JQL

In the example, Claude searches a project for every open bug assigned to you. The search has to be bounded by at least one filter clause or it is rejected. Results come back a page at a time, with a token pointing to the next page rather than a total count. The paging loop ends when the token disappears, and no total is needed.

## Comments are a JSON tree

When Claude comments on the top result, the comment cannot be a plain string. It has to be a JSON tree: a versioned document built from typed content blocks. Send a string and Jira returns a 400 error. The video notes the error never mentions ADF, so it simply looks broken.

## Two ways to fail quietly

Skipping either habit fails without explaining itself, and in two different ways. A loop written to expect a total from search never gets one and can spin forever waiting. A comment sent as a plain string produces a 400 with no clue about the cause.

One more habit is worth carrying: assignees and watchers take an account ID, never an email, because Jira stopped accepting email lookups years ago.

## The carry-out

The video boils it down to two habits for writes: use a transition ID instead of a status you set, and use a JSON tree instead of a string you type. With those right, the three pagination schemes are the main remaining thing to watch.

## Key takeaways

- Jira has no status field to write; Claude lists transitions, matches by name and posts the transition ID.
- Transition IDs differ across tickets and workflows, so they must be looked up each time.
- Platform REST v3 is the default; Agile REST v1 is only for boards and sprints.
- JQL search must include at least one filter clause and pages by next-page token, not by total.
- A paging loop should stop when the token disappears.
- Comments must be a JSON document tree; a plain string returns a 400 that does not mention ADF.
- Assignees and watchers take an account ID, not an email.

## Try it yourself

Ask Claude: "Find all open bugs in PROJ assigned to me, then move the highest-priority one to In Progress and add a comment explaining why." Watch three things: whether it lists the issue's transitions and posts by ID instead of trying to set the status, whether it sends the comment as a JSON tree, and whether it keeps paging by token instead of waiting for a total that search never sends.
