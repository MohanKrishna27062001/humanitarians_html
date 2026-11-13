---
title: "Claude Status Pages: Snapshot, Not Sensor — What Changed"
seoTitle: "Claude Project Status Page: Snapshot, Not Live Sensor"
description: "Learn how a Claude project status page is built from one config file, why it never updates on its own, and how a refresh finds what changed."
summary: "This video explains a Claude project status page as a snapshot, not a sensor. It has two tabs that are always present, five that appear on demand, and a refresh that computes a change summary only if a saved record of the last version exists."
keywords: ["claude project status page", "ai project status dashboard tutorial", "status page that shows what changed", "claude project artifact tabs explained", "refresh project status with ai", "project status config file sources people", "snapshot vs live project tracking", "build api migration status page"]
generated: "article"
---

Many people assume a project status page watches their data and updates itself. The video says it does not: it waits until you ask. The page it describes is a snapshot, not a sensor, and understanding that distinction explains both how the page is built and how it can tell you exactly what changed.

## Two tabs that are always there

A project page always has two tabs. The Overview tab shows the project name, a status badge, and a one-line summary. The Workstreams tab names the tracks of work along with their status, owner, and dates.

## Five tabs that appear only when needed

Five more tabs exist, but each appears only when there is something to put in it:

- Attention, for blockers that need a decision now.
- Background, for context that would clutter the overview.
- Plan, for what is coming.
- Risks and open questions.
- Decisions and FAQ, for choices already made and why.

## One config file in four parts

All of the page comes from one config file with four parts. Project holds the name and a running summary. Sources list exactly what to read before writing a single tab, such as documents, data, or anything live, and everything is gathered before any tab is written. People list who owns what. The fourth part is a saved record: every time the page is published, a block of stored data is tucked inside the page itself, recording exactly what was shown. That stored block is what makes the next update possible without starting from nothing.

## Nothing updates on its own

The part that surprises people is that the page does not watch your data. It waits, and you have to ask for a refresh. When you do, it looks for the stored block from last time. If the block is there, the page compares old to new and shows only what changed. If it is not, because the page was never saved or was deleted, there is nothing to compare against. The whole page is then rebuilt from scratch with no change summary at all.

## Scope of the claims

The video limits its claims. The delta-versus-rebuild behavior is a property of this specific skill's design, not a claim that every status page works this way. It also leaves out details about the tool's account requirements and where the config file is stored.

## Key takeaways

- A project status page is a snapshot, not a sensor; it never watches data on its own.
- Overview and Workstreams are always present; five other tabs appear only when there is content for them.
- One config file has four parts: project, sources, people, and a stored record saved with the page.
- Sources are read in full before any tab is written.
- Every publish saves a block of data inside the page recording what was shown.
- A refresh with that block present shows only what changed.
- A refresh with the block missing rebuilds the whole page and gives no change summary.

## Try it yourself

Ask Claude to build a project status page for an API migration with workstreams, an open risk, and a decisions log. Once built, ask for a refresh without changing anything and see whether it says nothing changed or silently rewrites the whole page. Then close out that risk and refresh again. Does it call out exactly that change, or act as if it is starting from zero? That is the test of whether the page remembers. Use your own project rather than the video's example.
