---
title: "Claude Slash Commands: Written for Claude, Not for You"
seoTitle: "How to Write Claude Slash Commands: A Directive to Claude"
description: "Learn that a Claude slash command body is a directive to Claude, plus where commands live, which frontmatter fields exist, and how arguments work."
summary: "This video explains that a slash command is a Markdown file whose body instructs Claude rather than speaking to the user. It covers the three command locations, the five frontmatter fields, argument handling, file references, and one gap in the guide."
keywords: ["how to write claude slash commands", "claude command markdown yaml frontmatter", "project vs personal vs plugin commands", "claude arguments dollar one dollar two", "claude command file reference at sign", "claude plugin root portable paths", "disable model invocation claude command", "claude commands now legacy skills"]
generated: "article"
---

The video starts from a common assumption: that the body of a slash command describes what will happen to the user. It does not. A slash command is a Markdown file with YAML frontmatter, and its body is a directive to Claude, not a message to the user. Getting that direction right changes how the command behaves.

## Write for Claude

The opening question is whether you are writing a command body for the user or for Claude. The video's answer is Claude. The words that matter tell Claude what to do, not what you will see happen. A body that merely describes an outcome to the person typing the command misses the point of the file.

## Three places commands live

Commands can live in three locations:

- Project commands, shared with the team and available only in that project.
- Personal commands, available in every project.
- Plugin commands, bundled with an installed plugin.

## Five frontmatter fields

The frontmatter carries five fields: description, allowed-tools, model, argument-hint, and disable-model-invocation. The video's "Deliberately not claimed" notes make clear that these five are the full set the format supports, not a checklist every command must fill in.

## Two ways to take arguments

Arguments come in two forms. The dollar-ARGUMENTS variable captures everything typed after the command as one string. Dollar-1, dollar-2, and so on capture individual pieces, for example a PR number followed by a priority level.

## Reading files with the at sign

An at sign reads a file. Used with dollar-1, it opens whatever path the argument names. A static reference, such as a package.json, embeds a known file every time with no argument needed.

## Plugin commands and portable paths

Plugin commands get one more tool. CLAUDE_PLUGIN_ROOT resolves to the plugin's own folder, so a command can point at its own scripts without a hard-coded path.

## A note on status and one gap

The video relays a note from the skill itself: this whole file format is now considered legacy, and new work is pointed toward a skill file instead.

It then names one gap. A command can run a shell command inline before Claude sees the rest of the body. An exclamation mark followed by backticks can pull in something like the current git diff automatically. The video calls this the most useful dynamic trick available, yet the guide that teaches command writing does not show it inline and pushes it into a separate reference file.

## Key takeaways

- A slash command is a Markdown file with YAML frontmatter, and its body is a directive to Claude.
- Commands live in project, personal, or plugin locations, with different sharing scope.
- The five frontmatter fields are description, allowed-tools, model, argument-hint, and disable-model-invocation.
- Dollar-ARGUMENTS gives all the text as one string; dollar-1 and dollar-2 give individual pieces.
- The at sign reads a file, either a static one or one named by an argument.
- CLAUDE_PLUGIN_ROOT lets plugin commands refer to their own folder without hard-coded paths.
- Inline shell execution, written as an exclamation mark and backticks, can pull in live output such as a git diff but is not shown inline in the guide.
- The command file format is described as legacy, with skills as the newer direction.

## Try it yourself

In a Claude Code session, ask Claude to create a slash command called review-pr that takes a PR number as an argument, reads the changed files, and reviews them for code quality. Then check four things. Does the body tell Claude what to do? Does it use dollar-ARGUMENTS or dollar-1 with argument-hint set? Does it use allowed-tools to restrict what it can touch? And if you ask for inline bash execution to pull the PR diff, does it show the syntax or send you to a reference file? Use your own plugin idea.
