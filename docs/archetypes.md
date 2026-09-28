# Guesstimate archetypes and how skill is measured

**Spike:** #14 [SPIKE] Define guesstimate archetype
**Date:** 28 September 2026 (due 29 September)
**Decisions by:** Akansha Singh (product owner). Analysis supported by Claude.
**Unblocks:** #7 Choose difficulty, #15 Guided prompts by archetype, #22 Track my progress by archetype, #27 [Enabler] Prepare R1 question bank

## Outcome in brief

- **Three archetypes:** Demand side, Supply side, Demand over supply. Each has a plain category name (what the user sees) and a method (how it is solved, which becomes the hints).
- **Every problem was classified.** All 107 solved problems from four casebooks are labelled: 101 fit an archetype and 6 are marked "doesn't fit", with the reason.
- **One difficulty rule for all archetypes**, based on how long the build is and whether there is a catch.
- **Skill in R1 is measured by a structure checklist first and a number check second.** Reasoning matters more than the final number.

## Scope change from the spike card

The card planned a sample of about 30 problems. The spike labelled **all 107 solved problems** instead, because labelling was cheap once the definitions were written, and it tests the archetypes on the full set rather than a sample. The close review covered 30 problems. The done-when is met on the larger set.

## How the evidence was gathered

1. **Theory read first** from all four sources and mconsultingprep.com. All five teach the same solving flow: clarify, choose an approach, segment, estimate, calculate, validate.
2. **134 problems tagged** by four agents working in parallel, one per book, using one shared tag set. 107 have worked solutions.
   - FMS Consulting Casebook 2023-24: 28
   - 180 Degrees Consulting Guesstimates Book: 35
   - IIM Indore Casebook: 26 solved (plus 14 unsolved practice prompts)
   - IIM Lucknow Casebook: 18 solved
3. **Archetypes derived from the evidence.** The agents named categories in their own words; they independently converged on the same patterns. The product owner then decided the list one archetype at a time.
4. **Blind check.** Two agents classified all 107 independently from the written definitions. They agreed on **105 of 107 (98%)**. The two splits were settled by the tie-break rule below.
5. **Independent review.** Two further agents checked 30 problems against the original pages. 29 of 30 archetypes were confirmed; the difficulty rule was corrected as a result.

The full labelled set is in [archetype-spike/labelled-problems.csv](archetype-spike/labelled-problems.csv). It holds question titles and labels only, not the casebooks' solutions.

## The archetypes

### 1. Demand side

**Method:** funnel
**Definition:** Start from a base and narrow it down to the people or things that use the product, then work out how much or how often they use it.
**Share of the bank:** 67 of 107

**Solving pattern (becomes the hints, in order):**
1. Clarify what is being estimated, where, in what unit, and over what time frame.
2. Pick a starting base: population, households, vehicles, livestock, traffic.
3. Split the base into groups that behave differently (for example urban and rural, or income bands).
4. Filter each group down to who can and does use it.
5. Estimate how much or how often each user consumes or buys. For durable goods, include how often they are replaced.
6. Multiply up, then convert to the unit and time frame asked. Multiply by price if the question asks for money.
7. Sanity check against a known figure or a second approach.

**Examples:**
- Market size of smart watches in India (FMS)
- Two-wheelers sold in India in a year (IIM Indore)
- Annual demand for wheat in India (IIM Lucknow)

**Easy, medium, hard:**
- Easy: a short funnel with up to 3 filters, one branch, and no catch.
- Medium: a longer funnel or several branches, for example smokers in India or the tyre market.
- Hard: a long funnel plus a catch, for example tractors in India (owned versus sold per year) or Amazon daily orders (per year to per day).

### 2. Supply side

**Method:** capacity
**Definition:** Start from one place, asset or worker, and work out how much it can handle and how full it really runs.
**Share of the bank:** 23 of 107

**Solving pattern (becomes the hints, in order):**
1. Clarify what is being estimated, where, in what unit, and over what time frame.
2. Pick the unit: one place, asset or worker.
3. Find the bottleneck: seats, lanes, counters, runways.
4. Estimate the throughput per hour at full capacity.
5. Adjust for how full it runs (busy and quiet hours) and for operating hours.
6. If asked, multiply by the number of such places, and by price for money. Convert to the unit and time frame asked.
7. Sanity check against a known figure or a second approach.

**Examples:**
- Daily revenue of the Delhi-Gurgaon toll plaza (FMS, 180 Degrees)
- Flights departing Delhi airport in a day (FMS)
- Monthly earnings of an Uber driver in Mumbai (IIM Indore)

**Easy, medium, hard:**
- Easy: one place, one bottleneck, no catch. The books contain almost none (see findings).
- Medium: for example a toll plaza or a salon, with several factors to combine.
- Hard: several bottlenecks interacting or scaling to a chain, for example an airport's daily revenue or Domino's cheese burst pizzas across India.

### 3. Demand over supply

**Method:** funnel divided by capacity
**Definition:** The question asks how many places, assets or workers exist or are needed. Estimate total demand, estimate what one of them handles, and divide.
**Share of the bank:** 11 of 107

**Solving pattern (becomes the hints, in order):**
1. Clarify what counts as one unit (for example a pump or a whole petrol station).
2. Build total demand with a funnel.
3. Build what one unit handles with a capacity estimate, using realistic utilisation.
4. Divide total demand by what one unit handles.
5. Adjust for coverage (units exist where demand is thin) and for peaks (size for the rush, not the average).
6. Sanity check against a known figure or a second approach.

**Examples:**
- Mom-and-pop (kirana) stores in India (IIM Lucknow)
- Petrol pumps in India (FMS)
- Swiggy drivers in Mumbai (FMS)

**Medium and hard (no easy level):** this archetype always needs two estimates, so it starts at medium.
- Medium: one half is a quick, known ratio, for example households per store or rides per cab per day.
- Hard: both halves need their own build, or there is a catch, for example petrol pumps, movie screens (monthly demand against daily shows) or Swiggy drivers (sized for the lunch peak).

## Rules

**What makes an archetype.** A problem gets its own archetype only if it needs a distinct move the learner must recognise. A final multiplier does not count. So these are steps, not archetypes:
- Multiplying by price
- Scaling one unit up to many (one outlet to the whole chain)
- Converting how many exist into how many are bought per year, using lifespan (tyres, toothbrushes)

**Tie-break rule.** When a problem could be Demand side or Supply side, classify it by what limits the number:
- If people or demand limit it: Demand side.
- If a place's or a worker's capacity limits it: Supply side.

For example, a pickpocket's earnings and an SUV maker's revenue lost to a chip shortage are Supply side: one worker, and one factory's output, are the limits.

**Doesn't fit (6 of 107):**

| Problem | Source | Main move |
|---|---|---|
| Paint needed for a car | 180 Degrees | Geometry (surface area × paint per square metre) |
| Paint needed for an aircraft | 180 Degrees | Geometry |
| Government spend on the 2024 Lok Sabha elections | 180 Degrees | Growing a past figure |
| Value of pension investments promoted by the government | IIM Indore | Growing a past figure |
| Yearly market for fighter aircraft worldwide | IIM Lucknow | Budget cascade (GDP to budget to defence to purchases) |
| Books read by an Indian in a lifetime | 180 Degrees | Per-person arithmetic over a lifetime |

These are rare (6%) and are not in scope for R1.

## Difficulty rule

One rule works for all three archetypes:

| Level | Rule |
|---|---|
| Easy | Up to 3 filters, one branch, no catch. The starting base and a final multiply (price, number of outlets) are not counted. |
| Medium | 4 or more filters, or more than one branch, or one catch |
| Hard | A long build and a catch, or two or more catches |

**Catches:** a total versus per-period conversion, an unfamiliar topic, units to align (monthly against daily), a forecast to a future year, a channel mix (dine-in, takeaway, delivery). For Supply side, busy versus quiet hours is not a catch, because nearly every capacity problem has it.

**Result on the 107 problems:**

| Archetype | Easy | Medium | Hard |
|---|---|---|---|
| Demand side | 4 | 43 | 20 |
| Supply side | 0 | 15 | 8 |
| Demand over supply | not applicable | 3 | 8 |

## How skill is measured in R1

**Decision: both a structure checklist and a number check, with structure first.**

**1. Structure checklist (self-ticked in R1).** After submitting, the user sees the model structure as a checklist and ticks what they covered. The checklist has two layers:
- The archetype's method steps, the same for every question in that archetype
- 2 to 3 key drivers specific to the question (for example "included replacement" for tyres)

Score = items covered as a percentage, so scores compare across questions. In R2 the AI does the ticking.

**2. Number check (automatic).** The app compares the answer with the question's benchmark:
- Within 2x: on target
- Within 5x: ballpark
- Beyond 5x: off

**Reasoning:**
- Interviewers rank structure above the number. IIM Lucknow lists approach first, then insights, then calculation. The IIM transcripts show interviewers praising structure laid out before numbers, clear scoping, and a second approach offered as a cross-check.
- The number only needs to avoid being far off. IIM Lucknow warns against being 10x out, and the most common interviewer probe is "does this number look right?"
- Relevance to the question matters, so the checklist includes question-specific drivers and not only generic steps.
- The thresholds are looser than they could be because guesstimates chain 5 to 10 assumptions, and a sound structure can still land 2x away from the real figure.
- Self-ticking relies on honest use, which is acceptable for a personal trainer in R1.

**Saved per attempt:** archetype, difficulty, checklist score, hints used, number result. #22 builds progress by archetype from these.

## Findings that affect the build

1. **Casebook model solutions cannot be copied.** The independent review found only 2 of 30 fine as they are, 23 need their model solution fixed, and 5 should be dropped. Errors include arithmetic slips (FMS wine 10x low, a dentist's daily revenue a third of the right figure), answers in the wrong unit (a user count given as a market size) and totals confused with yearly figures. This work is captured in #27.
2. **Verifiable benchmarks are scarce.** About 38 of the 107 are likely to have a published figure to check against, and about 44 more might. Sources still have to be found and checked (#27).
3. **Easy problems are scarce.** Under the agreed rule, the books have 4 easy Demand side problems and no easy Supply side ones. Most casebook questions are written for interview practice, which starts at medium. Accepted for R1. Options for later: write simple problems (one ATM, one café), or allow two branches in "easy", which would give 16 Demand side and 1 Supply side.
4. **The most common mistake is answering in the wrong unit or time frame,** for example the tyres on the road instead of tyres sold per year. A final check such as "Does your answer match the unit and time frame the question asked for?" is a candidate for #15. Where and how it appears is a design decision.
5. **The cheat sheets disagree.** The urban share is 35% in one book and 30% in another, and the birth rate is given three different ways. If reference figures are added later, they need one agreed set.
6. **All sources use Indian data.** UK-based questions may be worth adding after R1.

## What this means for the code

Archetypes, difficulty and checklists are **data, not code**, as CLAUDE.md requires.

- Each question record carries `archetype`, `difficulty`, `key_drivers`, `hints`, `model_structure`, an optional `benchmark` with its source, and a `status` of `draft` or `ready`. Only `ready` questions appear in the app.
- The archetype method steps live in one small data file, written once, and are shown as hints and as the first layer of the checklist.
- Adding or changing a question means editing the data file, never the code.

## Parked

- Writing easy Supply side problems
- Where the unit and time frame check appears (#15, design)
- UK-based questions
- The 6 "doesn't fit" problems
