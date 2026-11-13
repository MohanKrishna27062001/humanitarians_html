---
title: "Madison Update: What was Promised and What was Shipped"
seoTitle: "Gavia Loon Detector: Precision, Recall and Packaging"
description: "A Madison update that checks last week's promise against Gavia, an offline loon detector app that ships its own precision and recall on a model card."
summary: "Last week's promise was real precision and recall from the model itself, and this update checks whether it was kept. Gavia, a loon detector packaged as a desktop app that runs with no server, carries its own numbers on a model card."
keywords: ["offline loon detector desktop app", "precision and recall explained simply", "model card inside application bundle", "yolo11 onnx desktop app packaging", "f1 score from precision and recall", "confidence threshold trade off false positives", "ship machine learning model from notebook", "on device object detection no server"]
generated: "article"
---

Last week's update promised that real precision and recall numbers would come from the model itself before the meeting. This weekly Madison update checks that promise against what actually shipped. The answer is an application, Gavia, that runs on a laptop with no server and no account, and that prints the model's numbers on a card inside the bundle.

## From a notebook to an application

Gavia is a desktop application that detects loons in field and drone photographs. The video gives its size as 84 megabytes to download and 176 once installed, for Apple silicon Macs running macOS 10.15 and up. Inside the bundle are a Rust shell, a Python service, the ONNX runtime and the detector itself, about 36 megabytes of weights. The video notes that nothing in that list reaches for a server. The written description adds that the detector is YOLO11s, trained for 100 epochs at 640 pixels, and that the backend binds to the local loopback address only.

## One image in, one box out

The app behaves the way a field tool should. You give it one image, and it draws a box where the bird is. The box shows a confidence of 82 percent, with a line underneath saying that highlighted areas show where a loon was found. The video is careful to say this is a place, not a score on its own. The written description stresses that this 82 percent is the confidence on one box in one photograph and is not a model metric. The history page keeps earlier checks on your own disk.

## The card the promise was about

The promise concerned four numbers read from the model card: precision 0.93, recall 0.80, mean average precision at 50 of 0.894, and the stricter 50 through 95 figure of 0.614. They come from the checkpoint inside the app, not from a hand count. Precision means that when the model calls something a loon, it is almost always right.

## Two definitions that differ by one term

The video explains that precision and recall form a trade. Precision divides the true finds by everything the model called a loon. Recall divides the same true finds by every loon that was really there. A single number can balance them, the harmonic mean, which comes to 0.86. The card does not print it, and the video says plainly that it was computed from the two numbers the card does print.

## One loon in five

A recall of 80 percent has a plain meaning: roughly one loon in five goes unreported by the model. The card exposes a dial for this, a confidence threshold set to 0.25. Lowering it finds more birds and also more reed beds, while holding it keeps the misses. The video calls this a decision to make, not a bug to fix. The verdict is that the promise was kept, the detector left the notebook, and the app calls itself a prototype on every screen, with the one-in-five gap left for next week.

## Key takeaways

- The promise was real precision and recall from the model itself, and it was delivered inside a desktop application.
- Gavia runs on a laptop with no server and no account; it is 84 MB to download and 176 MB installed.
- The model card reports precision 0.93, recall 0.80 and mAP at 50 of 0.894.
- F1, the harmonic mean of precision and recall, is 0.86 and is computed rather than printed on the card.
- An 82 percent figure on a result box is a confidence for one detection, not a model metric.
- A recall of 0.80 means about one loon in five is missed, and the confidence threshold trades misses against false alarms.

## Try it yourself

If you have a model that only works in a notebook, put it in something a colleague can open with no terminal and no account. Then make the build write the model's own numbers into the bundle. If you cannot state recall on the way out the door, the video says, it is not shipped yet.
