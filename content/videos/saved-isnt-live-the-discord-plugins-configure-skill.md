---
title: "Saved Isn't Live: the Discord Plugin's Configure Skill"
seoTitle: "Discord Plugin Configure Skill: Saved Token Isn't Live"
description: "Learn how the Discord plugin's configure skill handles tokens and access policy, why a saved token needs a restart, and why it never validates input."
summary: "The video explains the Discord plugin's configure skill, which has three modes and two files. A new bot token only takes effect after a restart, while access policy changes apply on the next message, and the skill never checks that a pasted token looks real."
keywords: ["discord plugin configure skill explained", "saved discord bot token not working", "restart session after saving bot token", "discord bot access policy allowlist", "claude code discord plugin setup", "configure skill status no arguments", "credential file read once at startup", "discord pairing then lock down allowlist"]
generated: "article"
---

Saving a fresh Discord bot token does not make it live right away. This short video explains why, using the Discord plugin's configure skill as the example. The credential file is read only once, when the session starts, so a saved token and a running token are not the same thing. The video also covers how the skill locks down access and a gap in what it checks.

## Three modes, two files

The configure skill reads whatever argument you give it:

- With no arguments, it shows status. It reads both files and tells you whether a token is set, what the access policy is, who is already paired, and gives you one concrete next step.
- With a token, it trims stray whitespace, creates the channel folder if it is missing, updates the credential file without disturbing anything else already in it, and locks that file to owner read only.
- With the word `clear`, it deletes the token line, or the whole file if the token was all there was.

Two files carry all of this. The credential file holds the token and is read once, when the session starts. The access file holds the policy and is read again on every single incoming message.

## Restart for the token, nothing for the policy

This difference is the central point. Save a new token and it does not take effect until you restart the session. Update the allowlist, though, and it is live on your very next message. If you skip the restart after saving a token, you will think you are running the new one when you are not.

## The lockdown rule

The skill's rule is explicit: always push toward an allowlist, and never let pairing become permanent. Pairing exists only to capture the Discord ID you do not know yet. Once everyone you want has been captured, the skill offers to flip the switch to an allowlist itself, without waiting to be asked.

## No validation

The gap the video highlights is that the skill never checks that what you paste actually looks like a token. There is no length check and no format check. Paste a grocery list and it is written to the credential file exactly as a real token would be. The skill trusts you completely at the one moment it probably should not.

## Key takeaways

- A saved token is not a live token; the credential file is read once at session start.
- Restart the session after saving a new token.
- The access policy file is re-read on every incoming message, so policy changes apply immediately.
- No arguments shows status, a token argument saves it, and `clear` removes it.
- The credential file is locked to owner read only.
- Pairing is only for capturing unknown Discord IDs; the skill pushes toward an allowlist.
- The skill does no format or length validation on the token.

## Try it yourself

Open a Claude Code session with the Discord configure skill and paste an obviously fake token, such as `not-a-real-token`. Watch two things. Does it save that string without any complaint? And after you tell it your allowlist is complete, does it offer to lock down access itself, or does it wait for you to ask? Run it on your own bot setup rather than a made-up one.
