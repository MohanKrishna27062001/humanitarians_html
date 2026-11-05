---
title: "AI in Astronomy: Asteroid Tracking, Shrinking Uncertainty Clouds"
seoTitle: "How Asteroid Impact Odds Rise Then Drop to Zero"
description: "Om Mali explains how neural networks filter junk from sky surveys, and why a rising asteroid impact probability often means the uncertainty is shrinking."
summary: "Sky surveys use neural networks to discard artifacts so people only examine plausible asteroids. The video then shows that impact odds come from orbital arithmetic, and that a rising number can mean the uncertainty cloud is shrinking while Earth is still inside it."
keywords: ["how asteroid impact probability changes", "neural network filters sky survey artifacts", "why asteroid collision odds rise then fall", "image subtraction in sky surveys", "orbital uncertainty cloud explained simply", "cosmic ray versus real asteroid detection", "how near earth asteroids are ruled out", "ai in astronomy asteroid detection"]
generated: "article"
---

This episode of a series on AI reading the sky looks at the moment when learned image filtering stops and plain arithmetic starts. Om Mali, speaking for Humanitarians AI, explains how sky surveys and neural networks find asteroids headed toward Earth, and why a rising chance of impact is usually the system working as intended. Telescopes sweep the whole sky every night, a network throws out the junk so people only look at plausible rocks, and then celestial mechanics decides whether to worry.

## Finding movers by subtraction

A survey telescope photographs the same field several times a night, four in the video's description, and then subtracts the previous night's picture. What remains is anything that moved, along with cosmic rays, satellites and every star the subtraction got slightly wrong. The job of sorting these out falls to a convolutional neural network, which learns to tell several kinds of dot apart. A cosmic ray is a single pixel, and a bad subtraction leaves a two-lobed pattern. A second network then reads four detections in a row, since a real rock moves along a straight line at a steady rate and junk does not. Together these cut what humans must screen by 90 percent.

## Where the learning ends

The video stresses that the network never learned an orbit. After it finishes, the work is much older arithmetic: fit a trajectory, then sample every orbit the data still allows. That cloud of possible orbits is the answer to how worried to be.

## Why the odds climb and then collapse

The video gives a real example. In December, a survey telescope in Chile caught a 60 metre rock whose odds of hitting Earth climbed past 3 percent, the highest ever recorded. Five days later the odds were essentially zero. The reason is that the uncertainty is a long, thin cloud with Earth inside it. More observations shrink the cloud, so while Earth is still inside, the probability rises. It collapses once the cloud shrinks past us. The same pattern happened with the Moon, whose odds climbed for months to the highest value yet before Webb ruled it out in March.

## What is learned and what is not

The learned part answers whether a dot is real. Nothing learned decides whether anyone should move. The video also notes that the gap is real: only 11 impactors have ever been caught in advance. The summary is that the sky is subtracted, the junk is learned away, and the odds come from arithmetic.

## Key takeaways

- Survey pipelines subtract the previous night's image to expose anything that moved.
- Convolutional networks separate real movers from cosmic rays, satellites and subtraction errors.
- A second network checks that four detections form a straight, steady track.
- Together the networks cut human screening by 90 percent.
- Impact odds come from orbital arithmetic, not from the network.
- A rising probability can mean the uncertainty cloud is shrinking while Earth is still inside it.
- Only 11 impactors have ever been caught in advance.

## Try it yourself

Ask Claude to help you tell apart a number that rose because things got worse from one that rose because the uncertainty shrank, and what to ask before reacting to either. Run it on a forecast you actually track, and watch whether Claude asks what is shrinking.
