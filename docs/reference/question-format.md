# Question file format

**Card:** #48 Question file format
**Date:** 3 October 2026
**Decided by:** Akansha Singh (product owner). Fields come from the stress test in [docs/spikes/format/2026-10-03-format-stress-test.md](../spikes/format/2026-10-03-format-stress-test.md).

## In brief

- One JSON file per question, in `questions/`, named `<id>.json`.
- The agent pipeline (#49) writes these files. The app reads them to show a question. The grader (#52) reads them to judge an answer. The band calculation (#50) reads the driver ranges.
- `node scripts/check-questions.mjs` checks every file. A file that fails the check cannot become `ready`.
- One question has one answer. Questions with several parts, cost breakdowns or a scope the user chooses wait for Release 3.

## Why JSON

The owner already reads JSON, the app reads it with no extra library, and AI models write it reliably. YAML was considered for easier reading of long text; the owner chose JSON.

## Fields

`Req` means required. Everything else may be left out or set to `null`.

### Question level

| Field | Req | Type | Meaning |
|---|---|---|---|
| `format_version` | Req | number | Version of this format. Currently `1`. |
| `id` | Req | text | Lower case words joined by hyphens. Must match the file name. |
| `question` | Req | text | The question exactly as the user sees it. |
| `status` | Req | text | One of `draft`, `ready`, `needs-rewrite`, `parked`, `rejected`, `retired`. Only `ready` questions appear in the app. |
| `status_reason` | Req unless `draft` or `ready` | text | Why the question is in this status. |
| `answer` | Req | object | What the answer counts. See below. |
| `scope` | Req | object | The boundaries and conventions the reference answer assumes. See below. |
| `reference_date` | Req | text | When the reference answer is true, as `YYYY-MM`. Answers about the present go stale. |
| `bands` | Req | object | What counts as a good, acceptable or wrong answer. See below. |
| `real_figure` | | object | A published figure to check the bands against, if one exists. See below. |
| `known_bias` | | text | A way most sound estimates go wrong for this question, and why. |
| `provenance` | Req | object | Where the question came from and who reviewed it. See below. |
| `difficulty` | Req | object | The structural difficulty and the counts it comes from. See below. |
| `figures` | Req | object | Every figure a driver relies on, keyed by a short name. May be empty `{}`. See below. |
| `paths` | Req | list | One or more solution paths. See below. |

### `answer`

| Field | Req | Meaning |
|---|---|---|
| `counts` | Req | One sentence on exactly what the number counts, for example "Swiggy delivery partners who completed at least one order in the month". |
| `unit` | Req | The unit of the answer, for example `delivery partners`. |
| `alternatives` | | Other readings of the question a user might reasonably take. Each has `definition`, `conversion` (how it relates to the main reading) and `accepted` (`true` if an answer on this reading gets credit when the user states it). |

### `scope`

| Field | Req | Meaning |
|---|---|---|
| `assumptions` | Req | List of the boundaries the reference answer assumes: geography, what is included or left out, currency, tax, year basis. |

### `bands`

All numbers are in `answer.unit`.

| Field | Req | Meaning |
|---|---|---|
| `good` | Req | `{ "low": n, "high": n }`. A strong answer lands here. |
| `acceptable` | Req | `{ "low": n, "high": n }`. A sound answer with weaker assumptions lands here. Must contain `good`. Outside this band usually means a structural error. |
| `note` | | Where the bands came from. Until #50 calculates ranges in code, bands are proposed by the solvers and approved in review. |

### `real_figure`

| Field | Req | Meaning |
|---|---|---|
| `value` | Req | The published number, in `answer.unit`. |
| `source` | Req | Who published it. |
| `url` | | A link to the source. |
| `date` | Req | When it was true, as `YYYY-MM`. |
| `note` | | Anything needed to compare it fairly, such as "counts movements, not departures". |

### `provenance`

| Field | Req | Meaning |
|---|---|---|
| `origin` | Req | Where the question came from, for example a casebook and page. |
| `source_ref` | | The id in `docs/spikes/archetypes/labelled-problems.csv`, if any. |
| `written_by` | Req | Who drafted the file, for example `agent pipeline` or `Claude (hand-written sample)`. |
| `reviewed_by` | Req for `ready` | Who approved it. |
| `reviewed_on` | Req for `ready` | Date approved, as `YYYY-MM-DD`. |
| `review_notes` | | Why it was approved or sent back. |

### `difficulty`

The level is calculated from the counts by the rule in [archetypes.md](archetypes.md#difficulty-rule), and the check script confirms the stored level matches. Counts come from the main path.

| Field | Req | Meaning |
|---|---|---|
| `level` | Req | `easy`, `medium` or `hard`. |
| `filters` | Req | Number of narrowing or multiplying steps, not counting the starting base or a final multiply. |
| `branches` | Req | Number of separate segments built in parallel (for example urban and rural). One branch means no split. |
| `catches` | Req | List of the catches, as text. The count is the length of the list. |
| `counted_from_path` | Req | The `id` of the path the counts come from. |

The rule as the script applies it:

| Level | Rule |
|---|---|
| Hard | Two or more catches, or a long build (4 or more filters) with a catch |
| Medium | 4 or more filters, or more than one branch, or one catch |
| Easy | Anything else |

"Long build" was not defined as a number in the archetype spike. Setting it at 4 or more filters reproduces the spike's labels for 83 of the 101 labelled problems, better than 5 filters (76) or 6 (78).

### `figures`

Each figure is keyed by a short name that drivers refer to. A figure either has all of its details, or is marked as an assumption.

| Field | Req | Meaning |
|---|---|---|
| `assumption_only` | Req | `true` if no reliable published figure exists. Then only `value` and `unit` are needed. |
| `value` | Req | The number. |
| `unit` | Req | Its unit. |
| `source` | Req unless assumption only | Who publishes it. |
| `date` | Req unless assumption only | When it was true, as `YYYY-MM`. |
| `update_cadence` | Req unless assumption only | How often the source updates it, for example `annual`. |
| `auto_checkable` | Req unless assumption only | `true` if a script could fetch it from the source. |
| `fallback` | Req unless assumption only | The value to use if the source cannot be reached. |

A figure entry is needed only for a driver backed by a published number. Pure assumptions stay on the driver itself.

### `paths`

A question has as many paths as it honestly has. Two paths are distinct only if they start from a different base or use a different method.

| Field | Req | Meaning |
|---|---|---|
| `id` | Req | Unique within the question, for example `path-1`. |
| `name` | Req | A short name, for example "Orders divided by orders per partner". |
| `role` | Req | `main` (a full build), `cross-check` (a quicker check on the main answer), `ceiling` (an upper limit) or `floor` (a lower limit). At least one path is `main`. |
| `archetype` | Req | The archetype from [archetypes.md](archetypes.md), written `demand-side`, `supply-side` or `demand-over-supply`, or `none`. The check script accepts any label, so new archetypes need no code change. |
| `no_archetype_reason` | Req if `none` | One line on why no archetype fits. |
| `base` | Req | What the path starts from. |
| `steps` | Req | The steps in order, as a list of text. |
| `drivers` | Req | The inputs, as a list. See below. |
| `model_solution` | Req | The worked solution in a few plain sentences, with numbers. |
| `central_estimate` | Req | The path's central answer, in `answer.unit`. |
| `catches` | Req | The traps in this path, as a list of text. May be empty. |
| `common_mistakes` | Req | Mistakes a user often makes on this path, as a list of text. These feed the planted-errors test (#53). |
| `sanity_check` | Req | How to check the answer is plausible. |

### Drivers

| Field | Req | Meaning |
|---|---|---|
| `name` | Req | What the driver is. |
| `low` | Req | Low end of a plausible range. |
| `high` | Req | High end. Must not be below `low`. |
| `unit` | Req | Its unit. |
| `basis` | Req | `documented` if a published figure backs it, otherwise `assumption`. |
| `figure` | Req if `documented` | The key of the entry in `figures`. |

## Example

The full worked example is [questions/swiggy-delivery-partners-mumbai.json](../../questions/swiggy-delivery-partners-mumbai.json). A second file, [questions/petrol-pumps-india.json](../../questions/petrol-pumps-india.json), shows a real figure and a known bias.

A shortened version, with one path:

```json
{
  "format_version": 1,
  "id": "swiggy-delivery-partners-mumbai",
  "question": "Estimate the number of Swiggy delivery partners in Mumbai.",
  "status": "draft",
  "status_reason": null,
  "answer": {
    "counts": "Swiggy delivery partners who completed at least one order in the month",
    "unit": "delivery partners",
    "alternatives": [
      { "definition": "Daily active partners", "conversion": "about 0.6 times monthly active", "accepted": true }
    ]
  },
  "scope": { "assumptions": ["Mumbai urban agglomeration, about 2 crore people", "Food delivery and Instamart share one partner pool"] },
  "reference_date": "2026-10",
  "bands": { "good": { "low": 20000, "high": 60000 }, "acceptable": { "low": 10000, "high": 100000 } },
  "real_figure": null,
  "provenance": { "origin": "FMS Consulting Casebook 2023-24, printed p.115", "source_ref": "FMS-26", "written_by": "Claude (hand-written sample)", "reviewed_by": null, "reviewed_on": null },
  "difficulty": { "level": "hard", "filters": 5, "branches": 2, "catches": ["Daily active partners are not monthly active partners"], "counted_from_path": "path-1" },
  "figures": {},
  "paths": [
    {
      "id": "path-1",
      "name": "Orders divided by orders per partner",
      "role": "main",
      "archetype": "demand-over-supply",
      "base": "Mumbai population",
      "steps": ["Daily orders = population x share ordering x Swiggy share x orders per month / 30", "Daily active partners = daily orders / orders per partner per day", "Monthly active = daily active / share of the month a partner works"],
      "drivers": [{ "name": "Orders per partner per day", "low": 10, "high": 18, "unit": "orders", "basis": "assumption" }],
      "model_solution": "About 3 lakh orders a day at 14 orders per partner is about 21,000 partners a day, or about 35,000 in a month.",
      "central_estimate": 35000,
      "catches": ["Batching raises orders per partner"],
      "common_mistakes": ["Reporting daily active partners as the answer"],
      "sanity_check": "Peak-hour orders should need about as many riders as the daily active count."
    }
  ]
}
```

## Checking files

| Command | What it does |
|---|---|
| `node scripts/check-questions.mjs` | Checks every file in `questions/` and lists each problem in plain words |
| `node scripts/check-questions.mjs questions/<id>.json` | Checks one file |
| `node scripts/check-questions.mjs --self-test` | Proves the check works: the real files must pass, and each file in `tests/fixtures/` must fail with the error it names |

Beyond missing fields, the script also rejects: a status other than draft or ready without a reason; a `ready` question without a reviewer; `none` as archetype without a reason; a documented driver pointing at a missing figure; a driver whose low is above its high; bands where acceptable does not contain good; a real figure outside the acceptable band; a stored difficulty level the rule does not give.

## Not in this version

Kept for later, from the stress test: rejected approaches, domain knowledge needed, segment splits, interviewer follow-ups, and question parts, breakdown answers and user-chosen scope (Release 3). Signs of a strong answer for a particular question are decided with #51 Rubric.
