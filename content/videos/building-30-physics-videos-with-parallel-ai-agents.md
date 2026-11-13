---
title: "Building 30 Physics Videos with Parallel AI Agents"
seoTitle: "Building 30 Physics Videos with Parallel Claude Code Agents"
description: "Week 12 of Project Medhavy: four parallel Claude Code agents built 30 physics videos in about a day, and process locks kept the machine from crashing."
summary: "Varun reports week 12 of Project Medhavy, \"Progress 30 of 30.\" Four parallel Claude Code agents built all remaining physics concepts from one shared brief, and the main engineering lesson was that parallel jobs sharing memory need locks."
keywords: ["run parallel claude code agents", "process locks for shared memory jobs", "gpu narration versus cpu speed", "stop linux crashes with parallel jobs", "build many videos from one brief", "resume agents after api rate limit", "restitch video intros and outros", "project medhavy physics videos"]
generated: "article"
---

Varun's week 12 update on Project Medhavy is titled "Progress 30 of 30." It covers building all the remaining physics videos, smoothing a new intro and outro, and publishing five more shorts. The central lesson is an engineering one: when several agents or background jobs share memory, they need strict limits on what can run at once.

## Building 30 concepts with four agents

On October 17th, Varun asked for every remaining video as soon as possible. The count turned out to be 31 storyboards, not 29, which left 21 concepts to build. Claude Code ran four parallel agents from one shared brief, and by October 18th all 30 concepts were built. Varun puts the pace in context: six concepts were built at the end of September, nine by October 15th, and all 30 by October 18th.

## Encoding and narration decisions

Varun approved portrait rendering at 30 frames per second, since 60 was wasted, and GPU encodes for 4K output. He also tested GPU narration, which ran about six and a half times faster than CPU narration. To his ear it sounds the same, but it is not identical audio. Because of that, GPU narration is opt-in and is never mixed within a single video.

## Crashes and process locks

Running everything at once crashed the Linux side several times. The fix was locks on renders, narration, and encodes that allow only one of each at a time. Later, an API rate limit stopped all four agents. They were resumed from their saved work rather than started over.

## Fixing the intro and outro

Varun said the intro and outro felt abrupt, and then that the intro was disjointed. Claude Code measured the frames and audio and found two problems: the questions started while the logo was still fading, and the intro's sound cut off. A new recipe holds the logo, fades the sound, and dissolves through white. Twenty-three shorts were restitched with it.

## Correcting physics and publishing

Claude Code also corrected physics errors in the storyboards. One example was orbit energy, where the storyboard had the burn direction backwards. Five shorts went live, with descriptions written for all 24 that were waiting. The code went into the repository, but the first push hung for 24 minutes waiting for a GitHub login that the clone does not have. It was then pushed once using the stored Windows login.

Varun splits the roles clearly. Claude Code built the 30 concepts, ran the locks, tested GPU narration, and corrected the storyboard physics. Varun decided the speedups, gave the intro feedback, and published the shorts.

## Key takeaways

- Four parallel Claude Code agents working from one shared brief built all 30 remaining concepts between October 17th and 18th.
- The real count was 31 storyboards rather than 29, leaving 21 concepts to build.
- Portrait at 30 fps was enough, and GPU encoding handled 4K.
- GPU narration ran about 6.5 times faster than CPU but is not identical, so it is opt-in and never mixed within one video.
- Running everything at once crashed the Linux side, and locks allowing one render, one narration, and one encode at a time fixed it.
- Agents resumed from saved work after an API rate limit stopped them.
- Parallel work needs locks: when jobs share memory, let one of each kind run at a time.

## Try it yourself

If you run several agents or background jobs on one machine, list the heavy job types, such as rendering, narration, and encoding. Add a lock for each so only one of that kind runs at a time, and make sure each agent saves its work so it can resume after an interruption.
