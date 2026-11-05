---
title: "How AI Combines Text, Images & Retrieval | Anjana"
seoTitle: "Multimodal RAG: Retrieving Tables, Charts and Code"
description: "Learn how a multimodal RAG pipeline keeps tables, charts and code intact instead of flattening every document into plain text before retrieval."
summary: "Anjana explains why text-only RAG pipelines quietly destroy tables, charts and code, and walks through a layout-aware, multimodal pipeline that chunks, translates, embeds and retrieves each content type on its own terms."
keywords: ["multimodal rag explained simply", "how to chunk tables for rag", "layout aware chunking for documents", "rag pipeline for charts and images", "embedding code summaries for retrieval", "why text only rag fails", "vision model to describe charts", "test what your rag ingestion does"]
generated: "article"
---

Retrieval-augmented generation rests on an assumption that rarely gets said aloud: that a document is text. Many of the documents most worth retrieving are tables, charts and code, and the standard pipeline damages exactly those. In this video Anjana lays out what goes wrong and how a multimodal pipeline fixes it, then closes with a recap and a short exercise for the viewer.

## The hidden assumption in most RAG systems

Most RAG systems treat every document as a wall of text. They strip out formatting, flatten tables into rows of words, ignore charts entirely and turn code blocks into paragraphs. The information is technically still present, but the structure that gave it meaning is gone.

The video gives three concrete examples. A revenue table becomes a jumble of numbers with no column headers. A flowchart becomes nothing at all. A code function loses its indentation and syntax. Text-only chunking, the video argues, destroys exactly the content that is hardest to reconstruct afterward.

## Layout-aware chunking

The first fix is to see the page the way a human does. Instead of splitting on token count alone, layout-aware chunking detects content boundaries: where a paragraph ends and a table begins, where a code block starts, where a figure sits. Each content type becomes its own chunk with a type label attached.

A table chunk preserves its rows, columns and headers. A code chunk keeps its indentation and language tag. The point the video stresses is that the chunker does not only split text, it classifies what it is splitting.

## Translating non-text content

Non-text content needs a translation step before it can be embedded. The video describes a different treatment for each type:

- Tables go through structured extraction, turning the raw grid into a schema-aware representation with column types, row relationships and summary statistics.
- Charts and diagrams are processed by a vision language model that writes a text description capturing the key information: axes, trends, labels and relationships.
- Code blocks are parsed into an abstract syntax tree, then summarized in natural language covering what the function does, its inputs and its outputs.

Each extraction produces a retrievable text representation without throwing away the original.

## Embedding each type appropriately

Once every chunk has a text representation, it can be embedded, but the video notes that not all embeddings are equal. Text chunks use a standard text embedding model. Table summaries may use the same model or a specialized one trained on structured data. Image descriptions are embedded alongside their source metadata, and code summaries can use a code-aware embedding model that understands programming semantics.

At retrieval time, the query is matched against all of these modalities at once. A question about revenue trends might pull back a text paragraph, a revenue table and a bar chart, from different pages, each keeping its original format for the language model.

## The full pipeline, end to end

The video summarizes the whole flow in order. A document enters, and layout detection identifies content regions. Each region is chunked by type, and non-text chunks go through structured extraction. All chunks are embedded into a unified index. At query time, retrieval pulls the most relevant chunks regardless of format, and the language model receives structured context: tables as tables, code as code, charts as descriptions with the source images. The answer is grounded in the full document, not only the plain-text parts.

## The recap with Claude

In the recap, the failure is described as quiet. A text-only chunker does not raise an error on a table; it returns something worse than nothing, numbers with no columns. That is why the fix begins before embedding: the chunker has to classify what it is splitting before it splits it. Each non-text type then earns its own translation, and the translation is a key to the original, not a replacement for it, so the model finally sees a table as a table.

## Key takeaways

- Most RAG pipelines assume documents are plain text and flatten tables, charts and code, losing the structure that carries their meaning.
- Layout-aware chunking detects content boundaries and gives each chunk a type label instead of splitting on token count alone.
- Tables need structured extraction, charts need a vision language model, and code needs a syntax-tree parse and a natural-language summary.
- Every extraction keeps the original, so the model can receive the real table, code or image alongside its text description.
- Different content types can use different embedding models, all feeding one unified index.
- A single query can retrieve text, tables and charts from different pages, whatever their original format.
- The failure is silent: a text-only chunker does not error on a table, it just returns numbers without columns.

## Try it yourself

Look at what your own ingestion actually does to a document, not what the documentation says it does. Find a PDF with a table in it, run it through your pipeline and read the resulting chunk. The video's point is that knowing which of your content types is being silently destroyed is worth more than any amount of retrieval tuning on the parts that already work.
