---
title: "Upstream Video Quality Control: 5 Packages to Catch 4K Render Errors Early | Vikhyat Raghumanda"
seoTitle: "Five Ways to Catch Fake 4K Video Renders Early"
description: "Vikhyat Raghumanda proposes five packages that stop half-size 4K renders by preventing, catching and detecting resolution errors before review."
summary: "Fellow Vikhyat Raghumanda describes five proposals for catching video resolution errors earlier, at three points: inside the toolkit, on the fellow's machine, and in the shared drive. One check separates genuine 4K from stretched 720p."
keywords: ["catch fake 4k video renders", "check video resolution before upload", "stretched 720p vs real 4k", "frame edge sharpness check video", "prevent wrong resolution video export", "automate video submission quality checks", "scheduled report of video resolutions", "video toolkit resolution standardization"]
generated: "article"
---

Fellows build videos with a shared toolkit and send them to a shared drive folder. Right now, whether a video came out at 4K is discovered by uploading it and looking at it. Vikhyat Raghumanda, a fellow at Humanitarians AI, presents five proposed packages for finding that out much earlier.

## The problem: four resolutions in circulation

The toolkit has grown quickly and the guidance has not caught up. Four different resolutions are in circulation, so someone can follow one set of instructions exactly and still produce a half-size file. The capability to render proper 4K is there, but nothing reliably stops a wrong render from reaching the drive.

## Three points of intervention

The five packages sit at three points. The first is prevention inside the toolkit, so the wrong file cannot be made. The second is catching problems on the fellow's own machine before upload. The third is detection in the drive after a file arrives. The video's guiding idea is that the further upstream a check sits, the fewer people are involved when a problem surfaces.

## Packages one and two: starter kit and toolkit enforcement

The first package is a starter kit. It is a block that a fellow pastes in before beginning, naming the two resolutions, the file name pattern and the channel. After the video is finished, one command on the finished folder prints a green and red checklist. It needs no permissions, but it does nothing for anyone who does not use it.

The second package standardizes the resolution inside the toolkit. Every instruction states the same two numbers, and the toolkit declines to save a final that is not one of them. It already declines a video carrying placeholder cards, so this is a sibling of an existing rule. It needs sign-off and does nothing for what has already been submitted.

## Package three: a read-only report

The third package is a scheduled job that reads the submissions folder and writes a spreadsheet. There is one row per file, grouped by fellow, with the resolution and the reason. It also lists who has not submitted. The video notes that bad videos are still made and still arrive, so this package shows them rather than preventing them.

## Packages four and five: real versus stretched, and sorting

The fourth package is a real-versus-stretch check. It samples frames and measures how crisp the edges are, which separates a genuine 4K render from a smaller one stretched to fill the frame. The video notes that 48 built-in templates are defined at 1280 by 720, which makes this distinction relevant. The result is a confidence signal, not proof.

The fifth package applies the same checks but lets the folder organize itself, and tells whoever submitted a failing file which setting to change. It needs permission to move files and adds nothing the report did not already have.

## How big the work really is

The video points out that packages one, three and four are not three separate builds, because they read the same folder and answer the same questions. Written once, the proposal amounts to two pieces of work in a document.

## Key takeaways

- Today, 4K quality is discovered by uploading a video and looking at it.
- Four resolutions are in circulation, which makes half-size renders easy to produce by accident.
- Checks work best upstream: prevent in the toolkit, catch locally, detect in the drive.
- A starter block and a one-command checklist cost no permissions but only help fellows who use them.
- A scheduled, read-only spreadsheet report shows resolution per file and who has not submitted.
- Sampling frame-edge crispness can separate genuine 4K from stretched smaller renders, as a confidence signal and not proof.
- Auto-sorting needs permission to move files and adds little beyond the report.

## Try it yourself

If you review submissions, ask yourself which of these five checks would have caught the last thing you sent back, and whether that check belongs upstream of you rather than with you. Pick one and write down what it would need: a rule, a command, or a report.
