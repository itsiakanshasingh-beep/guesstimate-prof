# Voice spike results (#23)

Checks whether Chrome on Android can turn spoken guesstimate answers into accurate text.

- **Test page:** https://itsiakanshasingh-beep.github.io/guesstimate-trainer/voice-test/
- **Device:** _(phone model and Android version)_
- **Chrome version:** _(Chrome menu > Settings > About Chrome)_
- **Date tested:** 28 September 2026
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
| 8 | A cup of coffee costs about three pounds fifty. | a cup of coffee costs about three pound 50 | Minor | Value is recoverable, but not written as "£3.50". Mixed format: "three" as a word, "50" as digits, and "pounds" became "pound". | [08](screenshots/08.png) |
| 9 | That gives us roughly one point two billion pounds a year. | that gives us roughly 1.2 billion pounds a year | Pass | Number correct: "1.2 billion". "pounds" kept as a word, no £ symbol. | [09](screenshots/09.png) |

### Level 3: Guesstimate vocabulary

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 10 | The total addressable market is about four hundred million pounds. | the total addressable market is about 400 million pounds | Pass | Exact match. "total addressable market" recognised; "400 million" correct. | [10](screenshots/10.png) |
| 11 | I'll use a top-down approach, then check it bottom-up. | I will use a top down approach then check it bottom up | Pass | Words correct. Hyphens and comma dropped; "I'll" appeared as "I will". Meaning kept. | [11](screenshots/11.png) |
| 12 | Let's assume a penetration rate of fifteen percent. | let's assume a penetration rate of 15% | Pass | Exact match. "penetration rate" recognised; "15%" with the % symbol. | [12](screenshots/12.png) |
| 13 | The key drivers are price, volume and frequency. | the key drivers are prize volume and frequency | Minor | "price" misheard as "prize". A reader can still tell what was meant. Commas dropped. | [13](screenshots/13.png) |
| 14 | Revenue equals number of customers times average spend. | revenue equals equals number of customers times average spend | Minor | "equals" appears twice. All other words correct. Tester not sure whether "equals" was said twice, so the cause is unconfirmed (see Findings). | [14](screenshots/14.png) |

### Level 4: Longer reasoning

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 15 | First I'll estimate the number of households, then how many own a car, then how often they fill up. | first I'll estimate the number of households then how many may own a car and then how often they fill up | Pass | Tester confirmed "may" and "and" were spoken. Long sentence captured in full. | [15](screenshots/15.png) |
| 16 | If London has nine million people and one in ten uses the Tube daily, that's nine hundred thousand trips each way. | if London has 9 million people and one in 10 use the tube daily that's 900,000 trips each way | Pass | All three numbers correct: "9 million", "one in 10", "900,000". Minor grammar only ("use" for "uses", "tube" lower case). | [16](screenshots/16.png) |
| 17 | Assuming each salon serves forty clients a week at thirty pounds each, that's twelve hundred pounds a week per salon. | assuming it's salons serves 40 clients a week at 30 pounds each that's 1200 pounds a week per salon | Minor | All three numbers correct: "40", "30 pounds", "1200 pounds". "each salon" misheard as "it's salons"; meaning still clear. | [17](screenshots/17.png) |
| 18 | I'll segment by age: under eighteen, eighteen to sixty-four, and over sixty-five. | I'll segment by H I'll segment by age under 18 18 to 64 and over 65 | Minor | All numbers correct: "18", "18 to 64", "65". Opening phrase appears twice: first misheard ("age" as "H"), then corrected. With no punctuation, "under 18 18 to 64" is harder to read. | [18](screenshots/18.png) |
| 19 | Dividing fifty million by three hundred and sixty-five gives roughly one hundred and forty thousand a day. | dividing 50 million by 365 gives roughly 140,000 a day | Pass | Exact match. All three numbers correct: "50 million", "365", "140,000". | [19](screenshots/19.png) |

### Level 5: Real-world messiness

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| 20 | **Hesitation:** So, um, I think it's, er, about five million. | so um I think there is a about 5 million | Minor | Number correct: "5 million". "um" kept as a word; "er" probably became "a"; "it's" became "there is". Meaning kept. | [20](screenshots/20.png) |
| 21 | **Self-correction:** That's three million, sorry, thirty million. | that's 3 million sorry 30 million | Pass | Exact match. Both numbers correct. Both the wrong and corrected number are kept, as spoken. | [21](screenshots/21.png) |
| 22 | **Long pause:** The number of petrol stations is... (wait 3 seconds) ...about eight thousand. | the number of petrol station is | Fail | Listening stopped during the pause and the button returned to "Tap to speak". The second half, including the number, was lost. | [22](screenshots/22.png) |
| 23 | **Fast speech:** Population sixty-seven million, households twenty-eight million, car ownership seventy-seven percent. | population 67 million households 28 million car ownership 77% | Pass | Exact match at speed. All three numbers correct: "67 million", "28 million", "77%". | [23](screenshots/23.png) |
| 24 | **Background noise:** repeat statement 5 with the TV on or in a café. | the UK has about 67 million people | Pass | Exact match, same as statement 5 in quiet. Noise: YouTube playing at a reasonable volume. | [24](screenshots/24.png) |
| 25 | **Repeated words:** Yes, yes, that's right. | yes yes that's right | Pass | Exact match. The repeat filter did not drop the second "yes". | [25](screenshots/25.png) |

## Summary

| Level | Pass | Minor | Fail |
|-------|------|-------|------|
| 1: Plain sentences | 4 | 0 | 0 |
| 2: Numbers, money and percentages | 4 | 1 | 0 |
| 3: Guesstimate vocabulary | 3 | 2 | 0 |
| 4: Longer reasoning | 3 | 2 | 0 |
| 5: Real-world messiness | 4 | 1 | 1 |
| **Total** | **18** | **6** | **1** |

- **Pass or Minor:** 24 of 25 (rule needs 20).
- **Wrong numbers in Levels 2 to 4:** none.
- **Spike result (proposed):** passes the rule, with one condition. Listening stops by itself after a pause (statement 22), so the real app must restart listening automatically until the user taps stop.

## Retest after pause fix

The page now restarts listening by itself after a pause, until you tap stop (commit fdd104e). This retest checks that fix and repeats the statements where a phrase appeared twice.

Screenshots are saved as `screenshots/R1.png`, `screenshots/R2.png` and so on. Reload the test page before starting so it has the fix. Count pauses in your head; they do not need to be exact.

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| R1 | **Repeat of 22:** The number of petrol stations is... (wait 3 seconds) ...about eight thousand. | | | | |
| R2 | **Repeat of 14:** Revenue equals number of customers times average spend. | | | | |
| R3 | **Repeat of 18:** I'll segment by age: under eighteen, eighteen to sixty-four, and over sixty-five. | | | | |
| R4 | **Pause between numbers:** The UK has about sixty-seven million people... (wait 5 seconds) ...and roughly twenty-eight million households. | | | | |
| R5 | **Two pauses:** First, households... (wait 3 seconds) ...then car ownership... (wait 3 seconds) ...then how often they fill up. | | | | |
| R6 | **Long reasoning with a pause:** If each household spends about forty pounds a month on coffee... (wait 4 seconds) ...that's roughly thirteen billion pounds a year across the UK. | | | | |
| R7 | **Very long pause:** Let me think... (wait 10 seconds) ...I'd say about five hundred thousand. | | | | |
| R8 | **Full answer, no planned pauses:** To estimate the number of dentists in the UK, I'll start with sixty-seven million people, assume each visits a dentist twice a year, which gives about one hundred and thirty million visits, and if a dentist handles about four thousand visits a year, we need roughly thirty-three thousand dentists. | | | | |

Also note whether the phone beeps or the button flickers when listening restarts after a pause.

## Findings

- Chrome on Android resends the whole sentence so far with each new result, so the raw output repeats words. The test page removes these repeats (commit 9a74a6a). Possible side effect: saying the same phrase twice in a row might drop the second one. Statement 25 showed this did not happen for "yes yes".
- Numbers are written as digits ("one hundred" appears as "100"), which will make checking ballpark answers easier.
- The repeated-words fix works on Chrome for Android (statement 1 showed no repeats).
- Small numbers can stay as words ("two" in statement 4) while larger ones become digits ("100" in statement 1). Any later number checking must handle both.
- Spoken money is not converted to a £ amount. "three pounds fifty" appeared as "three pound 50", mixing words and digits in one amount (statement 8).
- Sound-alike words can be misheard, even when they are key driver words ("price" became "prize" in statement 13). If driver checklists are ever matched automatically against a spoken answer, the matching must allow for this.
- A word was repeated at a join between pieces of text ("equals equals" in statement 14). If it was not said twice, the repeat filter misses cases where a new piece overlaps the end of the previous one rather than repeating it from the start.
- When Chrome corrects a misheard phrase, both the wrong and corrected versions can stay in the text ("I'll segment by H I'll segment by age" in statement 18). The repeat filter only removes a new piece that starts with exactly the previous piece, so a correction slips through. Together with statement 14, this suggests the filter needs to handle overlaps and corrections.
- No punctuation is added, so lists of numbers run together ("under 18 18 to 64" in statement 18).
- Filler sounds are typed as words ("um" kept, "er" probably shown as "a" in statement 20). They do not hide the number, but they add clutter to a spoken answer.
- When a speaker corrects themselves, both numbers appear ("3 million sorry 30 million" in statement 21). A person reading it can follow, but any automatic number check would need to take the last number, not the first.
- Chrome on Android stops listening by itself after a pause of about 3 seconds, even though the page asks it to keep listening. Anything said after the pause is lost (statement 22). Thinking pauses are normal in guesstimates, so the real app must restart listening automatically until the user taps stop.
