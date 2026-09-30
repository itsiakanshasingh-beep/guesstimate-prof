# Guesstimate Professor: build guide for Claude Code

Read this before every task. The backlog lives in this repo's issues (epics with sub-issue stories, milestone "Release 1", due 18 October 2026). Decisions and reasons are in `docs/decisions/release-1-moscow.md`. The README lists where each kind of file lives.

## What the app is

A phone-first web app for practising guesstimates (consulting and product interview estimation questions). Release 1 journey:

1. Pick a difficulty and get one question. Skip to get another at the same difficulty.
2. Answer by voice (if the voice spike passes) or by typing.
3. Tap for a hint when stuck, or turn hints off.
4. Submit, then compare with a model structure and see whether the number is in the right ballpark.
5. The app saves each attempt.

Release 2 adds AI: adaptive prompts, reasoning feedback, adaptive voice exchange.

## Who you are working with

The owner is a Technical Business Analyst learning to build with Claude Code. She makes the product decisions; you build.

- Work one issue at a time. Do not expand scope beyond the issue you were given; if something else is needed, say so and suggest a new issue.
- Explain anything new in plain words, in a sentence or two, before or after doing it. Each task should add at most one unfamiliar concept.
- When something breaks, state the problem in one plain sentence first, then give the smallest next step.
- Keep commits small, with clear messages that reference the issue number.

## Build rules

- **Target:** Chrome on Android first. Must also work on a laptop browser, because recruiters will open the link there.
- **Hosting:** static site on GitHub Pages. Release 1 has no server and no API keys.
- **Storage:** answers and history are saved on the device (browser storage). No accounts, no login.
- **Voice:** always keep a typed fallback. Voice must never be the only way to answer.
- **Prompt source must be swappable.** The hint and prompt screen must not care whether the next prompt comes from a written script (Release 1) or from the AI (Release 2). Keep that behind one small interface.
- **Guidance setting:** on means the user starts alone and taps for hints, revealed one per tap, in order; off means no hints. Record how many hints were used on each attempt. Release 2 AI prompts must respect this setting.
- **Feedback:** structure first (model structure with a driver checklist). The number is judged only as right or wrong ballpark.
- **Screens:** follow `docs/design/screens.md`.
- **Question data:** each question carries an id, text, difficulty (easy / medium / hard), archetype, an ordered list of hints, a model structure, and an optional benchmark answer with its source. The benchmark is optional so questions without a published answer can be added later without a rebuild.
- **Archetypes and difficulty rules are not final.** They come from the archetype spike (`docs/reference/archetypes.md`). Do not hard-code a list of archetypes into logic.
- Keep the stack simple enough for the owner to read. Avoid heavy frameworks unless an issue calls for one.

## Writing style for any text (UI copy, docs, commit messages)

- UK English.
- No em dashes.
- Plain, precise sentences. No filler.
- App name: the wordmark "guesstimate professor" is always lower case; in sentences write "Guesstimate Professor".
