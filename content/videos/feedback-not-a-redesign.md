---
title: "Feedback, Not a Redesign."
seoTitle: "How the Design Critique Skill Works in Claude"
description: "Learn what the design-critique skill does when you share a mockup: structured feedback on usability, hierarchy and consistency, without changing the design."
summary: "The video opens up the design-critique skill, a single plain-language SKILL.md file of about three kilobytes. It explains how the skill is triggered, what it checks, and why it gives feedback instead of redesigning your mockup."
keywords: ["how to get design feedback from claude", "design critique skill for claude", "what is a skill md file", "usability hierarchy consistency design review", "claude critique mockup or figma link", "does claude redesign my mockup", "ask claude to explain before acting", "how claude skills get triggered"]
generated: "article"
---

A common assumption is that asking Claude for a design critique means Claude will fix the mockup. The video says it does not. The design-critique skill gives structured feedback on usability, hierarchy and consistency, and it never touches the mockup itself. The video uses the skill to show how a skill works in general.

## A folder, not a program

A skill is a folder that Claude reads before it works. This one is design-critique, and it is a single SKILL.md file of about three kilobytes. The file is the whole instruction set, written in plain language with no hidden logic underneath it. Claude reads the file and then acts on what it says. In the video's words, the file is the program.

## How the skill is picked up

The skill's job, word for word, is to get structured design feedback on usability, hierarchy and consistency. It triggers when you ask Claude to review a design or critique a mockup, when you ask what it thinks of a screen, or when you share a Figma link or a screenshot. This can happen at any stage, from early exploration to final polish.

Once the skill is triggered, Claude reads the Steps section and runs the steps in order. The process is linear, with no branching unless a step says so.

## Feedback, not a redesign

The video stresses two limits. First, the skill hands back feedback and never changes the mockup. Second, it only checks three things: usability, hierarchy and consistency. Anything outside those is outside what it sees.

Because the instructions are fixed, running the same screen through twice returns the same feedback both times. The skill does not improvise a different review each run. It gives structured feedback on those three checks in the same way every time.

## Seeing the instructions before the result

To make the instructions visible, the video suggests a particular way of asking. You tell Claude you want structured feedback on the design's usability, hierarchy and consistency, and you ask it to read the design-critique skill and walk you through what it will do before it does it. That final clause matters. Having Claude explain itself first is how you actually see the instructions it is following, not just the result.

## Key takeaways

- A design critique from Claude is feedback, not a redesign.
- A skill is a folder of plain-language instructions that Claude reads before it works.
- The design-critique skill is one SKILL.md file of about three kilobytes.
- It triggers on requests to review a design, critique a mockup or look at a screen, including Figma links and screenshots.
- It checks only usability, hierarchy and consistency.
- It runs its steps in order and returns consistent feedback for the same screen.
- Asking Claude to explain what it will do first shows you its instructions.

## Try it yourself

Take a mockup you are actually working on and paste this into Claude: you want structured feedback on the design's usability, hierarchy and consistency, and Claude should read the design-critique skill and walk you through what it will do before it does it. Compare the walkthrough with the feedback you get back.
