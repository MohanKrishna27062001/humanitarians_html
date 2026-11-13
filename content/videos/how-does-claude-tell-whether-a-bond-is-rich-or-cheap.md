---
title: "How Does Claude Tell Whether a Bond Is Rich or Cheap?"
seoTitle: "How Claude Decides If a Bond Is Rich or Cheap"
description: "See how the bond-relative-value skill computes a rich-or-cheap read from price, yield curve, credit spread and a stress-tested rate shock."
summary: "Claude does not judge a bond by trader's feel. The video explains how Anthropic's bond-relative-value skill computes a read from four fixed inputs, and why that read is a number and not advice on what to buy."
keywords: ["how to tell if a bond is cheap", "bond rich or cheap explained", "bond relative value analysis", "credit spread over yield curve", "stress test bond rate shock", "can claude analyze bonds", "bond-relative-value skill explained", "bond spread decomposition basics"]
generated: "article"
---

It is tempting to picture Claude deciding whether a bond is rich or cheap from a trader's feel for the market. The video explains that this is not what happens. Anthropic's bond-relative-value skill follows a written procedure and computes a relative-value read from four fixed inputs. The result is a number built from those inputs, and it stops short of telling anyone what to buy.

## Feel versus a written procedure

The video starts from a common guess: that Claude uses its own market instinct to call a bond rich or cheap. The skill does not work that way. It takes the bond's price, the yield curve the bond sits on, the credit spread over that curve, and a stress-tested rate shock, and it computes a read from them.

The video also states what the skill will not do. If you give it a bond with no yield curve to compare against, it does not invent one. With nothing to measure the spread against, there is nothing to read, so the skill has no output to give.

## One bond, four stops

The video follows a single example: a ten-year corporate bond trading forty basis points over the curve. The skill goes through four stops in order. The bond is priced, the curve is read, the spread over that curve is decomposed, and the stress scenario is run.

After that the skill stops with one computed read. In the example the bond comes back cheap by eight basis points. The skill then waits rather than acting on the result, because the next move belongs to a person.

## Why a cheap read is not a buy signal

The video is careful about what a read means. A bond that comes back cheap is not the same as a bond worth buying. The read reflects only the curve you supplied, and a stale curve can make a wrong read look just as confident as a right one.

The reverse also holds. A bond that comes back rich is not automatically one to avoid, because the stress scenario can still favor holding it. In both directions the read waits for a trader's decision before anything trades.

## What the skill is and is not

The video sums up the skill as a written procedure that computes a read and then hands it back. It performs relative value analysis by combining pricing, yield curve context, credit spreads and scenario stress testing. It does not decide which bond to buy, does not invent a curve, and does not exercise trading judgment beyond what the inputs already define. The video makes no claim about any specific bond, issuer or trading desk, only about the general mechanism.

## Key takeaways

- Claude's rich-or-cheap read comes from a written procedure, not from a trader's feel for the market.
- The four inputs are the bond's price, the yield curve, the credit spread over that curve, and a stress-tested rate shock.
- Without a yield curve to compare against, the skill will not invent one, so there is nothing to read.
- In the example, a ten-year corporate bond forty basis points over the curve comes back cheap by eight basis points.
- A cheap read is not the same as a bond worth buying, and a rich read is not automatically a bond to avoid.
- A stale curve can make a wrong read look as confident as a right one.
- The read is a computed number that waits for a trader's decision, not Claude's own call on what to buy.

## Try it yourself

Give Claude one bond, its price and a yield curve to compare it against. Ask it to run the bond-relative-value skill, decompose the spread and stress-test it against a rate shock. Then swap in a different curve for the same bond and watch how much the read moves. That shows the skill computes from the inputs you supply and does not hold a fixed opinion about the bond. The code behind the video is in the humanitarians-youtube repository on GitHub.
