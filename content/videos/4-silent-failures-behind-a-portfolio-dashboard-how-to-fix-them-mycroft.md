---
title: "4 Silent Failures Behind a Portfolio Dashboard & How to Fix Them | Mycroft"
seoTitle: "4 Silent Failures Behind a Portfolio Dashboard"
description: "Tanmay Kulkarni walks through four ways a clean-looking portfolio dashboard can quietly go wrong, and the checks that make each failure speak up."
summary: "Using the Mycroft finance pipelines, the video follows four mornings where a handoff between workflows slips without any visible sign. Each one is fixed with a check, and a flawed test shows why a check that cannot fail is worse than none."
keywords: ["silent failures in data dashboards", "javascript or operator zero value bug", "validate workflow payloads before calculation", "detect duplicate data copies in workflow", "check workflow name before calling", "test that can never fail", "portfolio dashboard data handoff checks", "finance pipeline recipes testing"]
generated: "article"
---

A portfolio dashboard can look finished: five stocks, one total, a percentage gain, all neatly drawn. This video by Tanmay Kulkarni, speaking for Humanitarians AI, points out that every number on that screen arrived through quiet handoffs, places where one part of the system takes another part's word for it. It spends four imagined mornings with the dashboard, letting one handoff slip each time.

## The setting: two recipes behind one screen

The work comes from Mycroft, described as both a book and a working repository for finance pipelines. It calls its workflows recipes. Two of them sit behind the dashboard: one fetches prices and does the math, and the other calls it and draws the screen. The speaker's merged pull request added checks to both and rebuilt the math step so that it runs on test data. Every price shown in the video is invented for testing.

## Morning one: a zero price that looks normal

One stock comes back with a price of zero. The workflow reads the price with a JavaScript "or," and in JavaScript a zero counts as missing, so the workflow quietly uses the previous close instead. The dashboard looks perfectly normal and the math is right, but the reader does not know which price they are seeing. The speaker kept that behavior because it is the workflow's own choice, and the recipe now notes it for maintainers. What changed is the record: for every stock, the output now says which price was used.

## Morning two: a symbol the portfolio does not hold

A response arrives for a symbol the portfolio does not contain. In the original, the calculation looked up how many shares were owned, found nothing and stopped with an error. Now a check before it catches the response first and sets it aside with a reason, and the calculation refuses to run on anything that check turned away. Nothing half-finished reaches the screen.

## Morning three: the portfolio written out twice

The portfolio, meaning which stocks, how many shares and what was paid, is written out twice inside the same workflow. One copy decides which prices to fetch and the other does the math. Edit the shares in the first and the math keeps using the second, so the total does not move and nothing says why. The first step now reads both copies and stops if they disagree, naming the difference.

## Morning four: a placeholder name

The dashboard holds no prices itself. It calls the price workflow and finds it by name, because the ID that would pin it down is still a placeholder. The dashboard's first step now checks that the name it calls is the price workflow's real name, and stops if it is not.

## The test that could not fail

The video also admits a mistake in its own checking. To confirm the checks could fail, the speaker broke the calculation on purpose and ran the test meant to catch it. The test passed, because the broken version had never run and the test was grading a file left over from the good run. A check that cannot fail is worse than no check, because it looks like one. The test now refuses to grade anything unless the broken version really ran.

## Key takeaways

- A finished-looking dashboard can hide handoffs that take another step's word on trust.
- In JavaScript, an "or" fallback treats a zero price as missing, so record which value was actually used.
- Set aside unexpected payloads with a reason, and make calculations refuse anything a check turned away.
- When the same data is written twice in one workflow, compare the copies and stop if they disagree.
- Verify that a workflow you call by name is the real one, especially while its ID is a placeholder.
- Prove that a test can fail by confirming the broken version actually ran.
- Both recipes are still drafts, and some steps still run on trust.

## Try it yourself

Pick one number you look at every morning and ask what it is quietly taking on trust, and what would tell you if that trust slipped. The video suggests a good answer names both the handoff and the thing that would say so.
