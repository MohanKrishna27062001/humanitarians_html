---
title: "Claude Plugin Hooks: Only Four of the Nine Events Work Here"
seoTitle: "Claude Plugin Hooks: Prompt Hooks Fire on Only 4 Events"
description: "Prompt-based Claude plugin hooks fire on only four of nine lifecycle events. Learn the hook types, exit codes and config formats that matter."
summary: "Claude Code plugins support two hook types and nine lifecycle events, but prompt-based hooks run on only four. The video covers command versus prompt hooks, exit codes, config formats and why a hook on PostToolUse silently never runs."
keywords: ["claude code plugin hooks tutorial", "prompt based hook vs command hook", "claude code hook lifecycle events list", "which events support prompt based hooks", "claude hook exit code 2 blocks", "claude plugin hooks json wrapper format", "claude plugin root environment variable hooks", "hook on posttooluse does nothing"]
generated: "article"
---

The assumption is that the recommended hook type in a Claude Code plugin fires on every event. The video says it does not: prompt-based hooks work on only four of the nine lifecycle events. Put one on the wrong event and nothing tells you, because it silently never runs.

## Two hook types

Prompt-based hooks are the recommended type. They send context to Claude, who decides what to do. A matcher names the tools the hook applies to, a prompt field tells Claude how to respond, and the default timeout is 30 seconds.

Command hooks are deterministic. They run a bash script, capture stdout and stderr, and use the exit code to decide what happens. Exit zero means success and stdout goes into the transcript. Exit two means block: Claude sees the stderr message and stops. Any other code is non-blocking. The default timeout is 60 seconds.

For portability, the command path should use the Claude plugin root environment variable and never a hardcoded absolute path.

## Two config formats

The two places to put hooks use formats that are not interchangeable. A plugin's hooks.json wraps everything under a description and a hooks key. The settings file skips that wrapper, and event names sit at the top level.

## Nine events, four rules

Nine lifecycle events exist. PreToolUse fires before a tool call, Stop when Claude is about to finish, SubagentStop for subagents, and UserPromptSubmit when you submit a message. Those four support prompt-based hooks. The other five, PostToolUse, SessionStart, SessionEnd, PreCompact and Notification, are command hooks only.

Four rules govern execution:

- All matching hooks run in parallel, with no ordering, and cannot see each other's output.
- Hooks load once at session start, so there is no hot swap; restart Claude after editing hooks.
- Matchers are case-sensitive, so Write is not write.
- Security defaults apply: quote every bash variable, validate inputs, and deny path traversal and access to files like .env and private keys.

## The gap

The catch is that the recommended type fires only on those same four events. Add a prompt-based hook to PostToolUse, expecting it to review a tool's output after the fact, and nothing happens: no error and no warning. If a hook needs to catch something after the tool call, it has to be a command hook.

## What the video does not claim

It does not explain why prompt hooks are limited to four events, since the source skill states the restriction and not the reason. It also does not say command hooks are always better; for events where both are allowed, the choice is left to the plugin author.

## Key takeaways

- Claude Code plugins support two hook types and nine lifecycle events.
- Prompt-based hooks are recommended but fire only on PreToolUse, Stop, SubagentStop and UserPromptSubmit.
- PostToolUse, SessionStart, SessionEnd, PreCompact and Notification are command-hook only.
- A prompt-based hook on the wrong event silently never runs.
- Command hooks use exit codes: zero succeeds, two blocks, anything else does not block.
- Plugin hooks.json uses a wrapper; the settings file does not.
- Hooks load at session start, so restart after editing, and matchers are case-sensitive.

## Try it yourself

Ask Claude for a plugin that logs every Write tool call to a JSON file and blocks any Write to a .env file. Watch four things. Does the logging hook, which fires after the write on PostToolUse, use a command hook? Does it use the plugin root variable instead of a hardcoded path? Does it use the plugin hooks.json wrapper format? And does it remind you to restart the session after editing hooks.json? Try it on your own plugin idea.
