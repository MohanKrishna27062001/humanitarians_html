---
title: "Embeddings vs. Keyword Matching: Knowing When Closeness Trumps Exactness"
seoTitle: "Embeddings vs Keyword Matching: When to Switch Rules"
description: "Learn three questions that tell you when a keyword rule should become embedding similarity matching, and when exact matching is still the right choice."
summary: "Sai Pranavi Jeedigunta explains why fixed keyword rules quietly stop working when real language varies, using the acronym RIA as an example. She gives a three-question check for deciding when embeddings help and when exactness must win."
keywords: ["embeddings vs keyword matching explained", "why keyword matching rules break over time", "when to use vector embeddings", "semantic similarity vs exact match", "keyword list misses synonyms and acronyms", "three questions to evaluate keyword rules", "embeddings and exact regulation numbers", "move keyword rules to similarity matching"]
generated: "article"
---

Fixed keyword rules often fail without anyone noticing. In this short video, Sai Pranavi Jeedigunta explains why keyword matching rules quietly break over time and what embeddings do differently. She also shows that embeddings are not the answer everywhere, and gives a three-question check for deciding which approach fits a given rule. The explanation is demonstrated with Claude Code.

## How a keyword rule quietly stops working

The video starts with a concrete rule: flag any document that mentions "investment advisor." The rule works well until someone writes "RIA," the industry's own acronym for the same thing. The rule does not know what that means, so it misses the document.

The important detail is that nothing crashed. The rule simply stopped working for that one document, with no error to alert anyone. That silent failure is what makes keyword lists risky when real-world wording varies.

## Three questions before you choose

Before looking at examples, the video gives a check made of three questions:

- Does the wording actually vary in the real world, or is there only one way to say this?
- Does context change what a phrase means, so that a fixed keyword could be right in one place and wrong in another?
- Is exactness itself the point, such as matching a specific ID or code, where a close but different match would be wrong?

## What embeddings do differently

Applying the questions to the advisor rule, the wording varies constantly. Different phrasings of the advisor role, including "RIA," all mean the same thing. An embedding does not check for an exact phrase. It measures how close two pieces of text are in meaning.

In that meaning space, "RIA" and "investment advisor" land close together even though they share no letters. A rule built on that closeness catches both, and it also catches the next synonym nobody thought to add.

## The case where closeness is the wrong tool

The video is careful to show where this approach would fail if applied everywhere. A rule that matches a specific regulation number, for example section 4.12, should not use closeness of meaning. Section 4.12 and section 4.13 might sit close together in meaning space because they are provisions about similar topics. But they are different rules with different requirements.

Here, exactness is the whole point. An embedding would blur exactly the distinction you need to keep.

## When to move a rule

The video's guidance is direct. If the first two questions are yes and the third is no, the rule is worth moving to similarity matching before the next synonym slips past it. A keyword list only knows the words you thought of. Embeddings measure the meaning you did not have to spell out, but only where closeness is what you actually want.

## Key takeaways

- Keyword rules can fail silently when real-world wording varies.
- Acronyms like RIA show how a rule for "investment advisor" can miss the same concept.
- Ask whether wording varies, whether context changes meaning, and whether exactness is the point.
- Embeddings measure how close two texts are in meaning, not whether they match a phrase.
- A similarity-based rule can catch the next synonym nobody listed.
- Exact codes such as regulation section numbers should still use exact matching.
- Embeddings could blur distinctions, like 4.12 versus 4.13, that must stay sharp.

## Try it yourself

Find one keyword matching rule you rely on today and ask the three questions about it. Does the wording actually vary? Does context change the meaning? Is exactness the whole point? If the first two answers are yes and the third is no, that rule is a candidate for similarity matching.
