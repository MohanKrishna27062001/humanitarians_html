---
title: "Brutalist Command: art smoke"
seoTitle: "Brutalist art smoke: End-to-End Render Test Explained"
description: "Learn how the Brutalist art smoke command renders a tiny real film and checks the decoded MP4, and why a green dependency check proves less."
summary: "Liam, in for Bear, shows art smoke, a local end-to-end test that renders a two-slate fixture with Kokoro narration and verifies the decoded MP4. A green art doctor means imports work; a green art smoke means a film can actually be made."
keywords: ["brutalist art smoke test explained", "end to end video pipeline test", "check mp4 has audio and video streams", "ffmpeg mean volume silent video check", "kokoro narration render test", "art doctor versus art smoke", "film as code smoke test", "fixture slug validator failure fix"]
generated: "article"
---

Can the Brutalist toolkit actually render a watchable film? The video opens with that question. `art doctor` is all green on the box, but that only shows the dependencies import. Liam, in for Bear, walks through `art smoke`, the local end-to-end production test that renders a real video, decodes it, and measures the audio. A green result means a decoded MP4, not a passing import.

## What the command is and is not

`art smoke` does not check dependencies, because `art doctor` already does that in isolation. The dispatcher is one case in the `art` file: two lines that match `smoke` and run the smoke test script, forwarding every argument. There are no flags, so the command has zero surface area, and every rule it enforces lives in that one shell script.

## What the script does

The script copies a tiny fixture from the core smoke examples into a throwaway scratch directory. It then walks that copy through the real pipeline: Kokoro narration, then the `run.sh` render and compile path. Three verification gates then run on the compiled MP4 that lands on disk:

- Size: the file must be larger than 20,000 bytes.
- Type: `ffprobe` must decode both a video stream and an audio stream.
- Audio: `ffmpeg` volume detection must read a mean volume above -40 dB.

Every one of those numbers comes from the decoded file, not from a process exit code.

The fixture is deliberately minimal, with two narration slates and no Manim or Remotion. The test is not about any one composition. It checks that Kokoro, the `run.sh` skip paths, and `compile.py` fit together into a watchable file. A new Remotion scene that broke Ken Burns rendering would still let `art doctor` pass, while smoke would fail.

The audio gate is the important one. It does not read the source MP3s, which already synthesized fine earlier. It decodes the MP4 that just landed and pulls the mean volume from the log. A file with an audio stream but silence has a mean volume near negative infinity and fails. The -40 dB floor compares with real narration at around -20.

## A passing run and a real failure

In the passing run, the Kokoro model files are present, FFmpeg is on the path, and the fixture slug was patched in the scratch copy so the new validator accepts it. Kokoro synthesizes both beats, `run.sh` compiles the slate cut, and the three gates read a real MP4 of 636,000 bytes with both streams and a mean volume of negative 24 dB. The cost is $0 and the exit code is zero.

The failure the video shows is the real one at the tip of tree on the recording day. Running `art smoke` against the shipped fixture exits with code one at gate zero, before Kokoro even loads. The cause is not a missing dependency. A recently added static validator, which fails closed on unsafe slugs, rejects the fixture's own slug because it starts with an underscore. `art doctor` is green on the same box, which is exactly why smoke exists. The fix is a one-line patch: rename the fixture slug, or widen the validator to accept the toolkit's own fixture.

## Key takeaways

- `art smoke` proves the pipeline renders a real film end to end; `art doctor` only proves dependencies import.
- It takes no flags and runs a minimal two-slate fixture in a scratch directory.
- Three decoded gates check size, stream types, and mean audio volume.
- A silent track fails the audio gate even if an audio stream exists.
- Results come from the decoded file, not exit codes.
- A green doctor can coexist with a pipeline that cannot render its own fixture.
- Run smoke after doctor whenever you touch the render or compile paths.

## Try it yourself

Point Claude Code at your own copy of the toolkit and run `art smoke`, saving the whole output. Then read `smoke-test.sh` in the runtime scripts directory and, without changing it, say in one line each which of the three decoded gates the run reached, which one refused, and what one file the failing gate looked at. Watch whether Claude is tempted to rewrite the script to make it pass. It should not: the gates are the point, and the fix is upstream.
