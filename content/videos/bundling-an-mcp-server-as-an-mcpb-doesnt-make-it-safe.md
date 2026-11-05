---
title: "Bundling an MCP Server as an MCPB Doesn't Make It Safe"
seoTitle: "Is an MCPB Bundle Safe? What Packaging Does Not Do"
description: "Bundling an MCP server as an MCPB makes it run without a dev toolchain, but it adds no sandbox. Learn the two environment variable traps to check."
summary: "Packaging an MCP server as an MCPB removes the need for a dev toolchain, but it adds no permissions block and no sandbox. The video walks through two traps in one environment variable and ends with a prompt that tests both."
keywords: ["is an mcpb bundle safe to run", "mcpb manifest environment variable mismatch", "mcp server path traversal protection", "what is an mcpb file", "mcpb sandbox and permissions explained", "validate file paths in mcp server", "package mcp server without dev toolchain", "mcpb user config directory setting"]
generated: "article"
---

It is easy to assume that packaging an MCP server as an MCPB makes it safer, the way putting code in a container might. The video argues that this is wrong. Bundling only means the server can run without your development toolchain installed. Safety is still entirely the author's job.

## Why a bundle is not a sandbox

The video starts with the manifest. Open it and there is no permissions block, no sandbox field, and nothing to check. A packaged MCPB runs with exactly the same file access as the original, unpackaged script. If you package a path bug into it, the server walks outside its own folder just as easily as before. The packaging step changes how the server is delivered, not what it is allowed to touch.

## What an MCPB actually is

An MCPB is a zip file. Inside it are a manifest.json, a server folder holding your code and its dependencies, and an icon. The host reads the manifest and launches the command in mcp_config exactly as written. Two tokens do the work of pointing at things: ${__dirname} stands for paths relative to the bundle, and ${user_config.*} stands for values supplied at install time, such as a folder the user picked.

## One environment variable, two traps

To make the point concrete, the video uses a single running example. Suppose the manifest launches the server with one setting, an environment variable named ROOT_DIR, which points at the folder the user chose at install time. The video presents ROOT_DIR as an illustrative name, not a documented one. That one variable carries two separate traps.

## Trap one: the name has to match exactly

The environment variable name is exactly what you wrote in the manifest. There is no automatic prefix and no transform. If the manifest says ROOT_DIR but the server code reads ROOT_DIRECTORY, the value comes back silently empty. There is no error and no crash. The configuration is simply ignored, which makes this kind of mismatch easy to miss.

## Trap two: a correct name is still not a check

Suppose you get the name right. The path then flows straight into your handler with no validation, because there is no sandbox to add one for you. A single unvalidated ../ in a filename is enough to walk the server out of its own folder. Every check that the requested path stays inside the configured root has to be written by the author of the server.

## Why neither result is proof

The video also warns against reading too much into how a bundle behaves. An MCPB that runs fine on your machine does not prove it is safe anywhere else, because it may only show that your own development toolchain quietly filled a gap. An MCPB that fails on a clean machine does not mean the packaging step is broken either. More often, one dependency never got bundled in.

## Key takeaways

- Bundling as an MCPB makes a server runnable without a dev toolchain; it does not make it safe.
- The manifest has no permissions block or sandbox field, so a packaged server has the same file access as the raw script.
- An MCPB is a zip containing manifest.json, a server folder with code and dependencies, and an icon.
- The host launches the mcp_config command as written, using ${__dirname} for bundle-relative paths and ${user_config.*} for install-time values.
- The environment variable name in the manifest must match what the server code reads, or the value is silently empty.
- A correct variable name is not a validation; every path check is still yours to write.
- A bundle that works on your machine is not proof of safety, and a failure on a clean machine usually points to a missing dependency.

## Try it yourself

The video ends with a prompt to paste into Claude: build an MCPB that reads files from a directory configured at install time. Then watch three things. Does the environment variable name in the manifest's mcp_config exactly match what the server code reads? Does the server confirm that every requested path stays inside the configured root, or would a ../ escape it? And does the build script bundle dependencies with esbuild, or assume node_modules will already be there? Checking all three against a build you watch happen tests both traps directly.
