# Style (Release 1)

Last updated: 1 October 2026 · Taken from the Claude Design canvas code (`docs/design/source/`)

The shared values every screen uses. For each screen's exact layout, see the matching file in `source/`; for what each screen is for, see `screens.md`.

## Colours

| Role | Value | Used for |
|---|---|---|
| Page background | `#F6F5F2` | Every screen, bottom bars |
| Surface | `#FFFFFF` | Cards, working area, inputs, secondary buttons |
| Text | `#1C1C1A` | Body text; selected difficulty button (background) |
| Text, strong secondary | `#3E3C38` | Descriptions, chip text, difficulty tag |
| Text, secondary | `#5E5B55` | Captions, helper text, "4 left", units |
| Hint text | `#67645E` | Hint labels and hint prompts in the working |
| Accent | `#1D6B63` | Wordmark, primary buttons, switch, focus border, listening state |
| Border | `#DDD9D1` | Cards, chips, question bar |
| Border, input | `#CFCAC0` | Inputs, working area, secondary buttons |
| Divider | `#E7E4DE` | Lines between checklist and list rows |
| Fill, soft | `#EFEDE8` | Chips, tags, Nudge me, mic button, hint card |
| Disabled | background `#F3F2EE`, border `#E4E1DA`, text `#8A867E` | Nudge me when all hints are shown |
| Submit, disabled | background `#DDD9D1`, text `#5E5B55` | Submit before an estimate is entered |
| Voice, wait | background `#E4E1DA`, dashed ring `#8A867E` | Mic restarting |
| Overlay | `rgba(28, 28, 26, 0.45)` | Behind the swap question sheet |
| Interim voice words | `#75726B` | Words not yet confirmed by speech recognition |

The keyboard and number pad colours (`#A3A19B`, `#B7B5AF`, `#D3D2CD`) are only in the mock keyboards, which the real app does not draw.

## Type

- **Font:** Atkinson Hyperlegible, 400 and 700, from Google Fonts. Fallback `system-ui, sans-serif`.
- **Wordmark:** "guesstimate professor", 700, accent colour, 30 px on first visit, 22 px in the top bar.

| Use | Size | Weight |
|---|---|---|
| Question (full) | 22 px, line height 1.32 | 700 |
| Question (collapsed bar) | 16 px, one line with ellipsis | 700 |
| Working text | 17 px, line height 1.5 | 400 |
| Body | 16 px, line height 1.4 | 400 |
| Buttons | 15 to 17 px | 700 |
| Labels and captions | 14 to 15 px | 700 / 400 |
| Hint label, chips, tags | 13 px | 700 |
| Hint prompt | 15 px, italic | 400 |
| Structure score | 44 px | 700 |

## Shape and size

- **Corners:** cards and inputs 14 to 16 px; pill buttons 22 to 24 px; chips and tags fully round (999 px); bottom sheet 20 px on the top corners.
- **Heights:** every control at least 48 px. Inputs and difficulty buttons 52 px. Primary buttons 56 px.
- **Spacing:** screen padding 16 to 20 px on phone; gaps between controls at least 8 px.
- **Borders:** 1 px for cards, 1.5 px for inputs and secondary buttons, 2 px accent border on the focused working area or estimate.

## Pieces

- **Primary button:** accent background, white text, 56 px tall, 14 px corners. Example: Start a question.
- **Secondary button:** white background, 1.5 px `#CFCAC0` border, 56 px, 14 px corners. Example: Swap question.
- **Difficulty buttons:** three in a grid, 8 px gap. Selected: `#1C1C1A` background, white text. Use `aria-pressed`.
- **Coach nudges switch:** 48 px tap area, accent track, white knob. Use `role="switch"` and `aria-checked`.
- **Question bar (collapsed):** white, 52 px, difficulty tag, question on one line, chevron; tap to expand.
- **Nudge me:** pill, `#EFEDE8` fill, speech bubble icon, 48 px. Count or "All shown" beside it.
- **Hint label in the working:** 13 px bold `#67645E` with a small speech bubble icon; its tap area is enlarged to 48 px.
- **Hint card:** `#EFEDE8`, 12 px corners, italic prompt, "Already covered" button and "or answer below".
- **Covered chip:** 30 px tall, `#EFEDE8`, tick icon, "Rush vs average, covered". Not a button.
- **Mic button:** 48 px circle. Idle `#EFEDE8`; listening accent with two pulsing rings; wait grey with a spinning dashed ring. Animations stop when the user prefers reduced motion.
- **Voice status bar:** full width at the bottom. Speak now: accent background, white text. Wait: `#E4E1DA`. Includes a Stop button.
- **Estimate row:** label "Your estimate", "Asked for" line, input with the unit inside, Submit (112 px wide).
- **Bottom sheet:** white, rounded top, over the dark overlay, primary action first.

## Laptop (1280 px)

- Same colours, type and pieces.
- Page padding 80 px left and right; content split into two columns (`repeat(2, minmax(0, 1fr))`).
- Home adds a 52 px headline, "Method first, number second.", with the intro text at most 500 px wide.
- On the answer screen, the hint card inside the working is at most 520 px wide.
