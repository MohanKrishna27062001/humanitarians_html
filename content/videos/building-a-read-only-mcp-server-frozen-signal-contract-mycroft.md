---
title: "Building a Read-Only MCP Server & Frozen Signal Contract | Mycroft"
seoTitle: "Read-Only MCP Server and Frozen Signal Contract Explained"
description: "Week 10 of the Mycroft valuation agent: a read-only MCP server with six tools, bounded results, and a frozen v1.0 signal contract."
summary: "Om Mali shows how the Mycroft Private Eye valuation data was made usable by other systems: a read-only MCP server with six tools that write nothing, and a signal file frozen at version 1.0. Testing revealed assumptions hidden inside the test itself."
keywords: ["build read-only mcp server", "bound mcp tool result size", "frozen json signal contract", "mcp server context window limits", "grounding check for llm drafts", "why mcp tools should not write", "test mcp server with real client", "paginated results with cursor mcp"]
generated: "article"
---

In week 10 of the Mycroft Private Eye valuation agent build, Om Mali turns a dataset that only one person could use into something other systems can use. Until now, everything was a script to run and a document to read. The video describes two deliverables: a read-only server an AI assistant can query directly, and a frozen signal contract that another system can parse without guessing.

## Two deliverables, and where the difficulty was

The server has six tools, none of which writes anything. The signal file is frozen at version 1.0. Om notes that the protocol itself was never the hard part, since writing a server that speaks it took an afternoon. The hard parts were size, and what a contract has to refuse.

## Bounding the results

Asking for one company's full price history returns 2,151 rows, about 575,000 characters, or roughly 143,000 tokens. That is larger than most context windows, and useless even where it fits, because a model handed 2,000 rows will not read them. So every answer has three parts: a summary describing the whole result set, one bounded page, and a cursor. On that query the answer shrinks to 18,000 characters instead of 575,000.

Bounding is not free. The same envelope makes the other five tools' answers bigger by 19 to 49 percent.

## Six tools, none that write

The six tools list the companies, get one company's marks, compare managers on a date, get propagation, get a fund's exposure, and list what is still unresolved. No tool records a decision, clears a gate, or changes a mark. Om had established earlier that a resolution decision needs a named human, and a tool a model can call is the opposite of that.

## The frozen signal

The signal has nine top-level keys, frozen at version 1.0 and validated before it is ever written to disk. It refuses 10 field names outright, including valuation, market cap, and shares outstanding. The filings give a fund's share count but never a company's total shares. Where a figure is withheld, the reason is a value rather than a missing key. Four companies are suppressed this quarter, and two counts disagree on purpose: the server lists 11 companies, while the signal publishes 10, because the 11th has zero marks. An empty answer is still an answer, and the server says so.

## Checking the quarterly note

The quarterly note is the only prose a model writes here. It gets the computed figures and nothing else, with no database and no tools. Om expected one check, no number that is not in the figures, to be enough. It was not. A draft passed cleanly and still claimed one company had the fewest marks, when another had fewer. Two gaps remain: an empty draft slipped past every check and was recorded as a success at zero words, and a draft that spelled a number in words went unread because the check only looked at digits.

## Hidden assumptions in tests

Three setup bugs in a row were invisible from inside the server, because Om's own test supplied things a real client does not.

## Key takeaways

- A read-only MCP server with six tools makes the valuation data queryable without giving a model write access.
- No tool records a decision, clears a gate, or changes a mark.
- Every answer is a summary, one bounded page, and a cursor, cutting one result from 575,000 to 18,000 characters.
- The envelope costs the other five tools 19 to 49 percent more.
- The signal contract has nine keys, is frozen at 1.0, and refuses 10 field names.
- A single grounding check passed a draft that invented a ranking, so there are now four checks.
- A test can hide what a real client would lack.

## Try it yourself

Om's prompt for Claude: take a test you trust and find what it supplies that a real caller would not, such as the working directory, an environment variable, or an already running process. Withhold one and run it again. For Om, the test passed three times before a real client ever reached the server.
