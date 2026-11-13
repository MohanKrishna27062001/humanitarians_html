---
title: "AI in Astronomy: Replacing Cosmological Simulations with Emulators"
seoTitle: "AI Emulators for Cosmological Simulations"
description: "Om Mali explains how a neural network can correct a cheap approximation to replace costly N-body simulations, and why such emulators stay limited."
summary: "Cosmology tests theories by simulating thousands of universes, which few can afford. The video shows an emulator that corrects the cheap Zeldovich approximation to match N-body results within about 5 percent in a thousandth of the time, while warning about its limits."
keywords: ["ai emulator for cosmological simulations", "n-body simulation speedup with neural network", "zeldovich approximation explained simply", "quijote simulation dataset training data", "learned surrogate versus physics simulation", "emulator out of distribution limits", "replace expensive simulation with machine learning", "power spectrum emulator accuracy"]
generated: "article"
---

Cosmology cannot experiment on the universe, so it tests a theory by simulating it, and that takes thousands of universes. This episode of Humanitarians AI's astronomy series, presented by Om Mali, covers how AI is replacing the most expensive calculation in cosmology and what you give up when a network answers instead of gravity. Where earlier episodes had AI looking at data, this one has it replace the physics.

## Why thousands of simulations

A cosmologist is not checking one universe but searching a parameter space. The video cites Quijote, a dataset of 44,000 simulations across 7,000 cosmologies, covering 8.5 trillion particles, built as training data. Each simulation is expensive because gravity has no shortcut: every particle pulls on every other. The solver deposits mass on a grid, solves for the field, nudges everything and repeats hundreds of times.

## A cheap guess to correct

The trick is that there is a cheap answer, the Zeldovich approximation, which moves every particle once in a straight line and stops. It works very well while the universe is smooth and is badly wrong once things collapse. Rather than fix the physics, the approach fixes the picture. A network is trained on the difference between the cheap guess and the real simulation, and then applies that correction. It never computes a force.

## What the emulator achieves

On the statistics cosmologists use, such as the power spectrum, the bispectrum and wavelets, the emulator matches the full N-body result within about 5 percent at most scales. It does so in a thousandth of the time, the thousand-fold speedup in the title.

## Compression, not physics

The video then explains where it breaks. The model has never simulated gravity. It learned a map from a starting field to a finished one for the universes it was shown, which makes it compression rather than physics. The reported errors sit inside dense halos, and halos are where galaxies live. In the speaker's own 2D run, the cheap guess was 4 percent off on large scales and far worse, 60, on small ones. A deeper limit is quieter: training needs N-body runs, so the emulator compresses simulations you have already paid for, and you can trust it only inside the box it was shown.

## Key takeaways

- Cosmology tests theories by simulating many universes across a parameter space.
- N-body gravity simulations are costly because every particle affects every other.
- The Zeldovich approximation is a cheap one-step straight-line guess that fails once structure collapses.
- A network trained on the gap between the cheap guess and real simulation can match N-body within about 5 percent.
- That emulator runs in about a thousandth of the time.
- It never computes a force, so it is bounded by its training distribution.
- Errors concentrate in dense halos where galaxies form.

## Try it yourself

The video offers a prompt for Claude: you want to replace an expensive simulation with a learned surrogate, and you ask it to help choose which statistics the surrogate must reproduce and to what tolerance, how to spot an input outside its training set, and what you would still run the slow way. Grade the answer on named tolerances, an out-of-distribution check and a slow-path audit.
