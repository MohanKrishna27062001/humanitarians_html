---
title: "Why AI Models Can't Count Letters (And How Tokenization Explains It) | Sai Pranavi Jeedigunta"
seoTitle: "Why AI Models Can't Count Letters: Tokenization Explained"
description: "Sai Pranavi Jeedigunta explains why language models miscount letters and how asking them to spell a word out first fixes the problem."
summary: "A language model can write a convincing essay yet miscount the letter R in a word. The video explains that models read tokens rather than letters, and shows a simple spell-it-out test that demonstrates tokenization in action."
keywords: ["why llms can't count letters in words", "what is tokenization in language models", "why chatgpt miscounts letters in a word", "ai fails at counting letters explained", "spell word out letter by letter prompt", "llm tokens vs individual characters", "why ai struggles with rhymes", "simple test to see tokenization"]
generated: "article"
---

A language model can write a convincing essay on a topic and still get the number of times the letter R appears in a word wrong. The video, presented by Sai Pranavi Jeedigunta, asks why a system that is so reliable at one task is so unreliable at another, and answers with a single mechanism. The same mechanism also explains why such models stumble on tasks like finding rhymes.

## The paradox of fluent essays and wrong counts

Ask a language model for an essay on a topic and the result is fine. Ask it how many times a particular letter appears in a word and it will often be wrong. It is the same model in both cases, yet the reliability differs wildly. The video's claim is that this is not a contradiction. It follows from how the model sees text in the first place.

## Models read tokens, not letters

The model does not read text one letter at a time. It reads chunks called tokens. Sometimes a token is a whole word, and sometimes a word is broken into a few pieces. A long or unusual word can be split in a way that has nothing to do with where its letters actually fall. The model sees the chunks, and it never directly sees the letters inside them.

## Working at the wrong resolution

Take a word that is broken into three token chunks. When the model is asked to count a specific letter across the whole word, it has to reconstruct the letters from chunks it never saw as individual characters. The video is explicit that the model is not being lazy. It is working from the wrong unit entirely, and so the count comes out wrong. In the video's phrasing, the system is operating at the wrong resolution for the task it was given.

## The fix that proves the mechanism

The video then shows a fix that doubles as evidence. Ask the same model to first spell the word out one letter at a time, separated by dashes. Now every letter is its own token. Ask it to count again and it gets the answer right. Nothing about the word changed. Only the unit the model was working in did, which is exactly what the tokenization explanation predicts.

## A test you can run today

The video ends with a practical test. Pick a long or unusual word. Ask an AI model to count a letter in it directly. Then ask it to spell the word out first, one letter at a time, and count again. If the second answer is more reliable than the first, you have just watched tokenization in action.

## Key takeaways

- A model that writes fluent paragraphs and one that cannot count letters are the same system, not a contradiction.
- Models read tokens, which can be whole words or pieces of words, rather than individual letters.
- Long or unusual words can be split into tokens in ways unrelated to where the letters fall.
- Counting letters forces the model to reconstruct characters from chunks it never saw as characters.
- The same mechanism explains failures on tasks like finding rhymes.
- Spelling the word out one letter at a time, separated by dashes, makes each letter its own token.
- After spelling a word out, the model counts correctly, and only the working unit has changed.

## Try it yourself

Choose a long or unusual word and ask an AI model, in one message, how many times a given letter appears in it. Then, in a second message, ask it to spell the word out one letter at a time separated by dashes and count again. Compare the two answers. If the second is more reliable, the difference comes from the unit the model is working in, not from any change in the word.
