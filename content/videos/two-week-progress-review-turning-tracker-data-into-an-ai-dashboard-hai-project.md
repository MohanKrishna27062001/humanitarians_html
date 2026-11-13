---
title: "Two-Week Progress Review: Turning Tracker Data into an AI Dashboard | HAI Project Manager"
seoTitle: "Turn a Review Tracker Into a Dashboard With Claude"
description: "A project manager shows how Claude turned a raw tracker of 172 video reviews into a reproducible dashboard covering approvals, changes and GitHub compliance."
summary: "Sanjana, a project manager at Humanitarians AI, reviews 172 videos from 38 fellows and uses Claude to turn her tracker into a dashboard. The video shows the quality gate funnel, an alternating weekly cadence and GitHub compliance."
keywords: ["turn tracker data into a dashboard", "use claude to summarize a spreadsheet", "project manager progress review template", "quality gate funnel approved needs changes", "alternating weekly review cadence", "track github compliance for submissions", "reproducible dashboard from raw data", "stakeholder update from tracker data"]
generated: "article"
---

Sanjana, a project manager at Humanitarians AI, presents a quick and honest look at the video reviews she ran over a two-week period. The video shows how many videos she reviewed, how many went up for the professors to approve, how many needed changes, and the weekly rhythm she keeps. It also shows how she used Claude to turn a raw tracker into something a stakeholder can read in about a minute.

## The workload behind the numbers

Every week, dozens of fellows across many projects submit videos, and someone has to review each one, give clear feedback and decide what is ready for the professors to see. Over these two weeks that meant 172 videos from 38 fellows. At that volume, the video argues, a gut feeling that it was a busy couple of weeks is not enough. Stakeholders need the actual numbers, and so does the reviewer.

## The system: a weekly cadence and one pipeline

The structure is the point, and it has two parts. The first is a weekly cadence that alternates: one week she reviews the Mycroft project videos, and the next week she reviews all the other projects. That keeps a huge queue from piling up on any single team. The second part is that every video runs through the same pipeline. It is reviewed, and then it either goes up for the professors to approve, goes back with specific changes, or is blocked on a real issue. She also checks whether the code is on GitHub.

## Building the dashboard with Claude

The request to Claude is simple and specific: read the tracker, filter to the last two weeks, and give the totals. The code it wrote keeps only the rows with a video count, filters to the two-week window, then sums the videos and groups them by approval status. Because it is real code reading the real sheet, every number can be reproduced. The headline was 172 videos reviewed, of which 119 went straight up for approval, 50 came back with specific changes, and three were blocked on real issues. The video reads the 50 as the quality gate doing its job before anything reaches a professor's desk, not as wasted effort.

## Showing the rhythm, not just the total

A single total hides the rhythm, so the request was revised to split the same videos by week and by project. Each video is tagged as Mycroft or other, and tagged by week, then grouped by both. The result matched the plan: the first week was mostly other projects, with 87 videos, and the second week was mostly Mycroft, with 85 in total. Across the fortnight the split was 95 videos from other projects and 77 from Mycroft.

## The two-week scorecard

The video closes with a scorecard covering throughput (172 videos), the quality gate (119 approved and 50 sent back for specific fixes, several already revised and re-uploaded), the cadence and compliance. For compliance, 146 of the 172 videos had their code on GitHub, about 85 percent, with the rest already followed up. One honest caveat is that the figures count videos reviewed, not hours, and that changes requested will keep turning into changes made over the coming days.

## Key takeaways

- A busy-feeling period needs actual numbers; the tracker can supply them if it is summarized well.
- Alternating weeks between one project and all the others keeps a large review queue from piling up.
- A fixed pipeline gives every video one of three outcomes: approved, needs changes, or blocked.
- A specific, checkable request to Claude produces code you can rerun to reproduce every number.
- Sending 50 videos back with specific changes is the quality gate working, not rework wasted.
- Splitting by week and project reveals the cadence that a single total hides.
- The scorecard should state its limits, such as counting videos rather than hours.

## Try it yourself

If you keep a review or task tracker, paste it into Claude and ask for the totals, the split by week and project, your GitHub compliance rate, and three sentences you can drop straight into a stakeholder update. A good answer gives you the cadence and names the blocked items, while a poor one just repeats your raw rows back to you.
