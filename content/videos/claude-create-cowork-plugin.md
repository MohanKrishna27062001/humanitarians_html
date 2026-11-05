---
title: "Claude, Create Cowork Plugin."
seoTitle: "How Claude Plans a Cowork Plugin Before Building"
description: "See the five phases Claude follows when asked to create a Cowork plugin, and why nothing is written until you confirm the component plan."
summary: "When asked to create a plugin, Claude does not generate one at once. The video walks through five phases, from discovery to packaging, and shows that files are written only after you confirm a plan of skills, connectors, agents, or hooks."
keywords: ["how to create a cowork plugin", "claude plugin planning phases", "claude skills mcp agents hooks", "what does claude do before building", "claude waits for confirmation before writing", "onboarding plugin for new hires", "claude component planning table", "ask claude to plan before building"]
generated: "article"
---

Ask Claude to create a plugin and you might expect it to produce one on the spot. The video shows that it does not. First it plans, and the plan is something you confirm before a single file exists. The example used throughout is a plugin that onboards new hires.

## Five phases, not one step

Claude does not start writing files when asked for a new plugin. It runs five phases in order: discovery, component planning, design, implementation, and then review and package. The video stresses that this is a sequence, with implementation sitting fourth rather than first.

## Discovery comes first

Discovery asks the basic questions. What should this plugin do, and who is going to use it? Everything later depends on those answers, so Claude settles them before moving on to what the plugin is made of.

## Choosing the pieces

In component planning, Claude decides which building blocks the plugin needs. The video lists the options as a set of four:

- a skill for know-how
- an MCP server for an outside tool
- an agent for a multi-step task
- a hook that fires on its own

For the onboarding plugin, the example comes out as one skill for the checklist and a connector to the HR system. Claude lays this out in a table and waits for your confirmation.

## Build only after yes

Implementation starts only after you confirm the plan. Every file is then written in one pass, matching exactly what was agreed. If you answer "whatever you think is best" instead of choosing, Claude does not stall and does not guess silently. It gives a specific recommendation and still waits for your yes before writing anything. In either case, the onboarding plugin exists as a file only once you have said go.

## Key takeaways

- Claude plans before it builds, even for a plugin request.
- The five phases are discovery, component planning, design, implementation, and review and package.
- Discovery establishes what the plugin should do and who will use it.
- Component planning chooses among skills, MCP servers, agents, and hooks.
- The plan is shown as a table and needs your confirmation.
- Files are written in one pass, matching the agreed plan.
- "Whatever you think is best" gets a specific recommendation and still waits for approval.

## Try it yourself

Ask Claude to build you something you actually want, such as a plugin, a script, or a short document. Before it writes anything, ask it to lay out its plan in phases and wait for your yes. Then watch whether it asks real questions or just guesses and goes. The skill behind the video is in the humanitarians-youtube repository under claude-bear.
