# Voice spike results (#23)

Checks whether Chrome on Android can turn spoken guesstimate answers into accurate text.

- **Test page:** https://itsiakanshasingh-beep.github.io/guesstimate-trainer/voice-test/
- **Device:** _(phone model and Android version)_
- **Chrome version:** _(Chrome menu > Settings > About Chrome)_
- **Date tested:** _(date)_
- **Tester:** _(name)_

## How to run each test

1. Tap **Clear text**.
2. Tap the microphone, read the statement aloud at a normal pace, then tap to stop.
3. Take a screenshot and save it as `screenshots/NN.png`, where NN is the statement number (for example `07.png`).
4. Rate it:
   - **Pass:** words and numbers are right.
   - **Minor:** a small word is wrong but the meaning is kept.
   - **Fail:** the meaning or a number is wrong.

## What to look for

- **Numbers:** written as digits ("67 million") or words ("sixty seven million").
- **Symbols:** "pounds" shown as "£", "percent" shown as "%".
- **Jargon:** terms such as "top-down" and "penetration rate".
- **Pauses:** whether listening stops by itself during a thinking pause.
- **Repeats:** any words repeated or missing.

## Pass rule (proposed)

The spike passes if at least 20 of 25 statements are rated Pass or Minor, and no number is wrong in Levels 2 to 4.

## Statements and results

### Level 1: Plain sentences

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 1 | I think the answer is about one hundred. | one I think the answer is about 100 | Pass | "one hundred" written as digits. Leading "one" is likely the statement number read aloud. No repeated words. | [01](screenshots/01.png) |
| 2 | Let me start with the population. | let me start with the population | Pass | Exact match. No capital letter or full stop added. | [02](screenshots/02.png) |
| 3 | The market is growing every year. | the market is growing every year | Pass | Exact match. | [03](screenshots/03.png) |
| 4 | I would split this into two groups. | I would split this into two groups | Pass | Exact match. "two" kept as a word, while "one hundred" in statement 1 became digits. | [04](screenshots/04.png) |

### Level 2: Numbers, money and percentages

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 5 | The UK has about sixty-seven million people. | the UK has about 67 million people | Pass | Number correct, written as "67 million" (digits plus word). "UK" capitalised. | [05](screenshots/05.png) |
| 6 | Roughly two point five people live in each household. | roughly 2.5 people live in each household | Pass | Decimal correct: "two point five" became "2.5". | [06](screenshots/06.png) |
| 7 | Around twenty percent of adults drink coffee every day. | around 20% of adults drink coffee every day | Pass | "twenty percent" became "20%", with the % symbol. | [07](screenshots/07.png) |
| 8 | A cup of coffee costs about three pounds fifty. | | | | |
| 9 | That gives us roughly one point two billion pounds a year. | | | | |

### Level 3: Guesstimate vocabulary

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 10 | The total addressable market is about four hundred million pounds. | | | | |
| 11 | I'll use a top-down approach, then check it bottom-up. | | | | |
| 12 | Let's assume a penetration rate of fifteen percent. | | | | |
| 13 | The key drivers are price, volume and frequency. | | | | |
| 14 | Revenue equals number of customers times average spend. | | | | |

### Level 4: Longer reasoning

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 15 | First I'll estimate the number of households, then how many own a car, then how often they fill up. | | | | |
| 16 | If London has nine million people and one in ten uses the Tube daily, that's nine hundred thousand trips each way. | | | | |
| 17 | Assuming each salon serves forty clients a week at thirty pounds each, that's twelve hundred pounds a week per salon. | | | | |
| 18 | I'll segment by age: under eighteen, eighteen to sixty-four, and over sixty-five. | | | | |
| 19 | Dividing fifty million by three hundred and sixty-five gives roughly one hundred and forty thousand a day. | | | | |

### Level 5: Real-world messiness

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 20 | **Hesitation:** So, um, I think it's, er, about five million. | | | | |
| 21 | **Self-correction:** That's three million, sorry, thirty million. | | | | |
| 22 | **Long pause:** The number of petrol stations is... (wait 3 seconds) ...about eight thousand. | | | | |
| 23 | **Fast speech:** Population sixty-seven million, households twenty-eight million, car ownership seventy-seven percent. | | | | |
| 24 | **Background noise:** repeat statement 5 with the TV on or in a café. | | | | |
| 25 | **Repeated words:** Yes, yes, that's right. | | | | |

## Summary

- **Pass:** _(count)_
- **Minor:** _(count)_
- **Fail:** _(count)_
- **Spike result:** _(pass or fail against the rule above)_

## Findings

- Chrome on Android resends the whole sentence so far with each new result, so the raw output repeats words. The test page removes these repeats (commit 9a74a6a). Side effect: saying the same phrase twice in a row may drop the second one (see statement 25).
- Numbers are written as digits ("one hundred" appears as "100"), which will make checking ballpark answers easier.
- The repeated-words fix works on Chrome for Android (statement 1 showed no repeats).
- Small numbers can stay as words ("two" in statement 4) while larger ones become digits ("100" in statement 1). Any later number checking must handle both.
