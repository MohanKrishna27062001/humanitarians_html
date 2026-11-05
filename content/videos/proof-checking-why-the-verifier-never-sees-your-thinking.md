---
title: "Proof Checking: Why the Verifier Never Sees Your Thinking"
seoTitle: "Why an AI Proof Verifier Should Not See the Reasoning"
description: "See how Claude's math-olympiad skill checks proofs with parallel solvers and blind verifiers, and why hiding the reasoning makes the check stronger."
summary: "Claude's math-olympiad skill settles the reading of a problem, runs several solvers in parallel, and strips every scratch note before verification. The video explains why a verifier that sees only the bare proof catches gaps a nodding-along reader would miss."
keywords: ["claude math olympiad skill explained", "how ai checks math proofs", "hide reasoning from ai verifier", "parallel solvers for proof writing", "adversarial proof verification method", "asymmetric voting proof check", "verifier blind to thinking trace", "checking the reading of a problem"]
generated: "article"
---

It sounds sensible to show a checker everything so it can decide better. This video, from the playlist on extending Claude with skills, plugins and connectors, explains that the opposite is true for Claude's math-olympiad skill. The checker only ever sees the finished proof, and the design of the whole pipeline follows from that choice.

## Read the problem twice

Before solving anything, Claude checks how the problem could be read. Competition problems often bury an easy reading next to the hard one. In past runs, most errors came from solving the wrong reading entirely, so the skill settles the intended reading first.

## Many solvers, working alone

Once the reading is settled, eight to twelve solvers tackle the problem in parallel. Each one iterates on its own: solve, self-check, revise, for up to five rounds. They use no calculator and no code, only reasoning.

## Deleting everything except the argument

Before any proof reaches a verifier, everything except the finished argument is deleted. That means every false start and every scratch note. The video explains the motive: a verifier that saw the reasoning tends to agree with it, right or wrong. A verifier that sees only the clean proof has nothing to agree with except the logic itself.

## Fresh verifiers and an asymmetric vote

Fresh verifiers then attack the proof against a checklist of known mistakes. The vote is deliberately lopsided. Four clean checks confirm a proof, but just two flagged holes are enough to send it back. Confirming takes more evidence than rejecting.

## Why the hiding matters

The video describes what goes wrong otherwise. A verifier that reads a full page of confident reasoning starts nodding along before it reaches the last line. That is what happens when the reasoning stays visible. When it sees only the bare proof, it has to find the gap on its own, which is exactly when the pattern checklist can catch something that a nodding-along verifier would have waved through.

## Preferring abstention to a guess

The video's carry-out summarizes the stance. Claude checks a competition proof only after hiding the reasoning that built it, using a verifier that cannot agree with logic it has never seen, and it would rather report no-confidence than guess. The video does not claim that Claude cannot make mistakes; the whole architecture exists because a single unchecked pass can be wrong.

## Key takeaways

- The verifier sees only the finished proof, never the solver's thinking.
- Claude first checks how the problem can be read, because most past errors came from solving the wrong reading.
- Eight to twelve solvers work in parallel, each refining for up to five rounds with no calculator or code.
- Every false start and scratch note is deleted before verification.
- Verifiers check the bare proof against a list of known mistakes.
- Four clean checks confirm a proof, while two flagged holes send it back.
- The skill prefers a no-confidence answer to a guess.

## Try it yourself

Paste a prompt into Claude asking for a tricky proof of a claim of your choosing, written in two passes. First it works out the reasoning however it likes. Then it hands you only the finished proof, with none of that reasoning attached, and checks it fresh as if it had never seen how it was built. Ask whether the two passes agree, and use your own claim rather than the video's example.
