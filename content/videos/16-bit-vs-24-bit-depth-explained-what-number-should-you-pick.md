---
title: "16-Bit vs 24-Bit Depth Explained: What Number Should You Pick?"
seoTitle: "16-Bit vs 24-Bit Audio: Which Bit Depth to Choose"
description: "Understand what bit depth controls in digital audio, why 16-bit hiss is already inaudible, and why to record and edit in 24-bit but export in 16-bit."
summary: "Rohan Vijayakumar, a fellow at Humanitarians AI, explains bit depth using a ruler analogy and shows how rounding errors create a faint hiss. The takeaway is simple: record and edit in 24-bit, then export in 16-bit."
keywords: ["16 bit vs 24 bit audio", "what is bit depth in audio", "sample rate vs bit depth difference", "what causes background hiss in recordings", "should i record in 24 bit", "quantization noise explained simply", "best bit depth for exporting audio", "bit depth headroom while editing"]
generated: "article"
---

Saving a recording on almost any device prompts a question: 16-bit or 24-bit, with no explanation and no obviously right default. In this short video, Rohan Vijayakumar, a fellow at Humanitarians AI, explains what that number actually controls and which one to pick.

## What sound is and how a computer records it

The video starts with what sound actually is: movement, air pressure rising and falling. A microphone senses that movement, and a computer has to write it down as a list of numbers. To do that it answers two separate questions. How often should it take a measurement? That is the sample rate. How precisely should it write each measurement down? That is bit depth. The video focuses only on bit depth.

## The ruler analogy

Think of two rulers of the same length, one marked in centimeters and one marked in millimeters. The second lets you be more precise. Bit depth is how many markings the ruler has.

There is a catch: every measurement has to land exactly on a marking. Anything in between is pushed to the nearest one, so every stored number is slightly off. Each error is tiny on its own, but this happens tens of thousands of times every second.

## Where the hiss comes from

All those small errors add up to a sound of their own, a faint hiss underneath the music. The coarser the ruler, the bigger each error and the louder the hiss.

The video gives numbers for this. At 8-bit the hiss sits about 50 decibels below full volume. At 16-bit it sits about 100 decibels below, which the video describes as roughly the gap between a whisper and a rock concert. At 16-bit the hiss is already quieter than the room you are sitting in, so you will never hear it.

## Why 24-bit exists

If 16-bit is already quiet enough, why is there a 24-bit option? The video's answer is that while you are working, every edit rounds all over again. Turn something up and you turn its hiss up with it. A 24-bit file gives you room to absorb all of those edits.

## The practical rule

Record and edit in 24-bit, and export in 16-bit. The listener gains nothing from more. The video's closing line is that bit depth is not quality, it is room to work in: keep it while you edit and spend it when you ship.

## Key takeaways

- Sample rate is how often sound is measured; bit depth is how precisely each measurement is stored.
- Bit depth works like the number of markings on a ruler.
- Rounding each measurement to the nearest marking creates small errors that add up to a faint hiss.
- A coarser bit depth means a louder hiss: about 50 dB below full volume at 8-bit and about 100 dB at 16-bit.
- At 16-bit the hiss is already quieter than a typical quiet room.
- Editing rounds the audio again each time, so 24-bit gives headroom while you work.
- Record and edit in 24-bit, then export in 16-bit.

## Try it yourself

The next time your recording software asks for a bit depth, set it to 24-bit for recording and editing, and choose 16-bit only at the final export step. Keeping the extra room until the very end is the whole point.
