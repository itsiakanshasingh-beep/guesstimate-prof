# Answer editor spike results (#37)

Checks whether a working area made of stacked text boxes, with fixed hint cards between them, works on an Android phone before the answer screen (#38) is built.

- **Test page:** https://itsiakanshasingh-beep.github.io/guesstimate-prof/prototypes/answer-editor/
- **Four versions page:** https://itsiakanshasingh-beep.github.io/guesstimate-prof/prototypes/answer-editor/variants/
- **Device:** Android phone, Chrome
- **Chrome version:**
- **Laptop browser:** not tested yet
- **Date tested:** 2 and 3 October 2026
- **Tester:** Owner

## How the prototype behaves

Read this before testing, so you know what is meant to happen.

- **Nudge me** adds the hint card and a new empty box at the bottom of the working, even if you are typing in an earlier box.
- A hint shows as a full card until you type under it. Then it shrinks to its short label. If you delete everything under it, the full card comes back.
- **Already covered** only shows on a hint with nothing typed under it.
- Voice goes into the last box you were in, at the cursor. Grey words (not yet confirmed) show on a line just under that box, then move into the box. A text box cannot show grey and black words together, so this differs from design 09.
- If you tap another box while speaking, the words so far stay in the first box and the mic restarts into the new one.
- On a laptop, the hint strip and mic stay inside the working area. Design 25 has them in the left column.
- Submit stops the mic and shows the saved data on screen.

## Checklist

| # | What I tried | What happened | OK / Problem | Screenshot |
|---|---|---|---|---|
| 1 | Start typing in the first box | New lines went behind the Nudge me bar as the box grew. Fixed: the page now scrolls so the typing line stays above the bar | Problem, fixed | `01-typing-hidden.png` |
| 2 | Tap Nudge me, type under the hint | The card shrank to its short heading once text was typed | OK | `v3-newest-open.png` |
| 3 | Tap Nudge me without answering the previous hint (empty section) | Each skipped hint kept an empty box, so several nudges in a row left big gaps and pushed the working off screen. Led to the four versions below | Problem | `03-gaps-four-nudges.png` |
| 4 | Tap Already covered on a hint | The card disappeared and a chip appeared above Nudge me | OK | `v4-short-folded.png` |
| 5 | Go back to an earlier box and edit it | | | |
| 6 | Speak into a middle box | Spoken words and grey words went behind the Nudge me bar and the voice bar. Fixed. Then, with several hints open, the target box was off screen until the first words arrived, so the page jumped. Fixed in the four versions page: the mic closes the keyboard and shows the target box straight away | Problem, fixed | `06-voice-hidden-1.png`, `06-voice-hidden-2.png`, `06-voice-jump.png` |
| 7 | Scroll the working with the keyboard open | | | |
| 8 | Expand the question while typing | | | |
| 9 | Enter an estimate and submit; check the saved data | | | |
| 10 | Open on a laptop | | | |

Screenshots go in `screenshots/`, named by row number (for example `03.png`).

## Empty hint boxes: four versions

Added after testing row 3: each skipped hint left an empty box, so several nudges in a row made big gaps. Four ways of handling this, on one page with buttons to switch:
https://itsiakanshasingh-beep.github.io/guesstimate-prof/prototypes/answer-editor/variants/

All four also close the keyboard when the mic starts and show the target box straight away.

| Version | What it does | What I liked | What I didn't |
|---|---|---|---|
| 1. As it is | Every hint you skip keeps its empty box | Nothing new to learn | The gaps from row 3 |
| 2. Box on demand | A hint has no box until you tap the card. An empty box closes when you move on | Cleanest screen: no box waiting | A tap is needed after every nudge before answering; after a nudge there is no box for voice |
| 3. One open box | Only the newest hint keeps an empty box. Tap an older card to reopen its box | The open box shows where you are and where typing or voice will go; older empty hints tidy themselves away | The open box could feel like pressure when you only wanted to read the hint |
| 4. Fold any hint | Tap a hint heading to fold it shut or open it again | Folded, the working becomes a list of headings: the structure at a glance | Folding is manual, one tap per hint. A folded answer still shows its first line in grey, so a one-line answer looks the same folded or open (`v4-short-folded.png`, `v4-short-open.png`). Works for long answers (`v4-long-folded.png`, `v4-long-open.png`) |

**Chosen version:** 3, One open box (decided 3 October 2026). After a nudge the box is ready, so it is clear where you are and where typing or voice will go, and the screen stays tidy. Folding from version 4 is kept on top of version 3 (decided 3 October 2026), so the working can be collapsed to its headings to see the structure. The first-line preview is dropped: a folded hint shows only its heading.

## Findings

**What works**

- Stacked text boxes with fixed hint cards work on the phone: hints stay fixed, answers sit under the right heading, and cards shrink to headings once answered.
- Voice goes into the box you were last in, at the cursor, and follows you to another box.
- Already covered turns a hint into a chip without leaving a gap.

**Problems**

- Typing and spoken words went out of view behind the bottom bars (fixed in the prototype). The real build must keep the cursor and new words visible above any bar.
- Skipped hints left empty boxes and big gaps (resolved by version 3).
- With the keyboard open during voice, the target box was off screen (fixed by closing the keyboard when the mic starts).
- Already covered cannot be undone. A mistaken tap loses the hint. The real build needs a way back, for example tapping the chip, or a short "Undo".
- With the keyboard closed, the full question card takes about a fifth of the screen. To review when the real screen is built.
- Not tested yet: laptop, and checklist rows 5, 7, 8, 9 and 10.

## Decision

**Decision:** adjust (decided 3 October 2026)

**Reason:** the stacked text boxes with fixed hint cards work and stay. Empty hint boxes behave as in version 3, hints can be folded to their headings, the mic closes the keyboard, and the screen keeps the cursor and new words in view.

**Changes to `docs/design/screens.md`** (to be made once the app shell (#26) is hosted, so the screens can be updated from the real app):

- Skipped hints: only the newest hint keeps an empty box; older empty hints show as cards with "or tap to answer", and tapping one reopens its box.
- Folding: tapping a hint heading folds or opens that hint; a folded hint shows only its heading.
- Voice: starting the mic closes the keyboard and shows the box the words will go into.
- Interim voice words show on a line under the box, not inline (a text box cannot mix grey and black text).
- Already covered needs a way to undo.
- Close the open item "Answer screen behaviour".
