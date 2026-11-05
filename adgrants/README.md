# Ad Grants long-tail campaign plan

Generated from data/youtube + content/videos. 28 campaigns, 965 ad groups/ads, 7730 phrase-match keywords (7261 unique).
Daily budget: $314/day for these campaigns, split into 31 shares of $10.13; flagship campaigns take several shares (see weight in adgrants/campaigns/*.json), each series campaign takes one. The remaining $15/day of the $329 cap stays with the three pre-existing campaigns (Humanitarians AI, Fellows, AI Literacy) at $5/day each: niche, not irrelevant, but switched to Maximize clicks ($2 cap) and phrase match.

## Import order (Google Ads Editor > Account > Import > From file)

1. `1-campaigns.csv` (campaigns are PAUSED on import; enable after review)
2. `2-sitelinks.csv`
3. `3-keywords.csv`
4. `4-ads.csv`

Bid strategy is Maximize clicks with a $2.00 max CPC bid limit (the Ad Grants-allowed non-Smart-Bidding option). Once an ad group records conversions, move that campaign to Maximize conversions.

## Campaigns

| Campaign | Ad groups | Keywords | $/day |
|---|---|---|---|
| OPT | International students | 23 | 228 | 40.52 |
| LT | HAI | 123 | 1004 | 10.13 |
| LT | Humanitarians AI Fellows | 154 | 1219 | 10.13 |
| LT | Claude | 57 | 482 | 10.13 |
| LT | Claude Basics | 103 | 757 | 10.13 |
| LT | Mycroft Financial AI | 81 | 680 | 10.13 |
| LT | Extending Claude — Skills, Plugins & Connectors | 66 | 592 | 10.13 |
| LT | Madison | 24 | 169 | 10.13 |
| LT | Claude for Education | 38 | 179 | 10.13 |
| LT | Behind the Model | 23 | 119 | 10.13 |
| LT | Generative AI for Game Development — Shesh Narayan Gupta | 25 | 207 | 10.13 |
| LT | Lyrical Literacy | 24 | 212 | 10.13 |
| LT | INFO7375 Branding & AI | 21 | 181 | 10.13 |
| LT | Medhavy | 18 | 147 | 10.13 |
| LT | Brutalist (Film as Code) | 14 | 94 | 10.13 |
| LT | Claude Plugins | 14 | 132 | 10.13 |
| LT | Causal Couture | 9 | 78 | 10.13 |
| LT | Lyrical Literacy (Songs for Pre-School Kids) | 9 | 84 | 10.13 |
| LT | Claude Code | 7 | 37 | 10.13 |
| LT | 80 Days to Stay | 2 | 13 | 10.13 |
| LT | Fellows | 6 | 47 | 10.13 |
| LT | RAMAN Effect | 6 | 48 | 10.13 |
| LT | React | 5 | 43 | 10.13 |
| LT | AI+1 | 3 | 15 | 10.13 |
| LT | Loonnet | 2 | 17 | 10.13 |
| LT | NeuroVEP | 1 | 8 | 10.13 |
| LT | Popper (Computational Skepticism) | 1 | 7 | 10.13 |
| LT | More Videos | 106 | 931 | 10.13 |

## Operating rules

- Start every campaign small and equal. After 2 weeks, move budget toward campaigns with CTR above 5% and any clicks at all; pause ad groups with zero impressions after 30 days.
- Keep phrase match. Broad match on a $2 cap in Ad Grants tends to buy nothing or buy junk.
- Ad Grants policy: no single-word keywords, no generic keywords, pause keywords with Quality Score 1-2, keep account CTR at or above 5%, at least 2 ad groups per campaign and 2 sitelinks.
- Every final URL is a page on humanitarians.ai (never a YouTube link).
- Geotargeting: United States, India, China, South Korea, Canada, Taiwan, Vietnam, Nigeria, Bangladesh, Brazil, Nepal, Japan, Mexico, Saudi Arabia, Germany, United Kingdom, Colombia, Pakistan, Ghana, Turkey, Indonesia, Kenya, France, Spain, Italy. That is the US plus the largest F-1 (OPT-eligible) source countries. Students on F-1/OPT travel home for breaks and do coursework remotely, so the home countries are part of the same audience, not a separate prospective one; pass --locations to change the list. If the Ads Editor importer rejects a multi-value Location column, set locations per campaign after import. Google Search barely serves in mainland China, so expect little from that row.
