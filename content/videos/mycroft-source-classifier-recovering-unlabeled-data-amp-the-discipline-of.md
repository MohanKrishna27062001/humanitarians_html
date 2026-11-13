---
title: "Mycroft Source Classifier: Recovering Unlabeled Data &amp; The Discipline of Refusal"
seoTitle: "Fix an Unknown-Source Bucket Without Mislabeling Data"
description: "How synonym checks recovered 10 of 18 unlabeled items in a source classifier, and why the remaining 8 were deliberately left open to avoid false confidence."
summary: "Sai Pranavi diagnoses 18 items falling into an unknown-source bucket in the Mycroft pipeline. Two feed-agnostic synonym checks recovered 10 without relabeling any correct item, and the other 8 were left open on purpose to avoid guessing from vague text."
keywords: ["fix unknown category in data classifier", "classify news items by regulator", "synonym checks for text classification", "avoid false confidence in classifiers", "when to stop fixing a classifier", "feed agnostic classification rules", "federal register versus google news feed", "partial fix data pipeline honest engineering"]
generated: "article"
---

This video is about 18 real items that kept falling through the Mycroft pipeline's source classifier into a bucket called unknown source. Sai Pranavi describes an honest partial fix: it recovered 10 of the 18 items and deliberately left eight open. The video makes the case that a good fix knows where to stop and says so on the record.

## Why last week's fix did not help

The previous week's fix did not touch these 18 items, because they lacked the field it relied on. That fix worked for Federal Register items, which carry a real issuing agency in their feed data. Google News items do not. They carry a publisher name instead, such as a law firm, and a publisher name says nothing about which regulator the article concerns. With no agency field, the classifier had to fall back to reading the title itself, and it only knew a handful of phrases to look for.

## Reading all 18 titles

Rather than guessing at a rule, she read all 18 real titles. They fell into two groups. In the first, the title simply used a word the classifier did not check for: the word advisor on its own, or the acronym RIA, or Reg BI. In the second, the title named no regulator at all, or named a completely different one. One item was about the UK's Financial Conduct Authority, which this pipeline does not track. Calling that item unknown source is not a bug. It is the correct answer.

## The fix: two feed-agnostic synonym checks

The fix added two synonym checks after the existing rules. One covers advisor-related language, and the other covers broker-dealer and Reg BI language. Because they match on title text, they work regardless of which feed an item came from. Placing them after the existing rules meant they could only catch items the earlier rules had not already labeled.

## The result across five live feeds

She ran the updated classifier against all five live feeds. The unknown-source count dropped from 18 to eight, which means 10 items were recovered. No item that was already correctly labeled got reclassified, which is the check that shows the change did no harm.

## Why the last eight stay open

The remaining eight are not a bug that was missed. They are generic pieces with no named regulator, or pieces about a regulator the pipeline was never built to track. Chasing them would mean guessing from vague text, trading a small real gap for a much bigger risk of mislabeling something with false confidence. She left the gap open on purpose. The video's point is that not every fix should chase 100 percent, and that sometimes the honest engineering call is knowing exactly where to stop.

## Key takeaways

- Items can fall into an unknown bucket because a fix depends on a field that some feeds do not have.
- Federal Register items carry an issuing agency, while Google News items carry only a publisher name, which does not identify the regulator.
- Reading every failing example by hand showed two causes: unrecognized wording and genuinely unclassifiable items.
- Two synonym checks, one for advisor language and one for broker-dealer and Reg BI language, recovered 10 of 18 items.
- Unknown source fell from 18 to eight with zero already-correct items reclassified.
- Leaving the last eight open avoids mislabeling with false confidence.

## Try it yourself

Pick a classifier or sorting rule you maintain and list the items it leaves in its fallback bucket. Read each one and sort them into those that need a new rule and those that genuinely should stay unlabeled. Then, after a change, confirm that nothing already correct was reclassified.
