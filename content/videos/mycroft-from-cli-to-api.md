---
title: "Mycroft: From CLI to API"
seoTitle: "Turn a CLI Agent into a Web API (and a Git Lesson)"
description: "A fellow wraps a patent agent CLI in a FastAPI endpoint, loses an uncommitted file to a git rebase, recovers it and learns to run git status first."
summary: "Humanitarians AI Fellow Aishwarya Patil turns the patent agent CLI into a callable web API that reuses the already-verified Claims and Lineage Agents. A git mistake briefly cost an uncommitted file, and the video explains what went wrong and what protected the work."
keywords: ["turn cli tool into web api", "wrap existing agent logic in fastapi", "why build an http endpoint instead of cli", "git staged file lost after rebase", "run git status before switching branches", "recover uncommitted file after git reset", "git pull diverged branches forced update", "commit new files immediately git habit"]
generated: "article"
---

This video follows Humanitarians AI Fellow Aishwarya Patil as she turns the patent agent command-line tool into a real, callable web API. It also covers a genuine git mistake: one new file went missing after a single git command, not because the code was wrong, but because it had never been committed. The video explains the API design, how the file was recovered and the simple habit that would have avoided the problem.

## Why an API and not just the CLI

The command-line interface works, but only from a terminal. A real HTTP endpoint changes who can use the tool. Any client, whether a browser, a frontend or another service, can ask for a patent reading the same way, without shelling out to Python directly. The API is what makes the patent agent reachable by other software.

## Wrapping the same verified logic

The API does not reimplement anything. It is one route that takes one publication number and calls the same claims agent and lineage agent that had already been tested through the command line, in the same way. A classify flag mirrors the purpose of the CLI's no-classify option, so a caller can skip the one step that always costs something real. Because the logic is shared, the work already done to verify the agents carries over to the new interface.

## The mistake

Midway through the build, a git pull failed because the branches had diverged after a forced update on the remote. Fixing that meant resetting the local main branch and rebasing the work branch on top of it. The rebase succeeded, but the new file did not survive. It had been staged but not committed, and switching branches during the fix wiped it out. Git gave no warning.

## What actually protected the work

The file was not lost for good because the same content still existed locally, outside git, from building and testing it a few minutes earlier. She recreated it, committed it immediately this time, and verified it again against the same two real patents that had already confirmed the command-line version was correct. The recovery depended on a copy outside version control and on re-running a known check, not on git itself.

## A second find while fixing the first

Checking the readme before committing turned up something unrelated. An earlier update documenting the lineage agent's broader testing had never made it into the main branch at all. That documentation gap was fixed in the same pass instead of being left for later.

## Key takeaways

- A command-line tool only works from a terminal; an HTTP endpoint lets browsers, frontends and other services use it.
- The API wraps the already-tested claims and lineage agents instead of reimplementing them.
- A classify flag in the API serves the same purpose as the CLI's no-classify option.
- A staged but uncommitted file can disappear when you switch branches or reset, and git will not warn you.
- Commit new work immediately.
- Re-verify recovered work against the same known test cases.
- Reading the readme before a commit can reveal documentation that never reached the main branch.

## Try it yourself

Before switching branches or resetting anything in git, run git status first and check for files that are staged but not committed. Commit or stash them, and only then change branches. If you have a CLI tool of your own, consider which single function you could expose as one HTTP route while reusing the logic you have already tested.
