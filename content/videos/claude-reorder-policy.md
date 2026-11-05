---
title: "Claude, Reorder Policy."
seoTitle: "How a Claude Skill Follows Written Steps, Not Judgment"
description: "A reorder-policy skill shows that Claude runs a numbered list of steps from a SKILL.md file rather than weighing the market like a person would."
summary: "When Claude recommends a reorder, it is following a written rule, not making a judgment call. The video opens a reorder-policy skill to show that Claude runs its Steps section top to bottom, and cannot handle cases the list never covers."
keywords: ["how claude skills work", "claude skill skill.md steps section", "claude skill follows written rules", "claude skill folder explained", "claude reorder stock recommendation", "claude skill same input same output", "limits of claude skills", "claude skill uncovered case"]
generated: "article"
---

You might guess that when Claude recommends how much stock to reorder, it is making a judgment call. The video says it is not. It is following a written rule. To show this, it opens up a skill called reorder-policy and looks at exactly what is inside.

## The wrong guess

The natural assumption is that Claude weighs the decision the way a person would. That means considering supplier trust, seasonal demand, and a gut feel about the market, then deciding case by case. The video sets this guess up in order to take it apart.

## A folder with one file

A Claude skill, as the video describes it, is a folder that Claude reads before it acts. The reorder-policy skill contains a single file, `SKILL.md`. It is written in plain language, and there is no hidden logic behind it.

## What is actually in the file

Open `SKILL.md` and there is nothing to weigh. The file has a Steps section, which is a numbered list that Claude runs from top to bottom. No step on that list says to use your judgment.

The mechanism is simple. Claude reads each step in order and runs it. It does not branch unless a step itself says to branch. Read the step, run the step, move to the next one.

## What that gets you, and where it stops

Because the steps drive the result, feeding the same stock numbers in twice produces the identical recommendation both times. The video calls that repeatability real.

The matching limit is that the list only ever does what is written on it. Ask Claude something the list never covers and there is no step left to run. The video's summary is that a Claude skill is not Claude judging the market. It is Claude running a written list of steps in order, and it cannot handle a case the list does not cover.

The video is careful about what it does not claim. It does not say Claude never uses judgment anywhere, only that this skill's recommendation comes from running the numbered steps in its file. It also does not describe what the specific steps compute.

## Key takeaways

- A Claude skill is a folder that Claude reads before it acts.
- The reorder-policy skill holds one file, `SKILL.md`, in plain language with no hidden logic.
- Its Steps section is a numbered list that Claude runs top to bottom.
- No step tells Claude to use its judgment.
- Claude does not branch unless a step explicitly says to.
- The same inputs give the same recommendation every time.
- A case the list does not cover leaves no step to run.

## Try it yourself

Take any short numbered procedure you already have, such as a checklist or a brief document, and paste it into Claude with this request: here is a short instruction file with numbered steps in it, and before you run it, tell me which step you are on and what you will do next, before you act on it. Then watch whether Claude stays on the written steps, and try asking for something the list does not cover.
