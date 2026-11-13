---
title: "Claude Skills Explained: XLSX | Spreadsheet Automation vs. Real Data Accuracy"
seoTitle: "Claude XLSX Skill: Spreadsheet Formulas vs Accuracy"
description: "Learn how Claude's XLSX skill builds Excel files with live formulas and an error scan, and why a clean scan still does not prove the numbers are right."
summary: "This video explains how Claude's XLSX skill builds spreadsheets: pandas or openpyxl, real formulas instead of typed numbers, and a recalculation check. It also shows what that check cannot catch: a formula that points at the wrong cell."
keywords: ["claude xlsx skill explained", "how claude builds excel spreadsheets", "excel formulas instead of hardcoded values", "check spreadsheet for formula errors", "pandas vs openpyxl for excel", "financial model color coding excel", "build revenue model with claude", "verify ai generated spreadsheet accuracy"]
generated: "article"
---

When Claude picks up a skill called XLSX, it does not suddenly understand spreadsheets or gain the ability to guarantee an accurate financial model. The video explains that a skill is a structured workflow for creating, editing, and validating Excel files, and it separates two things people tend to blur together: generating a spreadsheet and verifying that its contents are correct. A workbook can open without a single visible error and still lead to the wrong business decision.

## Two tools, chosen by whether you need a formula

The XLSX skill splits the work between two Python libraries. Pandas handles data analysis, bulk operations, and simple export, with no formulas involved. Openpyxl (spoken in the captions as "open pixel") handles formulas, formatting, and every Excel-specific feature. Which one Claude reaches for depends entirely on whether the task needs a real formula.

The video anchors this with a running example: a three-year revenue model where a growth-rate assumption drives a computed total for each year. That model returns later to show how the rules play out in practice.

## The one absolute rule: write the formula, not the number

The natural guess is that once a total has been computed in Python, you can type the number straight into the cell, since it is the same number either way. The skill says otherwise. Its one absolute rule is never to calculate a value in Python and hard-code it. Instead, Claude writes the actual Excel formula, such as a SUM over a range, so the sheet stays dynamic and updates when an input changes.

The workflow has six steps: choose pandas or openpyxl, create or load the workbook, modify it, add data, write formulas, apply formatting, and then save. If any formulas were written, one more step is mandatory.

## The recalculation check

That mandatory step is a script called recalc.py. It opens the file in LibreOffice, which must already be installed, and recalculates every formula. It then scans for all four Excel error types: ref, div0, value, and name. The result comes back as JSON with the exact cell address of each error, so problems are flagged by location before the file ever ships.

## A color code for financial models

The skill follows a standard for financial models:

- Blue text marks a hard-coded input, a number someone might change.
- Black text marks every formula.
- Green text marks a link pulling from another sheet in the same workbook.
- Red text marks a link to an external file.
- A yellow background marks a key assumption.

Numbers follow their own format too: negatives appear in parentheses rather than with a minus sign, and zero shows as a dash. Back in the revenue model, the yearly total is not typed anywhere. It is a live formula, the growth rate times the prior year's revenue, colored black because it is a formula. The growth rate itself sits in blue because it is the input someone can change.

## What the check cannot catch

When the process works, it catches exactly what it was built to catch. Run the recalculation script and any of the four error types is flagged by cell address. The limit is that a formula can point at the wrong cell entirely and never throw an error. The video gives one reason this happens: a data frame's row n lands one row lower in Excel, at row n plus one. The script can find a formula that is broken, but it cannot find one that is simply wrong.

That is why the video treats a skill as a specification rather than new analytical judgment. The payoff is a repeatable process for building and checking spreadsheets. The limit is that formula validation does not guarantee the underlying assumptions, business logic, or calculations are meaningful.

## Key takeaways

- A skill gives Claude a workflow for spreadsheets, not new analytical judgment.
- Pandas covers analysis, bulk operations, and simple export; openpyxl covers formulas, formatting, and Excel-specific features.
- The skill's absolute rule is to write the Excel formula, never a number calculated in Python and pasted in.
- After writing any formulas, the recalculation script must run; it checks for ref, div0, value, and name errors and reports cell addresses as JSON.
- The financial model color code uses blue for inputs, black for formulas, green for same-workbook links, red for external links, and yellow for key assumptions.
- A clean error scan proves the formulas did not break; it does not prove they point at the right cells.
- A spreadsheet can look professional, run without errors, and still support the wrong decision.

## Try it yourself

Ask Claude to build a three-year SaaS revenue model with a growth-rate assumption and a computed revenue total each year, delivered as an XLSX file using the XLSX skill. Then watch two things: whether it writes a real formula for the total instead of a hard-coded number, and whether it runs the recalculation script and reads the JSON result before calling the work done. Afterward, change one input value and check that the dependent calculations update correctly.
