---
title: "Open-Source AI Development & Pull Request Review | Mycroft AI"
seoTitle: "Mycroft AI Pull Request: How a Finance Agent Weighs Votes"
description: "A walkthrough of a merged Mycroft pull request that made a stock-simulation workflow testable, showing how three simulators are weighed into one verdict."
summary: "Tanmay Kulkarni reviews his merged pull request to Mycroft, an open repository of finance pipelines. The video follows an invented stock through three simulators and a weighted verdict, then describes a cross-language bug found while testing."
keywords: ["mycroft ai pull request walkthrough", "open source ai github workflow review", "weighted voting of ai simulation agents", "test a workflow on invented data", "python and javascript minimum of list difference", "who decides an ai verdict", "finance pipeline recipes with ai", "write meeting minutes for an ai"]
generated: "article"
---

This video follows a pull request to Mycroft, a working repository of finance pipelines that it calls recipes. Tanmay Kulkarni, presenting in for Humanitarians AI, opens with a line that a workflow sends to an AI: "Your action plan must strictly match sell." His question for the whole video is who decided that verdict, and how much of a vote each part of the workflow had. Every company shown is invented, and the video states that none of it is investment advice.

## The meeting metaphor

The recipe in question is a simulation workflow that asks three different questions about a stock and then hands an AI the answers. Tanmay frames it as a meeting. The workflow is the chair and the three simulators are its voices. His merged pull request made the six steps before the AI runnable on test data, with checks.

The chair's first job is to make sure every seat has something to read. If a request arrives with nothing filled in, the chair fills every seat itself, as it does for a placeholder called Unknown Company. The meeting starts anyway.

## The three voices

The example stock is an invented company, Ironbridge Power, with 5% growth, a sentiment of 0.35, a price-to-earnings ratio of 80, and an aggressive investor.

- The first voice sorts the stock into one of nine boxes, rating growth and sentiment as low, medium or high. Ironbridge is low and low, and the voice says strong sell with 82% confidence.
- The second voice judges the same stock for three kinds of investor. Conservative and balanced both say avoid. Aggressive has the loosest limits, and Ironbridge sits exactly on all four of them, so it says enter a full position.
- The third voice asks a different question: how close is the verdict to changing? It nudges growth and sentiment up and down six ways, and three of the six nudges change the verdict. The stability score is 0.05 out of one.

## Weighing disagreement

Now the voices disagree, but nobody has made a mistake, since they were asked different questions. The chair weighs them 45, 35 and 20 on a scale from one to five, where strong sell is at the bottom and enter a full position at the top. Together they come to 2.17 out of five. A score from 1.8 to 2.8 is written down as a sell.

The chair then writes the minutes, about 470 words, covering the stock, each voice, the stress tests, the verdict and a final instruction. The AI only ever receives the minutes, and in the minutes a number someone typed looks the same as a number the chair filled in.

## A bug found by a second implementation

To check the original, Tanmay wrote a second minute taker, a Python copy of the six steps, and ran both on the same meetings. On two requests, they wrote different verdicts. In those, growth had been typed as letters and sentiment left as empty text. Python and JavaScript disagree about the smallest of a list when one entry is not a number. After the fix, both write the same minutes on all 23 requests, and a test keeps the problem from returning.

Nothing was sent anywhere. The step that would call the AI and the step that would save the answer are written down as hand-offs marked not approved, and five items in the recipe remain open. It still says draft on purpose.

## Key takeaways

- The pull request made the six steps before the AI runnable on invented test data with checks.
- Three simulators ask different questions, so disagreement between them is not an error.
- The chair weighs the voices 45, 35 and 20 and writes a verdict from the weighted score.
- The AI sees only the written minutes, not the process behind them.
- A second implementation in Python exposed a difference in how Python and JavaScript handle non-numeric entries when finding a minimum.
- A test now keeps that bug from coming back.
- The AI call and the save step remain unapproved hand-offs.

## Try it yourself

If an AI is going to summarise your next meeting, read the minutes. The video's test is whether the summary names the voices and their weights, since "the AI will figure it out" does not count. The project is on GitHub as nikbearbrown/mycroft, and the pull request discussed is number 70.
