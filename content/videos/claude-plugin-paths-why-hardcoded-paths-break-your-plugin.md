---
title: "Claude Plugin Paths: Why Hardcoded Paths Break Your Plugin"
seoTitle: "Claude Code Plugin Paths: Use CLAUDE_PLUGIN_ROOT"
description: "Why a hardcoded path in a Claude Code plugin works on your machine and fails on every other, and how the CLAUDE_PLUGIN_ROOT variable fixes it."
summary: "A hook or MCP server path typed from your own machine looks fine until the plugin is installed somewhere else, where it silently fails. The video shows how one variable, CLAUDE_PLUGIN_ROOT, keeps every path portable."
keywords: ["claude code plugin hardcoded paths", "claude plugin root variable explained", "portable paths in claude plugins", "claude plugin hook script path", "claude plugin json manifest name field", "claude plugin mcp server argument path", "claude code plugin folder structure", "plugin works on my machine only"]
generated: "article"
---

A plugin author wires a hook to a script using the exact path on their own machine, and it works. The video argues that this is the wrong habit, because a plugin has to survive being installed anywhere. The fix is a single variable that Claude Code fills in at runtime, and the video explains why skipping it fails without any warning.

## The question: fixed address or portable path

The video opens with a hook that needs to call a script inside its own plugin. The tempting answer is a fixed address, since it runs correctly where it was written. The video's point is that a plugin's path needs to survive installation on any machine, so the real question is whether that address should be fixed or portable.

## What the manifest needs

Before the path problem, the video covers how a plugin is laid out. The manifest is `plugin.json`, and it lives inside a `.claude-plugin` folder. It needs exactly one field: `name`, written in kebab-case.

Everything else sits at the plugin's own root. That includes commands, agents, skills, hooks, and even an MCP server file. These are auto-discovered, so there is no registration step to perform. This is why the manifest stays so small, and why the remaining risk is not in the layout but in the paths that point from one piece to another.

## The anchor: one variable resolved at runtime

The shortcut is to wire a hook or an MCP server with the exact path from your own machine. The video is direct about this: that path is only ever right on your machine.

Claude Code provides a variable for this case, `${CLAUDE_PLUGIN_ROOT}`. It resolves at runtime to wherever the plugin is actually installed on the current machine, and Claude Code fills it in. A hook's command written as the plugin root followed by `/scripts/check.sh` finds the script no matter where the plugin lives. The same rule applies to MCP server arguments and to any script reference that crosses a directory boundary.

## A second machine, a second install

The video then installs the same plugin on a teammate's machine, where it sits in a completely different place. The hook written with the variable still finds its script and runs. The hook written with a hardcoded path points at a folder that does not exist on that machine. It simply does not fire, and nothing tells you why.

That silent failure is the core of the lesson. A path written through the variable survives any install location. A path typed by hand works only on the machine that wrote it, which is why it looks correct during your own testing. The video's rule is to never hardcode a path inside a plugin, and to write it through the plugin root variable so it still finds its way after the plugin is installed somewhere you will never see.

## Key takeaways

- A hardcoded path inside a plugin works only on the machine that wrote it, and fails silently elsewhere.
- `plugin.json` lives inside `.claude-plugin` and needs exactly one field, `name`, in kebab-case.
- Commands, agents, skills, hooks, and an MCP server file live at the plugin root and are auto-discovered with no registration step.
- `${CLAUDE_PLUGIN_ROOT}` resolves at runtime to the actual install location, and Claude Code supplies it.
- Use the variable in hook commands, MCP server arguments, and any script reference that crosses a directory boundary.
- A hook with a broken path does not raise an error. It just never runs.

## Try it yourself

Open Claude Code and ask it to scaffold a plugin with a pre-tool-use hook that calls a helper script, plus an MCP server with a startup argument pointing at a local file. Then check two things in its answer. Does the hook's command path use `${CLAUDE_PLUGIN_ROOT}`, or a path typed straight from your machine? And does the MCP server's argument do the same?
