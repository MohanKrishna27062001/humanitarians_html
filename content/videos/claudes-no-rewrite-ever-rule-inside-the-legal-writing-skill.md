---
title: "Claude's \"No Rewrite, Ever\" Rule: Inside the Legal Writing Skill"
seoTitle: "Claude Legal Writing Skill: Feedback Without Rewriting"
description: "See how Claude's legal-writing skill gives top-down structural feedback on a law memo, flags rules to verify, and refuses to rewrite your draft."
summary: "A skill is a folder with one file, SKILL.md, that Claude reads before it works. The legal-writing skill has one hard rule, no rewriting, so it acts as a harsher reader of your memo rather than a ghostwriter for it."
keywords: ["claude legal writing skill explained", "ai feedback on legal memo", "claude skill md file explained", "ai writing coach for law students", "how to get structural feedback on memo", "claude refuses to rewrite my draft", "negligence memo feedback with ai", "ai flags legal rules to verify"]
generated: "article"
---

Ask Claude for feedback on a legal memo and it is easy to hear that as a request to fix the memo. The legal-writing skill does not work that way. A skill is just a folder with one file, SKILL.md, that Claude reads before it starts working, and this one has a hard rule written into it: no rewriting, ever. The video walks through what the skill does instead.

## The naive framing: "Claude, fix my legal memo"

The video starts from a common assumption. Someone pastes in a draft and asks for feedback, and it sounds like a fix-it request: hand over the memo, get back a better one. The skill is built to break that expectation. It is a feedback skill for law-student writing, and its job is to judge the draft, not to produce a replacement for it.

## What happens when you ask for a rewrite anyway

The video shows the rule being tested with a case. Ask Claude to rewrite your draft and it refuses. It then offers three alternatives: structural feedback, one labeled example, or a drill on the underlying rule. The example is generic and marked as a model, not as your text, so there is nothing to copy straight into the memo. The sentence, as the video puts it, still has to come from you.

## Reading the whole draft first

The running example is a first-year law student's negligence memo about a car crash. Before Claude says anything, it reads the entire draft from top to bottom. It also names what the document actually is: a memo, a brief, a paper, or an exam essay. That classification matters because the feedback depends on what kind of document it is.

## Feedback runs top-down

Once it has read the draft, the feedback follows a fixed order. The first question is whether the structure is right. The second is whether the analysis connects the rule to the facts. Only after those does it move to clarity and citation. The video is explicit that the skill never does sentence-level polish before the structure is fixed, since polishing sentences in a badly organized memo is wasted effort. On the negligence memo, it might report that the structure runs backwards and flag one rule to double-check, but it still will not write the corrected paragraph.

## Confident on form, not on law

The skill separates two kinds of confidence. On structure, Claude is confident, because good writing is good writing. On whether the negligence rule itself is stated correctly, it will not guess. Instead it flags the point as VERIFY and leaves the legal call to the human. The video draws a two-way lesson from this. A confident structural note does not prove the law inside the paragraph is right, and a VERIFY flag does not mean the structure is fine. Both can be broken in the same paragraph.

## Why the rule exists

The purpose of the no-rewrite rule is to make Claude a harsher reader of your memo and never its ghostwriter. A student who receives a rewritten paragraph has not learned why the original was weak. Feedback that says what is weak and why leaves the learning, and the authorship, with the writer.

## Key takeaways

- A skill is a folder containing one file, SKILL.md, that Claude reads before it works.
- The legal-writing skill's hard rule is no rewriting, ever; if asked, it refuses.
- Instead of rewriting, it offers structural feedback, one labeled example, or a drill on the underlying rule.
- It reads the whole draft first and names the document type: memo, brief, paper, or exam essay.
- Feedback runs top-down: structure, then rule-to-fact analysis, then clarity and citation.
- On legal substance it does not guess; it flags VERIFY and leaves the call to you.
- A confident structural note does not prove the law is right, and a VERIFY flag does not prove the structure is sound.

## Try it yourself

Take something you are actually drafting and paste this into Claude: "I'm drafting a memo. Read the legal-writing skill and give me structural feedback — organization, analysis depth, clarity, citation. Don't rewrite any of it: tell me what's weak and why, and flag anything you're not certain is legally correct." Then check the result: did it rewrite a single sentence, or did it only tell you what is weak?
