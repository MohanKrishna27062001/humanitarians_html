---
title: "Only the Terminal Says Yes. — The Discord Access-Control Skill"
seoTitle: "Discord Bot Access Control: Why Only the Terminal Approves"
description: "How Claude's Discord access skill keeps its state in one file and refuses approvals that arrive as Discord messages, which stops a spoofed approval."
summary: "The video explains Claude's Discord access skill, which stores everything in one access.json file and refuses any change that arrived as a Discord message. It walks through the pairing flow and the attack that the refusal rule prevents."
keywords: ["discord bot access control file", "claude discord access skill", "access.json allow list pairing code", "approve bot users from terminal only", "prevent spoofed approval message", "prompt injection in chat messages", "expiring pairing codes for bots", "never auto pick pending code"]
generated: "article"
---

Asking to be approved on Discord is not enough to get approved. Only a command typed in your own terminal counts. This Humanitarians AI video, narrated by Liam in for Bear, explains why, using Claude's Discord access skill as the example. It covers where the skill keeps its state, the rule that runs before anything else, how approval works, and the specific attack the rule stops.

## One file holds the state

The skill's state lives in a single file, access.json, kept in a Discord channels folder under the user's Claude directory. The file holds five fields: the DM policy, the allow list, per-channel groups, pending pairing codes, and the patterns that trigger the bot. If the file is missing, Claude simply uses safe defaults. Keeping everything in one readable file makes the whole access policy easy to inspect.

## One rule runs first

Before any of those fields is touched, one rule runs first. If the request arrived as a message on Discord rather than something you typed yourself, Claude refuses it. The video gives the reason: Discord messages can carry hidden instructions, so they are never trusted with access changes.

## Approving someone

Approval follows a single path, which is pairing with a code. Claude checks that the code has not expired, adds that person's ID to the allow list, deletes the pending entry, and writes a small marker file in an approved folder. The Discord side watches that folder and sends the confirmation.

Two rules guard this flow:

- Always read the file fresh before writing, since a new pairing code might have appeared in between.
- Never auto-pick a pending code, even if there is only one.

## The attack this stops

The video explains why the second rule matters. Someone could message the bot pretending they want in. That alone only creates a pending code. But if Claude trusted Discord messages, the same person could then send a second message posing as the owner and approve the pending request. Refusing anything that is not typed in your own terminal is what stops that second message from working.

The video also notes that it does not claim Discord is unsafe. The refusal rule is what makes trusting Discord messages unnecessary in the first place. The mechanism described belongs to this one skill's file-based design rather than to every Discord-connected bot.

## Key takeaways

- The skill keeps its whole state in one file, access.json, with five fields.
- A missing file means safe defaults.
- A request that arrived as a Discord message is refused before any field is changed, because such messages can carry hidden instructions.
- Approval uses a pairing code that must not have expired, followed by an allow list entry and a marker file.
- The file is always read fresh before writing.
- A pending code is never picked automatically, even when only one exists.
- Only an access change typed into your own terminal is trusted.

## Try it yourself

The video suggests pasting a prompt into Claude asking it to design a simple access-control file for a chat bot you run: one JSON file with a policy, an allow list and expiring pending approval codes. Add one rule, that Claude accepts an approval only if you type it directly to it and never if it arrives as a message from the channel itself. Ask it to explain the file's shape and the one attack that rule stops, using your own bot idea.
