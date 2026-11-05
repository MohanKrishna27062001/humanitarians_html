---
title: "24 · Templates and Frameworks | Generative AI for Game Development"
seoTitle: "Reusable Templates for AI Narrative Games"
description: "How a JSON narrative schema, a Python story engine, Twine and a Unity starter kit let you reuse one story system across genres and platforms."
summary: "The video argues that you should stop building narrative systems from zero. It covers a JSON scene schema, a Python engine, Twine passages and a six-step Unity kit that all share the same data."
keywords: ["json narrative schema for games", "python story engine tutorial", "twine branching story template", "unity narrative starter kit", "reusable templates for ai storytelling", "separate story data from code", "emotion aware dialogue in games", "fallback text when ai unavailable"]
generated: "article"
---

Every new narrative game tempts a developer to write the story system from scratch. This video, chapter 24 of the companion series to Generative AI for Game Development by Shesh Narayan Gupta, argues for the opposite: build reusable templates and frameworks that adapt to any genre, mood or storytelling style. Its motto is build once, reuse forever, and it covers three areas: Python and JSON templates, Twine structures and Unity starter kits.

## The JSON narrative schema

The first template treats scenes as nodes. Each node holds its text, its choices, emotion modifiers, AI prompt context and dynamic variables. Because content is kept separate from code, you can swap scenes, localize dialogue and scale to hundreds of nodes without touching the engine. The video summarizes the idea as data tells the story, code runs the machine: change the JSON and the game changes, with no recompile.

## The Python story engine

The second template is a modular, readable and extensible Python engine. Its loop is simple: load the JSON, render the current scene, update the emotional state, present the choices and follow the chosen branch. The video's case study is a sci-fi mystery in which the player is a deep space engineer receiving fragmented messages from a vanished crew. The player's interpretations shape both plot outcomes and emotional tone. The design also includes fallback text, so the game degrades gracefully when the AI is unavailable.

## Twine as the visual front end

Twine supplies a visual layer for the same data. Each passage maps to a story node. Using Harlowe or SugarCube with JavaScript, the story loads the same JSON at runtime, tracks player state and emotions across passages, and builds branching paths that mirror the Python engine. The JSON does not change, and Twine gives writers a visual graph where they can link passages intuitively. Macros handle transitions, inventory and branching. The video frames this as a division of labor: writers own the flow, developers own the logic.

## The Unity starter kit

The Unity kit is described in six steps:

1. Load the narrative JSON into game objects.
2. Build the dialogue UI panels, with typewriter text and choice buttons.
3. Implement branching logic so a choice leads to a scene and an emotion update.
4. Layer AI-generated responses around the scaffold.
5. Add audio and visual feedback, such as voice, portraits and transitions.
6. Build and test, playtesting every branch and validating the emotional arcs.

The same approach works for 2D or 3D projects, since it is one JSON with many front ends.

## Why templates pay off

The video presents templates and frameworks as the hidden scaffolding behind generative storytelling. They let you prototype fast, test cheaply and scale with confidence. The closing point is that a template spares you setup code so you can spend your energy on emotional nuance.

## Key takeaways

- Do not start every narrative system from zero.
- Model scenes as JSON nodes with text, choices, emotion modifiers and prompt context.
- Keeping content out of code lets you swap scenes and localize dialogue without touching the engine.
- A Python engine can load JSON, render scenes, update emotion and branch on choices.
- Include fallback text for when the AI is unavailable.
- Twine and Unity can consume the same JSON, so the data stays constant while the presentation changes.
- Writers can own flow in Twine while developers own logic.

## Try it yourself

Take one scene from your own game and write it as a JSON node with its text, two choices and one emotion modifier. The video calls that your first reusable block, and suggests building a second one the next day.
