---
title: "It Doesn't Know Your Brand. It Reads It."
seoTitle: "Does Claude Know Your Brand Voice? Discover-Brand Skill"
description: "How the discover-brand skill reads your own material and writes down your brand voice as a spec, instead of assuming Claude already knows it."
summary: "The video explains that Claude does not know your brand voice from training. A skill is a folder of plain-language instructions, and discover-brand reads material you give it, extracts word and tone patterns, and writes them down as a spec."
keywords: ["does claude know my brand voice", "what is a claude skill folder", "claude skill md file explained", "discover brand skill claude", "extract brand voice from my writing", "how claude skills run steps in order", "write a brand voice spec", "ask claude to analyze my writing"]
generated: "article"
---

A common assumption is that Claude already knows your brand's voice from its training. This video says it does not. Claude reads what you give it first. Using a skill called discover-brand as the worked example, the video explains what a skill is, how it runs, and what this one does with your material.

## The naive framing

The video starts from the question of whether Claude already knows your brand voice. Someone assumed it simply does. The answer given is no: it reads the material you provide, and the result depends on that material. The video also notes that one detail is inferred rather than confirmed. What discover-brand does is described from the skill's name, not from a view of its actual file, and the video flags that on screen.

## A skill is a folder

According to the video, a skill is a folder that Claude reads before it works. The key file is SKILL.md, which holds the full instruction set in plain language, with no hidden logic. Claude reads the file and then acts on it. The way the video puts it, the file is the program. That framing helps explain why skills behave predictably: everything they do is written down where a person can read it.

## Steps, in order

The instructions in a skill are laid out in a Steps section. Claude reads each step in order and runs it. The flow is linear, with no branching unless a step itself says otherwise. This is a simple execution model, and it is the reason the video can describe a skill's behavior without referring to any special reasoning on Claude's part.

## Read, don't guess

The job of discover-brand, as its name suggests, is to read material you already have, such as your site and your documents, and pull out the patterns. It looks for the words you favor, the words you avoid and the tone that keeps showing up. Then it writes that down as a spec.

The video closes this section with a point about reliability: the same material in produces the same spec out, every time. It also states the limit plainly. The result is bounded by exactly what the skill was given to read. If the sample is thin, the spec will be thin, and if the sample is unrepresentative, so is the spec.

## The discipline behind it

The lesson the video draws is about method. Discover-brand does not guess at a voice and does not rely on prior knowledge of your organization. It reads what is actually there and then writes it down. The same discipline applies when you do this kind of analysis yourself with Claude.

## Key takeaways

- Claude does not know your brand's voice from training; it works from what you give it.
- A skill is a folder Claude reads before it works, and SKILL.md holds the instructions in plain language.
- Claude reads the steps in order and runs them, with no branching unless a step says so.
- Discover-brand reads existing material and extracts favored words, avoided words and recurring tone.
- It writes those patterns down as a spec.
- The same input gives the same spec, and the output is limited by what it was given to read.
- The description of the skill's job is inferred from its name rather than confirmed from its file.

## Try it yourself

Paste a prompt like this into Claude, using your own writing: here are three things I have actually written, an old email, a project note and something from my own archive. Ask it to tell you three words you use again and again, one word you clearly avoid and one sentence that describes your tone, and to claim nothing it cannot point to in the text. Run it on your real writing rather than the video's example.
