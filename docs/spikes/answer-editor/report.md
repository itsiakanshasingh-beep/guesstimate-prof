# Answer editor spike results (#37)

Checks whether a working area made of stacked text boxes, with fixed hint cards between them, works on an Android phone before the answer screen (#38) is built.

- **Test page:** https://itsiakanshasingh-beep.github.io/guesstimate-prof/prototypes/answer-editor/
- **Device:**
- **Chrome version:**
- **Laptop browser:**
- **Date tested:**
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
| 1 | Start typing in the first box | | | |
| 2 | Tap Nudge me, type under the hint | | | |
| 3 | Tap Nudge me without answering the previous hint (empty section) | | | |
| 4 | Tap Already covered on a hint | | | |
| 5 | Go back to an earlier box and edit it | | | |
| 6 | Speak into a middle box | | | |
| 7 | Scroll the working with the keyboard open | | | |
| 8 | Expand the question while typing | | | |
| 9 | Enter an estimate and submit; check the saved data | | | |
| 10 | Open on a laptop | | | |

Screenshots go in `screenshots/`, named by row number (for example `03.png`).

## Findings

**What works**

-

**Problems**

-

## Decision

**Decision:** keep as designed / adjust / rethink (decided  October 2026)

**Reason:**

**Changes to `docs/design/screens.md`:**

-
