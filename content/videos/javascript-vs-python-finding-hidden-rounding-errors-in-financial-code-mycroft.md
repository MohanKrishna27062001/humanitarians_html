---
title: "JavaScript vs Python: Finding Hidden Rounding Errors in Financial Code | Mycroft"
seoTitle: "JavaScript vs Python Rounding Errors When Porting Code"
description: "How a three-match validation process and edge-case test data check that a Python port of financial code agrees with its JavaScript original."
summary: "Tanmay Kulkarni ports a financial contradiction detector from JavaScript to Python and checks that both versions agree. A three-match process, plus edge-case test companies, exposes rounding, threshold and reporting differences before the code goes live."
keywords: ["javascript vs python rounding 0.625", "porting javascript code to python safely", "how to validate a code port", "test javascript and python side by side", "edge case test data boundary values", "javascript python rounding tie difference", "compare human report with machine log", "add never remove shared repository rule"]
generated: "article"
---

Round 0.625 to two decimal places in JavaScript and you get 0.63. Do the same in Python the everyday way and you get 0.62. Same number, same request, two answers. In this walkthrough, Tanmay Kulkarni explains how he checked that a Python rewrite of a finance detector still said the same thing as the JavaScript original, using a method built around three matches.

## The setup: a recipe and a contradiction detector

The work is a contribution to Mycroft, which describes itself as both a book and a working agentic repository for finance. Its recipes are reusable pipelines. He picked one, a contradiction detector, and rewrote its core logic from the original workflow's JavaScript into Python. The detector reads five kinds of evidence about a company: the guidance it gives on earnings calls, the risks it admits, the questions analysts pressed on, news sentiment and engineering activity. Six patterns look for places where two of those disagree, and every disagreement becomes a flag for a person to review. To test it, he invented 16 companies whose names all end in Fixture Co, so no real company is judged.

## Match one: write the expected answers first

The first match is his own reading against the original. Before writing any Python, he went through the JavaScript pattern by pattern and wrote down the flags it should raise for each of the 16 companies, 13 in total. He did this first because if the expected answers are written after the code exists, they tend to copy whatever the code says, mistakes included.

## Match two: run both versions side by side

The second match is the real comparison. A parity check takes the original JavaScript straight out of the workflow file and runs it beside the Python on the same 16 companies, comparing every flag and every sentence of evidence word for word. All 16 agreed. The video then asks the sharper question: a match only means something if a mismatch could have shown up. The known places where the languages differ include the rounding tie, the way a value of 1.0 prints (as 1 in JavaScript and 1.0 in Python), and how a fallback written with two vertical bars treats an empty list. He made the Python copy JavaScript's behavior on each point on purpose.

## Proving the check can fail

To test the comparison itself, he made small changes to his own copy: moving one threshold from 0.6 to 0.61, and swapping in Python's own rounding. The comparison still said everything agreed. The test companies simply never stood on the line. None sat at exactly 0.6, and no news average landed on a tie. So he added two companies built to stand exactly there. Romeo Fixture Co gives guidance at a confidence of exactly 0.6, and Quebec Fixture Co has a news average of exactly 0.625. With the same two changes, each one now fails on the company placed for it. The fix was not new code but better test data.

## Match three: the report against the log

The third match was closer to home, since both sides were his. At the last review he compared the human report with the machine log for a run designed to stop early on bad data. The report said 13 rows were rejected, while the log said zero, because the log was only counting a later step that never ran. Mycroft's own rules say no artifact silently wins. Now one list feeds both files, anything not checked says not checked, and a new test compares the two.

## Limits and the add-never-remove rule

Everything ran on invented data, with no database, news feed or AI model called. Live data, the model's answers and a real service timing out were not tested. At the approval step he declined live mode on the record and wrote down what would need to be true first, since that call belongs to people with live access. In a shared repository he held to one rule: add, never remove. Every change was a new file for this recipe or an update to its own page, plus a few lines added to the end of two shared files.

## Key takeaways

- The same value can round differently in JavaScript and Python, so a port needs deliberate checking.
- Write expected results before the new code exists, so the code cannot shape the answers.
- Run the original and the port side by side and compare output field by field.
- A passing comparison only counts if a mismatch could have appeared.
- Place test cases exactly on thresholds and rounding ties to expose hidden differences.
- Compare human-readable reports with machine logs, since they can tell different stories.
- State plainly what was not tested, such as live data and model answers.

## Try it yourself

Think of something you have rewritten in a new language, tool or cleaner version. Ask where the two versions would most likely disagree, find that one spot, and make sure a single test case is standing exactly on it.
