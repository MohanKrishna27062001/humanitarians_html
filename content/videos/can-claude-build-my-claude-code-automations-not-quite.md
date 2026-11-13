---
title: "Can Claude Build My Claude Code Automations? Not Quite"
seoTitle: "Can Claude Build Claude Code Automations? It Recommends"
description: "The Automation Recommender scans your codebase and suggests hooks, subagents, skills, plugins and MCP servers, but it never writes or installs them."
summary: "The video explains the Automation Recommender, a read-only skill that analyzes a codebase and recommends Claude Code automations across five types. It stops short of building anything, so the last step from recommendation to command is yours."
keywords: ["claude code automation recommender skill", "claude code hooks subagents skills plugins mcp", "difference between claude code hooks and subagents", "can claude build claude code automations", "claude code format on save hook", "claude code security reviewer subagent", "recommend mcp servers for my codebase", "read-only analysis skill claude code"]
generated: "article"
---

A common assumption is that you can ask Claude to build your Claude Code automations for you. The video says you cannot: the Automation Recommender only recommends them. It is a read-only analysis skill that looks at your project and tells you what to add and why, and the video spends its time on exactly where that recommendation ends.

## The five automation types

The recommender covers the whole Claude Code extensibility surface, which the video splits into five types:

- Hooks run automatically on tool events, such as formatting on save, blocking a risky edit, or running tests after a change.
- Subagents are specialized agents that Claude can run in parallel, for example a code reviewer, a security auditor or a test writer.
- Skills are packaged workflows, invoked deliberately by Claude or through a slash command.
- Plugins bundle related skills together so they install in one step.
- MCP servers connect Claude to things outside it, such as databases, APIs, browsers and documentation.

The same two questions apply to all five: what triggers it, and how wide is its scope? Hooks are automatic and event-driven, subagents run in parallel, skills are invoked on purpose, plugins group skills, and MCP servers reach outside Claude entirely.

## How the skill analyzes a project

The skill works in three phases. First it reads the codebase: package files for language and framework, existing Claude configuration, test setup, CI files, and database and API code. Second, it matches what it found to specific recommendations, one type at a time. Third, it writes a report.

## Why it caps the list

The matching phase includes a deliberate limit. The skill recommends one or two items per category, the single most valuable pick rather than everything possible, and it tells you that you can ask for more. The report itself contains a profile of your codebase, followed by one section per automation type, each saying what to add, why it fits, and how to install it. The video gives examples of the matching: a configured Prettier suggests a format-on-save hook, a GitHub repository suggests the GitHub MCP server, and code touching authentication or payments suggests a security-reviewing subagent.

## The catch: recommending is not installing

The video's central point is that a recommendation is not the same as a runnable step. For a subagent, the skill points to a template file rather than writing the scaffold inline. For a plugin, it names the plugin but not the install command, which remains a separate lookup. The skill is read-only from start to finish. It never edits your files, and it does not always finish that last step either. The distance between "here is what to add" and "here is the exact command" is left for you to close. The video is careful to say this describes the pattern the skill's structure produces, not an audit of every possible output.

## Key takeaways

- The Automation Recommender analyzes a codebase and recommends automations; it does not build them.
- It covers five types: hooks, subagents, skills, plugins and MCP servers.
- Each type differs in what triggers it and how wide its scope is.
- The skill reads package files, Claude config, test setup, CI files, and database and API code.
- It caps recommendations at one or two per category and says you can ask for more.
- The report includes a codebase profile and a section per type with what to add, why, and how to install.
- Subagent suggestions may point to a template, and plugin suggestions may lack the install command.

## Try it yourself

In any real project of your own, paste a prompt asking Claude to analyze the codebase and recommend Claude Code automations. Then check two things. For any subagent it suggests, does it write the actual agent file or only point you at a template? And for any plugin, does it give the exact install command or just the plugin's name? That gap between the recommendation and the runnable step is the test the video proposes.
