# iPhone users in India: solver A

**Estimate: iPhone users in India, October 2026**

**APPROACH 1: Smartphone user funnel**

1. **Summary:** Start from India's population, narrow to active smartphone users, then apply the iOS share.
2. **Method:** demand-side (funnel). Base: India's resident population.
3. **Assumptions:**
   - A "user" is a person whose main or secondary phone is a working iPhone used in the last month.
   - "Right now" means late 2026.
   - Count people, not devices.
   - iPads and other Apple devices are excluded.
4. **Steps:**
   - Population.
   - Share of the population who use a smartphone.
   - iOS share of active smartphones.
   - Remove double-counting from people who carry two phones.
5. **Drivers:**
   - **Population:** 1.43 to 1.47 bn people. (a) Published in UN World Population Prospects and in Indian government projections, updated every year.
   - **Smartphone users as a share of population:** 45% to 55%. (a) Telecom regulator data, the IAMAI/Kantar internet reports and GSMA Mobile Economy reports publish user counts (roughly 650 to 750m) once a year. Subscriptions run well above users, so use user counts.
   - **iOS share of active devices:** 4% to 8%. (a) Web-traffic trackers such as StatCounter publish this monthly, usually 4% to 6% for India. Traffic share differs from installed-base share (see Catches).
   - **Dual-phone overlap among iPhone users:** 0% to 5%. (b) Pure assumption.
6. **Calculation:**
   - Central: 1.45bn x 50% = 725m smartphone users. 725m x 6% = 43.5m. Less 2% overlap gives about **43m**.
   - Low: 1.43bn x 45% x 4% x 0.95 = about 24m.
   - High: 1.47bn x 55% x 8% = about 65m.
7. **Catches:**
   - Web-traffic share can understate iPhones (Android users on cheap data browse less) or overstate them (iPhone users browse more per head). Treat it as a proxy, not a measurement.
   - Connection counts double-count dual-SIM phones.
8. **Sanity check:** The answer should sit below cumulative Apple shipments to India over the last five or six years (Approach 2).
9. **Common mistakes:**
   - Using mobile connections (about 1.15bn) as the base.
   - Applying iPhone's share of new sales (7% to 9% by units, much higher by value) as if it were the share of all phones in use.

**APPROACH 2: Installed base from cumulative shipments**

1. **Summary:** Add up iPhones sold in India in recent years, remove the ones no longer in use, and add phones that arrived outside official sales.
2. **Method:** none of the three labels fits. This is stock-and-flow: the number in use equals units that came in minus units retired, and it is neither a funnel nor a capacity calculation. Base: annual iPhone sell-in to India.
3. **Assumptions:**
   - A phone counts as active for its working life, through first and second owners.
   - Units bought in India but taken abroad, or gifted from abroad, roughly cancel out unless flagged.
4. **Steps:**
   - Annual shipments, 2019 to 2026 year to date.
   - Survival rate by age of the phone.
   - Add grey-market and refurbished imports.
   - Convert devices to users, allowing for spares and people with two iPhones.
5. **Drivers:**
   - **Shipments by year (million units):**
     - 2019: 1.5 to 2
     - 2020: 2.5 to 3.5
     - 2021: 5 to 6
     - 2022: 6.5 to 7.5
     - 2023: 9 to 10
     - 2024: 11 to 12.5
     - 2025: 13 to 15
     - 2026 year to date: 9 to 12

     (a) Analyst firms such as IDC, Counterpoint and Canalys publish these quarterly and annually. Apple sometimes comments on India "records" in its earnings calls.
   - **Survival rate:**
     - Under 3 years old: 90% to 95%.
     - 3 to 5 years old: 60% to 80%.
     - Over 5 years old: 20% to 40%.

     (b) An assumption, informed by iPhone resale life.
   - **Grey and refurbished inflow:** 5% to 15% on top of official units. (b) Assumption. Trade bodies sometimes estimate refurbished volumes.
   - **Devices per user:** 1.0 to 1.1. (b) Assumption.
6. **Calculation:**
   - Last three years (2024, 2025, 2026 to date): about 12 + 14 + 10.5 = 36.5m, x 0.93 = 34m.
   - 2021 to 2023: 5.5 + 7 + 9.5 = 22m, x 0.7 = 15.4m.
   - Pre-2021: about 5m, x 0.3 = 1.5m.
   - Subtotal 50.9m, plus 10% grey and refurbished = 56m devices, divided by 1.05 = about **53m users**.
   - Low (bottom of each range, weaker survival): about 38m.
   - High: about 68m.
7. **Catches:**
   - Since 2023 a large share of India-assembled iPhones are exported. Use domestic shipments only, not production.
   - Shipments are sell-in to the channel, not sell-through to buyers, so channel stock inflates the latest year.
8. **Sanity check:** Apple's India revenue divided by average selling price (about ₹70k to ₹80k) should roughly reproduce the annual unit figures.
9. **Common mistakes:**
   - Summing every year with no retirement.
   - Using production or export figures.
   - Assuming a two-year life, which is US carrier-contract logic. Indian owners keep phones longer and resell them.

**APPROACH 3: Income-segment penetration**

1. **Summary:** Split households into income tiers and apply a separate iPhone ownership rate to each tier.
2. **Method:** demand-side (funnel). Base: households by income tier. It is distinct from Approach 1 because each tier's rate is built separately, which reflects how heavily Indian premium consumption is concentrated at the top.
3. **Assumptions:**
   - Count users aged roughly 15 and over.
   - Phones bought on EMI (monthly instalments) and refurbished phones count toward ownership in the middle tiers.
4. **Steps:**
   - Total households.
   - Split them into tiers.
   - Phone users per household in each tier.
   - iPhone penetration in each tier.
   - Sum the tiers.
5. **Drivers:**
   - **Total households:** 300 to 320m. (a) Census projections, and household-survey programmes such as NFHS and PLFS.
   - **Tier split and per-tier inputs:**

     | Tier | Share of households | Phone users per household | iPhone penetration |
     |---|---|---|---|
     | Affluent | 3% | 3 | 50% to 70% |
     | Upper-middle | 7% | 3 | 15% to 30% |
     | Aspiring middle | 20% | 2.5 | 3% to 8% |
     | Rest | 70% | about 2 | 0.2% to 1% |

     The tier split is (a) published by income-pyramid studies such as PRICE's ICE 360 survey, roughly every 2 to 3 years, though tier definitions vary. Users per household and penetration are (b) pure assumptions.
6. **Calculation:** using 310m households.
   - Affluent: 9.3m households x 3 = 28m people, x 60% = 16.7m.
   - Upper-middle: 21.7m x 3 = 65m, x 22% = 14.3m.
   - Aspiring middle: 62m x 2.5 = 155m, x 5% = 7.8m.
   - Rest: 217m x 2 = 434m, x 0.5% = 2.2m.
   - Central total about **41m**. Low about 25m, high about 62m.
7. **Catches:**
   - Income-survey data under-reports the top tier.
   - Small changes in the affluent tier's size move the answer the most.
8. **Sanity check:** The affluent and upper-middle tiers together should hold about 70% to 80% of iPhone users, consistent with iPhone's premium positioning.
9. **Common mistakes:**
   - Applying one flat penetration rate to everyone.
   - Treating households as users.
   - Ignoring EMI purchases, cashback offers and the refurbished channel that pull penetration into the middle class.

**THINGS I NEEDED TO RECORD THAT DON'T FIT THE HEADINGS ABOVE**

- **Wording ambiguity:**
  - "Users" could mean people, active devices or official owners. The file should fix it as people with an active iPhone.
  - "Right now" should be stored with the date (October 2026). The figure grows about 15% to 20% a year, so it goes stale fast.
- **Segment splits to store:**
  - Urban versus rural: about 85% to 90% urban.
  - Metro concentration: the top 8 cities likely hold 50% or more.
  - New versus refurbished or secondhand.
  - Official versus grey market.
- **Defensibility:**
  - Approach 2 is the most defensible because it rests on hard, published shipment figures. Its weak point is the survival assumptions.
  - Approach 1 is quickest in an interview, but the iOS share driver is noisy.
  - Approach 3 shows the most business insight (income concentration) but uses the most assumptions.
  - The strongest answer opens with Approach 1, cross-checks with Approach 2, and explains any gap. Approach 2 usually comes out higher because it captures secondhand phones and devices that browse little.
- **Answer band:**
  - Reasonable: 35m to 60m, with 40m to 55m the strong band.
  - Below 20m or above 80m means a structural error, such as using connections as the base or skipping retirement.
- **Growth context worth stating:** iPhone's share of India's new smartphone sales by value is around 20% to 25%, far above its unit share, which explains why it feels more visible than 4% to 6% suggests.
- **Interviewer probes to anticipate:**
  - Effect of local manufacturing on prices.
  - How fast the installed base grows each year.
  - Why web-traffic share differs from installed-base share.
