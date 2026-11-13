---
title: "Does Claude's Digest Skill Watch You All Week?"
seoTitle: "Does Claude's Digest Skill Watch You All Week?"
description: "Find out why Claude's digest skill returns only one day unless you say weekly, and how a written default, not constant awareness, decides what you get."
summary: "This video shows that Claude's digest skill does not quietly track your sources while you are away. It reads one instruction file when asked and defaults to a daily window, so a Monday digest covers only Friday unless you say weekly."
keywords: ["claude digest skill daily or weekly", "why claude digest only shows one day", "does claude monitor my sources", "claude skill default window explained", "catch up after a week away claude", "claude digest skill connected sources", "how claude skills run when asked", "set weekly window claude digest"]
generated: "article"
---

After a week away, it is tempting to picture Claude as having quietly kept tabs on everything the whole time, the way a person who never left the office would have. This video explains why that picture is wrong and what the digest skill actually does. The short version is that it is a file that runs when you ask, and it has a default you can easily miss.

## The tempting guess about constant awareness

The video begins with someone wondering whether Claude was quietly watching everything while they were gone. The natural guess is that Claude has been aware of everything happening across your sources, so asking for a digest simply taps into something it already knows.

The video corrects this directly. Nothing runs until you ask. Even then, if you do not say how far back to look, the skill defaults to one day. Come back from a week away and ask for a digest without saying weekly, and what appears is Friday. Six days of decisions and mentions never make it in.

## What the digest skill does step by step

The skill reads one instruction file and then follows its steps in order. According to the video, those steps are:

- gather mentions and action items across your connected sources
- group updates by project
- check whether you asked for a daily or weekly digest

There is no background process in this description. The skill is a written procedure that is triggered by a request.

## One Monday, four stops

The video follows a single example. It is Monday, you have been gone all week, and you ask for a digest without naming a window. The default line in the file fires, which says daily unless told otherwise. What comes back covers one day: yesterday's mentions and yesterday's decisions. The other six days sit outside it.

## Why the result repeats and what changes it

Because the default comes from the file, the outcome is predictable. Ask again tomorrow without saying weekly, and you get that day, identically, every time. Say weekly once, and the same file runs the same steps across all seven days instead, surfacing everything the daily default left out.

The video stresses that the file and the steps are the same in both cases. The only thing that changes is the word you remembered to say.

## What the video concludes

A Claude digest is not Claude quietly watching all week. It is a file that runs when you ask, and unless you say weekly, it hands you one day and calls it done. The value of seeing this is practical: knowing the default exists lets you avoid assuming a digest is complete when it may only cover a single day.

## Key takeaways

- Claude does not monitor your sources in the background between requests.
- The digest skill runs only when you ask for it.
- It follows one instruction file in order: gather mentions and action items, group by project, check for daily or weekly.
- If you do not name a window, the file's default line fires and the digest is daily.
- A Monday digest after a week away, with the window unset, covers just Friday.
- Saying weekly once makes the same steps run across all seven days.
- Asking again with the window still unset returns the same one-day result every time.

## Try it yourself

Run the digest skill on your own connected sources without saying whether you want daily or weekly, and note which window it defaults to. Then run it again, this time saying weekly explicitly, and compare what shows up that the first pass missed. Seeing how much disappears behind an unset default is the quickest way to confirm that the digest runs from a written file rather than continuous awareness.
