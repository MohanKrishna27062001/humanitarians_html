---
title: "How Does Claude Prep for a Due Diligence Meeting?"
seoTitle: "How Claude's dd-meeting-prep Skill Builds Question Lists"
description: "See how Anthropic's dd-meeting-prep skill turns a meeting type into questions, benchmarks and red flags using a written file, not private instinct."
summary: "This short video explains that Claude does not prep for diligence calls from a private sense of what makes a sharp question. The dd-meeting-prep skill matches the meeting type to a template and builds questions, benchmarks and red flags from it."
keywords: ["how claude preps for due diligence meetings", "claude dd-meeting-prep skill explained", "expert network call question list", "due diligence red flags to probe", "benchmarks for diligence call preparation", "does claude use instinct for questions", "management presentation customer reference prep", "test claude on unsupported meeting type"]
generated: "article"
---

Ask Claude to prep you for a diligence call and it is tempting to picture it drawing on a private sense of what makes a sharp question, the feel an experienced deal person has. This video from Humanitarians AI, narrated by Liam, explains that this is not what happens. Anthropic's dd-meeting-prep skill works from a written SKILL.md and from the meeting type you give it.

## Instinct or a written procedure

The natural guess is that Claude asks whatever an experienced deal person might ask on instinct. The video says the skill does not work that way. It reads which meeting you are prepping for: a management presentation, an expert network call, a customer reference or an advisor session. It then builds a targeted question list, the benchmarks to reference and the red flags to probe, all from what the file already defines for that meeting type.

The consequence is stated directly: ask it to prep a meeting type the file does not cover and it has nothing tailored to reach for.

## One question, four stops

The skill's steps are to match the meeting type to its template, generate the question list, attach the benchmarks and mark the red flags to probe. The video follows one example, an expert network call about a staffing company. A single question, same-store margin trend, goes through four stops:

- It is drafted.
- A benchmark is attached.
- It is asked live on the call.
- It comes back flagged, because the expert's answer leans on one large client.

That flag surfaces because the question was built to probe for exactly that. The skill escalates what its template already watches for and does not go hunting beyond it.

## Repeatable, and bounded by the file

Two further behaviors follow. Prepping the same expert network call twice returns the same question list, benchmarks and red flags both times. And a meeting type the file never described, the video's example being a regulator sit-down, gets nothing tailored: the prep stops exactly where the SKILL.md does.

The video's summary is that Claude's due diligence meeting prep is not insider instinct about what to ask. It is a written procedure that turns the meeting type into a question list, benchmarks and red flags, and it covers only the meeting types the file defines. The video makes no claim about specific companies, questions or benchmark figures.

## Key takeaways

- Claude's dd-meeting-prep skill does not rely on private instinct about which questions matter.
- It supports four meeting types: management presentations, expert network calls, customer references and advisor sessions.
- For a given type, it builds a question list, benchmarks to reference and red flags to probe from the file's definitions.
- In the staffing company example, the same-store margin trend question is flagged because the expert's answer leans on one large client.
- The skill flags what its template already watches for rather than searching beyond it.
- Prepping the same call twice produces identical questions, benchmarks and red flags.
- For an undescribed meeting type, such as a regulator sit-down, there is nothing tailored to use.

## Try it yourself

Tell Claude you are prepping for an expert network call on a staffing company and ask it to run the dd-meeting-prep skill: build the question list, the benchmarks it attaches and the red flags it would probe. Then ask for a meeting type you have never mentioned supporting. Seeing whether it invents a bespoke line of questioning or tells you plainly it has nothing tailored is the fastest way to see that the prep comes from a written file. The code is in the humanitarians-youtube repository.
