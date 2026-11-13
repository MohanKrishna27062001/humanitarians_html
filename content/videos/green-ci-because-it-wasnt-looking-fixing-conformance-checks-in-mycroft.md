---
title: "Green CI Because It Wasn't Looking: Fixing Conformance Checks in Mycroft"
seoTitle: "Why a Passing CI Check Can Hide Skipped Files"
description: "Uday Sonawane shows how a passing conformance checker skipped 476 Python files, and how path rules, batching and line endings were fixed in Mycroft."
summary: "A conformance checker in the Mycroft repository was green because it was not opening the files that mattered. The video follows the fix from 187 to 743 files checked, plus the speed, Windows and line-ending problems that came with it."
keywords: ["ci check passing but not running", "how to audit a ci conformance checker", "ci exclusion rules skipping files", "windows command line length limit 8191", "batch file paths in ci script", "git line endings normalize repository", "break your ci check on purpose", "verify commit message numbers"]
generated: "article"
---

Uday Sonawane's weekly series on the Mycroft repository returns to a gap noted in the previous episode: there were no tests for the step scripts, and continuous integration ran none of them. The obvious follow-up question was why the repository's conformance checker was passing at all. This episode answers it. The checker was green because it was not opening the files.

## Three questions for any passing check

The video proposes three questions for any automated check that passes. First, what did it actually open? Count the files by type rather than trusting the result. Second, why is each exclusion there: is it excluded for what it is called, or for where it lives? Third, how would you know if it stopped working? Break it on purpose and see whether it says so. The task was to make the checker read the code it claims to check, without making it so slow that nobody runs it.

## What the checker actually opened

The old run opened 187 files and the new one opens 743. The difference is 476 Python files, which make up the executable surface of 99 recipes. Every step script the pipeline runs had been outside the checked set. That meant two pull requests had passed continuous integration without anything compiling a line of their code.

The cause was a base-name rule that skips every directory with a given name anywhere in the repository. Three of the excluded names were fine, but data needed skipping in two places and keeping in two others. The fix splits the rules into a name list for things that are never source, and a prefix list for things excluded by where they sit.

## Speed and the Windows command-line limit

Deleting the entries alone made the check about 11 times slower, from 6 seconds to 63, because it starts one interpreter per file. A check nobody waits for stops being run, so the paths are now batched. Batching has a trap, though. Windows command lines cap at 8,191 characters, not the 32,000 often quoted, so with about 150 paths the process spawn failed. The code then fell back to one file at a time, the speed-up vanished, and everything still passed. Chunks are now kept well under the limit, and the final result checks four times the files and runs faster than before.

## Breaking five things on purpose

To test the third question, five things were deliberately broken. A syntax error appended to a step script was caught and named, and so was a truncated run envelope. No quarantine or private files leaked in. A file named explicitly inside a skipped tree was still checked. The deliberately broken JSON fixtures stayed invisible, as they should, because they are supposed to be broken.

## Recounting the commit message

Episode six set a rule of recounting every figure from the file rather than trusting the commit message. Four figures reproduced exactly: 187, 743, 476, and 99 recipes. One did not. The message said the old run checked zero Python files, but it checked 39, in one subsystem and mostly that subsystem's own tests. No recipe step script was among them, which is the claim that matters, but the headline number was wrong, and it was the speaker's own commit message.

## Line endings and hashes

Recipe reports cite the hash of every script they ran, but Git stored one line ending and checked out another, so a file's hash changed with the machine. Line endings are now pinned repository-wide, with shell scripts forced to the ending that keeps a shebang readable. In all, 2,120 files were normalized, and 250 sampled at random all hash identically to what is committed.

## Key takeaways

- A passing check proves nothing until you know what it opened.
- Count the files checked, by type, and compare with what you believe is covered.
- Name-based exclusion rules can silently skip whole directories; split them into name rules and location rules.
- Removing exclusions without batching made the check about 11 times slower.
- Windows limits command lines to 8,191 characters, so batches must stay well under that.
- Break a check on purpose to confirm it reports failure.
- Recount numbers from the code instead of trusting commit messages.

## Try it yourself

Open whatever check guards your project and make it print what it opened. Do not look at whether it passed, but at the count and the file types. Then compare that against what you believe it covers. The gap is the part nobody is checking.
