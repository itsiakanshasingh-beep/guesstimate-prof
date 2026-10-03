# Question format stress test

**Date:** 3 October 2026
**Card:** #48 Question file format
**Decided by:** Akansha Singh (product owner). Solutions by 12 Claude agents; merge by Claude.

## Why

Before fixing the question file format, six questions were solved from every sensible angle so the format would come from real solutions rather than guesswork. The test was whether one shape can hold questions with 3 paths and questions with 5, single numbers and multi-part answers.

## How

- Six questions from `docs/spikes/archetypes/labelled-problems.csv`.
- Two solver agents per question, working in parallel and blind: no web access, no casebook answers, no official figures.
- Each solver found as many genuinely distinct approaches as the problem has. Two approaches count as distinct only if they start from a different base or use a different method.
- The merge kept every distinct working path and dropped only duplicates and dead ends.

All twelve raw solutions are in [raw/](raw/). They are source material for #27 (preparing questions) and #53 (planted errors).

## Merged paths

| Question | CSV id | Distinct paths kept | Dropped or folded | Solvers' central answer |
|---|---|---|---|---|
| Swiggy delivery partners, Mumbai | FMS-26 | 1. Orders divided by orders per partner (demand over supply)<br>2. Mumbai's share of Swiggy's national fleet (no archetype)<br>3. Peak-hour riders needed (demand over supply, peak basis)<br>4. Dark stores and delivery zones times riders (supply side) | Street-observation density: not checkable in an interview, and counts other platforms' riders | 30,000 and 53,000 monthly active |
| Two-wheelers sold in India per year | IIMI-08 | 1. Fleet divided by lifetime, plus fleet growth (demand side)<br>2. Factory capacity times utilisation, minus exports (supply side)<br>3. Dealers times monthly sales (supply side)<br>4. Registration offices times daily registrations (supply side)<br>5. Market leader's volume divided by its share (no archetype) | First-time buyers and commuter base folded into path 1; loan-led dropped (inputs unknowable blind) | 16 to 21 million |
| Petrol pumps in India | FMS-06 | 1. Fuel volume divided by throughput per pump (demand over supply)<br>2. Refuels per day divided by refuels one pump handles (demand over supply)<br>3. Coverage: urban density plus rural spacing (no archetype) | Recalling each oil company's count: recall, kept as a sanity check only | 69,000 to 88,000 (actual is about 1 lakh) |
| iPhone users in India | IIMI-12 | 1. Smartphone users times iPhone share (demand side)<br>2. Phones sold since about 2019, minus retired ones (no archetype)<br>3. Households by income band times iPhones per household (demand side) | Revenue-based route folded into path 2 | 40 to 53 million |
| Starbucks, Connaught Place: revenue | IIMI-18 | 1. Orders through the counter by time of day (supply side)<br>2. Seat turns plus takeaway (supply side)<br>3. CP footfall narrowed to buyers (demand side)<br>4. Company revenue per store times a flagship multiple (no archetype)<br>5. Working back from rent (no archetype) | None | About Rs 7.5 crore a year |
| Starbucks, Connaught Place: costs | IIMI-18 | 1. Benchmark percentages applied to revenue<br>2. Fixed costs built bottom-up | None | Store profit 15 to 25% before overhead; near 0 to 10% after |
| EV charging capex on a highway | IIMI-24 | 1. Spacing rule: one site every 25 km, both sides (no archetype)<br>2. Traffic to charging demand to chargers (demand over supply)<br>3. Converting existing fuel stations (supply side)<br>4. Power per km borrowed from EU rules (no archetype) | National programme pro-rata folded into path 1 | Rs 15 to 45 crore for Delhi to Jaipur (both solvers chose this stretch) |

## Findings

1. **The number of paths varies: 3, 4 or 5.** The format must allow any number.
2. **Every question had at least one sound path with no archetype.** "No archetype" is common, not an edge case.
3. **Every question was ambiguous about what the answer counts.** For example registered or active partners, wholesale or retail sales, outlets or nozzles, people or devices. The answer moves 3 to 10 times with the definition.
4. **Paths are not always alternatives.** Some are cross-checks, ceilings or floors. For EV, the answer is the larger of the coverage count and the demand count. For Starbucks, counter capacity caps the footfall estimate.
5. **Multiplying every driver's extremes gives unusable ranges** (for example 7,000 to 100,000 partners). Every solver instead gave a good, an acceptable and an error band. This matters for #50 Band calculation.
6. **Estimates can share a bias.** Both petrol pump solvers landed below the real figure, because they assumed busier pumps than India's many small rural ones.
7. **Two questions go beyond a single number.** Starbucks has two parts, the second a cost breakdown. EV lets the user choose the stretch, so a fair range has to be per km.

## Decision

The owner chose the **simple format for R2**: one question has one answer. Parts, breakdown answers and user-chosen scope move to R3. Starbucks and EV can still be coded in R2 using only their main estimate (Starbucks revenue; EV capex for a fixed stretch).

## Fields the solutions needed beyond the first Swiggy sample

| Field | In R2 simple format | Later |
|---|---|---|
| What the answer counts, with accepted alternatives and conversions | Yes | |
| Scope and conventions (geography, inclusions, currency, tax, financial year) | Yes | |
| Reference date | Yes | |
| Real figure with source and date, and any known bias | Yes | |
| Good, acceptable and error bands | Yes | |
| Per path: role (main, cross-check, ceiling, floor) | Yes | |
| Per path: catches, common mistakes, sanity check | Yes | |
| Rejected approaches with reasons | | R3 |
| Domain knowledge needed | | R3 hints |
| Segment splits worth knowing | | R3 hints |
| Signs of a strong answer for this question | | Decide with #51 Rubric |
| Parts, breakdown answers, user-chosen scope | | R3 |
| Interviewer follow-ups | | Parked |
