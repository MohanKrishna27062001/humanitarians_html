---
title: "Amos explains: Why Flawed Reasoning Outweighs Wrong Predictions"
seoTitle: "Why Seed Variance Cannot Predict a Preprocessing Change"
description: "Removing a default baseline step from a spectroscopy classifier raised accuracy by 7.61 points, showing why flawed reasoning matters more than a wrong number."
summary: "Working notes from the Humanitarians AI Fellowship describe what happened when a default baseline correction step was removed from a spectroscopy classifier. The prediction was wrong, but the flaw in its reasoning is the lesson."
keywords: ["why default preprocessing steps need testing", "baseline correction hurting classifier accuracy", "seed variance versus input representation change", "paired mcnemar test explained simply", "raman spectroscopy classifier baseline correction", "how to calibrate ai predictions", "questions to ask when ai gives an estimate", "wrong prediction versus wrong reasoning"]
generated: "article"
---

These working notes from the Humanitarians AI Fellowship start with a question about a spectroscopy classifier. A baseline correction step called ASPLS sits in the default pipeline, and nobody has checked whether it earns its place. The author asked an AI model to predict what would happen to test accuracy if the step were removed, to say where its number came from, and to say what would make that number wrong.

## A confident prediction that failed

The answer came back confident: a loss of two to five points. It was wrong. Accuracy went up rather than down, and by more than the entire predicted range. The video argues that the size of the miss is not the interesting part. The number and the reasoning failed in two different ways, and only one of them is worth learning from.

## What the baseline step does

Raman spectra arrive sitting on a slow, wandering baseline, mostly fluorescence, which carries no information about the molecule of interest. Baseline correction subtracts that drift so that the sharp peaks stand alone. It is standard and part of the default pipeline, which is exactly why nobody had questioned it.

## Where the estimate came from

The estimate was not pulled from the air. It was derived from a validation-to-test pass-through ratio measured on seed variants. In plain terms: run the same model with different random seeds, watch how much test accuracy wobbles, and use that wobble to scale how much a change should move the number.

## The result

Removing ASPLS did not cost two to five points. It gained 7.61 points. The prediction was wrong in direction as well as size, and the step everyone kept because it is standard had been actively hurting the classifier. Noise is not a plausible explanation: across six runs, a paired McNemar test gave p equal to 2.5 times 10 to the minus 57. The video explains that a paired test is the right choice because the test set is fixed and the same samples are being compared under two pipelines.

## The real lesson

Seed variance measures one thing: how much the answer moves when you reroll randomness and change nothing else. Removing a preprocessing step is not a reroll. It changes the input representation, so the model is now looking at different data. A ratio calibrated on one kind of variation cannot price a different kind. Being off by about ten points is incidental; the reasoning pattern could not have worked at any magnitude.

## Testing the follow-on claim

The same line of reasoning had predicted that an earlier finding in the repository, that smaller models win, was just an artifact of the bad baseline step. After 12 more runs on the corrected pipeline, with four architectures and three seeds each, the legacy CNN still won, at 83.89 against 79.56 for ResNet. The hypothesis was confidently argued and wrong, and rejecting it on evidence left the original finding better supported than before.

## Key takeaways

- A standard step in a default pipeline can hurt performance, and it should be tested.
- Removing ASPLS raised accuracy by 7.61 points against a predicted loss of two to five.
- Seed variance only measures randomness; it cannot calibrate a change to the input representation.
- A paired McNemar test fits when the same fixed test set is evaluated under two pipelines.
- Ask what kind of variation an estimate was calibrated on, and whether your change is the same kind.
- A wrong number matters less than reasoning that could not have worked at any magnitude.
- Rejecting a hypothesis on evidence can strengthen the original finding.

## Try it yourself

Take any estimate an AI model hands you and do not argue with the number. Ask what kind of variation it was calibrated on and whether the change you are making is the same kind. The video notes that the useful answer is usually the third one, after the model stops defending its first.
