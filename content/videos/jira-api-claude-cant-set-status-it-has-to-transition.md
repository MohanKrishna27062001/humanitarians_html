---
title: "Jira API: Claude Can't Set Status — It Has to Transition"
seoTitle: "Jira API: Transition Tickets Instead of Setting Status"
description: "How Claude works with the Jira API: transition IDs instead of a status field, token-based search paging, JSON-tree comments and account IDs for assignees."
summary: "Jira has no status field to write, so Claude lists an issue's transitions and posts the matching ID. The video also covers the two REST families, paging by token, comments as a JSON document tree and account IDs instead of emails."
keywords: ["jira api set status transition id", "how to move jira ticket with api", "jira rest api v3 vs agile", "jira jql search next page token", "jira comment adf json format", "jira api 400 error on comment", "jira assignee account id not email", "claude jira api prompt example"]
generated: "article"
---

It seems natural to assume that Claude can set a Jira ticket's status to Done the way you would drag a card across a board. This video explains why it cannot, and walks through a single request, finding open bugs, moving one and commenting on it, to show the habits that make Jira API calls work.

## Status is a transition, not a field

Ask Claude to move a ticket to Done and it cannot just write that value, because Jira has no direct status field to set. Claude first lists the issue's available transitions, matches the one named Done, and posts that transition's ID. The ID is not universal. The same-looking transition on a different ticket, in a different workflow, often carries a different ID. So the lookup has to happen for each issue rather than being hard-coded.

## Two API families

Two REST families split the work. Platform REST v3 handles issues, projects and search, and is the default. Agile REST v1 covers only boards and sprints, which are concepts the core issue model does not have. Knowing which family a task belongs to avoids calling the wrong one.

## Tracing one request: search, page, comment

The video traces a request in which Claude searches a project for every open bug assigned to you. Two rules apply to the search:

- It has to be bounded by at least one filter clause, or it is rejected.
- Results come back a page at a time, with a token pointing to the next page instead of a total count.

The paging loop finishes when the token disappears. No total is needed. Then Claude comments on the top result, and that comment cannot be a plain string. It has to be a JSON tree, a versioned document built from typed content blocks, or Jira sends back a 400.

## Two ways to fail quietly

Getting these right means the loop stops when the token disappears and the comment posts cleanly as a typed JSON tree. Getting them wrong fails quietly in two different ways:

- A loop written to expect a total from search never gets one and can spin forever waiting.
- A comment sent as a plain string comes back as a 400, but the error never mentions the document format, so it simply looks broken.

One more habit worth carrying: assignees and watchers take an account ID, never an email. Jira stopped accepting email lookups years ago.

## Two habits and one thing to watch

The video's carry-out is two habits: a transition ID instead of a status you set, and a JSON tree instead of a string you type. Get those right, and the three pagination schemes used across the API are the main thing left to watch for. It also notes that the skill covers more than these two rules. They are the two that govern every write.

## Key takeaways

- Jira has no status field to write, so changing status means choosing a transition.
- List an issue's available transitions, match the one you want by name and post its ID.
- A transition ID can differ between tickets and workflows, so look it up each time.
- Platform REST v3 is the default for issues, projects and search; Agile REST v1 is for boards and sprints.
- JQL search must be bounded and pages by a next-page token, with no total count.
- Comments must be sent as a JSON document tree, not a plain string.
- Assignees and watchers take an account ID, not an email.

## Try it yourself

Paste this prompt into Claude, with your own project key: find all open bugs in the project assigned to me, then move the highest-priority one to In Progress and add a comment explaining why. Watch three things: does it list the transitions and post by ID, does it send the comment as a JSON tree, and does it keep paging by token instead of waiting for a total that never arrives.
