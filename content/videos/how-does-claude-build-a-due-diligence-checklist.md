---
title: "How Does Claude Build a Due Diligence Checklist?"
seoTitle: "How Claude's dd-checklist Skill Builds a DD Checklist"
description: "See how Anthropic's dd-checklist skill builds a due diligence checklist from workstreams written in a file, and where that procedure stops."
summary: "This short video explains that Claude does not decide which deal risks matter from its own judgment. The dd-checklist skill follows a written SKILL.md, tailoring defined workstreams to the target's sector, deal type and complexity."
keywords: ["how claude builds a due diligence checklist", "claude dd-checklist skill explained", "due diligence workstreams and request lists", "red flag escalation in due diligence", "software acquisition due diligence checklist", "does claude use its own judgment", "claude skill skill.md written procedure", "test claude on unsupported deal type"]
generated: "article"
---

Ask Claude to build a due diligence checklist and it is tempting to picture it sizing up your specific deal and deciding, from its own judgment, which risks are worth chasing. This video from Humanitarians AI, narrated by Liam, explains that this is not what happens. Anthropic's dd-checklist skill reads a written SKILL.md file and builds the checklist from workstreams the file already defines.

## The common guess and what the skill does instead

The natural assumption is that Claude weighs the deal and invents the relevant lines of inquiry. The video says the skill does not work that way. It reads the target's sector, deal type and complexity, and then generates the workstreams that profile calls for, each with its own request list. The skill's description in the video also covers status tracking and red-flag escalation, all tailored from what the file defines and nothing more.

The practical consequence is stated plainly: hand the skill a sector the file never lists and it has no independent research to reach for.

## One request, followed from start to finish

The video follows a single example, a software company acquisition. The sequence runs like this:

- "Customer contracts" goes out as a request.
- The documents come back as received.
- They are reviewed.
- One clause, heavy revenue concentration in a single customer, gets flagged as a red flag for the deal team.

The flag reaches the deal team because that item was on the checklist to begin with. The skill escalates what it is already tracking; it does not go looking beyond the list.

## Same checklist every time, and where it stops

Two behaviors follow from the written procedure. If you ask for the same software acquisition checklist twice, the workstreams and request items come back identical both times. And if you ask for a deal type the file never described, the video's example being a mineral rights transfer, there is nothing tailored to reach for. The checklist stops exactly where the SKILL.md does.

The video's summary is that a Claude due diligence checklist is not independent judgment about a deal's risks. It is a written procedure that tailors known workstreams to the deal's sector and type, and it only flags what it is already tracking.

## Key takeaways

- Claude's dd-checklist skill builds from a written SKILL.md, not from its own judgment about what a deal needs.
- The skill reads the target's sector, deal type and complexity, then generates matching workstreams with request lists.
- It covers request lists, status tracking and red-flag escalation.
- In the software acquisition example, a customer-concentration clause is flagged only because that item was already on the checklist.
- The same request produces identical workstreams and request items each time.
- For a deal type the file never described, such as a mineral rights transfer, nothing tailored exists, and the checklist stops where the file does.
- The video makes no claim about specific deal terms, tools or interfaces, only about this general mechanism.

## Try it yourself

Give Claude a deal profile, such as a software company acquisition, and ask it to run the dd-checklist skill: build the workstreams, the request lists inside each one, and where red-flag escalation would trigger. Then ask for a sector or deal type you have never mentioned supporting. Watching whether it invents a bespoke workstream or tells you plainly that it has nothing tailored for it is the fastest way to see how the skill actually behaves. The code for this video is in the humanitarians-youtube repository.
