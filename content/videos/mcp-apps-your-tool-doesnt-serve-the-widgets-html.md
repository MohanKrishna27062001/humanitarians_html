---
title: "MCP Apps: Your Tool Doesn't Serve the Widget's HTML"
seoTitle: "MCP Apps: Two-Part Tool and Resource Registration"
description: "How MCP apps render widgets: the tool returns data, a separate resource serves the HTML, and two easy mistakes leave you with a blank rectangle."
summary: "An MCP app is a standard MCP server that also serves interactive UI inside the chat. This video explains the two-part registration pattern, when to build a widget at all, five design rules, and the two causes of a blank widget."
keywords: ["mcp app widget two part registration", "mcp tool returns data resource serves html", "mcp app mime type text html profile", "inline ext apps bundle content security policy", "mcp elicitation versus widget", "why is my mcp widget blank", "mcp app resource uri ui meta", "graceful fallback for mcp apps"]
generated: "article"
---

Many people building their first MCP app assume the tool sends back the widget's HTML. It does not: a separate resource serves it. This video covers that two-part pattern, how to decide whether a widget is needed at all, five rules that save rewrites, and the two mistakes that produce a blank widget without any error.

## What an MCP app is

An MCP app is a standard MCP server that also serves interactive UI. The interface is rendered inline in the chat surface as an iframe. Because it is still an ordinary MCP server, tools keep working the way they always did, with the addition of a resource that carries the interface.

## The two-part registration

The core pattern has two parts. In part one, the tool declares a UI resource through the `_meta.ui.resourceUri` field, and its handler returns plain data, not the HTML. In part two, a resource is registered separately and serves the widget's HTML using the exact MIME type constant for MCP app HTML.

At runtime the host sees the resource URI, fetches the resource and renders it in an iframe. It then passes the tool's return value into the iframe through an on-tool-result event. Inside the iframe an App class bridges the two sides. Its methods are sendMessage, updateModelContext, callServerTool and openLink, and they are set up before the app connects. One step is mandatory: the iframe's content security policy blocks CDN script fetches, so the widget script bundle must be inlined directly into the HTML at startup.

## Route first, build second

Before building a widget, the video says to route the need correctly. Elicitation is native to the spec, needs zero UI code and works in any compliant host. It suits yes or no confirmation, short enums and flat forms. A widget is justified only when elicitation cannot meet the need, such as:

- large or searchable lists that need scrolling,
- visual previews before choosing,
- charts and maps,
- live-updating progress.

If none of those apply, skip the widget. Text is faster to build and faster for the user.

## Five rules that save rewrites

1. One widget per tool.
2. The tool's description must mention the widget, since that is what makes Claude reach for it.
3. Graceful degradation is automatic: hosts without the app surface simply render the tool's text content.
4. Do not block on widget results for display-only tools, and return a text summary alongside so Claude can keep reasoning.
5. Follow the host's theme once connected, rather than hardcoding one.

## Two causes, one blank rectangle

The video closes on the most frustrating failure. If you serve the widget with the wrong MIME type, the host silently refuses to render it. If you leave the ext-apps bundle un-inlined, the content security policy blocks the CDN fetch and the widget is blank for that reason instead. It is the same symptom with two different causes, and the browser console does not say which one occurred. Get the type or the bundle wrong and the widget fails blank, not loud.

## Key takeaways

- The tool returns data; a separate resource serves the widget's HTML.
- The tool points to its resource through `_meta.ui.resourceUri`.
- Use the exact MIME type constant for the resource, not a hand-typed string.
- Inline the ext-apps bundle at startup because the iframe blocks CDN scripts.
- Use elicitation for confirmations, short enums and flat forms, and build a widget only when it cannot do the job.
- Always return text content too, so hosts without the app surface still show something useful.
- A wrong MIME type and a missing inlined bundle both produce a silent blank widget.

## Try it yourself

Paste this into Claude: build an MCP app with a file-picker widget that lets someone choose a file from a list a directory-scan tool returns. Then check four things. Does it register a tool with `_meta.ui.resourceUri` plus a separate resource? Does the resource use the exact MIME type constant? Is the ext-apps bundle inlined at startup instead of pulled from a CDN? Does the tool still return real text content? Run it on your own MCP server, not the video's example.
