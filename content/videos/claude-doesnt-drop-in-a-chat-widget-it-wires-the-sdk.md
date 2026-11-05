---
title: "Claude Doesn't Drop In a Chat Widget — It Wires the SDK."
seoTitle: "Zoom Contact Center Web SDK Skill in Claude"
description: "What Claude's contact-center web skill covers for the Zoom Contact Center Web SDK: embeds, engagement events, app context and Smart Embed postMessage."
summary: "The video explains that Claude's contact-center web skill does not drop in a ready-made chat widget. It follows a written specification to wire the Zoom Contact Center Web SDK's chat, video and campaign events, context and postMessage into your own site."
keywords: ["zoom contact center web sdk chat embed", "add zoom contact center chat to website", "zoom smart embed postmessage workflow", "zoom contact center engagement event handling", "claude skill for zoom web sdk", "what is a claude skill folder", "zoom contact center app context integration", "prompt claude before writing zoom sdk code"]
generated: "article"
---

Someone hearing "contact center, web" might assume Claude simply drops in a ready-made chat widget. The video says it does not. What the skill does is wire the Zoom Contact Center Web SDK's chat, video and campaign events into your own site's code. The short walkthrough explains what a skill is, how this one runs and exactly what it covers.

## A skill is a folder Claude reads first

The video defines a skill as a folder Claude reads before it works. This one is called contact-center/web, and inside it are six items: a runbook, a skill file, and folders for concepts, examples, references and troubleshooting. Claude reads the file and then follows it. The skill is presented as a specification written as an instruction set rather than a flexible assistant.

## How it runs

The steps run in order. Claude reads the file, works through each step exactly as written and then returns the result. Nothing runs out of sequence unless a step itself says so. This sequencing is what lets the behavior be repeatable, instead of depending on how a particular request happens to be phrased.

## What the skill covers

The skill's job is the Zoom Contact Center Web SDK. The video lists what that includes:

- chat, video and campaign embeds
- engagement event handling
- app-context integrations
- Smart Embed postMessage workflows

Follow the skill and the result repeats: the same input produces the same output on every run. The flip side is stated just as plainly. Ask for anything outside that list and there is no mode that covers it.

## Wiring, not a drop-in widget

The video's carry-out makes the central distinction. Contact-center/web does not hand you a drop-in chat widget. Instead it wires the Zoom Web SDK's chat, video and campaign embeds into your own site through events, context and postMessage, the same way every time. The video keeps this boundary throughout. It does not claim that Claude renders a visible chat interface itself, and it does not claim the skill replaces Zoom's own Contact Center product, because the skill is scoped to the Web SDK specifically. It also offers no verdict on whether four areas of coverage is the right scope.

## The prompt to run on your own site

The closing prompt is addressed to Claude: walk me through adding Zoom Contact Center's web chat to my site, covering engagement events, app context and Smart Embed postMessage, before I write any code. The video suggests running it today on your own site rather than reusing the video's example.

## Key takeaways

- A skill is a folder Claude reads before it works, and contact-center/web holds six items.
- Those items are a runbook, a skill file and folders for concepts, examples, references and troubleshooting.
- Claude reads the file and follows its steps in order, exactly as written.
- The skill covers chat, video and campaign embeds, engagement event handling, app-context integrations and Smart Embed postMessage workflows.
- The same input gives the same output on each run.
- Requests outside the listed areas have no mode that covers them.
- The skill wires SDK events, context and postMessage into your own site code instead of supplying a finished widget.

## Try it yourself

Take the video's prompt and run it against your own site: ask Claude to walk you through adding Zoom Contact Center's web chat, covering engagement events, app context and Smart Embed postMessage, before you write any code. Use the answer as a plan for wiring the SDK into your own pages, rather than expecting a finished widget to appear.
