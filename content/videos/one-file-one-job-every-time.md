---
title: "One File, One Job, Every Time."
seoTitle: "What Is a Claude Skill? A SKILL.md File Doing One Job"
description: "A look at what a Claude skill really is, using the design-mcp-workflow skill for Zoom MCP versus REST as a concrete example."
summary: "The video argues that a Claude skill is not a new ability but a folder with a plain-language SKILL.md file that Claude reads and then follows step by step. It uses the design-mcp-workflow skill, which is scoped to three Zoom MCP moments, as its example."
keywords: ["what is a claude skill", "how claude reads a skill.md file", "claude skill steps section explained", "zoom mcp vs rest api decision", "design mcp workflow skill", "does a skill give claude new abilities", "claude skill scope and limits", "plan before action with claude skills"]
generated: "article"
---

Claude did not get a new ability when you add a skill. That is the starting point of this Humanitarians AI video, narrated by Liam in for Bear. It treats a skill as something much more ordinary: a file Claude reads before it works. To make that concrete, the video opens one real skill, called design-mcp-workflow, and looks at what it contains and what it covers.

## A skill is a folder Claude reads

A Claude skill is a folder that Claude reads before it begins a task. Inside it sits a SKILL.md file, which holds the full instruction set in plain language, with nothing hidden. Claude reads the file and then acts. The video's phrase for this is that the file is the program.

This changes how a skill should be understood. It is not a hidden capability being switched on. Everything the skill will cause Claude to do is written down in a document that a person can open and read.

## How Claude runs the steps

The instructions live in a Steps section. Claude reads each step in order and runs it from start to finish, with no branching unless a step itself says otherwise. This is a predictable pattern: if you know the contents of the Steps section, you know what Claude will do.

## One specific decision

The skill used as the example has one job: design a Zoom MCP workflow for Claude. It is written for three named moments:

- Deciding whether Zoom's MCP tools fit a task.
- Planning a tool-based AI workflow.
- Separating MCP responsibilities from Zoom's REST API.

Outside those three moments, the video points out, the file has nothing to say. A skill is bounded by what its file actually covers. It does not become a general Zoom expert, and it does not make claims beyond its own scope.

## Why the same input gives the same output

Because the skill is a fixed set of written steps, the same input produces the same output each time you run it, and only for what the file covers. The video sums this up as: a skill is not a new general ability, it is one file doing one job.

The video is also careful about its own limits. The mechanism it describes, reading the file, executing steps in order, and staying within three named moments, belongs to this particular skill's design. It does not claim to describe the internal structure of every Claude skill, nor how Claude chooses between MCP and REST in general.

## Key takeaways

- A Claude skill is a folder Claude reads before it works, not a new ability.
- The SKILL.md file holds the whole instruction set in plain language, with nothing hidden.
- Claude reads the file, then acts, running each step in the Steps section in order.
- There is no branching unless a step says there is.
- The design-mcp-workflow skill has one job: designing a Zoom MCP workflow for Claude.
- It applies to three moments: whether MCP tools fit a task, planning a tool-based workflow, and separating MCP from REST responsibilities.
- Outside its scope the file says nothing, and the same input gives the same output.

## Try it yourself

The video suggests pasting a prompt into Claude: you need to decide whether to use Zoom's MCP tools or its REST API for a task, and you want Claude to walk through how it would design that workflow and explain what it is about to do before it does it. Seeing the plan come first, the video says, is how you actually see a skill's scope, not just its description. Use your own MCP-versus-REST decision rather than the video's example.
