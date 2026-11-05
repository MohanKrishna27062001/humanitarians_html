---
title: "Debug Plugins: Your Claude Plugin Is Stale, Not Broken"
seoTitle: "Claude Plugin Not Showing Up? Debug It in Order"
description: "A short guide to the debug-plugins skill: three checks, five likely causes and two limits to know when a Claude plugin does not show up."
summary: "The debug-plugins skill checks what arrived in the plugin mount, what flags Claude Code launched with and what the startup log recorded, then walks a short ladder of causes. The video also explains why a stale session is often the real problem."
keywords: ["claude plugin not showing up", "why is my claude plugin not loading", "claude code plugin troubleshooting steps", "plugin zip failed to extract", "claude plugin manifest malformed name", "claude skill header broken fix", "claude code startup log check", "start new claude conversation after settings"]
generated: "article"
---

When a plugin will not show up, the usual assumption is that the configuration is broken. The video argues that the more common cause is that the session is stale, because a session reads its configuration once, when it starts. It presents the debug-plugins skill, a Claude Tag plugin, as a way to find out which of those two situations you are in before changing anything.

## Is the config broken or just out of date

The question the video poses is simple: is my config broken, or just out of date? A plugin that is missing can look identical in both cases, which is why the skill avoids guessing. It does not offer an explanation until it has gathered evidence, and the evidence comes in a fixed order.

## Three checks, in order

Before deciding anything, Claude checks three things:

- What actually arrived in the plugin mount.
- What flags Claude Code was launched with.
- What the startup log recorded.

All three are collected before any explanation is offered. The ordering matters because each check narrows the next. If nothing arrived in the mount, the launch flags and the log are not the first place to look, and if something did arrive, the question becomes whether Claude Code was set up to load it.

## Five failure causes

After the three checks, the skill walks a short ladder of causes. The video lists five:

- The zip simply is not there.
- The zip is there, but Claude Code was not launched with a matching flag.
- The zip failed to extract.
- The plugin's manifest file is malformed, often just a stray capital letter or space in the name.
- The zip is fine, but the skill file's own header is broken.

The ladder runs from the simplest, most checkable problem to the more detailed ones, so you can rule things out one at a time rather than editing files at random.

## Two limits worth knowing

The video is explicit about what this diagnostic cannot do.

First, a session reads your configuration once when it starts. If you flip a setting in the middle of a chat, the fix is a new conversation, not a refresh of the current one. That is the sense in which a plugin can be stale rather than broken.

Second, some of Claude Code's startup errors go to a channel this diagnostic cannot see. A clean-looking log therefore does not guarantee that nothing went wrong. It only means that this particular channel did not catch the problem.

The video also notes that the five causes are the ladder this version of the skill lists, not a claim that they cover every possible plugin failure.

## Key takeaways

- A plugin that will not show up is often stale, not broken.
- Check three things in order: the plugin mount, the launch flags and the startup log.
- Collect all three before explaining anything.
- The ladder of causes runs from a missing zip to a broken skill header.
- A malformed manifest is often caused by a stray capital letter or space in the name.
- If you changed a setting mid-chat, open a new conversation before diagnosing further.
- A clean log does not prove nothing went wrong, because some errors go to a channel the diagnostic cannot see.

## Try it yourself

The video gives a prompt to paste into Claude Code, using your own plugin rather than the example. Tell it that a plugin zip is sitting in the mount folder but the skill inside is not showing up, and ask it to walk through what arrived, what it was launched with and what the startup log says before telling you what is wrong. Then check three things: whether it collects all three before explaining, whether it says so if the log file is missing, and whether it asks for a fresh conversation if you changed the setting a few minutes ago.
