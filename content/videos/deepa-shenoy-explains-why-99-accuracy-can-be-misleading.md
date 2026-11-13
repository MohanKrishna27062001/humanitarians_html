---
title: "Deepa Shenoy explains: Why 99% Accuracy Can Be Misleading"
seoTitle: "Why 99% Accuracy Can Be Misleading (Spam Example)"
description: "Deepa Shenoy shows with a spam example why a high accuracy score can hide a classifier that never catches the rare class."
summary: "Deepa Shenoy builds a teaching example of 100 emails, 99 ordinary and one spam, and a classifier that always says ordinary. It scores 99% accuracy but 0% spam recall, which shows why accuracy alone is not enough."
keywords: ["why 99 percent accuracy can be misleading", "accuracy vs recall explained simply", "what is recall in classification", "imbalanced classes accuracy problem", "spam classifier accuracy example", "how to calculate spam recall", "evaluate classifier beyond accuracy", "which mistakes matter in classification"]
generated: "article"
---

In this video Deepa Shenoy, with narration by Liam on her behalf, explains why a high accuracy score can hide important mistakes. She uses a small labeled example and asks two questions: how many labels are correct overall, and how many actual spam emails are caught?

## The teaching example

Imagine 100 emails: 99 ordinary emails and one spam email. The video stresses that these are made-up teaching counts and not measurements of a real inbox. The classifier in the example is deliberately simple, because it always says ordinary.

## Calculating accuracy

Since the classifier says ordinary every time, it labels the 99 ordinary emails correctly and misses the spam. That is 99 correct labels out of 100, which is 99% accuracy. On its face, that looks like a very good result.

## Calculating spam recall

Next the video puts the missed spam beside the overall score. Spam recall asks what fraction of the actual spam was caught. There is one spam email and the rule catches none of them, so the answer is zero out of one, or 0%. The video shows both denominators, so it is clear which group each number describes: accuracy is out of all 100 emails, and recall is out of the one spam email.

## Why the two scores differ

The high accuracy came from getting the common category right. It did not show that the rule could detect spam. This is why a rare category can be nearly invisible in the overall score: if almost every example belongs to one class, a system that ignores the other class can still look excellent.

## Beyond accuracy

The video does not say accuracy is useless. It says accuracy is useful but is not the whole evaluation. To judge a classifier, ask three things: how many examples belong to each category, which mistakes the system makes, and which mistakes matter for the task. In the spam example, the mistake that matters is the missed spam, and accuracy does not show it.

## A short exercise

The video closes with an exercise. For 99 ordinary emails and one spam email, predict ordinary every time. Calculate accuracy and spam recall, showing both denominators, and explain why the scores differ. The answer it gives: 100 emails overall, one actual spam email, 99% accuracy and 0% spam recall.

## Key takeaways

- A high accuracy score can hide important mistakes.
- In the example, 99 correct labels out of 100 gives 99% accuracy.
- Spam recall is the fraction of actual spam that was caught, here zero out of one, or 0%.
- The high accuracy came from getting the common category right.
- Accuracy is useful, but it is not the whole evaluation.
- Ask how many examples belong to each category, which mistakes the system makes, and which matter for the task.
- The counts in the example are made up for teaching, not real inbox data.

## Try it yourself

Work the exercise by hand. Take 99 ordinary emails and one spam email, imagine a classifier that predicts ordinary every time, and write out accuracy and spam recall with their denominators. Then change the example to a task of your own and name which kind of mistake would matter most.
