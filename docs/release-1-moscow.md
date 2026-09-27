# Release 1: MoSCoW prioritisation

**Date:** 27 September 2026
**Method:** Story map slicing to check each story against the end-to-end journey, then MoSCoW to label the result.
**Test applied to each story:** could the journey (nudge, choose, solve, feedback, progress) still work end to end without it?

## Release 1 scope

1. You pick a difficulty and get one question. You can skip it.
2. You answer, by voice if the voice spike passes, otherwise by typing.
3. If you're stuck, you tap for a hint (or turn hints off).
4. You submit and see the model structure and whether your number was in the right ballpark.
5. The app remembers your results.

## Prioritisation

| Story | MoSCoW | Reason |
|---|---|---|
| Choose difficulty | Must | Builds skill from easy upward; low effort once difficulty rules exist |
| Skip to another question | Must | Stops a disliked question becoming a reason to close the app |
| Guided prompts by archetype | Must | Makes the app a trainer rather than a quiz |
| Choose guidance level | Must | Hints on tap, or none; practising without help mirrors the interview |
| Compare with model structure | Must | Structure, not the final number, is the real measure of skill |
| Ballpark check | Must | Catches a broken structure; Release 1 uses verifiable questions only |
| Save my history | Must | Without it, the app forgets every attempt; scope line 5 depends on it |
| [Spike] Define guesstimate archetype | Must | Unblocks difficulty rules, prompts and progress tracking |
| [Spike] Voice capture feasibility | Must | Resolves the largest technical risk cheaply before committing |
| Notification at a scheduled time | Should | App works without it; wanted for daily accountability |
| Voice exchange (scripted) | Should | Conditional on the voice spike; typing is the fallback |
| Track my progress by archetype | Should | Useful only once enough answers exist; blocked by the archetype spike |
| Reference figures | Could | Not needed for the MVP; recalling figures is part of the skill |
| Release 2 stories (AI) | Won't (R1) | Depend on the AI, planned for Release 2 |

## Design decisions made during prioritisation

- One question at a time, with its difficulty shown; skip offers another at the same difficulty.
- Difficulty is chosen by the user and can be changed at any time.
- Guidance is on or off. On: start alone and tap for hints. Off: no hints.
- Hints are the archetype prompts, revealed one per tap, in order; hint use is recorded.
- Reference figures follow guidance: shown when on, hidden when off.
- Feedback leads with structure; the number is judged only as a ballpark check.
- No automatic step-up suggestions; the user controls guidance.
- Release 1 uses questions with verifiable answers only. Each question stores its benchmark as an optional field so unverifiable questions can be added later without a rebuild.
- Progress tracking is split: a plain history (Must) and an archetype breakdown (Should).

## Open

- How skill is measured (decided in the archetype spike)
- The archetype list (archetype spike)
- Whether voice is feasible (voice spike)

## Parked for after Release 1

- Skip tracking (planned for the second half of Release 1 if time allows)
- Questions without published answers
