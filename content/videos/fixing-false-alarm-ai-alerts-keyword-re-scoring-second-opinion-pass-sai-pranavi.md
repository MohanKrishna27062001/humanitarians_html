---
title: "Fixing False Alarm AI Alerts: Keyword Re-Scoring & Second-Opinion Pass | Sai Pranavi Jeedigunta"
seoTitle: "Fix False Alarm Alerts With a Local Second-Opinion Model"
description: "How a keyword scorer flagged routine filings as critical, and how a local small model's second-opinion pass removes the noise without breaking the pipeline."
summary: "Sai Pranavi Jeedigunta explains why a keyword scorer marked a Medicare rule and a NASDAQ filing as critical alerts, and how a locally run second-opinion check holds back the noise. The video is also clear about what the fix does not claim."
keywords: ["why keyword scoring causes false alerts", "reduce false positive alerts with llm", "local small model second opinion check", "keyword scorer flags emergency in title", "safe fallback when model check fails", "test alert filter on sec enforcement case", "emergency medical treatment and labor act false positive", "routine nasdaq filing flagged as critical"]
generated: "article"
---

Sai Pranavi Jeedigunta describes a keyword scorer that was crying wolf. It marked routine filings as critical because of a single word in the title, and a second-opinion pass running locally now catches those cases. The video explains the failure, the fix and, just as clearly, the limits of the fix.

## Two critical alerts that were not urgent

Last month, two real items landed in the pipeline's critical bucket. One was a routine Medicare payment rule. The other was a boilerplate filing about cabinet wiring at NASDAQ. Neither was actually urgent.

## Why the scorer got it wrong

The scorer reads the full text and adds three points the moment it sees the word immediate or emergency in the title, no matter what the word is attached to. The video looks at where the word actually appeared in each case:

- In the Medicare rule, "emergency" came from the Emergency Medical Treatment and Labor Act, which is a law's full legal name.
- In the NASDAQ filing, "immediate" came from "notice of filing and immediate effectiveness," standard boilerplate that every routine rule change uses.

The scorer cannot tell the difference between a real emergency and the title of a law.

## The fix: a local second look

The fix does not touch the original scorer at all. Every item that would trigger an alert gets a second look. A small model running locally on the machine reads the title and asks whether the item is actually urgent or whether the word is just incidental. If the model says the alert would be noise, that one item is held back.

If the model itself fails for any reason, nothing breaks. The item goes through exactly as it would have before the check existed.

## Testing against real cases

The check was tested on the two known false alarms, plus a real enforcement case: an actual SEC insider trading charge. This was meant to confirm that the check does not simply downgrade everything. Both routine filings were flagged as noise, and the real enforcement case was left alone, as it should be.

## What the fix does not claim

The video lists three limits:

- The correction is cautious. It moves these items off critical, but not all the way down to where a person might put them.
- It was tested against two known patterns, not a full benchmark.
- It adds real time. Reviewing everything above the alert line could add several minutes to a single run.

## Key takeaways

- A keyword scorer can mistake a legal name or boilerplate phrase for a real emergency.
- The scorer added three points whenever "immediate" or "emergency" appeared in the title.
- The fix leaves the original scorer unchanged and adds a second-opinion pass.
- A small local model judges whether the keyword is incidental.
- If the model fails, the item proceeds as before, so nothing breaks.
- A real SEC enforcement case was left alone, so the check does not downgrade everything.
- The fix is cautious, lightly tested and slower.

## Try it yourself

Look at the alerts your own keyword-based scorer marks as critical, and find where the trigger word sits in each title. If the word is part of a law's name or standard boilerplate, consider a second-opinion check that holds back only the noise, with a fallback so that a failure lets the item through as before.
