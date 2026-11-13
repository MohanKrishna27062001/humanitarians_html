---
title: "Brutalist Command: art final"
seoTitle: "Brutalist art final: Verified 4K Export With Hash Receipts"
description: "How the Brutalist art final command gates paperwork, renders a 4K master, re-verifies it, and writes a hash-bound receipt beside the MP4."
summary: "Liam, in for Bear, walks through art final: one dispatcher branch and one Python script that gate the paperwork, render, verify the output, and swap it in atomically. The receipt it writes is a machine claim, not human approval."
keywords: ["brutalist art final command explained", "verify 4k video master with sha256", "atomic video export last good file", "film as code final render", "video export receipt with hashes", "preflight checks before video render", "claude code video production pipeline", "check mp4 hash against receipt"]
generated: "article"
---

The video starts from a demanding request: compile a reel to a verified 4K master, refuse if the paperwork is thin or a beat is still a slate, keep the last good file if the new export fails any check, and never report ready unless the file on disk really is. Liam, in for Bear, shows how the `art final` command meets that request. It does not render once and stop. It gates the paperwork, renders, and then re-verifies the output it just wrote.

## One dispatcher branch, one script

The dispatcher is a single case in the `art` file. It matches the exact string `final`, checks whether you already passed a height, and forwards everything to `compile.py`. If you did not name a height, it hard-codes 2160, the native 4K master. There are no aliases, and every rule the command enforces lives inside `compile.py`.

The script takes a small set of options: the reel folder, an optional review mode, FPS, height, audio, force, allow-slates, and an output destination. Allow-slates is for review only, and a final refuses slates unconditionally. The output option can point at a local folder or a mounted drive. The review path is why `art run` and `art final` share the same script.

## Preflight before any frame renders

When review is off, final preflight runs before a single frame is rendered. It requires the paperwork: a fact check, a shot list, and a prompts file, each non-empty. Then it runs the beat lint and the gate-shape check as executable Python, and if either exits non-zero, final refuses. The lint runs on the beat sheet, not the MP4, so you fail fast before spending the render.

## What a successful run produces

On a tiny reel with one still, three seconds of narration, and the three paperwork files, `art final` prints one line per beat, a motion histogram, a build stamp, and the MP4 path. Next to the MP4 sits a verified JSON file written by the compiler itself. It holds the SHA256 of the export and the SHA256 of every input that fed it, so downstream tools can match the file to its recipe.

## The atomic swap

`compile.py` encodes into a candidate MP4 inside an attempt folder next to your output location. Only after the visual check passes and the approvals check succeeds is the candidate moved onto the final path. If anything fails, such as the visual check, an approval going stale mid-render, or a source file changing hash, the temp folder is thrown away. The previous verified export stays in place and the build state records the failure. At no point is the file on disk between two versions.

The receipt records the status as ready, the absolute output path, the SHA256 of the MP4, the SHA256 of every media file and narration MP3 by name, the duration from the timeline the audio built, and a timestamp. Ready is a machine claim about the checks that just passed. It is not human approval, and it is not a promise of YouTube 4K processing. Publication is a separate human step.

## A failure worth seeing

To show a refusal, the video truncates the fact check file to zero bytes, mimicking an accidental commit that empties a paperwork file. `art final` refuses immediately, reporting the fact check as missing or empty. The MP4 in the exports folder is unchanged, and its SHA256 matches the earlier one. Recovery is one line: put a real sentence back in the file, and the next run exits zero.

## Key takeaways

- `art final` gates the paperwork, renders into a temporary candidate, re-verifies the output, and only then swaps it in.
- A final refuses slates and pending signatures unconditionally, and defaults to 2160 for the native 4K master.
- Preflight requires a non-empty fact check, shot list, and prompts file before rendering begins.
- Lint runs on the beat sheet rather than the MP4, so failures come before the render cost.
- A failed export leaves the last good file in place.
- The receipt records the SHA256 of the export and of each input.
- Ready is a machine claim, not human approval or a promise about YouTube processing.

## Try it yourself

In a real folder you finished this week, run `art final` with the output flag pointed at a fresh directory. Copy the SHA256 it prints, then hash the exported file yourself with `shasum -a 256`. If the two strings match, the receipt describes the file. If they do not, something wrote to your export after the compile, so investigate before sharing the video. The film-as-code project is the brutalist.art repository.
