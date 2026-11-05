---
title: "Stale, Not Broken. — The Debug-Plugins Skill (Claude Tag Plugin)"
seoTitle: "Claude Plugin Not Showing Up? Debug Steps and Causes"
description: "A three-step diagnostic and five common causes for a Claude Code plugin zip that does not show up, plus why a fresh conversation is often the real fix."
summary: "When a plugin will not appear, the problem is often a stale session rather than broken configuration. The debug-plugins skill collects three facts first, walks five failure causes, and flags two limits, including a session reading config only once."
keywords: ["claude code plugin not showing up", "debug claude plugin zip not loading", "plugin manifest malformed capital letter", "claude code session reads config once", "check plugin mount and launch flags", "claude code startup log plugin error", "skill file header broken plugin", "start new conversation after changing setting"]
generated: "article"
---

A plugin that will not show up seems to point to broken configuration. The debug-plugins skill, part of the Claude Tag plugin set, starts from a different guess: usually the setup is just stale, because a session reads its configuration once, when it starts. This video explains the checks it runs and the limits worth knowing.

## Three checks, in order

Before deciding anything, Claude checks three things in order. First, what actually arrived in the plugin mount. Second, what flags Claude Code was launched with. Third, what the startup log recorded. All three are collected before any explanation is offered, which keeps the diagnosis from jumping to a conclusion on partial evidence.

## Five failure causes

With that evidence in hand, the skill walks a short list of causes:

- The zip is simply not there.
- The zip is there, but Claude Code was not launched with a matching flag.
- The zip failed to extract.
- The plugin's manifest file is malformed, often just a stray capital letter or space in the name.
- The zip is fine, but the skill file's own header is broken.

The video presents this as the failure ladder this version of the skill enumerates, not as an exhaustive list of every way a plugin can fail.

## Two limits to know

The first limit is that a session reads your configuration once, when it starts. If you flip a setting mid-chat, the fix is a new conversation, not a refresh of the current one. This is the heart of the stale-not-broken idea.

The second limit is that some of Claude Code's startup errors go to a channel this diagnostic cannot see. A clean-looking log therefore does not guarantee that nothing went wrong. It only means this particular channel did not catch it.

## What to do when a plugin will not show

The carry-out is practical. Check what actually arrived and what actually loaded before assuming anything is broken. If you just flipped a setting, open a new chat before diagnosing anything else.

## Key takeaways

- A plugin that does not appear is often stale rather than broken.
- Collect the plugin mount contents, the launch flags, and the startup log before explaining anything.
- A missing zip, a missing launch flag, an extraction failure, a malformed manifest, and a broken skill header are the five causes covered.
- A stray capital letter or space in the manifest name can break a plugin.
- A session reads configuration only once, at startup.
- A clean startup log is not proof that nothing went wrong.
- After changing a setting, start a fresh conversation.

## Try it yourself

Paste this into Claude Code: a plugin zip is sitting in the account plugins mount, but the skill inside it is not showing up. Walk me through what actually arrived, what you were launched with, and what the startup log says, before telling me what is wrong. Then check three things. Does it collect all three before explaining? Does it say so if the log file is missing instead of skipping past it? And if you changed the setting a few minutes ago, does it ask for a fresh conversation? Run it on your own plugin.
