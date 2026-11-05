---
title: "Your Lab Data Gets Converted, Not Read."
seoTitle: "Instrument Data to Allotrope: Claude Converts, Not Reads"
description: "The Instrument Data to Allotrope skill detects the instrument and converts lab files into a standard format, without interpreting the results."
summary: "The Instrument Data to Allotrope skill converts lab instrument files into one standard shape the same way every run. It does not read results, judge them or flag anything scientifically odd, because no step in its instruction file does that."
keywords: ["convert instrument data to allotrope", "claude skill for lab instrument files", "what is a claude skill folder", "convert lab csv to json", "does claude interpret lab results", "skill md instruction file explained", "flattened csv from instrument output", "detect instrument from data file"]
generated: "article"
---

Hearing "instrument data to Allotrope", it is easy to assume Claude reads the lab results, understands them and judges them the way a scientist would. The video says it does not. The skill detects which instrument produced a file and converts it into one exact standard format, the same way every time. It is an Anthropic skill, presented by Liam on behalf of Bear, and it is part of the Extending Claude series on skills, plugins and connectors.

## A skill is a folder

The conversion runs on something called a skill, which the video describes as a folder Claude reads before it works. Inside sit five files: a license, a requirements list, two supporting folders, and one instruction file, SKILL.md. That instruction file spells out exactly how a lab file becomes a standard record. Claude reads it, then follows it.

## How a run works

The steps in the instruction file run in order. Claude reads the file, works through each step exactly as written, and then returns the result. The video says nothing runs out of sequence unless a step itself says so. The skill is therefore a fixed procedure rather than open-ended judgment.

## One job, two output shapes

The skill has a single job. It turns a lab instrument's output, whether PDF, CSV, Excel or plain text, into one of two standard shapes: full Allotrope JSON, or a flattened CSV you can import anywhere. It works out on its own which instrument produced the file.

## What the skill does not do

Because the whole behavior lives in that one instruction file, anything not written there does not happen. Ask the skill to interpret a result or flag something scientifically odd, and there is no step written for that. The video states that the skill does not perform scientific judgment: it does not flag anomalies, validate results or assess data quality. It also does not claim that auto-detection of the instrument is perfect, and no accuracy figure is given. Its summary of the skill is that it detects the instrument and converts the file into one exact standard shape.

## Key takeaways

- The skill converts lab data; it does not read, understand or judge it.
- Accepted inputs are PDF, CSV, Excel and plain text from lab instruments.
- Outputs are either full Allotrope JSON or a flattened CSV.
- The skill detects which instrument produced the file on its own.
- A skill is a folder that Claude reads before it works, containing a license, a requirements list, two supporting folders and SKILL.md.
- SKILL.md spells out the steps, and Claude follows them in order.
- There is no step for interpretation, anomaly flagging or data-quality assessment.
- The result is the same exact standard shape on every run.

## Try it yourself

Ask Claude: "I have a plain CSV export from a lab instrument, with columns like sample ID, measurement, units, and timestamp. Convert each row into one clean JSON record with consistent field names and ISO-format timestamps, and tell me the schema you used." The point of the exercise is to detect the shape of what you have and convert it into one exact standard format, not to get a read on what the numbers mean. The video links the skill's code in the Humanitarians AI YouTube repository.
