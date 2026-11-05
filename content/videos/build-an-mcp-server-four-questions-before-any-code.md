---
title: "Build an MCP Server: Four Questions Before Any Code"
seoTitle: "Build an MCP Server: Deployment, Tools and Descriptions"
description: "Before writing any MCP server code, decide deployment, users, number of actions, and auth. Learn the three deployment paths and two tool-design patterns."
summary: "Ask Claude to build an MCP server and it asks four questions before writing code: deployment, users, how many actions, and auth. The video covers three deployment paths, two tool-design patterns, and why a tool's description matters more than its name."
keywords: ["how to build an mcp server", "remote http vs mcpb vs stdio", "mcp one tool per action", "mcp search and execute pattern", "write good mcp tool descriptions", "mcp server deployment options", "mcp resources prompts and elicitation", "mcp server for github api"]
generated: "article"
---

It is natural to assume the first step in building an MCP server is writing code. The video says it is not: discovery comes first. When asked to build an MCP server, Claude asks four questions before writing any code, covering deployment, users, how many actions, and auth. Getting that order backwards means you are not tweaking the server later, you are rewriting it.

## Three deployment paths, ranked

The video ranks three deployment paths by preference.

- **Remote HTTP** wins by default for anything wrapping a cloud API. It has zero install friction, one server serves all users, and OAuth flows work properly with redirect handling. It is recommended unless the server must touch the user's local machine.
- **MCPB**, the Model Context Protocol Bundle, packages a server with its runtime for local distribution. It is the sanctioned way to ship when the server reads local files, drives a desktop app, or talks to localhost services.
- **Local stdio via npx** is fine for personal prototypes but painful to distribute. The video recommends it only as a stepping stone, with the MCPB upgrade path flagged from the start.

The decision matrix covers seven scenarios. A small API goes remote. A large API goes remote with search plus execute. UI widgets go MCP app. A local desktop tool goes MCPB.

## Two tool-design patterns

**Pattern A is one tool per action.** When the action space is under about fifteen operations, give each action a dedicated tool with a tight description and schema. Claude reads the list once and knows exactly what is possible.

**Pattern B is search plus execute.** When wrapping a large API with dozens to hundreds of endpoints, listing every operation floods the context window and degrades model performance. Instead, expose two tools: `search_actions`, which returns matching operations for a natural-language intent, and `execute_action`, which runs one operation by ID. Context stays lean.

A hybrid option promotes the three to five most-used actions to dedicated tools and keeps the long tail behind search and execute.

## Beyond tools

The other three primitives are resources, which are host-browsable docs and data; prompts, which are user-triggered slash commands; and elicitation, which is spec-native mid-tool user input without building any UI. Most servers only need tools, but knowing the others prevents reinventing the wheel.

## The description decides

Once the server exists, Claude picks a tool by reading its description, not its name. A description that only restates the name, such as "creates an issue" for `create_issue`, does not tell Claude when to choose it over a similar tool like `update_issue`. The more specific the description, the more reliably Claude calls the right tool at the right moment.

## Key takeaways

- Discovery comes before code: deployment, users, how many actions, and auth.
- Remote HTTP is the default for cloud APIs because of zero install friction, one server for all users, and working OAuth.
- MCPB is the route when the server must reach local files, desktop apps, or localhost services.
- Local stdio via npx suits personal prototypes and is hard to distribute.
- Under about fifteen operations, use one tool per action. For large APIs, use search plus execute, or a hybrid.
- Resources, prompts, and elicitation exist alongside tools, though most servers only need tools.
- Claude chooses tools by reading descriptions, so a description that repeats the tool's name is a warning sign.

## Try it yourself

Paste this into Claude: "Build an MCP server that wraps the GitHub API, with tools for creating issues, searching repositories, and getting pull request details." Then watch four things. Does it ask discovery questions before writing code? Does it recommend remote HTTP as the default and say why? Does it use one tool per action, since three tools is well under the search-plus-execute threshold? And are the descriptions specific enough to tell `create_issue` apart from `update_issue`? Then try it on your own API idea.
