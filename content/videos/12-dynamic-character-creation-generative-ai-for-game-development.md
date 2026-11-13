---
title: "12 · Dynamic Character Creation | Generative AI for Game Development"
seoTitle: "Dynamic Character Creation With Generative AI in Games"
description: "Learn how traits, emotional state and AI-written backstories combine to make game characters that remember, adapt and respond to the player."
summary: "This chapter companion explains how to build game characters that adapt, remember and evolve with player choices. It separates stable traits from shifting emotions and shows how AI can add depth without losing authorial control."
keywords: ["dynamic character creation for games", "ai generated npc backstories", "game character personality traits and emotions", "how to make npcs remember player choices", "static vs dynamic game characters", "trust and anger variables in npc dialogue", "flask app character generator tutorial", "ethics of emotional ai in games"]
generated: "article"
---

Static dialogue trees tend to make game characters feel like cardboard cutouts, repeating the same lines on every playthrough. This video, a companion to chapter 12 of Generative AI for Game Development by Shesh Narayan Gupta, shows how to build characters that adapt, remember and sometimes surprise the player. Its central idea is that traits anchor a character, emotions shift, and AI helps scale the result.

## Static characters versus dynamic ones

The video defines three terms. A dynamic character adapts, remembers and evolves with the player's choices. An emotional state is a moment-to-moment variable, such as trust, anger or fear, that changes during interaction. A trait is the enduring core, such as loyal or skeptical, that keeps the character recognizable.

A static character picks from a fixed tree, so the lines become mechanical. A dynamic character remembers how the player treated them, reacts to tone and changes its opinion over time. The video puts it as the difference between a puzzle piece and a relationship.

## Why dynamic characters matter

Dynamic characters build emotional investment, because the player is tending a relationship that can deepen or fracture rather than choosing the right option. They also add replay value, since a different tone can reshape a personality and its fate. The video points to Red Dead Redemption 2, where relationships in camp accumulate through small repeated gestures, and The Witcher 3, where Yennefer and Triss respond to Geralt with warmth, sarcasm or guardedness depending on shared history.

An example character named Lena starts with high caution and low trust. If the player consistently protects her and avoids risky choices, her trust rises and her dialogue warms.

## Three building blocks

The video names three building blocks: personality traits tracked as variables that evolve, AI-written backstories that motivate and differentiate characters, and behavior and mood systems that layer emotional states over traits and carry memory across scenes. As an example, the same wandering healer can have a very different past in different playthroughs, such as abandoning a royal family to pursue peace or fleeing a crime syndicate, and still be a distinct person each time.

## How AI expands character depth

AI adds depth in four ways:

- Procedural backstories, with multiple life paths per character.
- Personality-driven dialogue, with lines matched to mood.
- Traits on demand, such as small quirks like a nervous character adjusting their gloves.
- Scale, meaning many variations without handwriting every line.

The video stresses that AI is a creative partner, not a replacement. Raw output can clash with the game's tone, so the writer should select, refine and sometimes rewrite. A disappointed, loyal character can say something fresh each time instead of reusing one line.

## A three-layer architecture

The design has three layers. Personality traits sit at the base, emotional states that evolve over time sit in the middle, and the behaviors, dialogue and choices the player sees sit on top. Dragon Age: Origins and Firewatch are cited as examples of stable traits with shifting emotions. In code, this becomes a base trait system plus emotional modifiers: a loyal character named Soren speaks one way when trust is above 70 and another when it falls below 40. Strong emotion also lives in subtext. Rather than "I am angry with you," a line such as "Is that what you really think of me?" lets players read between the lines.

## The hands-on Flask project

The project is a Flask character generator. A form takes a name and traits, an AI model writes a backstory, and two buttons simulate events. For the example Captain Io, support raises trust by 20 and lowers anger by 10, while betray lowers trust by 20 and raises anger by 30. Each click updates the emotional state and the dialogue follows.

## Ethics to hold

The video lists four: avoid emotional manipulation such as guilt-tripping players for engagement, be transparent, curate AI output for cultural sensitivity, and keep narrative coherence by grounding adaptation in strong core traits.

## Key takeaways

- A dynamic character adapts, remembers and evolves; a static one repeats a fixed tree.
- Traits are the stable core; emotional states are variables that shift with interaction.
- Three building blocks are evolving trait variables, AI-written backstories and mood systems.
- AI adds backstories, mood-matched dialogue, quirks and scale, but its output must be curated.
- Layer traits, then emotions, then visible behavior.
- Write emotion through subtext instead of naming it.
- Avoid manipulation, stay transparent and check generated output for stereotypes.

## Try it yourself

Pick one NPC in your game and give them one trait and one secret. Then ask what would make them evolve and what would change their mind about the player. Design that moment, and you have started building a dynamic character. The book and its accompanying code are listed in the video description if you want to follow the Flask project.
