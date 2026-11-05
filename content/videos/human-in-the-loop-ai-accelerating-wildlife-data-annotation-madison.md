---
title: "Human-in-the-Loop AI: Accelerating Wildlife Data Annotation | Madison"
seoTitle: "Human-in-the-Loop AI for Wildlife Data Annotation"
description: "Swara Joshi shows how a loon detection model assists researchers with drone footage annotation while humans review, correct and retrain it."
summary: "Swara Joshi from Humanitarians AI explains how a trained loon detection model can assist researchers during annotation without replacing them. Predictions are reviewed, corrected and fed back into retraining, and every prediction still gets human review."
keywords: ["human in the loop data annotation", "model assisted annotation workflow", "bounding boxes and confidence scores explained", "annotate drone footage with machine learning", "loon detection model for wildlife", "retraining a model with corrected annotations", "risks of fully automated data labeling", "wildlife conservation machine learning project"]
generated: "article"
---

Once a model is trained, how should it be used? In this weekly project update, Swara Joshi from Humanitarians AI describes how a loon detection model can improve an annotation workflow for drone footage. The goal is not to replace the researcher. The model assists by identifying potential loons and creating preliminary annotations, and a human stays responsible for what ends up in the data.

## Where the project stands

The previous video covered training an initial loon detection model on the sample data set that was available. This week's focus was on how to put that trained model to work inside the annotation workflow. The framing is assistance rather than automation, and the rest of the update follows from that choice.

## From frame to predictions

The workflow starts with a frame from the drone footage. The model processes it and generates predictions. For each potential loon it provides a bounding box along with a confidence score. Instead of drawing every box from scratch, the researcher starts from what the model has already identified.

## Review, accept, adjust or reject

The researcher then reviews each prediction and has three options:

- If a prediction is correct, accept it.
- If a box is not positioned correctly, move or resize it.
- If the model detected something that is not a loon, reject it.

The model reduces how much manual work annotation takes, and the researcher remains responsible for validating the data.

## A continuous feedback cycle

As more real drone footage is collected and researchers correct the model's predictions, those corrected annotations become additional training data. The video describes this as a continuous cycle: annotate, train, predict, review, correct and retrain. Over time the model keeps adapting to the project's specific conservation data.

## Why not automate everything

Swara sets out the real choice: let the model fully automate labeling, or keep a human reviewing every prediction. Full automation risks quietly baking mistakes into the data at scale. The human-in-the-loop approach avoids that. There is also a practical reason for caution. The real footage may look very different from the sample data used to train the first model. Drone footage can have much smaller objects, different viewing angles, different lighting and different distances from the birds. So the next stage is not just about a model that works on the sample data set.

## What comes next

To state it plainly, the model does not replace the researcher; it assists them, and every prediction still needs human review. The annotation tool being built becomes more than a labeling interface, because it connects the researchers, the data and the machine learning models. Next, Swara will work on integrating the detection model directly into the annotation workflow and testing how well it helps label new footage, especially footage that looks different from the sample data.

## Key takeaways

- The trained model assists researchers during annotation and does not replace them.
- For each potential loon the model provides a bounding box and a confidence score.
- Researchers accept correct predictions, move or resize imperfect boxes, and reject false detections.
- Corrected annotations become new training data in a cycle of annotate, train, predict, review, correct and retrain.
- Full automation risks quietly baking in mistakes at scale.
- Real drone footage may differ from the sample data in object size, angle, lighting and distance.
- Every prediction still needs human review.

## Try it yourself

The video ends with a question for viewers: what is the clearest sign that a model-assisted prediction is actually saving a researcher time, rather than just adding another thing to review? Think through your own answer for an annotation task you know, and decide how you would measure it before relying on the model's predictions.
