---
title: "Week 3 Summary: 1D Raman Spectra Classification (Why Simple Models Win)"
seoTitle: "Why a Simple CNN Beat a Transformer on Raman Spectra"
description: "A week-three project update comparing five deep learning models on 1D Raman spectra, where the simplest CNN beat the Transformer by over 20 points."
summary: "The video reports a week of experiments classifying 1D Raman spectra across 30 bacterial classes with five architectures. The shallow legacy CNN reached 76.5% accuracy and beat the Transformer by more than 20 points, and the video explains why."
keywords: ["raman spectra classification with deep learning", "simple cnn vs transformer accuracy", "1d signal classification model comparison", "why shallow models beat transformers", "bacterial raman spectra classification", "overfitting in high capacity models", "legacy cnn confusion matrix results", "choosing model for 1d spectral data"]
generated: "article"
---

This is a week-three progress update from a project on classifying Raman spectra, created by Hrishikesh for RamanEffect. The team tested five deep learning architectures on 1D Raman spectra covering 30 bacterial classes. The result runs against a common expectation: the deepest, most complex model did not win, and the simplest one did.

## What a 1D Raman spectrum looks like

The video starts by showing the input. A Raman spectrum is a one-dimensional signal of about 1,000 points, and the shape of that signal is made up of chemical peaks. Every model in the experiment receives this same kind of input and has to decide which of the 30 bacterial classes it belongs to. Seeing the signal first makes the later argument easier to follow, because the data is a single line of peaks rather than a rich image or a long text.

## The five models and the Transformer assumption

The team evaluated five different models. They ranged from custom multiscale CNNs and ResNets to a custom CNN-Transformer fusion network and a modern 1D Transformer. The video names the expectation directly: you would think the deepest, most complex Transformer would come out on top. In this benchmark it did not. The simplest model in the lineup, called the legacy CNN, dominated the leaderboard.

## Benchmark results

The headline number is 76.5% accuracy for the legacy CNN. That put it ahead of the Transformer by more than 20 points. The video presents this as a clear result rather than a close call, since the gap held across the full set of architectures that were tried. The ResNets and the fusion network were part of the same comparison and also finished behind the shallow CNN.

## Reading the legacy CNN confusion matrix

To look beyond a single accuracy figure, the video shows the confusion matrix for the legacy CNN. The narration describes a strong diagonal, meaning that most spectra were assigned to their correct class. A confusion matrix is useful here because it shows which classes the model gets right and where it mixes them up, and in this case the pattern supports the leaderboard result instead of contradicting it.

## Why the shallow model won

The explanation offered is about capacity. One-dimensional spatial data is relatively straightforward, and a Transformer has more capacity than the task needs. With that excess capacity, the video says, the Transformers ended up memorizing the background noise in the spectra rather than learning the signal. The shallow CNN works differently. Its small size acts as a natural bottleneck, so it can only capture the vital chemical peaks, and that limitation is what keeps it from overfitting. In this setting, less room to memorize meant better generalization.

## Key takeaways

- Five architectures were compared on 1D Raman spectra with 30 bacterial classes.
- Each input is a roughly 1,000-point signal whose shape is defined by chemical peaks.
- The simplest legacy CNN reached 76.5% accuracy and beat the Transformer by over 20 points.
- Deeper and more complex models did not win; the shallow model led the leaderboard.
- High-capacity models can memorize background noise instead of learning the useful signal.
- A shallow CNN acts as a natural bottleneck that focuses on the vital chemical peaks.
- A confusion matrix with a strong diagonal helps confirm that a result is not just a single lucky number.

## Try it yourself

On your next signal processing task, start with a shallow CNN before reaching for a Transformer. Train it first, record its accuracy and confusion matrix, and only then decide whether a larger model has anything left to add. The video also ends with a prompt you can paste into Claude to dig deeper into why simpler models can win on straightforward 1D data.
