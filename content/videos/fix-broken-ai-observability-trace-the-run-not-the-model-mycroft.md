---
title: "Fix Broken AI Observability: Trace the Run, Not the Model | Mycroft"
seoTitle: "Fix Disconnected AI Traces: Attach the Tracer to the Run"
description: "Why one intelligence brief produced 20 nameless traces, and how attaching the callback handler to graph.invoke restored a nested call tree with tool calls."
summary: "Muskan explains a tracing bug where one brief produced about 20 disconnected, generically named traces with no tool calls. The cause was attaching the tracer to a model rebuilt on every call, and the fix was three small code changes."
keywords: ["why do i get multiple disconnected traces", "attach callback handler to graph invoke", "langchain tracing tool calls missing", "nested observations in a single trace", "tracer attached to model rebuilt every call", "name a trace for easier debugging", "fix flat nameless llm traces", "trace the run not the model"]
generated: "article"
---

Muskan describes tracing that was quietly useless. A single intelligence brief was producing about 20 separate traces, all with the same generic name, and the tool calls were not showing up at all. The fix was small, and it came down to one idea: where you attach the tracer.

## What the broken traces looked like

One brief was split into roughly 20 disconnected traces. Each was labeled with the model's default name, chat bedrock converse. There was no nesting and no sense of what called what, and the tool calls, which are the actual work, never appeared in the trace. That made the traces useless for the one question tracing exists to answer: what happened?

## The root cause

The cause was where the tracer was attached. It was attached to the model, but the code builds a fresh model on every single call. Each call therefore spun up a new model with a new tracer, and each tracer logged its own separate trace. The result was a scatter of flat entries rather than one story.

## The fix: attach it to the run

The fix in one idea: do not attach the tracer to the model, attach it to the run, meaning the whole graph invocation, once. In code, it took three small changes:

- The function that builds the model (get LLM) no longer attaches the callback.
- A new trace config builds the run's config, including the handler, a name of the form brief colon company, and metadata.
- The supervisor passes that config into graph.invoke.

The result is one tracer scoped to the whole run instead of one per model.

## Before and after

Before the change, the dashboard showed 20 flat, nameless rows. After it, there was one trace named for the company, with 92 nested observations showing the real call tree. For the first time, the tool calls were in the trace. The same run had become legible.

## The lesson

Trace the run, not the model, especially when the model gets rebuilt on every call. Attach your observability once at the top, and give the trace a name you can actually find later.

## Key takeaways

- A tracer attached to a model object breaks when the model is rebuilt on every call.
- Symptoms: many disconnected traces, a generic default name, no nesting and no tool calls.
- Attach the callback handler to the top-level run, graph.invoke, not to the model.
- Give the trace a meaningful name, such as brief plus the company, and add metadata.
- The fix needed three small code changes.
- The corrected trace showed 92 nested observations, including tool calls.
- One logical task should show up as one trace.

## Try it yourself

Open your own tracing dashboard and check whether one logical task appears as a single trace or as a scatter of disconnected ones. If it is scattered, find where the handler is attached and ask whether that object gets rebuilt on every call. According to the video, that is usually the whole bug.
