---
title: "MCP Transports Explained: Match the Transport, Not the Key"
seoTitle: "MCP Transport Types for Claude Plugins Explained"
description: "Which MCP transport does a Claude plugin need? Stdio, SSE, HTTP and WebSocket compared, plus the config habits that prevent silent failures."
summary: "Connecting a Claude plugin to an outside service over MCP starts with choosing the right transport, not the right key. This video compares the four transport types and covers the config habits and exact-name rule that prevent silent failures."
keywords: ["mcp transport types for claude plugins", "stdio vs sse vs http mcp", "claude code mcp json file setup", "claude plugin root variable paths", "pre-allow exact mcp tool names", "mcp server environment variable check", "github sse mcp server for plugin", "why my mcp tool is missing"]
generated: "article"
---

When a Claude plugin needs to talk to an outside service, the first question is often which key it needs. This video argues that is the wrong question. The real choice is which transport the plugin needs, and a handful of configuration habits then decide whether the setup works quietly or fails without a sound.

## Four transport types

Each MCP server uses exactly one of four transports, and the video describes them by where the service lives.

- **Stdio** spawns a local process. Claude Code starts it, talks to it over standard input and output, and shuts it down when finished. It suits custom servers and local tools.
- **SSE** connects to a hosted server and handles OAuth automatically. You log in once in a browser, and Claude Code manages the tokens afterwards. It is the type for official hosted services such as GitHub or Linear.
- **HTTP** calls a REST API with a token in the request headers, for stateless one-off calls.
- **WebSocket** keeps a live two-way connection open for real-time updates.

The summary the video gives is to match the transport to where the service actually lives: stdio for local, SSE for hosted OAuth, HTTP for tokens and WebSocket for real time.

## Lazy loading and restarts

All four transports load lazily. Nothing connects until you actually use one of the server's tools, and a configuration change needs a restart before it takes effect.

## Habits for a multi-server plugin

A few patterns keep a plugin with several servers manageable. Put server configuration in its own `.mcp.json` file instead of burying it inline in `plugin.json`, which keeps it isolated and easier to maintain as servers are added. Use the Claude plugin root variable, `CLAUDE_PLUGIN_ROOT`, for every file path and never a hardcoded one, so the plugin still works after it is installed somewhere else.

## Pre-allowing tools by exact name

When you pre-allow tools for a command, list the exact tool names rather than a wildcard. The format joins `mcp`, the plugin name, the server name and the tool name, separated by double underscores. The video advises running `/mcp` first to see the real names before writing the list.

## Wrong by one character

The name has to match character for character. If a single letter is wrong in the pre-allow list, the tool does not show up, with no error and no warning. There is a related trap for stdio and HTTP servers: the credentials they need are just environment variables, and nothing checks them until the first real call. A broken setup can therefore look perfectly healthy right up to that moment.

## Key takeaways

- The central choice is which transport the plugin needs, not which key it uses.
- Stdio is for local processes, SSE for hosted services with automatic OAuth, HTTP for token-based REST calls, and WebSocket for live two-way connections.
- All transports load lazily, and configuration changes require a restart.
- Keep server configuration in `.mcp.json`, separate from `plugin.json`.
- Use `CLAUDE_PLUGIN_ROOT` for every path.
- Pre-allow exact tool names, and run `/mcp` first to learn them.
- A one-character error in a tool name fails silently, and environment variables are not checked until the first call.

## Try it yourself

Paste this into Claude: add a GitHub SSE MCP server and a local custom stdio server to my plugin. Then check what it wrote. Did it put the servers in `.mcp.json`, kept separate from `plugin.json`? Does every path use `CLAUDE_PLUGIN_ROOT` instead of something hardcoded? Before pre-allowing any tools, did it tell you to run `/mcp` first to get the exact names? Try this on your own plugin idea, not the video's example.
