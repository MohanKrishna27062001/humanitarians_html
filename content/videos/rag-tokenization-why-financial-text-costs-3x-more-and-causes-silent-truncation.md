---
title: "RAG Tokenization: Why Financial Text Costs 3x More and Causes Silent Truncation | Ameya"
seoTitle: "RAG Tokenization: Why Financial Text Costs 2-3x More"
description: "Learn how subword tokenizers shred financial text, why that raises cost and fills context windows faster, and how silent truncation loses data in embeddings."
summary: "Liam, in for Ameya Deshmukh, shows that financial text tokenizes two to three times worse than plain prose. The video links that to cost, context limits, and silent truncation at 384 tokens, and recommends measuring and chunking by tokens."
keywords: ["why financial text uses more tokens", "tokenization in rag pipelines explained", "characters per token comparison", "silent truncation embedding model limit", "all mpnet base v2 384 token limit", "chunk by tokens not characters", "subword tokenizer shredding rare words", "token cost of numbers and tickers"]
generated: "article"
---

Before a model can read a single chunk, your text becomes numbers: not characters, but tokens. In this video, Liam, in for Ameya Deshmukh, explains why financial text tokenizes two to three times worse than plain prose, and how that quietly costs you money, context, and sometimes your answer.

## Fixed vocabularies and shredding

A tokenizer has a fixed vocabulary of about 30,000 subword units. A common word maps to one token, and anything outside the vocabulary gets shredded into pieces. So the same sentence can be short or long in tokens depending entirely on which words you used.

## Two strings, same length

The video compares two strings with identical character counts. "The cat sat on a mat" is 20 characters and six tokens, each a whole word. A dollar figure with EBITDA and a ticker is also 20 characters but 13 tokens: the same length on the page, and more than double the cost to the model.

The shredding is visible in the output. EBITDA is not in the vocabulary, so it fractures into three pieces. The double-hash marker means a piece continues the previous word with no space. Numbers are the worst case: the dollar amount in the example costs seven tokens for nine characters. Rare tokens are expensive tokens.

## Characters per token

The clean way to see this is characters per token, where higher is more efficient. Plain business prose runs about eight characters per token, and everyday English around four. A dense financial string with dollar signs and quarters drops to 1.67, which means paying almost a token per character.

## Three consequences

Because financial text tokenizes two to three times worse, three things follow:

- **Cost.** APIs bill per token, so the same document is two to three times more expensive.
- **Context.** The window is measured in tokens, not characters, so it fills faster than you would expect.
- **Truncation.** This is the sneaky one.

## The truncation trap

The video names a popular embedding model, all-mpnet-base-v2, which silently discards anything past 384 tokens. There is no error and no warning. You think you embedded the whole chunk, but you embedded the first part and threw the rest away. If your financial chunks are token-heavy, they hit that wall sooner than the character count suggests.

## Measure and chunk by tokens

The practical fix is simple. If tokens matter to you, and for financial text they do, measure and chunk by tokens, not characters. Count tokens with the same tokenizer your model uses and set chunk limits against that number. Then a 400-character chunk that is secretly 600 tokens cannot ambush you. The video adds that printing your own tokens once makes the cost model stop being abstract.

## Key takeaways

- Tokenizers map common words to one token and shred everything else into subword pieces.
- Two strings of 20 characters can be six tokens or 13, depending on the vocabulary.
- Plain business prose is about eight characters per token, everyday English about four, and a dense financial string 1.67.
- Higher token counts raise API cost and fill the context window faster.
- all-mpnet-base-v2 silently discards anything past 384 tokens.
- Count tokens with the model's own tokenizer and size chunks by tokens.

## Try it yourself

Take a sample of your own corpus, tokenize it with your model's tokenizer, and report the characters-per-token ratio. Also count how many chunks would exceed the model's token limit. The video says that if that count is not zero, you have just found silent data loss before it cost you an answer.
