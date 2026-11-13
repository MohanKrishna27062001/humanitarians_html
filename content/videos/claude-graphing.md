---
title: "Claude, Graphing."
seoTitle: "How Claude Makes a Good Chart: Defaults, Colors, Rendering"
description: "See how a charting kit guides Claude: color inference from backgrounds, optional data helpers, a render-and-look step, and five judgment defaults."
summary: "The video asks whether Claude already knows how to make a good chart. It shows that Claude reads a charting kit first, which sets defaults for color, labels and titles, and a render-and-look step before the chart is handed over."
keywords: ["how does claude make good charts", "chart colors from dark background", "matplotlib chart theme from background", "when to rotate x axis labels", "rank bar chart by value", "chart title should state the finding", "render and check chart before sharing", "interactive chart html works offline"]
generated: "article"
---

The video asks whether Claude already knows how to make a good chart, and answers that it is told what to check in a kit it reads before drawing anything. It then lists what that kit contains: a handful of building blocks, a few optional data helpers, a four-step workflow and a set of judgment defaults.

## Five building blocks

The kit has five primitives. The theme sets matplotlib rc parameters and returns resolved colors, and its key feature is that foreground colors are derived from the background luminance. Pass a dark background and the chart comes out correctly dark without extra work. The palette builds colors from a base hex value, cycles a list, or falls back to the series defaults. Finish adds the typographic frame, a left-aligned bold title and a muted provenance caption. Save writes PNG, SVG or both and returns the paths. Write HTML produces a self-contained interactive page by inlining React, React DOM and Recharts from a local third-party directory, so the file opens offline with no CDN dependency.

One practical detail: the absolute path to the graphing scripts directory must go into `sys.path`, not a relative path, because the working directory is the user's project.

## Three optional data helpers

Each helper targets a specific gotcha, and all three are optional. One fills calendar gaps in a time series with zeros, but should be skipped when zeros would be a lie because the data is sparsely sampled rather than absent. The rolling mean is trailing, so early points average whatever exists so far, and it should not be centered. The third gives a lower bound for bar charts on log scales, where a value of zero would otherwise sit at the axis minimum.

## A four-step workflow

The steps are to look at the data and decide what it deserves, infer colors from context, write the script, and render and look at the result before handing it over. Context for colors can come from a Tailwind config, CSS variables, brand guidelines, or the semantic meaning of the data. The render step is explicit: check that labels are legible, nothing overlaps, colors are distinguishable and the story of the data is visible, then fix and re-render until it is right.

## Judgment defaults with permission to deviate

The kit gives five defaults, and Claude may depart from them when the data argues for it.

- Rotate x labels only when they would otherwise collide; short labels stay horizontal.
- Cap bar width when there are only a few categories.
- Label bars with their values when there are roughly a dozen or fewer.
- Rank categorical bars by value unless the categories have a natural order.
- Write a title that states what the chart shows, not the chart type or the column name.

Legends appear only when there is more than one series, and annotations should mark what matters, such as a deploy line, a threshold, the peak or the anomaly. An annotation the reader did not need is clutter.

## Plainly documented versus easy to miss

The kit does not guarantee a right chart every time. Where it spells something out plainly, such as the first-step judgment call, colors that adapt to the background, or an offline file that just works, Claude follows it and skips the mistake. Where something is a placeholder string swapped by hand, or one phrase covering an edge case, Claude can still err, as a person skimming the same page might. A charting kit does not give Claude good taste; it gives it defaults and a few marked sharp edges.

## Key takeaways

- Claude reads a charting kit before it draws; it is not assumed to know what a good chart needs.
- Foreground colors derive from background luminance, so dark backgrounds work automatically.
- The data helpers are optional, and the zero-fill helper should be skipped for sparsely sampled data.
- The rolling mean is trailing and should not be centered.
- The workflow ends with rendering and looking at the chart, then fixing and re-rendering.
- Titles state what the chart shows, and annotations should only mark what the reader needs.
- Claude only dodges the sharp edges the kit actually marks.

## Try it yourself

Give Claude a dataset you have never charted before, ideally one with a real gap in it or no obvious color to use. Before it writes any chart code, ask what it will check in the data first and where the colors are coming from. Then have it render the result, look at the PNG itself, and say what it would fix before handing it to you.
