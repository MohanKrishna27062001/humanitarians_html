---
title: "How CDNs Deliver Content So Fast | Akshay"
seoTitle: "How a CDN Works: Edge Caching, Hits and Misses"
description: "Akshay Chavan explains how content delivery networks use edge locations, smart routing, cache hits and misses, and TTL policies to serve assets quickly."
summary: "Akshay Chavan walks through what happens between a browser and a nearby CDN edge. The video covers points of presence, routing, cache hits and misses, and the caching policies that keep content fresh while cutting load on the origin."
keywords: ["how does a cdn work", "cdn cache hit vs cache miss", "what is a cdn point of presence", "cache control headers and ttl explained", "how cdns reduce origin server load", "cdn edge routing dns anycast", "cdn cache invalidation and purge", "why cdns make websites faster"]
generated: "article"
---

Open a website and its images, JavaScript, fonts and video can appear almost instantly, even when the origin server is thousands of miles away. Akshay Chavan explains why: a content delivery network, or CDN, changes the path a request takes by placing content at edge locations around the world. The video follows a request from the browser to a nearby edge and shows what happens next.

## The problem with a distant origin

Start without a CDN. A user requests an asset from an origin on the other side of the country or the world. The request crosses multiple networks before it reaches the server, and the response has to travel back. Even when the origin is fast, physical distance and network hops add round-trip latency. Repeat that path for many assets and many users, and the delay becomes noticeable and the origin carries a heavy load.

## Points of presence and edge routing

A CDN adds distributed points of presence, or POPs, between users and the origin. Each POP contains edge infrastructure that can serve cached content, so requests can be handled much closer, in network terms, to where traffic enters the CDN.

When a browser requests a CDN-hosted asset, the CDN's routing system directs the request toward an appropriate edge location. The video says providers can use DNS, anycast, health information, network topology and current conditions to decide. The goal is not simply the geographically closest machine but a healthy edge that can serve the request efficiently. From the application side the URL still looks ordinary: the page references an asset on the CDN host name and the browser makes an HTTPS request.

## Cache hits and cache misses

The edge accepts the request and checks whether the object is already cached there. That lookup decides whether the origin has to be involved.

On a cache hit, the edge already has a fresh copy and returns the image, stylesheet, script or video segment directly to the user. The request never goes back to the origin for that object, and that shorter path is one of the biggest reasons repeated delivery feels fast.

On a cache miss, the edge has no usable copy, perhaps because this is the first request at that location or the cached object expired. The edge forwards the request to the origin or another configured upstream and waits. This request pays more of the long-distance cost, but the origin returns the object to the edge, the edge passes it to the user, and if the caching rules allow it, stores a copy. A second user near that edge, requesting the same object while it is still fresh, gets it from cache with no work done by the origin.

## Caching policies and freshness

Caching behavior is controlled by policy. An origin can send cache-control headers that tell shared caches whether an object is cacheable and how long it can stay fresh, and a CDN can apply its own configured rules too. Content cannot stay cached forever, so freshness needs a strategy:

- A time to live (TTL) makes an object expire after a set period.
- Revalidation asks whether an older copy has changed.
- Purge or invalidation mechanisms remove content sooner when necessary.

Longer caching improves reuse, but applications also need a plan for updates and stale content. CDNs work especially well for reusable assets such as images, CSS, JavaScript, fonts, downloads and video segments, which can be cached across many edge locations so users in different regions do not all pull the same bytes from one origin.

## What a CDN does not do

The video ends with a caveat. Not every request is cacheable. Misses, personalized responses, freshness requirements and origin performance still matter. A CDN reduces expensive long-distance work but does not eliminate the origin, which remains the authoritative source.

## Key takeaways

- Distance and network hops add round-trip latency, even when the origin server is fast.
- CDNs place points of presence between users and the origin so repeated delivery happens closer to the user.
- Routing can use DNS, anycast, health information, network topology and current conditions to pick a healthy edge.
- A cache hit serves a fresh copy from the edge without contacting the origin.
- A cache miss fetches from the origin, then can store the response for later users.
- Cache-control headers, TTLs, revalidation and purge rules define how fresh cached content stays.
- Personalized or uncacheable responses still reach the origin, so a CDN reduces origin load rather than removing it.

## Try it yourself

Take one page you know and list its reusable assets: images, stylesheets, scripts and fonts. For each one, decide how long it could safely stay cached and how you would update it if it changed, using the video's framework of route to an edge, serve fresh cache when possible, fetch from the origin when necessary, and reuse that response.
