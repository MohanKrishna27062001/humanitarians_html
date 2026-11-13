---
title: "Exploring Open-Source AI Development & GitHub Collaboration | Mycroft AI"
seoTitle: "Mycroft AI Episode 12: How Long Does a Signal Last?"
description: "Anjana presents Phase 17 of the Mycroft earnings-call signal system: signal half-lives, false positive filtering, speech acts and automated feature pruning."
summary: "In this Mycroft episode, Anjana shows how a system that reads earnings calls was made skeptical of its own signals. Phase 17 measures how long signals last, clusters confident errors, reads discourse structure and prunes features."
keywords: ["earnings call guidance signal extraction", "signal decay half life explained", "false positive analysis for model predictions", "speech act classification of management statements", "discourse structure analysis earnings calls", "automated feature selection three methods", "embedding drift monitoring sentence bert", "how long does a signal last"]
generated: "article"
---

This video is an episode of the Mycroft project presented by Anjana, part of the Humanitarians AI Brutalist Video Series. Eleven earlier episodes built a system that reads what executives say on earnings calls. Episode 12 asks a question the system had never asked about itself: how long is any of it good for?

## Where the system stood after eleven episodes

The video recaps the system, which the transcript calls ASIS. It extracts financial guidance signals from earnings calls using four readers and a five-dimensional triangulator. A prediction layer forecasts guidance direction, and a revision predictor uses six models to flag likely changes. Episode 11 added detection of evasive answers in question-and-answer sections, competitive positioning with a three-classifier ensemble, a guidance revision predictor, fine-tuned sentence embeddings and a FinBERT ensemble.

This week's point is that not every signal ages the same way. Some decay in days, and some last for months.

## Measuring how long a signal lasts

Phase 17 measures signal shelf life. The signal decay module measures correlation with excess returns at horizons from one day to 60 days. Each signal type gets a half-life, the point where its predictive value drops below significance. The video gives illustrative figures: the hedging index might hold for 20 days, while dodge scores may fade in five. The system uses these half-lives to weight recent data, so fast-decaying signals count for less at longer horizons.

## Catching confident mistakes

High confidence does not guarantee accuracy. The false positive analysis module examines every prediction where confidence exceeded 0.7 but the direction was wrong. It clusters the errors by root cause, such as ambiguous language, misread sarcasm, section misattribution, context-dependent phrases or unusual market conditions. Signals matching a known pattern get a reduced confidence modifier.

Multi-quarter signal chaining tracks trends across consecutive calls. Three quarters of rising hedging with declining confidence is treated as a sustained deterioration signal, not three independent readings.

## Reading how management structures the story

A fine-tuned DeBERTa classifier sorts each management statement into speech act types: promises, commitments, hedged intentions, predictions, deflections and assertions. The mix shows whether management is making concrete commitments or filling time with vague intentions.

Discourse structure analysis maps how the narrative is organized. Front-loading puts bad news first, varying sandwiches it between positives, and deflection pivots away without addressing the negative. Each pattern says something about how management wants the story heard.

## Pruning the feature set

Not every feature earns its place. Automated feature selection runs recursive feature elimination, permutation importance and lasso shrinkage, and flags features that rank in the bottom 10 percent across all three for removal. Feature interaction discovery finds combinations that predict better together, for example a high dodge score plus rising hedging plus defensive language. Embedding drift monitoring tracks whether the sentence embedding space is shifting and flags when fine-tuning is needed.

## Key takeaways

- Different signals lose predictive power at different rates.
- Each signal type gets a half-life measured against excess returns from one to 60 days.
- Confident predictions that were wrong are clustered by root cause and marked down.
- Multi-quarter chains turn repeated weak readings into one deterioration signal.
- Statements are classified by speech act and by where bad news sits in the narrative.
- Features are pruned only when three different methods agree.
- Embedding drift is monitored to show when fine-tuning is needed.

## Try it yourself

Take a score you already produce and ask two things of it: how long does it stay true, and when has it been confident and wrong? The video suggests pasting that into Claude and pressing hardest on the second part, because a list of your own confident failures, sorted by cause, is the most useful thing to build. The project is available on GitHub under the name Mycroft.
