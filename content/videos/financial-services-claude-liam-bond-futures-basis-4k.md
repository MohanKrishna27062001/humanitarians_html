---
title: "financial services  claude liam bond futures basis 4k"
seoTitle: "How Claude Finds the Cheapest Bond to Deliver"
description: "See how the bond-futures-basis skill ranks deliverable bonds by computed delivery cost and implied repo rate, instead of relying on a trader's feel."
summary: "The video explains that Claude does not pick the cheapest bond to deliver by feel. The bond-futures-basis skill prices every eligible bond with its conversion factor and ranks them by computed delivery cost, and it does not decide whether a trade is worth doing."
keywords: ["how to find cheapest to deliver bond", "bond futures conversion factor explained", "implied repo rate for bond futures", "claude bond futures basis skill", "cheapest to deliver versus profitable trade", "rank deliverable bonds by delivery cost", "bond futures basis trade basics", "test cheapest to deliver ranking flips"]
generated: "article"
---

Asked to find the cheapest bond to deliver into a futures contract, Claude might seem to work the way a trader does, with a feel for which bond will perform best. The video says that is not what happens. Anthropic's bond-futures-basis skill runs a comparison, and the cheapest bond to deliver is simply the one that comes out lowest in it.

## Feel versus a priced ranking

The natural guess is that finding the cheapest bond to deliver takes judgment about which bond will do well. The skill does not work that way. It prices every eligible bond against the futures contract using its conversion factor, then ranks the bonds by actual delivery cost. If you ask it to favor a bond because you like its prospects, it will not. It reports only the bond that is numerically cheapest to deliver.

## One bond, one number

The skill prices one bond at a time. In the video's anchor example, the futures price and the bond's conversion factor combine into the bond's delivery cost. That cost is converted into a single number, the implied repo rate. This is the return you would earn by buying the bond, holding it and delivering it into the contract. With a number like this for each bond in the deliverable basket, the comparison is built.

## Cheapest is not the same as profitable

The video draws a clear distinction. Finding the cheapest bond to deliver is not the same as finding a profitable trade. The implied repo rate can still sit below the market's actual financing cost, in which case the basis trade loses money.

A second point concerns time. A bond that ranks expensive today is not ruled out for good. Yields move, so the ranking is rerun rather than assumed to be fixed.

## What the skill does and does not do

The skill ranks delivery cost against the yield curve. It does not call whether the trade is worth putting on. The cheapest bond to deliver is whichever one comes out lowest in a fixed comparison across the whole deliverable basket, not the bond Claude favors.

## Key takeaways

- Claude does not pick the cheapest bond to deliver by feel.
- The skill prices each eligible bond using its conversion factor and the futures price.
- Bonds are ranked by actual delivery cost.
- The implied repo rate is the return from buying, holding and delivering a bond into the contract.
- The cheapest bond to deliver is not necessarily a profitable trade, because the implied repo rate may sit below the market's financing cost.
- A bond that ranks expensive today can change rank as yields move, so the ranking is rerun.
- The skill does not decide whether a trade is worth putting on.

## Try it yourself

Give Claude a small basket of deliverable bonds, with a price and a conversion factor for each, along with the futures price and the market's repo rate. Ask it to run the bond-futures-basis skill to find the cheapest one to deliver. Then change one bond's price and see whether the ranking flips. That shows you the skill is comparing numbers, not forming an opinion about which bond is best.
