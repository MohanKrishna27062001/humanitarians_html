---
title: "Mycroft: Building the Frontend"
seoTitle: "Build a React Frontend and Fix a load_dotenv Bug"
description: "A fellow builds a React frontend over a FastAPI backend and finds a .env file with an API key that nothing ever loaded, fixed with load_dotenv()."
summary: "Humanitarians AI Fellow Aishwarya Patil builds a React frontend on top of the previous week's FastAPI backend. Along the way she finds that a .env file holding the API key had never been read, and fixes it with a single load_dotenv call."
keywords: ["build react frontend for fastapi backend", "load_dotenv not loading env file", "python dotenv api key not loading", "design ui from real api json", "why a frontend matters for an api", "env file never read python bug", "test ui against api response shapes", "check that config file is actually used"]
generated: "article"
---

This short video from the Mycroft team follows Humanitarians AI Fellow Aishwarya Patil as she builds a React frontend on top of the FastAPI backend from the previous week. It also covers a configuration bug that had been sitting in the project the whole time: a .env file with a real API key that nothing in the code ever read. The video ends with a live screen recording of the working interface.

## The gap between a working API and a usable tool

The API worked, but only for someone who knew the exact URL and query string to type in. That is the gap the video starts from. A backend that returns correct data is not yet something other people can use, and the frontend is what closes that distance.

The interface she builds is deliberately small: one input, one toggle and one button. With those three controls, the same real claims and lineage data the API already returned becomes readable by anyone, not just the person who wrote the endpoints.

## Designing against the real JSON shape

The video is firm on how to design the screen. Start from the actual JSON the API returns, not from assumptions about what it probably looks like. Before writing the result view, she tests it against both response shapes the API can produce: the one with classification off and the one with classification on. Designing for one shape and discovering the other later would have meant reworking the view, so checking both first keeps the result display honest about what the backend really sends.

## The bug that had been there since day one

While wiring things together, the real bug surfaced. A .env file containing the Anthropic API key had been in the project folder since the very beginning, but the code never actually loaded it. There was no python-dotenv and no load_dotenv call anywhere. The key was sitting in a file, and nothing was reading that file.

The video points out why this kind of problem is easy to miss: the file exists, it looks like configuration is in place, and so nobody questions whether it is doing anything.

## The one-line fix

The fix was a single import and a single function call: load_dotenv at the top of the API module. After that, the key loads from the file on its own in every session, with no manual export needed in the terminal beforehand. The backend itself stayed the same; only the way it picked up its configuration changed.

## Running the real interface

The video then shows the interface running against the backend. Instead of typing a URL, the user works on a real screen. Turning classification on brings back the real scope reading right there in the page rather than in a terminal window.

## Key takeaways

- A working API is not the same as a usable product; a small frontend with one input, one toggle and one button can make the same data readable by anyone.
- Design the interface from the actual JSON the API returns, not from assumptions.
- Test the result view against every response shape the API can produce, here with classification both off and on, before building it.
- A .env file does nothing unless code loads it; the project had no python-dotenv and no load_dotenv call.
- Calling load_dotenv at the top of the API module fixed the problem and removed the need to export the key manually each session.
- A config file nobody reads can be worse than no config file, because it looks like it should be working.

## Try it yourself

If your project has a .env file, search the code for a load_dotenv call, or whatever mechanism you use to read it, and confirm that something actually loads the file. Then start the project in a fresh terminal session without exporting any variables by hand, and check that the key is still picked up.
