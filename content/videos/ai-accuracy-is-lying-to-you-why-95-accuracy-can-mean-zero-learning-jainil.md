---
title: "AI Accuracy Is Lying to You: Why 95% Accuracy Can Mean Zero Learning | Jainil"
seoTitle: "Why High Accuracy Can Hide a Useless Model"
description: "A rare-disease example shows why a model with 95 or 99.9 percent accuracy can learn nothing, and why precision and recall matter more."
summary: "Jainil shows with simple arithmetic that accuracy rewards the majority answer. When the target class is rare, a model that never finds it can still score very high, so precision and recall on the rare class are the numbers to read."
keywords: ["why accuracy is misleading in machine learning", "rare class imbalance accuracy trap", "precision and recall explained simply", "accuracy paradox disease screening example", "model that always predicts no", "recall of zero lazy model", "fraud detection accuracy versus recall", "check baseline accuracy of classifier"]
generated: "article"
---

A model comes back 95 percent accurate and everyone in the room relaxes. This video, presented by Jainil and narrated by Liam for Humanitarians AI, shows a case where 95 percent is not a good result at all. It is the tell that the model has learned nothing. The explanation needs only arithmetic that a viewer can check.

## Why accuracy sounds right but is not

Accuracy is the share of predictions you got right, which sounds like exactly what you want to know. The problem is that when the thing you are looking for is rare, you can be right almost all the time by never finding it. The video builds a concrete case to show this.

## A condition that affects one in a thousand

Imagine a condition that affects one person in a thousand. You have a test that never misses a real case but raises a false alarm 5 percent of the time. Line up a thousand people: one actually has the condition. Run the test on the 999 healthy people and about 5 percent, roughly 50 of them, still come back positive. That gives 51 positive results, and only one of those people is actually sick. A positive result is therefore right about 2 percent of the time, not 95.

## The lazy model that wins the scoreboard

Now consider a model that simply answers no for every person. It is 99.9 percent accurate and it finds nobody. Accuracy rewards the majority answer, and when one class is rare the majority answer is always no, so the lazy model wins on the scoreboard. The video adds that this gets worse as the problem gets more important: the rarer the thing you are hunting, the more flattering accuracy looks and the less it tells you.

## What to read instead

The video recommends two other numbers, always computed on the rare class and never as an average.

- Precision asks, when the model says yes, how often is it right?
- Recall asks, of the real cases out there, how many did it catch?

The lazy model has a recall of zero, and no amount of accuracy hides that. The video notes this is not a toy problem. Fraud in transactions, a defect on a production line and a disease in a screening population all share the same shape, because the rare class is exactly the thing the model was built to find.

## Key takeaways

- Accuracy is the share of predictions that were right, and it favors the majority answer.
- With a rare target class, a model that never predicts it can still score extremely high.
- In the one-in-a-thousand example, a 5 percent false alarm rate yields about 50 false positives against one true case.
- That makes a positive result right only about 2 percent of the time.
- Answering no to everyone gives 99.9 percent accuracy and zero recall.
- The rarer the target, the more misleading accuracy becomes.
- Read precision and recall on the rare class instead of average accuracy.

## Try it yourself

Take any classifier you trust and find out what fraction of your data is the positive class. Then work out what accuracy a model would get by never predicting that class at all. If that number is close to the one on your dashboard, the video says your model has not learned what you think it learned.
