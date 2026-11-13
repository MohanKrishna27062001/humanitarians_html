---
title: "Claude Slash Commands: Right Format, No Function"
seoTitle: "Claude Slash Command Format: Five Fields and $ARGUMENTS"
description: "Learn the five fields of a Claude slash command file, what $ARGUMENTS holds, and why a correctly formatted file can still do nothing."
summary: "This video walks through the five frontmatter fields of a Claude slash command and the ARGUMENTS slot. It shows that matching the format gives only the scaffold, because the reference file produces a template until you write the actual work."
keywords: ["how to write a claude slash command", "claude slash command file format", "what is $arguments in claude", "claude command frontmatter fields", "argument hint and allowed tools", "claude command parse perform report", "claude slash command not working", "legacy commands folder claude plugin"]
generated: "article"
---

A newcomer building a first slash command often expects that dropping the right file into place means the command already works. The video shows it does not. The reference example that ships with Claude's plugins is a template, not a working command, so the real question becomes what actually makes a slash command run.

## What you want from a slash command

The goal is a shortcut: type a slash and a name, maybe a word or two after it, and have Claude do the same specific thing the same way every time. It is easy to assume that once a file exists with the right name and setup, the command already does something. The video calls this the guess most people make when building their first command.

## Running the reference file

To test the guess, the video runs the reference example that ships with Claude's plugins. What comes back is a plain template: parse the input, perform the action, report the result. No folder is created, no file is touched, and no action is taken.

## The five fields

The top of the file holds five pieces of setup in one short block of text:

- A name.
- A description.
- An argument hint.
- A list of allowed tools.
- A model choice.

## The slot that matters most: ARGUMENTS

Whatever you type after the command's name lands, word for word, in a single spot inside the file, a slot called ARGUMENTS. The video's example is typing a greet command followed by a name: the name shows up in that slot exactly as typed. Nothing uses it automatically, though. That part you still write yourself.

## What the other fields do

The argument hint is the reminder text a user sees next to the command's name before typing anything, showing the kind of input expected. Allowed tools pre-approves a specific list of tools for this one command, so Claude can use them without asking permission each time, but only for this command. The model field lets the command run on a different model than your default conversation, a faster one for something simple or a stronger one for something needing more reasoning.

## The body pattern and the legacy layout

The body follows a three-step shape: parse whatever arrived in ARGUMENTS, perform the actual work, then report what happened. The video notes that this shape is the reference file's own choice, not a rule Claude enforces elsewhere, and that in the reference file the shape is described rather than carried out. There is also an older single-file layout, a commands folder with name.md, which loads exactly the same way. Only the location differs.

## Format is not proof, and optional is not broken

The video closes with two directions. Matching the format perfectly does not prove the command does anything real; the reference file matches it exactly and still produces only the template. And skipping an optional field does not mean the command is broken: leave out the argument hint and the command still runs, but users will not see that hint before typing.

## Key takeaways

- The reference slash command file is a template, not a working command.
- A command's setup is five fields: name, description, argument hint, allowed tools, and model.
- Whatever you type after the command name goes into the ARGUMENTS slot exactly as typed.
- The argument hint shows expected input before the user types.
- Allowed tools pre-approves tools for that one command only.
- The model field can run one command on a faster or stronger model than the default.
- Parse, perform, and report is this file's own pattern; the parse step is described, but the work is yours to write.
- Matching the format gives the shape, and what happens on running it is still yours to write.

## Try it yourself

Ask Claude to build a real slash command called word-count that takes a file path as its required argument, counts the words in that file, and reports the total. Have it show the exact file it would write, then explain in plain terms what ARGUMENTS contains the moment you run it. Try this on your own command idea rather than the video's example.
