---
title: "Claude MD Improver: It Scores Your Files Before It Edits"
seoTitle: "Claude MD Improver: Scores CLAUDE.md Files Before Editing"
description: "The CLAUDE.md improver skill finds every CLAUDE.md file, grades it A to F on six criteria, and shows a report before it proposes any diff."
summary: "The video explains how the Claude MD Improver skill works. It discovers CLAUDE.md files in five locations, grades each against six criteria, shows a report first, and only then proposes minimal diffs, each with a one-line reason."
keywords: ["claude md improver skill explained", "improve claude md files with claude", "where can claude md files live", "claude md quality score a to f", "claude md six scoring criteria", "claude md changes shown as diff", "claude md monorepo fifty file limit", "check claude md files before editing"]
generated: "article"
---

Asking Claude to improve a CLAUDE.md file might sound like it triggers an instant rewrite. The video says it does not. The Claude MD Improver skill scores the files first, shows you a report, and only after you approve does it propose changes, and those arrive as diffs with a reason attached.

## Five places a CLAUDE.md can live

The skill starts by discovering every CLAUDE.md file. The video lists five locations:

- The project root, shared with the team and checked into Git.
- A local override that Git ignores, for personal settings only.
- A global file with your defaults across every project.
- A package-specific file inside each folder of a monorepo.
- Any subdirectory, for feature-specific context.

Claude finds all of these automatically by walking parent directories before anything is changed.

## Six criteria and a letter grade

Each file is scored against six criteria: commands and workflows documented, architecture clarity, non-obvious patterns, conciseness, currency, and actionability. The result for each file is a letter grade from A to F.

## The process, in phases

The work runs in phases. First, discovery: Claude finds every CLAUDE.md file. Second, it scores each one against the rubric. Third, and this is described as a hard rule in the skill, it shows you the full report before it changes a single line.

## Updates arrive as diffs

Only after you say go does the skill propose updates. Each one is shown as a diff that says which file, exactly what to add, and one line on why it helps future sessions. The changes are minimal and targeted additions, never a rewrite of what is already there.

## The fifty-file cap

There is one practical limit. The discovery step caps at fifty files. In a small project that never matters. In a large monorepo with more CLAUDE.md files than that, the ones past the cutoff are not read, and the report gives no notice that anything was skipped.

## What the video does not claim

The video does not say how the six criteria are weighted into the final letter grade. It notes the source skill states the criteria as importance labels rather than a documented point formula, and it does not guess at arithmetic it cannot verify. It also does not claim every CLAUDE.md tool works this way: the report-first gate, the diff with a reason, and the fifty-file cap are properties of this specific skill.

## Key takeaways

- Asking Claude to improve a CLAUDE.md does not start with a rewrite; it scores first.
- CLAUDE.md files can sit in the project root, a gitignored local override, a global file, package folders in a monorepo, and subdirectories.
- Six criteria are scored: commands and workflows, architecture clarity, non-obvious patterns, conciseness, currency and actionability.
- Each file receives a letter grade from A to F.
- The full report is shown before any line is changed.
- Updates are diffs with the file, the addition and a one-line reason, never a rewrite.
- Discovery stops at fifty files, and skipped files are not announced.

## Try it yourself

Paste this into Claude: "Check and improve my CLAUDE.md files." Run it on your own repository, not the video's example, and watch for three things. Does it produce a quality report with a grade before proposing any change? Are the proposed changes shown as diffs, each with a one-line reason? And if your repo has more than fifty CLAUDE.md files, does anything tell you some were skipped?
