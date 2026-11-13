---
title: "Harshita Nimbal explains: AI Harness vs. AI Model"
seoTitle: "AI Harness vs. AI Model: Why Same-Model Apps Feel Different"
description: "Harshita Nimbal explains why two apps using the same AI model feel so different, and the four harness controls that decide how much users trust them."
summary: "Two food delivery apps run the same model but feel completely different. Harshita Nimbal shows that the difference is the harness, the code wrapped around the model, which sets permissions, memory, visibility and confirmation."
keywords: ["what is an ai harness", "ai harness vs ai model difference", "why ai apps feel different same model", "ai product design permissions and memory", "ask before acting ai design", "how to design user trust in ai", "audit an ai product's controls", "model is engine harness is steering"]
generated: "article"
---

Why do two apps running the exact same AI model feel completely different to use? Harshita Nimbal, a product designer, opens with this question and answers it with a simple point: what users feel is not the model. It is something wrapped around the model, and it is the part that almost nobody designs on purpose.

## Same brain, different apps

The video sets up two food delivery assistants that use the same model underneath, with the same weights and the same training. One orders with total confidence. The other asks first and remembers what you like. The model did not change between them. The wrapping around it did.

## App A and App B

Asked to order dinner, App A simply places the order. It chooses pepperoni, your usual, charges your card, gives no confirmation and no explanation, and finishes in two seconds. The video calls this fast and, honestly, a little unsettling. App B asks first, offering your usual pepperoni or the new place down the street, and it remembers that you skipped mushrooms last time. It is slower, but you trust it.

## What the harness is

The model itself never decided any of this. It does not know what "ask first" means. It generates the most likely next response. Everything the user felt came from the harness, which is the code wrapped around the model. The harness decides what the model is allowed to do, what it is allowed to remember, how much it shows you, and whether it asks first or just acts.

## The four controls

The video reduces the harness to four controls: permissions, memory, visibility and confirmation. App A has full permission to spend, no memory, no explanation, and acts alone. App B asks before spending, remembers preferences, and shows its reasoning. That is the same model with four different settings.

The speaker says this holds for every AI product, including the chatbot, the coding assistant and the email drafter. The model is the engine, and the harness is the steering wheel, the brakes and the dashboard. The model is raw capability, while the harness is what people actually trust.

## Key takeaways

- Two apps can use an identical model and still feel very different.
- The difference comes from the harness, the code wrapped around the model.
- The model only generates the most likely next response; it does not decide to ask first.
- The harness controls what the model may do, what it remembers, how much it shows, and whether it confirms.
- Permissions, memory, visibility and confirmation are the four controls.
- The model is the engine; the harness is the steering wheel, brakes and dashboard.
- User trust depends on the harness, which is rarely designed on purpose.

## Try it yourself

Pick one AI product you use every day and ask Claude: "What is it allowed to do without asking me first? What does it remember about me? And how much of its reasoning does it actually show?" Then ask what would change if the exact same model sat inside a stricter harness. The exercise turns the four controls into a quick audit of a product you already know.
