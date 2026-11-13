---
title: "Claude, Cowork Plugin Customizer."
seoTitle: "Claude Skill vs Installed Plugin Explained"
description: "Learn why the cowork-plugin-customizer is a folder of instructions Claude reads, not installed software, and how to check the steps it will follow."
summary: "This video uses cowork-plugin-customizer to show that a Claude skill is a folder with a SKILL.md file, not a program that gets installed. Claude follows the written steps in order, and anything beyond them is Claude's own judgment."
keywords: ["what is a claude skill", "is a claude skill installed software", "cowork plugin customizer skill", "claude skill md file steps", "customize claude code plugin for organization", "how claude follows skill steps", "claude skill versus own judgment", "predict what a claude skill will do"]
generated: "article"
---

Someone might assume that the Cowork Plugin Customizer is a plugin that Claude installs the way you install an app. The video says it is not. It is a skill folder that Claude reads, and the difference between reading and installing explains how the whole thing behaves.

## A folder, not a program

A Claude skill is a folder rather than an installed program. Inside it sits a file named SKILL.md containing plain-language instructions. There is no hidden binary. Claude opens that file before it does anything else.

Cowork Plugin Customizer is one such folder. Its whole job, written in a single line inside the file, is to customize a Claude Code plugin for one organization's tools. The video points out that reading this file is only the first step, and that what follows matters just as much.

## Top to bottom, in order

After reading, Claude works through whatever Steps section the file lays out, top to bottom and in order. There is no branching unless a step explicitly says so. For Cowork Plugin Customizer, that means the same request runs the same sequence every time, and nothing about what happens in between is left to guesswork.

## On the map, then off it

The payoff of this design is predictability. Read the file and you can predict the run before it starts, because the steps are sitting right there in plain language.

The guarantee has a boundary, though. It covers only what is written. Ask for something the Steps section never anticipated, and Claude is not wrong to attempt it. It just is no longer following Cowork Plugin Customizer. It is using its own judgment, off the map the file drew. The video treats this as a description of what is happening, not as a failure.

## Putting it together

The video's closing summary is that a skill is not installed software. It is a file Claude reads before it acts. The same request gets the same steps every time, but only for what that file actually wrote down.

## Key takeaways

- A Claude skill is a folder, not an installed program.
- The folder holds a SKILL.md file of plain-language instructions with no hidden binary.
- Claude opens the file before doing anything else.
- Cowork Plugin Customizer's stated job is to customize a Claude Code plugin for one organization's tools.
- Claude follows the Steps section top to bottom, with no branching unless a step says so.
- Because the steps are written down, you can predict the run before it starts.
- Requests beyond the written steps fall to Claude's own judgment, not the skill.

## Try it yourself

Pick any skill you already have, either one of Claude's built-ins or one from a plugin. Ask Claude to open that skill's SKILL.md and walk you through the exact steps it will take, in order, before it runs anything. Then run the skill and check whether it followed the order it just showed you. The skill's code is in the humanitarians-youtube repository.
