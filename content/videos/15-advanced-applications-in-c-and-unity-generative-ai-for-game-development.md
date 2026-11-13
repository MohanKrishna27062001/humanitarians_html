---
title: "15 · Advanced Applications in C# and Unity | Generative AI for Game Development"
seoTitle: "AI-Driven NPC Dialogue in Unity With C# and JSON"
description: "Walk through the Emberlight Tavern Unity scene, where JSON dialogue trees, a use-AI flag and a keyword emotion engine drive AI-powered NPCs."
summary: "This chapter companion builds the Emberlight Tavern, a modular Unity scene with three NPCs and a mood meter. It shows how JSON trees, four C# scripts and a single use-AI flag blend scripted and AI-generated dialogue."
keywords: ["ai npc dialogue in unity", "unity json dialogue tree tutorial", "c# dialogue manager for npcs", "local llama model in unity game", "mood meter emotion engine unity", "mix scripted and ai generated dialogue", "unity modular npc dialogue system", "keyword emotion detection in games"]
generated: "article"
---

Adding AI to a Unity project sounds like it means rewriting the dialogue system, but this video shows it does not. A companion to chapter 15 of Generative AI for Game Development by Shesh Narayan Gupta, it builds the Emberlight Tavern, a modular scene where modular scripts and JSON dialogue trees let AI plug in through a single flag.

## Terms and the tavern scene

The video defines six terms. A dialogue tree is a set of nodes holding lines and choices. The NPC controller binds a character to its JSON file. The dialogue manager loads and runs the trees. The emotion engine reads tone from keywords. The AI response handler prompts the model and returns text. The mood meter is the UI element showing inferred tone.

The Emberlight Tavern is a candlelit medieval room with three characters: a stoic, factual bartender, a sarcastic and evasive rogue, and an empathic, reactive minstrel. A mood meter reads the tone of each player choice.

## A modular project

The project uses four C# scripts, JSON dialogue files and prefabs, each with one job. The video compresses seven setup steps into one motion: scene, player, tavern, UI, NPC and dialogue system. The pipeline runs from the NPC controller to the dialogue manager, which reads a node. AI nodes go to the response handler, everything passes through the emotion engine, and the Unity UI displays the result.

## JSON as the source of truth

Each JSON node holds a speaker, a line, choices and a use AI flag. A new NPC is simply a new JSON file, with no code changes. The flag is the whole trick: scripted nodes play exactly as written and AI nodes generate their text. Mixed together, the chapter says, players cannot tell where the writing ends.

## How the scripts divide the work

- The dialogue manager loads trees from JSON, displays each node, spawns the choice buttons and hooks every line into the emotion engine.
- The emotion engine looks for keywords for angry, sad, happy, fearful and neutral tones and colors the mood meter.
- The AI response handler builds the prompt and calls a local Llama model running on the player's own machine, capped at about 35 tokens so it returns one short sentence. There is no cloud and no bill.
- The NPC controller binds a name to a dialogue file, such as the bartender and the bartender JSON.

## The rogue walk-through

Pressing E, the player meets the rogue, who greets them with a static line asking whether they are brave or foolish. Two choices follow. Choosing confrontation reaches a use-AI node, so the handler builds a prompt describing a sarcastic rogue with dry wit and misdirection, and the model answers in character. The player's tone shifts from hostile to curious, and a second AI reply follows. No two players hear the same tavern.

Prefabs make the pieces reusable: choice buttons, the mood meter and the interact prompt are built once and stamped everywhere. The meter shows red for anger, blue for sorrow and green for joy.

## An honest limit

Keyword lists are brittle. In the video's demonstration, words like hostile and kill read as neutral. The chapter's advice is to extend the lists or graduate to real sentiment analysis.

## Key takeaways

- Six boxes form the pipeline, and JSON trees are the source of truth.
- A use-AI flag lets scripted and generated dialogue coexist.
- Four C# scripts split the work: dialogue, emotion, AI and character binding.
- A local model keeps the system free of cloud costs.
- Prefabs keep the scene reusable.
- Keyword emotion detection is simple but limited.

## Try it yourself

The video ends with a prompt to paste into Claude. Describe one NPC and ask for a JSON dialogue node with two player choices, one scripted and one use-AI, along with the prompt the handler would send and six mood keywords covering at least two emotions. Then check that the prompt constrains the character's voice, and that your keyword list catches the words players really type.
