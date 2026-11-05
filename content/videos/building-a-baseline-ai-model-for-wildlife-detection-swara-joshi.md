---
title: "Building a Baseline AI Model for Wildlife Detection | Swara Joshi"
seoTitle: "Training a Baseline Loon Detection Model: Fellow Update"
description: "Swara Joshi explains how a first baseline model for loon detection validated an end-to-end pipeline and showed why drone footage needs better data."
summary: "Swara Joshi, a Humanitarians AI fellow on the National Loon Center project, describes moving from annotation into training a first baseline loon detector. The run proved the whole pipeline works and showed what the small dataset cannot yet support."
keywords: ["train baseline object detection model", "loon detection from drone footage", "annotation to evaluation ml pipeline", "why baseline model matters in ml", "small dataset limits object detection", "diverse training data for drone images", "national loon center ai project", "prepare annotated data for detector"]
generated: "article"
---

Swara Joshi, a fellow at Humanitarians AI working on the National Loon Center project, reports on a step that many machine learning projects reach: moving from data preparation and annotation into training a first model. The goal was not a finished detector. It was a baseline, a real result to measure later progress against.

## From annotation to a first training run

This week the work moved from the data preparation and annotation stage into the machine learning stage. The task was to take the sample dataset and the annotations the team had created, and train an initial baseline model for loon detection. Swara states plainly that this first run was not about building a production-ready model.

## What was done

The annotated data first had to be put into a format the detector could train on. That meant organizing images and labels so they were structured correctly. Swara then trained the model and ran it on data it had never seen, to understand how well the current dataset could support object detection.

## What the results showed

The results were encouraging in one sense: the model learned the concept of a loon and generated real detections from the input data. They also showed the limits of a relatively small and varied sample dataset. According to the video, that is exactly the information the team needed in order to know where the pipeline has to grow.

## The pipeline is the bigger win

Swara argues that the larger value of this run is what it validates. Data, annotation, dataset preparation, training, and evaluation were all connected end to end for the first time. The video says this matters as much as the detection results themselves. The run also gives the team something real to compare against as more representative data is collected.

## Why drone footage raises the bar

For the real conservation use case, the model eventually has to work on drone footage, where loons appear at different distances, angles, lighting conditions, and sizes. A small collection of general loon images cannot cover that range, so the quality and diversity of the training data will matter enormously.

## What comes next

The honest state, in Swara's words, is a baseline and not a finished model, with a dataset that is still small and not yet representative of drone footage. Next steps are improving the dataset and the annotation workflow with more representative data, then retraining and comparing against this week's baseline. A later part of the series will cover how the models are evaluated and how their predictions can make annotation faster.

## Key takeaways

- The project moved from data preparation and annotation into training a first loon detector.
- The first run was meant to set a baseline, not to ship a production model.
- Data had to be structured correctly, with images and labels organized for the detector.
- The model learned the concept of a loon and produced real detections, but a small, varied dataset limits it.
- The main milestone is that annotation, dataset preparation, training, and evaluation now work end to end.
- Real use needs data covering varied distances, angles, lighting, and sizes in drone footage.
- Next steps are a better dataset, retraining, and comparison against this baseline.

## Try it yourself

Swara ends with a question worth answering for your own project: what is the fastest way to tell whether a new batch of training data is actually representative of real drone conditions? Write down what conditions your model will face, then check a new batch against that list before you retrain.
