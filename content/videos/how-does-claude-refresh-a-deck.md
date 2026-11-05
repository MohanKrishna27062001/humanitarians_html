---
title: "How Does Claude Refresh a Deck?"
seoTitle: "How Claude's deck-refresh Skill Swaps Figures in a Deck"
description: "See how Anthropic's deck-refresh skill swaps one figure for another across every slide, and why the sentences around the number do not change."
summary: "This short video explains that refreshing a deck with Claude is a fixed find-and-replace of one figure, not a rewrite of the story. The deck-refresh skill swaps every instance of a number and leaves everything else untouched."
keywords: ["how claude refreshes a presentation deck", "claude deck-refresh skill explained", "update figures across every slide", "find and replace numbers in a deck", "quarterly earnings deck refresh", "does claude rewrite slide commentary", "check deck commentary after number swap", "test figure swap with repeated number"]
generated: "article"
---

Ask Claude to refresh a deck with the new numbers and it is tempting to picture it reconsidering the whole slide: updating the commentary, the trend language, maybe the framing along with the figure. This video from Humanitarians AI, narrated by Liam, explains that this is not what happens. Anthropic's deck-refresh skill reads a written SKILL.md and executes a linear pipeline that swaps numbers.

## Reconsidering the story or find and replace

The natural guess is that Claude reconsiders the slide's story. The video says the skill does not reconsider anything. It is a fixed swap: find every place one figure appears and replace it with another. Ask it to also rewrite the sentence built around that number and it will not, because that is outside the step.

According to the video, the skill is meant for updates such as quarterly refreshes, earnings updates, comp rolls and rebased market data, and it works by finding and replacing figures across an existing deck.

## One figure, three slides

The skill reads the deck slide by slide, in order, and swaps one exact figure for another wherever it finds it. The video's anchor example is $485M, which appears in three places:

- The executive summary.
- The comps table.
- A footnote.

On three separate slides, one by one, each becomes $512M. The refresh is done, and $512M now sits in all three places where $485M used to.

## Changed numbers are not the same as a true deck

The video adds two cautions. A deck where every figure changed is not the same as a deck that is still true. A sentence that said "still below $485M" does not get rewritten just because the number did. And a leftover $485M is not always a miss, because sometimes that instance was never the target figure at all.

The video's summary is that a deck refresh is not Claude rewriting the story. It is one figure swapped everywhere the step says to swap it and left alone everywhere else.

## Key takeaways

- Refreshing a deck with the deck-refresh skill is a fixed find-and-replace, not a reconsideration of the slide.
- The skill reads the deck slide by slide and swaps one exact figure for another wherever it appears.
- It does not rewrite commentary, trend language or framing, even when asked to rewrite the sentence around the number.
- In the example, $485M in the executive summary, comps table and footnote becomes $512M in all three.
- A sentence built on the old number, such as one saying a value is still below $485M, is not rewritten when the number changes.
- A leftover instance of the old figure may be a different number that was never the target.
- Changing every figure does not guarantee the deck still tells a true story.

## Try it yourself

Give Claude a few sentences that repeat one figure in different contexts, for example a revenue figure of $485M up from $420M last quarter and a book value near $485M. Ask it to replace every instance of $485M with $512M and change nothing else. Then check whether a nearby sentence built on the old number is still literally true, or whether the figure moved while the sentence around it stayed exactly where it was.
