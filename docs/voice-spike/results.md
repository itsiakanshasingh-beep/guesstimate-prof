# Voice spike results (#23)

Checks whether Chrome on Android can turn spoken guesstimate answers into accurate text.

- **Test page:** https://itsiakanshasingh-beep.github.io/guesstimate-trainer/voice-test/
- **Device:** _(phone model and Android version)_
- **Chrome version:** _(Chrome menu > Settings > About Chrome)_
- **Date tested:** 28 September 2026
- **Tester:** _(name)_

## Outcome

**Decision: pass with conditions** (decided 28 September 2026).

Voice answering stays in Release 1. Numbers came through reliably, which matters most for guesstimates. The weak spots are known and have workarounds.

Conditions for building voice into the app:

1. The typed answer is always available. Voice is never the only way to answer.
2. Listening continues through pauses until the user stops it, and keeps unconfirmed words when Chrome stops (as on the test page).
3. A clear visual cue shows when the app is ready to listen again after a pause, because words spoken during a restart are lost.
4. Submitting an answer stops listening.
5. The user can review and edit the text before submitting.
6. If a connection error stops listening, the app says so plainly and keeps the text captured so far.
7. If numbers are ever read from spoken text automatically, the reading must handle words and digits mixed together ("three pound 50") and take the last number after a self-correction.

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
- **Spike result:** passes the rule. The pause problem in statement 22 was fixed and retested (see below). Final decision: pass with conditions (see Outcome).

## Retest after pause fix

The page now restarts listening by itself after a pause, until you tap stop (commit fdd104e). This retest checks that fix and repeats the statements where a phrase appeared twice.

Screenshots are saved as `screenshots/R1.png`, `screenshots/R2.png` and so on. Reload the test page before starting so it has the fix. Count pauses in your head; they do not need to be exact.

| # | Statement | What appeared | Rating | Notes | Screenshot |
|---|-----------|---------------|--------|-------|------------|
| R1 | **Repeat of 22:** The number of petrol stations is... (wait 3 seconds) ...about eight thousand. | the number of petrol stations is about 8000 | Pass | Full sentence captured across the pause, including the number. Statement 22 failed before the fix. Button stayed on "Listening" through the pause and only stopped when tapped. | [R1](screenshots/R1.png) |
| R2 | **Repeat of 14:** Revenue equals number of customers times average spend. | revenue equals number of customers times average spend | Pass | Exact match. No repeated "equals" this time, so the repeat in statement 14 was intermittent or spoken. | [R2](screenshots/R2.png) |
| R3 | **Repeat of 18:** I'll segment by age: under eighteen, eighteen to sixty-four, and over sixty-five. | I'll segment by age under 18 18 to 64 and over 65 | Pass | All words and numbers correct. No repeated opening phrase this time. Android's green microphone indicator still showed after stopping (to check whether it clears). | [R3](screenshots/R3.png) |
| R4 | **Pause between numbers:** The UK has about sixty-seven million people... (wait 5 seconds) ...and roughly twenty-eight million households. | the UK has about 67 million people roughly 28 million households | Minor | Both numbers correct and kept across the pause. "and", the first word after the pause, was lost. Tester heard beeps while speaking. | [R4](screenshots/R4.png) |
| R5 | **Two pauses:** First, households... (wait 3 seconds) ...then car ownership... (wait 3 seconds) ...then how often they fill up. | first households ownership how often they fill up | Fail | The first words after each pause were lost: "then car" after the first pause and "then" after the second. Losing "car" changes the meaning. | [R5](screenshots/R5.png) |
| R5b | **R5, second attempt:** same statement, speaking about 3 seconds after each beep. | first households Den car ownership then how often they fill up | Minor | All words captured after both pauses. First "then" misheard as "Den". | [R5b](screenshots/R5b.png) |
| R6 | **Long reasoning with a pause:** If each household spends about forty pounds a month on coffee... (wait 4 seconds) ...that's roughly thirteen billion pounds a year across the UK. | if each household spends about 40 pounds a month on coffee that's roughly 13 billion pounds a year across the UK | Pass | Exact match across the pause. Both numbers correct: "40 pounds", "13 billion pounds". | [R6](screenshots/R6.png) |
| R7 | **Very long pause:** Let me think... (wait 10 seconds) ...I'd say about five hundred thousand. | let me think I'd say about 500, | Fail | Listening survived the 10-second pause and no error showed. But the number reads "500," instead of "500,000": "thousand" is missing. Tester confirmed the text stayed like this after stopping. | [R7](screenshots/R7.png) |
| R7b | **R7, second attempt:** same statement. | let me think I'd say about 5 | Fail | Worse than the first attempt: "hundred thousand" lost, leaving "5". Tester observed that the phone beeps at regular intervals during silence, and words spoken too close to a beep are not captured. | [R7b](screenshots/R7b.png) |
| R7c | **R7, after the grey-words fix** (commit 687a6c2): same statement. | let me think I'd say about 500,000 | Pass | Full number kept after the 10-second pause: "500,000". Screenshot taken while still listening. | [R7c](screenshots/R7c.png) |
| R8 | **Full answer, no planned pauses:** To estimate the number of dentists in the UK, I'll start with sixty-seven million people, assume each visits a dentist twice a year, which gives about one hundred and thirty million visits, and if a dentist handles about four thousand visits a year, we need roughly thirty-three thousand dentists. | to estimate the number of dentists in the UK I will start with 67 million people each visits a dentist twice an ear gives about 130 million visits and if the dentist handles about 4,000 visits and a year we need roughly 33,000 dentists | Minor | All four numbers correct: "67 million", "130 million", "4,000", "33,000". Small word errors: "assume" and "which" missing, "a year" heard as "an ear" and "and a year". A "needs an internet connection" error showed at the end, with wifi on. Tester not sure whether listening stopped by itself or was tapped to stop. | [R8](screenshots/R8.png) |

Also note whether the phone beeps or the button flickers when listening restarts after a pause.

### Retest summary

| Result | Tries |
|--------|-------|
| Pass | 5 (R1, R2, R3, R6, R7c) |
| Minor | 3 (R4, R5b, R8) |
| Fail | 3 (R5, R7, R7b) |

- The pause fix works: listening continues through pauses until the user taps stop.
- The grey-words fix works: the number cut short in R7 and R7b came through in full in R7c.
- Both fails after the pause fix (R5 and R7b) came from speaking too close to a restart. This is a limit of Chrome's speech recognition on Android, not something the page can fully fix.
- Voice is never the only way to answer: the typed fallback required by the build rules covers these cases.

## Laptop check

The app must also work in a laptop browser, because recruiters will open the link there. This checks voice in Chrome on a laptop, and the "not supported" message in a browser without speech recognition.

- **Laptop and operating system:** _(for example, MacBook, macOS 15)_
- **Chrome version:** _(Chrome menu > Settings > About Chrome)_

Screenshots are saved as `screenshots/L1.png`, `screenshots/L2.png` and so on. Take each screenshot after tapping stop.

| # | Browser | Statement | What appeared | Rating | Notes | Screenshot |
|---|---------|-----------|---------------|--------|-------|------------|
| L1 | Chrome | **Repeat of 5:** The UK has about sixty-seven million people. | the UK has about 67 million people | Pass | Exact match, same as on the phone. | [L1](screenshots/L1.png) |
| L2 | Chrome | **Repeat of 8:** A cup of coffee costs about three pounds fifty. | a cup of coffee costs about £3.50 | Pass | Money written as "£3.50" with the £ symbol. Better than the phone, which gave "three pound 50" (statement 8). | [L2](screenshots/L2.png) |
| L3 | Chrome | **Repeat of R4:** The UK has about sixty-seven million people... (wait 5 seconds) ...and roughly twenty-eight million households. | the UK has about 67 million people and roughly 28 million households | Pass | Exact match across the pause. "and" kept, which was lost on the phone (R4). Beeps: _(to confirm)_. | [L3](screenshots/L3.png) |
| L4 | Firefox | Open the test page. Expected: the button shows "Not supported" and is greyed out, with a message below it. | Button greyed out with "Not supported". Message: "This browser does not support speech recognition. Try Chrome on Android or on a laptop." | Pass | Works as expected. Screenshot cropped to the page only. | [L4](screenshots/L4.png) |

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
- The pause fix works on Chrome for Android: after the page restarts listening, speech after a 3-second pause is kept (R1).
- Because listening now only stops when tapped, the user must remember to tap stop. In the real app, submitting an answer should also stop listening.
- The phone beeps when listening restarts. The tester heard it just after finishing a phrase, at the start of the pause, which means Chrome stops as soon as speech ends rather than after a few seconds of silence. The beep is an Android system sound; a web page cannot switch it off. It may be distracting during a long answer (R4).
- A word spoken just as listening restarts can be lost ("and" in R4), because there is a short gap between Chrome stopping and the page starting it again.
- The first word or two after each pause are regularly lost, not just occasionally ("and" in R4; "then car" and "then" in R5). Each restart takes a moment before Chrome is ready to hear again.
- Waiting for the restart beep before speaking again avoids the lost words (R5b, compared with R5). The real app would need a clear cue showing when it is ready to listen again, because users cannot be expected to wait for a beep.
- A number was cut short at the end of an answer ("500," instead of "500,000" in R7), the only wrong number in the spike. Likely cause: Chrome stopped while the last words were still grey (not yet confirmed), and the page only keeps confirmed words when Chrome stops. A possible fix is to also keep the last grey words when Chrome stops.
- During a long silence Chrome keeps stopping and the page keeps restarting it, so the phone beeps at regular intervals (tester's observation, R7b). Speech that starts too close to a restart is not captured, and the end of a number can be cut off ("5" instead of "500,000"). The user cannot see when a restart is about to happen, so this cannot be avoided by waiting. This looks like a limit of the browser's built-in speech recognition on Android rather than something the page can fully fix.
- After the page was changed to keep unconfirmed (grey) words when Chrome stops, the full number came through after a 10-second pause (R7c, compared with R7 and R7b).
- A "network" error appeared at the end of a long answer while the phone was on wifi (R8). The page treats this error as final and stops listening. It may be a brief connection drop to Google's speech service, which Chrome on Android uses behind the scenes.
- Laptop Chrome formats spoken money properly ("£3.50" in L2), while Chrome on Android did not ("three pound 50" in statement 8). The same speech gives different text on different devices, so any later number reading must handle both forms.
- In Firefox the page clearly says voice is not supported (L4). The wording "Try Chrome on Android or on a laptop" is confusing for someone already on a laptop; the real app should say "Try Google Chrome" and point to the typed answer.
