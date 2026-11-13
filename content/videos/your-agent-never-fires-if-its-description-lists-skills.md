---
title: "Your Agent Never Fires If Its Description Lists Skills"
seoTitle: "How to Write a Claude Agent Description That Triggers"
description: "Learn why a Claude agent's description field decides whether it is dispatched, and how to write it as when to use the agent rather than what it does."
summary: "An agent file's description is loaded into context whenever the agent is registered, so it alone decides whether Claude dispatches the agent. The video covers the five frontmatter fields and the maintenance cost of keeping the description and body in sync."
keywords: ["how to write claude agent description", "claude agent frontmatter fields explained", "use this agent when description format", "why claude never dispatches my agent", "agent description vs system prompt body", "when to invoke section in agent file", "minimum tools for a claude agent", "keep agent triggers in sync"]
generated: "article"
---

It is easy to assume that listing an agent's skills is enough for Claude to know when to use it. The video says it is not: only the agent's triggers tell Claude when to reach for it. An agent that describes only what it can do will never fire. The video walks through the structure of an agent file to show where those triggers belong.

## What an agent file contains

An agent file has two parts: YAML frontmatter, followed by a markdown system-prompt body. The body spells out the agent's role and output format, along with a "When to invoke" section that contains worked scenarios.

## The five frontmatter fields

The frontmatter has five fields:

- **name**: lowercase with hyphens, 3 to 50 characters, starting and ending alphanumeric. Examples are code-reviewer, test-generator and security-analyzer.
- **description**: the field that matters most, because it is loaded into context whenever the agent is registered. It decides whether Claude dispatches the agent at all.
- **model**: inherit is the recommended default.
- **color**: visual distinction in the interface, nothing more.
- **tools**: the array of permissions the agent actually gets. Give it only what the task needs.

## Two locations, one job each

The description has one job: state exactly when Claude should reach for the agent, not just what it can do. The format is "Use this agent when...", followed by "Typical triggers include" with two to four concrete scenarios, and then a pointer to the "When to invoke" section in the body. That prose names real triggers, both proactive and reactive, covers different phrasings of the same request, and says when not to use the agent.

The body's own "When to invoke" section repeats this in more depth. It gives a bold scenario name, what the situation looks like, and what the agent should actually do. The two have different audiences: the description serves Claude's dispatch decision, and the body serves the agent once it is already running.

## The sync problem

The catch with two locations is that nothing keeps them in sync. If the trigger scenarios change and only the description is updated, the body's "When to invoke" section goes stale, and the same is true the other way around. Because Claude reads only the description to decide whether to dispatch, a scenario that lives only in a stale body section is never even checked at that moment. Keeping both current by hand every time triggers change is the actual maintenance cost of this design.

The video is explicit about what it does not claim. It makes no statement about how Claude's dispatch mechanism chooses between candidate agents internally. It also does not say this two-location prose format is the only way to write an agent description; it is the format the source skill specifies.

## Key takeaways

- Listing an agent's skills does not tell Claude when to use it; triggers do.
- An agent file is YAML frontmatter plus a markdown system-prompt body.
- The description is loaded into context whenever the agent is registered and decides dispatch.
- Write the description as "Use this agent when...", with two to four concrete trigger scenarios.
- Include proactive and reactive triggers, varied phrasings, and when not to use the agent.
- The body's "When to invoke" section is for the agent once it is running.
- Give the tools field only what the task needs.
- Updating triggers in one place and not the other leaves the other stale.

## Try it yourself

Paste this into Claude: "Create an agent for my plugin that reviews pull request diffs for security issues." Then check what it wrote. Does the description say "Use this agent when..." with two to four concrete scenarios, or does it list what the agent does? Does the body have a "When to invoke" section with worked scenarios? Are the tools the minimum needed, probably Read and Bash rather than Write? Run it on your own plugin idea, not the video's example. The code is in the Humanitarians AI YouTube repository.
