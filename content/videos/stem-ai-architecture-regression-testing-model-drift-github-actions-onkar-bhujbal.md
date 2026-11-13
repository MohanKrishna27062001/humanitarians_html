---
title: "STEM & AI Architecture | Regression Testing, Model Drift & GitHub Actions | Onkar Bhujbal"
seoTitle: "Regression Testing for AI Apps With GitHub Actions"
description: "Why AI pipelines silently degrade when model behavior changes, and how continuous integration with GitHub Actions can block unsafe merges."
summary: "Onkar Bhujbal explains why AI applications can break without any code change, since model versions, system prompts, or upstream data can shift. His answer is to test the deterministic guardrails around the model and let a CI pipeline block bad merges."
keywords: ["regression testing for ai applications", "why ai pipelines silently degrade", "model drift without code changes", "test parsers and normalizers for llm", "github actions continuous integration for ai", "how ci blocks unsafe pull requests", "deterministic guardrails around llm", "testing ai fail safe mechanisms"]
generated: "article"
---

In traditional software, a function that adds two numbers today will still add them tomorrow. Onkar Bhujbal's video explains why that comfort disappears once an application is wrapped around a large language model, and what a team can still test with confidence. The summary line is that you cannot test what a model will say, but you can test everything you built around it.

## Why AI pipelines silently degrade

When an application depends on a language model, a change in model version, a rewritten system prompt, or a shift in upstream data can break downstream architecture without anyone touching the code. The code is static, while AI inference is dynamic. That gap is the regression problem the video describes: behavior changes even though the repository did not.

## Test the guardrails, not the output

Testing AI is fundamentally different from testing standard code, because you cannot assert that a model's output will match a hardcoded string. Instead, the video tests the deterministic components that surround the model. Continuous integration for AI means continuously testing your parsers, your normalizers, and your fail-safes against a suite of known adversarial inputs. Those components behave predictably, so they suit repeatable unit tests.

## CI as an automated robot in the repository

A continuous integration pipeline such as GitHub Actions is described as an automated robot living in your repository. Every time an engineer tries to update the system, it rebuilds the application in a vacuum and fires malicious data at it before a human ever sees the change. In this setup the pipeline stops being a nicety and becomes the mechanism that enforces the guardrails.

## Watching a merge get blocked

The demonstration follows a developer who deletes a security check and tries to merge anyway. Pull Request 58 triggers the automated quality checks, and only 41 of 64 checks pass, so the merge is blocked. If a developer accidentally removes a security rule, or a new model update starts slipping past the evaluation logic, the pipeline catches it in isolation, locks the repository, and stops the compromised code from reaching production. That is the difference between hoping your guardrails held and knowing they did.

## The gap between what you test and what you rely on

The closing advice is to never assume your guardrails will survive the next commit. Build an automated pipeline that attacks your own system on every update, and make a failing attack block the merge. The video also suggests handing a model your test suite and asking which of your guardrails it could break without a single test going red. The gap between what you test and what you rely on is where the next regression is already living.

## Key takeaways

- Model behavior can change even when your code does not.
- Changes in model version, system prompt, or upstream data can break downstream parts.
- You cannot assert a model's exact output, but you can test parsers, normalizers, and fail-safes.
- Deterministic components are well suited to repeatable unit tests.
- A CI pipeline such as GitHub Actions rebuilds and attacks the app on every proposed change.
- A failing check should block the merge, as with Pull Request 58 passing only 41 of 64 checks.
- Look for guardrails you rely on but do not test.

## Try it yourself

Hand a model your test suite and ask which of your guardrails it could break without a single test going red. Use the answer to add tests for the parts you depend on, then make sure a failing test blocks merging in your repository.
