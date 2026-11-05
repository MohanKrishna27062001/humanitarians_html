---
title: "Claude Skills: Write Triggers, Not Topics"
seoTitle: "How to Write a Claude Skill Description That Triggers"
description: "Learn why the description field in SKILL.md decides whether a Claude skill ever activates, and how to write it as triggers rather than a topic summary."
summary: "This video explains the SKILL.md format for Claude plugin skills and why the description field matters most. It also covers how skills differ from commands and agents, and the gap in guidance on testing whether a skill actually fires."
keywords: ["how to write a claude skill", "skill.md description field explained", "claude skill trigger phrases", "claude skill vs slash command", "claude skill vs agent difference", "model invoked skill claude plugin", "test if claude skill activates", "skill.md frontmatter fields"]
generated: "article"
---

A Claude plugin skill lives or dies on one field: the description in SKILL.md. The video explains that if the description reads like a one-line summary of a topic, Claude may never activate the skill. Written as a trigger, it tells Claude when to use the skill. The video uses the example skill from Claude's plugin reference to show how.

## The wrong framing: a topic description

The starting question is whether a one-line subject description is enough to get a skill found. The video's answer is no. The description has to work as a trigger, because it is what Claude reads to decide whether the skill should be used at all. It is addressed to Claude, not to a person browsing a catalog.

## SKILL.md and its four fields

A skill is one file, SKILL.md, inside a folder under skills. Its frontmatter has four fields:

- Name, the identifier, which is required.
- Description, the trigger, which is also required.
- Version, which is optional.
- License, which is optional.

The description deserves more attention than any other field because it determines whether the skill activates. A simple skill is only that one file. A complex skill can have the same folder hold reference material, examples, and helper scripts.

## Three ways things get activated

The skill's own template says a good description should state that the skill is used when the user asks a specific phrase, mentions a keyword, or discusses a topic area. That works because Claude reads the description and decides to activate the skill on its own, with nobody typing anything to invoke it.

The video contrasts this with two other pieces. A command only runs when a user types the slash. An agent is something Claude spawns to handle a subtask. Pick the wrong mode and you may build a command when you needed a skill, so nobody ever sees it trigger.

## The gap: no way to see the match happen

The video points out what the reference leaves unsaid. Nothing explains how Claude actually matches a description against a request. There is no rule for how long the description should be or which phrases carry the most weight. The only testing advice is to check that the skill activates for expected queries, but no method, example query, or way to watch the match is given. As a result, most authors write a description, ship it, and never see whether it fires.

The video is careful about its claims. It does not say how Claude's matching works internally, and it does not say that the four-field format or the "when to use" prose is the only way to write a description. It describes what this reference template specifies.

## Key takeaways

- The description field in SKILL.md is what Claude reads to decide whether to activate a skill.
- Write the description as an activation rule with phrases, keywords, and topics, not as a topic blurb.
- A skill is one SKILL.md file in a folder under skills; name and description are required, version and license optional.
- Complex skills can add reference material, examples, and helper scripts in the same folder.
- Skills activate on their own, commands run only when someone types the slash, and agents are spawned for subtasks.
- The reference gives no method for testing activation, so many descriptions are never checked.

## Try it yourself

Ask Claude to build a model-invoked skill for a plugin that helps with database query optimization. Then check the result. Does the description name specific trigger phrases or just summarize? Does it include a "when to use" section with concrete examples? Does it overlap with another skill's description? Are references and helper scripts split into folders? Finally, hand Claude a realistic query and watch whether the skill activates. Do this on your own plugin idea.
