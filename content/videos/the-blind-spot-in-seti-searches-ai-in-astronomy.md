---
title: "The Blind Spot in SETI Searches: AI in Astronomy"
seoTitle: "The Blind Spot in SETI Searches and How to Test It"
description: "Why a search for alien radio signals can score 0 out of 80 on a drift-correcting transmitter, and how ON-OFF pointing tests where a signal came from."
summary: "Episode 13 of the AI in Astronomy series looks at searching for something nobody has ever detected. Every SETI search assumes what a signal looks like, so the video shows where that assumption creates a blind spot and a test that avoids it."
keywords: ["how seti searches for alien signals", "seti search algorithm blind spot", "doppler drift in radio signal search", "parkes proxima centauri 982 mhz signal", "on off pointing seti interference test", "why seti search assumptions matter", "detector blind spot ai prompt", "radio signal interference vs sky signal"]
generated: "article"
---

This episode of the AI in Astronomy series turns from the previous twelve, which covered AI looking at things that exist, to a harder case: looking for something nobody has ever found. Because no extraterrestrial radio signal has ever been detected, a search has to assume what one looks like, and then it finds what it assumed. The video, presented by Om Mali, examines what that assumption costs.

## The 2019 Parkes detection

The video starts with a real example. In 2019 the Parkes telescope was pointed at Proxima Centauri and picked up a narrow tone at 982 megahertz that survived every cut and was given a name. Dozens more like it were then found, and they turned out to be broken electronics on the ground. The episode uses this to show how easily a signal that fits the search can be something else.

## How the search models Doppler drift

The video then shows what the data looks like, with time running down and frequency across. The dark vertical lines are transmitters on the ground. A signal from the sky leans, because the planet moves, and a faint one is invisible unless the data is integrated. So the search tries every lean and keeps the best. The key point is that the range of leans tried is the assumption written as a number. Anything outside that range is not missed, because it is never looked for.

## The three-transmitter test

To show the consequence, the video sets up three transmitters. One leans the way the search assumes. One corrects its own drift, which is something people do. One blinks. All three are things a transmitter can do. When the search runs, the one that leans is found every time, while the one that corrects its drift is found never, zero out of 80. Widening the search by one number finds it every time, and moving the edge of the search outward shows recall dropping off a cliff exactly where it crosses zero.

## Asking where, not what

The alternative is a different kind of test: point at the star, look away, point back, and look away again. A signal from the sky comes and goes with the telescope, while interference does not care where the telescope points. This test does not depend on what the signal looks like. On the drift-correcting transmitter that the original search scored zero on, it finds the signal three times in four. The video's summary is to ask where a signal came from, not what it resembles.

## Key takeaways

- No alien radio signal has ever been detected, so every search assumes a signal form in advance.
- The 2019 Parkes tone at 982 MHz near Proxima Centauri was one of many that turned out to be ground electronics.
- The range of drift "leans" a search tries is the assumption expressed as a number; anything outside it is never looked for.
- In the test, a transmitter that corrects its own drift scored 0 out of 80.
- Widening the search by one number makes that transmitter findable, which makes the blind spot visible.
- ON-OFF pointing tests the signal's origin rather than its shape and found the same transmitter three times in four.
- The only test that escapes a guess about form is one that asks where the signal came from.

## Try it yourself

The video ends with a prompt you can give Claude about any detector you have built or trained: describe what it was trained to recognize, then ask what it would miss, and what test would catch that without you having to guess right first.
