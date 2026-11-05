---
title: "Brutalist Command: art run"
seoTitle: "Brutalist art run: The Review Cut Loop Explained"
description: "See how the Brutalist art run command gates paperwork, renders pending scenes, and compiles a slate review cut, and how it differs from art final."
summary: "Liam, in for Bear, explains art run, the one command that drives the whole review loop for a Brutalist reel. It builds a slate review cut, not a final master, and skips every slot already filled."
keywords: ["brutalist art run command explained", "video review cut versus final master", "film as code review loop", "skip filled slots when rendering", "ai video pipeline gate checks", "audio as master clock video", "claude code video production workflow", "fix failing render gate in pipeline"]
generated: "article"
---

One command drives the whole review loop for a Brutalist reel: `art run`. Liam, in for Bear, describes it as a wrapper that gates the paperwork, lints the beat mix, renders every pending scene, drops each clip into its slot, and recompiles a review cut. The key point is what it does not do. It writes a slate version, not the final master.

## Review cut versus final master

`art run` compiles a review cut with slate labels burned in for the beats that are not filled yet. `art final` is the different verb: no beat markers, atomic verification, a real deliverable. The two verbs leave two different files on disk. `art run` writes `slug-slate.mp4`, the review cut with beat markers. `art final` writes `slug.mp4`, the clean master, only after every gate passes and the compiler's atomic verification stamps a receipt beside it. If you see a slate label on your export, you ran the wrong verb. Both commands compile the same beats. The difference is what gets stamped on top and whether a receipt is written.

## The dispatcher and the loop

The dispatcher is one case in the `art` file: three lines that match the exact string `run`, then run `runtime/script/run.sh` with every argument forwarded. There are no aliases, and everything the command does lives in that one shell script. In order, the script does the following:

- Gate F checks the paperwork triad: fact check, shot list, and prompts.
- Gate L lints the beat mix, including a rule against single-sentence text slides.
- Gate shape enforces chart shape for finance reels.
- A static preflight runs on every pending Manim scene, and Gate W checks WCAG contrast and margins on the same scenes.
- Each pending Manim scene is rendered, then audited by Gate B for layout before it is slotted.
- Every Remotion beat is filled.
- A slate cut is compiled.
- Gate V runs frame-level visual QC on the finished MP4.

Any gate can stop the build. Audio is the master clock: the compiler conforms every clip to the per-beat MP3 duration, never the other way around.

## Skipping what is already done

`art run` only renders pending beats. If a slot is already filled, as with a Manim or media clip for that beat, the script skips it. That is how you iterate: change one beat, regenerate its audio, delete its old clip, and rerun. Nothing else on disk is touched.

## A real run, and a real failure

Against a fixture reel with only a beat sheet, `art run` reports there are no Manim beats and nothing to render. It then hits Gate F, prints exactly which paperwork is missing, and stops. The video says this output is verbatim from the log.

After the three paperwork files are written, the run proceeds. Gates F, L, and shape pass, and the next stage, Remotion, fails in this workspace. The video attributes that to a browser launch and environment issue, not a bug in the reel. The lesson is the gate order: the log tells you which stage owns a failure.

## Four knobs

- `ART_QC=0` skips every gate.
- `ART_STRICT=0` downgrades gate warnings from blockers to warnings.
- A third variable turns off Gate F alone.
- A height flag picks the render height, with 2160 as the default for 4K.

Everything else is forwarded to `run.sh` unchanged.

## Key takeaways

- `art run` is the loop you live in until the review is clean, and it produces a slate cut, not a master.
- `art final` is the separate verb for the real deliverable.
- The dispatcher is exact-match with no aliases, and all logic sits in `run.sh`.
- Gates run in a fixed order, and any one of them can stop the build.
- Audio is the clock, so clips conform to the narration length.
- Filled slots are skipped, which makes each rerun shorter.
- Environment variables whose names start with `ART_` can quiet a gate when you know what you are doing.

## Try it yourself

From your real folder, run `art run` once and read the last four lines. If a gate fails, the message names which one and how to unblock it. If a render fails, read the beat ID it printed and rerun that beat's audio and scene alone, then run `art run` again. It will skip every filled slot, and the loop should get one step shorter on each pass. The project lives in the brutalist.art repository.
