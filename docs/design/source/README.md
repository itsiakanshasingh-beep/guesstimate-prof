# Screen source (from Claude Design)

A copy of each screen's code from the [Claude Design canvas](https://claude.ai/artifact/ArMaH5CoVB2hun6mnBaFV2), taken on 1 October 2026. File names match the images in `../images/`.

**Use these as a reference for exact layout and values. Do not copy them into the app as they are.** They are static mockups: sample data is hard-coded, nothing is wired up, and the canvas is still the master copy. If the canvas changes, export again.

## Claude Design markup to translate

| In these files | In the app |
|---|---|
| `<script src="./support.js">` and the `<script type="text/x-dc">` block at the end | Leave out. They only run inside Claude Design. |
| `<x-dc>` wrapper | Leave out; keep what is inside it. |
| `<helmet>` | Its font link and styles belong in the page `<head>` or the stylesheet. |
| `{{accent}}` | The accent colour, `#1D6B63`. |
| `<dc-import name="Kb">` and `name="Numpad"` | The phone's own keyboard. Not drawn by the app. |
| `href="v2-...dc.html"` links | Show which screen comes next; use the app's own navigation. |
| Fixed `width: 390px; height: 844px` on the outer box | The phone frame of the mockup. The app fills the screen instead. |
| Inline `style="..."` | Move repeated values into shared CSS classes, using `../style.md`. |

## Files

| File | Screen |
|---|---|
| `01-home-first-visit.html` to `02-home-returning.html` | Home |
| `03-answer-start.html` to `08-answer-question-expanded.html` | Answer |
| `09-voice-speaking.html` to `13-voice-not-supported.html` | Voice states |
| `14-estimate-typing.html` to `16-swap-question-confirm.html` | Estimate, submit, swap |
| `17-results-tick-structure.html` to `21-results-off.html` | Results |
| `22-history.html` to `23-history-empty.html` | History |
| `24-laptop-home.html` to `28-laptop-history.html` | Laptop (1280 px) |
| `shared-keyboard.html`, `shared-number-pad.html` | Mock keyboards used inside the phone screens |
