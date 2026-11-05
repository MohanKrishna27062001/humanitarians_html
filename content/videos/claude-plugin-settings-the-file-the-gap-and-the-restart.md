---
title: "Claude Plugin Settings: the File, the Gap, and the Restart"
seoTitle: "Claude Code Plugin Settings File and Restart Rule"
description: "Where Claude Code plugin settings live, how to make hooks fail safe when the file is missing, and why changes need a restart and stay per project."
summary: "Claude Code plugin settings live in one per-project file, and a change does not take effect until Claude Code restarts. The video covers the file's structure, the fail-safe quick-exit pattern, and the gap that settings never carry between projects."
keywords: ["claude code plugin settings file", "claude plugin settings restart required", "claude plugin local md settings", "claude code plugin yaml frontmatter", "fail safe hook quick exit pattern", "claude plugin settings per project", "gitignore claude plugin settings", "add settings to claude plugin"]
generated: "article"
---

Someone changes a plugin's enabled flag, saves the file, and expects the change to apply right away. The video says it does not: Claude Code has to restart first. It then walks through the single file where plugin settings live, the pattern that keeps hooks safe when that file is missing, and one gap that surprises people who expect settings to follow them across projects.

## The wrong assumption

The video starts from a common guess: toggling a setting takes effect the moment the file is saved. It does not. The question the video poses is when a toggled setting actually applies, and the answer it gives is later, after a restart. That answer frames everything that follows.

## Anatomy of the settings file

The pattern lives in one file, named `.claude/pluginname.local.md`, in the project root. It has two parts. The first is YAML frontmatter for structured settings. The second is a markdown body for prompts and instructions.

Three kinds of things read it: bash hooks, command files, and agent instructions. The file is per project and managed by the user, and it is never committed to git. The video says four things make the pattern work well, and the next section covers them.

## Built to fail safe

The first practice is to design the schema first and decide on sensible defaults for when the file does not exist. Most users never create it, so the plugin has to behave correctly without it.

The second is for hooks to quick-exit. A hook checks that the file exists, then checks that the plugin is enabled, and otherwise exits immediately. That keeps a missing or disabled configuration from causing any side effects.

The third is the gitignore entry. Every project needs its own entry for the settings file, and the video stresses that this step is manual, not automatic. Nothing adds it for you.

## The one gap

The video names one limitation worth knowing. A setting you configure in one project does not carry over to any other project, and there is no plugin-wide switch. Every project keeps its own file, its own flags, and its own restart. If you expected a single setting to follow you everywhere, it will not.

## The contract in one line

The video closes by compressing it to a short contract: a plugin settings file works per project, not globally, and no change takes effect until Claude Code restarts. Set it, save it, restart it.

## Key takeaways

- Plugin settings live in `.claude/pluginname.local.md` in the project root.
- The file has YAML frontmatter for structured settings and a markdown body for prompts and instructions.
- Bash hooks, command files, and agent instructions can all read it.
- Changes take effect only after Claude Code restarts.
- Design the schema with sensible defaults first, since most users never create the file.
- Hooks should quick-exit: check the file exists, check it is enabled, otherwise stop immediately.
- The gitignore entry for the file must be added manually in each project.
- Settings are per project, with no plugin-wide switch.

## Try it yourself

Open a Claude Code session on your own plugin idea and ask it to add configurable settings: an enabled flag, a validation level, and a max-retries count. Then check three things. Does the file land in a per-project location that is kept out of git? Does the code guard with a quick exit before doing anything else? And does everything still work correctly when the settings file does not exist at all?
