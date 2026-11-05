---
title: "How AI Understands Intent and Routes User Requests | Mycroft AI"
seoTitle: "Scoring Evasive Answers in Earnings Call Transcripts"
description: "See how episode 11 of an earnings-call analysis system detects dodged questions, competitive stance and guidance revisions using ensembles of models."
summary: "Anjana presents episode 11 of ASIS, a system that reads earnings calls. It scores how directly executives answer analyst questions, tracks competitive language, and predicts guidance revisions with six competing models."
keywords: ["detect evasive answers in earnings calls", "dodge score for analyst questions", "cross encoder answer relevance scoring", "competitive positioning language classifier", "predict company guidance revision", "fine tuned sentence bert financial text", "finbert ensemble sentiment scoring", "compare answers to questions in tickets"]
generated: "article"
---

This video covers episode 11 of a series about ASIS, a system that reads earnings call transcripts and scores what executives said. Where earlier episodes scored what was said, this one scores what was avoided. The presenter, Anjana, argues that the most interesting signal on a call can be the question that never got a straight answer. The video's title and listing describe intent prediction and request routing, but the narration itself is about earnings-call analysis, so this article follows the narration.

## Where the series stands

The video opens with a reminder of the story so far. ASIS extracts financial guidance signals from earnings call transcripts using four readers: keyword, FinBERT, named-entity recognition and an LLM, triangulated with dynamic weights. A prediction layer forecasts next-quarter direction using pre-registered, graded predictions.

Episode 10 added a business analytics layer. It included sector sentiment aggregation, a mood index, cross-sector heat maps, management confidence scoring, CEO and CFO tone divergence, signal-to-price correlation ranking, surprise score analytics and reaction window curves. Episode 11 builds on that base.

## Detecting when executives dodge questions

Earnings calls include a question-and-answer section where analysts press management. The system now parses every question-answer pair and classifies each question as forward-looking, backward-looking, clarification or confrontational.

A cross-encoder reranker then scores how directly each answer addresses its question. The video stresses that this measures actual relevance, not just semantic similarity. The resulting dodge score is weighted by question importance, so evading a confrontational question about margin scores higher than sidestepping a clarification. Dodge scores are tracked per speaker and per call across quarters.

## Tracking competitive positioning

How a company talks about competition reveals strategy, and three classifiers work together to read it:

- A lexicon-based scorer matches phrases such as "gaining share" or "defending margins."
- A zero-shot classifier using BART handles novel phrasing that the lexicon misses.
- A fine-tuned stance detection model captures subtler positioning.

The ensemble places each call on an offensive-to-defensive spectrum, and a tracking module monitors shifts across quarters. When a company flips from offensive to defensive language, the system flags it.

## Predicting guidance revisions

The next question is whether a company will revise its guidance next quarter. A feature vector combines hedging index, management confidence, change in guidance specificity, CEO and CFO divergence, dodge score, shift in market share language, change in forward-looking density, sentiment change and sector mood positioning.

Six models compete on this task: logistic regression for interpretability, XGBoost and LightGBM for gradient boosting, random forest for variance reduction, a small neural network for non-linear interactions, and CatBoost for native categorical handling. They are evaluated with time-aware cross-validation, bootstrap confidence intervals and paired permutation tests.

## Strengthening the foundation

The episode also upgrades the embeddings and sentiment layers underneath all of the analytics. First, sentence-BERT was fine-tuned on financial earnings call question-and-answer pairs, replacing generic embeddings with domain-specific ones. The video says this improves retrieval quality across dodge scoring, similarity matching and feature engineering. Second, a FinBERT ensemble runs multiple checkpoints and averages their predictions, which reduces the variance of relying on a single checkpoint and gives more stable sentiment scores to every downstream module.

## Key takeaways

- Episode 11 shifts ASIS from scoring what executives said to scoring what they avoided saying.
- Questions are classified as forward-looking, backward-looking, clarification or confrontational, and dodge scores are weighted by how important the question was.
- A cross-encoder scores how directly an answer addresses a question, which is different from how similar the two are.
- Competitive language is placed on an offensive-to-defensive spectrum using a lexicon, a zero-shot BART classifier and a fine-tuned stance model, with flips across quarters flagged.
- Nine behavioral features feed six competing models that try to predict next quarter's guidance revision.
- Evaluation uses time-aware cross-validation, bootstrap confidence intervals and paired permutation tests.
- Retraining the embeddings on financial Q&A data and ensembling FinBERT checkpoints strengthens everything built on top.

## Try it yourself

The video's suggestion is to score what people did not say. Take somewhere you already have questions and answers side by side, such as support tickets, user interviews or performance reviews, and ask whether the answers actually address the questions or merely sit near them. The presenter advises pasting the prompt into Claude and reading the third part of its answer hardest, since that part tells you whether you have been measuring evasion or just politeness.
