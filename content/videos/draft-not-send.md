---
title: "Draft, Not Send"
seoTitle: "Claude Handle Complaint Skill: Drafts a Reply, Does Not Send"
description: "See how Claude's handle-complaint skill drafts a response and suggests an operational fix, while sending the reply and making the fix stay with you."
summary: "This video explains Claude's handle-complaint skill, a single plain-language SKILL.md file. It pulls context, drafts a response and suggests a fix in the same way every time, but it never sends the reply or carries out the fix."
keywords: ["claude handle complaint skill explained", "how to draft reply to angry customer", "ai draft customer complaint response", "claude skill drafts but does not send", "what is a claude skill file", "claude skill steps run in order", "suggest operational fix from customer complaint", "ask claude to explain before acting"]
generated: "article"
---

Handling a customer complaint with an AI assistant raises an obvious worry: will Claude send the reply on its own? This video explains that the handle-complaint skill does not. It drafts a response and suggests a fix, and the sending and the fixing remain yours. The video uses the skill to show how a Claude skill is built and what that means for its limits.

## The assumption that Claude sends the reply

The video opens with a common assumption: handling a complaint means Claude sends the reply itself. It does not. It drafts a response and suggests a fix. The question the video poses is a practical one: how do you get Claude to draft a reply to an angry customer?

## A folder, not a program

The answer starts with what a skill is. A skill is a folder Claude reads before it works. This one is handle-complaint, and it is a single SKILL.md file of about two kilobytes. That one file is the whole instruction set, written in plain language, with no hidden logic underneath. Claude reads it and then acts on what it says. In the video's phrase, the file is the program.

## What the skill is asked to do

The video quotes the job description word for word. The skill pulls context on the complaint, drafts a response, and suggests an operational fix. It can take an optional email or ticket ID as input. Once the skill is triggered, Claude reads the Steps section and runs each step in order. The process is linear, with no branching unless a step says so.

## Drafts and suggests, not sends

Claude's role here is to draft the reply and suggest the fix. It is not to send anything, and it is not to make the fix itself. Run the same complaint through twice and you get the same kind of response and the same kind of fix each time.

The skill also covers only what the file says. Anything the SKILL.md does not specify is outside what this skill does. So handle-complaint does not resolve a complaint. It drafts a response and suggests a fix in the same way every time. Sending the reply and making the fix are still yours to do.

## Seeing the proposal before it happens

The video ends with a habit worth adopting. Before Claude acts, ask it to read the handle-complaint skill and walk you through what it will do. The video explains that having Claude explain itself first is how you actually see the draft and the fix it is proposing, not just the result.

## Key takeaways

- Handle-complaint drafts a response and suggests an operational fix.
- It does not send the reply, and it does not make the fix itself.
- The skill is a single SKILL.md file, about two kilobytes, in plain language.
- It pulls context on the complaint and can take an optional email or ticket ID.
- Claude runs the Steps section in order, with no branching unless a step says so.
- The same complaint produces the same kind of response and fix each time.
- Anything the file does not specify is outside what the skill does.

## Try it yourself

Pick a customer complaint you are actually looking at, not the video's example, and paste this into Claude: you want to handle an incoming customer complaint, so read the handle-complaint skill and walk you through what it will do before it does it. Review the drafted reply and the suggested fix, and then send the reply and make the fix yourself.
