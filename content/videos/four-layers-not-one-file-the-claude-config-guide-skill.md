---
title: "Four Layers, Not One File. — The Claude Config Guide Skill"
seoTitle: "How Claude's Four-Layer Configuration Model Works"
description: "Learn how the Claude config-guide skill routes questions across four configuration layers and five reference files, and what happens when a file is missing."
summary: "This video explains that Claude's settings do not live in one file but in four layered objects. The config-guide skill acts as an index that routes each question to one of five reference files, and it fails quietly if one is missing."
keywords: ["where are claude settings stored", "claude agent scopes and identity profiles", "claude config guide skill explained", "how claude configuration layers work", "claude slack plugin configuration guide", "index skill with reference files", "skill fails silently when file missing", "design layered settings for an app"]
generated: "article"
---

Many people assume that Claude's settings live in a single file, and ask where that file is. The video explains that this is the wrong mental model. Configuration is spread across four layered objects, and the config-guide skill exists mainly to route a question to the right one. It also points out a quiet failure mode that is worth understanding before relying on any skill built this way.

## The naive framing: where is the file with my settings?

The video starts from the assumption that there is one settings file to find. Instead, settings are held in four layered objects, and the skill sends each question to one of five reference files. The practical question becomes which layer holds the setting you care about, not which file.

## Four layers, one index

The configuration model has four layers. Agents sit at the top. Below them, agent scopes control how settings resolve and inherit, field by field, across a workspace. Identity profiles carry scopes, rules, credentials, and repo permissions. Attached to each profile are presets, connections, GitHub repos, and custom instructions.

The skill itself does not hold the answers. It is an index. When you ask a question, it opens one of five reference files: agents and scopes, identity profiles, connections and presets, GitHub and instructions, or best practices.

## Why five short files

The video notes that splitting the skill into five short files, rather than one long one, is deliberate. Each reference file stays focused on a single topic, so the skill only needs to open the one that matches the question.

## Slack only, and verify in a fresh thread

Right now the guide covers only the Slack surface. It does not say what changes elsewhere, so it should not be read as a description of every place Claude can be configured. After explaining anything, the skill always closes the same way: it points you to the debug-plugins routine, to be run in a brand-new Slack thread. A fresh thread means a fresh container that reflects your current configuration rather than a cached one, so the new thread is the step that makes the check trustworthy.

## The risk of a quiet failure

The video flags one risk worth knowing. The design works only because all five reference files are actually present. If one goes missing, nothing breaks loudly. The skill simply does not answer that part of your question, and no error tells you why. The routing job is the whole point of the guide, and it goes quiet rather than loud when its target is absent.

## Key takeaways

- Claude's configuration is four layers: agents, agent scopes, identity profiles, and the presets, connections, repos, and instructions attached to each profile.
- Agent scopes control how settings resolve and inherit, field by field, across a workspace.
- The config-guide skill is an index that routes questions to one of five reference files.
- Splitting it into five short files keeps each reference focused.
- The guide currently covers only the Slack surface.
- It always ends by pointing to debug-plugins in a new thread, because a fresh thread gives a fresh container reflecting current configuration.
- If a reference file is missing, the skill gives no error and just fails to answer that part.

## Try it yourself

Paste this into Claude: "I'm designing settings for an app with company-wide defaults, team overrides, and per-user overrides layered on top of each other. Walk me through structuring that as layered objects, like agents, scopes, and profiles, so a user's change never gets silently overwritten by a team default. Then show me one way the design could quietly fail if a piece of it goes missing." Use your own settings design rather than the example from the video.
