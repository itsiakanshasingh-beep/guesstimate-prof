# Guesstimate Professor: build guide for Claude Code

Read this before every task. The backlog lives in this repo's issues (epics with sub-issue stories), grouped by milestone: Release 2 (4 to 11 October 2026), Release 3 (12 to 18 October), Release 4 (19 to 25 October) and Parked. The current direction and its reasons are in `docs/decisions/2026-10-03-ai-pivot.md`; Release 1 planning is kept in `docs/decisions/release-1-moscow.md` as history. The README lists where each kind of file lives.

## What the app is

A phone-first web app for practising guesstimates (consulting and product interview estimation questions). You answer in your own words and AI judges your structure against reviewed solution paths, so any sound approach earns credit.

The journey:

1. Get one question.
2. Write or speak your working in one text box, then enter an estimate.
3. Submit. The AI grader scores the working per rubric dimension, and the number is checked against the question's range.
4. See the result as a 2x2: number right or wrong, reasoning sound or not.

Release 3 adds AI hints and the guidance setting. Release 4 adds difficulty, skip and history.

## Who you are working with

The owner is a Technical Business Analyst learning to build with Claude Code. She makes the product decisions; you build.

- Work one issue at a time. Do not expand scope beyond the issue you were given; if something else is needed, say so and suggest a new issue.
- Explain anything new in plain words, in a sentence or two, before or after doing it. Each task should add at most one unfamiliar concept.
- When something breaks, state the problem in one plain sentence first, then give the smallest next step.
- Keep commits small, with clear messages that reference the issue number.

## Build rules

- **Target:** Chrome on Android first. Must also work on a laptop browser, because recruiters will open the link there.
- **Hosting:** decided in spike #47. Until then, no AI key goes into any page or file the browser can read. Every AI call goes through a server function.
- **AI failures:** a failed or slow AI call shows a plain message and never loses the user's text.
- **Voice:** always keep a typed fallback. Voice must never be the only way to answer. Follow the 9 conditions in `docs/spikes/voice/report.md`.
- **Grading:** the grader judges the working against the question's reviewed solution paths and credits any sound path. It scores the rubric dimensions in `docs/reference/rubric.md` (from #51) and records the grader version with every grade.
- **Number check:** the estimate is checked against the question's range, calculated in code from its driver ranges (#50). Questions with figures marked "assumption only" are checked against the user's stated assumption.
- **Hints (Release 3):** on tap, one per tap, respecting the guidance setting; never give numbers. Rules are decided in #55.
- **Question data:** one structured file per question (#48): id, text, unit, status with reason, provenance, structural difficulty, solution paths (each with an archetype or "no archetype", steps and a model solution), driver ranges, and figures with source and date. Only `ready` questions appear in the app.
- **Archetypes** belong to solution paths, not questions. Do not hard-code a list of archetypes into logic.
- **Screens:** `docs/design/screens.md` still applies to layout, style and voice states. Results screens 17 to 21 and the scripted hint behaviour are replaced; follow the issue until new designs exist.
- Keep the stack simple enough for the owner to read. Avoid heavy frameworks unless an issue calls for one.

## Writing style for any text (UI copy, docs, commit messages)

- UK English.
- No em dashes.
- Plain, precise sentences. No filler.
- App name: the wordmark "guesstimate professor" is always lower case; in sentences write "Guesstimate Professor".
