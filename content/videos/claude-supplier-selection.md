---
title: "Claude, Supplier Selection."
seoTitle: "How Claude's Supplier Selection Skill Scores Suppliers"
description: "See how a Claude supplier-selection skill picks a winner with a weighted score of price, lead time, and reliability, and how override notes can win."
summary: "This video opens the supplier-selection skill to show that Claude does not simply choose the cheapest supplier. A fixed 50-30-20 weighted score decides the pick, with set tie-breakers, though override notes in the file can change the result."
keywords: ["how claude picks the best supplier", "weighted scoring supplier selection", "supplier score price lead time reliability", "normalize scores zero to one scale", "claude skill folder skill.md explained", "tie breaker rules supplier scoring", "override notes in scoring formula", "does claude just pick cheapest"]
generated: "article"
---

A natural guess is that Claude simply picks whichever supplier is cheapest and calls it done. The video says it does not. By opening a skill called supplier-selection, it shows that Claude scores every supplier with a weighted formula and that the winner is the highest score, not the lowest price.

## What a skill is

A Claude skill is a folder Claude reads before it acts. This one has a single file inside it, SKILL.md, written in plain language with no hidden logic. That makes it possible to open the file and see exactly how the decision is made.

## The wrong guess: lowest price wins

The assumption the video tests is that Claude ranks suppliers by price and picks the cheapest. Opening the file shows that price is only part of the story. The score weighs three factors together: price, lead time, and reliability.

## The weights and the arithmetic

The weights are fixed at 50 percent for price, 30 percent for lead time, and 20 percent for reliability. The mechanism has three parts:

- Claude normalizes price and lead time onto the same zero-to-one scale.
- It multiplies each factor by its weight.
- It adds the results to get a score.

The highest score wins. If scores tie, the tie breaks on price first, then lead time, then name.

## Repeatable results

Because the formula is fixed, feeding it the same quotes twice scores them identically each time. The video calls that repeatability real, and it is one of the things a written skill provides that an improvised judgment does not.

## Override notes the formula never sees

The same SKILL.md also carries override notes that never show up in the catalog data. If one applies, it can beat the top score. So a pick is not simply the cheapest supplier, and it is not even purely the highest scorer: it is the highest score from a weighted formula, with the possibility that a note the formula never sees can still win out.

## What the video does not claim

The video states that price still matters, since it carries the largest single weight at 50 percent, just not the whole formula. It does not judge whether supplier-selection is a well-built skill, and it does not invent supplier names, prices, or a particular override. It reports only that the weights are fixed and that override notes exist outside the catalog data and can change the pick.

## Key takeaways

- Claude does not just pick the cheapest supplier; it scores each one.
- The skill is a folder containing one plain-language file, SKILL.md.
- The score weights price at 50 percent, lead time at 30 percent, and reliability at 20 percent.
- Price and lead time are normalized to a common zero-to-one scale before weighting.
- The highest score wins, and ties break on price, then lead time, then name.
- The same quotes always produce the same scores.
- Override notes in SKILL.md can beat the top score, and they do not appear in the catalog data.

## Try it yourself

Take a short scoring formula you already use, such as a rubric or any rule with weighted factors, and hand it to Claude. Before it computes anything, ask it to tell you each factor's weight and how it would combine them. Doing this before any numbers are run shows whether Claude understands the formula the way the file states it. Use your own formula rather than the video's supplier example.
