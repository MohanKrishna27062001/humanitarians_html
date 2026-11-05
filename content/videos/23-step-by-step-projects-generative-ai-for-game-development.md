---
title: "23 · Step-by-Step Projects | Generative AI for Game Development"
seoTitle: "Build a Small AI Web Game Step by Step"
description: "A walkthrough of a four-file web game that combines AI world building, branching quests, NPC dialogue and sentiment analysis, including an honest failed test."
summary: "The video follows Echoes of Asteria, a small web game that demonstrates four AI aspects in six steps. It runs fully with local fallbacks, and it openly shows a sentiment test that fails."
keywords: ["build a small ai web game", "procedural world building with ai", "branching quest generation tutorial", "npc dialogue with sentiment analysis", "flask game with local fallback", "ai game project for beginners", "sentiment analysis word list limits", "generative ai game development project"]
generated: "article"
---

A chapter on generative AI for game development can easily try to cover too much, so this video picks one small game and walks through it from start to finish. The project, Echoes of Asteria, is a single web game that demonstrates four AI aspects: procedural world building, branching quests, NPC dialogue and sentiment analysis. It is a companion to the matching chapter of the book by Shesh Narayan Gupta, narrated by Liam for Humanitarians AI.

## The vocabulary behind the project

Before the demo, the video defines six terms. Procedural world building means rooms are generated rather than placed by hand. Branching quest options are choices that resolve differently depending on what the player picks. NPC dialogue means a character, here the caretaker, reacts to the player. Sentiment analysis reads the tone of the player's words. Fallback local lines are the text the game uses when no AI key is available. An API route is the connection between the front end and the Flask back end.

## Four files and four endpoints

The whole project is four files: app.py, index.html, app.js and styles.css. The video stresses that it is small on purpose, small enough to finish in an afternoon. The four aspects are exposed through four API endpoints, one each for the world, the quest, the sentiment reading and the dialogue. The front end, app.js, wires every button to its matching route.

## Six steps played live

The video plays the game through its steps. First, generate the world: three rooms appear, the dusty library, the moonlit garden and the echo archives. Second, enter the library, which becomes the scene. Third, generate the quest, which asks the player to recover a rumored page by either searching the lower stacks or asking the archivist. Choosing one resolves the story. In the fourth and fifth steps the caretaker comments on the quest, and the player can then type anything. The sentiment route reads the tone of that text and the caretaker answers in kind. The game runs end to end locally, with no API key.

## Fallbacks as the default

The routes are wired so that OpenAI is used if the player has a key and a local fallback is used if not. The video makes a point of this: the game is designed to run with nothing, so the fallback is not a failure mode, it is the default.

## An honest limit

The video also shows where the project falls short. When the player types "I'm feeling lost," the sentiment reading comes back neutral, because "lost" is not in the word lists. The lists are minimal, so the reading is minimal. The advice is to extend them before shipping. The chapter's argument is that theory is now playable: every concept from earlier chapters appears as a module in one working system that you can run, modify and extend.

## Key takeaways

- One small game with four AI aspects is a better teaching project than a sprawling one.
- The project is four files: app.py, index.html, app.js and styles.css.
- World, quest, sentiment and dialogue each get their own API route.
- Use OpenAI when a key exists, and a local fallback when it does not.
- A fallback can be the default path rather than a failure mode.
- Word-list sentiment analysis misses phrases like "I'm feeling lost" until the lists are extended.
- Check that a quest's two options lead to genuinely different outcomes, not the same ending with different wording.

## Try it yourself

The video ends with a prompt to paste into Claude: add one new room to the game by describing its mood, and have Claude write the room's name and description, a quest title, two options, resolution text and a caretaker fallback line. Then extend the sentiment word lists with five words players actually use and retest "I'm feeling lost." If it still reads neutral, keep extending. The book and its accompanying code from Apress are linked in the video description.
