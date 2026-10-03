# iPhone users in India: solver B

# Estimating iPhone users in India (October 2026)

I found three approaches that start from genuinely different bases. A fourth idea, working from Apple India revenue, is only another way of getting annual unit sales, so I folded it into Approach 2.

---

## APPROACH 1: Population to smartphone users to iOS share

**1. Summary.** Start from the population, narrow it to smartphone users, then apply Apple's share of phones in use.

**2. Method.** Demand-side (funnel). Base: India's population.

**3. Assumptions**
- The unit is a unique person whose main phone is an iPhone, in active use today.
- iPads and Macs are excluded.

**4. Steps**
1. Population.
2. Smartphone users as a share of population, or take the smartphone-user count directly.
3. iPhone share of phones in use. This is the base of all phones people are using, not this year's sales.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Population | 1.43 | 1.47 | bn people | (a) UN or government projections, updated every year |
| Smartphone users | 650 | 800 | m people | (a) Telecom regulator subscriber data and industry reports (internet association, research firms), published every year. Mobile *connections* (about 1.15bn) are a different figure. |
| iPhone share of phones in use | 4% | 7% | % of users | Partly (a): web-traffic trackers publish India iOS share at about 4 to 5% each month. Treating that as a share of users is (b), an assumption. |

**6. Calculation**
- Central: 750m × 5.5% ≈ **41m**
- Low: 650m × 4% ≈ 26m
- High: 800m × 7% ≈ 56m

**7. Catches**
- Apple's share of sales (about 7 to 10% of units recently) is higher than its share of phones in use, because older Android phones remain in the base.
- Web-traffic share measures page views, not people.
- Connections are not users, because of dual SIMs and multiple devices per person.

**8. Sanity check.** iPhone users should be no more than the affluent and upper-middle population plus a used-phone tail. That ceiling is roughly 60 to 80m people.

**9. Common mistakes**
- Using total population or mobile connections (about 1.1bn) as the base.
- Using Apple's share of sales or of sales revenue (Apple is about 20%+ by value in some years) instead of its share of phones in use.

---

## APPROACH 2: Installed base from sales history

**1. Summary.** Add up iPhones sold in India over recent years. Remove the ones no longer in use, add used imports, then convert devices to people.

**2. Method.** None of the three labels fits. This is a stock-and-flow calculation: the number in use is cumulative sales times the share still working, not a capacity calculation. Base: Apple's annual shipments into India.

**3. Assumptions**
- Count domestic sales only. Phones made in India for export are excluded.
- "Right now" means October 2026, so 2026 counts as roughly three quarters.

**4. Steps**
1. List annual India iPhone shipments for each year.
2. Apply a survival rate by age of phone.
3. Add older phones still in use, plus refurbished and grey-market imports.
4. Divide devices by iPhones per user to get users.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Shipments 2020 / 2021 / 2022 | 2.5 / 4.5 / 6 | 3.5 / 5.5 / 7 | m units | (a) Smartphone market trackers publish these every quarter and year |
| Shipments 2023 / 2024 / 2025 | 8.5 / 10.5 / 12.5 | 10 / 12.5 / 14.5 | m units | (a) Same trackers |
| Shipments 2026 to date (Jan to Sep) | 9 | 11 | m units | (a) Same trackers. Partial year. |
| Survival rate, 4 to 6 years old | 40% | 65% | % | (b) Assumption |
| Survival rate, 1 to 3 years old | 85% | 98% | % | (b) Assumption. iPhones are commonly resold and passed down. |
| Pre-2020 phones still active | 0.5 | 2 | m units | (b) Assumption |
| Net refurbished and grey imports | 1 | 4 | m units | (b) Assumption. The used market is large but not tracked well. |
| iPhones per user | 1.03 | 1.10 | ratio | (b) Assumption |

**6. Calculation (central)**
- Shipments 2020 to 2026: 3 + 5 + 6.5 + 9.2 + 11.5 + 13.5 + 10 ≈ 58.7m units
- After survival (about 55% for 2020, 65% for 2021, 80% for 2022, 95% for 2023 to 2026): 1.6 + 3.2 + 5.2 + 8.7 + 10.9 + 12.8 + 9.5 ≈ 51.9m
- Plus pre-2020 phones (1m) and refurbished imports (2m): about 55m devices
- Divided by 1.06 iPhones per user: about **52m users**
- Range: low ≈ 38m, high ≈ 63m

**7. Catches**
- India assembles a large and growing share of the world's iPhones, so production figures are far higher than domestic sales.
- When someone upgrades, the old phone is handed down, sold or put in a drawer. Only the handed-down share keeps adding users.
- Partial-year shipments are easy to double count.

**8. Sanity checks**
- Annual sales divided by a 3.5 to 4 year replacement cycle should give roughly the same installed base: about 13m × 4 ≈ 52m.
- A cross-check from revenue: Apple India's roughly $8 to 9bn revenue, times an iPhone share of about 70%, divided by an average selling price of about $700, gives about 8 to 9m units a year. That is consistent with the tracked shipment volumes if revenue is reported on a fiscal-year or net basis.

**9. Common mistakes**
- Counting sales without removing retired phones.
- Using India production or export numbers.
- Treating devices as users.
- Forgetting the used and refurbished channel.

---

## APPROACH 3: Household income segments

**1. Summary.** Split households by income band and apply iPhone ownership per household in each band.

**2. Method.** Demand-side (funnel). The base is different from Approach 1: households grouped by income rather than individuals.

**3. Assumptions**
- Household income is annual.
- Equated monthly instalment (EMI) financing and used phones reach lower bands, so penetration below the top bands is not zero.

**4. Steps**
1. Total households.
2. Split them into income bands.
3. Apply iPhones per household in each band.
4. Add up across bands.

**5. Drivers**

| Driver | Low | High | Unit | Type |
|---|---|---|---|---|
| Households | 300 | 320 | m | (a) Census projections and national surveys |
| Rich households (above ₹30 lakh a year) | 3% | 5% | % of households | (a) Consumer-economy surveys (for example, PRICE/ICE 360) every few years |
| Upper-middle (₹10 to 30 lakh) | 12% | 18% | % | (a) Same surveys, but band edges differ between sources |
| Lower-middle (₹5 to 10 lakh) | 18% | 24% | % | (a) Same surveys |
| iPhones per rich household | 1.0 | 2.0 | units | (b) Assumption |
| iPhones per upper-middle household | 0.2 | 0.4 | units | (b) Assumption |
| iPhones per lower-middle household | 0.04 | 0.12 | units | (b) Assumption |
| iPhones per household, all others | 0.01 | 0.03 | units | (b) Assumption |

**6. Calculation (central)**

| Band | Households | × iPhones per household | iPhones |
|---|---|---|---|
| Rich | 12m | 1.5 | 18m |
| Upper-middle | 45m | 0.3 | 13.5m |
| Lower-middle | 63m | 0.08 | 5m |
| All others | 190m | 0.02 | 3.8m |
| **Total** | | | **≈ 40m** |

Range: low ≈ 25m, high ≈ 60m.

**7. Catches**
- Income bands change a lot from one source to another.
- Top incomes are under-reported in surveys.
- Business-issued phones are missing from household income.
- EMI financing and used phones push penetration well below the price-affordable bands.

**8. Sanity check.** A flagship iPhone costs ₹70k to ₹1.5 lakh, which is more than 10% of annual income below the upper-middle band. Penetration should therefore fall sharply below that band.

**9. Common mistakes**
- Assuming only the rich own iPhones.
- Ignoring multiple iPhones in one household.
- Using income bands from one source with percentages from another.

---

## THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE

**Ambiguity in the wording**
- **"Users" vs devices.** The answer should be in people. One person can have two iPhones, and one handed-down iPhone has one user.
- **Main phone vs any phone.** Some people carry an iPhone alongside an Android. Pick one definition and state it.
- **Owned vs active.** Phones sitting in drawers should be excluded.
- **"Right now".** Fix the date (October 2026). The base grows about 10 to 15% a year, so an answer from two years ago would be about 25% too low.
- **iPads.** Excluded unless the interviewer says otherwise.

**Segment splits worth storing**
- Metro vs non-metro: iPhones are likely heavily concentrated in the top 8 to 10 cities, perhaps 55 to 65% of users. This is an assumption.
- New vs used or refurbished channel.
- Personal vs corporate-issued phones.

**Key distinctions a question file must hold**
- Share of sales (higher) vs share of phones in use (lower).
- Production in India vs sales in India.
- Smartphone users vs mobile connections.

**Which approach is more defensible**
- Approach 2 is the most defensible because its main inputs, Apple's India shipments, are tracked publicly every quarter and are widely reported. Its weak points are the survival rate and the used-phone channel.
- Approach 1 is the fastest and best for an opening estimate, but it depends on one number (share of phones in use) that is easy to misuse.
- Approach 3 is the weakest on data. It is most useful as a ceiling check and as a way to show business understanding: Apple's premium positioning, EMI financing and the role of the used market.
- A strong candidate opens with Approach 1 and cross-checks with Approach 2. If the two answers differ by more than 30%, the candidate should explain why, usually share of sales being confused with share of phones in use.

**Reasonable answer band**
- Acceptable: 30 to 60m users. Best central estimate: about 40 to 50m.
- Below 20m usually means the candidate used old share data or ignored the used channel.
- Above 80m usually means the candidate used share of sales or production numbers.

**Possible interviewer follow-ups**
- Growth rate of the base.
- What the used-phone market contributes.
- How Apple's own retail stores and local assembly change the funnel.
- Apple's share of revenue vs share of units.
