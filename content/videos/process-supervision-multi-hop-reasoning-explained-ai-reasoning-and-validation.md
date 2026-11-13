---
title: "Process Supervision & Multi-Hop Reasoning Explained | AI Reasoning and Validation | Uday Sonawane"
seoTitle: "Process Supervision vs Multi-Hop Reasoning Explained"
description: "Learn what process supervision and multi-hop reasoning mean, why right answers can come from broken chains, and what to ask about step-level grading."
summary: "Uday Sonawane separates process supervision, a way of grading, from multi-hop reasoning, a kind of question. He shows with benchmark numbers why outcome grading can reward shortcuts and where the case for step-level labels is weaker than it sounds."
keywords: ["what is process supervision in ai", "process supervision vs outcome supervision", "what is multi-hop reasoning", "right answer wrong reasoning chain", "disconnected reasoning multi-hop benchmarks", "step level labels for ai training", "process supervision for agent trajectories", "how to evaluate ai reasoning steps"]
generated: "article"
---

Process supervision and multi-hop questions are two different things. One is how you grade, and the other is what you asked. In this video, Uday Sonawane explains that they belong in the same sentence for one measured reason: on benchmarks built to test multi-step reasoning, a model can score well without doing the reasoning.

## Two ideas that are not the same category

Process supervision is a way of grading. You score every intermediate step instead of only the final answer. Multi-hop is a kind of question, one that cannot be answered without chaining several facts together.

They get said together because of a failure mode: a model producing the right answer from a chain that was never actually followed. Outcome grading, by construction, cannot tell the difference. The video offers three questions for any claim that grading steps works better. What counts as a step? Who labeled the steps? And is the advantage fundamental or practical?

## Measuring shortcuts with disconnected reasoning

The video makes the problem concrete with a probe called disconnected reasoning. The supporting evidence is split so that no single piece can answer the question, and then you see how well a model still does. On HotpotQA, a model scores 68.8 answer F1 while bypassing the reasoning steps. On TwoWikis, it is 63.4. On MuSiQue, a dataset built specifically to resist shortcuts, it is 37.8. Lower is harder to cheat.

A second tell appears in the same paper. The best model scores 57.9 on two-hop questions, 47.9 on three-hop, and 28.1 on four-hop. Degrading as the chain gets longer is what actually doing the chain looks like. Another model stays at roughly 42 percent however many hops the question needs. A flat line across hop count, the video says, is not robustness. It is a model that is not hopping.

## The case for grading steps

Process supervision is the proposed answer: grade every intermediate step rather than the final answer alone, and stop at the first wrong step. The widely cited paper reports a process-supervised model solving 78 percent of problems from a representative subset of a math test set, and says process supervision significantly outperforms outcome supervision. What that took is the number worth remembering: 800,000 step-level labels written by humans.

## Why it is not a law

The video then keeps the picture honest. An earlier study on grade school math found outcome and process supervision reaching similar final performance, so the advantage is not universal across difficulty. A theoretical result goes further: under standard assumptions about data coverage, learning from outcomes is no harder statistically than learning from steps, up to polynomial factors. If that holds, the gain is practical rather than informational, which is still worth having but is a different claim.

## Does it transfer to agents?

In arithmetic, a step is a checkable object, and a human can look at one line and say whether it follows. In an agent trajectory, a step is whatever you decided to cut on: a tool call, a thought, a retrieval. Whether it was correct often cannot be known until the end. There are 800,000 human labels for math and no comparable public corpus for agent steps. When labels are inferred from how the episode turned out, outcome information has come back under a new name.

## Key takeaways

- Process supervision is a grading method; multi-hop is a type of question.
- Outcome grading cannot tell a real chain of reasoning from a lucky right answer.
- The disconnected reasoning probe showed 68.8 F1 on HotpotQA, 63.4 on TwoWikis, and 37.8 on MuSiQue without using the reasoning steps.
- Accuracy that falls with more hops looks like real chaining; a flat line suggests the model is not hopping.
- The cited math result relied on 800,000 human step-level labels.
- Earlier work and theory suggest the advantage may be practical rather than fundamental.
- Step definitions and labelers are unclear for agent trajectories.

## Try it yourself

Next time you read that an agent was trained or evaluated with process supervision, ask three things: what one step was, who labeled it correct, and whether that label could have been known before the episode ended. If the answer to the third is no, the video says you are reading outcome supervision with extra steps.
