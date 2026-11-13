---
title: "JBoss Migrator Explained | Application Migration & Java Modernization | Mycroft AI"
seoTitle: "JBoss Migrator Design: Legacy Java App Upgrade Pipeline"
description: "How a JBoss migrator pipeline upgrades a legacy Java app to a new server and Java version, and proves the business logic in the UI is unchanged."
summary: "Hussain presents a JBoss migrator design built from six ordered stages: inputs, baseline, analyze, transform, verify and a pull request. It automates mechanical changes, guards protected code and lists whatever needs a human."
keywords: ["jboss migrator tool design explained", "legacy java app modernization steps", "jboss eap upgrade pipeline stages", "diff guard protected business code", "eclipse transformer third party jars", "migration toolkit for applications eap", "playwright screenshots migration baseline", "what jboss migration cannot automate"]
generated: "article"
---

Legacy Java applications are costly to upgrade, and the hardest part is knowing that nothing broke. In this video, Hussain designs a JBoss migrator: a tool that upgrades a legacy Java app to a new server and a new Java version, and proves that the business logic in the UI did not change. The idea is that the tool migrates the mechanics, namely namespaces, dependencies, descriptors and tests, then proves nothing else broke, and hands back whatever it cannot do safely as a list.

## Inputs and protected paths

The tool starts with three inputs: a Git URL, a branch, and a config. The config declares the upgrade from JBoss EAP 7.2 on Java 8 to EAP 8 on Java 17, lists four named upgrades, and includes the block that matters most, the protected paths. These cover the business code and the UI, which the tool may touch only for namespaces. When the work is done, the tool opens a pull request.

## Six stages in a fixed order

The pipeline runs six stages, always in the same order: inputs, baseline, analyze, transform, verify, then a test plan and a pull request. The video draws attention to where the edits live. Only stage four writes code. Everything before it measures the original app, and everything after it measures the result again.

## Baseline first

Stage two is the one the video says most migrations skip. Before a single change, the tool clones the repo, cuts a migration branch, builds the original app and records every test result. Playwright takes screenshots of the key pages. Characterization tests pin what the service classes do today. This turns "nothing changed" into something that can be checked, rather than a hope.

## Analyze and transform

Analysis takes an inventory of the build tool, the dependencies, the deployment descriptors, the server config and the APIs the code actually calls. Red Hat's Migration Toolkit for Applications already writes this kind of report for EAP upgrades, so the tool runs its command line and parses the issues into a plan.

Transform is where each upgrade meets an engine:

- OpenRewrite does the heavy lifting for Java 17, Jakarta, Hibernate and JUnit. Each upgrade is a ready-made recipe that edits the syntax tree, so it changes only what it targets.
- Eclipse Transformer handles third-party jars.
- Descriptors get targeted XML rewrites.
- The server config becomes JBoss CLI scripts.

An LLM may propose fixes for leftover errors, but only as suggestions for a person to review.

## Verify with three checks

Verification has three parts. A diff guard reads every change inside the protected paths and allows only imports, annotations and namespaces. Anything else, such as a flipped comparison, fails the run. Next, the baseline tests are rerun and compared one by one. Then the app is deployed to the target server in a container and its screenshots are compared with the baseline.

The tool also keeps a paper trail for every changed class: what changed, which recipe changed it, and a risk level. From that it builds a unit test plan that maps existing tests, includes the characterization tests, and flags gaps for a human to write. Finally it pushes the branch and opens a pull request with the report, the plan and a list of everything it could not automate.

## The honest limits

The video states that no tool migrates a real JBoss app completely. Custom security modules, vendor-specific JNDI lookups and old frameworks such as Seam usually need a human. So the design does not guess. It automates what is safe, refuses to touch protected code and hands over a precise list of what is left. The verdict: measure the app before you change it, let recipes do the mechanical edits, guard the business code and the UI, and ship a precise list of what remains rather than a promise.

## Key takeaways

- The migrator targets EAP 7.2 on Java 8 moving to EAP 8 on Java 17.
- Six stages run in order, and only the transform stage writes code.
- A baseline of test results and screenshots is recorded before any change.
- OpenRewrite recipes, Eclipse Transformer, XML rewrites and JBoss CLI scripts handle the mechanical edits.
- A diff guard fails the run if protected business code changes beyond imports, annotations and namespaces.
- The tool produces a risk-labeled change record, a test plan and a list of what it could not automate.
- Custom security modules, vendor JNDI lookups and Seam-era code usually still need a human.

## Try it yourself

Paste this into Claude with your own files: here is my pom.xml and one service class from a JBoss EAP 7 app. List every change a move to EAP 8 on Java 17 forces on it, mark each one recipe-safe or needs a human, and write the characterization test I should run before touching anything. Pin today's behavior first, then prove for one class that nothing broke.
