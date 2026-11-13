---
title: "Automated Testing, Pytest & GitHub Actions CI/CD | Mycroft AI"
seoTitle: "Automated Testing with Pytest and GitHub Actions CI/CD"
description: "See how Pytest unit tests and a GitHub Actions workflow block faulty AI code, including SQL injection and magnitude errors, from reaching the main branch."
summary: "This video shows how automated tests and continuous integration improve the reliability of the Provenance Gatekeeper in the Mycroft AI project. Pytest codifies adversarial cases, and GitHub Actions runs them on every push so failing builds cannot merge."
keywords: ["pytest unit tests for ai extraction code", "github actions ci pipeline for fastapi", "block pull request merge on failing tests", "adversarial test cases sql injection", "path filtering in github actions workflow", "run chroma db and fastapi in docker ci", "automate security tests on every commit", "magnitude error tests for financial parsing"]
generated: "article"
---

Software that works on a local machine is not the same as software that survives production. This video from the Humanitarians AI series follows the seventh week of the Mycroft AI project. The previous week produced a parser for the Provenance Gatekeeper that extracts financial data from unpredictable AI text. This week added no new detection logic at all. It added the suite that makes last week's logic trustworthy next month by running itself on a machine that is not the developer's, every time anyone touches the code.

## Replacing manual checks with Pytest

The first step was writing strict unit tests with Pytest, collected in a test_main.py file. Each adversarial scenario the team knew about was codified: valid strings, magnitude errors, and SQL injections. Instead of running scripts by hand and eyeballing the output, there is now a programmatic harness that shows the normalization layer behaves as intended.

## Removing the human with GitHub Actions

Developers forget to run tests, so the second step was integrating GitHub Actions. The workflow uses path filtering, which means every time new code is pushed to the Gatekeeper directory, GitHub starts a clean Ubuntu runner and installs the dependencies. It then boots the FastAPI and Chroma DB architecture inside Docker.

## The adversarial stress test in the pipeline

Once the environment is live, the pipeline bombards the project's own API with the adversarial stress test. If a single hallucinated payload slips through the logic, the build fails and the code is blocked from merging. The video demonstrates this with a pull request designed to let one hallucinated payload through, to see whether the pipeline would let it reach the main branch. The result is a perimeter that regressions cannot cross into main. The demonstration is tied to Pull Request 62.

## Why automation matters

The video's slogan is that unautomated security is just a suggestion, and a test you have to remember to run is not a test. The advice is to stop testing AI logic by hand, write unit tests for the extraction layer, and force the repository to run them on every commit.

## A caution about the suite itself

The video ends with a warning about what automated tests cannot do. A suite that only contains the attacks you have already thought of will pass forever, right up until it matters. Once the pipeline is green, the suggestion is to find the attack categories with no tests at all.

## Key takeaways

- Working locally is not the same as surviving production.
- Pytest can codify adversarial cases such as valid strings, magnitude errors and SQL injections.
- GitHub Actions can run those tests on every push so no one has to remember.
- Path filtering limits the workflow to changes in the relevant directory.
- The pipeline starts a clean Ubuntu runner and runs FastAPI and Chroma DB in Docker.
- If any hallucinated payload gets through, the build fails and the merge is blocked.
- A suite limited to known attacks gives false comfort.

## Try it yourself

Once your pipeline is green, give a model your test file and your parser. Ask which adversarial categories you have no test for at all. Then add tests for those categories so the suite does not simply reflect the attacks you already thought of.
