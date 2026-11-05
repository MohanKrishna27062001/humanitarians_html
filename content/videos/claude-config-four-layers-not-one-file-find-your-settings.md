---
title: "Claude Config: Four Layers, Not One File — Find Your Settings"
seoTitle: "Where Are Claude's Settings? Four Config Layers Explained"
description: "Claude's configuration is four layers, not one file. See how the config-guide skill routes your question to one of five reference files."
summary: "Claude's settings do not live in a single file. The video explains the four layers (agents, agent scopes, identity profiles and presets) and how the config-guide skill acts as an index to five reference files, with a warning about what happens when one goes missing."
keywords: ["where are claude settings stored", "claude configuration layers explained", "claude agent scopes and identity profiles", "claude config guide skill", "how settings inherit field by field", "claude presets connections github instructions", "slack claude debug plugins new thread", "design layered settings for an app"]
generated: "article"
---

It is natural to assume that Claude's settings live in one file. The video says they do not. They live in four layered objects, and the config-guide skill routes each question to one of five reference files. The video explains that structure, where the guide stops, and one quiet way it can fail.

## The four layers

Claude's configuration model has four layers, described from the top down:

- Agents sit at the top.
- Agent scopes control how settings resolve and inherit, field by field, across a workspace.
- Identity profiles carry scopes, rules, credentials and repository permissions.
- Presets hold connections, GitHub repositories and custom instructions, attached to each profile.

Knowing which layer a setting belongs to is the key to finding it, rather than searching for a single configuration file.

## An index, not an answer

The config-guide skill does not hold the answers itself. It is an index. When you ask a question, it opens one of five reference files: agents and scopes, identity profiles, connections and presets, GitHub and instructions, or best practices. The video says that splitting the skill into five short files instead of one long one is deliberate, so that each reference stays focused.

## What the guide covers today

The video is clear about the guide's limits. Right now it covers only the Slack surface, and it does not say what changes elsewhere, so the video advises verifying fresh for anything outside Slack. After explaining any of this, the skill always closes the same way, pointing you to debug plugins in a brand-new Slack thread. A fresh thread means a fresh container that reflects your current configuration rather than a cached one. The video states plainly that this new-thread step is not busywork.

## The quiet failure

The risk worth knowing is that the design works only because all five reference files are actually there. If one goes missing, nothing breaks loudly. The skill simply does not answer that part of your question, and you get no error telling you why. The guide's whole job is routing you to the right file, and it goes quiet rather than loud when that file is absent. The video limits its claims to what this skill specifies today and does not describe how Claude's configuration works outside it.

## Key takeaways

- Claude's settings are not in one file; they are in four layered objects.
- The layers are agents, agent scopes, identity profiles and presets.
- Agent scopes control how settings resolve and inherit field by field across a workspace.
- The config-guide skill is an index that opens one of five reference files per question.
- The five files are agents and scopes, identity profiles, connections and presets, GitHub and instructions, and best practices.
- The guide currently covers only the Slack surface, so verify fresh elsewhere.
- If a reference file is missing, the skill silently fails to answer that part of the question.

## Try it yourself

Paste a prompt into Claude describing an app with company-wide defaults, team overrides and per-user overrides layered on top of each other. Ask it to walk you through structuring those as layered objects, like agents, scopes and profiles, so a user's change is never silently overwritten by a team default. Then ask it to show you one way the design could quietly fail if a piece of it went missing. Use your own settings design rather than the video's example.
