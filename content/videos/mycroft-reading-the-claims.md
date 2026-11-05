---
title: "Mycroft: Reading the Claims"
seoTitle: "Classify Patent Claim Scope with Claude (Claims Agent)"
description: "A fellow shows why word count and keywords fail to predict patent claim scope, then builds a Claude-based classifier that reports caveats and handles refusals."
summary: "Humanitarians AI Fellow Aishwarya Patil explains the harder half of the Claims Agent: judging what an independent patent claim actually protects. The video covers evidence against a simple rule, a real model refusal handled honestly, and an end-to-end test."
keywords: ["classify patent claim scope with ai", "independent versus dependent patent claims", "why word count fails to predict claim scope", "claude classifier confidence caveat", "handle model refusal in an agent", "patent claims agent with claude", "mark ai reading as unclear", "structural pass before ai classification"]
generated: "article"
---

This video covers the harder half of the Mycroft Claims Agent. Splitting a patent's claims apart is the easy part; the difficult step is reading what an independent claim actually protects. Humanitarians AI Fellow Aishwarya Patil walks through the evidence that a shortcut will not work, the Claude-based classifier she built instead, a real refusal the model produced and how the finished agent performed on a real patent.

## Why a simple rule does not predict scope

The cheaper approach tried first used word count, limitation markers and whether a claim was a method or a system. Data from nine independent claims, with word counts ranging from 47 to 303, showed no clean line separating broad from narrow. Neither signal predicted scope on its own: a short claim can be narrow because it is specific, and a long claim can still be broad. That was the real reason to use judgment instead of a rule.

## The first classification

Running one real independent claim through Claude produced a broad reading. Its reasoning pointed to the actual claim language, not the word count. It also came with a caveat that named something specific and checkable: whether the dependent claims narrow the broad term used in the independent claim. Requiring a caveat with every reading gives a human a precise place to check the model's judgment.

## A real refusal

A second claim, covering plant cell cultures and a pharmaceutical compound family, produced a refusal. The model flagged the subject matter and declined to classify it. The video treats this as a structural limit of using this kind of model call on varied patent content, not as a bug.

## Handling the refusal honestly

The fix was not to route around the refusal. The agent catches it and says so: it marks the reading as unclear, names the real reason and points back to the raw claim text. It does not pretend that a scope reading exists when it does not.

## Building the agent

The pieces needed one home. For each claim there are structural facts, and for independent claims there is also a scope reading. A patent claims reading holds the whole set with real counts. The ClaimsAgent class has one job: split the claims, flag genuine multiple dependencies and call the classifier only on independent claims. It can skip classification entirely when only the free structural reading is needed.

## The end-to-end test

The agent was run against a real cached patent, so no new large query cost was incurred, with one real classification call. The structural pass came first at zero API cost and found 17 claims, one independent and 16 dependent, matching the verified count exactly. The full pass with classification returned the same numbers plus one honest scope reading with its own confidence caveat. There was no crash and nothing invented.

## Key takeaways

- Word count, limitation markers and method-versus-system did not predict claim scope across nine independent claims.
- A short claim can be narrow and a long one can be broad, so scope needs judgment.
- Each classification carries a confidence caveat that points to something specific a person can check.
- When the model refuses, the agent marks the reading unclear, states the reason and points to the raw text.
- The agent splits claims, flags multiple dependencies and classifies only independent claims, with an option to skip classification.
- The structural pass costs nothing in API calls and matched the verified counts exactly.

## Try it yourself

Take any independent patent claim, run it through the same classifier and read the confidence caveat before trusting the label. The caveat tells you exactly where the reading's judgment could be wrong, so check that point against the dependent claims first.
