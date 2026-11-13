---
title: "Claude Session Report: Claude Didn't Do the Counting"
seoTitle: "Claude Session Report Skill: A Script Does the Counting"
description: "The session-report skill gives exact token and cache numbers because a bundled script counts them, while Claude only reads and explains the results."
summary: "A report on your Claude Code sessions looks like Claude counted every token, but a bundled script does the counting and writes one file before Claude opens anything. Claude's job is reading that file and explaining what matters."
keywords: ["claude code session report skill", "claude code token usage report", "who counts tokens in claude code", "analyze claude code session history", "session report script json file", "claude skill bundled script explained", "claude code cache and subagent usage", "claude explains numbers from script"]
generated: "article"
---

You might guess that a Claude session report works because Claude reads your session logs and counts every token itself. The video says it does not. A bundled script does the counting, and Claude's job begins only after that script has written its answer.

## The tempting picture

The session-report skill sounds like Claude read through your logs and tallied every number itself: tokens, cache hits, subagent calls, all counted in its head. The video sets this up as the naive framing and then tests it.

## Delete the script and the report is gone

The test is simple. Delete `analyze-sessions.mjs` from the skill folder and the report does not merely get worse. It cannot run at all. There is no other way inside the skill to get those numbers, because Claude was never the one counting them.

## The middleman file

The script `analyze-sessions.mjs` reads your raw session data and writes one answer to `/tmp/session_report.json` before Claude ever opens a report. That file is the middleman, holding the already-computed answer.

The skill contains three files: the script, a `SKILL.md`, and `template.html`.

## What Claude actually does

Claude's real job starts after the JSON file exists. It reads the file, skims the totals, which cover overall usage, usage by project, by subagent, and by skill, and decides what is worth explaining.

The report's moving parts, such as sorting a table, expanding a row, and drawing a bar out of characters, are already live in the template file Claude copies in. So Claude's work is the numbers and the narrative, not the sorting code. The JSON file written by the script is still sitting inside the finished report untouched, and every number on the page traces back to it rather than to Claude's reasoning.

## Neither direction is proof

The video closes with two caveats. A report that looks right does not prove Claude read every line of your session logs, since it read one script's summary. And a report that is wrong does not prove Claude reasoned badly, because the script may have computed something you did not expect and Claude relayed it faithfully.

## Key takeaways

- A bundled script, not Claude, counts the tokens, cache hits, and subagent calls.
- The script reads raw session data and writes one computed answer before Claude opens a report.
- Without `analyze-sessions.mjs`, the report cannot run at all.
- Claude reads the JSON, skims the totals, and decides what is worth explaining.
- The template already handles sorting, expanding rows, and bars, so Claude writes words, not markup.
- Every number on the page traces back to the script's file.
- A correct-looking report does not prove Claude read every log line, and a wrong one does not prove bad reasoning.

## Try it yourself

Ask Claude to run the session-report skill on your own Claude Code sessions, covering tokens, cache, subagents, skills, and the priciest prompts. Tell it to read the skill first and walk you through exactly what it will do before it does it. Run it against your own session history, not the video's example.
