---
title: "Feedback Before The Commit."
seoTitle: "How the Submit-Solution Skill Asks Questions Before Git"
description: "See how the submit-solution skill collects workshop feedback before it commits, so one pull request carries both the code summary and the feedback."
summary: "The video looks at a skill that helps a workshop attendee submit a solution as a pull request. It asks three feedback questions before touching git, so the PR doubles as the form facilitators read to shape the next workshop."
keywords: ["claude skill to submit workshop solution", "what is a skill md file claude", "pull request description with feedback section", "claude asks questions before git commit", "empty git diff means wrong file edited", "claude skill fixed order of steps", "workshop feedback in pull request", "how claude skills read before they act"]
generated: "article"
---

Asking whether Claude just commits a workshop attendee's solution and opens a pull request suggests an easy answer: it is a git task, full stop. The video says that is not quite right. The submit-solution skill is built so that the first step has nothing to do with git, and that ordering is what makes it a feedback task dressed as a git task.

## What the skill is

A skill is a folder that Claude reads before it acts. This one is for a workshop attendee who is wrapping up the stock pilot exercise. Inside are five steps that always run in the same order: ask about the attendee's experience, show the diff, commit and push, open the pull request, and confirm. The SKILL.md file fixes that order, so Claude does not skip ahead to committing.

## Three questions come first

Step one happens before any git command. Claude asks three questions:

- Which subagent approach did you use for cycle three: a callable agent, a spawned subagent, inline, or something else?
- What was the hardest part of the workshop?
- What is one thing you would change?

Only after those answers does Claude look at the diff.

## What an empty diff means

The video points out that an empty diff does not mean the attendee is finished. It usually means they edited a different file, so Claude asks rather than assumes. A full diff does not mean the pull request opens yet either, because the feedback still has to be collected first.

## One document, two sections

The PR body that Claude writes carries two things in one document. The first is the technical summary: the subagent approach, the eval score, the tools dropped and the skills enabled. The second is the workshop feedback, placed right below it.

That is what makes the task a feedback task. The same pull request that facilitators read for the code is the form they read for what to fix in the next workshop. If the questions are skipped, the commit still happens, but the second half of the document stays blank every time.

## Key takeaways

- Submitting a workshop solution is not only a git task.
- The skill fixes five steps in order: ask, show the diff, commit and push, open the PR, confirm.
- Claude asks three questions before it runs any git command.
- An empty diff usually points to an edit in a different file, so Claude asks.
- The PR body holds a code summary and the attendee's feedback together.
- Facilitators use the PR as the form that shapes the next workshop.

## Try it yourself

After you finish a coding exercise, paste this into Claude: you want to submit your solution as a pull request, and before it touches git it should ask what approach you used, what was hardest and what you would change. Then ask it to show the diff and write a PR description with two sections, your code summary and your feedback. Notice which questions come before the commit and which come after.
