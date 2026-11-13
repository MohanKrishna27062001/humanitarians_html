---
title: "What Is AI Red Teaming | Aishwarya Patil"
seoTitle: "What Is AI Red Teaming and How It Differs From Pen Testing"
description: "Aishwarya Patil explains AI red teaming: its formal definition, how it differs from penetration testing and why a single passing test proves little."
summary: "Humanitarians AI Fellow Aishwarya Patil explains AI red teaming as deliberately attacking an AI system before someone else does. The video covers the 2023 Executive Order definition, why non-deterministic outputs make testing harder, and who already does it."
keywords: ["what is ai red teaming", "ai red teaming vs penetration testing", "red teaming definition executive order ai", "why ai testing is non deterministic", "single passing test is not proof", "external red teaming of language models", "how to red team your own ai system", "testing ai for harmful outputs"]
generated: "article"
---

Red teaming is the practice of deliberately attacking an AI system before someone else does it for real. In this video, Humanitarians AI Fellow Aishwarya Patil explains what the term formally means, how it differs from older security testing, why the nature of AI systems makes it harder, and who is already doing it.

## Why one passing test is not enough

The video starts with the stakes. A single passing test does not mean a vulnerability is fixed. With a real AI system, the same attack can fail once and then succeed the next time on the exact same model. That fact shapes the rest of the discussion, because it changes what a test result is actually evidence of.

## The formal definition

The video cites the 2023 Executive Order on AI, which defines red teaming as structured testing to find flaws and vulnerabilities in an AI system, often in collaboration with the people who built it. Red teamers adopt adversarial methods on purpose. They look for harmful outputs, unexpected behavior and ways the system could be misused. The emphasis is on structure: this is organized testing with a purpose, not casual poking at a chatbot.

## Not old-school penetration testing

Traditional security testing looks for misconfigurations and unpatched code. AI red teaming tests something different. It asks whether a model can be talked into violating its own rules, what it leaks from its training data or its context, and how it behaves once it is wired into real tools with real permissions. The last point is notable, since a model that only produces text carries different risks from one that can act through tools.

## The structural difference: non-deterministic outputs

What makes AI red teaming harder than normal security work is that outputs are non-deterministic. A passing test is only provisional evidence, not proof. As a result, teams have to rerun the same attack and require repeated success before they call something closed. A fix that held once may not hold the next time, so the standard for calling an issue resolved is higher than it would be for ordinary software.

## Who is doing this

The video describes this as already established practice. It says OpenAI has run external red teaming on every major model release since 2022, starting with DALL-E 2, and published public findings for GPT-4, GPT-4 with vision, DALL-E 3, GPT-4o and o1. The point is that red teaming is a documented, ongoing part of releasing major models, not a theoretical idea.

## Key takeaways

- AI red teaming means deliberately attacking an AI system before someone else does.
- The 2023 Executive Order defines it as structured testing to find flaws and vulnerabilities, often with the system's builders.
- Red teamers look for harmful outputs, unexpected behavior and misuse.
- It differs from traditional penetration testing, which looks for misconfigurations and unpatched code.
- It tests whether a model can be talked into breaking its rules, what it leaks, and how it behaves with real tools and permissions.
- Outputs are non-deterministic, so a passing test is only provisional evidence.
- Teams rerun attacks and require repeated success before calling something closed.

## Try it yourself

Before you trust any AI system you have built, try to break it yourself first. Pick one attack, such as talking the system into ignoring one of its own rules, and run it several times rather than once. Record how often it fails and how often it succeeds, since a single clean run proves far less than it seems to.
