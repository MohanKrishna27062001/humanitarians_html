---
title: "Enterprise-search"
seoTitle: "Enterprise Search Skill: Search, Read and Feedback Loop"
description: "See how the enterprise-search skill turns ranked snippets into real answers with a three-step loop, two design rules and one empty-results caveat."
summary: "This video explains the enterprise-search skill, which answers from a company's own knowledge by searching, reading full documents and giving feedback. It covers index-first searching, cursor pagination and why an empty result is ambiguous."
keywords: ["how enterprise search skill works", "search snippets versus full documents", "ai search feedback upvote downvote ranker", "shared index search before connector", "cursor based pagination for search", "why ai search returns empty results", "company policy lookup with ai assistant", "glean client rest api example"]
generated: "article"
---

Questions about a company's own policies, prior decisions or named projects seem like they should be answered by a single search. This video explains why they are not. The enterprise-search skill treats search as the first step of a three-step loop, and it adds two rules and one caveat that keep the loop reliable.

## Why one search is not enough

The video imagines someone asking, "What's our policy on contractor onboarding, and is there a prior decision already on file?" Answering requires the company's own knowledge across chat, drives, tickets and wikis, not the open web. The easy assumption is to run one search and treat the top result as the answer.

The problem is what a search result is. It is a snippet of about 35 words, enough to judge whether a document is worth opening, and never built to answer a question by itself.

## Search, read and feedback

The skill works as a loop in three steps. Search returns ranked snippets across every connected source. Read fetches the full text of the documents that matter, using the ID that search returned. Feedback means upvoting what you used and downvoting what you rejected, which trains the ranker; the video says this happens before the task is called done.

Two bundled scripts do the busy work. One handles searching with pagination, and the other reads up to 50 documents at a time.

## Rule one: the shared index first

The first design rule is to always search the shared index first. According to the video, it already ranks across every source, removes duplicates and respects permissions. Only after that does the skill fall back to one connector directly.

## Rule two: cursors come from the system

The second rule concerns pagination, which is cursor-based. The cursor must be passed back exactly as it was given. You never build one yourself, and you stop when there is no cursor.

## The ambiguity in an empty result

There is one catch. An empty result can mean two different things: the content genuinely is not indexed, or the identity asking cannot see it. The API does not say which. The video presents the Glean Client REST API as its worked example of this behavior, and it does not claim every enterprise search product works the same way.

## Seeing the loop on one question

Returning to the onboarding example, search turns up a snippet that mentions a policy. That is step one. Reading the full document is what surfaces the exception buried in the next paragraph. Marking that document as used is step three, and it makes tomorrow's search better.

The video adds two cautions. Finding something does not mean you have everything, since some sources might not be connected yet. Finding nothing does not mean the answer does not exist, since it might be a permissions gap or a query that needs broadening first.

## Key takeaways

- Enterprise search is a loop, not a single lookup.
- Search returns ranked snippets of about 35 words for triage.
- Read fetches the full document using the ID from search, and one script reads up to 50 at a time.
- Feedback upvotes what you used and downvotes what you rejected, before the task is done.
- Search the shared index before falling back to a single connector.
- Pass pagination cursors back exactly as given and stop when none is returned.
- An empty result could mean not indexed or no permission, and the API does not say which.

## Try it yourself

Ask your assistant to search your internal docs for your policy on contractor onboarding, read the full document rather than the snippet, and tell you whether a prior decision is on file. Ask it to report what it used to answer before it finishes, and check whether it opened the document.
