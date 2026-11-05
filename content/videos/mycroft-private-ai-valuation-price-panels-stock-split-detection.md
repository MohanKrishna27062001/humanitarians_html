---
title: "Mycroft: Private AI Valuation, Price Panels, Stock Split Detection"
seoTitle: "Detect Stock Splits vs Repricings in Per-Share Price Data"
description: "How SEC filings become a per-share price history for private AI companies, and how share counts separate stock splits from real repricings."
summary: "Om presents the Mycroft price panel, which turns SEC filings into 5,479 per-share price marks for private AI companies. The video shows how a stock split can look like a 92% crash and how share counts and human decisions keep the history honest."
keywords: ["detect stock split in price data", "split versus repricing share count", "per share price history from sec filings", "stock split looks like price crash", "relative tolerance instead of fixed threshold", "private company valuation price panel", "record human rationale beside machine metrics", "test thresholds against the case they catch"]
generated: "article"
---

This video, from week seven of the private AI evaluation agent in the Mycroft project, is about the price panel: turning SEC filings into a per-share price history for private AI companies. The presenter, Om, explains that the arithmetic is a single line, and that everything hard lies in deciding which rows deserve to be in it and in catching the one error that would have silently ruined the result.

## From filings to 5,479 marks

A mark is the filed value divided by the share count, taken once per security, per fund, per quarter. The panel started with 5,806 filed holdings. Of those, 28 were rejected the previous month as belonging to nothing and 72 sat on filings that a later amendment replaced. The remaining 5,706 aggregate into 5,479 marks. The accounting reconciles exactly, and nothing is dropped for being awkward.

## Why splits are dangerous

The time-consuming part of the week was a detector for stock splits, because a split makes a price series look like a crash. Perplexity went from $695 a share to $58. Read naively, that is a 92% collapse, and it would have entered the price history as one. It was actually a stock split, and a price series has to know the difference.

## A threshold that missed its own test case

The first detector used a window of plus or minus 0.02 around whole-number ratios. Perplexity's ratio was 11.93, which is 0.07 away from 12, so the window missed it by a factor of three. The detector had looked correct only because the other Perplexity step happened to land on exactly 10. The rule is now a relative 1% window, shared by the detector and the review queue.

## Splits move share counts, repricings move values

Catching a step is not the same as deciding what it is. Three companies threw a suspected split, and the ratio alone could not say which were which. Share counts could:

- Perplexity's preferred line went from 19,000 shares to 193,000 while the dollar value did not move by a cent: ten times the shares for exactly the same money, which is a split.
- Anthropic held the same 89,000 shares across all 13 quarters. Only the value moved, and the step reversed the next quarter, which a split never does.
- SpaceX also had a constant share count and a value that exactly doubled, which is a repricing.

In short, splits move the share count and repricings move the value.

## Recording the human decision

A person made all three calls and wrote the reason down. The 11.93 case shows why. It is not a split factor but a 10-for-1 split combined with a 16% markdown in the same quarter. Dividing by 11.93 would erase a real price move, while dividing by 10 preserves it. So the panel records what a person decided to divide by separately from what the machine measured.

The plan listed seven checks for the panel. Six pass. The seventh needs filings the SEC has not yet published, and it reports that openly instead of quietly passing. In one of the six, the expectation was that four managers would agree on Anthropic's price. Ten do, in two clusters four thousandths of a dollar apart.

## Key takeaways

- A per-share mark is value divided by share count, once per security, fund and quarter; the hard work is in choosing which rows count.
- The panel reconciles 5,806 filed holdings to 5,479 marks with every exclusion accounted for.
- A split can look like a collapse: Perplexity's drop from $695 to $58 appeared to be 92%.
- An absolute tolerance of 0.02 missed a ratio of 11.93; a relative 1% window replaced it.
- Share counts separate splits from repricings where ratios cannot.
- Record the human decision and its reason separately from what the machine measured.
- A check that cannot run yet should say so instead of passing.

## Try it yourself

The video suggests pasting a prompt into Claude: pick a threshold in your own code, such as an absolute tolerance or cutoff, find the case it was written for, and check whether it would still catch that case today. A threshold never tested against the thing it exists to catch is just a guess with a number on it.
