---
title: "Can Claude Make a Good Chart? Only With a Charting Kit"
seoTitle: "Can Claude Make a Good Chart? How a Charting Kit Helps"
description: "See how a charting kit gives Claude judgement defaults for color, labels and titles, and why it only avoids the mistakes the kit actually spells out."
summary: "The video walks through a charting kit that Claude reads before drawing: five chartkit primitives, three optional data helpers, a four-step workflow and five judgement defaults. Its point is that the kit gives defaults, not good taste."
keywords: ["can claude make a good chart", "claude charting kit judgement defaults", "chartkit theme palette finish save", "how claude picks chart colors", "render and look at the chart workflow", "when to rotate x axis labels", "should bar charts be ranked by value", "make interactive chart html offline"]
generated: "article"
---

Does Claude already know how to make a good chart? The video says not quite. Claude is told what to check by a charting kit that it reads before it draws anything. The video then opens that kit up to show what it spells out, and what that does and does not guarantee about the resulting chart.

## The five chartkit primitives

The kit is built from five primitives. Theme sets matplotlib rc parameters and returns resolved colors. Its key feature is that foreground colors are derived from the background's luminance, so passing a dark background produces a correct dark chart automatically. Palette builds colors from a base hex value, cycles a list, or falls back to the series defaults. Finish adds the typographic frame: a left-aligned bold title, plus a muted caption that records provenance. Save writes PNG, SVG or both and returns the paths. Write HTML produces a self-contained interactive page by inlining React, React DOM and Recharts from a local directory, so the file opens offline with no CDN dependency.

## Three data helpers with skip conditions

Alongside the primitives are three data helpers, each aimed at a specific gotcha. Zero fill days fills calendar gaps in a time series, but it should be skipped when zeros would be a lie because the data is sparsely sampled rather than absent. Rolling mean is trailing, so early points average whatever exists so far, and it should not be centered. Log floor gives a lower bound for bar charts on log scales, where a value equals the axis minimum. All three are optional and used only when they fit. One practical detail is that the absolute path to the graphing scripts directory must go into sys.path, not a relative path, because the working directory is the user's project.

## The four-step workflow

The workflow has four steps. First, look at the data and decide what it deserves. Second, infer colors from context, such as a Tailwind config, CSS variables, brand guidelines and semantic meaning. Third, write the script. Fourth, render and look at the result before handing it over. That last step is explicit: check that labels are legible, nothing overlaps, colors are distinguishable and the story of the data is visible, then fix and re-render until it is right.

## Five judgement defaults

The kit gives defaults with explicit permission to deviate when the data argues for it:

- Rotate x labels only when they would otherwise collide; short labels stay horizontal.
- Cap bar width when there are only a few categories, and label bars with their values when there are roughly a dozen or fewer.
- Rank categorical bars by value unless the categories have a natural order.
- Make a title state what the chart shows, not the chart type or the column name.
- Show legends only when there is more than one series, and annotate what matters, such as a deploy line, a threshold, the peak or the anomaly. An annotation the reader did not need is clutter.

## What the kit does and does not guarantee

Having the kit does not mean Claude always makes the right chart. Where the kit spells something out plainly, such as the first-step judgement call, colors that adapt to the background, or an offline file that just works, Claude follows it and skips the mistake. Where the guidance is a placeholder string swapped by hand or one phrase covering an edge case, Claude can still get it wrong, the same way a person skimming the same page would.

## Key takeaways

- Claude reads a charting kit before drawing; it does not simply know good chart practice.
- Theme derives foreground colors from background luminance, so dark backgrounds work automatically.
- Write HTML makes a self-contained interactive page that opens offline.
- The three data helpers are optional and each has a skip condition.
- The workflow is look, infer colors, write, then render and look again.
- The judgement defaults can be overridden when the data calls for it.
- A kit gives defaults and a few marked sharp edges, and Claude only avoids the edges the kit actually marks.

## Try it yourself

Pick a dataset you have never charted before, ideally one with a real gap in it or no obvious color to reach for, and give it to Claude. Before it writes any chart code, ask what it will check in the data first and where its colors will come from. Then have it render the result, look at the PNG itself, and say what it would fix before handing the chart to you.
