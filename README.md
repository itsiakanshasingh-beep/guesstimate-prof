# guesstimate professor

A phone-first web app for practising guesstimates, the estimation questions used in consulting and product interviews. You answer in your own words and AI judges your structure against reviewed solution paths, so any sound approach earns credit, not only the textbook one.

**Status:** in development. Release 1 closed early on 3 October 2026 when the plan moved to AI grading ([decision record](docs/decisions/2026-10-03-release-2-ai-pivot.md)). Release 2 is due 11 October 2026.

## How it is being built

The project is run as a small product, from discovery to delivery:

- **Discovery:** user stories written against a story map of the practice journey (get nudged, choose a question, solve it, get feedback, track progress)
- **Prioritisation:** story map slicing and MoSCoW, recorded with reasons in [docs/decisions/2026-09-27-release-1-moscow.md](docs/decisions/2026-09-27-release-1-moscow.md)
- **Risk first:** time-boxed spikes resolve the open questions (problem archetypes, voice capture) before the build depends on them
- **Delivery:** one-week iterations, tracked in the project board linked to this repository
- **Built with AI:** developed with Claude Code; questions, solution paths and answer ranges come from an agent pipeline (agents propose, a critic reviews, the owner approves)
- **Evaluated:** the AI grader is tested against solutions with planted errors before it is trusted

## Releases

One week each. Details in [docs/decisions/2026-10-03-release-2-ai-pivot.md](docs/decisions/2026-10-03-release-2-ai-pivot.md).

| Release | Scope | Dates |
|---|---|---|
| Release 1 | Discovery and foundations: archetype, voice and answer editor spikes, screen designs, app shell. Closed early | Closed 3 Oct 2026 |
| Release 2 | AI grading: answer in your own words, AI judges the structure, number checked against a range, grader tested with planted errors | 4 to 11 Oct 2026 |
| Release 3 | Proof and help: repeatable grader test, disagreement review, AI hints | 12 to 18 Oct 2026 |
| Release 4 | Publish-ready: evaluation write-up, difficulty and skip, history | 19 to 25 Oct 2026 |

## Where things live

| Folder | What goes there |
|---|---|
| `docs/decisions/` | Product decisions and their reasons |
| `docs/reference/` | Rules the app follows, such as the problem archetypes |
| `docs/spikes/` | One folder per spike: a `report.md` plus its evidence (data, screenshots) |
| `prototypes/` | Throwaway experiments, kept apart from the app |
| `questions/` | The question bank: one JSON file per question, in the format in `docs/reference/question-format.md` |
| `scripts/` | Small tools, such as the question file check |
| `tests/fixtures/` | Deliberately broken files that prove the checks work |

The app's code is in `app/`. Answers are never saved in this repository.
