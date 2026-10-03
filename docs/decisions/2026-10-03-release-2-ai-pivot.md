# AI pivot: Release 1 closed, AI grading becomes the core

**Date:** 3 October 2026
**Decided by:** Owner, after a review of every card and document against the new direction

## Why

Release 1 was planned as a scripted app: hints as fixed archetype steps, a self-ticked structure checklist, and a fixed 2x / 5x ballpark rule. Reviewing the design showed three problems:

- A fixed model structure punishes valid alternative approaches.
- A checklist the user ticks is not a reliable measure of skill.
- A fixed tolerance treats very uncertain and very certain questions the same.

Judging any sound structure needs AI. Finishing the scripted version would mean building things to throw away, so Release 1 closed early and the AI work starts now.

## Final picture

A phone-first app where you answer a guesstimate in your own words and AI judges your structure against reviewed solution paths, so any sound approach earns credit. Questions, paths and ranges come from an agent pipeline that the owner approves, and the grader is tested before it is trusted. It shows the owner can take an AI product from discovery to a live, evaluated release with a human in the loop.

## Releases

One week each.

| Release | Goal | Done when | Dates |
|---|---|---|---|
| R1 Discovery and foundations | Find out what the app needs and prove the basics work | Closed early. Delivered: archetype spike (#14), voice spike (#23), screen designs (#25), app shell (#26), answer editor spike (#37) | Closed 3 Oct 2026 |
| R2 AI grading | A live app where you answer in your own words and AI judges your structure | App live; 8 questions ready through the agent pipeline; grader catches at least 8 of 10 planted errors and grades the anchor examples at their intended level | 4 to 11 Oct 2026 |
| R3 Proof and help | Show the grading holds up, and help the user while answering | Repeatable grader test with logging; disagreement review on real attempts; AI hints with the guidance setting | 12 to 18 Oct 2026 |
| R4 Publish-ready | A finished piece recruiters can open and read | Public write-up of the build and evaluation; difficulty and skip; history | 19 to 25 Oct 2026 |
| Parked | Not committed | Progress by rubric dimension, notifications, mock interviewer, reference figures shown to the user, more questions, monthly figure check, text turned into rows, screen redesign | Reviewed 25 Oct 2026 |

## Release 2 plan (Iteration 2, 5 to 11 October 2026)

About 40 hours of build. Agents work three streams in parallel, so the owner's time is mostly review and testing: about 20 to 25 hours.

| Priority | Cards | Why |
|---|---|---|
| P0 | #48 Question file format, #51 Rubric with anchor examples, #47 Hosting and server spike | Everything else waits on these |
| P1 | #49 Agent pipeline, #27 Prepare 8 ready questions, #50 Band calculation, #52 AI grader, #38 Answer in my own words | The main build, in three streams: content (#49, #27), grader (#50, #52), app (#38) |
| P2 | #19 See how my structure was judged, #20 Check my number against the range, #53 Planted-errors check | The end of the chain; #53 is the done-when test |

If the week runs short, cut inside cards rather than dropping one: voice in #38 falls back to typed only, and #20 uses a simple fixed range instead of the calculated one.

Agreed details:

- One release per week, and only the work that produces the most important parts.
- 8 questions, not 16.
- The grader reads free text directly; turning it into rows is parked.
- One time limit for a result: 20 seconds, then a plain failure message. Streaming results is a candidate for the 25 October review.
- A miss on the number shows both the direction and size of the miss and the range itself.

## Decisions

1. **Archetypes belong to solution paths, not questions.** A question can have several paths; "no archetype" is a valid label.
2. **One agent pipeline:** agents propose in parallel, a critic agent reviews, the owner approves. Used for solution paths, model solutions and driver ranges.
3. **Difficulty** stays the coded structural rule from `docs/reference/archetypes.md`. No recalibration from attempts.
4. **Grading uses a rubric:** decomposition, quality of assumptions, arithmetic, sanity check, clarity. Feedback is per rubric dimension.
5. **Number and reasoning are scored separately**, giving a 2x2: right number and sound reasoning; right by luck; wrong number but sound reasoning; wrong on both.
6. **AI judges structure against reviewed reference paths.** This is the core of the product.
7. **Tolerance is a range per question:** agents propose a plausible range for each driver, and code calculates the answer range. This replaces 2x / 5x.
8. **Figures carry a source and date.** Where no reliable source exists, the figure is marked "assumption only" and the check uses the user's stated assumption. Automated figure checks are parked.
9. **One structured file per question**, with status (draft, ready, needs-rewrite, parked, rejected, retired) and a reason, plus provenance.
10. **Answers are free text**, typed or spoken. Turning them into confirmed rows is parked; in R2 the grader reads the free text.
11. **Hints become AI hints** in R3: on tap, one step at a time, never giving numbers. The exact rules are decided in #55.
12. **The grader is tested with planted errors**: solutions with known faults, so the test does not rely on the owner's grading as the truth. Anchor examples keep the owner's own grading consistent.
13. **Hosting is decided in spike #47.** GitHub Pages alone cannot hide an AI key.

## What happened to each Release 1 card

| Card | Outcome |
|---|---|
| #9 Voice exchange (scripted) | Closed, merged into #38 |
| #15 Guided prompts by archetype | Closed, merged into #16 |
| #21 Reasoning feedback | Closed, merged into #19 |
| #38, #19, #20, #27 | Rewritten, Release 2 |
| #16, #17 | Rewritten or moved, Release 3 |
| #24, #7, #8 | Rewritten or moved, Release 4 |
| #22, #6, #10, #18 | Rewritten or moved, Parked |

New cards #47 to #59 cover the AI work.

## Superseded

- The skill measure in `docs/reference/archetypes.md` (structure checklist plus 2x / 5x).
- Results screens 17 to 21 and the scripted hint behaviour in `docs/design/screens.md`.
- `docs/decisions/2026-09-27-release-1-moscow.md` stays as the record of Release 1 planning.
