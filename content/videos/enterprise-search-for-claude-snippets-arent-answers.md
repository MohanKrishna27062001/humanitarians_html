---
title: "Enterprise Search for Claude: Snippets Aren't Answers"
seoTitle: "Enterprise Search for Claude: Why Snippets Aren't Answers"
description: "Learn how the enterprise-search skill makes Claude answer from company knowledge using a search, read and feedback loop instead of trusting snippets."
summary: "This Claude Basics episode explains why one search is not an answer. The enterprise-search skill runs a three-step loop of search, read and feedback, with two design rules and an important caveat about empty results."
keywords: ["enterprise search claude skill explained", "why search snippets are not answers", "search read feedback loop ai", "claude answers from company documents", "cursor pagination explained simply", "empty search results permissions or not indexed", "ai assistant internal knowledge search", "ask claude to read full document"]
generated: "article"
---

Ask an assistant something that lives in your company's own knowledge, such as a policy or a prior decision, and it is tempting to think one search gives the answer. This Claude Basics episode explains why it does not. The enterprise-search skill runs a loop in which search finds candidates and reading the document is what actually answers you.

## A question that spans many sources

The video uses one example question: "What's our policy on contractor onboarding, and is there a prior decision already on file?" Answering it means reaching into the company's own knowledge, such as chat, drives, tickets and wikis, and not the open web.

The easy assumption is to run one search and trust that the top result has the answer. The video explains why that assumption fails.

## A snippet is not an answer

A search result is a snippet of about 35 words, just enough to judge whether a document is worth opening. It was never built to answer anything by itself. Treating it as the answer is the mistake this episode is about.

## The three-step loop

The skill runs in three steps:

- **Search** returns ranked snippets across every connected source.
- **Read** fetches the full text of the documents that matter, using the ID from search.
- **Feedback** means upvoting what you used and downvoting what you rejected. This trains the ranker, and it happens before the task is called done.

Two bundled scripts handle the busy work. One searches with pagination, and the other reads up to 50 documents at a time.

## Two rules that keep the loop honest

The video gives two design rules. First, always search the shared index first. It already ranks across every source, removes duplicates and respects permissions, so it comes before falling back to a single connector directly. Second, pagination is cursor-based. Pass the cursor back exactly as given, never build one yourself, and stop when there is no cursor.

## The catch with empty results

One caveat is easy to miss. An empty result can mean two different things: the content genuinely is not indexed, or the identity asking simply cannot see it. The API does not say which.

## Both directions

Back in the onboarding example, search turns up a snippet that mentions a policy, which is step one. Reading the full document is what surfaces an exception buried in the next paragraph. Marking that document as used is step three, and it is what makes tomorrow's search better.

The video also warns about overconfidence in both directions. Finding something does not mean you have the whole picture, because some sources might not be connected yet. Finding nothing does not mean the answer does not exist, because it might be a permissions gap or a query that needs broadening.

## Key takeaways

- One search does not produce an answer; search finds candidates and reading answers.
- A search snippet is about 35 words, enough to triage, not to answer.
- The loop is search, read, then feedback before calling the task done.
- Search the shared index first, since it ranks, deduplicates and respects permissions.
- Pass pagination cursors back exactly as given and never build your own.
- An empty result may mean not indexed or no access, and the API does not say which.
- Finding something does not prove completeness, and finding nothing does not prove absence.

## Try it yourself

Ask Claude to search your internal docs for your policy on contractor onboarding, read the full document and not just the snippet, and say whether there is a prior decision on file. Then ask it to tell you what it used to answer before it finishes, so you can see whether it stopped at the snippet or opened the document.
