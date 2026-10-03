# Screen designs (Release 1)

> **Updated 3 October 2026:** layout, style and voice states still apply. Results screens 17 to 21 (tick your structure, 2x / 5x outcomes) and the scripted hint behaviour are replaced by AI grading and AI hints; new designs are parked in #58. See `docs/decisions/2026-10-03-release-2-ai-pivot.md`.

Last updated: 30 September 2026 · Issue #25

- **Source:** [Claude Design canvas](https://claude.ai/artifact/ArMaH5CoVB2hun6mnBaFV2), page "End-to-end flow v2". The canvas is the master copy; the images below are a snapshot of it.
- **Size:** phone, 390 × 844, plus a laptop view at 1280 px wide. Images are exported at twice that size.
- **Style:** colours, font, sizes and shared pieces are in `style.md`. Each screen's code is in `source/`, named to match the images (see `source/README.md` before using it).
- **Sample question:** "Estimate the number of Swiggy drivers in Mumbai" (Hard, Demand over supply).

## Design principles

1. **Never a blank page.** There is always a starting prompt.
2. **The question stays visible**, even when the keyboard is open.
3. **Hints feel like a coach, not a cheat sheet.** Asking for one should feel normal, not like failing.

## Screens

### Home

| First visit | Returning |
|---|---|
| ![Home, first visit](images/01-home-first-visit.png) | ![Home, returning](images/02-home-returning.png) |
| Explains how it works, then difficulty, the Coach nudges switch and Start. | Adds the last attempt (structure %, number result, hints used) and a link to History. |

### Answer

| Start | No hints | Two hints |
|---|---|---|
| ![Answer, start](images/03-answer-start.png) | ![Answer, no hints](images/04-answer-no-hints.png) | ![Answer, two hints](images/05-answer-two-hints.png) |
| Keyboard closed. Placeholder "What limits this number?" | Keyboard open; the question bar collapses to one line. | Answered nudges become short headings in the working. |

| Six hints, covered chip | Guidance off | Question expanded |
|---|---|---|
| ![Answer, six hints](images/06-answer-six-hints-covered-chip.png) | ![Answer, guidance off](images/07-answer-guidance-off.png) | ![Answer, question expanded](images/08-answer-question-expanded.png) |
| A nudge marked "Already covered" shows as a chip in the hint strip, not in the working. | No Nudge me button. | Tap the collapsed bar to read the full question while typing. |

| Typing the estimate | Ready to submit | Swap question |
|---|---|---|
| ![Typing the estimate](images/14-estimate-typing.png) | ![Ready to submit](images/15-ready-to-submit.png) | ![Swap question](images/16-swap-question-confirm.png) |
| Separate estimate field with a number pad and unit. | Keyboard closed, Submit active. | Confirms before clearing the working. |

### Voice

These states come from the voice spike (`docs/spikes/voice/report.md`, conditions 3, 6 and 9).

| Speaking | Wait | Speak now |
|---|---|---|
| ![Speaking](images/09-voice-speaking.png) | ![Voice wait](images/10-voice-wait.png) | ![Voice speak now](images/11-voice-speak-now.png) |
| Words go in at the cursor. | Chrome on Android is restarting; words spoken now would be lost. | Listening; safe to speak. |

| Connection lost | Not supported |
|---|---|
| ![Voice connection lost](images/12-voice-connection-lost.png) | ![Voice not supported](images/13-voice-not-supported.png) |
| Says so plainly and keeps the text captured so far. | Mic greyed out; points to Google Chrome and to typing. |

### Results

| Tick your structure | Checking against your working |
|---|---|
| ![Tick your structure](images/17-results-tick-structure.png) | ![Checking against your working](images/18-results-check-working.png) |
| The user ticks the checklist before seeing the number, so the number can't sway the ticks. | The working opens over the checklist to check against. |

The three outcomes below are the same attempt (8 of 9 steps, 89%) with a different number result.

| On target (within 2x) | Ballpark (within 5x) | Off (beyond 5x) |
|---|---|---|
| ![On target](images/19-results-on-target.png) | ![Ballpark](images/20-results-ballpark.png) | ![Off](images/21-results-off.png) |

### History

| With attempts | No attempts yet |
|---|---|
| ![History](images/22-history.png) | ![History, empty](images/23-history-empty.png) |
| Attempts and average structure score by archetype. | Explains what will appear here. |

### Laptop (1280 px)

Recruiters may open the link on a laptop. The same screens use the extra width instead of a stretched phone column.

| Home | Answer |
|---|---|
| ![Laptop home](images/24-laptop-home.png) | ![Laptop answer](images/25-laptop-answer.png) |
| Introduction on the left; difficulty, Coach nudges and Start on the right. | Question, nudges and estimate on the left; the working area fills the right. |

| Tick your structure | Result | History |
|---|---|---|
| ![Laptop tick your structure](images/26-laptop-results-tick.png) | ![Laptop result](images/27-laptop-results-off.png) | ![Laptop history](images/28-laptop-history.png) |
| Checklist beside the archetype and the user's working. | Structure and number side by side with feedback, missed items and archetype. | By archetype beside a table of attempts. |

## Decisions

- **Working area:** free text, not forced steps. When a nudge is answered, its short label stays as a heading above the user's text.
- **Hints cannot be deleted.** They are fixed nudges, not the user's text. Save them apart from the user's working, tagged as from a hint, so the structure score reflects the user's own thinking.
- **"Already covered":** no heading is added; the nudge shows as a chip in the hint strip. This is the only source for "Covered on your own" on the results screen in Release 1.
- **Voice:** Wait and Speak now must look clearly different without sound. Connection lost keeps the text. Not supported says "Try Google Chrome" and points to typing.
- **Structure before number:** the tick screen comes before the number result.
- **Wordmark:** "guesstimate professor", always lower case; "Guesstimate Professor" in sentences.

## Open items

- **Answer screen behaviour:** a throwaway prototype of stacked text boxes (one box per section, hint cards between them), due Thursday 1 October 2026. It settles focus, voice target box and empty sections. This file is updated if it changes the screens.
- **Release 2 feedback placement:** per section while answering, or on the results screen after submitting. Save working by section from Release 1 so either works.
- **Benchmark and source** show as placeholders until question content (#27) is written.
