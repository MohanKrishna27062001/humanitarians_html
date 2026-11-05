---
title: "Energy Recycling in Photonics — Three Things Called “Recycling” | Uday Sonawane"
seoTitle: "Energy Recycling in Photonics: Three Different Meanings"
description: "Uday Sonawane separates three ideas called energy recycling in photonic hardware and gives three questions for judging what a paper is really claiming."
summary: "Uday Sonawane of the Mycroft team shows that energy recycling in photonics can mean reusing pump light, reusing photons before detection, or recovering waste heat. He offers three questions and examines one strong published example."
keywords: ["energy recycling in photonics explained", "pump light recycling optical amplifier", "photon recycling before detection", "waste heat recovery photonic computing", "how to evaluate photonics efficiency claims", "thin film lithium niobate amplifier resonator", "questions to ask about recycling claims", "photonic neural network recirculating mesh"]
generated: "article"
---

The phrase "energy recycling" sounds like one idea, but in photonic hardware it can refer to at least three different things at three different layers of a machine. In this weekly STEM submission from the Mycroft team, Uday Sonawane explains how to tell which one a paper is actually claiming, and why a result for one says nothing about the others.

## One label, three ideas

Searching for energy recycling in photonics returns three separate ideas under one label. The first is reusing the pump light that drives a device. The second is reusing the photons themselves before anything measures them. The third is recovering waste heat downstream, which is not optical at all.

These sit at different layers, and they are measured against different baselines. A result in one tells you nothing about the others.

## Three questions for any recycling claim

The video offers a short test for any photonic recycling claim:

- What exactly is being reused: pump power, photons or heat?
- Is it reused before or after detection? Detection destroys the photon, and the video calls that a hard physical wall, not an engineering problem.
- What is the number compared against: the laser alone, or the whole system including the electronics?

## The strongest published example

The video then looks at what it calls the strongest published example, a team at Stanford that built an optical amplifier on thin-film lithium niobate, published in Nature in January. Normally the pump light that drives an amplifier passes through once, and whatever is left leaves. Here the pump is generated inside a resonator, so it circulates and passes the same material again and again. Nothing is reclaimed from waste. The same light is put back to work before it can escape.

The numbers cited from the paper are more than 17 dB of gain while drawing under 200 milliwatts, with 95 percent of the input converted into the pump that does the work. Noise stays flat and near the quantum limit across 110 nanometers of bandwidth. The video points out why that matters: the cheap way to get gain is to accept more noise, and they did not.

Against conventional single-pass designs, the effective pump power rises by nearly an order of magnitude, roughly ten times the useful pump from the same laser. Against previous demonstrations, the power needed to reach this gain drops by about an order of magnitude. The video stresses that this is a claim about pump light.

## What the headline does not support

The video lists limits. First, this is an amplifier, not a processor. It makes a signal bigger and performs no computation, so nothing here says a photonic computer became more efficient. Second, a photon is destroyed when it is detected, so light can be recirculated before measurement but never after. Third, most search results for energy recycling in photonics were not about reclaiming light at all. They concerned spending less power on tuning phase shifters and moving data, which is real work but a different claim.

The other two layers do exist. A proposal in particle acceleration would loop leftover light back around for the next cycle, and photonic neural networks include recirculating mesh architectures that reuse the optical path before detection. The video calls both early and deliberately gives no numbers for them.

## Key takeaways

- Energy recycling in photonics can mean reusing pump light, reusing photons, or recovering waste heat.
- Each meaning sits at a different layer with a different baseline.
- Ask what is reused, whether it happens before or after detection, and what the saving is compared against.
- The strongest example with hard numbers reuses pump light inside a resonator.
- That result is for an amplifier, not a computing processor.
- Light can be recirculated before detection, never after.
- If the answer is waste heat, it is a data center result, not a computing one.

## Try it yourself

The next time you read an energy recycling claim in photonics, ask what is physically being reused, whether it happens before detection, and what baseline the saving is measured against. Write down the three answers before you decide how much the claim tells you.
