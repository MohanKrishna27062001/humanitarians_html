---
title: "1 Model, 3 Benchmark Scores: Evaluating DeepSWE & Coding RL | Uday Sonawane"
seoTitle: "Why One Coding Model Has Three Benchmark Scores"
description: "Uday Sonawane explains why DeepSWE Preview reports 42.2, 59 and 71 on SWE-bench Verified, and three questions to ask about any coding agent score."
summary: "A single 32B open coding model reports three different scores on the same benchmark. The video shows how best-of-N sampling, scaffolds and oracle selection explain the gap, and gives three questions to ask before trusting any coding-agent number."
keywords: ["deepswe preview benchmark scores explained", "pass@1 vs best of n", "swe-bench verified scores explained", "how to evaluate coding agent claims", "verifier vs oracle in benchmarks", "reinforcement learning for coding models", "agent scaffold effect on benchmarks", "why benchmark scores differ for same model"]
generated: "article"
---

Uday Sonawane starts from a puzzle. DeepSWE Preview, a 32 billion parameter open model trained with reinforcement learning, scores 42.2 on SWE-bench Verified. It also scores 59, and it also scores 71. These come from the same model, the same 500 problems and the same week. The video argues that they are three different measurements, and that only one of them is something you can ship.

## Two levers for small coding models

The video frames the literature as offering two levers for making a small model good at coding: reinforcement learning, and the agent you wrap around the model. Published numbers tend to mix the two together, which is why a single model can appear with several scores.

## Three questions for any coding agent score

The video offers three questions to ask of any claim:

- Was it one run or best of N? Best of N is a different product.
- Which scaffold was used, and how much context? The harness is not neutral.
- Who picked the winner: a verifier you can actually run, or an oracle that already knows the answer?

The third question, the video says, is where most of the inflation lies.

## What DeepSWE did

The base model is Qwen3-32B. Training used reinforcement learning only, with no distillation from a stronger model, which matters because most open coding models are fine-tuned on traces from something bigger. The algorithm is a modified GRPO, trained on 4,500 real software tasks, with every repository that appears in the benchmark filtered out of the training set first. The run took 64 H100 GPUs for 6 days.

## Decoding the three numbers

- **42.2** is pass at one, averaged over 16 runs. That is one attempt, which is what a user actually gets.
- **57.9** is best of eight.
- **59** is best of 16, with a verifier choosing between the attempts.
- **71** is also best of 16, but chosen by an oracle that already knows which patch passes. The video calls this an upper bound on the method, not a result you can deploy.

## The scaffold changes the number

On the second question, the video points to Devstral Small in the same table, which scores 46.6 on one attempt. That is four points above DeepSWE's 42.2 from a model 8 billion parameters smaller. The difference is not obviously the model. One runs on OpenHands, while the other runs on R2E-Gym with a 64,000 token window and 100 steps. Change the harness and the number moves.

The comparison table has 10 rows, four different scaffolds and three different test-time settings, with some rows at one attempt and some at best of eight. Ranking them top to bottom produces a leaderboard that does not exist. The video notes the authors do not hide this, since the scaffold is a column in their own table, but almost nobody quoting the 59 reads that column.

## Reinforcement learning versus expert trajectories

As a second road for comparison, the video cites SWE-Smith, which generated 50,000 training tasks across 128 repositories and fine-tuned on expert trajectories instead of using reinforcement learning. Its model scores 40.2 on one attempt, so the two training methods sit about two points apart, while turning on best of 16 moved the same DeepSWE model by nearly 17. The video concludes that the training method is not where the big number came from.

## Key takeaways

- A 32B open model trained with reinforcement learning and no distillation does real work on real repositories.
- Three of the four published DeepSWE numbers are best-of-N results.
- A verifier-chosen score (59) and an oracle-chosen score (71) are not the same thing; only the oracle score is a non-deployable upper bound.
- The scaffold, context window and step limit can move a score by several points.
- Best of 16 means 16 times the inference cost.
- Training method differences were small compared with the effect of best-of-N sampling.

## Try it yourself

The next time a coding model posts a number, find three things before you believe it: the scaffold, the N, and who chose the winner. If the model card does not say, the video suggests, that is your answer.
