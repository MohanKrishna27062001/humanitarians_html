---
title: "Claude, Competitive Analysis."
seoTitle: "Does Claude Judge Your Market? The Competitive Analysis Skill"
description: "A competitive analysis deck from Claude comes from a skill that runs fixed written steps, not from Claude judging your market on its own."
summary: "The video asks whether Claude judges a market or just processes steps, using the competitive-analysis skill as the example. The skill is a SKILL.md file plus a references folder, and it only answers within what that file specifies."
keywords: ["does claude judge my market", "claude competitive analysis skill explained", "what is a claude skill folder", "claude skill read execute return pipeline", "build competitive landscape deck with claude", "market map peer comparison positioning assessment", "claude skill scope and limits", "test whether claude follows a skill"]
generated: "article"
---

When Claude produces a finished competitive analysis deck, it is tempting to believe Claude judged the market itself. The video says it did not. The competitive-analysis skill processes a fixed set of steps written in a file. The question it poses is whether Claude judges or processes, and the answer shapes how much you should trust, and how you should test, what comes out.

## A skill is a folder Claude reads

A skill is a folder that Claude reads before it works. This one, competitive analysis, contains a SKILL.md file and a references folder, two files in total. The SKILL.md holds the full instruction set in plain language, with no hidden logic. Claude reads it, then acts. In the video's words, the file is the program. Nothing about the behavior is hidden somewhere that you cannot read.

## Read, execute, return

The pipeline sits in the steps section. Claude reads SKILL.md, executes each step in order, and returns the result. The flow is linear, with no branching unless a step says so. The video notes in its own scope statement that this read, execute, return pattern is a property of this specific skill's written steps, not a claim about every possible skill.

## It answers only within the file

The skill answers only within what SKILL.md specifies. Ask for something inside that scope, such as a market map, a peer comparison or a positioning assessment, and it runs the same steps every time. Ask for something outside the written scope and there is nothing there to answer with. A skill runs the same steps on every request, and it only knows what is written in that file, nothing more. The video does not claim to say how Claude internally weighs one competitor's data against another's, because the skill documents the procedure and not the model's reasoning.

## Key takeaways

- A finished competitive analysis deck does not mean Claude judged the market itself.
- The competitive-analysis skill is a SKILL.md file and a references folder, two files total.
- SKILL.md contains the full instruction set in plain language, with no hidden logic.
- Claude reads the file, executes each step in order and returns the result.
- The pipeline is linear unless a step says otherwise.
- Requests inside the written scope, like a market map, a peer comparison or a positioning assessment, run the same steps every time.
- Requests outside that scope have nothing in the file to answer with.

## Try it yourself

Paste a prompt into Claude asking it to build a competitive landscape deck comparing three regional business-banking platforms you are evaluating. Tell it to read the competitive-analysis skill and walk you through what it will do before it does it. Then check whether it named the steps it read from the file or simply started improvising. That is the real test of whether it is running the skill. Try it on your own market or industry rather than the video's example.
