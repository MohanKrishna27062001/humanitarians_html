---
title: "Rebuilding Chapter 6 & Shared Module Fixes"
seoTitle: "Rebuilding Chapter 6 Videos and Fixing a Shared Module"
description: "A Week 11 update from Project Medhavy: new 4K intro and outro clips, three rebuilt physics videos, and why repeating defects belong in the shared module."
summary: "Varun's Week 11 update for Project Medhavy covers adding approved 4K intro and outro clips to the pipeline and rebuilding three Chapter 6 physics videos. The main lesson is to fix a repeating defect once in the shared module rather than in every video."
keywords: ["fix repeating bugs in shared module", "rebuild physics videos with claude code", "centripetal friction static friction terminal velocity", "4k intro outro video pipeline", "single question card video opening", "fix narration drift in video", "project medhavy weekly progress update", "shared module caption font size"]
generated: "article"
---

This Week 11 update from Varun covers Project Medhavy, an educational video pipeline. Two things happened: the approved intro and outro clips went into the pipeline, and Chapter 6 was rebuilt in the approved format. The video closes on an engineering habit that applies well beyond this project, which is to fix a defect once at the shared level rather than patching it video by video.

## Adding the approved intro and outro to the pipeline

On October 15th, the final intro and outro clips went into the pipeline. They come in vertical and horizontal versions, both in native 4K. The intro runs 3 seconds and the outro runs under 5 seconds.

The video also explains the decision about where they are used. The new clips are assigned to future shorts only. Long-form videos get no intro or outro at all. The video presents this as a deliberate call made by a person, not something the tooling decided.

## Rebuilding Chapter 6 in the approved format

Three Chapter 6 physics videos were rebuilt: centripetal friction, static friction, and terminal velocity. Each one now opens directly on a single question card in place of a separate title card, so the viewer meets the problem right away.

The shared module was brought up to the same approved format. Captions now use PT Sans at 15 points. Because the module is shared, that change applies to every video built on it, not just the three in this batch.

## Defects found along the way

The rebuild turned up several visual and audio problems, all of which were corrected:

- In the centripetal video, the narration had drifted about four and a half seconds out of sync with the visuals.
- A car was clipped at the edge of the frame.
- In the static friction video, the legend text ran together.
- Small text was breaking words awkwardly, so a crisp text helper now draws it.

## Where Claude Code fits

Claude Code rebuilt the three videos, fixed the defects, and updated the shared module. The video divides the work clearly. Claude Code did the rebuilding and fixing, while the decisions stayed with Varun: new clips for future shorts only, no intro or outro on long forms, and continuing on with Chapter 6.

## The takeaway: fix it once, in the shared module

The central engineering point is that a defect appearing repeatedly should be fixed where it originates. Several of the problems here, such as small text breaking words, would otherwise need the same patch in every video. Putting the fix in the shared module, as the crisp text helper now does, means later videos inherit it. The update ends with Chapter 6 rebuilt and the next step planned: building every remaining video.

## Key takeaways

- Approved 4K intro and outro clips (3 seconds and under 5 seconds) are now in the pipeline in vertical and horizontal versions.
- The clips are for future shorts only; long-form videos get no intro or outro.
- Three Chapter 6 videos were rebuilt: centripetal friction, static friction, and terminal velocity.
- Each rebuilt video opens on a single question card rather than a separate title card.
- The shared module now uses PT Sans captions at 15 points.
- Fixes included a 4.5-second narration drift, a clipped car frame edge, overlapping legend text, and awkward word breaks in small text.
- Fix a repeating defect once in the shared module instead of in every video.

## Try it yourself

Look at the last few things you produced from a shared template and list any defect that appeared more than once. Fix the first one in the template itself, then rebuild one item to confirm the fix carries through. If you use an AI coding assistant for the rebuild, keep the decisions, like which assets go where, in your own hands, as the video does.
