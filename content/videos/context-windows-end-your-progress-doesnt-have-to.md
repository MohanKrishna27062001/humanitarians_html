---
title: "Context Windows End — Your Progress Doesn't Have To"
seoTitle: "Make AI Agents Resume Work After a Context Window Ends"
description: "Learn the checkpoint pattern that lets a new agent session resume where the last stopped, using feature_list.json and one git commit per feature."
summary: "A context window is a workspace, not memory. The video shows Anthropic's checkpoint pattern, where a feature_list.json and one git commit per finished feature let a blank new session read the file and start at the first incomplete item."
keywords: ["ai agent context window limit explained", "checkpoint file for ai coding agent", "resume claude agent new session", "feature_list json git commit pattern", "how long running ai agents keep progress", "context window is not memory", "anthropic quickstarts autonomous coding", "externalize agent progress to files"]
generated: "article"
---

Someone might assume an agent that picks up a project mid-way remembers where it stopped, the way memory carries over. The video says it does not. When a context window fills, the session ends, and the next session starts blank. What carries over is whatever got written down. The video explains the checkpoint pattern from Anthropic's own quickstarts that makes this work.

## The session boundary is a wipe

A context window has a limit. When an agent's conversation fills it, the session ends, and the next session opens with no memory of what was done, what passed, or what failed. The video points out two bad responses. Rereading everything burns half the new context, and guessing risks getting it wrong. The fix is to move the state out of the conversation and into external files.

## Two files hold the truth

The first file is feature_list.json, the source of truth. In the example it has 200 entries, each with an ID and a status of either incomplete or passing. The second is git, which acts as the ledger: one commit per finished feature, so the history cannot be disputed. Each session follows the same loop. It reads the file, finds the first incomplete entry, implements the feature, tests it, commits, and marks it passing.

## The file across the boundary

The video then walks the file across a boundary. In session one, features one through 50 flip from incomplete to passing, one commit at a time. Then the context window ends. Session two opens the same file and finds item 51 as the first incomplete entry. It starts there, with no replay of the first 50.

## Exactly how far this goes

The video is explicit about scope. It covers the checkpoint and resume mechanism only: the file, the git ledger, the boundary, and the first-incomplete lookup. It does not cover how the 200-item list gets written in the first place, which is a separate step, or what exactly makes a feature count as passing. It states the mechanism and stops, without claiming this is the best possible design.

## Workspace, not memory

The carry-out is a single sentence: a context window is a workspace, not memory. When it fills, the session ends, and what carries over is whatever got written to a file and a git commit, not anything the agent remembers.

## Key takeaways

- A context window has a limit; when it fills, the session ends.
- A new session starts blank, with no memory of what was done, passed, or failed.
- Rereading everything wastes about half the new context, and guessing risks errors.
- feature_list.json is the source of truth, with an ID and a status for each entry.
- Git is the ledger, with one commit per finished feature.
- Each session reads the file, finds the first incomplete entry, implements it, tests it, commits, and marks it passing.
- A new session resumes at the first incomplete item and does not replay finished work.

## Try it yourself

Ask Claude: "Externalize my agent's progress to a checkpoint file plus git commits, so a brand new session can resume exactly where the last one stopped." Then prove it by starting a fresh session and watching whether it picks up at the correct first incomplete item.
