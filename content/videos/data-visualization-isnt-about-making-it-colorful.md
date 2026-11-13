---
title: "Data Visualization Isn't About Making It Colorful."
seoTitle: "Choose the Right Chart Type Before Choosing Colors"
description: "How Claude's data-visualization skill picks a chart type from the data first, rules out pie and 3D charts, and uses color only to carry meaning."
summary: "A short walkthrough of Claude's data-visualization skill. It shows that the chart type comes first, chosen from the relationship in the data, and that color only earns a place once it carries the finding and survives colorblind and black-and-white viewing."
keywords: ["how to choose the right chart type", "chart type for ranking data", "why avoid pie charts and 3d charts", "colorblind safe chart colors", "red and green colorblind charts", "accessible data visualization tips", "claude data visualization skill", "one accent color in charts"]
generated: "article"
---

A common assumption is that data visualization means picking bright colors. The video argues against that and uses Claude's data-visualization skill as the example. In that skill, the chart type comes first, chosen from what the data is actually doing, and color has to encode something real before it is allowed in.

## A skill is a folder Claude reads before it acts

The video begins by explaining what the skill is. It is a folder, and inside it is one file that lays out how raw data becomes a chart. The steps are to pick the chart type for the relationship in the data, write the plotting code, and then apply the design and accessibility rules on top. The video describes that file as the whole program. Claude reads it before it acts, so the order of the steps is the order of the work: chart type first, styling after.

## Pick the chart from the relationship in the data

The guide works in two directions. It says what to use, and it says what to avoid. The video gives three pairings. A ranking gets a horizontal bar chart. A composition over time gets a stacked area chart. Many variables at once get a heatmap.

Some charts are ruled out outright, and the video gives a reason for each:

- Pie charts, because people are bad at comparing angles.
- 3D charts, because they distort the data.
- Dual axes, because they can imply a correlation that was never there.

The video is careful about how it frames this. The avoid-list is the boundary this particular skill states for itself, not a universal law of design, and the skill still applies color, typography and layout practice. It simply does so after the chart type is chosen rather than instead of choosing it.

## Color has to earn its place

Once the chart type is set, color gets a say, but only if it carries meaning. The video lists the rules the skill applies:

- One accent color carries the finding, and everything else fades to gray.
- Red and green alone are never enough, because about 8% of men cannot tell them apart.
- Every chart has to survive in black and white, with a pattern, a label or a line style standing in for the color.

The point of the last rule is that a pattern or line style is doing real work for the reader, not decorating the chart. A chart that only makes sense in full color excludes anyone who cannot see that color difference, and the video treats colorblind-safe design as a real constraint rather than an afterthought.

## The takeaway

The video's closing line is that a good chart does not start with a bright palette. It starts with the chart type that the data's relationship calls for, and color only earns a place once it carries meaning. That reframes the usual question. Instead of asking which colors will look good, the skill asks what the data is doing, what chart shows that, and what single thing the color should point at.

## Key takeaways

- Choose the chart type first, based on the relationship in the data, and think about color second.
- A ranking suits a horizontal bar, a composition over time suits a stacked area, and many variables at once suit a heatmap.
- This skill rules out pie charts, 3D charts and dual axes, for the reasons the video gives.
- Use one accent color to carry the finding and let everything else fade to gray.
- Do not rely on red and green alone, since about 8% of men cannot tell them apart.
- Make sure each chart still works in black and white by using a pattern, label or line style.
- The skill is a folder Claude reads before it acts, with one file that sets the order of the work.

## Try it yourself

The video ends with a prompt you can paste into Claude. Give it made-up scores from a five-question customer survey, rated one to ten: Ease of use 8, Price 4, Support 7, Reliability 9, Design 5. Ask what chart type this calls for, and ask it to pick colors that would still make sense to someone who is colorblind. Check whether its answer explains the chart choice before it talks about color.
