---
title: "What Happens Inside a Single Transformer Layer?"
seoTitle: "What Happens Inside a Transformer Layer, Step by Step"
description: "Anjana walks one token through a transformer layer: self-attention, feed-forward network, residual connections and layer normalization."
summary: "Using the word revenue in a sentence, Anjana shows the four operations every transformer layer repeats: attention, feed-forward, residual connections and layer normalization. Stacking 12 or 96 of them gives models like BERT and GPT."
keywords: ["what happens inside a transformer layer", "self attention query key value explained", "feed forward network in transformers", "residual connections in transformer explained", "layer normalization why it matters", "how transformer layers stack", "bert vs gpt number of layers", "transformer building block for beginners"]
generated: "article"
---

Every transformer layer does the same four things in the same order, and stacking enough of them gives you every modern language model. In this video, Anjana follows a single token, the word "revenue," through one layer to show what each operation contributes. The sentence used is about expecting revenue growth to moderate.

## The four operations

The four operations in a layer are self-attention, a feed-forward network, residual connections and layer normalization. A transformer model can have dozens of layers, but each one repeats this same pattern. The video then takes the operations one at a time, following what the token sees on its way through.

## Self-attention: gathering context

In the first step, the token needs to work out its role in the sentence. It creates three vectors from itself: a query, a key and a value. The query asks what the token should pay attention to. Every other token also has a key, and the query is compared against every key to produce a score, where a high score means high relevance. In the example, "revenue" scores high against "growth" and "moderate" because they directly affect its meaning, and low against "we" and "to" because they add no context. The scores become weights, and the weighted sum of all the values produces a new, context-aware representation of "revenue." The word has not changed, but now it knows what surrounds it.

## The feed-forward network: processing what attention gathered

Attention told the token what to look at. The feed-forward network decides what to do with that information. It consists of two linear transformations with a non-linearity in between: the vector expands to a higher dimension, passes through an activation function, then compresses back down. This is where raw attention patterns become useful features. The video sums it up by saying attention gathers context and the feed-forward network processes it, and that this network never looks sideways at other tokens.

## Residual connections and layer normalization

Two more operations hold the layer together. With residual connections, the original input is saved before attention and before the feed-forward step, and after each operation it is added back to the result. The model can therefore never completely forget what the token started as, and a layer that learns nothing useful passes the token through without damage. Layer normalization runs after each addition and rescales the values so they stay in a stable range. Without it, the video says, values would drift higher and higher through 12 layers and the model would break.

## Stacking layers

Residual connections protect the signal and layer norm keeps the numbers in check. Together they are why you can stack 12, 24 or 96 layers and the model still trains. The video states that stacking 12 of these layers gives BERT and stacking 96 gives GPT, with the same four steps repeated each time.

## Key takeaways

- Each transformer layer performs attention, feed-forward, residual connection and layer norm in a fixed pattern.
- Attention is the only step where a token looks at the rest of the sentence, using a query against every other token's key.
- Scores from query-key comparison become weights over the value vectors.
- The feed-forward network works on each token alone, processing what attention gathered.
- Residual connections mean a layer that learns nothing does no harm.
- Layer normalization keeps values in a stable range as layers stack.
- The same building block repeated 12 times gives BERT, and 96 times gives GPT.

## Try it yourself

The video ends with a prompt to paste into Claude. Take the sentence about expecting revenue growth to moderate and ask what self-attention would compute for the token "moderate" instead of "revenue," including which words it should score highest against and why. Then ask what the 12th layer would know about "moderate" that the first did not, and how you could check it.
