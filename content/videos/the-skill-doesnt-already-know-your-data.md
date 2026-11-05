---
title: "The Skill Doesn't Already Know Your Data."
seoTitle: "Why Claude Needs a Skill File for Your Company Data"
description: "Claude does not read your company's data automatically. See how the data context extractor skill writes your definitions into a reusable skill file."
summary: "Claude does not automatically know what your tables and columns mean. The data context extractor skill produces a written file, once, that spells out your company's definitions so every later analysis uses them instead of a guess."
keywords: ["does claude read my company data", "data context extractor claude skill", "write company data definitions for claude", "how claude skills work folder", "create a data analysis skill", "document table and column meanings", "claude skill file plain language steps", "company specific data analysis with claude"]
generated: "article"
---

It is easy to assume that Claude already reads your company's data automatically. The video says it does not. What Claude reads is a file you write once that spells out your data's definitions, and it follows that file instead of guessing. The skill that produces such a file is called data context extractor.

## What the data context extractor does

The job of this skill is to generate or improve a data analysis skill built around your company's own data. The output is a written skill file that explains what your tables and columns actually mean. It is not a connection to a live database. The video describes it as writing your data's context into a skill file once, so every analysis after that uses your definitions instead of a guess.

## A skill is a folder

Like every skill, data context extractor is a folder that Claude reads before it works. Inside is one file, written in plain language, that spells out the job. Claude reads that file and then follows it. The video presents this as the general pattern for any Claude skill, not something special to this one.

## How a skill runs

The steps in the file run in order. Claude reads the file, works through each step exactly as written, and then returns the result. Nothing runs out of sequence unless a step itself says so. That predictability is part of why a written file is a useful way to hand Claude knowledge it would not otherwise have.

## Built around one company's definitions

What comes out of the process is a skill built around one company's own definitions, not a general-purpose one. If you feed it data or questions outside the context it was given, there is no fallback. It still returns the same output for the same input, but only for what the file actually specifies. This is a limit worth knowing about: the skill is only as good as the definitions written into it, and it does not stretch to cover material outside them.

## Key takeaways

- Claude does not read your company's data automatically.
- The data context extractor skill generates or improves a data analysis skill built around your own data.
- The result is a written file that spells out what your key tables and columns mean.
- A skill is a folder Claude reads before it works, with one plain-language file inside.
- The steps in the file run in order, exactly as written.
- The same input returns the same output, but only for what the file specifies.
- Outside the context it was given, the skill has no fallback.
- You write your own definitions in once, instead of relying on an automatic read of your data.

## Try it yourself

Give Claude a quick rundown of your own data: what your key tables and columns actually mean. Then ask it to turn that rundown into a written skill file, so that every future analysis of your data uses those exact definitions rather than a guess. The video's idea is your own definitions in, once, written down.
